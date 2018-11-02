sap.ui.define([
	
], function(){
	"use strict";
	sap.ui.jsview("com.demo.myfirstrepo.home", {

		/** Specifies the Controller belonging to this View. 
		* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
		* @memberOf myfirstrepo.home
		*/ 
		getControllerName : function() {
			return "com.demo.myfirstrepo.home";
		},

		/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
		* Since the Controller is given to this method, its event handlers can be attached right away. 
		* @memberOf myfirstrepo.home
		*/ 
		createContent : function(oController) {
	 		return new sap.m.Page({
				title: "Title",
				content: [
				  new sap.m.Button({
					  text: "Click on me or u will die for sure!!"
				  })
				]
			});
		}

	});
});