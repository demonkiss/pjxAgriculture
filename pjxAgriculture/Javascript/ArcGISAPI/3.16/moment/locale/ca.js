//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/ca",["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("ca",{months:"gener febrer mar\u00e7 abril maig juny juliol agost setembre octubre novembre desembre".split(" "),monthsShort:"gen. febr. mar. abr. mai. jun. jul. ag. set. oct. nov. des.".split(" "),weekdays:"diumenge dilluns dimarts dimecres dijous divendres dissabte".split(" "),
weekdaysShort:"dg. dl. dt. dc. dj. dv. ds.".split(" "),weekdaysMin:"Dg Dl Dt Dc Dj Dv Ds".split(" "),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[dem\u00e0 a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==
this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|\u00e8|a)/,ordinal:function(a,b){var c=1===a?"r":2===a?"n":3===a?"r":4===a?"t":"\u00e8";if("w"===b||"W"===b)c="a";return a+c},week:{dow:1,doy:4}})});