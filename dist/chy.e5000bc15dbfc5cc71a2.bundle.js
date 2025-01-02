var CHY;(()=>{var e={833:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<a.length;s++){var c=a[s];if(!l(c))return!1;var d=e[c],u=t[c];if(!1===(o=r?r.call(n,d,u,c):void 0)||void 0===o&&d!==u)return!1}return!0}},748:e=>{window,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)),n}function o(e){var t,r;for(t=1;t<arguments.length;t++)r=null!=arguments[t]?arguments[t]:{},t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r,n,o=[],a=!0,i=!1,l=void 0;try{for(r=e[Symbol.iterator]();!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){i=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var r,n;for((null==t||t>e.length)&&(t=e.length),r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,"withComponentFeatures",(function(){return s})),r.d(t,"registerComponent",(function(){return c}));var s=function(e){var t=function(e,t){return new Promise((function(r){UniversalDashboard.post("/api/internal/component/element/".concat(e),t,(function(e){r(e)}))}))},r=function(e,t){return UniversalDashboard.subscribe(e,(function(e,r){var n=r.type;"requestState"===n&&(n="getState"),t(n,r)}))},n=function(e){UniversalDashboard.unsubscribe(e)},a=function(e,t){var r;return r=e,"[object String]"!==Object.prototype.toString.call(r)&&(e.__version||(e.__version="0"),!t&&e.history&&(t=e.history)),UniversalDashboard.renderComponent(e,t)};return function(l){var s=i(react.useState(l),2),c=s[0],d=s[1];react.useEffect((function(){d(l)}),[l.__version]);var u=function(e,t){var r,n;if("setState"===e&&d(o(o({},c),t.state)),"getState"===e&&(r=t.requestId,n=c,new Promise((function(e,t){UniversalDashboard.post("/api/internal/component/element/sessionState/".concat(r),n,(function(r){r.error?t(r.error.message):e(r)}))}))),"addElement"===e){var a=c.children;null==a&&(a=[]),a=a.concat(t.elements),d(o(o({},c),{},{children:a}))}"clearElement"===e&&d(o(o({},c),{},{children:[]})),"removeElement"===e&&d(o(o({},c),{},{hidden:!0})),"syncElement"===e&&d(o(o({},c),{},{__version:Math.random().toString(36).substr(2,5)}))};react.useEffect((function(){var e=r(l.id,u);return function(){n(e)}}));var p={render:a,setState:function(e){var t=o(o({},c),e);d(t)},publish:UniversalDashboard.publish,notifyOfEvent:function(e,t){UniversalDashboard.publish("element-event",{type:"clientEvent",eventId:l.id+e,eventName:e,eventData:t})},post:t,subscribeToIncomingEvents:r,unsubscribeFromIncomingEvents:n};return Object.keys(c).forEach((function(e){null!=c[e]&&c[e].endpoint&&(p[e]=function(t){var r={};return c[e].accept&&""!==c[e].accept&&(r.Accept=c[e].accept),c[e].contentType&&""!==c[e].contentType&&(r["Content-Type"]=c[e].contentType),function(e,t,r){return new Promise((function(n){UniversalDashboard.postWithHeaders("/api/internal/component/element/".concat(e),t,(function(e){n(e)}),r)}))}(c[e].name,t,r)})})),c.hidden?react.createElement(react.Fragment):e(o(o({},c),p))}},c=function(e,t){UniversalDashboard.register(e,t)}}])}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{"use strict";var e=r(748);const t=react;var n=r.n(t),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function a(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var i=r(833),l=r.n(i),s="-ms-",c="-moz-",d="-webkit-",u="comm",p="rule",h="decl",f="@keyframes",m=Math.abs,b=String.fromCharCode,g=Object.assign;function v(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,r){return e.replace(t,r)}function w(e,t,r){return e.indexOf(t,r)}function A(e,t){return 0|e.charCodeAt(t)}function $(e,t,r){return e.slice(t,r)}function k(e){return e.length}function E(e){return e.length}function C(e,t){return t.push(e),e}function S(e,t){return e.filter((function(e){return!x(e,t)}))}var D=1,I=1,O=0,R=0,T=0,B="";function z(e,t,r,n,o,a,i,l){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:D,column:I,length:i,return:"",siblings:l}}function P(e,t){return g(z("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=P(e.root,{children:[e]});C(e,e.siblings)}function N(){return T=R>0?A(B,--R):0,I--,10===T&&(I=1,D--),T}function j(){return T=R<O?A(B,R++):0,I++,10===T&&(I=1,D++),T}function M(){return A(B,R)}function F(){return R}function Q(e,t){return $(B,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G(e){return v(Q(R-1,W(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(T=M())&&T<33;)j();return H(e)>2||H(T)>3?"":" "}function U(e,t){for(;--t&&j()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return Q(e,F()+(t<6&&32==M()&&32==j()))}function W(e){for(;j();)switch(T){case e:return R;case 34:case 39:34!==e&&39!==e&&W(T);break;case 40:41===e&&W(e);break;case 92:j()}return R}function K(e,t){for(;j()&&e+T!==57&&(e+T!==84||47!==M()););return"/*"+Q(t,R-1)+"*"+b(47===e?e:j())}function Y(e){for(;!H(M());)j();return Q(e,R)}function q(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Z(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case h:return e.return=e.return||e.value;case u:return"";case f:return e.return=e.value+"{"+q(e.children,n)+"}";case p:if(!k(e.value=e.props.join(",")))return""}return k(r=q(e.children,n))?e.return=e.value+"{"+r+"}":""}function X(e,t,r){switch(function(e,t){return 45^A(e,0)?(((t<<2^A(e,0))<<2^A(e,1))<<2^A(e,2))<<2^A(e,3):0}(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 4789:return c+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+c+e+s+e+e;case 5936:switch(A(e,t+11)){case 114:return d+e+s+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+s+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+s+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return d+e+s+e+e;case 6165:return d+e+s+"flex-"+e+e;case 5187:return d+e+y(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+s+"flex-$1$2")+e;case 5443:return d+e+s+"flex-item-"+y(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":s+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return d+e+s+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return d+e+s+y(e,"shrink","negative")+e;case 5292:return d+e+s+y(e,"basis","preferred-size")+e;case 6060:return d+"box-"+y(e,"-grow","")+d+e+s+y(e,"grow","positive")+e;case 4554:return d+y(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+s+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4200:if(!x(e,/flex-|baseline/))return s+"grid-column-align"+$(e,t)+e;break;case 2592:case 3360:return s+y(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,x(e.props,/grid-\w+-end/)}))?~w(e+(r=r[t].value),"span",0)?e:s+y(e,"-start","")+e+s+"grid-row-span:"+(~w(r,"span",0)?x(r,/\d+/):+x(r,/\d+/)-+x(e,/\d+/))+";":s+y(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return x(e.props,/grid-\w+-start/)}))?e:s+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-t>6)switch(A(e,t+1)){case 109:if(45!==A(e,t+4))break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+c+(108==A(e,t+3)?"$3":"$2-$3"))+e;case 115:return~w(e,"stretch",0)?X(y(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,a,i,l){return s+r+":"+n+l+(o?s+r+"-span:"+(a?i:+i-+n)+l:"")+e}));case 4949:if(121===A(e,t+6))return y(e,":",":"+d)+e;break;case 6444:switch(A(e,45===A(e,14)?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+d+(45===A(e,14)?"inline-":"")+"box$3$1"+d+"$2$3$1"+s+"$2box$3")+e;case 100:return y(e,":",":"+s)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function _(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=X(e.value,e.length,r));case f:return q([P(e,{value:y(e.value,"@","@"+d)})],n);case p:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(x(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":L(P(e,{props:[y(t,/:(read-\w+)/,":-moz-$1")]})),L(P(e,{props:[t]})),g(e,{props:S(r,n)});break;case"::placeholder":L(P(e,{props:[y(t,/:(plac\w+)/,":"+d+"input-$1")]})),L(P(e,{props:[y(t,/:(plac\w+)/,":-moz-$1")]})),L(P(e,{props:[y(t,/:(plac\w+)/,s+"input-$1")]})),L(P(e,{props:[t]})),g(e,{props:S(r,n)})}return""}))}}function J(e){return function(e){return B="",e}(ee("",null,null,null,[""],e=function(e){return D=I=1,O=k(B=e),R=0,[]}(e),0,[0],e))}function ee(e,t,r,n,o,a,i,l,s){for(var c=0,d=0,u=i,p=0,h=0,f=0,g=1,v=1,x=1,$=0,E="",S=o,D=a,I=n,O=E;v;)switch(f=$,$=j()){case 40:if(108!=f&&58==A(O,u-1)){-1!=w(O+=y(G($),"&","&\f"),"&\f",m(c?l[c-1]:0))&&(x=-1);break}case 34:case 39:case 91:O+=G($);break;case 9:case 10:case 13:case 32:O+=V(f);break;case 92:O+=U(F()-1,7);continue;case 47:switch(M()){case 42:case 47:C(re(K(j(),F()),t,r,s),s);break;default:O+="/"}break;case 123*g:l[c++]=k(O)*x;case 125*g:case 59:case 0:switch($){case 0:case 125:v=0;case 59+d:-1==x&&(O=y(O,/\f/g,"")),h>0&&k(O)-u&&C(h>32?ne(O+";",n,r,u-1,s):ne(y(O," ","")+";",n,r,u-2,s),s);break;case 59:O+=";";default:if(C(I=te(O,t,r,c,d,o,l,E,S=[],D=[],u,a),a),123===$)if(0===d)ee(O,t,I,I,S,a,u,l,D);else switch(99===p&&110===A(O,3)?100:p){case 100:case 108:case 109:case 115:ee(e,I,I,n&&C(te(e,I,I,0,0,o,l,E,o,S=[],u,D),D),o,D,u,l,n?S:D);break;default:ee(O,I,I,I,[""],D,0,l,D)}}c=d=h=0,g=x=1,E=O="",u=i;break;case 58:u=1+k(O),h=f;default:if(g<1)if(123==$)--g;else if(125==$&&0==g++&&125==N())continue;switch(O+=b($),$*g){case 38:x=d>0?1:(O+="\f",-1);break;case 44:l[c++]=(k(O)-1)*x,x=1;break;case 64:45===M()&&(O+=G(j())),p=M(),d=u=k(E=O+=Y(F())),$++;break;case 45:45===f&&2==k(O)&&(g=0)}}return a}function te(e,t,r,n,o,a,i,l,s,c,d,u){for(var h=o-1,f=0===o?a:[""],b=E(f),g=0,x=0,w=0;g<n;++g)for(var A=0,k=$(e,h+1,h=m(x=i[g])),C=e;A<b;++A)(C=v(x>0?f[A]+" "+k:y(k,/&\f/g,f[A])))&&(s[w++]=C);return z(e,t,r,0===o?p:l,s,c,d,u)}function re(e,t,r,n){return z(e,t,r,u,b(T),$(e,2,-2),0,n)}function ne(e,t,r,n,o){return z(e,t,r,h,$(e,0,n),$(e,n+1,-1),n,o)}var oe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ae="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ie="active",le="data-styled-version",se="6.1.13",ce="/*!sc*/\n",de="undefined"!=typeof window&&"HTMLElement"in window,ue=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),pe=(new Set,Object.freeze([])),he=Object.freeze({});var fe=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),me=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function ge(e){return e.replace(me,"-").replace(be,"")}var ve=/(a)(d)/gi,xe=function(e){return String.fromCharCode(e+(e>25?39:97))};function ye(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=xe(t%52)+r;return(xe(t%52)+r).replace(ve,"$1-$2")}var we,Ae=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},$e=function(e){return Ae(5381,e)};function ke(e){return"string"==typeof e&&!0}var Ee="function"==typeof Symbol&&Symbol.for,Ce=Ee?Symbol.for("react.memo"):60115,Se=Ee?Symbol.for("react.forward_ref"):60112,De={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ie={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Oe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Re=((we={})[Se]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},we[Ce]=Oe,we);function Te(e){return("type"in(t=e)&&t.type.$$typeof)===Ce?Oe:"$$typeof"in e?Re[e.$$typeof]:De;var t}var Be=Object.defineProperty,ze=Object.getOwnPropertyNames,Pe=Object.getOwnPropertySymbols,Le=Object.getOwnPropertyDescriptor,Ne=Object.getPrototypeOf,je=Object.prototype;function Me(e,t,r){if("string"!=typeof t){if(je){var n=Ne(t);n&&n!==je&&Me(e,n,r)}var o=ze(t);Pe&&(o=o.concat(Pe(t)));for(var a=Te(e),i=Te(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Ie||r&&r[s]||i&&s in i||a&&s in a)){var c=Le(t,s);try{Be(e,s,c)}catch(e){}}}}return e}function Fe(e){return"function"==typeof e}function Qe(e){return"object"==typeof e&&"styledComponentId"in e}function He(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ge(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ve(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ue(e,t,r){if(void 0===r&&(r=!1),!r&&!Ve(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ue(e[n],t[n]);else if(Ve(t))for(var n in t)e[n]=Ue(e[n],t[n]);return e}function We(e,t){Object.defineProperty(e,"toString",{value:t})}function Ke(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ye=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Ke(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+="".concat(this.tag.getRule(a)).concat(ce);return t},e}(),qe=new Map,Ze=new Map,Xe=1,_e=function(e){if(qe.has(e))return qe.get(e);for(;Ze.has(Xe);)Xe++;var t=Xe++;return qe.set(e,t),Ze.set(t,e),t},Je=function(e,t){Xe=t+1,qe.set(e,t),Ze.set(t,e)},et="style[".concat(ae,"][").concat(le,'="').concat(se,'"]'),tt=new RegExp("^".concat(ae,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rt=function(e,t,r){for(var n,o=r.split(","),a=0,i=o.length;a<i;a++)(n=o[a])&&e.registerName(t,n)},nt=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(ce),o=[],a=0,i=n.length;a<i;a++){var l=n[a].trim();if(l){var s=l.match(tt);if(s){var c=0|parseInt(s[1],10),d=s[2];0!==c&&(Je(d,c),rt(e,d,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},ot=function(e){for(var t=document.querySelectorAll(et),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(ae)!==ie&&(nt(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function at(){return r.nc}var it=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ae,"]")));return t[t.length-1]}(r),a=void 0!==o?o.nextSibling:null;n.setAttribute(ae,ie),n.setAttribute(le,se);var i=at();return i&&n.setAttribute("nonce",i),r.insertBefore(n,a),n},lt=function(){function e(e){this.element=it(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Ke(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),st=function(){function e(e){this.element=it(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ct=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),dt=de,ut={isServer:!de,useCSSOMInjection:!ue},pt=function(){function e(e,t,r){void 0===e&&(e=he),void 0===t&&(t={});var n=this;this.options=o(o({},ut),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&de&&dt&&(dt=!1,ot(this)),We(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return Ze.get(e)}(r);if(void 0===o)return"continue";var a=e.names.get(o),i=t.getGroup(r);if(void 0===a||!a.size||0===i.length)return"continue";var l="".concat(ae,".g").concat(r,'[id="').concat(o,'"]'),s="";void 0!==a&&a.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),n+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(ce)},a=0;a<r;a++)o(a);return n}(n)}))}return e.registerId=function(e){return _e(e)},e.prototype.rehydrate=function(){!this.server&&de&&ot(this)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(o(o({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new ct(r):t?new lt(r):new st(r)}(this.options),new Ye(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(_e(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(_e(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(_e(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ht=/&/g,ft=/^\s*\/\/.*$/gm;function mt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=mt(e.children,t)),e}))}function bt(e){var t,r,n,o=void 0===e?he:e,a=o.options,i=void 0===a?he:a,l=o.plugins,s=void 0===l?pe:l,c=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},d=s.slice();d.push((function(e){e.type===p&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ht,r).replace(n,c))})),i.prefix&&d.push(_),d.push(Z);var u=function(e,o,a,l){void 0===o&&(o=""),void 0===a&&(a=""),void 0===l&&(l="&"),t=l,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var s=e.replace(ft,""),c=J(a||o?"".concat(a," ").concat(o," { ").concat(s," }"):s);i.namespace&&(c=mt(c,i.namespace));var u,p,h,f=[];return q(c,(u=d.concat((h=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&h(e)})),p=E(u),function(e,t,r,n){for(var o="",a=0;a<p;a++)o+=u[a](e,t,r,n)||"";return o})),f};return u.hash=s.length?s.reduce((function(e,t){return t.name||Ke(15),Ae(e,t.name)}),5381).toString():"",u}var gt=new pt,vt=bt(),xt=n().createContext({shouldForwardProp:void 0,styleSheet:gt,stylis:vt}),yt=(xt.Consumer,n().createContext(void 0));function wt(){return(0,t.useContext)(xt)}function At(e){var r=(0,t.useState)(e.stylisPlugins),o=r[0],a=r[1],i=wt().styleSheet,s=(0,t.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),c=(0,t.useMemo)((function(){return bt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:o})}),[e.enableVendorPrefixes,e.namespace,o]);(0,t.useEffect)((function(){l()(o,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var d=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:s,stylis:c}}),[e.shouldForwardProp,s,c]);return n().createElement(xt.Provider,{value:d},n().createElement(yt.Provider,{value:c},e.children))}var $t=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=vt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,We(this,(function(){throw Ke(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=vt),this.name+e.hash},e}(),kt=function(e){return e>="A"&&e<="Z"};function Et(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;kt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ct=function(e){return null==e||!1===e||""===e},St=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ct(i)&&(Array.isArray(i)&&i.isCss||Fe(i)?n.push("".concat(Et(o),":"),i,";"):Ve(i)?n.push.apply(n,a(a(["".concat(o," {")],St(i),!1),["}"],!1)):n.push("".concat(Et(o),": ").concat((t=o,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in oe||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Dt(e,t,r,n){return Ct(e)?[]:Qe(e)?[".".concat(e.styledComponentId)]:Fe(e)?!Fe(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Dt(e(t),t,r,n):e instanceof $t?r?(e.inject(r,n),[e.getName(n)]):[e]:Ve(e)?St(e):Array.isArray(e)?Array.prototype.concat.apply(pe,e.map((function(e){return Dt(e,t,r,n)}))):[e.toString()];var o}function It(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Fe(r)&&!Qe(r))return!1}return!0}var Ot=$e(se),Rt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&It(e),this.componentId=t,this.baseHash=Ae(Ot,t),this.baseStyle=r,pt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=He(n,this.staticRulesId);else{var o=Ge(Dt(this.rules,e,t,r)),a=ye(Ae(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}n=He(n,a),this.staticRulesId=a}else{for(var l=Ae(this.baseHash,r.hash),s="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)s+=d;else if(d){var u=Ge(Dt(d,e,t,r));l=Ae(l,u+c),s+=u}}if(s){var p=ye(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(s,".".concat(p),void 0,this.componentId)),n=He(n,p)}}return n},e}(),Tt=n().createContext(void 0);Tt.Consumer;var Bt={};function zt(e,r,a){var i=Qe(e),l=e,s=!ke(e),c=r.attrs,d=void 0===c?pe:c,u=r.componentId,p=void 0===u?function(e,t){var r="string"!=typeof e?"sc":ge(e);Bt[r]=(Bt[r]||0)+1;var n="".concat(r,"-").concat(function(e){return ye($e(e)>>>0)}(se+r+Bt[r]));return t?"".concat(t,"-").concat(n):n}(r.displayName,r.parentComponentId):u,h=r.displayName,f=void 0===h?function(e){return ke(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e):h,m=r.displayName&&r.componentId?"".concat(ge(r.displayName),"-").concat(r.componentId):r.componentId||p,b=i&&l.attrs?l.attrs.concat(d).filter(Boolean):d,g=r.shouldForwardProp;if(i&&l.shouldForwardProp){var v=l.shouldForwardProp;if(r.shouldForwardProp){var x=r.shouldForwardProp;g=function(e,t){return v(e,t)&&x(e,t)}}else g=v}var y=new Rt(a,m,i?l.componentStyle:void 0);function w(e,r){return function(e,r,a){var i=e.attrs,l=e.componentStyle,s=e.defaultProps,c=e.foldedComponentIds,d=e.styledComponentId,u=e.target,p=n().useContext(Tt),h=wt(),f=e.shouldForwardProp||h.shouldForwardProp,m=function(e,t,r){return void 0===r&&(r=he),e.theme!==r.theme&&e.theme||t||r.theme}(r,p,s)||he,b=function(e,t,r){for(var n,a=o(o({},t),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var l=Fe(n=e[i])?n(a):n;for(var s in l)a[s]="className"===s?He(a[s],l[s]):"style"===s?o(o({},a[s]),l[s]):l[s]}return t.className&&(a.className=He(a.className,t.className)),a}(i,r,m),g=b.as||u,v={};for(var x in b)void 0===b[x]||"$"===x[0]||"as"===x||"theme"===x&&b.theme===m||("forwardedAs"===x?v.as=b.forwardedAs:f&&!f(x,g)||(v[x]=b[x]));var y=function(e,t){var r=wt();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(l,b),w=He(c,d);return y&&(w+=" "+y),b.className&&(w+=" "+b.className),v[ke(g)&&!fe.has(g)?"class":"className"]=w,v.ref=a,(0,t.createElement)(g,v)}(A,e,r)}w.displayName=f;var A=n().forwardRef(w);return A.attrs=b,A.componentStyle=y,A.displayName=f,A.shouldForwardProp=g,A.foldedComponentIds=i?He(l.foldedComponentIds,l.styledComponentId):"",A.styledComponentId=m,A.target=i?l.target:e,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Ue(e,o[n],!0);return e}({},l.defaultProps,e):e}}),We(A,(function(){return".".concat(A.styledComponentId)})),s&&Me(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function Pt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}new Set;var Lt=function(e){return Object.assign(e,{isCss:!0})};function Nt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Fe(e)||Ve(e))return Lt(Dt(Pt(pe,a([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Dt(n):Lt(Dt(Pt(n,t)))}function jt(e,t,r){if(void 0===r&&(r=he),!t)throw Ke(1,t);var n=function(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,Nt.apply(void 0,a([n],o,!1)))};return n.attrs=function(n){return jt(e,t,o(o({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return jt(e,t,o(o({},r),n))},n}var Mt=function(e){return jt(zt,e)},Ft=Mt;fe.forEach((function(e){Ft[e]=Mt(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=It(e),pt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var o=n(Ge(Dt(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&pt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=at(),n=Ge([r&&'nonce="'.concat(r,'"'),"".concat(ae,'="true"'),"".concat(le,'="').concat(se,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Ke(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Ke(2);var r=e.instance.toString();if(!r)return[];var a=((t={})[ae]="",t[le]=se,t.dangerouslySetInnerHTML={__html:r},t),i=at();return i&&(a.nonce=i),[n().createElement("style",o({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new pt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Ke(2);return n().createElement(At,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ke(3)}}(),"__sc-".concat(ae,"__");const Qt="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Ht="inset 2px 2px 3px rgba(0,0,0,0.2)",Gt=()=>Nt`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Vt=({background:e="material",color:t="materialText"}={})=>Nt`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:t})=>t[e]};
  color: ${({theme:e})=>e[t]};
`,Ut=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:r=2})=>Nt`
  background-image: ${[`linear-gradient(\n      45deg,\n      ${e} 25%,\n      transparent 25%,\n      transparent 75%,\n      ${e} 75%\n    )`,`linear-gradient(\n      45deg,\n      ${e} 25%,\n      transparent 25%,\n      transparent 75%,\n      ${e} 75%\n    )`].join(",")};
  background-color: ${t};
  background-size: ${`${2*r}px ${2*r}px`};
  background-position: 0 0, ${`${r}px ${r}px`};
`,Wt=()=>Nt`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Kt={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Yt=({invert:e=!1,style:t="button"}={})=>{const r=e?"bottomRightOuter":"topLeftOuter",n=e?"bottomRightInner":"topLeftInner",o=e?"topLeftInner":"bottomRightInner",a=e?"topLeftOuter":"bottomRightOuter";return Nt`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e[Kt[t][r]]};
    border-top-color: ${({theme:e})=>e[Kt[t][r]]};
    border-right-color: ${({theme:e})=>e[Kt[t][a]]};
    border-bottom-color: ${({theme:e})=>e[Kt[t][a]]};
    box-shadow: ${({theme:e,shadow:r})=>(({theme:e,topLeftInner:t,bottomRightInner:r,hasShadow:n=!1,hasInsetShadow:o=!1})=>[!!n&&Qt,!!o&&Ht,null!==t&&`inset 1px 1px 0px 1px ${e[t]}`,null!==r&&`inset -1px -1px 0 1px ${e[r]}`].filter(Boolean).join(", "))({theme:e,topLeftInner:Kt[t][n],bottomRightInner:Kt[t][o],hasShadow:r})};
  `},qt=()=>Nt`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Zt="undefined"!=typeof btoa?btoa:e=>Buffer.from(e).toString("base64"),Xt=(e,t=0)=>`url(data:image/svg+xml;base64,${Zt(`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g transform="rotate(${t} 13 13)">\n      <polygon fill="${e}" points="6,10 20,10 13,17"/>\n    </g>\n  </svg>`)})`,_t=(e="default")=>Nt`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Ut({mainColor:"flat"===e?t.flatLight:t.material,secondaryColor:"flat"===e?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Vt()}
    ${"flat"===e?Wt():Yt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:e})=>e.material};
  }
  ::-webkit-scrollbar-button {
    ${Vt()}
    ${"flat"===e?Wt():Yt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${"default"===e?Yt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:e})=>Xt(e.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:e})=>Xt(e.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:e})=>Xt(e.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:e})=>Xt(e.materialText,0)};
  }
`,Jt=Ft.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`;(0,t.forwardRef)((({children:e,underline:r=!0,...n},o)=>t.createElement(Jt,{ref:o,underline:r,...n},e))).displayName="Anchor";const er=Ft.header`
  ${Yt()};
  ${Vt()};

  position: ${e=>{var t;return null!==(t=e.position)&&void 0!==t?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,tr=(0,t.forwardRef)((({children:e,fixed:r=!0,position:n="fixed",...o},a)=>t.createElement(er,{fixed:r,position:!1!==r?n:void 0,ref:a,...o},e)));tr.displayName="AppBar";const rr=()=>{};function nr(e,t,r){return null!==r&&e>r?r:null!==t&&e<t?t:e}function or(e,t,r){const n=Math.round((e-r)/t)*t+r;return Number(n.toFixed(function(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}(t)))}function ar(e){return"number"==typeof e?`${e}px`:e}const ir=Ft.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`\n    height: ${e};\n    width: ${e};\n    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`\n    border-top: 2px solid ${t.borderDark};\n    border-left: 2px solid ${t.borderDark};\n    border-bottom: 2px solid ${t.borderLightest};\n    border-right: 2px solid ${t.borderLightest};\n    background: ${t.material};\n  `}
  ${({src:e})=>!e&&"\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    font-weight: bold;\n    font-size: 1rem;\n  "}
`,lr=Ft.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,sr=(0,t.forwardRef)((({alt:e="",children:r,noBorder:n=!1,size:o=35,square:a=!1,src:i,...l},s)=>t.createElement(ir,{noBorder:n,ref:s,size:ar(o),square:a,src:i,...l},i?t.createElement(lr,{src:i,alt:e}):r)));sr.displayName="Avatar";const cr={sm:"28px",md:"36px",lg:"44px"},dr=Nt`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>cr[e]};
  width: ${({fullWidth:e,size:t="md",square:r})=>e?"100%":r?cr[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,ur=Ft.button`
  ${({active:e,disabled:t,primary:r,theme:n,variant:o})=>"flat"===o?Nt`
          ${Wt()}
          ${r?`\n          border: 2px solid ${n.checkmark};\n            outline: 2px solid ${n.flatDark};\n            outline-offset: -4px;\n          `:`\n          border: 2px solid ${n.flatDark};\n            outline: 2px solid transparent;\n            outline-offset: -4px;\n          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&qt}
            outline-offset: -4px;
          }
        `:"menu"===o||"thin"===o?Nt`
          ${Vt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&Yt({style:"buttonThin"})}
          }
          &:active {
            ${!t&&Yt({style:"buttonThinPressed"})}
          }
          ${e&&Yt({style:"buttonThinPressed"})}
          ${t&&Gt()}
        `:Nt`
          ${Vt()};
          border: none;
          ${t&&Gt()}
          ${e?Ut({mainColor:n.material,secondaryColor:n.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${r?Nt`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${n.borderDarkest};
                `:Nt`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Yt(e?{style:"raised"===o?"window":"button",invert:!0}:{style:"raised"===o?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&Yt({style:"raised"===o?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&qt}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${dr}
`,pr=(0,t.forwardRef)((({onClick:e,disabled:r=!1,children:n,type:o="button",fullWidth:a=!1,size:i="md",square:l=!1,active:s=!1,onTouchStart:c=rr,primary:d=!1,variant:u="default",...p},h)=>t.createElement(ur,{active:s,disabled:r,$disabled:r,fullWidth:a,onClick:r?void 0:e,onTouchStart:c,primary:d,ref:h,size:i,square:l,type:o,variant:u,...p},n)));function hr({defaultValue:e,onChange:r,onChangePropName:n="onChange",readOnly:o,value:a,valuePropName:i="value"}){const l=void 0!==a,[s,c]=(0,t.useState)(e),d=(0,t.useCallback)((e=>{l||c(e)}),[l]);if(l&&"function"!=typeof r&&!o){const e=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${"value"===i?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(e)}return[l?a:s,d]}pr.displayName="Button";const fr=Ft.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>cr[e.size]};
  width: ${e=>e.square?cr[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>cr[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`\n        color: ${e.materialTextInvert};\n        background: ${e.hoverBackground};\n      `}

    cursor: default;
  }
  ${e=>e.$disabled&&Gt()}
`,mr=(0,t.forwardRef)((({size:e="lg",disabled:r,square:n,children:o,onClick:a,primary:i,...l},s)=>t.createElement(fr,{$disabled:r,size:e,square:n,onClick:r?void 0:a,primary:i,role:"menuitem",ref:s,"aria-disabled":r,...l},o)));mr.displayName="MenuListItem",Ft.ul.attrs((()=>({role:"menu"})))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Yt({style:"window"})}
  ${Vt()}
  ${e=>e.inline&&"\n    display: inline-flex;\n    align-items: center;\n  "}
  list-style: none;
  position: relative;
`.displayName="MenuList";const br=20,gr=Ft.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${br}px;
  height: ${br}px;
  opacity: 0;
  z-index: -1;
`,vr=Ft.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&Gt()}

  ${fr} & {
    margin: 0;
    height: 100%;
  }
  ${fr}:hover & {
    ${({$disabled:e,theme:t})=>!e&&Nt`
        color: ${t.materialTextInvert};
      `};
  }
`,xr=Ft.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${gr}:focus ~ & {
    ${qt}
  }
  ${gr}:not(:disabled) ~ &:active {
    ${qt}
  }
`,yr=Ft.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Ht};`}
  }
`,wr=Ft.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${_t()}
`,Ar=(0,t.forwardRef)((({children:e,shadow:r=!0,...n},o)=>t.createElement(yr,{ref:o,shadow:r,...n},t.createElement(wr,null,e))));Ar.displayName="ScrollView";const $r=Nt`
  width: ${br}px;
  height: ${br}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,kr=Ft(yr)`
  ${$r}
  width: ${br}px;
  height: ${br}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Er=Ft.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${$r}
  width: ${16}px;
  height: ${16}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Cr=Ft.span.attrs((()=>({"data-testid":"checkmarkIcon"})))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,Sr=Ft.span.attrs((()=>({"data-testid":"indeterminateIcon"})))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Ut({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Dr={flat:Er,default:kr},Ir=(0,t.forwardRef)((({checked:e,className:r="",defaultChecked:n=!1,disabled:o=!1,indeterminate:a=!1,label:i="",onChange:l=rr,style:s={},value:c,variant:d="default",...u},p)=>{var h;const[f,m]=hr({defaultValue:n,onChange:l,readOnly:null!==(h=u.readOnly)&&void 0!==h?h:o,value:e}),b=(0,t.useCallback)((e=>{const t=e.target.checked;m(t),l(e)}),[l,m]),g=Dr[d];let v=null;return a?v=Sr:f&&(v=Cr),t.createElement(vr,{$disabled:o,className:r,style:s},t.createElement(gr,{disabled:o,onChange:o?void 0:b,readOnly:o,type:"checkbox",value:c,checked:f,"data-indeterminate":a,ref:p,...u}),t.createElement(g,{$disabled:o,role:"presentation"},v&&t.createElement(v,{$disabled:o,variant:d})),i&&t.createElement(xr,null,i))}));Ir.displayName="Checkbox";const Or=Ft.div`
  ${({orientation:e,theme:t,size:r="100%"})=>"vertical"===e?`\n    height: ${ar(r)};\n    border-left: 2px solid ${t.borderDark};\n    border-right: 2px solid ${t.borderLightest};\n    margin: 0;\n    `:`\n    width: ${ar(r)};\n    border-bottom: 2px solid ${t.borderLightest};\n    border-top: 2px solid ${t.borderDark};\n    margin: 0;\n    `}
`;Or.displayName="Separator";const Rr=Ft(ur)`
  padding-left: 8px;
`,Tr=Ft(Or)`
  height: 21px;
  position: relative;
  top: 0;
`,Br=Ft.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,zr=Ft.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?Nt`
          border: 2px solid ${({theme:e})=>e.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
          );
        `:Nt`
          border: 2px solid ${({theme:e})=>e.materialText};
        `}
  ${Br}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${qt}
    outline-offset: -8px;
  }
`,Pr=Ft.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?Nt`
          border-top: 6px solid ${({theme:e})=>e.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
          );
        `:Nt`
          border-top: 6px solid ${({theme:e})=>e.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>"flat"===e?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`;(0,t.forwardRef)((({value:e,defaultValue:r,onChange:n=rr,disabled:o=!1,variant:a="default",...i},l)=>{var s;const[c,d]=hr({defaultValue:r,onChange:n,readOnly:null!==(s=i.readOnly)&&void 0!==s?s:o,value:e});return t.createElement(Rr,{disabled:o,as:"div",variant:a,size:"md"},t.createElement(Br,{onChange:e=>{const t=e.target.value;d(t),n(e)},readOnly:o,disabled:o,value:null!=c?c:"#008080",type:"color",ref:l,...i}),t.createElement(zr,{$disabled:o,color:null!=c?c:"#008080",role:"presentation"}),"default"===a&&t.createElement(Tr,{orientation:"vertical"}),t.createElement(Pr,{$disabled:o,variant:a}))})).displayName="ColorInput";const Lr=Ft.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>Nt`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Ut({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${2*e}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${2*e}px);
      top: ${e}px;
      left: ${2*e}px;
    }
  `}
`,Nr=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],jr=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Mr({digit:e=0,pixelSize:r=2,...n}){const o=jr[Number(e)].map(((e,t)=>e?`${Nr[t]} active`:Nr[t]));return t.createElement(Lr,{pixelSize:r,...n},o.map(((e,r)=>t.createElement("span",{className:e,key:r}))))}const Fr=Ft.div`
  ${Yt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Qr={sm:1,md:2,lg:3,xl:4},Hr=(0,t.forwardRef)((({value:e=0,minLength:r=3,size:n="md",...o},a)=>{const i=(0,t.useMemo)((()=>e.toString().padStart(r,"0").split("")),[r,e]);return t.createElement(Fr,{ref:a,...o},i.map(((e,r)=>t.createElement(Mr,{digit:e,pixelSize:Qr[n],key:r}))))}));Hr.displayName="Counter";const Gr=Nt`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${cr.md};
`,Vr=Ft(yr).attrs({"data-testid":"variant-default"})`
  ${Gr}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Ur=Ft.div.attrs({"data-testid":"variant-flat"})`
  ${Wt()}
  ${Gr}
  position: relative;
`,Wr=Nt`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>"flat"!==t&&e&&Gt()}
`,Kr=Ft.input`
  ${Wr}
  padding: 0 8px;
`,Yr=Ft.textarea`
  ${Wr}
  padding: 8px;
  resize: none;
  ${({variant:e})=>_t(e)}
`,qr=(0,t.forwardRef)((({className:e,disabled:r=!1,fullWidth:n,onChange:o=rr,shadow:a=!0,style:i,variant:l="default",...s},c)=>{const d="flat"===l?Ur:Vr,u=(0,t.useMemo)((()=>{var e;return s.multiline?t.createElement(Yr,{disabled:r,onChange:r?void 0:o,readOnly:r,ref:c,variant:l,...s}):t.createElement(Kr,{disabled:r,onChange:r?void 0:o,readOnly:r,ref:c,type:null!==(e=s.type)&&void 0!==e?e:"text",variant:l,...s})}),[r,o,s,c,l]);return t.createElement(d,{className:e,fullWidth:n,$disabled:r,shadow:a,style:i},u)}));qr.displayName="TextInput";const Zr=Ft.div`
  display: inline-flex;
  align-items: center;
`,Xr=Ft(pr)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>"flat"===e?Nt`
          height: calc(50% - 1px);
        `:Nt`
          height: 50%;
        `}
`,_r=Ft.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>"flat"===e?Nt`
          height: calc(${cr.md} - 4px);
        `:Nt`
          height: ${cr.md};
          margin-left: 2px;
        `}
`,Jr=Ft.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?Nt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:e})=>e.materialText};
        `:Nt`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:e})=>e.materialText};
        `}
  ${Xr}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?Nt`
            border-bottom-color: ${({theme:e})=>e.materialTextDisabled};
          `:Nt`
            border-top-color: ${({theme:e})=>e.materialTextDisabled};
          `}
  }
`,en=(0,t.forwardRef)((({className:e,defaultValue:r,disabled:n=!1,max:o,min:a,onChange:i,readOnly:l,step:s=1,style:c,value:d,variant:u="default",width:p,...h},f)=>{const[m,b]=hr({defaultValue:r,onChange:i,readOnly:l,value:d}),g=(0,t.useCallback)((e=>{const t=parseFloat(e.target.value);b(t)}),[b]),v=(0,t.useCallback)((e=>{const t=nr(parseFloat(((null!=m?m:0)+e).toFixed(2)),null!=a?a:null,null!=o?o:null);b(t),null==i||i(t)}),[o,a,i,b,m]),x=(0,t.useCallback)((()=>{void 0!==m&&(null==i||i(m))}),[i,m]),y=(0,t.useCallback)((()=>{v(s)}),[v,s]),w=(0,t.useCallback)((()=>{v(-s)}),[v,s]),A="flat"===u?"flat":"raised";return t.createElement(Zr,{className:e,style:{...c,width:void 0!==p?ar(p):"auto"},...h},t.createElement(qr,{value:m,variant:u,onChange:g,disabled:n,type:"number",readOnly:l,ref:f,fullWidth:!0,onBlur:x}),t.createElement(_r,{variant:u},t.createElement(Xr,{"data-testid":"increment",variant:A,disabled:n||l,onClick:y},t.createElement(Jr,{invert:!0})),t.createElement(Xr,{"data-testid":"decrement",variant:A,disabled:n||l,onClick:w},t.createElement(Jr,null))))}));en.displayName="NumberInput";const tn=e=>(0,t.useMemo)((()=>null!=e?e:function(){let e="";for(let t=0;t<10;t+=1)e+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[Math.floor(62*Math.random())];return e}()),[e]),rn=Nt`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,nn=Nt`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,on=Ft.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,an=Ft.div`
  ${rn}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${on}:focus & {
    ${nn}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,ln=Nt`
  height: ${cr.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?Gt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,sn=Ft(yr)`
  ${ln}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,cn=Ft.div`
  ${Wt()}
  ${ln}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,dn=Ft.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${rn}
  cursor: pointer;
  &:disabled {
    ${Gt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,un=Ft(ur).attrs((()=>({"aria-hidden":"true"})))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>"flat"===e?Nt`
          height: 100%;
          margin-right: 0;
        `:Nt`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&("flat"===t?"\n      position: absolute;\n      right: 0;\n      height: 100%;\n      ":"\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    height: calc(100% - 4px);\n    ")}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,pn=Ft.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`\n    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});\n    border-top-color: ${t.materialTextDisabled};\n    `}
  ${un}:active & {
    margin-top: 2px;
  }
`,hn=Ft.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Qt};
  ${({variant:e="default"})=>"flat"===e?Nt`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:e})=>e.flatDark};
        `:Nt`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:e})=>e.borderDarkest};
        `}
  ${({variant:e="default"})=>_t(e)}
`,fn=Ft.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${cr.md} - 4px);
  line-height: calc(${cr.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?nn:""}
  user-select: none;
`,mn=[],bn=({className:e,defaultValue:r,disabled:n,native:o,onChange:a,options:i=mn,readOnly:l,style:s,value:c,variant:d,width:u})=>{var p;const h=(0,t.useMemo)((()=>i.filter(Boolean)),[i]),[f,m]=hr({defaultValue:null!=r?r:null===(p=null==h?void 0:h[0])||void 0===p?void 0:p.value,onChange:a,readOnly:l,value:c}),b=!(n||l),g=(0,t.useMemo)((()=>({className:e,style:{...s,width:u}})),[e,s,u]),v=(0,t.useMemo)((()=>t.createElement(un,{as:"div","data-testid":"select-button",$disabled:n,native:o,tabIndex:-1,variant:"flat"===d?"flat":"raised"},t.createElement(pn,{"data-testid":"select-icon",$disabled:n}))),[n,o,d]),x=(0,t.useMemo)((()=>"flat"===d?cn:sn),[d]);return(0,t.useMemo)((()=>({isEnabled:b,options:h,value:f,setValue:m,wrapperProps:g,DropdownButton:v,Wrapper:x})),[v,x,b,h,m,f,g])},gn={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},vn=(0,t.forwardRef)((({className:e,defaultValue:r,disabled:n,onChange:o,options:a,readOnly:i,style:l,value:s,variant:c,width:d,...u},p)=>{const{isEnabled:h,options:f,setValue:m,value:b,DropdownButton:g,Wrapper:v}=bn({defaultValue:r,disabled:n,native:!0,onChange:o,options:a,readOnly:i,value:s,variant:c}),x=(0,t.useCallback)((e=>{const t=f.find((t=>t.value===e.target.value));t&&(m(t.value),null==o||o(t,{fromEvent:e}))}),[o,f,m]);return t.createElement(v,{className:e,style:{...l,width:d}},t.createElement(on,null,t.createElement(dn,{...u,disabled:n,onChange:h?x:rr,ref:p,value:b},f.map(((e,r)=>{var n;return t.createElement("option",{key:`${e.value}-${r}`,value:e.value},null!==(n=e.label)&&void 0!==n?n:e.value)}))),g))}));function xn({activateOptionIndex:e,active:r,index:n,onClick:o,option:a,selected:i,setRef:l}){const s=(0,t.useCallback)((()=>{e(n)}),[e,n]),c=(0,t.useCallback)((e=>{l(e,n)}),[n,l]),d=tn();return t.createElement(fn,{active:r,"aria-selected":i?"true":void 0,"data-value":a.value,id:d,onClick:o,onMouseEnter:s,ref:c,role:"option",tabIndex:0},a.label)}vn.displayName="SelectNative";const yn=(0,t.forwardRef)((function({"aria-label":e,"aria-labelledby":r,className:n,defaultValue:o,disabled:a=!1,formatDisplay:i,inputProps:l,labelId:s,menuMaxHeight:c,name:d,onBlur:u,onChange:p,onClose:h,onFocus:f,onKeyDown:m,onMouseDown:b,onOpen:g,open:v,options:x,readOnly:y,shadow:w=!0,style:A,variant:$="default",value:k,width:E="auto",...C},S){const{isEnabled:D,options:I,setValue:O,value:R,wrapperProps:T,DropdownButton:B,Wrapper:z}=bn({className:n,defaultValue:o,disabled:a,native:!1,onChange:p,options:x,style:A,readOnly:y,value:k,variant:$,width:E}),P=(0,t.useRef)(null),L=(0,t.useRef)(null),N=(0,t.useRef)(null),{activeOption:j,handleActivateOptionIndex:M,handleBlur:F,handleButtonKeyDown:Q,handleDropdownKeyDown:H,handleFocus:G,handleMouseDown:V,handleOptionClick:U,handleSetDropdownRef:W,handleSetOptionRef:K,open:Y,selectedOption:q}=(({onBlur:e,onChange:r,onClose:n,onFocus:o,onKeyDown:a,onMouseDown:i,onOpen:l,open:s,options:c,readOnly:d,value:u,selectRef:p,setValue:h,wrapperRef:f})=>{const m=(0,t.useRef)(null),b=(0,t.useRef)([]),g=(0,t.useRef)(0),v=(0,t.useRef)(0),x=(0,t.useRef)(),y=(0,t.useRef)("search"),w=(0,t.useRef)(""),A=(0,t.useRef)(),[$,k]=hr({defaultValue:!1,onChange:l,onChangePropName:"onOpen",readOnly:d,value:s,valuePropName:"open"}),E=(0,t.useMemo)((()=>{const e=c.findIndex((e=>e.value===u));return g.current=nr(e,0,null),c[e]}),[c,u]),[C,S]=(0,t.useState)(c[0]),D=(0,t.useCallback)((e=>{const t=m.current,r=b.current[e];if(!r||!t)return void(x.current=e);x.current=void 0;const n=t.clientHeight,o=t.scrollTop,a=t.scrollTop+n,i=r.offsetTop,l=r.offsetHeight,s=r.offsetTop+r.offsetHeight;i<o&&t.scrollTo(0,i),s>a&&t.scrollTo(0,i-n+l),r.focus({preventScroll:!0})}),[m]),I=(0,t.useCallback)(((e,{scroll:t}={})=>{var r;const n=c.length-1;let o;switch(e){case"first":o=0;break;case"last":o=n;break;case"next":o=nr(v.current+1,0,n);break;case"previous":o=nr(v.current-1,0,n);break;case"selected":o=nr(null!==(r=g.current)&&void 0!==r?r:0,0,n);break;default:o=e}v.current=o,S(c[o]),t&&D(o)}),[v,c,D]),O=(0,t.useCallback)((({fromEvent:e})=>{k(!0),I("selected",{scroll:!0}),null==l||l({fromEvent:e})}),[I,l,k]),R=(0,t.useCallback)((()=>{y.current="search",w.current="",clearTimeout(A.current)}),[]),T=(0,t.useCallback)((({focusSelect:e,fromEvent:t})=>{var r;null==n||n({fromEvent:t}),k(!1),S(c[0]),R(),x.current=void 0,e&&(null===(r=p.current)||void 0===r||r.focus())}),[R,n,c,p,k]),B=(0,t.useCallback)((({fromEvent:e})=>{$?T({focusSelect:!1,fromEvent:e}):O({fromEvent:e})}),[T,O,$]),z=(0,t.useCallback)(((e,{fromEvent:t})=>{g.current!==e&&(g.current=e,h(c[e].value),null==r||r(c[e],{fromEvent:t}))}),[r,c,h]),P=(0,t.useCallback)((({focusSelect:e,fromEvent:t})=>{z(v.current,{fromEvent:t}),T({focusSelect:e,fromEvent:t})}),[T,z]),L=(0,t.useCallback)(((e,{fromEvent:t,select:r})=>{var n;switch("cycleFirstLetter"===y.current&&e!==w.current&&(y.current="search"),e===w.current?y.current="cycleFirstLetter":w.current+=e,y.current){case"search":{let n=c.findIndex((e=>{var t;return 0===(null===(t=e.label)||void 0===t?void 0:t.toLocaleUpperCase().indexOf(w.current))}));n<0&&(n=c.findIndex((t=>{var r;return 0===(null===(r=t.label)||void 0===r?void 0:r.toLocaleUpperCase().indexOf(e))})),w.current=e),n>=0&&(r?z(n,{fromEvent:t}):I(n,{scroll:!0}));break}case"cycleFirstLetter":{const o=r?null!==(n=g.current)&&void 0!==n?n:-1:v.current;let a=c.findIndex(((t,r)=>{var n;return r>o&&0===(null===(n=t.label)||void 0===n?void 0:n.toLocaleUpperCase().indexOf(e))}));a<0&&(a=c.findIndex((t=>{var r;return 0===(null===(r=t.label)||void 0===r?void 0:r.toLocaleUpperCase().indexOf(e))}))),a>=0&&(r?z(a,{fromEvent:t}):I(a,{scroll:!0}));break}}clearTimeout(A.current),A.current=setTimeout((()=>{"search"===y.current&&(w.current="")}),1e3)}),[I,c,z]),N=(0,t.useCallback)((e=>{var t;0===e.button&&(e.preventDefault(),null===(t=p.current)||void 0===t||t.focus(),B({fromEvent:e}),null==i||i(e))}),[i,p,B]),j=(0,t.useCallback)((e=>{P({focusSelect:!0,fromEvent:e})}),[P]),M=(0,t.useCallback)((e=>{const{altKey:t,code:r,ctrlKey:n,metaKey:o,shiftKey:a}=e,{ARROW_DOWN:i,ARROW_UP:l,END:s,ENTER:c,ESC:d,HOME:u,SPACE:p,TAB:h}=gn,f=t||n||o||a;if(!(r===h&&(t||n||o)||r!==h&&f))switch(r){case i:if(e.preventDefault(),!$)return void O({fromEvent:e});I("next",{scroll:!0});break;case l:if(e.preventDefault(),!$)return void O({fromEvent:e});I("previous",{scroll:!0});break;case s:if(e.preventDefault(),!$)return void O({fromEvent:e});I("last",{scroll:!0});break;case c:if(!$)return;e.preventDefault(),P({focusSelect:!0,fromEvent:e});break;case d:if(!$)return;e.preventDefault(),T({focusSelect:!0,fromEvent:e});break;case u:if(e.preventDefault(),!$)return void O({fromEvent:e});I("first",{scroll:!0});break;case p:e.preventDefault(),$?P({focusSelect:!0,fromEvent:e}):O({fromEvent:e});break;case h:if(!$)return;a||e.preventDefault(),P({focusSelect:!a,fromEvent:e});break;default:!f&&r.match(/^Key/)&&(e.preventDefault(),e.stopPropagation(),L(r.replace(/^Key/,""),{select:!$,fromEvent:e}))}}),[I,T,$,O,L,P]),F=(0,t.useCallback)((e=>{M(e),null==a||a(e)}),[M,a]),Q=(0,t.useCallback)((e=>{I(e)}),[I]),H=(0,t.useCallback)((t=>{$||(R(),null==e||e(t))}),[R,e,$]),G=(0,t.useCallback)((e=>{R(),null==o||o(e)}),[R,o]),V=(0,t.useCallback)((e=>{m.current=e,void 0!==x.current&&D(x.current)}),[D]),U=(0,t.useCallback)(((e,t)=>{b.current[t]=e,x.current===t&&D(x.current)}),[D]);return(0,t.useEffect)((()=>{if(!$)return()=>{};const e=e=>{var t;const r=e.target;(null===(t=f.current)||void 0===t?void 0:t.contains(r))||(e.preventDefault(),T({focusSelect:!1,fromEvent:e}))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[T,$,f]),(0,t.useMemo)((()=>({activeOption:C,handleActivateOptionIndex:Q,handleBlur:H,handleButtonKeyDown:F,handleDropdownKeyDown:M,handleFocus:G,handleMouseDown:N,handleOptionClick:j,handleSetDropdownRef:V,handleSetOptionRef:U,open:$,selectedOption:E})),[C,Q,H,F,G,M,N,j,V,U,$,E])})({onBlur:u,onChange:p,onClose:h,onFocus:f,onKeyDown:m,onMouseDown:b,onOpen:g,open:v,options:I,value:R,selectRef:L,setValue:O,wrapperRef:N});(0,t.useImperativeHandle)(S,(()=>({focus:e=>{var t;null===(t=L.current)||void 0===t||t.focus(e)},node:P.current,value:String(R)})),[R]);const Z=(0,t.useMemo)((()=>q?"function"==typeof i?i(q):q.label:""),[i,q]),X=D?1:void 0,_=(0,t.useMemo)((()=>c?{overflow:"auto",maxHeight:c}:void 0),[c]),J=tn(),ee=(0,t.useMemo)((()=>I.map(((e,r)=>{const n=`${R}-${r}`,o=e===j,a=e===q;return t.createElement(xn,{activateOptionIndex:M,active:o,index:r,key:n,onClick:U,option:e,selected:a,setRef:K})}))),[j,M,U,K,I,q,R]);return t.createElement(z,{...T,$disabled:a,ref:N,shadow:w,style:{...A,width:E}},t.createElement("input",{name:d,ref:P,type:"hidden",value:String(R),...l}),t.createElement(on,{"aria-disabled":a,"aria-expanded":Y,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":null!=r?r:s,"aria-owns":D&&Y?J:void 0,onBlur:F,onFocus:G,onKeyDown:Q,onMouseDown:D?V:b,ref:L,role:"button",tabIndex:X,...C},t.createElement(an,null,Z),B),D&&Y&&t.createElement(hn,{id:J,onKeyDown:H,ref:W,role:"listbox",style:_,tabIndex:0,variant:$},ee))}));yn.displayName="Select";const wn=Ft.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,An=(0,t.forwardRef)((function({children:e,noPadding:r=!1,...n},o){return t.createElement(wn,{noPadding:r,ref:o,...n},e)}));An.displayName="Toolbar";const $n=Ft.div`
  padding: 16px;
`,kn=(0,t.forwardRef)((function({children:e,...r},n){return t.createElement($n,{ref:n,...r},e)}));kn.displayName="WindowContent";const En=Ft.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>!1===e?Nt`
          background: ${({theme:e})=>e.headerNotActiveBackground};
          color: ${({theme:e})=>e.headerNotActiveText};
        `:Nt`
          background: ${({theme:e})=>e.headerBackground};
          color: ${({theme:e})=>e.headerText};
        `}

  ${ur} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,Cn=(0,t.forwardRef)((function({active:e=!0,children:r,...n},o){return t.createElement(En,{active:e,ref:o,...n},r)}));Cn.displayName="WindowHeader";const Sn=Ft.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Yt({style:"window"})}
  ${Vt()}
`,Dn=Ft.span`
  ${({theme:e})=>Nt`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,In=(0,t.forwardRef)((({children:e,resizable:r=!1,resizeRef:n,shadow:o=!0,...a},i)=>t.createElement(Sn,{ref:i,shadow:o,...a},e,r&&t.createElement(Dn,{"data-testid":"resizeHandle",ref:n}))));In.displayName="Window";const On=Ft(Ar)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Rn=Ft.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Tn=Ft.div`
  display: flex;
  flex-wrap: wrap;
`,Bn=Ft.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,zn=Ft.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Pn=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}],Ln=(0,t.forwardRef)((({className:e,date:r=(new Date).toISOString(),onAccept:n,onCancel:o,shadow:a=!0},i)=>{const[l,s]=(0,t.useState)((()=>function(e){const t=new Date(Date.parse(e));return{day:t.getUTCDate(),month:t.getUTCMonth(),year:t.getUTCFullYear()}}(r))),{year:c,month:d,day:u}=l,p=(0,t.useCallback)((({value:e})=>{s((t=>({...t,month:e})))}),[]),h=(0,t.useCallback)((e=>{s((t=>({...t,year:e})))}),[]),f=(0,t.useCallback)((e=>{s((t=>({...t,day:e})))}),[]),m=(0,t.useCallback)((()=>{const e=[l.year,l.month+1,l.day].map((e=>String(e).padStart(2,"0"))).join("-");null==n||n(e)}),[l.day,l.month,l.year,n]),b=(0,t.useMemo)((()=>{const e=Array.from({length:42}),r=function(e,t){return new Date(e,t,1).getDay()}(c,d);let n=u;const o=function(e,t){return new Date(e,t+1,0).getDate()}(c,d);return n=n<o?n:o,e.forEach(((a,i)=>{if(i>=r&&i<o+r){const o=i-r+1;e[i]=t.createElement(Bn,{key:i,onClick:()=>{f(o)}},t.createElement(zn,{active:o===n},o))}else e[i]=t.createElement(Bn,{key:i})})),e}),[u,f,d,c]);return t.createElement(In,{className:e,ref:i,shadow:a,style:{margin:20}},t.createElement(Cn,null,t.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),t.createElement(kn,null,t.createElement(An,{noPadding:!0,style:{justifyContent:"space-between"}},t.createElement(yn,{options:Pn,value:d,onChange:p,width:128,menuMaxHeight:200}),t.createElement(en,{value:c,onChange:h,width:100})),t.createElement(On,null,t.createElement(Rn,null,t.createElement(Bn,null,"S"),t.createElement(Bn,null,"M"),t.createElement(Bn,null,"T"),t.createElement(Bn,null,"W"),t.createElement(Bn,null,"T"),t.createElement(Bn,null,"F"),t.createElement(Bn,null,"S")),t.createElement(Tn,null,b)),t.createElement(An,{noPadding:!0,style:{justifyContent:"space-between"}},t.createElement(pr,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),t.createElement(pr,{fullWidth:!0,onClick:n?m:void 0,disabled:!n},"OK"))))}));Ln.displayName="DatePicker";const Nn=Ft.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>(e=>{switch(e){case"status":case"well":return Nt`
        ${Yt({style:"status"})}
      `;case"window":case"outside":return Nt`
        ${Yt({style:"window"})}
      `;case"field":return Nt`
        ${Yt({style:"field"})}
      `;default:return Nt`
        ${Yt()}
      `}})(e)}
  ${({variant:e})=>Vt("field"===e?{background:"canvas",color:"canvasText"}:void 0)}
`,jn=(0,t.forwardRef)((({children:e,shadow:r=!1,variant:n="window",...o},a)=>t.createElement(Nn,{ref:a,shadow:r,variant:n,...o},e)));jn.displayName="Frame";const Mn=Ft.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>"flat"===t?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>"flat"!==e&&Nt`
      box-shadow: -1px -1px 0 1px ${({theme:e})=>e.borderDark},
        inset -1px -1px 0 1px ${({theme:e})=>e.borderDark};
    `}
  ${e=>e.$disabled&&Gt()}
`,Fn=Ft.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>"flat"===t?e.canvas:e.material};
`;(0,t.forwardRef)((({label:e,disabled:r=!1,variant:n="default",children:o,...a},i)=>t.createElement(Mn,{"aria-disabled":r,$disabled:r,variant:n,ref:i,...a},e&&t.createElement(Fn,{variant:n},e),o))).displayName="GroupBox";const Qn=Ft.div`
  ${({theme:e,size:t="100%"})=>`\n  display: inline-block;\n  box-sizing: border-box;\n  height: ${ar(t)};\n  width: 5px;\n  border-top: 2px solid ${e.borderLightest};\n  border-left: 2px solid ${e.borderLightest};\n  border-bottom: 2px solid ${e.borderDark};\n  border-right: 2px solid ${e.borderDark};\n  background: ${e.material};\n`}
`;Qn.displayName="Handle";const Hn=Ft.div`
  display: inline-block;
  height: ${({size:e})=>ar(e)};
  width: ${({size:e})=>ar(e)};
`,Gn=Ft.span`
  display: block;
  background: ${"url('data:image/gif;base64,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')"};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Vn=(0,t.forwardRef)((({size:e=30,...r},n)=>t.createElement(Hn,{size:e,ref:n,...r},t.createElement(Gn,null))));Vn.displayName="Hourglass";const Un=Ft.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Wn=Ft.div`
  position: relative;
`,Kn=Ft.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Yn=Ft(yr).attrs((()=>({"data-testid":"background"})))`
  width: 100%;
  height: 100%;
`,qn=Ft.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`;(0,t.forwardRef)((({backgroundStyles:e,children:r,...n},o)=>t.createElement(Un,{ref:o,...n},t.createElement(Wn,null,t.createElement(Kn,null,t.createElement(Yn,{style:e},r)),t.createElement(qn,null))))).displayName="Monitor";const Zn=Ft.div`
  display: inline-block;
  height: ${cr.md};
  width: 100%;
`,Xn=Ft(yr)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,_n=Nt`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Jn=Ft.div`
  position: relative;
  top: 4px;
  ${_n}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,eo=Ft.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${_n}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,to=Ft.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,ro=Ft.span`
  display: inline-block;
  width: ${17}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,no=(0,t.forwardRef)((({hideValue:e=!1,shadow:r=!0,value:n,variant:o="default",...a},i)=>{const l=e?null:`${n}%`,s=(0,t.useRef)(null),[c,d]=(0,t.useState)([]),u=(0,t.useCallback)((()=>{if(!s.current||void 0===n)return;const e=s.current.getBoundingClientRect().width,t=Math.round(n/100*e/17);d(Array.from({length:t}))}),[n]);return(0,t.useEffect)((()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u))),[u]),t.createElement(Zn,{"aria-valuenow":void 0!==n?Math.round(n):void 0,ref:i,role:"progressbar",variant:o,...a},t.createElement(Xn,{variant:o,shadow:r},"default"===o?t.createElement(t.Fragment,null,t.createElement(Jn,{"data-testid":"defaultProgress1"},l),t.createElement(eo,{"data-testid":"defaultProgress2",value:n},l)):t.createElement(to,{ref:s,"data-testid":"tileProgress"},c.map(((e,r)=>t.createElement(ro,{key:r}))))))}));no.displayName="ProgressBar";const oo=Nt`
  width: ${br}px;
  height: ${br}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ao=Ft(yr)`
  ${oo}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,io=Ft.div`
  ${Wt()}
  ${oo}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,lo=Ft.span.attrs((()=>({"data-testid":"checkmarkIcon"})))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,so={flat:io,default:ao};(0,t.forwardRef)((({checked:e,className:r="",disabled:n=!1,label:o="",onChange:a,style:i={},variant:l="default",...s},c)=>{const d=so[l];return t.createElement(vr,{$disabled:n,className:r,style:i},t.createElement(d,{$disabled:n,role:"presentation"},e&&t.createElement(lo,{$disabled:n,variant:l})),t.createElement(gr,{disabled:n,onChange:n?void 0:a,readOnly:n,type:"radio",checked:e,ref:c,...s}),o&&t.createElement(xr,null,o))})).displayName="Radio";const co="undefined"!=typeof window?t.useLayoutEffect:t.useEffect;function uo(e){const r=t.useRef(e);return co((()=>{r.current=e})),t.useCallback(((...e)=>(0,r.current)(...e)),[])}function po(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function ho(e,r){return(0,t.useMemo)((()=>null==e&&null==r?null:t=>{po(e,t),po(r,t)}),[e,r])}const fo=reactdom;let mo,bo=!0,go=!1;const vo={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function xo(e){e.metaKey||e.altKey||e.ctrlKey||(bo=!0)}function yo(){bo=!1}function wo(){"hidden"===this.visibilityState&&go&&(bo=!0)}function Ao(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return bo||function(e){if("type"in e){const{type:t,tagName:r}=e;if("INPUT"===r&&vo[t]&&!e.readOnly)return!0;if("TEXTAREA"===r&&!e.readOnly)return!0}return!(!("isContentEditable"in e)||!e.isContentEditable)}(t)}function $o(){go=!0,window.clearTimeout(mo),mo=window.setTimeout((()=>{go=!1}),100)}function ko(){const e=(0,t.useCallback)((e=>{const t=(0,fo.findDOMNode)(e);var r;null!=t&&((r=t.ownerDocument).addEventListener("keydown",xo,!0),r.addEventListener("mousedown",yo,!0),r.addEventListener("pointerdown",yo,!0),r.addEventListener("touchstart",yo,!0),r.addEventListener("visibilitychange",wo,!0))}),[]);return{isFocusVisible:Ao,onBlurVisible:$o,ref:e}}function Eo(e,t){if(void 0!==t&&"changedTouches"in e){for(let r=0;r<e.changedTouches.length;r+=1){const n=e.changedTouches[r];if(n.identifier===t)return{x:n.clientX,y:n.clientY}}return!1}return"clientX"in e&&{x:e.clientX,y:e.clientY}}function Co(e){return e&&e.ownerDocument||document}const So=Ft.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`\n        outline: 2px dotted ${t.materialText};\n        `}
  }

  ${({orientation:e,size:t})=>"vertical"===e?Nt`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:e})=>e?"41px":"39px"};
          }
        `:Nt`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:e})=>e?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Do=()=>Nt`
  position: absolute;
  ${({orientation:e})=>"vertical"===e?Nt`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:Nt`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Io=Ft(yr)`
  ${Do()}
