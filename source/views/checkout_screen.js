enyo.kind(
		{name: "checkout_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
			style:"background-image: url(\assets/expenditures/bg-expenditures.png);background-repeat: no-repeat; background-size: auto;",
			components:
				[
				 {content: "Expenditures", style: "font-size: 60px;color:white"},
				 {kind:"FittableColumns", 
					 components:[
					             {kind:"FittableRows",  
					              components:[
					                          {kind:"FittableColumns", 
					                        	  components:[
														{kind:"enyo.Image", src:"\assets/expenditures/activities_image.png", style:"padding:10px",
															components:[
															            {kind:"FittableRows", style:"width:50%",
															            	components:[
															            	            	//{content:" ",style:"padding:10px; color:white"},
															            	            	{content:"Activities", style:"padding:10px;margin-top:50px; color:white"},               
															                               // {content:""}             
															            	            ]}
															            ],
														},
														
														{kind:"enyo.Image", src:"\assets/expenditures/hotel_services_image.png", style:"padding:10px",
															components:[
															            {kind:"FittableRows", style:"width:50%",
															            	components:[
															            	            	//{content:" ",style:"padding:10px; color:white"},
															            	            	{content:"Hotel Services", style:" padding:10px;margin-top:50px; color:white"},               
															                               // {content:""}             
															            	            ]}
															            ],
														},
														
														{kind:"enyo.Image", src:"\assets/expenditures/room_image.png", style:"padding:10px",
															components:[
															            {kind:"FittableRows", style:"width:50%",
															            	components:[
															            	            	//{content:" ",style:"padding:10px; color:white"},
															            	            	{content:"Accomodation", style:"padding:10px; margin-top:50px; color:white"},               
															                               // {content:""}             
															            	            ]}
															            ],
														},

					                        	              ]}

					                          ]}
					             ]},
				 
				 
				
				 //--
				 {kind:"FittableColumns", 
					 components:[
					             {kind: "FittableRows", style: "width:20%; padding:10px ",
					            	 components:[
					            	             {content:"Date", style:"text-align:center; border-top: 2px solid grey; margin-left: 0px; border-bottom: 2px solid grey;color:black;" /*background-image: url(\assets/expenditures/tabela_test.png)"*/},
					            	             
					            	             ]
					             },
					             
					             {kind: "FittableRows", style: "width:62%; padding: 10px;", 
					            	 components:[
					            	             {content:"Description", style:"text-align:center; border-top: 2px solid grey;border-bottom: 2px solid grey;color:black"},
					            	             
					            	             ]
					             }, 
					             { kind: "FittableRows", style: "width:12%; padding: 10px;", fit:true,
					            	 components:[
					            	             {content:"Price", style:"text-align:center; border-top: 2px solid grey;border-bottom: 2px solid grey;color:black; margin-left:5px; margin-right:0px"},
					            	             
					            	             ]
					             },
				                                                        
				                 ]
				 },
				//--
				 {kind:"enyo.Image", src:"assets/expenditures/tabela_test.png", classes:"enyo-fit",style:"margin-left:20px; margin-right:5px; margin-top:320px; opacity:0.5; "},		
		{kind: 'moon.Scroller'/*,style:"background-image: url(\assets/expenditures/tabela_test.png); opacity:0.7"*/, fit: true, components: [
		//{kind:"enyo.Image", src:"", classes:"enyo-fit",style:"margin-left:20px; margin-right:10px; opacity:0.5; sizing:cover; repeat:", sizing:"cover",
			//components:[
{kind: "FittableColumns",  fit:true, 
	 components:[

		 {kind: "FittableColumns", classes:"enyo-fit",    
			 components:[
			             
				            {name:"dateContainer", kind: "FittableRows", style: "width:20%; padding: 10px;color:white;", 
				            	components:
				            		[
				            		 //container de datas
				            		
				            		 ]
				            },
				           
				            { name:"descricaoContainer", kind: "FittableRows", style: "width:62%; padding: 10px;color:white;", fit:true,
				            	components:
				            		[
				            		 //container descrições
				            		 
	
				            		 ]
				            },
				            
				            {name:"precoContainer", kind: "FittableRows", style: "width:12%; padding: 10px;color:white;", fit:true,
				            	components:
				            		[
				            		 //container preços
				       	
				            		 ]
				            }
			            ]
		 }
		 
		 		]	
}
						//]
		//}
		]},
		
		{kind:"FittableColumns", 
			components:[
			        // {kind:"FittableRows",content:"", style: "width:20%"},
			         {kind:"FittableRows",content:"TOTAL EXPENDITURE", style:"text-align:right; padding:10px; color:white;width:80%"},
			         
			         {name:"totalPriceContainer", kind:"FittableRows", style:"text-align:right; color:white; width=20%", 
			        	 components:[
			                           //totalPrice container 

			                         ]},
			         ]
		},
		{kind:"FittableColumns",
			components:[
			            
						{kind:"moon.Button", content:"Back", style:"height:80px; margin-top:10px; color:#5EA7CC;"/*background-color:#D6D6D6;  "*/, ontap:"onExpenditureCancelTapped"},
						{content:"", style:"width:77%"},
						{kind:"moon.Button", content:"Proceed", style:"height:80px; margin-top:10px;  color:#5EA7CC;"/* background-color:#D6D6D6;*/, popup:"checkoutConfirm", ontap: "onExpenditureTapped"},
						
			            ]
		}	,	
		
		
		
		{kind:"moon.Popup", showCloseButton:true, name:"checkoutConfirm", style:"background-image: url(\assets/expenditures/background_popup.png);" , 
			components:[
			            {kind:"FittableRows",components:[
         		                {content: "Check Out", style: "font-size: 60px;"},
         		                {kind: "moon.BodyText", content: "Click on your payment method in order to checkout." +"Hope to see you again "},
         		     	  		{content:"Please Select you preferable payment method:"},
	         		     	  	{kind:"FittableColumns",
         		     	  			components:[
												{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",
														components:
														[
														 	{kind: "enyo.Image", src: "assets/expenditures/apple_pay.png"},
														]
												},
												{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",
													components:
													[
													 	{kind: "enyo.Image", src: "assets/expenditures/google_wallet.png"},
													]
												},
												{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",
													components:
													[
													 	{kind: "enyo.Image", src: "assets/expenditures/paypal.png"},
													]
												},
	 		     	  		     ]},
 		                 
         		                 ]}
			            
			            
	  ]}
				
				 
				 ],
		
		//initialize screen
		 rendered: function()
			{
			 
			    this.inherited(arguments);
			    //this.getClientId();
			    this.requestExpenditure();
			    
			   
			},
		
			getClientId: function()
			{
				//var id=6;
				return 1;
				//return this.owner.ClientID;
			},
			
		//expenditure Tapped
    	onExpenditureTapped: function(inSender)
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
		 
				
    	
    	//Expenditure load
		requestExpenditure: function(inSender, inEvent)
		{
			//console.log(getClientID());
			//console.log(this.owner.jQuery);
			var dis = this;
			var total=0;
			var a = this.getCheckoutData();
			a.forEach(function(entry) {
			    //console.log(this);
				dis.createNewRequestDate(/*entry.id,*/ entry.date);
				dis.createNewRequestName(/*entry.id,*/ entry.name);
				dis.createNewRequestPrice(/*entry.id, */entry.price);
				
				total+=entry.price;
				
			}
			);
			
			dis.createNewRequestTotalSum (/*entry.id, */parseFloat(total).toFixed(2));

			
		},
		
		getCheckoutData: function(/*id*/)
		{
			var obj = null;
			var id = this.getClientId();
			try
			{
				obj = this.webService("expenditure/?id="+ id );
				//console.log(obj);
			}
			catch(e)
			{
				console.log(e);
			}
			
			return obj;
		},
		
		
		
		createNewRequestDate: function(/*id,*/ date)
		{
			
			this.$.dateContainer.createComponent(
					{style:"margin-left: 30px;margin-top: 15px;", /*ontap: "requestExtraTapped",*/ 
						//serviceID: id, serviceDate: date,
	 			 		/*style: "margin-left: 10px; padding: 0px; margin-top: 20px; width: 424px; height: 100px; background-image: url(\"assets/room_services/panels/request_aditional_panel.png\"); background-repeat: no-repeat; background-size: auto;",*/
						components:
		 			 		[
		 			 		 	{content: date,/*style: "padding-top: 35px; padding-left: 20px; color: white;"*/},
		 			 		 	
		 			 		 	
		 			 		]
			 		}, {owner: this}
				).render();
		},
		
		createNewRequestName: function(/*id,*/ name)
		{
			//var serviceName = inSender.components[0].content;
			this.$.descricaoContainer.createComponent(
					{style:" margin-left: 50px; margin-top: 15px;", /*serviceName: name, ontap: "teste",*/
						//serviceID: id, serviceDate: date,
	 			 		//style: "margin-left: 50px; padding: 0px; margin-top: 10px;",
						components:
		 			 		[
		 			 		 	{content: name },
		 			 		 
	
		 			 		]
			 		}, {owner: this}
				).render();
		},
		
		
		createNewRequestPrice: function(/*id,*/ price)
		{
			
			
			this.$.precoContainer.createComponent(
					{style:"margin-top: 15px", /*ontap: "requestExtraTapped",*/ 
						//serviceID: id, serviceDate: date,
						//style:"text-align:right; margin-right:60px",
	 			 		/*style: "margin-left: 10px; padding: 0px; margin-top: 20px; width: 424px; height: 100px; background-image: url(\"assets/room_services/panels/request_aditional_panel.png\"); background-repeat: no-repeat; background-size: auto;",*/
						components:
		 			 		[
		 			 		 	{content: price + ' \u20AC'},
	
		 			 		]
			 		}, {owner: this}
				).render();
		},
		
		createNewRequestTotalSum: function(/*id,*/ total)
		{
			/*var total=0;
			total = total+price;
			*/
			this.$.totalPriceContainer.createComponent(
					//{style:"padding-bottom: 10px; border-radius: 7px; margin: 20px;", /*ontap: "requestExtraTapped",*/ 
						//serviceID: id, serviceDate: date,
	 			 		{style: "text-align:right;  padding: 10px; margin-left:70px",
						components:
		 			 		[
		 			 		 	{content: total + ' \u20AC'},
		 			 		 

		 			 		]
			 		}, {owner: this}
				).render();
		},
		
		

		webService: function(URL, data)
		{
			return this.owner.webService(URL, data);
		},
		

		//back button
    	onExpenditureCancelTapped: function()
    	{
    		this.owner.loadMainScreen();
    	}	
		
		});
