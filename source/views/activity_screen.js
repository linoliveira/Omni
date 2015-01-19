//-------------- Activity Screen -------------------//
enyo.kind(
{
	name: "activity_screen",
	kind: "moon.Panels",
	arrangerKind: "CardSlideInArranger",
	components:
	[
	 	{kind: "activity_main_screen"}
	],
	
	loadMainScreen: function()
	{
		this.setIndex(0);
	}
}
);

//-------------- Main Activity Screen -------------------//
enyo.kind(
{
	name: "activity_main_screen",
	kind: "FittableRows",
	classes: "moon enyo-fit",
	style: "background-image: url('assets/activities/background.png');",
	components:
	[
//-------------- Header Buttons -------------------//
	 	{
	 		kind: "FittableColumns",
	 		style: "margin-top: 250px;",
	 		components:
	 		[
	 		 	{fit: true},
	 		 	{kind: "moon.Button", content: "back", ontap: "backTapped"},
		 	 	{kind: "enyo.Group", style: "",
		 			components: [
		 				{kind: "moon.ToggleButton", content: "sports", onContent: "", offContent: "", labelSeparator: "", active: true},
		 				{kind: "moon.ToggleButton",  content: "fitness", onContent: "", offContent: "", labelSeparator: ""},
		 				{kind: "moon.ToggleButton",  content: "massage", onContent: "", offContent: "", labelSeparator: ""},
		 				{kind: "moon.ToggleButton",  content: "haircut", onContent: "", offContent: "", labelSeparator: ""},
		 				{kind: "moon.ToggleButton",  content: "entertainment", onContent: "", offContent: "", labelSeparator: ""}
		 			],
		 			onActivate: "categoryChanged"
		 		},
	 		]
	 	},

//-------------- Body -------------------//
	 	
		{kind: "FittableColumns", fit: true, style: "margin-top: 45px;",
			components:
			[
//-------------- Activities -------------------//
				{name: "activityList", kind: "enyo.Group", classes: "moon-6h",
					style: "background-color:rgba(255, 2555, 255, 0.4); margin-right: 20px;",
					components:
					[
					 	// activities
					],
					onActivate: "changeListing"
				},
				{
					kind: "FittableRows",
					style: "background-color:rgba(255, 255, 255, 0.8); padding: 20px;", fit: true,
					components:
					[
//-------------- Text -------------------//
						{kind: "moon.Scroller", fit: true,
							components:
							[
								{name: "activityInfo", content: "TEXT !"}
							]
						},
					 	{kind: "FittableColumns",
							components:
							[
//-------------- Scheduling Controls -------------------//
							 	{
							 		kind: "FittableColumns",
							 		style: "padding-top: 50px;",
							 		components:
							 		[
									 	{content: "Date:", style: "padding-top: 8px; margin-left: 30px;"},
									 	{name: "dateSlot", kind:"moon.SimplePicker", style: "margin-left: 20px;",
									 		components:
									 		[
									 		 	{content: "Today"},
									 		 	{content: "Tomorow"},
									 		 	{content: "After Tomorow"}
		                           			]
									 	},
									 	{name: "timeSlot", kind:"moon.SimplePicker", onChange:"timeSlotChanged", style: "margin-left: 20px;",
									 		components:
									 		[
									 		 	// TIME SLOTS FROM SERVER
		                           			]
									 	},
							 		]
							 	},
							 	{content: "People:", style: "padding-top: 57px; margin-left: 30px;"},
							 	{name: "quantity", kind: "moon.IntegerPicker", value: 1, min: 1, max: 1, onChange: "changed", style: "margin-left: 20px;"},
							 	{
							 		components:
							 		[
								 		{kind: "moon.Button", content: "schedule", style: "margin-top: 30px; margin-left: 50px;", ontap: "scheduleTapped"}
							 		]
							 	},
							]
					 	}
					]
				},
//-------------- Confirmation Popups -------------------//
				{name: "confirmPopup", kind: "moon.Popup", showCloseButton: true,
 			 		components:
 			 			[
 			 			 	{name: "confirmTitle", content: null, style: "margin-bottom: 20px;"},
 			 			 	{kind: "moon.Button", content: "Confirm", ontap: "confirmTapped"},
 			 			 	{kind: "moon.Button", content: "Cancel", ontap: "cancelTapped"}
 			 			]
 			 	},
 			 	{name: "ackPopup", kind: "moon.Popup", showCloseButton: true,
 			 		components:
 			 			[
 			 			 	{content: "Scheduled!"}
 			 			]
 			 	}
			]
		}
	],
	
	rendered: function()
	{
		this.inherited(arguments);
	},
	
	backTapped: function(inSender, inEvent)
	{
		this.owner.owner.loadMainScreen();
	},
	
	// Header Controls Selected
	categoryChanged: function(inSender, inEvent)
	{
		if (inEvent.originator.getActive())
		{
			this.listActivities(inEvent.originator.content);
		}
	},
	
	// List Activities Of A Selected Category
	listActivities: function(category)
	{
		this.$.activityList.destroyComponents();
		var serverRecords = this.webService("service/?type=" + category);
		
		for(var i = 0; i < serverRecords.length; ++i)
		{
			this.$.activityList.createComponent(
				{
					kind: "moon.SelectableItem", serviceID: serverRecords[i].id, promotionID: serverRecords[i].promotion_id, description: serverRecords[i].description, content: serverRecords[i].name,
					style: "color: white;", selected: i == 0
				}
			).render();
		}
	},
	
	// When A Category Is Selected
	changeListing: function(inSender, inEvent)
	{
		if (inEvent.originator.getActive())
		{
			this.loadActivityInfo(inEvent.originator);
		}
	},
	
	// Load Activity Information From The Backend
	loadActivityInfo: function(activity)
	{
		this.$.activityInfo.setContent(activity.description);
		var serverRecords = this.webService("servicetimetable/?service_id=" + activity.serviceID);
		
		for(var i = 0; i < serverRecords.length; ++i)
		{
			this.$.timeSlot.createComponent({content: serverRecords[i].time, capacity: serverRecords[i].capacity}, {owner: this}).render();
		}
	},
	
	// When A Time Slot Is Changed
	timeSlotChanged: function(inSender, inEvent)
	{
		this.$.quantity.max = inEvent.originator.selected.capacity;
		this.$.quantity.setValue(1);
	},
	
	// Schedule Button Tapped - Shows Popup
	scheduleTapped: function(inSender, inEvent)
	{
		this.$.confirmTitle.setContent("Schedule " + this.$.activityList.active.content + " for " + this.$.quantity.value + " people?");
		this.$.confirmPopup.show();
	},
	
	// Confirm Popup Button Tapped
	confirmTapped: function(inSender, inEvent)
	{
		this.bookService();
		this.$.confirmPopup.hide();
		this.$.ackPopup.show();
	},
	
	// Cancel Popup Button Tapped
	cancelTapped: function(inSender, inEvent)
	{
		this.$.confirmPopup.hide();
	},
	
	// Books The Selected Service
	bookService: function()
	{
		var date = new Date();
		
		switch(this.$.dateSlot.selected.content)
		{
			case "Tomorow":
				date.setDate(date.getDate() + 1);
				break;
			case "After Tomorow":
				date.setDate(date.getDate() + 2);
				break;
		}
		
		var year = date.getUTCFullYear();
		var month = this.zero(date.getUTCMonth() + 1);
		var day = this.zero(date.getUTCDate());
		
		var time_start = year + "-" + month + "-" + day + " " + this.$.timeSlot.selected.content;
		
		var service =
		{
			client_id:		this.getClientID(),
			service_id:		this.$.activityList.active.serviceID,
			promotion_id:	this.$.activityList.active.promotionID,
			paid:			0,
			people:			this.$.quantity.value,
			time_start:		time_start
		};
		
		return this.webService("clientservice/add/", service);
	},
	
	// Helper Function
	sprintf: function()
	{
		var string			= arguments[0],
			replacements	= Array.prototype.slice.call(arguments, 1);
		
		while(replacements.length > 0) {
			string = string.replace('%s', replacements[0]);
			
			replacements.shift();
		}
		
		return string;
	},
	
	// Helper Function To Transform "1" Into "02"
	zero: function(number)
	{
		if(number < 10)
			return this.sprintf('%s%s', 0, number);
		return this.sprintf('%s', number);
	},
	
	getRoomID: function()
	{
		return this.owner.owner.roomID;
	},
	
	getClientID: function()
	{
		return this.owner.owner.clientID;
	},
	
	// Access The Main webService Function
	webService: function(URL, data)
	{
		try
		{
			return this.owner.owner.webService(URL, data);
		}
		catch(e)
		{
			console.log(e);
		}
	}
}
);
