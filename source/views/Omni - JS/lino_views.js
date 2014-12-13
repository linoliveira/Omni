enyo.kind({
	name: "myapp.MainView",
	classes: "moon enyo-fit",
	components: [
		{name: "panels", kind: "moon.Panels", arrangerKind: "CarouselArranger", classes: "enyo-fit", components: [
			{kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
				components: [
				             {kind: "enyo.Image", src:"assets/wallpaper_omni.png", classes: "enyo-fit", style: "z-index: -1;"},
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
			{title: "Second", classes: "enyo-fit full", components: [
				{kind: "moon.Item", content: "Item One", ontap: "previous"},
				{kind: "moon.Item", content: "Item Two", ontap: "previous"},
				{kind: "moon.Item", content: "Item Three", ontap: "previous"},
				{kind: "moon.Item", content: "Item Four", ontap: "previous"},
				{kind: "moon.Item", content: "Item Five", ontap: "previous"}
			]}
		]}
	],
	next: function(inSender, inEvent) {
		this.$.panels.next();
		return true;
	},
	previous: function(inSender, inEvent) {
		this.$.panels.previous();
		return true;
	}
});
