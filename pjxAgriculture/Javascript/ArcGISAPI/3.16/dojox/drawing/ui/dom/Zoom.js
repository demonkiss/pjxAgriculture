//>>built
define("dojox/drawing/ui/dom/Zoom",["dojo","../../util/oo","../../plugins/_Plugin"],function(a,d,f){d=d.declare(f,function(e){this.domNode=a.create("div",{id:"btnZoom","class":"toolCombo"},e.node,"replace");this.makeButton("ZoomIn",this.topClass);this.makeButton("Zoom100",this.midClass);this.makeButton("ZoomOut",this.botClass)},{type:"dojox.drawing.ui.dom.Zoom",zoomInc:0.1,maxZoom:10,minZoom:0.1,zoomFactor:1,baseClass:"drawingButton",topClass:"toolComboTop",midClass:"toolComboMid",botClass:"toolComboBot",
makeButton:function(e,d){var b=a.create("div",{id:"btn"+e,"class":this.baseClass+" "+d,innerHTML:'\x3cdiv title\x3d"Zoom In" class\x3d"icon icon'+e+'"\x3e\x3c/div\x3e'},this.domNode);a.connect(document,"mouseup",function(c){a.stopEvent(c);a.removeClass(b,"active")});a.connect(b,"mouseup",this,function(c){a.stopEvent(c);a.removeClass(b,"active");this["on"+e]()});a.connect(b,"mouseover",function(c){a.stopEvent(c);a.addClass(b,"hover")});a.connect(b,"mousedown",this,function(c){a.stopEvent(c);a.addClass(b,
"active")});a.connect(b,"mouseout",this,function(c){a.stopEvent(c);a.removeClass(b,"hover")})},onZoomIn:function(a){this.zoomFactor+=this.zoomInc;this.zoomFactor=Math.min(this.zoomFactor,this.maxZoom);this.canvas.setZoom(this.zoomFactor);this.mouse.setZoom(this.zoomFactor)},onZoom100:function(a){this.zoomFactor=1;this.canvas.setZoom(this.zoomFactor);this.mouse.setZoom(this.zoomFactor)},onZoomOut:function(a){this.zoomFactor-=this.zoomInc;this.zoomFactor=Math.max(this.zoomFactor,this.minZoom);this.canvas.setZoom(this.zoomFactor);
this.mouse.setZoom(this.zoomFactor)}});a.setObject("dojox.drawing.ui.dom.Zoom",d);return d});