enyo.kind(
		{name: "restaurant_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
			style: "background-image: url(\"assets/food_services/background.png\");",
			components:
		[
{content: "Restaurant Services", style: "font-size: 60px; margin-left: 35px; color: white;"},
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
								{content: "Starters", style: "padding-top: 60px; color: white;"}
			 			 		]
			 			 	},
			 			 	{name: "requestStartersContainer", kind: "FittableRows",
			 			 		components:
			 			 			[
			 			 			 	// requestExtraComponents
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
						 		 {content: "Main Courses", style: "padding-top: 60px; color: white;"}
			 			 		]
			 			 	},
			 			 	{name: "requestMCContainer", kind: "FittableRows",
			 			 		components:
			 			 			[
			 			 			 	// MCComponents
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
			 			 		 	{content: "Deserts", style: "padding-top: 60px; color: white;"}
			 			 		]
			 			 	},
			 			 	{name: "requestDesertContainer", kind: "FittableRows",
			 			 		components:
			 			 			[
			 			 			 	// requestExtraComponents
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
			 			 		 	{content: "Drinks", style: "margin-left: 10px; padding-top: 60px; color: white;"}
			 			 		]
			 			 	},
			 			 	{name: "requestDrinkContainer", kind: "FittableRows",
			 			 		components:
			 			 			[
			 			 			 	// requestExtraComponents
			 			 			]
			 			 	}
			 			]
			 	}
			 	
			
			]
	},
	{components:
 		[
		 	{kind: "moon.Button", content: "Cancel Order", style: "margin: 50px;", ontap: "onRestaurantCancelTapped"},
		]
	}
],

//Restaurant Cancel Order
onRestaurantCancelTapped: function()
{
	this.owner.loadMainScreen();
},
// Screen Initialization
rendered: function()
{
    this.inherited(arguments);
    this.requestContainersTapped();
},

//Room Services Request Starters Header Tapped
requestContainersTapped: function(inSender, inEvent)
{
	//console.log(this.owner.jQuery);
	var dis = this;
	
	var a = this.getContainers();
	a.forEach(function(entry) {
	    //console.log(this);
		dis.createNewRequest(entry.id, entry.name, entry.description, entry.price);
	});
},

getContainers: function()
{
	var obj = null;
	
	try
	{
		obj = this.webService("foodmenu/");
	}
	catch(e)
	{
		console.log(e);
	}
	
	return obj;
},



createNewRequest: function(id, name, description, price)
{
	imageName = "";
	switch(id)
	{
		case 1:
			{
			imageName= "main_2.png",
			this.$.requestMCContainer.createComponent(
					{kind: "moon.Item",  ontap: "requestTapped", popup: "requestPopup",
						serviceID: id, serviceName: name, description: description, price: price, imageName: imageName,
						style: "margin-left: 10px; padding: 0px; margin-top: 20px; width: 424px; height: 100px; background-image: url(\"assets/room_services/panels/request_aditional_panel.png\"); background-repeat: no-repeat; background-size: auto;",
						components:
		 			 		[
				 			 	{kind: "FittableColumns", style: "padding: 0px; margin: 0px;",
				 			 		components:
				 			 		[
										{kind: "enyo.Image", src: "assets/food_services/images/" + imageName},
										{content: name, style: "padding-top: 35px; padding-left: 20px; color: white;"}
				 			 		]
				 			 	}
		 			 		]
			 		}, {owner: this}
				).render();
				break;
				};
		case 2:
		{
			imageName= "starters_2.png",
		this.$.requestStartersContainer.createComponent(
				{kind: "moon.Item", ontap: "requestTapped", popup: "requestPopup",
					serviceID: id, serviceName: name, description: description, price: price, imageName: imageName,
					style: "margin-left: 10px; padding: 0px; margin-top: 20px; width: 424px; height: 100px; background-image: url(\"assets/room_services/panels/request_aditional_panel.png\"); background-repeat: no-repeat; background-size: auto;",
					components:
	 			 		[
			 			 	{kind: "FittableColumns", style: "padding: 0px; margin: 0px;",
			 			 		components:
			 			 		[
									{kind: "enyo.Image", src: "assets/food_services/images/" + imageName},
									{content: name, style: "padding-top: 35px; padding-left: 20px; color: white;"}
			 			 		]
			 			 	}
	 			 		]
		 		}, {owner: this}
			).render();
			break;
			};
		case 4:
		{
		imageName= "dessert_2.png"
		this.$.requestDesertContainer.createComponent(
				{kind: "moon.Item",  ontap: "requestTapped", popup: "requestPopup",
					serviceID: id, serviceName: name, description: description, price: price, imageName: imageName,
				
					style: "margin-left: 10px; padding: 0px; margin-top: 20px; width: 424px; height: 100px; background-image: url(\"assets/room_services/panels/request_aditional_panel.png\"); background-repeat: no-repeat; background-size: auto;",
					components:
	 			 		[
			 			 	{kind: "FittableColumns", style: "padding: 0px; margin: 0px;",
			 			 		components:
			 			 		[
									{kind: "enyo.Image", src: "assets/food_services/images/" + imageName},
									{content: name, style: "padding-top: 35px; padding-left: 20px; color: white;"}
			 			 		]
			 			 	}
	 			 		]
		 		}, {owner: this}
			).render();
			break;
			};
		case 3:
		{
		imageName = "drink_2.png",
		this.$.requestDrinkContainer.createComponent(
				{kind: "moon.Item",  ontap: "requestTapped", popup: "requestPopup",
					serviceID: id, serviceName: name, description: description, price: price, imageName: imageName,
					style: "margin-left: 10px; padding: 0px; margin-top: 20px; width: 424px; height: 100px; background-image: url(\"assets/room_services/panels/request_aditional_panel.png\"); background-repeat: no-repeat; background-size: auto;",
					components:
	 			 		[
			 			 	{kind: "FittableColumns", style: "padding: 0px; margin: 0px;",
			 			 		components:
			 			 		[
									{kind: "enyo.Image", src: "assets/food_services/images/" + imageName},
									{content: name, style: "padding-top: 35px; padding-left: 20px; color: white;"}
			 			 		]
			 			 	}
	 			 		]
		 		}, {owner: this}
			).render();
			break;
			};
			
	}
	
	
},

//Room Services Request Extra Tapped
requestTapped: function(inSender,inEvent)
{	
	var popUp = this.$[inSender.popup];
	var fName = inSender.name;
	var descr = inSender.description;
	var price = inSender.price;
	var image = inSender.imageName;

	this.owner.loadFoodInfoScreen();
	//this.$.FoodInfoScreen.set(fName, fName);
	
	//this.$.foodinfo_screen.propertyOne = descr;
	this.owner.$.foodinfoscreen.propertyOne= descr;
	//this.$.foodinfo_screen.propertyOne = descr;
	//this.$.foodinfo_screen.set(price, price);
	return true;
},

webService: function(URL, data)
{
	return this.owner.webService(URL, data);
}


		 			 	
});
		 