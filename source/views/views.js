enyo.kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: "moon.Panels", arrangerKind: "CardSlideInArranger", classes: "enyo-fit",
			components:
			[
	            {name: "checkinscreen", kind: "checkin_screen"},
	
	            {name: "maincreen", kind: "main_screen"},
				
				{name: "roomscreen", kind: "room_screen"},
				
				{name: "restaurantscreen", kind: "restaurant_screen"},
				
				{name: "foodinfoscreen", kind: "foodinfo_screen", propertyOne: null, propertyTwo:null, propertyThree:null, propertyFour:null, propertyFive:null},
				
				{name: "checkoutscreen", kind: "checkout_screen"},
				
				{name: "mediabrowserscreen", kind: "mediabrowser_screen"},
				
				{name: "explorescreen", kind: "explore_screen"},
				
				{name: "promotionscreen", kind: "promotion_screen"},
				
				{name: "eventscreen", kind: "event_screen"},
				
	 			{title: "Web Services Test",
	 				components:
	 				[
	 				 	{kind: "moon.Button", content: "Debug:", ontap: "debugTap"},
	 				 	{name: "debugArea", kind: "moon.BodyText", content: "Nothing yet..."}
	 				]
	 				
	 			}
			]
		}
	],
	handlers: {
		ontap: "closeModal" ,
		ontap: "next",
		ontap:"previous"
	},
	
	// PROPERTIES
	jQuery: null,
	jQuerySuccess: false,
	roomID: 1, 				// TODO: Fazer com c�digo do cliente (ask undead)
	clientID: null,
	
	// App Initialization
	create: enyo.inherit(function(sup)
	{
		return function()
		{
			sup.apply(this, arguments);
			
			this.jQuery = $.noConflict(true);
		};
	}),
	
	loadCheckinScreen: function()
	{
		this.$.panels.setIndex(0);
	},
	
	loadMainScreen: function()
	{
		this.$.panels.setIndex(1);
	},
	
	loadRoomScreen: function()
	{
		this.$.panels.setIndex(2);
	},
	
	loadRestaurantScreen: function()
	{
		this.$.panels.setIndex(3);
	},
	
	loadFoodInfoScreen: function()
	{
		this.$.panels.setIndex(4);
	},
	
	loadCheckoutScreen: function()
	{
		this.$.panels.setIndex(5);
	},
	
	loadMediaBrowserScreen: function()
	{
		this.$.panels.setIndex(6);
	},
	
	loadExploreScreen: function()
	{
		this.$.panels.setIndex(7);
	},
	
	loadPromotionScreen: function()
	{
		this.$.panels.setIndex(8);
	},
	
	loadEventScreen: function()
	{
		this.$.panels.setIndex(9);
	},
	
	//	Web Services
	//	Section
	debugTap: function(inSender, inEvent)
	{
		var obj = null;
		
		try
		{
			obj = this.webService("client/");
			console.log(obj);
		}
		catch(e)
		{
			console.log(e);
		}
		
		console.log(obj[0].name);
		/*
		try
		{
			var client = {
				birth_date	: "1990-01-01",
				name		: "Moon",
				phone		: "963825024",
				type		: "new",
				address		: null,
				email		: null
			};
			obj = this.webService("client/add/", client);
			console.log(obj);
		}
		catch(e)
		{
			console.log(e);
		}*/
	},
	
	/*
	 * Example Usage
	 * 
	 * url	: client/ (selects all) | client/?pk=id (single select) | client/add/ | client/update/?pk=id | client/delete/?pk=id
	 * data	: var client = {
				birth_date	: "1990-01-01",
				name		: "Rir",
				phone		: "963825024",
				type		: "new",
				address		: null,
				email		: null
			};
		Only provide data when client/add/ or client/update/
	 */
	
	webService: function(url, data)
	{
		if(typeof data === "undefined")
		{
			type = "get";
			data = {};
		}
		else
		{
			type = "post";
		}

		var response = null;
		
		this.jQuery.ajax({
			async	: false,
			type	: type,
			url		: "http://89.109.87.69/" + url,
			dataType: "json",
			data	: data,
			success	: function(data)
			{
				response = data;
			},
			error: function(jqXHR, textStatus, errorThrown)
			{
				response = null;
			}
		});

		this.jQuerySuccess = response !== null;
		
		if(this.jQuerySuccess === false)
		{
			throw "Server Offline";
		}
		
		if(response.code === 0)
		{	// sucesso => script
			if(response.e === null)
			{	// sucesso => database
				return response.obj;
			} else
			{	// erro => database // excep��o
				throw "Database Exception" + response.e;
			}
		} else {						// erro => script // code === 1
			throw "Bad Script: Execution Error";
		}
	}
	
	// jQuery
	/*buttonTap: function()
	{		
		var jQuery = $.noConflict(true);
		
		jQuery.ajax({
			url		: 'http://89.109.87.69/client/', // TODO: MUDAR
			dataType: 'json',
			success	: function(response) {
				console.log(response);
			}
		});
	},*/
});
