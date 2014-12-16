enyo.kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: "moon.Panels", arrangerKind: "CarouselArranger", classes: "enyo-fit", components: [
	{kind: "enyo.Popup", name: "popupPromotion", showing:true, modal: true, autoDismiss: false, classes: "popup", components: [
	{kind: "enyo.Image", style: "position:absolute;min-height:100%; min-width:1024px; top:1em; left:0em; bottom:1em; right:0em; ", src:"assets/promocao.png"},
	{kind: "enyo.Button", style: "position:absolute; top:0px; left: 50%; ", content: "Image Button", classes: "image-button", ontap: "closePopup", components: [
	{kind: "enyo.Image",  src: "assets/closePromotionButton.png", alt: "Close Logo"}]},
    {kind: "enyo.Button", style: "position:absolute; bottom:0px; left: 50%;", content: "Image Button", classes: "image-button", ontap: "enterPopup", components: [
    {kind: "enyo.Image",  src: "assets/enterPromotionButton.png", alt: "Close Logo"}]
	}]
	},
	{kind: "enyo.Popup", name: "popupBuy", showing:false, modal: true, autoDismiss: false, classes: "popup", components: [
	  {content: "Promotion"},
	  {kind: 'moon.Scroller', fit: true, components: [
	  {kind: "moon.BodyText", style:"width: 20%;float:left; margin-top:2em;column-count:3; font-size: 1.5em;", content: "Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.Nulla wisi laoreet suspendisse hendrerit facilisi, mi mattis pariatur adipiscing aliquam pharetra eget. Aenean urna ipsum donec tellus tincidunt, quam curabitur metus, pretium purus facilisis enim id, integer eleifend vitae volutpat consequat per leo. Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi." +
	  		"Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.Nulla wisi laoreet suspendisse hendrerit facilisi, mi mattis pariatur adipiscing aliquam pharetra eget. Aenean urna ipsum donec tellus tincidunt, quam curabitur metus, pretium purus facilisis enim id, integer eleifend vitae volutpat consequat per leo. Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi."}
	  ,{kind: "enyo.Image", style: "margin-left:25%;min-width:20em;", src:"assets/map.png"},
	  {kind: "enyo.Image", style: "float:right;", src:"http://placehold.it/1000x500/", alt: "Close Logo"}]},
	 
	 {kind: "enyo.Button", content: "Image Button", style: "position:absolute;left:40%; bottom:5%; ",classes: "image-button", ontap: "closeBuy", components: [
	 {kind: "enyo.Image" ,src: "assets/closePromotionButton.png", alt: "Close Logo"}]},
	 {kind: "enyo.Button", content: "Image Button", style: "position:absolute;left:35%; bottom:5%;", classes: "image-button", ontap: "checkBuy", components: [
	 {kind: "enyo.Image", src: "assets/checkPopup.png", alt: "Close Logo"}]}
	  ]},
	{kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full", name:"mainPage", showing:false,
			components: [
    	             
				             
				             {kind: "enyo.Image", src:"assets/smarttvap.png", classes: "enyo-fit", style: "z-index: -1;"},
				             {fit: true},
				             //{content: "Omni", style:"height: 100px; text-align: center;", fit: true},
				             //{kind: "enyo.Image", src:"http://placehold.it/240x135&text=Placeholder", fit: true},
				 			 {kind: 'moon.Scroller', vertical: "hidden", spotlight: "container", horizontal: "hidden",
				            	 style:"white-space: nowrap; height: 160px;",
				 				 components: [
                                  			{kind: "enyo.Repeater", style: "margin-left: 30px", count:"7", components: [
	                              				{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;", ontap: "next", components: [
	                              					{kind: "enyo.Image", src:"http://placehold.it/240x135/505050/ffffff&text=Option"}
	                              				]}
                              				]}
                      		 ]}
			]},
			{name:"xy", title: "Second", classes: "enyo-fit full", showing:false, components: [
				{kind: "moon.Item", content: "Item One", ontap: "previous"},
				{kind: "moon.Item", content: "Item Two", ontap: "previous"},
				{kind: "moon.Item", content: "Item Three", ontap: "previous"},
				{kind: "moon.Item", content: "Item Four", ontap: "previous"},
				{kind: "moon.Item", content: "Item Five", ontap: "previous"}
			]}
		]}
	],
	handlers: {
		ontap: "closePopup",
		ontap: "enterPopup",
		ontap: "next",
		ontap:"previous",
		ontap: "closeBuy",
		ontap: "enterBuy",
	},
	
	next: function(inSender, inEvent) {
		this.$.xy.setShowing(true);
		this.$.panels.next();
		return true;
	},
	previous: function(inSender, inEvent) {
		this.$.panels.previous();
		return true;
	},
				
	closePopup: function(inSender, inEvent) {
					this.$.popupPromotion.setShowing(false);
					this.$.mainPage.setShowing(true);
					},
					
	closeBuy: function(inSender, inEvent) {
			this.$.popupBuy.setShowing(false);
			this.$.mainPage.setShowing(true);
			},
			
	enterPopup: function(inSender, inEvent) {
		this.$.popupBuy.setShowing(true);
		this.$.popupPromotion.setShowing(false);
		
		return true;
					}
});
