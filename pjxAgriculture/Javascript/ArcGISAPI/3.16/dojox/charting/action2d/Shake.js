//>>built
define("dojox/charting/action2d/Shake","dojo/_base/connect dojo/_base/declare ./PlotAction dojo/fx dojo/fx/easing dojox/gfx/matrix dojox/gfx/fx".split(" "),function(h,k,l,m,n,p,g){return k("dojox.charting.action2d.Shake",l,{defaultParams:{duration:400,easing:n.backOut,shiftX:3,shiftY:3},optionalParams:{},constructor:function(a,c,b){b||(b={});this.shiftX="number"==typeof b.shiftX?b.shiftX:3;this.shiftY="number"==typeof b.shiftY?b.shiftY:3;this.connect()},process:function(a){if(a.shape&&a.type in this.overOutEvents){var c=
a.run.name,b=a.index,e=[],d;c in this.anim?d=this.anim[c][b]:this.anim[c]={};d?d.action.stop(!0):this.anim[c][b]=d={};var f={shape:a.shape,duration:this.duration,easing:this.easing,transform:[{name:"translate",start:[this.shiftX,this.shiftY],end:[0,0]},p.identity]};a.shape&&e.push(g.animateTransform(f));a.oultine&&(f.shape=a.outline,e.push(g.animateTransform(f)));a.shadow&&(f.shape=a.shadow,e.push(g.animateTransform(f)));e.length?(d.action=m.combine(e),"onmouseout"==a.type&&h.connect(d.action,"onEnd",
this,function(){this.anim[c]&&delete this.anim[c][b]}),d.action.play()):delete this.anim[c][b]}}})});