enyo.kind(
{name: "foodinfo_screen",  kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
	components:
		[
		 	{name:"FoodInfoTitle", content: "Food", style: "font-size: 60px;"},
		 	{kind: "FittableColumns", fit: true,
		 		components:
		 		[
		 		 	{kind: "FittableRows", components:
		 		 		[
		 		 		 	{name:"FoodImage", kind: "enyo.Image", style:"padding: 20px;",src: "assets/food_services/images/main_1"	},
		 		 			 	{name:"Description", kind: "moon.BodyText", style:"width: 950px;", fit: true, content: "xy"},
		 		]
		 	},
		 	{kind: "FittableColumns", style:"padding: 20px;",
	 		 		components:
		 			 			[
		 			 			 	{kind: "moon.IconButton", icon: "arrowsmallup", style: "margin-left: 40px;", ontap: "extraArrowUpTapped"},
			 			 		 	{name: "quantity", kind: "moon.BodyText", content: "1", style: "margin: 0px; display: inline;"},
			 			 		 	{kind: "moon.IconButton", icon: "arrowsmalldown", ontap: "ArrowDownTapped"},
	                        	{name: "acceptButton", kind: "moon.IconButton", style: "margin-left: 100px;", serviceID: null, serviceName: null, icon: "check", ontap: "onAcceptExtraTapped"},
	                        	{kind: "moon.IconButton", icon: "closex", ontap: "onCancelExtraTapped"}
		 			 			]
		 			 	},
	 		]
	 	},
		 	{components:
		 			[
		 			 	{kind: "moon.Button", content: "Order", ontap: "onFoodInfoOrderTapped"/*, popup: "orderPopup"*/},
		 			 	{kind: "moon.Button", content: "Back", ontap: "onFoodInfoBackTapped"},
		 			 	/*{name: "orderPopup", kind: "moon.Popup", showCloseButton: true,
		 			 		components:
		 			 		[
                    			{kind: "moon.Divider", content: "Order to:"},
                    			{classes: "moon-hspacing",
                    				components:
                    				[
                        				{kind: "moon.Button", content: "Room", ontap: "onFoodInfoRoomTapped", popup: "foodInfoOrderPopUp"},
                        				{kind: "moon.Button", content: "Table", ontap: "onFoodInfoTableTapped", popup: "foodInfoOrderPopUp"}
                    				]
                    			}
                			]
		 			 	}*/,
		 			 	{name: "foodInfoOrderPopUp", kind: "moon.Popup", content: "Ordered!", showCloseButton: true, onHide: "onFoodInfoOrderCompleted"}
		 			]
		 	}
		 	],
		
		rendered: function()
		{
		    this.inherited(arguments);
		    //console.log(this.propertyOne);
		    //this.setTitle();
		},
		setTitle: function()
		{
			// CONFIRM SOLUTION
			console.log(this.propertyOne);
			
		    this.$.FoodInfoTitle.setContent(this.propertyOne);
		},
		// Food Info Back Tapped
		onFoodInfoBackTapped: function()
		{
			this.owner.loadRestaurantScreen();
		},
		
		// Food Info Order Tapped
		onFoodInfoOrderTapped: function(inSender, inEvent)
		{
			var popUp = this.$[inSender.popup];
			if(popUp.showing)
				{
					popUp.hide();
				}
			else
				{
					popUp.show();
				}
		},
		
		// Food Info Order to Room
		onFoodInfoRoomTapped: function(inSender, inEvent)
		{
			this.$.orderPopup.hide();
			var popUp = this.$[inSender.popup];
			if(popUp.showing)
				{
					popUp.hide();
				}
			else
				{
					popUp.show();
				}
		},
		
		// Food Info Order to Table
		onFoodInfoTableTapped: function(inSender, inEvent)
		{
			this.$.orderPopup.hide();
			var popUp = this.$[inSender.popup];
			if(popUp.showing)
				{
					popUp.hide();
				}
			else
				{
					popUp.show();
				}
		},
		
		// Food Info Order Completed
		onFoodInfoOrderCompleted: function()
		{
			this.owner.loadRestaurantScreen();
		},
}
);