// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/editor/util/templates/OkCancelBar.html":'\x3cdiv\x3e   \r\n  \x3cdiv class\x3d"gxeDialogActionBar"\x3e\r\n    \x3cdiv class\x3d"gxeRight gxeFloatRight gxeButtons"\x3e\r\n      \x3cdiv class\x3d"gxeMessage" data-dojo-attach-point\x3d"workingNode"\x3e\x3c/div\x3e\r\n      \x3cbutton class\x3d"gxeButton prominent" data-dojo-attach-point\x3d"okButton"\r\n        data-dojo-attach-event\x3d"onclick: onOkClick"\x3e${okLabel}\x3c/button\x3e\r\n      \x3cbutton class\x3d"gxeButton" data-dojo-attach-point\x3d"cancelButton"\r\n        data-dojo-attach-event\x3d"onclick: onCancelClick"\x3e${cancelLabel}\x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"gxeClear"\x3e\x3c/div\x3e\r\n   \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/editor/util/OkCancelBar","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/has ../../base/Templated dojo/text!./templates/OkCancelBar.html dojo/i18n!../../nls/i18nBase dijit/form/Button ../../../../kernel".split(" "),function(a,e,d,f,g,h,c,l,k){a=a([g],{cancelIsProminent:!1,cancelLabel:c.general.cancel,isWorking:!1,okLabel:c.general.ok,showCancel:!0,showOk:!0,templateString:h,postCreate:function(){this.inherited(arguments);this.showOk||(this.okButton.style.display=
"none");this.showCancel||(this.cancelButton.style.display="none");this.cancelIsProminent&&(d.remove(this.okButton,"prominent"),d.add(this.cancelButton,"prominent"))},postMixInProperties:function(){this.inherited(arguments);null===this.okLabel&&(this.okLabel=c.general.ok);null===this.cancelLabel&&(this.cancelLabel=c.general.cancel)},disableOk:function(){this.okButton.disabled=!0},enableOk:function(){this.showOk&&(this.okButton.disabled=!1)},hideWorking:function(b){this.isWorking=!1;this.workingNode.innerHTML=
"";b&&this.enableOk()},onCancelClick:function(b){},onOkClick:function(b){},showFatalError:function(b,a){this.disableOk();this.hideWorking(!1);this.setNodeText(this.workingNode,b);a?console.error(b,a):console.error(b)},showWorking:function(b,a){this.isWorking=!0;a&&this.disableOk();this.setNodeText(this.workingNode,b)}});f("extend-esri")&&e.setObject("dijit.metadata.editor.util.OkCancelBar",a,k);return a});