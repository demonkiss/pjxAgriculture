// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/OptionsMixin","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojo/Deferred ../../../kernel".split(" "),function(a,b,d,e,f,g){a=a(null,{constructor:function(a){b.mixin(this,a)},fetchOptionWidgets:function(){var a=new f,c=null,b=[];d.forEach(this.getChildren(),function(a){a._isGxeOptions?c=a:a._isGxeOption&&b.push(a)});return null===c?(a.resolve(b),a):c.fetchOptionWidgets()}});e("extend-esri")&&b.setObject("dijit.metadata.base.OptionsMixin",a,g);return a});