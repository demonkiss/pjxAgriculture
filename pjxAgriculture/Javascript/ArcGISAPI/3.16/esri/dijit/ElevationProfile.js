// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/ElevationProfile/templates/ElevationProfile.html":'\x3cdiv role\x3d"presentation" class\x3d"${baseClass}" data-dojo-attach-point\x3d"containerNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_chartNode" class\x3d"${baseClass}ChartNode"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_sourceNode" class\x3d"${baseClass}SourceLabel ${baseClass}Label"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/ElevationProfile","dojo/on dojo/aspect dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/number dojo/dom-geometry dojo/dom-style dojo/dom-class dojo/query dojo/_base/Color dojo/colors dojo/fx/easing dijit/_WidgetBase dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/registry dijit/Dialog dijit/Toolbar dijit/ToolbarSeparator dijit/layout/ContentPane dijit/form/Button dijit/form/ToggleButton ../config ../sniff ../request ./Measurement ../toolbars/draw ../tasks/Geoprocessor ../geometry/Polyline ../geometry/normalizeUtils ../symbols/SimpleLineSymbol ../symbols/SimpleMarkerSymbol ../graphic ../tasks/FeatureSet ../tasks/LinearUnit ../geometry/geodesicUtils ../geometry/webMercatorUtils ../units ./ElevationProfile/ProfileChart dojo/i18n!./ElevationProfile/nls/strings dojo/text!./ElevationProfile/templates/ElevationProfile.html xstyle/css!./ElevationProfile/css/ElevationProfile.css".split(" "),function(C,
p,q,d,h,k,D,E,F,G,H,I,J,K,r,s,t,u,l,L,M,N,O,P,Q,R,S,v,T,U,w,V,x,W,X,y,z,Y,m,n,c,A,e,B){return q([r,s,t,u],{declaredClass:"esri.dijit.ElevationProfile",baseClass:"esriElevationProfile",templateString:B,_samplingPointCount:199,_profileResults:null,_map:null,_measureTool:null,_drawToolbar:null,_profileService:null,_profileServiceUrl:null,_profileTaskUrl:null,_scalebarUnits:null,_profileChart:null,_chartOptions:null,constructor:function(a,b){a.hasOwnProperty("map")&&(this._map=a.map);a.hasOwnProperty("profileTaskUrl")&&
(this._profileTaskUrl=a.profileTaskUrl);a.hasOwnProperty("scalebarUnits")&&(this._scalebarUnits=a.scalebarUnits);a.hasOwnProperty("chartOptions")&&(this._chartOptions=a.chartOptions);this._profileServiceUrl=d.replace("{_profileTaskUrl}/Profile",this)},postCreate:function(){this.inherited(arguments);null!==l.getEnclosingWidget(this.domNode)&&this.own(p.after(l.getEnclosingWidget(this.domNode),"resize",d.hitch(this,this.resize),!0))},startup:function(){this.inherited(arguments);if(!this._map||!this._profileTaskUrl||
!this._scalebarUnits)this.emit("error",Error(e.errors.MissingConstructorParameters)),this.destroy();else if(this._map.loaded)this._initUI();else this._map.on("load",d.hitch(this,this._initUI))},_initUI:function(){this._initProfileService().then(d.hitch(this,function(){var a=this._getElevationDistanceUnits(this._scalebarUnits);this._profileChart=new A({map:this._map,elevationUnits:a.elevationUnits,distanceUnits:a.distanceUnits,chartOptions:this._chartOptions},this._chartNode);this._profileChart.startup();
this.emit("load")}),d.hitch(this,function(){this.emit("error",Error(e.errors.InvalidConfiguration));this.destroy()}))},_initProfileService:function(){var a=new h;this._profileServiceUrl?v({url:this._profileServiceUrl,content:{f:"json"},callbackParamName:"callback"}).then(d.hitch(this,function(b){this._profileService=new w(this._profileServiceUrl);this._profileService.setNormalization(!1);this._profileService.setOutSpatialReference(this._map.spatialReference);a.resolve()}),d.hitch(this,function(b){a.reject(b)})):
a.reject(Error(e.errors.InvalidConfiguration));return a.promise},_setProfileGeometryAttr:function(a){a?(this._map.setMapCursor("progress"),this._getProfile(a).then(d.hitch(this,function(a){this._map.setMapCursor("default");this._profileChart.update(a);this.emit("update-profile",a)}),d.hitch(this,function(a){this._map.setMapCursor("default");this.emit("error",a)}))):this.emit("error",Error(e.errors.NullGeometry))},_setTitleAttr:function(a){this._profileChart.set("Title",a);this.emit("title-changed")},
clearProfile:function(){this._profileChart.clear();this.emit("clear-profile")},_setMeasureUnitsAttr:function(a){a=this._getElevationDistanceUnits(a);this._profileChart.set("DisplayUnits",{elevationUnits:a.elevationUnits,distanceUnits:a.distanceUnits});this._profileChart.refresh()},_getElevationDistanceUnits:function(a){var b;switch(a){case c.NAUTICAL_MILES:a=c.FEET;b=c.NAUTICAL_MILES;break;case c.MILES:a=c.FEET;b=c.MILES;break;case c.YARDS:a=c.FEET;b=c.YARDS;break;case c.FEET:b=a=c.FEET;break;case c.KILOMETERS:a=
c.METERS;b=c.KILOMETERS;break;case c.METERS:b=a=c.METERS;break;default:a=this._profileChart.elevationUnits,b=this._profileChart.distanceUnits}return{elevationUnits:a,distanceUnits:b}},_hasZsAndMs:function(a){return a&&"polyline"===a.type?4===a.paths[0][0].length:!1},_normalizeGeometry:function(a){var b=new h;x.normalizeCentralMeridian([a]).then(function(a){b.resolve(a[0])},function(){b.reject(Error(e.errors.UnableToNormalizeGeometry))});return b.promise},_densifyGeometry:function(a){a=a.spatialReference.isWebMercator?
n.webMercatorToGeographic(a):a;return m.geodesicDensify(a,1E6)},_getProfile:function(a){var b=new h;if(this._hasZsAndMs(a))b.resolve({geometry:a,elevations:[],distances:[],samplingDistance:g});else{var f=a.spatialReference.isWebMercator()?n.webMercatorToGeographic(a):a,g=m.geodesicLengths([f],c.METERS)[0]/this._samplingPointCount;a=new y(a,null,{OID:1});f=new z;f.features=[a];f.fields=[{name:"OID",type:"esriFieldTypeObjectID",alias:"OID"}];this._profileService.execute({InputLineFeatures:f,ProfileIDField:"OID",
DEMResolution:"FINEST",MaximumSampleDistance:g,MaximumSampleDistanceUnits:"Meters",returnZ:!0,returnM:!0}).then(d.hitch(this,function(a){if(0<a.length)if(a=a[0].value,0<a.features.length){a=a.features[0];this._sourceNode.innerHTML=d.replace("{0}: {1}",[e.chart.demResolution,a.attributes.DEMResolution]);a=a.geometry;var c=[],f=[];0<a.paths.length?(k.forEach(a.paths,function(a,b){k.forEach(a,function(a,d){var e={x:3<a.length?a[3]:d*g,y:2<a.length?a[2]:0,pathIdx:b,pointIdx:d};c.push(e);f.push(e.x)},
this)},this),b.resolve({geometry:a,elevations:c,distances:f,samplingDistance:g})):b.reject(Error(this.strings.errors.UnableToProcessResults))}else b.reject(Error(this.strings.errors.UnableToProcessResults));else b.reject(Error(this.strings.errors.UnableToProcessResults))}),b.reject)}return b.promise},resize:function(){this.inherited(arguments);this._profileChart&&this._profileChart.resize()},destroy:function(){this.inherited(arguments);this._profileChart&&this._profileChart.destroy()}})});