//>>built
define("dojox/data/dom",["dojo/_base/kernel","dojo/_base/lang","dojox/xml/parser"],function(a,c,b){dojo.deprecated("dojox.data.dom","Use dojox.xml.parser instead.","2.0");a=c.getObject("dojox.data.dom",!0);a.createDocument=function(d,a){dojo.deprecated("dojox.data.dom.createDocument()","Use dojox.xml.parser.parse() instead.","2.0");try{return b.parse(d,a)}catch(c){return null}};a.textContent=function(d,a){dojo.deprecated("dojox.data.dom.textContent()","Use dojox.xml.parser.textContent() instead.",
"2.0");return 1<arguments.length?b.textContent(d,a):b.textContent(d)};a.replaceChildren=function(a,c){dojo.deprecated("dojox.data.dom.replaceChildren()","Use dojox.xml.parser.replaceChildren() instead.","2.0");b.replaceChildren(a,c)};a.removeChildren=function(a){dojo.deprecated("dojox.data.dom.removeChildren()","Use dojox.xml.parser.removeChildren() instead.","2.0");return dojox.xml.parser.removeChildren(a)};a.innerXML=function(a){dojo.deprecated("dojox.data.dom.innerXML()","Use dojox.xml.parser.innerXML() instead.",
"2.0");return b.innerXML(a)};return a});