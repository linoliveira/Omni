enyo.kind(
{name: "foodinfo_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
	components:
		[
		 	{content: "Food Title", style: "font-size: 60px;"},
		 	{kind: "FittableColumns", fit: true,
		 		components:
		 		[
		 		 	{kind: "FittableRows", components:
		 		 		[
		 		 		 	{kind: "enyo.Image", style:"padding: 20px;",
		 		 		 		src: "http://placehold.it/800x450/505050/ffffff&text=Food+Image"
		 		 		 	},
		 		 		 	{kind: "FittableColumns", style:"padding: 20px;",
		 		 		 		components:
		 		 		 			[
		 		 		 			 	{kind: "moon.Button", content:"+"},
		 		 		 			 	{content: "1", style: "font-size: 40px; padding: 20px;"},
		 		 		 			 	{kind: "moon.Button", content: "-"},
		 		 		 			]
		 		 		 	}
		 		 		]
		 		 	},
		 		 	{kind: "moon.Scroller", style:"padding: 20px;", fit: true,
		 		 		components:
		 		 			[
		 		 			 	{kind: "moon.BodyText", style:"width: 950px;", fit: true, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
		 		 			]
		 		 	}
		 		]
		 	},
		 	{components:
		 			[
		 			 	{kind: "moon.Button", content: "Order", ontap: "onFoodInfoOrderTapped", popup: "orderPopup"},
		 			 	{kind: "moon.Button", content: "Back", ontap: "onFoodInfoBackTapped"},
		 			 	{name: "orderPopup", kind: "moon.Popup", showCloseButton: true,
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
		 			 	},
		 			 	{name: "foodInfoOrderPopUp", kind: "moon.Popup", content: "Ordered!", showCloseButton: true, onHide: "onFoodInfoOrderCompleted"}
		 			]
		 	}
		],
		
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