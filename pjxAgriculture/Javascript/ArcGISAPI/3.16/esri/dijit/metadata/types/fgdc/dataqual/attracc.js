// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/dataqual/templates/attracc.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'attracc\',minOccurs:0,\r\n      label:\'${i18nFgdc.dataqual.attracc.caption}\'"\x3e\r\n      \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'attraccr\',\r\n        label:\'${i18nFgdc.dataqual.attracc.attraccr}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'qattracc\',minOccurs:0,maxOccurs:\'unbounded\',\r\n        label:\'${i18nFgdc.dataqual.attracc.qattracc.caption}\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'attraccv\',alternateValues:[\'Unknown\'],\r\n            label:\'${i18nFgdc.dataqual.attracc.qattracc.attraccv}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputText" \x3e\r\n            \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/tools/ClickableValueTool"\r\n              data-dojo-props\x3d"value:\'Unknown\',label:\'${i18nFgdc.alternates.unknown}\'"\x3e\x3c/div\x3e  \r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n          data-dojo-props\x3d"target:\'attracce\',\r\n            label:\'${i18nFgdc.dataqual.attracc.qattracc.attracce}\'"\x3e\r\n          \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n  \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/fgdc/dataqual/attracc","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputText ../../../form/InputTextArea ../../../form/tools/ClickableValueTool dojo/text!./templates/attracc.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.dataqual.attracc",a,f);return a});