// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterFormats/Zlib",[],function(){var s=function(){function e(){this.bufferLength=this.pos=0;this.eof=!1;this.buffer=null}e.prototype={ensureBuffer:function(a){var e=this.buffer,n=e?e.byteLength:0;if(a<n)return e;for(var l=512;l<a;)l<<=1;a=new Uint8Array(l);for(l=0;l<n;++l)a[l]=e[l];return this.buffer=a},getByte:function(){for(var a=this.pos;this.bufferLength<=a;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(a){var e=this.pos;if(a){this.ensureBuffer(e+
a);for(a=e+a;!this.eof&&this.bufferLength<a;)this.readBlock();var n=this.bufferLength;a>n&&(a=n)}else{for(;!this.eof;)this.readBlock();a=this.bufferLength}this.pos=a;return this.buffer.subarray(e,a)},lookChar:function(){for(var a=this.pos;this.bufferLength<=a;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var a=this.pos;this.bufferLength<=a;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},
makeSubStream:function(a,e,n){for(var l=a+e;this.bufferLength<=l&&!this.eof;)this.readBlock();return new Stream(this.buffer,a,e,n)},skip:function(a){a||(a=1);this.pos+=a},reset:function(){this.pos=0}};return e}();return function(){function e(a){throw Error(a);}function a(a){var b=0,c=a[b++],d=a[b++];(-1==c||-1==d)&&e("Invalid header in flate stream");8!=(c&15)&&e("Unknown compression method in flate stream");0!=((c<<8)+d)%31&&e("Bad FCHECK in flate stream");d&32&&e("FDICT bit set in flate stream");
this.bytes=a;this.bytesPos=b;this.codeBuf=this.codeSize=0;s.call(this)}var r=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),n=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),l=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,
727041,794625,798721,868353,876545]),t=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59E4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,
459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,
459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,
459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,
459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,
459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,
459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,
459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],u=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];a.prototype=Object.create(s.prototype);a.prototype.getBits=function(a){for(var b=this.codeSize,c=this.codeBuf,d=this.bytes,f=this.bytesPos,h;b<a;)"undefined"==
typeof(h=d[f++])&&e("Bad encoding in flate stream"),c|=h<<b,b+=8;this.codeBuf=c>>a;this.codeSize=b-a;this.bytesPos=f;return c&(1<<a)-1};a.prototype.getCode=function(a){var b=a[0],c=a[1];a=this.codeSize;for(var d=this.codeBuf,f=this.bytes,h=this.bytesPos;a<c;){var g;"undefined"==typeof(g=f[h++])&&e("Bad encoding in flate stream");d|=g<<a;a+=8}c=b[d&(1<<c)-1];b=c>>16;c&=65535;(0==a||a<b||0==b)&&e("Bad encoding in flate stream");this.codeBuf=d>>b;this.codeSize=a-b;this.bytesPos=h;return c};a.prototype.generateHuffmanTable=
function(a){for(var b=a.length,c=0,d=0;d<b;++d)a[d]>c&&(c=a[d]);for(var f=1<<c,e=new Uint32Array(f),g=1,l=0,k=2;g<=c;++g,l<<=1,k<<=1)for(var m=0;m<b;++m)if(a[m]==g){for(var n=0,q=l,d=0;d<g;++d)n=n<<1|q&1,q>>=1;for(d=n;d<f;d+=k)e[d]=g<<16|m;++l}return[e,c]};a.prototype.readBlock=function(){function a(b,c,d,e,f){for(b=b.getBits(d)+e;0<b--;)c[p++]=f}var b=this.getBits(3);b&1&&(this.eof=!0);b>>=1;if(0==b){var c=this.bytes,d=this.bytesPos,f;"undefined"==typeof(f=c[d++])&&e("Bad block header in flate stream");
var h=f;"undefined"==typeof(f=c[d++])&&e("Bad block header in flate stream");h|=f<<8;"undefined"==typeof(f=c[d++])&&e("Bad block header in flate stream");b=f;"undefined"==typeof(f=c[d++])&&e("Bad block header in flate stream");(b|f<<8)!=(~h&65535)&&e("Bad uncompressed block length in flate stream");this.codeSize=this.codeBuf=0;f=this.bufferLength;b=this.ensureBuffer(f+h);this.bufferLength=h=f+h;for(var g=f;g<h;++g){if("undefined"==typeof(f=c[d++])){this.eof=!0;break}b[g]=f}this.bytesPos=d}else{if(1==
b)d=t,f=u;else if(2==b){b=this.getBits(5)+257;f=this.getBits(5)+1;for(var c=this.getBits(4)+4,d=Array(r.length),p=0;p<c;)d[r[p++]]=this.getBits(3);d=this.generateHuffmanTable(d);p=c=0;f=b+f;for(h=Array(f);p<f;)g=this.getCode(d),16==g?a(this,h,2,3,c):17==g?a(this,h,3,3,c=0):18==g?a(this,h,7,11,c=0):h[p++]=c=g;d=this.generateHuffmanTable(h.slice(0,b));f=this.generateHuffmanTable(h.slice(b,f))}else e("Unknown block type in flate stream");h=(b=this.buffer)?b.length:0;for(g=this.bufferLength;;){var k=
this.getCode(d);if(256>k)g+1>=h&&(b=this.ensureBuffer(g+1),h=b.length),b[g++]=k;else{if(256==k){this.bufferLength=g;break}var k=k-257,k=n[k],m=k>>16;0<m&&(m=this.getBits(m));c=(k&65535)+m;k=this.getCode(f);k=l[k];m=k>>16;0<m&&(m=this.getBits(m));k=(k&65535)+m;g+c>=h&&(b=this.ensureBuffer(g+c),h=b.length);for(m=0;m<c;++m,++g)b[g]=b[g-k]}}}};return a}()});