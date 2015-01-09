enyo.kind(
{name: "restaurant_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full", fit:true,
	components:
		[
		 	{content: "Restaurant Services", style: "font-size: 40px;"},
		 	{kind: "FittableColumns", style: "padding-left: 50px;", fit:true,
		 		components:
		 			[
		 			 	{
		 			 		components:
		 			 			[
									{content: "Starters"},
									{kind: "moon.Scroller", style: "padding: 10px;", spotlight: "container", components:
										[
											{kind: "enyo.Repeater", count:"4", //onSetupItem: "setImageSource",
													components:
													[
														{kind: "moon.Item", style:"padding-bottom: 2px; border-radius: 7px;", ontap: "onStarterTapped",
																components:
																[
															 		 	{kind: "enyo.Image", src: "http://placehold.it/400x100/505050/ffffff&text=Starter"}
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
											{kind: "enyo.Repeater", count:"3", //onSetupItem: "setImageSource",
													components:
													[
														{kind: "moon.Item", style:"padding-bottom: 2px; border-radius: 7px;", ontap: "onCourseTapped",
																components:
																[
															 		 	{kind: "enyo.Image", src: "http://placehold.it/400x120/505050/ffffff&text=Course"}
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
															 		 	{kind: "enyo.Image", src: "http://placehold.it/400x225/505050/ffffff&text=Desert"}
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
											{kind: "enyo.Repeater", count:"1", //onSetupItem: "setImageSource",
													components:
													[
														{kind: "moon.Item", style:"padding-bottom: 2px; border-radius: 7px;", ontap: "onDrinkTapped",
																components:
																[
															 		 	{kind: "enyo.Image", src: "http://placehold.it/400x225/505050/ffffff&text=Drink"}
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
		],
		
		// Restaurant Cancel Order
		onRestaurantCancelTapped: function()
		{
			this.owner.loadMainScreen();
		},
		
		// Restaurant Starter Tapped
		onStarterTapped: function(inSender, inEvent)
		{
			this.owner.loadFoodInfoScreen();
		},
		
		// Restaurant Course Tapped
		onCourseTapped: function(inSender, inEvent)
		{
			this.owner.loadFoodInfoScreen();
		},
		
		// Restaurant Desert Tapped
		onDesertTapped: function(inSender, inEvent)
		{
			this.owner.loadFoodInfoScreen();
		},
		
		// Restaurant Drink Tapped
		onDrinkTapped: function(inSender, inEvent)
		{
			this.owner.loadFoodInfoScreen();
		},
}
);