enyo.kind(
		{name: "checkout_screen", kind: "FittableRows", classes: "moon enyo-unselectable enyo-fit full",
			components:
				[
				 {content: "Expenditures", style: "font-size: 60px;"},
				 {kind: "FittableColumns", fit:true,
					 components:[
					            {kind: "FittableRows", style: "width:33%; padding: 10px;", fit:true,
					            	components:
					            		[
					            		 {kind: "FittableColumns",
					            			 components:
					            				 [
					            				  {kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150"},
					            				  {content: "Accommodation", style: "padding-top: 90px;"},
					            				  ]
					            		 },
					            	 			{kind: "FittableColumns", fit:true,
				            					  components: [
				            			      
{kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
  [{content: "Date" },
   {content: "02.12.14",style:"font-size:small;"},
   ]},
   {kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
    	  [{content: "Description" },
    	   {content: "Garden Dream Palace: 5 nights in the Junior Suite. All inclusive.",style:"font-size:small;"},
    	   ]},
    {kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
		    	  [{content: "Price" },
		    	   {content: "300", style:"font-size:small;"},
		    	   ]},      
]
					            	 			},
					            	 					{content: "300.00", style:"text-align:right;"}
					            		 ]
					            		 
					            },
					            {kind: "FittableRows", style: "width:33%;padding: 10px;",
				 			 		components:
				 			 			[
				 			 			 	{kind: "FittableColumns",
				 			 			 		components:
				 			 			 		[
				 			 			 		 	{kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150"},
				 			 			 		 	{content: "Hotel Services", style: "padding-top: 90px;"}
				 			 			 		]
				 			 			 	},
				 			 			 	{kind: "FittableColumns", fit:true,
				            					  components: [
				            			      
				            					               {kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
  [{content: "Date" },
   {content: "03.12.14",style:"font-size:small;"},
   {content: "05.12.14",style:"font-size:small;"},
   ]},
   {kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
    	  [{content: "Description" },
    	   {content: "Extra Cleaning.",style:"font-size:small;"},
    	   {content: "Hot Stone Massage for 30min + bathing in rosé water and candels.",style:"font-size:small;"},
    	   ]},
    {kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
		    	  [{content: "Price" },
		    	   {content: "20", style:"font-size:small;"},
		    	   {content: "90", style:"font-size:small;"},
		    	   ]}]},      

				 			 			 		            {content: "110.00", style:"text-align:right;"}
				 			 			 		            
				 			 			 	]
					            },
					            {kind: "FittableRows", style: "padding: 10px;",
				 			 		components:
				 			 			[
				 			 			 	{kind: "FittableColumns",
				 			 			 		components:
				 			 			 		[
				 			 			 		 {kind: "enyo.Image", style: "padding: 20px;", src: "http://placehold.it/150x150"},
				 			 			 		 {content: "Activities", style: "padding-top: 90px;"},
				 			 			 	    ]
				 			 			 	},
				 			 			 	{kind: "FittableColumns", fit:true,
				            					  components: [
				            			      {kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
				            			    	  [{content: "Date" },
				            			    	   {content: "02.12.14",style:"font-size:small;"},
				            			    	   {content: "04.12.14",style:"font-size:small;"},
				            			    	   {content: "04.12.14",style:"font-size:small;"}
				            			    	   ]},
				            			    	   {kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
						            			    	  [{content: "Description" },
						            			    	   {content: "Fitnesscenter: Zumba lesson for 50min.",style:"font-size:small;"},
						            			    	   {content: "Snorkeling at the Bay Cliff.",style:"font-size:small;"},
						            			    	   {content: "Boattour with the Santa Marina in Bay Harbour. Dolfin watching and lunch included.",style:"font-size:small;"}
						            			    	   ]},
						            			    {kind:"FittableRows",style:" padding:4px;border: 1px solid grey;",components:
								            			    	  [{content: "Price" },
								            			    	   {content: "30", style:"font-size:small;"},
								            			    	   {content: "20", style:"font-size:small;"},
								            			    	   {content: "70", style:"font-size:small;"}
								            			    	   ]},      
				            				 
					            		 ]
					            	 			},
					            	 			{content: "120.00", style:"text-align:right;"}
					            	 			]
					            	},
						            
						            
					            ]
				 },
				 {content: "Total Expenditures:", style:"text-align:right;"},
		            {content: "530.00 Euro", style:"font-size:50px;text-align:right;"},
		            {kind:"FittableColumns",components:[
		                                                {kind: "moon.Button", content: "Cancel", style: "margin: 50px;", ontap: "onExpenditureCancelTapped"},
		                                                {kind: "moon.Button", content: "Proceed", style: "margin: 50px;", ontap: "onExpenditureTapped", popup:"expenditurePopUp"},
		                                                ]},
		            {name: "expenditurePopUp", showCloseButton:true, kind: "moon.Popup", 
		                                                	components:
		                [{kind:"FittableRows",components:[
		                 {content: "Check Out", style: "font-size: 60px;"},
		                 {kind: "moon.BodyText", content: "Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.Nulla wisi laoreet suspendisse hendrerit facilisi, mi mattis pariatur adipiscing aliquam pharetra eget. Aenean urna ipsum donec tellus tincidunt, quam curabitur metus, pretium purus facilisis enim id, integer eleifend vitae volutpat consequat per leo. Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi." +
		     	  		"Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi.Nulla wisi laoreet suspendisse hendrerit facilisi, mi mattis pariatur adipiscing aliquam pharetra eget. Aenean urna ipsum donec tellus tincidunt, quam curabitur metus, pretium purus facilisis enim id, integer eleifend vitae volutpat consequat per leo. Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna praesent at id quisque ac. Arcu massa vestibulum malesuada, integer vivamus elit eu mauris eu, cum eros quis aliquam nisl wisi."},
		     	  		{content:"Please Select you preferable payment method:"},
		     	  		{kind:"FittableColumns",components:[
																{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",
																		components:
																		[
																		 	{kind: "enyo.Image", src: "http://placehold.it/150x150"},
																		]
																},
																{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",
																	components:
																	[
																	 	{kind: "enyo.Image", src: "http://placehold.it/150x150"},
																	]
																},
																{kind: "moon.Item", style:"display: inline-block; padding-bottom: 2px; border-radius: 7px;",
																	components:
																	[
																	 	{kind: "enyo.Image", src: "http://placehold.it/150x150"},
																	]
																},
		     	  		                                    ]},
		                 
		                 ]}
		                                                
		            ]
		            }
		            ],
		        	
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
		        	
		        	// Expenditure Cancel
		        	onExpenditureCancelTapped: function()
		        	{
		        		this.owner.loadMainScreen();
		        	},	
		            
		
				 }
);