`,Oo=Ft(yr)`
  ${Do()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,Ro=Ft.span`
  position: relative;
  ${({orientation:e})=>"vertical"===e?Nt`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:Nt`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>"flat"===e?Nt`
          ${Wt()}
          outline: 2px solid ${({theme:e})=>e.flatDark};
          background: ${({theme:e})=>e.flatLight};
        `:Nt`
          ${Vt()}
          ${Yt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Ut({mainColor:t.material,secondaryColor:t.borderLightest})}
`,To=Ft.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>"vertical"===e?Nt`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${6}px;
          border-bottom: 2px solid ${({theme:e})=>e.materialText};
        `:Nt`
          bottom: ${-6}px;
          height: ${6}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:e})=>e.materialText};
          border-right: 1px solid ${({theme:e})=>e.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&Nt`
      ${Gt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Bo=Ft.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>"vertical"===e?Nt`
          transform: translate(${8}px, ${7}px);
        `:Nt`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,zo=(0,t.forwardRef)((({defaultValue:e,disabled:r=!1,marks:n=!1,max:o=100,min:a=0,name:i,onChange:l,onChangeCommitted:s,onMouseDown:c,orientation:d="horizontal",size:u="100%",step:p=1,value:h,variant:f="default",...m},b)=>{const g="flat"===f?Oo:Io,v="vertical"===d,[x=a,y]=hr({defaultValue:e,onChange:null!=l?l:s,value:h}),{isFocusVisible:w,onBlurVisible:A,ref:$}=ko(),[k,E]=(0,t.useState)(!1),C=(0,t.useRef)(),S=(0,t.useRef)(null),D=ho($,C),I=ho(b,D),O=uo((e=>{w(e)&&E(!0)})),R=uo((()=>{!1!==k&&(E(!1),A())})),T=(0,t.useRef)(),B=(0,t.useMemo)((()=>!0===n&&Number.isFinite(p)?[...Array(Math.round((o-a)/p)+1)].map(((e,t)=>({label:void 0,value:a+p*t}))):Array.isArray(n)?n:[]),[n,o,a,p]),z=uo((e=>{const t=(o-a)/10,r=B.map((e=>e.value)),n=r.indexOf(x);let i=0;switch(e.key){case"Home":i=a;break;case"End":i=o;break;case"PageUp":p&&(i=x+t);break;case"PageDown":p&&(i=x-t);break;case"ArrowRight":case"ArrowUp":i=p?x+p:r[n+1]||r[r.length-1];break;case"ArrowLeft":case"ArrowDown":i=p?x-p:r[n-1]||r[0];break;default:return}e.preventDefault(),p&&(i=or(i,p,a)),i=nr(i,a,o),y(i),E(!0),null==l||l(i),null==s||s(i)})),P=(0,t.useCallback)((e=>{if(!C.current)return 0;const t=C.current.getBoundingClientRect();let r,n;if(r=v?(t.bottom-e.y)/t.height:(e.x-t.left)/t.width,n=function(e,t,r){return(r-t)*e+t}(r,a,o),p)n=or(n,p,a);else{const e=B.map((e=>e.value)),t=function(e,t){var r;const{index:n}=null!==(r=e.reduce(((e,r,n)=>{const o=Math.abs(t-r);return null===e||o<e.distance||o===e.distance?{distance:o,index:n}:e}),null))&&void 0!==r?r:{};return null!=n?n:-1}(e,n);n=e[t]}return n=nr(n,a,o),n}),[B,o,a,p,v]),L=uo((e=>{var t;const r=Eo(e,T.current);if(!r)return;const n=P(r);null===(t=S.current)||void 0===t||t.focus(),y(n),E(!0),null==l||l(n)})),N=uo((e=>{const t=Eo(e,T.current);if(!t)return;const r=P(t);null==s||s(r),T.current=void 0;const n=Co(C.current);n.removeEventListener("mousemove",L),n.removeEventListener("mouseup",N),n.removeEventListener("touchmove",L),n.removeEventListener("touchend",N)})),j=uo((e=>{var t;null==c||c(e),e.preventDefault(),null===(t=S.current)||void 0===t||t.focus(),E(!0);const r=Eo(e,T.current);if(r){const e=P(r);y(e),null==l||l(e)}const n=Co(C.current);n.addEventListener("mousemove",L),n.addEventListener("mouseup",N)})),M=uo((e=>{var t;e.preventDefault();const r=e.changedTouches[0];null!=r&&(T.current=r.identifier),null===(t=S.current)||void 0===t||t.focus(),E(!0);const n=Eo(e,T.current);if(n){const e=P(n);y(e),null==l||l(e)}const o=Co(C.current);o.addEventListener("touchmove",L),o.addEventListener("touchend",N)}));return(0,t.useEffect)((()=>{const{current:e}=C;null==e||e.addEventListener("touchstart",M);const t=Co(e);return()=>{null==e||e.removeEventListener("touchstart",M),t.removeEventListener("mousemove",L),t.removeEventListener("mouseup",N),t.removeEventListener("touchmove",L),t.removeEventListener("touchend",N)}}),[N,L,M]),t.createElement(So,{$disabled:r,hasMarks:Boolean(B.length),isFocused:k,onMouseDown:j,orientation:d,ref:I,size:ar(u),...m},t.createElement("input",{disabled:r,name:i,type:"hidden",value:null!=x?x:0}),B&&B.map((e=>t.createElement(To,{$disabled:r,"data-testid":"tick",key:e.value/(o-a)*100,orientation:d,style:{[v?"bottom":"left"]:(e.value-a)/(o-a)*100+"%"}},e.label&&t.createElement(Bo,{"aria-hidden":!0,"data-testid":"mark",orientation:d},e.label)))),t.createElement(g,{orientation:d,variant:f}),t.createElement(Ro,{$disabled:r,"aria-disabled":!!r||void 0,"aria-orientation":d,"aria-valuemax":o,"aria-valuemin":a,"aria-valuenow":x,onBlur:R,onFocus:O,onKeyDown:z,orientation:d,ref:S,role:"slider",style:{[v?"bottom":"left"]:(v?-100:0)+100*(x-a)/(o-a)+"%"},tabIndex:r?void 0:0,variant:f}))}));zo.displayName="Slider";const Po=Ft.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Ht};
  overflow-y: auto;
