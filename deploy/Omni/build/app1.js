
// source\data\data.js


// source\views\views.js
enyo.kind({name:"myapp.MainView",classes:"moon enyo-fit",components:[{name:"panels",kind:"moon.Panels",arrangerKind:"CardSlideInArranger",classes:"enyo-fit",components:[{name:"mainscreen",kind:"FittableRows",classes:"moon enyo-unselectable enyo-fit full",components:[{name:"menucarousel",kind:"ImageCarousel",arrangerKind:"CardArranger",classes:"enyo-fit",style:"z-index: -1;"},{fit:!0},{kind:"moon.Scroller",vertical:"hidden",spotlight:"container",horizontal:"hidden",style:"white-space: nowrap; height: 160px;",components:[{kind:"enyo.Repeater",style:"margin-left: 225px",count:"6",onSetupItem:"setImageSource",components:[{kind:"moon.Item",style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",onSpotlightFocused:"onOptionFocused",ontap:"onOptionMenuTapped",components:[{kind:"enyo.Image"}]}]}]}]},{name:"roomscreen",kind:"FittableRows",classes:"moon enyo-unselectable enyo-fit full",components:[{content:"Room Services",style:"font-size: 60px;"},{kind:"FittableColumns",fit:!0,components:[{kind:"FittableRows",style:"padding: 10px;",components:[{kind:"FittableColumns",components:[{kind:"enyo.Image",style:"padding: 20px;",src:"http://placehold.it/150x150/505050/ffffff&text=Request"},{content:"Request Aditional",style:"padding-top: 90px;"}]},{kind:"FittableRows",components:[{kind:"moon.Item",style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;",ontap:"requestExtraTapped",popup:"requestExtraPopup",components:[{kind:"FittableColumns",components:[{kind:"enyo.Image",src:"http://placehold.it/100x100/505050/ffffff&text=Pillow"},{content:"Pillow",style:"padding-top: 35px; padding-left: 20px;"}]}]},{kind:"moon.Item",style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;",ontap:"requestExtraTapped",popup:"requestExtraPopup",components:[{kind:"FittableColumns",components:[{kind:"enyo.Image",src:"http://placehold.it/100x100/505050/ffffff&text=Blanket"},{content:"Blanket",style:"padding-top: 35px; padding-left: 20px;"}]}]},{kind:"moon.Item",style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;",ontap:"requestExtraTapped",popup:"requestExtraPopup",components:[{kind:"FittableColumns",components:[{kind:"enyo.Image",src:"http://placehold.it/100x100/505050/ffffff&text=Towel"},{content:"Towel",style:"padding-top: 35px; padding-left: 20px;"}]}]},{kind:"moon.Item",style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;",ontap:"requestExtraTapped",popup:"requestExtraPopup",components:[{kind:"FittableColumns",components:[{kind:"enyo.Image",src:"http://placehold.it/100x100/505050/ffffff&text=Extra"},{content:"Extra",style:"padding-top: 35px; padding-left: 20px;"}]}]}]},{name:"requestExtraPopup",kind:"moon.Popup",content:"Ordered!",showCloseButton:!0}]},{kind:"FittableRows",style:"padding: 10px;",components:[{kind:"FittableColumns",components:[{kind:"enyo.Image",style:"padding: 20px;",src:"http://placehold.it/150x150/505050/ffffff&text=Cleaning"},{content:"Cleaning",style:"padding-top: 90px;"}]},{kind:"FittableRows",components:[{content:"Request Extra Room Cleaning"},{kind:"moon.DatePicker",name:"picker",noneText:"Pick a Date",content:"Date"},{kind:"moon.TimePicker",name:"pickerTime",noneText:"Pick a Time",content:"Time",meridiemEnable:!1},{kind:"moon.IconButton",icon:"check",small:!0,ontap:"onRoomCleanTapped",popup:"cleaningPopUp"},{name:"cleaningPopUp",kind:"moon.Popup",content:"Cleaning Scheduled!",showCloseButton:!0}]}]},{kind:"FittableRows",style:"padding: 10px;",components:[{kind:"FittableColumns",components:[{kind:"enyo.Image",style:"padding: 20px;",src:"http://placehold.it/150x150/505050/ffffff&text=Restaurant"},{content:"Restaurant Services",style:"padding-top: 90px;"}]},{kind:"FittableRows",components:[{kind:"moon.Button",content:"Go",ontap:"onRoomRestaurantTapped"}]}]},{kind:"FittableRows",style:"padding: 10px;",components:[{kind:"FittableColumns",components:[{kind:"enyo.Image",style:"padding: 20px;",src:"http://placehold.it/150x150/505050/ffffff&text=Assistance"},{content:"Technical Assistance",style:"padding-top: 90px;"}]},{kind:"FittableRows",components:[{kind:"moon.Button",content:"Call to Room Phone",style:"display: block; margin-bottom: 50px;",ontap:"onRoomCallTapped",popup:"callPopUp"},{kind:"moon.Button",content:"Call to my iPhone",ontap:"onRoomCallTapped",popup:"callPopUp"},{name:"callPopUp",kind:"moon.Popup",content:"Calling...",showCloseButton:!0}]}]}]}]},{name:"restaurantscreen",kind:"FittableRows",classes:"moon enyo-unselectable enyo-fit full",components:[{content:"Restaurant Services",style:"font-size: 40px;"},{kind:"FittableColumns",style:"padding-left: 50px;",fit:!0,components:[{components:[{content:"Starters"},{kind:"moon.Scroller",style:"padding: 10px;",spotlight:"container",components:[{kind:"enyo.Repeater",count:"2",components:[{kind:"moon.Item",style:"padding-bottom: 2px; border-radius: 7px;",ontap:"onStarterTapped",components:[{kind:"enyo.Image",src:"http://placehold.it/400x225/505050/ffffff&text=Starter+Option"}]}]}]}]},{components:[{content:"Main Course"},{kind:"moon.Scroller",style:"padding: 10px;",spotlight:"container",components:[{kind:"enyo.Repeater",count:"2",components:[{kind:"moon.Item",style:"padding-bottom: 2px; border-radius: 7px;",ontap:"onCourseTapped",components:[{kind:"enyo.Image",src:"http://placehold.it/400x225/505050/ffffff&text=Course+Option"}]}]}]}]},{components:[{content:"Desert"},{kind:"moon.Scroller",style:"padding: 10px;",spotlight:"container",components:[{kind:"enyo.Repeater",count:"2",components:[{kind:"moon.Item",style:"padding-bottom: 2px; border-radius: 7px;",ontap:"onDesertTapped",components:[{kind:"enyo.Image",src:"http://placehold.it/400x225/505050/ffffff&text=Desert+Option"}]}]}]}]},{components:[{content:"Drinks"},{kind:"moon.Scroller",style:"padding: 10px;",spotlight:"container",components:[{kind:"enyo.Repeater",count:"2",components:[{kind:"moon.Item",style:"padding-bottom: 2px; border-radius: 7px;",ontap:"onDrinkTapped",components:[{kind:"enyo.Image",src:"http://placehold.it/400x225/505050/ffffff&text=Drink+Option"}]}]}]}]}]},{components:[{kind:"moon.Button",content:"Cancel Order",style:"margin: 50px;",ontap:"onRestaurantCancelTapped"}]}]},{name:"foodinfoscreen",kind:"FittableRows",classes:"moon enyo-unselectable enyo-fit full",components:[{content:"Food Title",style:"font-size: 60px;"},{kind:"FittableColumns",fit:!0,components:[{kind:"FittableRows",components:[{kind:"enyo.Image",style:"padding: 20px;",src:"http://placehold.it/800x450/505050/ffffff&text=Food+Image"},{kind:"FittableColumns",style:"padding: 20px;",components:[{kind:"moon.Button",content:"+"},{content:"1",style:"font-size: 40px; padding: 20px;"},{kind:"moon.Button",content:"-"}]}]},{kind:"moon.Scroller",style:"padding: 20px;",fit:!0,components:[{kind:"moon.BodyText",style:"width: 950px;",fit:!0,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}]},{components:[{kind:"moon.Button",content:"Order",ontap:"onFoodInfoOrderTapped",popup:"orderPopup"},{kind:"moon.Button",content:"Back",ontap:"onFoodInfoBackTapped"},{name:"orderPopup",kind:"moon.Popup",showCloseButton:!0,components:[{kind:"moon.Divider",content:"Order to:"},{classes:"moon-hspacing",components:[{kind:"moon.Button",content:"Room",ontap:"onFoodInfoRoomTapped",popup:"foodInfoOrderPopUp"},{kind:"moon.Button",content:"Table",ontap:"onFoodInfoTableTapped",popup:"foodInfoOrderPopUp"}]}]},{name:"foodInfoOrderPopUp",kind:"moon.Popup",content:"Ordered!",showCloseButton:!0,onHide:"onFoodInfoOrderCompleted"}]}]},{title:"Second",classes:"enyo-fit full",components:[{kind:"moon.Item",content:"Item One",ontap:"previous"},{kind:"moon.Item",content:"Item Two",ontap:"previous"},{kind:"moon.Item",content:"Item Three",ontap:"previous"},{kind:"moon.Item",content:"Item Four",ontap:"previous"},{kind:"moon.Item",content:"Item Five",ontap:"previous"}]}]}],handlers:{ontap:"closeModal",ontap:"next",ontap:"previous"},onStarterTapped:function(n,t){return console.log(t.index),!0},setImageSource:function(n,t){var e=t.index,o=t.item,p="";switch(e){case 0:p="http://placehold.it/215x121/505050/ffffff&text=Room";break;case 1:p="http://placehold.it/215x121/505050/ffffff&text=Restaurant";break;case 2:p="http://placehold.it/215x121/505050/ffffff&text=Entertainment";break;case 3:p="http://placehold.it/215x121/505050/ffffff&text=Activities";break;case 4:p="http://placehold.it/215x121/505050/ffffff&text=Events";break;case 5:p="http://placehold.it/215x121/505050/ffffff&text=Checkout"}return o.$.image.setSrc(p),!0},onOptionMenuTapped:function(n,t){switch(t.index){case 0:this.$.panels.setIndex(1);break;case 1:this.$.panels.setIndex(2);break;case 2:break;case 3:break;case 4:break;case 5:}return!0},requestExtraTapped:function(n){var t=this.$[n.popup];t.showing?t.hide():t.show()},onRoomRestaurantTapped:function(){return this.$.panels.setIndex(2),!0},onRoomCallTapped:function(n){var t=this.$[n.popup];t.showing?t.hide():t.show()},onRoomCleanTapped:function(n){var t=this.$[n.popup];t.showing?t.hide():t.show()},onRestaurantCancelTapped:function(){this.$.panels.setIndex(0)},onStarterTapped:function(){this.$.panels.setIndex(3)},onCourseTapped:function(){this.$.panels.setIndex(3)},onDesertTapped:function(){this.$.panels.setIndex(3)},onDrinkTapped:function(){this.$.panels.setIndex(3)},onFoodInfoBackTapped:function(){this.$.panels.setIndex(2)},onFoodInfoOrderTapped:function(n){var t=this.$[n.popup];t.showing?t.hide():t.show()},onFoodInfoRoomTapped:function(n){this.$.orderPopup.hide();var t=this.$[n.popup];t.showing?t.hide():t.show()},onFoodInfoTableTapped:function(n){this.$.orderPopup.hide();var t=this.$[n.popup];t.showing?t.hide():t.show()},onFoodInfoOrderCompleted:function(){this.$.panels.setIndex(2)},create:enyo.inherit(function(n){return function(){n.apply(this,arguments),this.urls=["http://placehold.it/1920x1080/3498db/ffffff&text=Room","http://placehold.it/1920x1080/9b59b6/ffffff&text=Restaurant","http://placehold.it/1920x1080/e67e22/ffffff&text=Entertainment","http://placehold.it/1920x1080/16a085/ffffff&text=Activities","http://placehold.it/1920x1080/e74c3c/ffffff&text=Events","http://placehold.it/1920x1080/27ae60/ffffff&text=Checkout"],this.$.menucarousel.setImages(this.urls)}}),onOptionFocused:function(n,t){this.$.menucarousel.setIndex(t.index)}});

// source\app.js
enyo.kind({name:"myapp.Application",kind:"enyo.Application",view:"myapp.MainView"}),enyo.ready(function(){new myapp.Application({name:"app"})});
