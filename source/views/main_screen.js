//-------------- Main Screen -------------------//
enyo.kind(
{name: "main_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
	components: [
//-------------- Background Image With Text -------------------//
	             {name:'menucarousel', kind:'ImageCarousel',  arrangerKind: "CardArranger",
	            	 classes: "enyo-fit", style: "z-index: -1;"
	             },
	             {fit: true},
	 			 {kind: 'moon.Scroller', vertical: "hidden", spotlight: "container", horizontal: "hidden",
	            	 style:"white-space: nowrap; height: 160px;",
	 				 components:
	 					[
//-------------- Bottom Buttons -------------------//
	              			{kind: "enyo.Repeater", style: "margin-left: 0px", count:"8", onSetupItem: "setImageSource",
	              				components:
	              					[
		                  				{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",
		                  					onSpotlightFocused: "onOptionFocused", ontap: "onOptionMenuTapped",
		                  					components:
		                  						[
		                  						 	{kind: "enyo.Image"}
		                  						]
		                  				}
		              				]
	              			}
              			]
	             }
	],
	
	// Set main screen option image
	setImageSource: function(inSender, inEvent) {
	    var index = inEvent.index;
	    var item = inEvent.item;
	    var src = "";
	    switch(index)
	    {
	    	case 0:
	    		src = "assets/main_screen/room_button.png";
	    		break;
	    	case 1:
	    		src = "assets/main_screen/food_button.png";
	    		break;
	    	case 2:
	    		src = "assets/main_screen/entertainment_button.png";
	    		break;
	    	case 3:
	    		src = "assets/main_screen/activities_button.png";
	    		break;
	    	case 4:
	    		src = "assets/main_screen/events_button.png";
	    		break;
	    	case 5:
	    		src = "assets/main_screen/promotions_button.png";
	    		break;
	    	case 6:
	    		src = "assets/main_screen/explore_hotel.png";
	    		break;
	    	case 7:
	    		src = "assets/main_screen/checkout_button.png";
	    		break;
	    }

    	item.$.image.setSrc(src);
	    return true;
	},
	
	// When An Option Is Tapped
	onOptionMenuTapped: function(insender, inEvent)
	{
		switch(inEvent.index)
		{
			case 0: // Room
				this.owner.loadRoomScreen();
				break;
			case 1: // Restaurant
				this.owner.loadRestaurantScreen();
				break;
			case 2: // Entertainment
				this.owner.loadMediaBrowserScreen();
				break;
			case 3: // Activities
				this.owner.loadActivityScreen();
				break;
			case 4: // Events
				this.owner.loadEventScreen();
				break;
			case 5: // Promotions
				this.owner.loadPromotionScreen();
				break;
			case 6: // Explore
				this.owner.loadExploreScreen();
				break;
			case 7: // Checkout
				this.owner.loadCheckoutScreen();
				break;
			
		}
		return true;
	},
	
	// App Initialization
	create: enyo.inherit(function(sup)
	{
		return function()
		{
			sup.apply(this, arguments);
			
			this.setMainScreenImages();
		};
	}),
	
	// Sets The Background Imnages With Text
	setMainScreenImages: function()
	{
		this.urls =
		[
			'http://placehold.it/1920x1080/3498db/ffffff&text=Room+Services',
			'http://placehold.it/1920x1080/9b59b6/ffffff&text=Restaurant+Services',
			'http://placehold.it/1920x1080/e67e22/ffffff&text=Entertainment',
			'http://placehold.it/1920x1080/16a085/ffffff&text=Activities',
			'http://placehold.it/1920x1080/e74c3c/ffffff&text=Events',
			'http://placehold.it/1920x1080/e67e22/ffffff&text=Promotions',
			'http://placehold.it/1920x1080/27ae60/ffffff&text=Explore+Hotel',
			'http://placehold.it/1920x1080/95a5a6/ffffff&text=Checkout'
		];

		this.$.menucarousel.setImages(this.urls);
	},
	
	// Main Screen Bar Option Focused - Change Background Image
	onOptionFocused: function(oSender, oEvent)
	{
		this.$.menucarousel.setIndex(oEvent.index);
	},
}
);