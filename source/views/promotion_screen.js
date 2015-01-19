//-------------- Promotion Screen -------------------//
enyo.kind({
	name: "promotion_screen",
	kind: "FittableRows",
	style: "padding: 20px; background-color: #44b7e2;",
	components:
	[
//-------------- Title And Image -------------------//
	 	{name: "promotionName", content: "PROMOTION", style: "font-size: 40pt; margin-bottom: 20px; margin-left: 160px; color: white;"},
	 	{name: "image", kind: "ImageCarousel", arrangerKind: "CardArranger", fit: true},
		{
			kind: "FittableColumns", style: "height: 80px;",
			components:
			[
//-------------- Back And Next / Previous Controls -------------------//
			 	{kind: "moon.Button", content: "Back", style: "margin-left: 740px;", ontap: "backTapped"},
			 	{
			 		style: "margin-left: 50px;",
			 		components:
			 		[
					 	{kind: "moon.IconButton", icon: "arrowlargeleft", style: "margin-top: 10px;", ontap: "previousImageTappted"},
					 	{kind: "moon.IconButton", icon: "arrowlargeright", style: "margin-top: 10px;", ontap: "nextImageTappted"},
			 		]
			 	}
			]
		}
	],
	
	// Promotion Information
	promotionName: [],
	promotionImage: [],
	
	create: function ()
	{
		this.inherited(arguments);

		// To Prevent Errors
		this.$.image.setImages(["http://placehold.it/1920x1080/95a5a6/ffffff&text=Promotion"]);
	},
	
	// App Initialization
	rendered: function()
	{
		this.inherited(arguments);
		
		this.loadInfo();
		this.setImages();
		this.initialize();
	},
	
	// Set The Promotion Title
	initialize: function()
	{
		this.$.promotionName.setContent(this.promotionName[0]);
	},
	
	// Load Information From The Backend
	loadInfo: function()
	{
		var serverRecords = this.webService("promotion/");
		var server = "http://89.109.87.69/";
		
		for(var i = 0; i < serverRecords.length; ++i)
		{
			this.promotionName.push(serverRecords[i].name);
			this.promotionImage.push(server + serverRecords[i].filename);
		}
	},
	
	// Sets the Carousel Images
	setImages: function()
	{
		this.$.image.setImages(this.promotionImage);
	},
	
	// Previous Control Tapped
	previousImageTappted: function(inSender, inEvent)
	{
		this.$.image.previous();
		this.$.promotionName.setContent(this.promotionName[this.$.image.getIndex()]);
	},
	
	// Next Control Tapped
	nextImageTappted: function(inSender, inEvent)
	{
		this.$.image.next();
		this.$.promotionName.setContent(this.promotionName[this.$.image.getIndex()]);
	},
	
	// Back Control Tapped
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