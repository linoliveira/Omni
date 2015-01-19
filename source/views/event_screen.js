//-------------- Event Screen -------------------//
enyo.kind({
	name: "event_screen",
	kind: "FittableRows",
	style: "padding: 20px; background-color: #44b7e2;",
	components:
	[
	 	{content: "Events", style: "font-size: 40pt; margin-bottom: 20px; color: white;"},
	 	{kind: "FittableColumns", fit: true,
	 		style: "margin-bottom: 30px;",
	 		components:
	 		[
//-------------- Large Image -------------------//
				{name: "image", kind: "ImageCarousel", arrangerKind: "CardArranger", style: "width: 1200px; height: 675px;"},
				{kind: "FittableRows", fit: true,
					style: "background-color:rgba(255, 255, 255, 0.5); padding-top: 20px; padding-bottom: 20px; padding-left: 20px; margin-top: 200px;",
					components:
					[
//-------------- Event Information -------------------//
					 	{name: "eventName", content: "Event Name", style: "margin-bottom: 20px; color: white; font-size: 40pt;"},
						{name: "eventDate", content: "Date: 2015-01-18", style: "color: white;"},
						{kind: "moon.Scroller",
							components:
							[
								{name: "text", style: "color: white;", content: "TEXT !", fit: true}
							]
						}
					]
				},
	 		]
	 	},
	 	{
	 		kind: "FittableColumns",
	 		style: "",
	 		components:
	 		[
	 		 	{
	 		 		components:
	 		 		[
//-------------- Back Button -------------------//
	 		 		 	{kind: "moon.Button", content: "back", ontap: "backTapped", style: "height: 170px;"},
	 		 		]
	 		 	},
		 	 	{kind: "moon.Scroller", vertical: "hidden", spotlight: "container", fit: true,
	 		 		style:"white-space: nowrap; height: 250px; margin-left: 20px;",
					components:
					[
//-------------- Bottom Slider With The Thumbnails -------------------//
					 	{name: "slider", kind: "enyo.Repeater", count: "7", onSetupItem: "setImageSource",
							components:
							[
				  				{kind: "moon.Item", style:"display: inline-block; padding: 0px;",
				  					onSpotlightFocused: "onOptionFocused", ontap: "onOptionMenuTapped",
				  					components:
				  						[
				  						 	{kind: "enyo.Image"}
				  						]
				  				}
							]
						}
				 	]
				}
	 		]
	 	}
	],
	
	// Vars To Store Event Information
	eventName: [],
	eventDescription: [],
	eventDate: [],
	eventImage: [],
	eventThumbnail: [],
	
	create: function ()
	{
		this.inherited(arguments);

		// To Prevent Errors
		this.$.image.setImages(["http://placehold.it/1920x1080/95a5a6/ffffff&text=Explore+Hotel"]);
	},
	
	// Initialize The App
	rendered: function()
	{
		this.inherited(arguments);
		
		this.loadInfo();
		this.setImages();
		this.$.slider.setCount(this.eventThumbnail.length);
		this.initialize();
	},
	
	// Set Information Of The First Event On The Interface
	initialize: function()
	{
		this.$.eventName.setContent(this.eventName[0]);
		this.$.eventDate.setContent(this.eventDate[0]);
		this.$.text.setContent(this.eventDescription[0]);
	},
	
	// Load Information From The Backend
	loadInfo: function()
	{
		var serverRecords = this.webService("event/");
		var server = "http://89.109.87.69/";
		
		for(var i = 0; i < serverRecords.length; ++i)
		{
			this.eventName.push(serverRecords[i].name);
			this.eventDescription.push(serverRecords[i].description);
			this.eventDate.push(serverRecords[i].date);
			this.eventImage.push(server + serverRecords[i].filename);
			this.eventThumbnail.push(server + serverRecords[i].thumbnail);
		}
	},
	
	// Set The Images Of The Carousel
	setImages: function()
	{
		this.$.image.setImages(this.eventImage);
	},
	
	// Set The Slider Thumbnail Images
	setImageSource: function(inSender, inEvent)
	{
		if(this.eventThumbnail != null)
		{
		    var index = inEvent.index;
		    var item = inEvent.item;		    
		   
		    item.$.image.setSrc(this.eventThumbnail[index]);
		    return true;
		}
		return false;
	},
	
	// When A Thumbnail Is Focused - Loads Associated Information To The Interface
	onOptionFocused: function(oSender, oEvent)
	{
		this.$.image.setIndex(oEvent.index);
		this.$.eventName.setContent(this.eventName[oEvent.index]);
		this.$.eventDate.setContent(this.eventDate[oEvent.index]);
		this.$.text.setContent(this.eventDescription[oEvent.index]);
	},
	
	// Back Button Tapped
	backTapped: function(inSender, inEvent)
	{
		this.owner.loadMainScreen();
	},
	
	// Calls The Main webService Function
	webService: function(URL, data)
	{
		try
		{
			return this.owner.webService(URL, data);
		}
		catch(e)
		{
			console.log(e);
		}
	}

});