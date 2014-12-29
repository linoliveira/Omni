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
		 			 			 	{name: "requestExtraPopup", kind: "moon.Popup", showCloseButton: true,
		 			 			 		components:
		 			 			 			[
		 			 			 			 	{name: "extraPopupTitle", kind: "moon.Divider", content: "title"},
					                        	{name: "acceptExtraButton", kind: "moon.Button", serviceID: null, serviceName: null, content: "Yes", ontap: "onAcceptExtraTapped"},
					                        	{kind: "moon.Button", content: "No", ontap: "onCancelExtraTapped"}
		 			 			 			]
		 			 			 	},
		 			 			 	{name: "confirmExtraPopup", kind: "moon.Popup", showCloseButton: true,
		 			 			 		components:
		 			 			 			[
		 			 			 			 	{name: "confirmExtraTitle", content: null}
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
		 			 			 			 	{name: "callPopUp", kind: "moon.Popup", showCloseButton: true,
		 			 								components:
		 			 								[
		 			 									{name: "callPopupTitle", kind: "moon.Divider", content: "Request Technical Assistance?"},
		 			 									{name: "acceptCallButton", kind: "moon.Button", content: "Yes", ontap: "onAcceptCallTapped"},
		 			 									{kind: "moon.Button", content: "No", ontap: "onCancelCallTapped"}
		 			 								]
		 			 							},
		 			 			 			 	{name: "confirmCallPopup", kind: "moon.Popup", showCloseButton: true,
		 			 			 			 		components:
		 			 			 			 			[
		 			 			 			 			 	{name: "confirmCallTitle", content: null}
		 			 			 			 			]
		 			 			 			 	}
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
			//console.log(this.owner.jQuery);
			var dis = this;
			
			var a = this.getExtraServices();
			a.forEach(function(entry) {
			    //console.log(this);
				dis.createNewRequestExtra(entry.id, entry.name);
			});
		},
		
		getExtraServices: function()
		{
			var obj = null;
			
			try
			{
				obj = this.webService("serviceitem/");
			}
			catch(e)
			{
				console.log(e);
			}
			
			return obj;
		},
		
		createNewRequestExtra: function(id, name)
		{
			this.$.requestExtraContainer.createComponent(
					{kind: "moon.Item", style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", ontap: "requestExtraTapped", popup: "requestExtraPopup",
						serviceID: id, serviceName: name,
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
			var serviceName = inSender.components[0].components[1].content;
			var serviceID = inSender.serviceID;
			
			this.$.extraPopupTitle.setContent("Order " + serviceName + "?");
			this.$.acceptExtraButton.serviceID = serviceID;
			this.$.acceptExtraButton.serviceName = serviceName;
			
			if(popUp.showing)
			{
				popUp.hide();
			}
			else
			{
				popUp.show();
			}
		},
		
		onAcceptExtraTapped: function(inSender, inEvent)
		{
			inSender.parent.parent.hide();
			
			var date = new Date().toJSON().substring(0, 19).replace("T", " ");
			
			var extra = {
					room_id: this.getRoomID(),
		            extra_room_service_id: inSender.serviceID,
		            request_date: date
			};
			
			try
			{
				this.webService("extraroomservice/add/", extra);
				this.$.confirmExtraTitle.setContent(inSender.serviceName + " ordered!");
			}
			catch(e)
			{
				console.log(e);
				this.$.confirmExtraTitle.setContent("Error!");
			}
			
			this.$.confirmExtraPopup.show();
		},
		
		onCancelExtraTapped: function(inSender, inEvent)
		{
			inSender.parent.parent.hide();
		},
		
		// Room Services Cleaning Header Tapped
		cleaningHeaderTapped: function()
		{
			this.$.cleaningContainer.createComponent(
				{components:
					[
						{name: "cleaningPicker", kind: "moon.ExpandablePicker", noneText: "Nothing Selected", content: "Cleaning Date",
							components:
							[
	     						{content: "Now"},
	     						{content: "In 1 Hour"},
	     						{content: "In 2 Hours"},
	     						{content: "In 4 Hours"},
	     						{content: "In 8 Hours"},
     						]
						},
						{kind: "moon.IconButton", icon: "check", small: true, ontap: "onRoomCleanTapped", popup: "cleaningPopUp"},
						{name: "cleaningPopUp", kind: "moon.Popup", showCloseButton: true,
							components:
							[
								{name: "cleaningPopupTitle", kind: "moon.Divider", content: "Schedule Cleaning?"},
								{name: "acceptCleaningButton", kind: "moon.Button", content: "Yes", ontap: "onAcceptCleaningTapped"},
								{kind: "moon.Button", content: "No", ontap: "onCancelCleaningTapped"}
							]
						},
		 			 	{name: "confirmCleaningPopup", kind: "moon.Popup", showCloseButton: true,
		 			 		components:
		 			 			[
		 			 			 	{name: "confirmCleaningTitle", content: null}
		 			 			]
		 			 	}
					]
				}, {owner: this}
			).render();
		},
		
		// Room Services Confirm Cleaning Tapped
		onRoomCleanTapped: function(inSender)
		{
			var hours = 0;
			
			switch(this.$.cleaningPicker.selectedIndex)
			{
				case -1:
					return;
				case 0:	// Now
					break
				case 1: // In 1 hour
					hours = 1;
					break;
				case 2:	// In 2 hours
					hours = 2;
					break;
				case 3:	// In 4 hours
					hours = 4;
					break;
				case 4:	// In 8 hours
					hours = 8;
					break;
			}
			
			var hourText = "";
			
			if(hours === 0)
			{
				hourText = "Immediately?";
			}
			else if(hours === 1)
			{
				hourText = "In 1 Hour?";
			}
			else
			{
				hourText = "In " + hours + " Hours?";
			}
			
			this.$.cleaningPopupTitle.setContent("Schedule Cleaning " + hourText + "?");
			this.$.acceptCleaningButton.incrementHours = hours;
			
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
		
		onAcceptCleaningTapped: function(inSender, inEvent)
		{
			inSender.parent.parent.hide();
			
			var date = new Date();
			date.setHours(date.getHours() + inSender.incrementHours);
			var dateString = date.toJSON().substring(0, 19).replace("T", " ");
			
			var cleaning = {
					room_id: this.getRoomID(),
		            request_date: dateString
			};
			
			try
			{
				this.webService("cleaning/add/", cleaning);
				this.$.confirmCleaningTitle.setContent("Cleaning Scheduled!");
			}
			catch(e)
			{
				console.log(e);
				this.$.confirmCleaningTitle.setContent("Error!");
			}
			
			this.$.confirmCleaningPopup.show();
		},
		
		onCancelCleaningTapped: function(inSender, inEvent)
		{
			inSender.parent.parent.hide();
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
		},
		
		onAcceptCallTapped: function(inSender, inEvent)
		{
			inSender.parent.parent.hide();
			
			var date = new Date().toJSON().substring(0, 19).replace("T", " ");
			
			var assistance = {
					room_id: this.getRoomID(),
		            request_date: date
			};
			
			try
			{
				this.webService("technical/add/", assistance);
				this.$.confirmCallTitle.setContent("We Will Assist You Shortly...");
			}
			catch(e)
			{
				console.log(e);
				this.$.confirmCallTitle.setContent("Error!");
			}
			
			this.$.confirmCallPopup.show();
		},
		
		onCancelCallTapped: function(inSender, inEvent)
		{
			inSender.parent.parent.hide();
		},
		
		getRoomID: function()
		{
			return this.owner.roomID;
		},
		
		webService: function(URL, data)
		{
			return this.owner.webService(URL, data);
		}
}
);