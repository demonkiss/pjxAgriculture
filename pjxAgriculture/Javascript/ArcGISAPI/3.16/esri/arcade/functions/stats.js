// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
define("esri/arcade/functions/stats",["require","exports","../languageUtils","./fieldStats"],function(l,k,g,h){function f(d,e,b,a){return 1===a.length&&g.isArray(a[0])?h.calculateStat(d,a[0],g.defaultUndefined(a[1],1E3)):h.calculateStat(d,a)}k.registerFunctions=function(d,e){d.stdev=function(b,a){return e(b,a,function(a,b,c){return f("stdev",a,b,c)})};d.variance=function(b,a){return e(b,a,function(a,b,c){return f("variance",a,b,c)})};d.average=function(b,a){return e(b,a,function(a,b,c){return f("mean",
a,b,c)})};d.mean=function(b,a){return e(b,a,function(a,b,c){return f("mean",a,b,c)})};d.sum=function(b,a){return e(b,a,function(a,b,c){return f("sum",a,b,c)})};d.min=function(b,a){return e(b,a,function(a,b,c){return f("min",a,b,c)})};d.max=function(b,a){return e(b,a,function(a,b,c){return f("max",a,b,c)})};d.distinct=function(b,a){return e(b,a,function(a,b,c){return f("distinct",a,b,c)})};d.count=function(b,a){return e(b,a,function(a,b,c){g.pcCheck(c,1,1);if(g.isArray(c[0])||g.isString(c[0]))return c[0].length;
throw Error("Invalid Parameters for Count");})}}});