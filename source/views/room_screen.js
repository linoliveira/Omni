enyo.kind(
{name: "room_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
	style: "background-image: url(\"assets/room_services/background.png\");",
	components:
		[
		 	{content: "Room Services", style: "font-size: 60px; margin-left: 35px; color: white;"},
		 	{kind: "FittableColumns", fit: true,
		 		style: "padding: 0px; margin: 0px;",
		 		components:
		 			[
		 			 	{kind: "FittableRows", style: "padding: 10px;",
		 			 		components:
		 			 			[
		 			 			 	{kind: "FittableColumns", style:"background-color:rgba(0, 0, 0, 0.4); margin: 20px; margin-left: 10px; margin-bottom: 30px; padding-right: 15px;",
		 			 			 		components:
		 			 			 		[
		 			 			 		 	{kind: "enyo.Image", style: "margin-right: 10px;", src: "assets/room_services/images/request_aditional_image.png"},
											{content: "Request Aditional", style: "padding-top: 60px; color: white;"}
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
		 			 			 	{kind: "FittableColumns", style:"background-color:rgba(0, 0, 0, 0.4); margin: 20px; margin-bottom: 30px; padding-right: 50px;",
		 			 			 		components:
		 			 			 		[
		 			 			 		 	 {kind: "enyo.Image", style: "margin-right: 10px;", src: "assets/room_services/images/cleaning_image.png"},
									 		 {content: "Cleaning", style: "padding-top: 60px; color: white;"}
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
		 			 	{kind: "FittableRows", style:"padding-bottom: 10px;",
		 			 		components:
		 			 			[
		 			 			 	{kind: "FittableColumns", style:"background-color:rgba(0, 0, 0, 0.4); margin: 30px; padding-right: 10px;",
		 			 			 		components:
		 			 			 		[
		 			 			 		 	{kind: "enyo.Image", style: "margin-right: 10px;", src: "assets/room_services/images/restaurant_image.png"},
		 			 			 		 	{content: "Restaurant Services", style: "padding-top: 60px; color: white;"}
		 			 			 		]
		 			 			 	},
		 			 			 	{kind: "FittableRows",
		 			 			 		components:
		 			 			 			[
		 			 			 			 	{kind: "moon.Item", content: "Go", ontap: "onRoomRestaurantTapped",
		 			 			 			 		style: "color: white; margin-left: 30px; height: 70px; width: 295px; padding-top: 18px; padding-left: 30px; background-image: url('assets/room_services/panels/restaurant_panel.png'); background-repeat: no-repeat; background-size: auto;"
		 			 			 			 	}
		 			 			 			]
		 			 			 	}
		 			 			]
		 			 	},
		 			 	{kind: "FittableRows", style:"padding-bottom: 10px; margin: 20px;",
		 			 		components:
		 			 			[
		 			 			 	{kind: "FittableColumns", style:"background-color:rgba(0, 0, 0, 0.4); margin-bottom: 30px; margin-top: 30px; margin-left: 10px; padding-right: 10px",
		 			 			 		components:
		 			 			 		[
		 			 			 		 	{kind: "enyo.Image", style: "", src: "assets/room_services/images/tech_assistance_image.png"},
		 			 			 		 	{content: "Technical Assistance", style: "margin-left: 10px; padding-top: 60px; color: white;"}
		 			 			 		]
		 			 			 	},
		 			 			 	{kind: "FittableRows",
		 			 			 		components:
		 			 			 			[
												{kind: "moon.Item", content: "Call Me", ontap: "onRoomCallTapped", popup: "callPopUp",
													style: "color: white; margin-left: 10px; height: 70px; width: 295px; padding-top: 18px; padding-left: 30px; background-image: url('assets/room_services/panels/tech_assistance_panel.png'); background-repeat: no-repeat; background-size: auto;"
												},
		 			 			 			 	//{kind: "moon.Button", content: "Call to Room Phone", style: "display: block; margin-bottom: 50px;", ontap: "onRoomCallTapped", popup: "callPopUp"},
		 			 			 			 	//{kind: "moon.Button", content: "Call to my iPhone", ontap: "onRoomCallTapped", popup: "callPopUp"},
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
		
		// Screen Initialization
		rendered: function()
		{
		    this.inherited(arguments);
		    this.requestExtraHeaderTapped();
		    this.cleaningHeaderTapped();
		},
		
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
			imageName = "";
			switch(id)
			{
				case 3:
					imageName = "pillow_image.png";
						break;
				case 4:
					imageName = "blanket_image.png";
					break;
			}
			
			this.$.requestExtraContainer.createComponent(
					{kind: "moon.Item", /*style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;",*/ ontap: "requestExtraTapped", popup: "requestExtraPopup",
						serviceID: id, serviceName: name,
	 			 		style: "margin-left: 10px; padding: 0px; margin-top: 20px; width: 424px; height: 100px; background-image: url(\"assets/room_services/panels/request_aditional_panel.png\"); background-repeat: no-repeat; background-size: auto;",
						components:
		 			 		[
				 			 	{kind: "FittableColumns", style: "padding: 0px; margin: 0px;",
				 			 		components:
				 			 		[
										{kind: "enyo.Image", src: "assets/room_services/images/" + imageName},
										{content: name, style: "padding-top: 35px; padding-left: 20px; color: white;"}
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
				{style: "margin-left: 20px; background-image: url(\"assets/room_services/panels/cleaning_panel.png\"); background-repeat: no-repeat; background-size: auto;",
					components:
					[
						{name: "cleaningPicker", kind: "moon.ExpandablePicker", noneText: "No Date Selected", content: "Cleaning Date",
							components:
							[
	     						{content: "Now", style: "color: white"},
	     						{content: "In 1 Hour", style: "color: white"},
	     						{content: "In 2 Hours", style: "color: white"},
	     						{content: "In 4 Hours", style: "color: white"},
	     						{content: "In 8 Hours", style: "color: white"},
     						]
						},
						{kind: "moon.IconButton", icon: "check", small: true, ontap: "onRoomCleanTapped", popup: "cleaningPopUp",
							style: "color: #e5e5e5; margin: 20px; margin-left: 130px;" // #44B7E2
						},
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
			
			// Color of the picker title
			this.$.cleaningPicker.children[0].controls[0].children[0].setStyle("color: white;");
			// Color of the picker text
			this.$.cleaningPicker.children[0].controls[1].setStyle("color: white;")
			
			//console.log(this.$.cleaningPicker.children[0].controls[1].setStyle("color: white;"));
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