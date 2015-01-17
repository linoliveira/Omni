enyo.kind({

	name: "explore_screen",
	kind: "FittableRows",
	style: "padding: 20px; background-color: #44b7e2;",
	components:
	[
	 	{content: "EXPLORE HOTEL", style: "font-size: 40pt; margin-bottom: 20px; color: white;"},
	 	{kind: "FittableColumns", fit: true,
	 		style: "margin-bottom: 30px;",
	 		components:
	 		[
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
	 		 		 	{kind: "moon.Button", content: "back", ontap: "backTapped", style: "height: 170px;"}
	 		 		]
	 		 	},
		 	 	{kind: "moon.Scroller", vertical: "hidden", spotlight: "container", fit: true,
	 		 		style:"white-space: nowrap; height: 250px; margin-left: 20px;",
					components:
					[
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
	
	serviceName: [],
	serviceDescription: [],
	serviceImage: [],
	serviceThumbnail: [],
	
	create: function ()
	{
		this.inherited(arguments);

		this.$.image.setImages(["http://placehold.it/1920x1080/95a5a6/ffffff&text=Explore+Hotel"]);
	},
	
	rendered: function()
	{
		this.inherited(arguments);
		
		this.loadInfo();
		this.setImages();
		this.$.slider.setCount(this.serviceThumbnail.length);
		this.initialize();
	},
	
	initialize: function()
	{
		this.$.serviceName.setContent(this.serviceName[0]);
		this.$.text.setContent(this.serviceDescription[0]);
	},
	
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
	
	setImages: function()
	{
		this.$.image.setImages(this.serviceImage);
	},
	
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
	
	onOptionFocused: function(oSender, oEvent)
	{
		this.$.image.setIndex(oEvent.index);
		this.$.serviceName.setContent(this.serviceName[oEvent.index]);
		this.$.text.setContent(this.serviceDescription[oEvent.index]);
	},
	
	backTapped: function(inSender, inEvent)
	{
		this.owner.loadMainScreen();
	},
	
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