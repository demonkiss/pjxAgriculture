// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputHtmlArea","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dijit/Dialog dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-style dojo/has ../../../../../kernel ../../../base/etc/docUtil ../../../base/xml/xmlUtil ../../../form/InputTextArea ../../../form/tools/ClickableTool ../../../editor/util/OkCancelBar dojo/i18n!../../../nls/i18nArcGIS dijit/Editor dijit/_editor/plugins/FontChoice dijit/_editor/plugins/TextColor dijit/_editor/plugins/ViewSource dijit/_editor/plugins/LinkDialog".split(" "),
function(e,n,k,z,p,g,l,f,A,q,r,m,s,t,u,v,w,x,B,C,D,E){e=e([t],{postCreate:function(){this.inherited(arguments);this._makeEditTool()},_makeEditTool:function(){var a=this;l.add(this.domNode,"gxeInputHtmlTextArea");var b=f.create("span",{},this.focusNode,"after");new u({label:w.htmlEditor.button,whenToolClicked:function(){a._openDialog()}},b)},_openDialog:function(){var a=this,b,c=null,y=this.parentXNode.label,d=this.getInputValue();null===d&&(d="");var d=d.replace(/(\r\n|\r|\n|\n\r)/g,"\x3cbr /\x3e"),
h=f.create("div",{});b=new x({plugins:["bold","italic","underline","foreColor","hiliteColor","|","justifyLeft","justifyCenter","justifyRight","justifyFull","|","insertOrderedList","insertUnorderedList","indent","outdent","createLink","unlink","removeFormat","|","undo","redo","|","viewsource",{name:"dijit._editor.plugins.FontChoice",command:"fontName",custom:"Arial;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";")},{name:"dijit._editor.plugins.FontChoice",command:"fontSize",custom:["2",
"3","4","5","6"]}]},f.create("div",{},h));b.setValue(d);b.startup();var e=new v({onOkClick:function(){if(b){var d=b.get("value");null!==d&&(a.setInputValue(d),c&&c.hide())}},onCancelClick:function(){c&&c.hide()}},f.create("div",{},h)),c=new p({"class":"gxeDialog gxePopupDialog gxeHtmlEditorDialog",title:y,content:h});a.isLeftToRight()||l.add(c.domNode,"gxeRtl");a.own(c.on("hide",function(){setTimeout(function(){b.destroyRecursive(!1);e.destroyRecursive(!1);c.destroyRecursive(!1)},300)}));c.show()},
getInputValue:function(){return this.focusNode?m.cleanHtml(this.focusNode.value):null},setInputValue:function(a){"undefined"===typeof a&&(a=null);a=m.cleanHtml(a);this.focusNode.value=a;this.emitInteractionOccurred();this.applyViewOnly()},setNodeText:function(a,b){if(a===this.viewOnlyNode)try{this._cleanForView(a,b)}catch(c){console.error(c)}else this.inherited(arguments)},_cleanForView:function(a,b){var c=f.create("div",{},a,"last");c.innerHTML=b;this._walkForView(c)},_walkForView:function(a){var b,
c,e,d;a.nodeType===s.nodeTypes.ELEMENT_NODE&&(b=a.localName,"undefined"!==typeof b&&null!==b&&(b=b.toLowerCase(),k.forEach(a.attributes,function(b){c=b.localName;"undefined"!==typeof c&&null!==c&&(e=c.toLowerCase(),0===e.indexOf("on")?g.set(a,c,null):"href"===e&&(d=b.nodeValue,"undefined"!==typeof d&&null!==d&&0===d.toLowerCase().indexOf("http")&&g.remove(a,c)))},this),"a"===b&&g.set(a,"target","_blank"),k.forEach(a.childNodes,function(a){this._walkForView(a)},this)))}});q("extend-esri")&&n.setObject("dijit.metadata.types.arcgis.form.InputHtmlArea",
e,r);return e});