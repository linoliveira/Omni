//-------------- Main View where the various screens are defined and swapped -------------------------------//
enyo.kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: "moon.Panels", arrangerKind: "CardSlideInArranger", classes: "enyo-fit",
			components:
			[

//-------------- Screen definition -------------------------------//

	            {name: "checkinscreen", kind: "checkin_screen"},
	
	            {name: "maincreen", kind: "main_screen"},
				
				{name: "roomscreen", kind: "room_screen"},
				
				{name: "restaurantscreen", kind: "restaurant_screen"},
				
				{name: "foodinfoscreen", kind: "foodinfo_screen", propertyOne: null, propertyTwo:null, propertyThree:null, propertyFour:null, propertyFive:null, propertySix:null},
				
				{name: "checkoutscreen", kind: "checkout_screen"},
				
				{name: "mediabrowserscreen", kind: "mediabrowser_screen"},
				
				{name: "explorescreen", kind: "explore_screen"},
				
				{name: "promotionscreen", kind: "promotion_screen"},
				
				{name: "eventscreen", kind: "event_screen"},
				
				{name: "activityscreen", kind: "activity_screen"},
			]
		},
		
//-------------- Recommendation Popup -------------------------------//
		
	 	{name: "recommendationPopup", kind: "moon.Popup", showCloseButton: true,
	 		components:
	 			[
	 			 	{name: "recommendationName", content: null},
	 			 	{kind: "moon.Divider", content:"Description", style: "margin-top: 20px;"},
	 			 	{name: "recommendationDescription", content: null, style: "font-size: 16pt; margin-left: 10px;"}
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
	roomID: 1,
	clientID: null,
	periodicRecommendation: null,
	
	// App Initialization
	create: enyo.inherit(function(sup)
	{
		return function()
		{
			sup.apply(this, arguments);
			
			// save JQuery reference
			this.jQuery = $.noConflict(true);
		};
	}),
	
	// After DOM is rendered
	rendered: function ()
	{
		this.inherited(arguments);
		
		// set the recommendation timer
		this.periodicRecommendation = setInterval(function(self) {self.recommend();}, 120000, this);
	},
	
	// recommendation function
	recommend: function()
	{
		var recommendation = this.webService("recommendation/");
		var message = "Hey! you might want to check " + recommendation.name;
		var description = recommendation.description;
		
		this.$.recommendationName.setContent(message);
		this.$.recommendationDescription.setContent(description);
		
		this.$.recommendationPopup.show();
	},
	
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
		this.$.checkoutscreen.rebuildExpenditures();
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
	
	loadActivityScreen: function()
	{
		this.$.panels.setIndex(10);
	},
	
	//	Web Services
	//	Section
	
	// Call a webservice from the backend
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
});
