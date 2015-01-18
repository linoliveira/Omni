enyo.kind(
{name: "main_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
	components: [
	             {name:'menucarousel', kind:'ImageCarousel',  arrangerKind: "CardArranger",
	            	 classes: "enyo-fit", style: "z-index: -1;"
	             },
	             {fit: true},
	 			 {kind: 'moon.Scroller', vertical: "hidden", spotlight: "container", horizontal: "hidden",
	            	 style:"white-space: nowrap; height: 160px;",
	 				 components:
	 					[
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
	    		src = "http://placehold.it/215x121/505050/ffffff&text=Promotions";
	    		break;
	    	case 6:
	    		src = "http://placehold.it/215x121/505050/ffffff&text=Explore";
	    		break;
	    	case 7:
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
	
	setMainScreenImages: function()
	{
		this.urls =
		[
			'http://placehold.it/1920x1080/3498db/ffffff&text=Room',
			'http://placehold.it/1920x1080/9b59b6/ffffff&text=Restaurant',
			'http://placehold.it/1920x1080/e67e22/ffffff&text=Entertainment',
			'http://placehold.it/1920x1080/16a085/ffffff&text=Activities',
			'http://placehold.it/1920x1080/e74c3c/ffffff&text=Events',
			'http://placehold.it/1920x1080/e74c3c/ffffff&text=Promotions',
			'http://placehold.it/1920x1080/95a5a6/ffffff&text=Explore+Hotel',
			'http://placehold.it/1920x1080/27ae60/ffffff&text=Checkout'
		];

		this.$.menucarousel.setImages(this.urls);
	},
	
	// Main Screen Bar Option Focused
	onOptionFocused: function(oSender, oEvent)
	{
		this.$.menucarousel.setIndex(oEvent.index);
	},
}
);