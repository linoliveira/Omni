//-------------- Checkin Screen / App Blocked -------------------//
enyo.kind({
	name: "checkin_screen",
	style: "background-color:rgba(0, 191, 252, 0.8);",
	components:
	[
	 	{name: "label", kind: "moon.BodyText", content: "NO GUEST IN THIS ROOM", centered: true, style: "margin-top: 500px; font-size: 50pt; color: white;"}
	],
	
	// Periodic Validate Function
	periodicValidateCheckin: null,
	
	// App Initialization
	rendered: function ()
	{
		this.inherited(arguments);
		
		this.validateCheckin();
		
		this.periodicValidateCheckin = setInterval(function(self) {self.validateCheckin();}, 10000, this);
	},
	
	lastState: "",
	
	// Validates The Checkin From The Backend
	validateCheckin: function()
	{
		var client = this.webService("room/getclient/?room_id=" + this.getRoomID());
		
		try
		{
			if(client == null)
			{
				this.lastState = "";
				this.owner.loadCheckinScreen();
			}
			else if((client != null && this.getRoomID() == client.room_id) && this.lastState == "")
			{
				this.lastState = "checkedIn";
				this.owner.clientID = client.client_id;
				this.owner.loadMainScreen();
			}
		}
		catch(e)
		{
			this.owner.loadCheckinScreen();
			console.log("Exception:", e);
			console.log("Backend error!");
		}
	},
	
	getRoomID: function()
	{
		return this.owner.roomID;
	},
	
	// Calls The Main webService Function
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