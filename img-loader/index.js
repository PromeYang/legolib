/*!
 * @project : lego-imgLoader
 * @version : 0.1.2
 * @author  : UED.Vicky
 * @update  : 2017-10-09 4:16:24 pm
 */
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LegoImageLoader=t():n.LegoImageLoader=t()}(this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){function r(n){return n&&n.__esModule?n:{"default":n}}var o=e(1),u=r(o),i=e(2),f=r(i);n.exports=function(){function n(t,e){if((0,u["default"])(this,n),this.errorImgs=[],this.opts={"try":3,progress:function(){},complete:function(){}},"function"==typeof e){var r=e;e={complete:r}}for(var o in e)this.opts[o]=e[o];this.init(t)}return(0,f["default"])(n,[{key:"init",value:function(n){var t=this,e=t.opts,r=[].concat(n),o=r.length,u=0,i=(new Date).getTime(),f=function(n){if(e.progress(++u,o,n),u==o){var r=(new Date).getTime()-i;e.complete(r,t.errorImgs)}};if(o)for(var c=function(n,e){var r=t.loadImage.bind(t);r(n,function(){var n=Array.prototype.slice.call(arguments,0);e.apply(null,n)})},a=0;a<r.length;a++)c(r[a],f);else e.complete(0)}},{key:"reLoadImg",value:function(n,t){var e=this;t>0&&!function(){var r=new Image;r.onerror=function(){e.reLoadImg(n,--t)},r.onload=function(){r.onerror=null,r.onload=null},r.src=n}()}},{key:"loadImage",value:function(n,t){var e=this,r=new Image,o=(new Date).getTime(),u=e.opts["try"]-1;r.onload=r.onerror=function(i){"error"==i.type&&(e.errorImgs.push(n),e.reLoadImg(n,u)),t(n,r,(new Date).getTime()-o),r.onload=null},r.src=n}}]),n}()},function(n,t){"use strict";t.__esModule=!0,t["default"]=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},function(n,t,e){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}t.__esModule=!0;var o=e(3),u=r(o);t["default"]=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u["default"])(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}()},function(n,t,e){n.exports={"default":e(4),__esModule:!0}},function(n,t,e){e(5);var r=e(8).Object;n.exports=function(n,t,e){return r.defineProperty(n,t,e)}},function(n,t,e){var r=e(6);r(r.S+r.F*!e(16),"Object",{defineProperty:e(12).f})},function(n,t,e){var r=e(7),o=e(8),u=e(9),i=e(11),f="prototype",c=function(n,t,e){var a,l,s,p=n&c.F,d=n&c.G,v=n&c.S,y=n&c.P,g=n&c.B,m=n&c.W,h=d?o:o[t]||(o[t]={}),w=h[f],x=d?r:v?r[t]:(r[t]||{})[f];d&&(e=t);for(a in e)l=!p&&x&&void 0!==x[a],l&&a in h||(s=l?x[a]:e[a],h[a]=d&&"function"!=typeof x[a]?e[a]:g&&l?u(s,r):m&&x[a]==s?function(n){var t=function(t,e,r){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(t);case 2:return new n(t,e)}return new n(t,e,r)}return n.apply(this,arguments)};return t[f]=n[f],t}(s):y&&"function"==typeof s?u(Function.call,s):s,y&&((h.virtual||(h.virtual={}))[a]=s,n&c.R&&w&&!w[a]&&i(w,a,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,n.exports=c},function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(n,t){var e=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(n,t,e){var r=e(10);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,t,e){var r=e(12),o=e(20);n.exports=e(16)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){var r=e(13),o=e(15),u=e(19),i=Object.defineProperty;t.f=e(16)?Object.defineProperty:function(n,t,e){if(r(n),t=u(t,!0),r(e),o)try{return i(n,t,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},function(n,t,e){var r=e(14);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,e){n.exports=!e(16)&&!e(17)(function(){return 7!=Object.defineProperty(e(18)("div"),"a",{get:function(){return 7}}).a})},function(n,t,e){n.exports=!e(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(n,t){n.exports=function(n){try{return!!n()}catch(t){return!0}}},function(n,t,e){var r=e(14),o=e(7).document,u=r(o)&&r(o.createElement);n.exports=function(n){return u?o.createElement(n):{}}},function(n,t,e){var r=e(14);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}}])});