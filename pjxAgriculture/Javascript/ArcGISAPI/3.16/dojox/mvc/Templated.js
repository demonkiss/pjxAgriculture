//>>built
define("dojox/mvc/Templated","dojo/_base/declare dojo/_base/lang dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./at".split(" "),function(f,g,h,k,l){return f("dojox.mvc.Templated",[h,k,l],{bindings:null,startup:function(){var b=g.isFunction(this.bindings)&&this.bindings.call(this)||this.bindings,a;for(a in b){var c=this[a],d=b[a];if(c)for(var e in d)c.set(e,d[e]);else console.warn("Widget with the following attach point was not found: "+a)}this.inherited(arguments)}})});