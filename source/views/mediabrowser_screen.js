//-------------- Media Browser Screen -------------------//
enyo.kind(
{
	name: "mediabrowser_screen",
	kind: "moon.Panels",
	arrangerKind: "CardSlideInArranger",
	components:
	[
//-------------- Sub-Screen Definitions -------------------//
	 	{kind: "mediabrowser_main_screen"},
	 	{name: "photos", kind: "mediabrowser_photo_screen"},
	 	{name: "movie", kind: "mediabrowser_movie_screen"}
	],
	
	loadMainScreen: function()
	{
		this.setIndex(0);
	},
	
	loadPhotoScreen: function(photosUrls, index)
	{
		this.$.photos.setPhotos(photosUrls, index);
		this.setIndex(1);
	},
	
	loadMovieScreen: function(source)
	{
		this.$.movie.load(source);
		this.setIndex(2);
	}
}		
);

//-------------- Main Screen -------------------//
enyo.kind(
{
	name: "mediabrowser_main_screen",
	kind: "FittableRows",
	classes: "moon enyo-fit",
	style: "background-image: url('assets/media_browser/background.png');",
	components:
	[
	 	{
	 		kind: "FittableColumns",
	 		style: "margin-top: 250px;",
	 		components:
	 		[
//-------------- Header Controls -------------------//
	 		 	{fit: true},
	 		 	{kind: "moon.Button", content: "back", ontap: "backTapped"},
		 	 	{name: "mediaType", kind: "enyo.Group", style: "",
		 			components: [
		 				{kind: "moon.ToggleButton", content: "music", onContent: "", offContent: "", labelSeparator: "", active: true},
		 				{kind: "moon.ToggleButton",  content: "photo", onContent: "", offContent: "", labelSeparator: ""},
		 				{kind: "moon.ToggleButton",  content: "movie", onContent: "", offContent: "", labelSeparator: ""}
		 			],
		 			onActivate: "changeMediaType"
		 		},
	 		]
	 	},

//-------------- Audio Control -------------------//
		{name: "audio", kind: "enyo.Audio"},
		
		{kind: "FittableColumns", fit: true, style: "margin-top: 45px;",
			components:
			[
//-------------- Category Listing -------------------//
				{name: "category", kind: "enyo.Group", classes: "moon-6h",
					style: "background-color:rgba(255, 2555, 255, 0.4); margin-right: 20px;",
					components:
					[
					 	
					],
					onActivate: "changeListing"
				},
//-------------- Grid To Display Items -------------------//
				{name: "gridList", fit: true, spacing: 20, minWidth: 180, minHeight: 270, kind: "moon.DataGridList",
					scrollerOptions: { kind: "moon.Scroller", vertical:"scroll", horizontal: "hidden", spotlightPagingControls: true },
					ontap: "gridItemTapped",
					style: "background-color:rgba(255, 255, 255, 0.8);",
					components:
					[
					 	{ kind: "GridItem" }
					]
				}
			]
		},
	],
	
	// Bindings To Update Changes
	bindings:
	[
		{from: ".collection", to: ".$.dataList.collection"},
		{from: ".collection", to: ".$.gridList.collection"},
		{from: ".$.selectionToggle.value", to:".$.gridList.selection"},
		{from: ".$.multiSelectToggle.value", to:".$.gridList.multipleSelection"}
	],
	
	rendered: function()
	{
		this.inherited(arguments);
	},
	
	create: function ()
	{
		this.inherited(arguments);
		
		// Set The Collection To Fire The Binding And Add To The List
		this.set("collection", new enyo.Collection());
	},
	
	// Back Button Tapped
	backTapped: function(inSender, inEvent)
	{
		this.owner.owner.loadMainScreen();
	},
	
	// Header Option Selected
	changeMediaType: function(inSender, inEvent)
	{
		if (inEvent.originator.getActive())
		{
			this.changeCaterogy(inEvent.originator.content);
		}
	},
	
	// Refreshes The Categories
	changeCaterogy: function(mediaType)
	{
		this.$.category.destroyComponents();
		var serverRecords = null;
		
		switch(mediaType)
		{
			case "music":
				serverRecords = this.webService("music/genre/");
				break;
			case "photo":
				serverRecords = this.webService("photo/album/");
				break;
			case "movie":
				serverRecords = this.webService("movie/category/");
				break;
			default:
				return;
		}
		
		for(var i = 0; i < serverRecords.length; ++i)
		{
			this.$.category.createComponent(
				{
					kind: "moon.SelectableItem", categoryID: serverRecords[i].id, content: serverRecords[i].name,
					style: "color: white;", selected: i == 0
				}
			).render();
		}
	},
	
	// Updates Grid Items
	changeListing: function(inSender, inEvent)
	{
		if (inEvent.originator.getActive())
		{
			this.refreshItems();
		}
	},
	
	// Delete Everything On The Grid And Re-Add The Items
	refreshItems: function (inSender, inEvent)
	{
		var collection = this.get("collection");
		collection.remove(collection.records);
		collection.add(this.generateRecords(this.$.mediaType.active.getContent()));
	},
	
	photoUrls: [],
	
	// Generate The Grid Items
	generateRecords: function (category)
	{
		this.photoUrls = [];
		var records = [];
		var serverRecords = null;
		
		if(category == "music")
		{
			serverRecords = this.webService("music/?" + "genre_id=" + this.$.category.active.categoryID);
		}
		else if(category == "photo")
		{
			serverRecords = this.webService("photo/?" + "album_id=" + this.$.category.active.categoryID);
		}
		else
		{
			serverRecords = this.webService("movie/?" + "category_id=" + this.$.category.active.categoryID);
		}
		
		if(serverRecords != null)
		{
			for (var i = 0; i < serverRecords.length; ++i)
			{
				records.push(
						this.createRecord(
							category == "music" ? serverRecords[i].artist : serverRecords[i].name,
							category == "music" ? serverRecords[i].name : "",
							"http://89.109.87.69/" + serverRecords[i].filename,
							"http://89.109.87.69/" + serverRecords[i].thumbnail
						)
				);
				
				if(category == "photo")
				{
					this.photoUrls.push("http://89.109.87.69/" + serverRecords[i].filename);
				}
			}
		}
		
		return records;
	},
	
	// Creates a Grid Item
	createRecord: function(title, subText, file, thumbnail)
	{
		return {
			text: title,
			subText: subText,
			url: thumbnail,//"http://placehold.it/300x300/" + Math.floor(Math.random()*0x1000000).toString(16) + "/ffffff&text=",
			file: file
		};
	},
	
	// When a Grid Item Is Tapped - Reproduces Audio / Loads Photos or Movies
	gridItemTapped: function(inSender, inEvent)
	{
		if(inEvent.originator.name.indexOf("gridItem") > -1)
		{
			switch(this.$.mediaType.active.getContent())
			{
				case "music":
				{
					if(this.$.audio.getPaused())
					{
						this.loadAudio(inEvent.originator.file);
					}
					else
					{
						this.$.audio.pause();
					}
					break;
				}
				case "photo":
				{
					this.owner.loadPhotoScreen(this.photoUrls, this.photoUrls.indexOf(inEvent.originator.file));
					break;
				}
				case "movie":
				{
					this.owner.loadMovieScreen(inEvent.originator.file);
					break;
				}
				default:
					return;
			}
		}
	},
	
	// Loads A Selected Audio
	loadAudio: function(source)
	{
		this.unloadAudio();
		this.$.audio.setSrc(source);
		this.$.audio.play();
	},
	
	// Unloads Audio
	unloadAudio: function()
	{
		this.$.audio.pause();
		this.$.audio.setSrc("");
	},
	
	getRoomID: function()
	{
		return this.owner.owner.roomID;
	},
	
	// Calls The Main webService Function
	webService: function(URL, data)
	{
		try
		{
			return this.owner.owner.webService(URL, data);
		}
		catch(e)
		{
			console.log(e);
		}
	}
}
);

