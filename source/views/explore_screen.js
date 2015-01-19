//-------------- Explore Hotel -------------------//
enyo.kind({
	name: "explore_screen",
	kind: "FittableRows",
	style: "padding: 20px; background-color: #44b7e2;",
	components:
	[
//-------------- Title -------------------//
	 	{content: "EXPLORE HOTEL", style: "font-size: 40pt; margin-bottom: 20px; color: white;"},
	 	{kind: "FittableColumns", fit: true,
	 		style: "margin-bottom: 30px;",
	 		components:
	 		[
//-------------- Image And Description -------------------//
				{name: "image", kind: "ImageCarousel", arrangerKind: "CardArranger", style: "width: 1200px; height: 675px;"},
				{kind: "FittableRows", fit: true,
					style: "background-color:rgba(255, 255, 255, 0.5); padding-top: 20px; padding-bottom: 20px; padding-left: 20px; margin-top: 200px;",
					components:
					[
					 	{name: "serviceName", content: "Service Name", style: "margin-bottom: 20px; color: white; font-size: 40pt;"},
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
	 		 		 	{kind: "moon.Button", content: "back", ontap: "backTapped", style: "height: 170px;"}
	 		 		]
	 		 	},
		 	 	{kind: "moon.Scroller", vertical: "hidden", spotlight: "container", fit: true,
	 		 		style:"white-space: nowrap; height: 250px; margin-left: 20px;",
					components:
					[
//-------------- Slider With Thumbnails -------------------//
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
	
	// Required Information
	serviceName: [],
	serviceDescription: [],
	serviceImage: [],
	serviceThumbnail: [],
	
	create: function ()
	{
		this.inherited(arguments);

		// To Prevent Errors
		this.$.image.setImages(["http://placehold.it/1920x1080/95a5a6/ffffff&text=Explore+Hotel"]);
	},
	
	// App Initialization
	rendered: function()
	{
		this.inherited(arguments);
		
		this.loadInfo();
		this.setImages();
		this.$.slider.setCount(this.serviceThumbnail.length);
		this.initialize();
	},
	
	// Sets The First Interfce Information
	initialize: function()
	{
		this.$.serviceName.setContent(this.serviceName[0]);
		this.$.text.setContent(this.serviceDescription[0]);
	},
	
	// Loads Information From The Backend
	loadInfo: function()
	{
		var serverRecords = this.webService("hotel/");
		var server = "http://89.109.87.69/";
		
		for(var i = 0; i < serverRecords.length; ++i)
		{
			this.serviceName.push(serverRecords[i].name);
			this.serviceDescription.push(serverRecords[i].description);
			this.serviceImage.push(server + serverRecords[i].filename);
			this.serviceThumbnail.push(server + serverRecords[i].thumbnail);
		}
	},
	
	// Sets The Carousel Images
	setImages: function()
	{
		this.$.image.setImages(this.serviceImage);
	},
	
	// Sets The Slider Thumbnail Images
	setImageSource: function(inSender, inEvent)
	{
		if(this.serviceThumbnail != null)
		{
		    var index = inEvent.index;
		    var item = inEvent.item;		    
		   
		    item.$.image.setSrc(this.serviceThumbnail[index]);
		    return true;
		}
		return false;
	},
	
	// When A Thumbnail Is Focused - Changes Interface Information
	onOptionFocused: function(oSender, oEvent)
	{
		this.$.image.setIndex(oEvent.index);
		this.$.serviceName.setContent(this.serviceName[oEvent.index]);
		this.$.text.setContent(this.serviceDescription[oEvent.index]);
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