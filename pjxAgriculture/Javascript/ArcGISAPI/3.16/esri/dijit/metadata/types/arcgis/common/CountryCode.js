// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/common/templates/CountryCode.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/OpenElement"\r\n    data-dojo-props\x3d"target:\'countryCode\',minOccurs:0,showHeader:false"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Attribute"\r\n      data-dojo-props\x3d"target:\'value\',minOccurs:0,noIndent:${noIndent},label:\'${i18nArcGIS.codelist.CountryCode}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/form/InputSelectCode"\r\n        data-dojo-props\x3d"codelistType:\'CountryCode\'"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/common/CountryCode","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/CountryCode.html".split(" "),function(a,b,c,d,e,f){a=a(e,{noIndent:!1,templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.common.CountryCode",a,d);return a});