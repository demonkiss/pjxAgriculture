// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/editor/util/templates/LoadDocumentPane.html":'\x3cdiv class\x3d"gxePrimaryPane gxeLoadDocumentPane" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv class\x3d"gxePrompt" data-dojo-attach-point\x3d"promptNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \r\n  \x3cdiv class\x3d"gxeTabs" data-dojo-attach-point\x3d"tabsNode"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/base/TabButton" data-dojo-attach-point\x3d"typeTab"\r\n      data-dojo-props\x3d"xtnMode:\'type\',label:\'${i18nBase.editor.load.typeTab}\'"\r\n      data-dojo-attach-event\x3d"onClick: _onTypeTabClick"\x3e\'\r\n    \x3c/div\x3e\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/base/TabButton" data-dojo-attach-point\x3d"fileTab"\r\n      data-dojo-props\x3d"xtnMode:\'file\',label:\'${i18nBase.editor.load.fileTab}\'"\r\n      data-dojo-attach-event\x3d"onClick: _onFileTabClick"\x3e\r\n    \x3c/div\x3e\x3cdiv data-dojo-type\x3d"esri/dijit/metadata/base/TabButton" data-dojo-attach-point\x3d"itemTab"\r\n      data-dojo-props\x3d"xtnMode:\'item\',label:\'${i18nBase.editor.load.itemTab}\'"\r\n      data-dojo-attach-event\x3d"onClick: _onItemTabClick"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \r\n  \x3cdiv class\x3d"gxeSection" data-dojo-attach-point\x3d"typesSection"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"typesNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeSection" data-dojo-attach-point\x3d"fileSection"\x3e\r\n    \x3cdiv class\x3d"gxePrompt" data-dojo-attach-point\x3d"filePrompt"\x3e${i18nBase.editor.load.filePrompt}\x3c/div\x3e\r\n    \x3cdiv class\x3d"gxePrompt"\x3e\r\n      \x3cinput id\x3d"${id}_astcbx" type\x3d"checkbox" data-dojo-attach-point\x3d"astCheckBoxNode" /\x3e\r\n      \x3clabel for\x3d"${id}_astcbx"  data-dojo-attach-point\x3d"labelNode"\x3e${i18nBase.editor.load.pullItem}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n     \x3cdiv class\x3d"gxeInputFileContainer" data-dojo-attach-point\x3d"importNode"\x3e\x3c/div\x3e\r\n     \x3cdiv class\x3d"gxeLine gxeWarningSection" style\x3d"display:none"\r\n      data-dojo-attach-point\x3d"importWarningSection" \x3e\r\n      \x3cdiv class\x3d"gxeIconWarning"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"gxeWarning" data-dojo-attach-point\x3d"importWarningNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"gxeSection" data-dojo-attach-point\x3d"itemSection"\x3e\r\n    \x3cdiv class\x3d"gxeClickableText gxeLine" data-dojo-attach-point\x3d"pullItemNode"\r\n      data-dojo-attach-event\x3d"onClick: _onPullItemClick"\x3e${i18nBase.editor.load.pullItem}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/editor/util/LoadDocumentPane","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/aspect dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../../base/xml/xmlUtil ../../base/xml/XmlInterrogator ../../base/Templated dojo/text!./templates/LoadDocumentPane.html dojo/i18n!../../nls/i18nBase ../../base/TabButton ../../../../kernel".split(" "),function(e,f,h,l,k,g,c,m,n,p,q,r,d,u,s){e=e([q],{_escapeSingleQuotes:!0,_inputFileNode:null,_working:!1,editor:null,dialogBroker:null,
prompt:null,templateString:r,postCreate:function(){this.inherited(arguments);this.fileSection.xtnAsTemplate=!1;this._initialize()},onSelect:function(a,b,c){},onSelectPullItem:function(){},_addBrowseButton:function(){var a=g.create("div",{},this.importNode);this._inputFileNode=g.create("input",{"class":"gxeLine",type:"file",onchange:f.hitch(this,function(a){this._loadXmlFile(a)})},a)},_addDocType:function(a){var b=g.create("div",{},this.typesNode),b=g.create("div",{"class":"gxeClickableText gxeLine",
onclick:f.hitch(this,function(){this._working||this._loadDocType(a)})},b);this.setI18nNodeText(b,d.editor.load.templatePrompt)},_initialize:function(){null!==this.prompt&&(this.setI18nNodeText(this.promptNode,this.prompt),this.promptNode.style.display="");var a=this.editor.getEditDocument(),b=window&&window.FileReader,a=a&&this.editor.gxeAdaptor.getAllowPullItem(),t=this.editor.gxeContext.filterDocumentTypes();this._setMode("file");h.forEach(t,function(a){this._addDocType(a)},this);b?this._addBrowseButton():
c.set(this.fileTab.domNode,"display","none");a||c.set(this.itemTab.domNode,"display","none");c.set(this.typeTab.domNode,"display","none");c.set(this.itemTab.domNode,"display","none");this.astCheckBoxNode.checked=!1},_loadDocType:function(a){if(!this._working)this.onSelect(a,null,!1)},_loadXmlFile:function(a){this.importWarningNode.innerHTML="";this.importWarningSection.style.display="none";if(a&&(a.target&&a.target.files)&&FileReader){var b=null;(a=a.target.files)&&1===a.length&&(b=a[0]);b&&(this._showMessage(d.editor.load.loading),
a=new FileReader,this.own(l.after(a,"onload",f.hitch(this,function(a){a&&a.target&&a.target.result?this._working||(this._showMessage(d.editor.load.loading),this._parseAndLoad(a.target.result)):this._showUnrecognizedXml(d.editor.load.warnings.badFile)}),!0)),a.readAsText(b))}},_onFileTabClick:function(a){this._working||this._setMode(a.xtnMode)},_onItemTabClick:function(a){this._working||this._setMode(a.xtnMode)},_onPullItemClick:function(){if(!this._working)this.onSelectPullItem()},_onTemplateTabClick:function(a){this._working||
this._setMode(a.xtnMode)},_onTypeTabClick:function(a){this._working||this._setMode(a.xtnMode)},_parseAndLoad:function(a){var b=null;try{b=n.parseFromString(a)}catch(c){console.error(c);this._showUnrecognizedXml(d.editor.load.warnings.badFile);return}a=this.editor.gxeContext.filterDocumentTypes();a=(new p).interrogate(b,a);var e=this.astCheckBoxNode.checked&&!0;if(a)this.onSelect(a,b,e);else this._showUnrecognizedXml(d.editor.load.warnings.notSupported)},_setMode:function(a){h.forEach([this.typeTab,
this.fileTab,this.itemTab],function(b){a===b.xtnMode?k.add(b.domNode,"current"):k.remove(b.domNode,"current")});this.fileSection.xtnAsTemplate="template"===a;"type"===a?(c.set(this.fileSection,"display","none"),c.set(this.itemSection,"display","none"),c.set(this.typesSection,"display","")):"item"===a?(c.set(this.typesSection,"display","none"),c.set(this.fileSection,"display","none"),c.set(this.itemSection,"display","")):(c.set(this.typesSection,"display","none"),c.set(this.itemSection,"display","none"),
c.set(this.fileSection,"display",""))},_showMessage:function(a){if(this.dialogBroker){var b=this.dialogBroker.okCancelBar;b&&b.showWorking(a)}},_showUnrecognizedXml:function(a){this.setNodeText(this.importWarningNode,d.editor.load.importWarning);this.importWarningSection.style.display="block";this.dialogBroker&&this.dialogBroker.okCancelBar&&this.dialogBroker.okCancelBar.hideWorking()}});m("extend-esri")&&f.setObject("dijit.metadata.editor.util.LoadDocumentPane",e,s);return e});