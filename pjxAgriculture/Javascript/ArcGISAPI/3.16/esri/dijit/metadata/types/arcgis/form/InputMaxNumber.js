// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputMaxNumber","dojo/_base/declare dojo/_base/lang dojo/query dijit/registry dojo/has ../../../../../kernel ../../../base/etc/docUtil ../../../form/InputNumber".split(" "),function(a,c,l,m,f,g,h,k){a=a([k],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(a){this.inherited(arguments);try{var d=this.parentXNode.target,b=null;"maxVal"===d?b="minVal":"rdommax"===d?b="rdommin":"vertMaxVal"===d&&(b="vertMinVal");if(null!==
b){var e=h.findInputWidget(this.parentXNode.parentElement.gxePath+"/"+b,this.parentXNode.domNode.parentNode);e&&e.emitInteractionOccurred()}}catch(c){console.error(c)}}});f("extend-esri")&&c.setObject("dijit.metadata.types.arcgis.form.InputMaxNumber",a,g);return a});