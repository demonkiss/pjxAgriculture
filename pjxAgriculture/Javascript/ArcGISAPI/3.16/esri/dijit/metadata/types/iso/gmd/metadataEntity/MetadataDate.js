// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/iso/gmd/metadataEntity/templates/MetadataDate.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:dateStamp\',\r\n      label:\'${i18nIso.MD_Metadata.dateStamp}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n      data-dojo-props\x3d"target:\'gco:Date\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputDate" data-dojo-props\x3d"useNow:true"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e      \r\n          \r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataDate","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputDate ../../../../form/iso/GcoElement dojo/text!./templates/MetadataDate.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.iso.gmd.metadataEntity.MetadataDate",a,f);return a});