//-------------- Grid Item Definition -------------------//
enyo.kind({
	name: "GridItem",
	kind: "moon.GridListImageItem",
	mixins: ["moon.SelectionOverlaySupport"],
	selectionOverlayVerticalOffset: 35,
	subCaption: "Sub Caption",
	bindings: [
		{from: ".model.text", to: ".caption"},
		{from: ".model.subText", to: ".subCaption"},
		{from: ".model.url", to: ".source"},
		{from: ".model.file", to: ".file"}
	]
});


//-------------- Photo Screen -------------------//
enyo.kind({
	name: "mediabrowser_photo_screen",
	kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
	components:
	[
		{
//-------------- Image -------------------//
			name:'photos', kind:'ImageCarousel',  arrangerKind: "CardArranger",
			classes: "enyo-fit", style: "z-index: -1;"
		},
		{fit: true},
		{
			kind: "FittableColumns", style: "height: 80px;",
			components:
			[
//-------------- Controls -------------------//
			 	{kind: "moon.Button", content: "Back", style: "margin-left: 740px;", ontap: "backTapped"},
			 	{
			 		style: "margin-left: 50px;",
			 		components:
			 		[
					 	{kind: "moon.IconButton", icon: "arrowlargeleft", style: "margin-top: 10px;", ontap: "previousPhotoTappted"},
					 	{kind: "moon.IconButton", icon: "arrowlargeright", style: "margin-top: 10px;", ontap: "nextPhotoTappted"},
			 		]
			 	}
			]
		}
	],
	
	setPhotos: function(urls, index)
	{
		this.$.photos.setImages(urls);
		this.$.photos.setIndex(index);
	},
	
	previousPhotoTappted: function(inSender, inEvent)
	{
		this.$.photos.previous();
	},
	
	nextPhotoTappted: function(inSender, inEvent)
	{
		this.$.photos.next();
	},
	
	backTapped: function(inSender, inEvent)
	{
		this.owner.loadMainScreen();
	}
});

//-------------- Movie Screen -------------------//
enyo.kind({
	name: "mediabrowser_movie_screen",
	classes: "moon enyo-fit enyo-unselectable moon-video-player-sample",
	fit: true,
	components: [
//-------------- Video Player -------------------//
		{
			name: "player",
			kind: "moon.VideoPlayer",
			autoplay: true,
			infoComponents:
			[
				{kind: "moon.VideoInfoBackground", orient: "right", background: true, components: [
					{kind:"moon.Clock"}
				]}
			],
			components:
			[
			 	{kind: "moon.Button", content: "Back", ontap: "backTapped"}
			]
		},
	],
	bindings: [
		{from:".$.player.disablePlaybackControls", to:".$.controlsToggleButton.value", oneWay:false},
		{from:".$.player.showFFRewindControls", to:".$.ffrewToggleButton.value", oneWay:false}
	],
	
	// Back Button Tapped
	backTapped: function(inSender, inEvent)
	{
		this.unload();
		this.owner.loadMainScreen();
	},
	
	unload: function() {
		this.$.player.unload();
	},
	
	load: function(source) {
		this.$.player.unload();
		this.$.player.setSrc(source);
	}
});
