// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/gemini/base/templates/ServiceRoot.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n    data-dojo-props\x3d"target:\'gmd:MD_Metadata\',label:\'${i18nGemini.documentTypes.service.caption}\'"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n      \x3c!-- specific for Gemini --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/gmd/metadataEntity/MetadataSection"\r\n        data-dojo-props\x3d"label:\'${i18nIso.sections.metadata}\'"\x3e\x3c/div\x3e\r\n      \x3c!-- specific for Gemini --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/srv/ServiceIdentification"\r\n        data-dojo-props\x3d"label:\'${i18nIso.sections.identification}\'"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/distribution/Distribution"\r\n        data-dojo-props\x3d"label:\'${i18nIso.sections.distribution}\'"\x3e\x3c/div\x3e\r\n      \x3c!-- specific for Gemini --\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/gmd/dataQuality/Quality"\r\n        data-dojo-props\x3d"label:\'${i18nIso.sections.quality}\'"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/gemini/base/ServiceRoot","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/Tabs ../gmd/dataQuality/Quality ../gmd/metadataEntity/MetadataSection ../srv/ServiceIdentification ../../iso/gmd/distribution/Distribution dojo/text!./templates/ServiceRoot.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.gemini.base.ServiceRoot",
a,f);return a});