`;(0,t.forwardRef)((function({children:e,...r},n){return t.createElement(Po,{ref:n,...r},e)})).displayName="TableBody";const Lo=Ft.td`
  padding: 0 8px;
`;(0,t.forwardRef)((function({children:e,...r},n){return t.createElement(Lo,{ref:n,...r},e)})).displayName="TableDataCell";const No=Ft.thead`
  display: table-header-group;
`;(0,t.forwardRef)((function({children:e,...r},n){return t.createElement(No,{ref:n,...r},e)})).displayName="TableHead";const jo=Ft.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Yt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&Nt`
      &:active {
        &:before {
          ${Yt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&Gt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&Gt()}
  }
`;(0,t.forwardRef)((function({disabled:e=!1,children:r,onClick:n,onTouchStart:o=rr,sort:a,...i},l){const s="asc"===a?"ascending":"desc"===a?"descending":void 0;return t.createElement(jo,{$disabled:e,"aria-disabled":e,"aria-sort":s,onClick:e?void 0:n,onTouchStart:e?void 0:o,ref:l,...i},t.createElement("div",null,r))})).displayName="TableHeadCell";const Mo=Ft.tr`
  color: inherit;
  display: table-row;
  height: calc(${cr.md} - 2px);
  line-height: calc(${cr.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`;(0,t.forwardRef)((function({children:e,...r},n){return t.createElement(Mo,{ref:n,...r},e)})).displayName="TableRow";const Fo=Ft.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Qo=Ft(yr)`
  &:before {
    box-shadow: none;
  }
`;(0,t.forwardRef)((({children:e,...r},n)=>t.createElement(Qo,null,t.createElement(Fo,{ref:n,...r},e)))).displayName="Table";const Ho=Ft.button`
  ${Vt()}
  ${Yt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${cr.md};
  line-height: ${cr.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${qt}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`\n    z-index: 1;\n    height: calc(${cr.md} + 4px);\n    top: -4px;\n    margin-bottom: -6px;\n    padding: 0 16px;\n    margin-left: -8px;\n    &:not(:last-child) {\n      margin-right: -8px;\n    }\n  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`;(0,t.forwardRef)((({value:e,onClick:r,selected:n=!1,children:o,...a},i)=>t.createElement(Ho,{"aria-selected":n,selected:n,onClick:t=>null==r?void 0:r(e,t),ref:i,role:"tab",...a},o))).displayName="Tab";const Go=Ft.div`
  ${Vt()}
  ${Yt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`;(0,t.forwardRef)((({children:e,...r},n)=>t.createElement(Go,{ref:n,...r},e))).displayName="TabBody";const Vo=Ft.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`\n  button {\n    flex-grow: 1;\n  }\n  button:last-child:before {\n    border-right: 2px solid ${t.borderDark};\n  }\n  `}
`,Uo=Ft.div.attrs((()=>({"data-testid":"tab-row"})))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;(0,t.forwardRef)((({value:e,onChange:r=rr,children:n,rows:o=1,...a},i)=>{const l=(0,t.useMemo)((()=>{var a;const i=function(e,t){const r=[];for(let n=t;n>0;n-=1)r.push(e.splice(0,Math.ceil(e.length/n)));return r}(null!==(a=t.Children.map(n,(n=>{if(!t.isValidElement(n))return null;const o={selected:n.props.value===e,onClick:r};return t.cloneElement(n,o)})))&&void 0!==a?a:[],o).map(((e,t)=>({key:t,tabs:e}))),l=i.findIndex((e=>e.tabs.some((e=>e.props.selected))));return i.push(i.splice(l,1)[0]),i}),[n,r,o,e]);return t.createElement(Vo,{...a,isMultiRow:o>1,role:"tablist",ref:i},l.map((e=>t.createElement(Uo,{key:e.key},e.tabs))))})).displayName="Tabs";const Wo=["blur","focus"],Ko=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Yo(e){return"nativeEvent"in e&&Wo.includes(e.type)}function qo(e){return"nativeEvent"in e&&Ko.includes(e.type)}const Zo={top:"top: -4px;\n        left: 50%;\n        transform: translate(-50%, -100%);",bottom:"bottom: -4px;\n           left: 50%;\n           transform: translate(-50%, 100%);",left:"left: -4px;\n         top: 50%;\n         transform: translate(-100%, -50%);",right:"right: -4px;\n          top: 50%;\n          transform: translate(100%, -50%);"},Xo=Ft.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Qt};
  text-align: center;
  font-size: 1rem;
  ${e=>Zo[e.position]}
`,_o=Ft.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Jo=(0,t.forwardRef)((({className:e,children:r,disableFocusListener:n=!1,disableMouseListener:o=!1,enterDelay:a=1e3,leaveDelay:i=0,onBlur:l,onClose:s,onFocus:c,onMouseEnter:d,onMouseLeave:u,onOpen:p,style:h,text:f,position:m="top",...b},g)=>{const[v,x]=(0,t.useState)(!1),[y,w]=(0,t.useState)(),[A,$]=(0,t.useState)(),k=!n,E=!o,C=e=>{e.persist(),Yo(e)?null==c||c(e):qo(e)&&(null==d||d(e)),(e=>{window.clearTimeout(y),window.clearTimeout(A);const t=window.setTimeout((()=>{x(!0),null==p||p(e)}),a);w(t)})(e)},S=e=>{e.persist(),Yo(e)?null==l||l(e):qo(e)&&(null==u||u(e)),(e=>{window.clearTimeout(y),window.clearTimeout(A);const t=window.setTimeout((()=>{x(!1),null==s||s(e)}),i);$(t)})(e)},D=k?S:void 0,I=k?C:void 0,O=E?C:void 0,R=E?S:void 0,T=k?0:void 0;return t.createElement(_o,{"data-testid":"tooltip-wrapper",onBlur:D,onFocus:I,onMouseEnter:O,onMouseLeave:R,tabIndex:T},t.createElement(Xo,{className:e,"data-testid":"tooltip",position:m,ref:g,show:v,style:h,...b},f),r)}));Jo.displayName="Tooltip";const ea=Ft(xr)`
  white-space: nowrap;
`,ta=Nt`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":Nt`
          cursor: pointer;

          :focus {
            ${ea} {
              background: ${({theme:e})=>e.hoverBackground};
              color: ${({theme:e})=>e.materialTextInvert};
              outline: 2px dotted ${({theme:e})=>e.focusSecondary};
            }
          }
        `}
`,ra=Ft.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&Nt`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:e})=>e.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,na=Ft.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?Nt`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:e})=>e.material};
            }
          }
        `:Nt`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:e})=>e.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,oa=Ft.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,aa=Ft.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${ta};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,ia=Ft(vr)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${ta};
