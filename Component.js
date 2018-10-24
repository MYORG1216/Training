sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent){
  "use strict";
  return UIComponent.extend("com.demo.Component", {
	 metadata: {
		 routing: {
			 config: {
				 routerClass: sap.m.routing.Router,
				 viewType: "JS",
				 controlId: "com.demo.App",
				 controlAggregation: "pages",
			 },
			 routes: {
				 home: {
					pattern: "",
					target: "home"
				 }
			 },
			 targets: {
				home: {
					viewId: "com.demo.myfirstrepo.home",
					viewName: "com.demo.myfirstrepo.home"
				}
			 }
		 }
	 },
	 init: function() {
		 UIComponent.prototype.init.apply(this, arguments);
		 this.getRouter().initialize();
	 },
	 createContent: function(){
		 return new sap.m.App("com.demo.App");
	 }
  });
});