enyo.kind(
{name: "room_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
	components:
		[
		 	{content: "Room Services", style: "font-size: 60px;"},
		 	{kind: "FittableColumns", fit: true,
		 		components:
		 			[
		 			 	{kind: "FittableRows", style: "padding: 10px;",
		 			 		components:
		 			 			[
		 			 			 	{kind: "FittableColumns",
		 			 			 		components:
		 			 			 		[
		 			 			 		 	{kind: "moon.Item", style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", ontap: "requestExtraHeaderTapped",
	 			 			 			 		components:
	 			 			 			 		[
			 			 			 			 	{kind: "FittableColumns",
			 			 			 			 		components:
			 			 			 			 		[
															{kind: "enyo.Image", style: "margin-right: 20px;", src: "http://placehold.it/150x150/505050/ffffff&text=Request"},
															{content: "Request Aditional", style: "padding-top: 70px;"}
			 			 			 			 		]
			 			 			 			 	}
	 			 			 			 		]
	 			 			 			 	}
		 			 			 		]
		 			 			 	},
		 			 			 	{name: "requestExtraContainer", kind: "FittableRows",
		 			 			 		components:
		 			 			 			[
		 			 			 			 	// requestExtraComponents
		 			 			 			]
		 			 			 	},
		 			 			 	{name: "requestExtraPopup", kind: "moon.Popup", content: "Ordered!", showCloseButton: true},
		 			 			]
		 			 	},
		 			 	{kind: "FittableRows", style: "padding: 10px;",
		 			 		components:
		 			 			[
		 			 			 	{kind: "FittableColumns",
		 			 			 		components:
		 			 			 		[
		 			 			 		 	{kind: "moon.Item", style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", ontap: "cleaningHeaderTapped",
												components:
												[
												 	{kind: "FittableColumns",
												 		components:
												 		[
													 		 {kind: "enyo.Image", style: "margin-right: 20px;", src: "http://placehold.it/150x150/505050/ffffff&text=Cleaning"},
													 		 {content: "Cleaning", style: "padding-top: 70px;"}
												 		]
												 	}
												]
											}
		 			 			 		]
		 			 			 	},
		 			 			 	{name: "cleaningContainer", kind: "FittableRows",
		 			 			 		components:
		 			 			 			[
		 			 			 			 	// cleaningComponents
		 			 			 			]
		 			 			 	}
		 			 			]
		 			 	},
		 			 	{kind: "FittableRows", style: "padding: 10px;",
		 			 		components:
		 			 			[
		 			 			 	{kind: "FittableColumns",
		 			 			 		components:
		 			 			 		[
		 			 			 		 	{kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150/505050/ffffff&text=Restaurant"},
		 			 			 		 	{content: "Restaurant Services", style: "padding-top: 90px;"}
		 			 			 		]
		 			 			 	},
		 			 			 	{kind: "FittableRows",
		 			 			 		components:
		 			 			 			[
		 			 			 			 	{kind: "moon.Button", content: "Go", ontap: "onRoomRestaurantTapped"}
		 			 			 			]
		 			 			 	}
		 			 			]
		 			 	},
		 			 	{kind: "FittableRows", style: "padding: 10px;",
		 			 		components:
		 			 			[
		 			 			 	{kind: "FittableColumns",
		 			 			 		components:
		 			 			 		[
		 			 			 		 	{kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150/505050/ffffff&text=Assistance"},
		 			 			 		 	{content: "Technical Assistance", style: "padding-top: 90px;"}
		 			 			 		]
		 			 			 	},
		 			 			 	{kind: "FittableRows",
		 			 			 		components:
		 			 			 			[
		 			 			 			 	{kind: "moon.Button", content: "Call to Room Phone", style: "display: block; margin-bottom: 50px;", ontap: "onRoomCallTapped", popup: "callPopUp"},
		 			 			 			 	{kind: "moon.Button", content: "Call to my iPhone", ontap: "onRoomCallTapped", popup: "callPopUp"},
		 			 			 			 	{name: "callPopUp", kind: "moon.Popup", content: "Calling...", showCloseButton: true},
		 			 			 			]
		 			 			 	}
		 			 			]
		 			 	}
		 			]
		 	}
		],
		
		//Room Services Request Extra Header Tapped
		requestExtraHeaderTapped: function(inSender, inEvent)
		{
			this.createNewRequestExtra("Pillow");
			this.createNewRequestExtra("Towel");
			this.createNewRequestExtra("Blanket");
		},
		
		createNewRequestExtra: function(name)
		{
			this.$.requestExtraContainer.createComponent(
					{kind: "moon.Item", style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", ontap: "requestExtraTapped", popup: "requestExtraPopup",
						components:
		 			 		[
				 			 	{kind: "FittableColumns",
				 			 		components:
				 			 		[
										{kind: "enyo.Image", src: "http://placehold.it/100x100/505050/ffffff&text=" + name},
										{content: name, style: "padding-top: 35px; padding-left: 20px;"}
				 			 		]
				 			 	}
		 			 		]
			 		}, {owner: this}
				).render();
		},
		
		//Room Services Request Extra Tapped
		requestExtraTapped: function(inSender)
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
		
		// Room Services Cleaning Header Tapped
		cleaningHeaderTapped: function()
		{
			this.$.cleaningContainer.createComponent(
				{components:
					[
					 	{content: "Request Extra Room Cleaning"},
					 	{kind: "moon.DatePicker", name:"picker", noneText: "Pick a Date", content: "Date"},
					 	{kind: "moon.TimePicker", name: "pickerTime", noneText: "Pick a Time", content: "Time", meridiemEnable: false},
					 	{kind: "moon.IconButton", icon: "check", small: true, ontap: "onRoomCleanTapped", popup: "cleaningPopUp"},
					 	{name: "cleaningPopUp", kind: "moon.Popup", content: "Cleaning Scheduled!", showCloseButton: true}
				 	],
				 	style: "width: 400px;"
				}, {owner: this}
			).render();
		},
		
		// Room Services Confirm Cleaning Tapped
		onRoomCleanTapped: function(inSender)
		{
			// cleaningDate
			// cleaningTime
			//var date = this.$.cleaningDate.value;
			//year = this.$.cleaningDate.minYear + date.getYear();
			//console.log(this.$.cleaningDate.minYear + date.getYear());
			
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
		
		// Room Services button tap to Restaurant Services
		onRoomRestaurantTapped: function(inSender, inEvent)
		{
			this.owner.loadRestaurantScreen();
			return true;
		},
		
		// Room Services Call Pop Up
		onRoomCallTapped: function(inSender)
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
		}
}
);