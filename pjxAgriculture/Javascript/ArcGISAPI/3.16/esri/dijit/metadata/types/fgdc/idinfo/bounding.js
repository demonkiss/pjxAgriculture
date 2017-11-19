// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/idinfo/templates/bounding.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'bounding\',label:\'${i18nFgdc.idinfo.spdom.bounding.caption}\'"\x3e\r\n    \r\n    \x3cdiv class\x3d"gxeGeoExtentSection"\x3e  \r\n      \r\n      \x3cdiv class\x3d"gxeGeoExtentCoordinates"\x3e        \r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'westbc\',value:-180,\r\n            label:\'${i18nFgdc.idinfo.spdom.bounding.westbc}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n            data-dojo-props\x3d"hint:\'${i18nBase.hints.longitude}\'"\x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/fgdc/GeoExtentTool"\r\n              data-dojo-props\x3d"label:\'${i18nBase.geoExtent.button}\'"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'eastbc\',value:180,\r\n            label:\'${i18nFgdc.idinfo.spdom.bounding.eastbc}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n            data-dojo-props\x3d"hint:\'${i18nBase.hints.longitude}\'"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'northbc\',value:90,\r\n            label:\'${i18nFgdc.idinfo.spdom.bounding.northbc}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n            data-dojo-props\x3d"hint:\'${i18nBase.hints.latitude}\'"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'southbc\',value:-90,\r\n            label:\'${i18nFgdc.idinfo.spdom.bounding.southbc}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputNumber"\r\n            data-dojo-props\x3d"hint:\'${i18nBase.hints.latitude}\'"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv class\x3d"gxeGeoExtentViewSection gxeViewOnly"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"gxeGeoExtentBottom"\x3e\x3c/div\x3e\r\n      \r\n    \x3c/div\x3e  \r\n        \r\n  \x3c/div\x3e\r\n    \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/idinfo/bounding","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputNumber ../../../form/fgdc/GeoExtentTool dojo/text!./templates/bounding.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.idinfo.bounding",a,f);return a});