`,la=Ft.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function sa(e,t){return e.includes(t)?e.filter((e=>e!==t)):[...e,t]}function ca(e){e.preventDefault()}function da({className:e,disabled:r,expanded:n,innerRef:o,level:a,select:i,selected:l,style:s,tree:c=[]}){const d=0===a,u=(0,t.useCallback)((o=>{var c,u;const p=Boolean(o.items&&o.items.length>0),h=n.includes(o.id),f=null!==(c=r||o.disabled)&&void 0!==c&&c,m=f?ca:e=>i(e,o),b=f?ca:e=>i(e,o),g=l===o.id,v=t.createElement(la,{"aria-hidden":!0},o.icon);return t.createElement(na,{key:o.label,isRootLevel:d,role:"treeitem","aria-expanded":h,"aria-selected":g,hasItems:p},p?t.createElement(oa,{open:h},t.createElement(aa,{onClick:m,$disabled:f},t.createElement(ia,{$disabled:f},v,t.createElement(ea,null,o.label))),h&&t.createElement(da,{className:e,disabled:f,expanded:n,level:a+1,select:i,selected:l,style:s,tree:null!==(u=o.items)&&void 0!==u?u:[]})):t.createElement(ia,{as:"button",$disabled:f,onClick:b},v,t.createElement(ea,null,o.label)))}),[e,r,n,d,a,i,l,s]);return t.createElement(ra,{className:d?e:void 0,style:d?s:void 0,ref:d?o:void 0,role:d?"tree":"group",isRootLevel:d},c.map(u))}(0,t.forwardRef)((function({className:e,defaultExpanded:r=[],defaultSelected:n,disabled:o=!1,expanded:a,onNodeSelect:i,onNodeToggle:l,selected:s,style:c,tree:d=[]},u){const[p,h]=hr({defaultValue:r,onChange:l,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[f,m]=hr({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:s,valuePropName:"selected"}),b=(0,t.useCallback)(((e,t)=>{if(l){const r=sa(p,t);l(e,r)}h((e=>sa(e,t)))}),[p,l,h]),g=(0,t.useCallback)(((e,t)=>{m(t),i&&i(e,t)}),[i,m]),v=(0,t.useCallback)(((e,t)=>{e.preventDefault(),g(e,t.id),t.items&&t.items.length&&b(e,t.id)}),[g,b]);return t.createElement(da,{className:e,disabled:o,expanded:p,level:0,innerRef:u,select:v,selected:f,style:c,tree:d})})).displayName="TreeView";const ua=(0,e.withComponentFeatures)((e=>{const t={onClick:()=>e.onClick()};return n().createElement(pr,t,e.text)}));(0,e.registerComponent)("ud95-button",ua)})(),CHY={}})();