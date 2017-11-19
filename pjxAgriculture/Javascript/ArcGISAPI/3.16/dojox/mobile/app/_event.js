//>>built
define("dojox/mobile/app/_event",["dijit","dojo","dojox"],function(u,b,c){b.provide("dojox.mobile.app._event");b.experimental("dojox.mobile.app._event.js");b.mixin(c.mobile.app,{eventMap:{},connectFlick:function(c,d,e){var f,g,h=!1,k,l,m,n,p,r;b.connect("onmousedown",c,function(a){h=!1;f=a.targetTouches?a.targetTouches[0].clientX:a.clientX;g=a.targetTouches?a.targetTouches[0].clientY:a.clientY;r=(new Date).getTime();m=b.connect(c,"onmousemove",s);n=b.connect(c,"onmouseup",t)});var s=function(a){b.stopEvent(a);
k=a.targetTouches?a.targetTouches[0].clientX:a.clientX;l=a.targetTouches?a.targetTouches[0].clientY:a.clientY;15<Math.abs(Math.abs(k)-Math.abs(f))?(h=!0,p=k>f?"ltr":"rtl"):15<Math.abs(Math.abs(l)-Math.abs(g))&&(h=!0,p=l>g?"ttb":"btt")},t=function(a){b.stopEvent(a);m&&b.disconnect(m);n&&b.disconnect(n);if(h)if(a={target:c,direction:p,duration:(new Date).getTime()-r},d&&e)d[e](a);else e(a)}}});c.mobile.app.isIPhone=b.isSafari&&(-1<navigator.userAgent.indexOf("iPhone")||-1<navigator.userAgent.indexOf("iPod"));
c.mobile.app.isWebOS=-1<navigator.userAgent.indexOf("webOS");c.mobile.app.isAndroid=-1<navigator.userAgent.toLowerCase().indexOf("android");if(c.mobile.app.isIPhone||c.mobile.app.isAndroid)c.mobile.app.eventMap={onmousedown:"ontouchstart",mousedown:"ontouchstart",onmouseup:"ontouchend",mouseup:"ontouchend",onmousemove:"ontouchmove",mousemove:"ontouchmove"};b._oldConnect=b._connect;b._connect=function(q,d,e,f,g){d=c.mobile.app.eventMap[d]||d;if("flick"==d||"onflick"==d)if(b.global.Mojo)d=Mojo.Event.flick;
else return c.mobile.app.connectFlick(q,e,f);return b._oldConnect(q,d,e,f,g)}});