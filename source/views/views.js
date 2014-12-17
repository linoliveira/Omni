enyo.kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: "moon.Panels", arrangerKind: "CardSlideInArranger", classes: "enyo-fit", components: [
			
			{name: "mainscreen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
			components: [
			             {name:'menucarousel', kind:'ImageCarousel',  arrangerKind: "CardArranger",
			            	 classes: "enyo-fit", style: "z-index: -1;"
			             },
			             {fit: true},
			 			 {kind: 'moon.Scroller', vertical: "hidden", spotlight: "container", horizontal: "hidden",
			            	 style:"white-space: nowrap; height: 160px;",
			 				 components: [
                              			{kind: "enyo.Repeater", style: "margin-left: 225px", count:"6", onSetupItem: "setImageSource",
                              				components: [
	                              				{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",
	                              					onSpotlightFocused: "onOptionFocused", ontap: "onOptionMenuTapped",
	                              					components: [
	                              					{kind: "enyo.Image"}
	                              					]
	                              				}
                              				]}
                              			]
			             }
			]},
			
			{name: "roomscreen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
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
					 			 			 		 	{kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150/505050/ffffff&text=Request"},
					 			 			 		 	{content: "Request Aditional", style: "padding-top: 90px;"}
					 			 			 		]
					 			 			 	},
					 			 			 	{kind: "FittableRows",
					 			 			 		components:
					 			 			 			[
					 			 			 			 	{kind: "moon.Item", style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", ontap: "requestExtraTapped", popup: "requestExtraPopup",
					 			 			 			 		components:
					 			 			 			 		[

							 			 			 			 	{kind: "FittableColumns",
							 			 			 			 		components:
							 			 			 			 		[
																			{kind: "enyo.Image", src: "http://placehold.it/100x100/505050/ffffff&text=Pillow"},
																			{content: "Pillow", style: "padding-top: 35px; padding-left: 20px;"}
							 			 			 			 		]
							 			 			 			 	}
					 			 			 			 		]
					 			 			 			 	},
					 			 			 			 {kind: "moon.Item", style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", ontap: "requestExtraTapped", popup: "requestExtraPopup",
					 			 			 			 		components:
					 			 			 			 		[

							 			 			 			 	{kind: "FittableColumns",
							 			 			 			 		components:
							 			 			 			 		[
																			{kind: "enyo.Image", src: "http://placehold.it/100x100/505050/ffffff&text=Blanket"},
																			{content: "Blanket", style: "padding-top: 35px; padding-left: 20px;"}
							 			 			 			 		]
							 			 			 			 	}
					 			 			 			 		]
					 			 			 			 },
					 			 			 			 {kind: "moon.Item", style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", ontap: "requestExtraTapped", popup: "requestExtraPopup",
					 			 			 			 		components:
					 			 			 			 		[

							 			 			 			 	{kind: "FittableColumns",
							 			 			 			 		components:
							 			 			 			 		[
																			{kind: "enyo.Image", src: "http://placehold.it/100x100/505050/ffffff&text=Towel"},
																			{content: "Towel", style: "padding-top: 35px; padding-left: 20px;"}
							 			 			 			 		]
							 			 			 			 	}
					 			 			 			 		]
					 			 			 			 	},
					 			 			 			 {kind: "moon.Item", style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", ontap: "requestExtraTapped", popup: "requestExtraPopup",
					 			 			 			 		components:
					 			 			 			 		[

							 			 			 			 	{kind: "FittableColumns",
							 			 			 			 		components:
							 			 			 			 		[
																			{kind: "enyo.Image", src: "http://placehold.it/100x100/505050/ffffff&text=Extra"},
																			{content: "Extra", style: "padding-top: 35px; padding-left: 20px;"}
							 			 			 			 		]
							 			 			 			 	}
					 			 			 			 		]
					 			 			 			 	}
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
					 			 			 		 	{kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150/505050/ffffff&text=Cleaning"},
					 			 			 		 	{content: "Cleaning", style: "padding-top: 90px;"}
					 			 			 		]
					 			 			 	},
					 			 			 	{kind: "FittableRows",
					 			 			 		components:
					 			 			 			[
					 			 			 			 	{content: "Request Extra Room Cleaning"},
					 			 			 			 	{kind: "moon.DatePicker", name:"picker", noneText: "Pick a Date", content: "Date"},
					 			 			 			 	{kind: "moon.TimePicker", name: "pickerTime", noneText: "Pick a Time", content: "Time", meridiemEnable: false},
					 			 							{kind: "moon.IconButton", icon: "check", small: true, ontap: "onRoomCleanTapped", popup: "cleaningPopUp"},
					 			 							{name: "cleaningPopUp", kind: "moon.Popup", content: "Cleaning Scheduled!", showCloseButton: true},
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
					]
			},
			
			{name: "restaurantscreen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
				components:
					[
					 	{content: "Restaurant Services", style: "font-size: 40px;"},
					 	{kind: "FittableColumns", style: "padding-left: 50px;", fit: true,
					 		components:
					 			[
					 			 	{
					 			 		components:
					 			 			[
												{content: "Starters"},
												{kind: "moon.Scroller", style: "padding: 10px;", spotlight: "container", components:
													[
														{kind: "enyo.Repeater", count:"2", //onSetupItem: "setImageSource",
																components:
																[
																	{kind: "moon.Item", style:"padding-bottom: 2px; border-radius: 7px;", ontap: "onStarterTapped",
																			components:
																			[
																		 		 	{kind: "enyo.Image", src: "http://placehold.it/400x225/505050/ffffff&text=Starter+Option"}
																			]
																	},
																]
														}
													]
												},
					 			 			 ]
					 			 	},
					 			 	{
					 			 		components:
					 			 			[
												{content: "Main Course"},
												{kind: "moon.Scroller", style: "padding: 10px;", spotlight: "container", components:
													[
														{kind: "enyo.Repeater", count:"2", //onSetupItem: "setImageSource",
																components:
																[
																	{kind: "moon.Item", style:"padding-bottom: 2px; border-radius: 7px;", ontap: "onCourseTapped",
																			components:
																			[
																		 		 	{kind: "enyo.Image", src: "http://placehold.it/400x225/505050/ffffff&text=Course+Option"}
																			]
																	},
																]
														}
													]
												},
					 			 			 ]
					 			 	},
					 			 	{
					 			 		components:
					 			 			[
												{content: "Desert"},
												{kind: "moon.Scroller", style: "padding: 10px;", spotlight: "container", components:
													[
														{kind: "enyo.Repeater", count:"2", //onSetupItem: "setImageSource",
																components:
																[
																	{kind: "moon.Item", style:"padding-bottom: 2px; border-radius: 7px;", ontap: "onDesertTapped",
																			components:
																			[
																		 		 	{kind: "enyo.Image", src: "http://placehold.it/400x225/505050/ffffff&text=Desert+Option"}
																			]
																	},
																]
														}
													]
												},
					 			 			 ]
					 			 	},
					 			 	{
					 			 		components:
					 			 			[
												{content: "Drinks"},
												{kind: "moon.Scroller", style: "padding: 10px;", spotlight: "container", components:
													[
														{kind: "enyo.Repeater", count:"2", //onSetupItem: "setImageSource",
																components:
																[
																	{kind: "moon.Item", style:"padding-bottom: 2px; border-radius: 7px;", ontap: "onDrinkTapped",
																			components:
																			[
																		 		 	{kind: "enyo.Image", src: "http://placehold.it/400x225/505050/ffffff&text=Drink+Option"}
																			]
																	},
																]
														}
													]
												},
					 			 			 ]
					 			 	}
					 			]
					 	},
					 	{components:
					 		[
					 		 	{kind: "moon.Button", content: "Cancel Order", style: "margin: 50px;", ontap: "onRestaurantCancelTapped"}
					 		]
					 	}
					]
			},
			
			{name: "foodinfoscreen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
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
					]
			},
			
			{name: "checkoutscreen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
				components:
					[
					 {content: "Expenditures", style: "font-size: 60px;"},
					 {kind: "FittableColumns", fit:true,
						 components:[
						            {kind: "FittableRows", style: "width:33%; padding: 10px;", fit:true,
						            	components:
						            		[
						            		 {kind: "FittableColumns",
						            			 components:
						            				 [
						            				  {kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150"},
						            				  {content: "Accommodation", style: "padding-top: 90px;"},
						            				  ]
						            		 },
						            	 			{kind: "FittableColumns", fit:true,
					            					  components: [
					            			      
					            			                 {content: "Date", style:"padding:4px; border: 1px solid grey;"},
					            			                 {content: "Description",fit:true, style:"padding:4px; border: 2px solid grey;"},
					            			                 {content: "Total", style:"padding:4px; border: 2px solid grey;"}
					            				 
						            		 ]
						            	 			},
						            	 					{content: "XXX.XX", style:"text-align:right;"}
						            		 ]
						            		 
						            },
						            {kind: "FittableRows", style: "width:33%;padding: 10px;",
					 			 		components:
					 			 			[
					 			 			 	{kind: "FittableColumns",
					 			 			 		components:
					 			 			 		[
					 			 			 		 	{kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150"},
					 			 			 		 	{content: "Hotel Services", style: "padding-top: 90px;"}
					 			 			 		]
					 			 			 	},
					 			 			 	{kind: "FittableColumns", fit:true,
					            					  components: [
					            			      
					            			                 {content: "Date", style:" padding:4px; border: 1px solid grey;"},
					            			                 {content: "Description",fit:true, style:" border: 1px solid grey;"},
					            			                 {content: "Total", style:"border: 1px solid grey;"}
					            				 
						            		 ]
						            	 			},
					 			 			 		            {content: "XXX.XX", style:"text-align:right;"}
					 			 			 		            
					 			 			 	]
						            },
						            {kind: "FittableRows", style: "width:33%;padding: 10px;",
					 			 		components:
					 			 			[
					 			 			 	{kind: "FittableColumns",
					 			 			 		components:
					 			 			 		[
					 			 			 		 {kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150"},
					 			 			 		 {content: "Activities", style: "padding-top: 90px;"},
					 			 			 	    ]
					 			 			 	},
					 			 			 	{kind: "FittableColumns", fit:true,
					            					  components: [
					            			      
					            			                 {content: "Date", style:" padding:4px;border: 1px solid grey;"},
					            			                 {content: "Description",fit:true, style:"border: 1px solid grey;"},
					            			                 {content: "Total", style:"border: 1px solid grey;"}
					            				 
						            		 ]
						            	 			},
						            	 			{content: "XXX.XX", style:"text-align:right;"}
						            	 			]
						            	},
							            
							            
						            ]
					 },
					 {content: "Total Expenditures:", style:"text-align:right;"},
			            {content: "XXX.XX", style:"font-size:50px;text-align:right;"},
			            {kind:"FittableColumns",components:[
			                                                {kind: "moon.Button", content: "Cancel", style: "margin: 50px;", ontap: "onExpenditureCancelTapped"},
			                                                {name: "expenditurePopUp", kind: "moon.Popup", content: "Checkout Proceeded!", showCloseButton: true},
			                                                

			                                                ]}
			            ]
					 },
			
			// Placeholder Panel
			{title: "Second", classes: "enyo-fit full", components: [
				{kind: "moon.Item", content: "Item One", ontap: "previous"},
				{kind: "moon.Item", content: "Item Two", ontap: "previous"},
				{kind: "moon.Item", content: "Item Three", ontap: "previous"},
				{kind: "moon.Item", content: "Item Four", ontap: "previous"},
				{kind: "moon.Item", content: "Item Five", ontap: "previous"}
			]},
			
 			{title: "Web Services Test",
 				components:
 				[
 				 	{kind: "moon.Button", content: "Debug:", ontap: "debugTap"},
 				 	{name: "debugArea", kind: "moon.BodyText", content: "Nothing yet..."}
 				]
 				
 			}
		]}
	],
	handlers: {
		ontap: "closeModal" ,
		ontap: "next",
		ontap:"previous"
	},
	
	// Starter configuration
	onStarterTapped: function(inSender, inEvent)
	{
		console.log(inEvent.index);
		return true;
	},
	
	// Set option image
	setImageSource: function(inSender, inEvent) {
	    var index = inEvent.index;
	    var item = inEvent.item;
	    var src = "";
	    switch(index)
	    {
	    	case 0:
	    		src = "http://placehold.it/215x121/505050/ffffff&text=Room";
	    		break;
	    	case 1:
	    		src = "http://placehold.it/215x121/505050/ffffff&text=Restaurant";
	    		break;
	    	case 2:
	    		src = "http://placehold.it/215x121/505050/ffffff&text=Entertainment";
	    		break;
	    	case 3:
	    		src = "http://placehold.it/215x121/505050/ffffff&text=Activities";
	    		break;
	    	case 4:
	    		src = "http://placehold.it/215x121/505050/ffffff&text=Events";
	    		break;
	    	case 5:
	    		src = "http://placehold.it/215x121/505050/ffffff&text=Checkout";
	    		break;
	    }

    	item.$.image.setSrc(src);
	    return true;
	},
	
	onOptionMenuTapped: function(insender, inEvent)
	{
		switch(inEvent.index)
		{
			case 0: // Room
				this.$.panels.setIndex(1);
				break;
			case 1: // Restaurant
				this.$.panels.setIndex(2);
				break;
			case 2: // Entertainment
				break;
			case 3: // Activities
				break;
			case 4: // Events
				break;
			case 5: // Checkout
				this.$.panels.setIndex(4);
				break;
			
		}
		return true;
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
	
	// Room Services button tap to Restaurant Services
	onRoomRestaurantTapped: function(inSender, inEvent)
	{
		this.$.panels.setIndex(2);
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
	
	// Room Services Call Pop Up
	onRoomCleanTapped: function(inSender)
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
	
	// Restaurant Cancel Order
	onRestaurantCancelTapped: function()
	{
		this.$.panels.setIndex(0);
	},
	
	// Restaurant Starter Tapped
	onStarterTapped: function(inSender, inEvent)
	{
		//console.log(inEvent.index);
		this.$.panels.setIndex(3);
	},
	
	// Restaurant Course Tapped
	onCourseTapped: function(inSender, inEvent)
	{
		//console.log(inEvent.index);
		this.$.panels.setIndex(3);
	},
	
	// Restaurant Desert Tapped
	onDesertTapped: function(inSender, inEvent)
	{
		//console.log(inEvent.index);
		this.$.panels.setIndex(3);
	},
	
	// Restaurant Drink Tapped
	onDrinkTapped: function(inSender, inEvent)
	{
		//console.log(inEvent.index);
		this.$.panels.setIndex(3);
	},
	
	// Food Info Back Tapped
	onFoodInfoBackTapped: function()
	{
		this.$.panels.setIndex(2);
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
		this.$.panels.setIndex(2);
	},
	
	// Expenditure Cancel
	onExpenditureCancelTapped: function()
	{
		this.$.panels.setIndex(0);
	},
	
	// App Initialization
	create: enyo.inherit(function(sup)
	{
		return function()
		{
			sup.apply(this, arguments);
			
			this.setMainScreenImages();
			this.buildRoomScreen();
		};
	}),
	
	buildRoomScreen: function()
	{
		console.log(this.$.roomscreen.name);
	},
	
	setMainScreenImages: function()
	{
		this.urls =
		[
			'http://placehold.it/1920x1080/3498db/ffffff&text=Room',
			'http://placehold.it/1920x1080/9b59b6/ffffff&text=Restaurant',
			'http://placehold.it/1920x1080/e67e22/ffffff&text=Entertainment',
			'http://placehold.it/1920x1080/16a085/ffffff&text=Activities',
			'http://placehold.it/1920x1080/e74c3c/ffffff&text=Events',
			'http://placehold.it/1920x1080/27ae60/ffffff&text=Checkout'
		];

		this.$.menucarousel.setImages(this.urls);
	},
	
	// Main Screen Bar Option Focused
	onOptionFocused: function(oSender, oEvent)
	{
		this.$.menucarousel.setIndex(oEvent.index);
	},
	
	
	//	Web Services
	//	Section
	
	debugTap: function(inSender, inEvent)
	{
		var obj = null;
		
		try
		{
			var client = {
				birth_date	: "1990-01-01",
				name		: "Rir",
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
		}
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
	jQuery: null,
	jQuerySuccess: false,
	
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
			{	// erro => database // excepção
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
