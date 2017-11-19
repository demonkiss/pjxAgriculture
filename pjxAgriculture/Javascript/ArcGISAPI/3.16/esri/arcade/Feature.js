// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
define("esri/arcade/Feature","require exports ../geometry/Geometry ../graphic ../geometry/jsonUtils ./Dictionary ./languageUtils".split(" "),function(n,p,l,m,k,h,f){return function(){function c(a,d){this.attributes=this.geometry=null;if(a instanceof c)this.attributes=a.attributes,this.geometry=a.geometry;else if(a instanceof m)this.geometry=a.geometry,this.attributes=void 0===a.attributes?{}:null===a.attributes?{}:a.attributes;else if(a instanceof h)this.attributes=a.field("attributes"),null!==this.attributes&&
(this.attributes=this.attributes instanceof h?this.attributes.attributes:null),this.geometry=a.field("geometry"),null!==this.geometry&&(this.geometry instanceof h?this.geometry=c.parseGeometryFromDictionary(this.geometry):this.geometry instanceof l||(this.geometry=null));else if(d instanceof l||null===d)this.geometry=d,this.attributes=void 0===a?{}:null===a?{}:a;else if("string"===typeof a){var b=JSON.parse(a);null!==b.geometry&&void 0!==b.geometry&&(this.geometry=k.fromJson(b.geometry));this.attributes=
void 0===b.attributes?{}:null===b.attributes?{}:b.attributes}else void 0===a?this.attributes={}:null===a&&(this.attributes={}),this.geometry=null}c.prototype.field=function(a){var d=a.toLowerCase();a=this.attributes[a];if(void 0!==a)return a;for(var b in this.attributes)if(b.toLowerCase()===d)return this.attributes[b];throw Error("Field not Found");};c.prototype.hasField=function(a){var d=a.toLowerCase();if(void 0!==this.attributes[a])return!0;for(var b in this.attributes)if(b.toLowerCase()===d)return!0;
return!1};c.prototype.keys=function(){var a=[],d;for(d in this.attributes)a.push(d);return a=a.sort()};c.fromFeature=function(a){return new c(a)};c.parseGeometryFromDictionary=function(a){a=c.convertDictionaryToJson(a,!0);void 0!==a.spatialreference&&(a.spatialReference=a.spatialreference,delete a.spatialreference);return k.fromJson(a)};c.convertDictionaryToJson=function(a,d){void 0===d&&(d=!1);var b={},g;for(g in a.attributes){var e=a.attributes[g];e instanceof h&&(e=c.convertDictionaryToJson(e));
d?b[g.toLowerCase()]=e:b[g]=e}return b};c.parseAttributesFromDictionary=function(a){var d={},b;for(b in a.attributes){var c=a.attributes[b];if(f.isString(c)||f.isNumber(c)||f.isBoolean(c)||f.isDate(c))d[b]=c;else throw Error("Illegal Argument");}return d};c.fromJson=function(a){var d=null;null!==a.geometry&&void 0!==a.geometry&&(d=k.fromJson(a.geometry));var b={};if(null!==a.attributes&&void 0!==a.attributes)for(var g in a.attributes){var e=a.attributes[g];if(f.isString(e)||f.isNumber(e)||f.isBoolean(e)||
f.isDate(e))b[g]=e;else throw Error("Illegal Argument");}return new c(b,d)};return c}()});