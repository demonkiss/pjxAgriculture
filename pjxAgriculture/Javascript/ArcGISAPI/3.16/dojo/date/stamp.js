/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/date/stamp",["../_base/lang","../_base/array"],function(k,h){var e={};k.setObject("dojo.date.stamp",e);e.fromISOString=function(f,d){e._isoRegExp||(e._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);var a=e._isoRegExp.exec(f),g=null;if(a){a.shift();a[1]&&a[1]--;a[6]&&(a[6]*=1E3);d&&(d=new Date(d),h.forEach(h.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "),function(a){return d["get"+a]()}),
function(b,c){a[c]=a[c]||b}));g=new Date(a[0]||1970,a[1]||0,a[2]||1,a[3]||0,a[4]||0,a[5]||0,a[6]||0);100>a[0]&&g.setFullYear(a[0]||1970);var b=0,c=a[7]&&a[7].charAt(0);"Z"!=c&&(b=60*(a[8]||0)+(Number(a[9])||0),"-"!=c&&(b*=-1));c&&(b-=g.getTimezoneOffset());b&&g.setTime(g.getTime()+6E4*b)}return g};e.toISOString=function(f,d){var a=function(a){return 10>a?"0"+a:a};d=d||{};var g=[],b=d.zulu?"getUTC":"get",c="";"time"!=d.selector&&(c=f[b+"FullYear"](),c=["0000".substr((c+"").length)+c,a(f[b+"Month"]()+
1),a(f[b+"Date"]())].join("-"));g.push(c);if("date"!=d.selector){c=[a(f[b+"Hours"]()),a(f[b+"Minutes"]()),a(f[b+"Seconds"]())].join(":");b=f[b+"Milliseconds"]();d.milliseconds&&(c+="."+(100>b?"0":"")+a(b));if(d.zulu)c+="Z";else if("time"!=d.selector)var b=f.getTimezoneOffset(),e=Math.abs(b),c=c+((0<b?"-":"+")+a(Math.floor(e/60))+":"+a(e%60));g.push(c)}return g.join("T")};return e});