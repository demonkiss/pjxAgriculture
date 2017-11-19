//>>built
define("dojox/string/BidiEngine",["dojo/_base/lang","dojo/_base/declare"],function(va,wa){function C(a,b,c,d){void 0==b&&(b=l.defInFormat);void 0==c&&(c=l.defOutFormat);void 0==d&&(d=l.defSwap);if(b==c)return a;var e,f=b.substring(0,1),k=b.substring(1,4),g=c.substring(0,1),n=c.substring(1,4);"C"==k.charAt(0)&&(e=K(a),k="ltr"==e||"rtl"==e?e.toUpperCase():"L"==b.charAt(2)?"LTR":"RTL",b=f+k);if("C"==n.charAt(0)){e=K(a);if("rtl"==e)n="RTL";else if("ltr"==e){a:{c=a;e=null;for(n=c.length-1;0<=n;n--){e=
T(c.charAt(n));if(e==v||e==z){e="rtl";break a}if(e==F){e="ltr";break a}if(e==w)break}e=""}n=e.toUpperCase()}else n="L"==c.charAt(2)?"LTR":"RTL";c=g+n}if(b==c)return a;l.inFormat=b;l.outFormat=c;l.swap=d;if("L"==f&&"VLTR"==c){if("LTR"==k)return l.dir=D,y(a);if("RTL"==k)return l.dir=G,y(a)}if("V"==f&&"V"==g)return L(a);if("L"==f&&"VRTL"==c)return l.dir="LTR"==k?D:G,a=y(a),L(a);if("VLTR"==b&&"LLTR"==c)return l.dir=D,y(a);if("V"==f&&"L"==g&&k!=n)return a=L(a),"RTL"==k?C(a,"LLTR","VLTR",d):C(a,"LRTL",
"VRTL",d);if("VRTL"==b&&"LRTL"==c)return C(a,"LRTL","VRTL",d);if("L"==f&&"L"==g)return b=l.swap,l.swap=b.substr(0,1)+"N","RTL"==k?(l.dir=G,a=y(a),l.swap="N"+b.substr(1,2),l.dir=D,a=y(a)):(l.dir=D,a=y(a),l.swap="N"+b.substr(1,2),a=C(a,"VLTR","LRTL",l.swap)),a}function K(a){for(var b=null,c=b=null,d=0;d<a.length;d++){b=a.charAt(d).charCodeAt(0);c=M[b>>8];b=c<r?c:N[c-r][b&255];if(b==v||b==z)return"rtl";if(b==F)return"ltr";if(b==w)break}return""}function y(a){a=a.split("");var b=[],c=a.length,d=l.dir?
xa:ya,e=null,f=null,e=null,f=0,k=null,k=null,g=-1,n=k=null,h=[],m=[];l.hiLevel=l.dir;l.lastArabic=!1;l.hasUBAT_AL=!1;l.hasUBAT_B=!1;l.hasUBAT_S=!1;for(k=0;k<c;k++)h[k]=T(a[k]);for(n=0;n<c;n++){e=f;m[n]=f=za(a,h,m,n);f=d[e][f];k=f&240;f&=15;b[n]=e=d[f][Aa];if(0<k){if(16==k)for(k=g;k<n;k++)b[k]=1;g=-1}if(k=d[f][Ba])-1==g&&(g=n);else if(-1<g){for(k=g;k<n;k++)b[k]=e;g=-1}h[n]==w&&(b[n]=0);l.hiLevel|=e}if(l.hasUBAT_S)for(k=0;k<c;k++)if(h[k]==O){b[k]=l.dir;for(d=k-1;0<=d;d--)if(h[d]==P)b[d]=l.dir;else break}if(!(0==
l.hiLevel||l.swap.substr(0,1)==l.swap.substr(1,2)))for(c=0;c<a.length;c++)if(1==b[c]){h=a;d=c;b:{g=a[c];n=void 0;m=0;for(e=H.length-1;m<=e;)if(n=Math.floor((m+e)/2),g<H[n][0])e=n-1;else if(g>H[n][0])m=n+1;else{g=H[n][1];break b}}h[d]=g}U(2,a,b);U(1,a,b);return a.join("")}function T(a){a=a.charCodeAt(0);var b=M[a>>8];return b<r?b:N[b-r][a&255]}function L(a){a=a.split("");a.reverse();return a.join("")}function V(a){for(var b=0;b<W.length;b++)if(a>=W[b]&&a<=Ca[b])return!0;return!1}function X(a,b,c,d){for(;b*
c<d&&E(a[b]);)b+=c;return b*c<d&&V(a[b])?!0:!1}function U(a,b,c){if(!(l.hiLevel<a))if(1==a&&l.dir==G&&!l.hasUBAT_B)b.reverse();else for(var d=b.length,e=0,f,k,g;e<d;){if(c[e]>=a){for(f=e+1;f<d&&c[f]>=a;)f++;for(k=f-1;e<k;e++,k--)g=b[e],b[e]=b[k],b[k]=g;e=f}e++}}function za(a,b,c,d){var e=b[d],f,k;switch(e){case F:case v:l.lastArabic=!1;case u:case A:return e;case s:return l.lastArabic?A:s;case z:return l.lastArabic=!0,l.hasUBAT_AL=!0,v;case P:return u;case Y:if(1>d||d+1>=b.length||(f=c[d-1])!=s&&
f!=A||(k=b[d+1])!=s&&k!=A)return u;l.lastArabic&&(k=A);return k==f?k:u;case Z:return f=0<d?c[d-1]:w,f==s&&d+1<b.length&&b[d+1]==s?s:u;case Q:if(0<d&&c[d-1]==s)return s;if(l.lastArabic)return u;f=d+1;for(e=b.length;f<e&&b[f]==Q;)f++;return f<e&&b[f]==s?s:u;case R:if("VLTR"==l.inFormat){e=b.length;for(f=d+1;f<e&&b[f]==R;)f++;if(f<e&&(a=a[d],f=b[f],(1425<=a&&2303>=a||64286==a)&&(f==v||f==z)))return v}return 1>d||b[d-1]==w?u:c[d-1];case w:return lastArabic=!1,l.hasUBAT_B=!0,l.dir;case O:return l.hasUBAT_S=
!0,u;case $:case aa:case ba:case ca:case da:lastArabic=!1;case ea:return u}}function S(a,b){for(var c=0;c<I.length;c++)if(a==I[c])return b[c];return a}function E(a){return"\u064b"<=a&&"\u0655">=a?!0:!1}function fa(a){if("L"==a)return"LTR";if("R"==a)return"RTL";if("C"==a)return"CLR";if("D"==a)return"CRL"}function ga(a,b){for(var c=0;c<B.length;c++)if(a==B[c])return b[c];return a}va.getObject("string",!0,dojox);var Ka=wa("dojox.string.BidiEngine",null,{bidiTransform:function(a,b,c){if(!a)return"";if(!b&&
!c)return a;var d=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/;if(!d.test(b)||!d.test(c))throw Error("dojox.string.BidiEngine: the bidi layout string is wrong!");if(b==c)return a;var d=fa(b.charAt(1)),e=fa(c.charAt(1)),f="I"==b.charAt(0)?"L":b.charAt(0),k="I"==c.charAt(0)?"L":c.charAt(0),g=f+d,h=k+e,m=b.charAt(2)+c.charAt(2);g&&(l.defInFormat=g);h&&(l.defOutFormat=h);m&&(l.defSwap=m);d=C(a,f+d,k+e,b.charAt(2)+c.charAt(2));a=!1;if("R"==c.charAt(1))a=!0;else if("C"==c.charAt(1)||"D"==c.charAt(1))a=this.checkContextual(d);
if(b.charAt(3)==c.charAt(3))return d;if("S"==c.charAt(3)){c=d;b=!0;if(0==c.length)b=void 0;else{void 0==a&&(a=!0);void 0==b&&(b=!0);c=new String(c);c=c.split("");k=0;d=1;e=c.length;a||(k=c.length-1,d=-1,e=1);g=0;a=[];for(f=0;k*d<e;k+=d)if(V(c[k])||E(c[k])){if(h="\u0644"==c[k])b:{for(var m=c,p=k+d,q=d,r=e;p*q<r&&E(m[p]);)p+=q;h=" ";if(p*q<r){h=m[p];for(m=0;m<B.length;m++)if(B[m]==h){h=!0;break b}}h=!1}if(h){c[k]=0==g?ga(c[k+d],Da):ga(c[k+d],Ea);k+=d;g=c;h=k;m=d;for(p=e;h*m<p&&E(g[h]);)h+=m;h*m<p&&
(g[h]=" ");b&&(a[f]=k,f++);g=0}else{h=c[k];if(1==g){m=c;p=k;if(X(c,k+d,d,e))b:{q=c[k];for(r=0;r<I.length;r++)if(q==I[r]){q=Fa[r];break b}}else q=S(c[k],Ga);m[p]=q}else!0==X(c,k+d,d,e)?c[k]=S(c[k],Ha):c[k]=S(c[k],Ia);E(h)||(g=1);b:{for(m=0;m<ha.length;m++)if(ha[m]==h){h=!0;break b}h=!1}!0==h&&(g=0)}}else g=0;d="";for(idx=0;idx<c.length;idx++){if(e=b){b:{for(e=0;e<a.length;e++)if(a[e]==idx)break b;e=-1}e=-1<e}e||(d+=c[idx])}b=d}return b}if("N"==c.charAt(3)){b=a;f=!0;if(0==d.length)b=void 0;else{void 0==
f&&(f=!0);void 0==b&&(b=!0);d=new String(d);c="";e=[];a="";if(f)for(e=0;e<d.length;e++){if(" "==d.charAt(e))if(b){if(0<e&&"\ufef5"<=d.charAt(e-1)&&"\ufefc">=d.charAt(e-1))continue}else if(e+1<d.length&&"\ufef5"<=d.charAt(e+1)&&"\ufefc">=d.charAt(e+1))continue;a+=d.charAt(e)}else a=new String(d);e=a.split("");for(d=0;d<a.length;d++)"\ufe70"<=e[d]&&"\ufeff">e[d]?(f=a.charCodeAt(d),"\ufef5"<=e[d]&&"\ufefc">=e[d]?b?(c+="\u0644",c+=B[parseInt((f-65269)/2)]):(c+=B[parseInt((f-65269)/2)],c+="\u0644"):c+=
Ja[f-65136]):c+=e[d];b=c}return b}},checkContextual:function(a){a=K(a);"ltr"!=a&&"rtl"!=a&&(a=document.dir.toLowerCase(),"ltr"!=a&&"rtl"!=a&&(a="ltr"));return a},hasBidiChar:function(a){for(var b=null,c=b=null,d=0;d<a.length;d++){b=a.charAt(d).charCodeAt(0);c=M[b>>8];b=c<r?c:N[c-r][b&255];if(b==v||b==z)return!0;if(b==w)break}return!1}}),l={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUBAT_AL:!1,hasBlockSep:!1,hasSegSep:!1},
Aa=5,Ba=6,D=0,G=1,H=[["(",")"],[")","("],["\x3c","\x3e"],["\x3e","\x3c"],["[","]"],["]","["],["{","}"],["}","{"],["\u00ab","\u00bb"],["\u00bb","\u00ab"],["\u2039","\u203a"],["\u203a","\u2039"],["\u207d","\u207e"],["\u207e","\u207d"],["\u208d","\u208e"],["\u208e","\u208d"],["\u2264","\u2265"],["\u2265","\u2264"],["\u2329","\u232a"],["\u232a","\u2329"],["\ufe59","\ufe5a"],["\ufe5a","\ufe59"],["\ufe5b","\ufe5c"],["\ufe5c","\ufe5b"],["\ufe5d","\ufe5e"],["\ufe5e","\ufe5d"],["\ufe64","\ufe65"],["\ufe65",
"\ufe64"]],B=["\u0622","\u0623","\u0625","\u0627"],Da=["\ufef5","\ufef7","\ufef9","\ufefb"],Ea=["\ufef6","\ufef8","\ufefa","\ufefc"],I="\u0627\u0628\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064a\u0625\u0623\u0622\u0629\u0649\u06cc\u0626\u0624\u064b\u064c\u064d\u064e\u064f\u0650\u0651\u0652\u0621".split(""),Ia="\ufe8d\ufe8f\ufe95\ufe99\ufe9d\ufea1\ufea5\ufea9\ufeab\ufead\ufeaf\ufeb1\ufeb5\ufeb9\ufebd\ufec1\ufec5\ufec9\ufecd\ufed1\ufed5\ufed9\ufedd\ufee1\ufee5\ufee9\ufeed\ufef1\ufe87\ufe83\ufe81\ufe93\ufeef\ufbfc\ufe89\ufe85\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80".split(""),
Ga="\ufe8e\ufe90\ufe96\ufe9a\ufe9e\ufea2\ufea6\ufeaa\ufeac\ufeae\ufeb0\ufeb2\ufeb6\ufeba\ufebe\ufec2\ufec6\ufeca\ufece\ufed2\ufed6\ufeda\ufede\ufee2\ufee6\ufeea\ufeee\ufef2\ufe88\ufe84\ufe82\ufe94\ufef0\ufbfd\ufe8a\ufe86\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80".split(""),Fa="\ufe8e\ufe92\ufe98\ufe9c\ufea0\ufea4\ufea8\ufeaa\ufeac\ufeae\ufeb0\ufeb4\ufeb8\ufebc\ufec0\ufec4\ufec8\ufecc\ufed0\ufed4\ufed8\ufedc\ufee0\ufee4\ufee8\ufeec\ufeee\ufef4\ufe88\ufe84\ufe82\ufe94\ufef0\ufbff\ufe8c\ufe86\ufe71\ufe72\ufe74\ufe77\ufe79\ufe7b\ufe7d\ufe7f\ufe80".split(""),
Ha="\ufe8d\ufe91\ufe97\ufe9b\ufe9f\ufea3\ufea7\ufea9\ufeab\ufead\ufeaf\ufeb3\ufeb7\ufebb\ufebf\ufec3\ufec7\ufecb\ufecf\ufed3\ufed7\ufedb\ufedf\ufee3\ufee7\ufeeb\ufeed\ufef3\ufe87\ufe83\ufe81\ufe93\ufeef\ufbfe\ufe8b\ufe85\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80".split(""),ha="\u0621\u0627\u062f\u0630\u0631\u0632\u0648\u0622\u0629\u0626\u0624\u0625\u0675\u0623".split(""),Ja="\u064b\u064b\u064c\u061f\u064d\u061f\u064e\u064e\u064f\u064f\u0650\u0650\u0651\u0651\u0652\u0652\u0621\u0622\u0622\u0623\u0623\u0624\u0624\u0625\u0625\u0626\u0626\u0626\u0626\u0627\u0627\u0628\u0628\u0628\u0628\u0629\u0629\u062a\u062a\u062a\u062a\u062b\u062b\u062b\u062b\u062c\u062c\u062c\u062c\u062d\u062d\u062d\u062d\u062e\u062e\u062e\u062e\u062f\u062f\u0630\u0630\u0631\u0631\u0632\u0632\u0633\u0633\u0633\u0633\u0634\u0634\u0634\u0634\u0635\u0635\u0635\u0635\u0636\u0636\u0636\u0636\u0637\u0637\u0637\u0637\u0638\u0638\u0638\u0638\u0639\u0639\u0639\u0639\u063a\u063a\u063a\u063a\u0641\u0641\u0641\u0641\u0642\u0642\u0642\u0642\u0643\u0643\u0643\u0643\u0644\u0644\u0644\u0644\u0645\u0645\u0645\u0645\u0646\u0646\u0646\u0646\u0647\u0647\u0647\u0647\u0648\u0648\u0649\u0649\u064a\u064a\u064a\u064a\ufef5\ufef6\ufef7\ufef8\ufef9\ufefa\ufefb\ufefc\u061f\u061f\u061f".split(""),
W=["\u0621","\u0641"],Ca=["\u063a","\u064a"],ya=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],xa=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],F=0,v=1,s=2,A=3,u=4,w=5,O=6,z=7,P=8,Y=9,Z=10,Q=11,R=12,$=13,aa=14,da=15,ba=16,ca=17,ea=18,r=100,ia=r+0,ja=r+1,ka=r+2,la=r+3,ma=r+4,na=r+5,oa=r+6,pa=r+7,c=F,e=v,h=s,m=A,a=u,x=w,J=O,b=z,p=P,q=Y,t=Z,g=Q,d=R,qa=$,ra=aa,sa=da,ta=ba,ua=ca,f=ea,M=[ia,c,c,c,c,ja,ka,la,e,c,c,c,c,c,c,c,c,c,c,
c,c,c,c,c,c,c,c,c,c,c,c,c,ma,a,a,a,c,a,c,a,c,a,a,a,c,c,a,a,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,a,a,c,c,a,a,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,na,b,b,oa,pa];delete ia;delete ja;delete ka;
delete la;delete ma;delete na;delete oa;delete pa;var N=[[f,f,f,f,f,f,f,f,f,J,x,J,p,x,f,f,f,f,f,f,f,f,f,f,f,f,f,f,x,x,x,J,p,a,a,g,g,g,a,a,a,a,a,t,q,t,q,q,h,h,h,h,h,h,h,h,h,h,q,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,f,f,f,f,f,f,x,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,f,q,a,g,g,g,g,a,a,a,a,c,a,a,f,a,a,g,g,h,h,a,c,a,a,a,h,c,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,c,c,c,c,c,
c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,c,c,c,c,c,c,c,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,a,a,a,a,a,a,a,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e,d,e,d,d,e,d,d,e,d,a,a,a,a,a,a,a,a,e,e,e,e,e,e,e,e,
e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,a,a,a,a,a,e,e,e,e,e,a,a,a,a,a,a,a,a,a,a,a],[m,m,m,m,a,a,a,a,b,g,g,b,q,b,a,a,d,d,d,d,d,d,d,d,d,d,d,b,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,m,m,m,m,m,m,m,m,m,m,g,m,m,b,b,b,d,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,d,d,d,d,d,d,d,m,a,d,d,d,d,d,d,b,b,d,d,a,d,d,d,d,b,b,h,h,h,h,h,h,h,h,h,h,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,b,b,d,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,b,a,a,a,a,a,a,a,a,a,a,a,a,a,a,e,e,e,e,e,e,e,e,e,e,e,e,
e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,d,d,d,d,d,d,d,d,d,e,e,a,a,a,a,e,a,a,a,a,a],[p,p,p,p,p,p,p,p,p,p,p,f,f,f,c,e,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,p,x,qa,ra,sa,ta,ua,q,g,g,g,g,g,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,q,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,p,f,f,f,f,f,a,a,a,a,a,f,f,f,f,f,f,h,c,a,a,h,h,h,h,h,h,t,t,a,a,a,c,h,h,h,h,h,h,h,h,h,h,t,t,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,a,a,a,a,a,a,a,a,a,
a,a,a,a,a,a,a,a,a,a,a,a,a,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,a,a,a,a,a,e,d,e,e,e,e,e,e,e,e,e,e,t,e,e,e,e,e,e,e,e,e,e,e,e,e,a,e,e,e,e,e,a,e,a,e,e,a,e,e,a,e,e,e,e,e,e,e,e,e,e,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,q,a,q,a,a,q,a,a,a,a,a,a,a,a,a,g,a,a,t,t,a,a,a,a,a,g,g,a,a,a,a,a,b,b,b,b,b,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,a,f],[a,a,a,g,g,g,a,a,a,a,a,t,q,t,q,q,h,h,h,h,h,h,h,h,h,h,q,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,
c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,c,c,c,c,c,c,a,a,c,c,c,c,c,c,a,a,c,c,c,c,c,c,a,a,c,c,c,a,a,a,g,g,a,a,a,g,g,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a]];delete c;delete e;delete h;delete m;delete a;delete x;delete J;delete b;delete p;delete q;delete t;delete g;delete d;delete qa;delete ra;delete sa;delete ta;delete ua;delete f;return Ka});