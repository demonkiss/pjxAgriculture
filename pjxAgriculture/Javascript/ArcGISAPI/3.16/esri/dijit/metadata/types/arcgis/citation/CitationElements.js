// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/citation/templates/CitationElements.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'resTitle\',minOccurs:1,label:\'${i18nArcGIS.citation.resTitle}\'"\x3e\r\n  \x3c/div\x3e  \r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'date\',minOccurs:1,showHeader:false"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n      data-dojo-props\x3d"target:\'pubDate\',minOccurs:1,label:\'${i18nArcGIS.citation.date.pubDate}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputDate" data-dojo-props\x3d"allowTime:true"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/citation/CitationElements","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/CitationElements.html ./ContactElements ./OnlineResourceElements".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.citation.CitationElements",a,d);return a});