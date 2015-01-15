enyo.kind({
	name: "checkin_screen",
	style: "background-color:rgba(0, 191, 252, 0.8);",
	components:
	[
	 	{name: "label", kind: "moon.BodyText", content: "NO GUEST IN THIS ROOM", centered: true, style: "margin-top: 500px; font-size: 50pt; color: white;"}
	],
	
	periodicValidateCheckin: null,
	
	test: function()
	{
		console.log("YE!");
	},
	
	rendered: function ()
	{
		this.inherited(arguments);
		
		this.validateCheckin();
		//this.periodicValidateCheckin = setInterval(this.validateCheckin, 10000);
	},
	
	validateCheckin: function()
	{
		var client = this.webService("room/getclient/?room_id=" + this.getRoomID());
		
		try
		{
			if(client != null && this.getRoomID() == client.room_id)
			{
				this.owner.clientID = client.client_id;
				this.owner.loadMainScreen();
			}
		}
		catch(e)
		{
			console.log("Exception:", e);
			console.log("Backend error!");
		}
	},
	
	getRoomID: function()
	{
		return this.owner.roomID;
	},
	
	webService: function(URL, data)
	{
		try
		{
			return this.owner.webService(URL, data);
		}
		catch(e)
		{
			console.log(e);
		}
	}
});