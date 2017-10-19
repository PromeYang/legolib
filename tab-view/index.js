/*!
 * @project : lego-tabView
 * @version : 0.1.0
 * @author  : UED.Vicky
 * @update  : 2017-10-19 5:13:37 pm
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LegoTabView=t():e.LegoTabView=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),o=r(i),a=n(2),l=r(a),c=n(21),u=r(c),s=n(25),f=r(s);n(26),e.exports=function(){function e(t){var n=this;(0,o["default"])(this,e),this.handleClick=function(e){var t=e.target,r=void 0;if("a"!=t.tagName.toLowerCase()){r="li"==t.tagName.toLowerCase()?t:t.parentNode,n.clickFlag||(n.navClientW=n.navWrap.clientWidth,n.navScrollW=n.navWrap.scrollWidth,n.navViewCenter=n.navClientW/2,n.maxScroll=n.navScrollW-n.navClientW/2),n.clickFlag=!0;var i=n.calcNavStyle(r),o=i.width,a=i.center,l=r.index,c=n.navContainer.querySelector(".is-current"),u=n.calcNavStyle(c),s=u.width,f=u.center;r.classList.contains("is-current")||(c.classList.remove("is-current"),n.panelContainer.querySelector(".is-show").classList.remove("is-show"),n.panelItem[l].classList.add("is-show"),r.classList.add("is-current"),a<=n.navViewCenter?n.scrollLeft(0):n.navScrollW-a>=n.navViewCenter?n.scrollLeft(a-n.navViewCenter):n.navScrollW-a<n.navViewCenter&&n.scrollLeft(n.maxScroll),n.scrollNavLine(f,a),n.setNavLineWidth(s,o),n.defaults.switchCallBack instanceof Function&&n.defaults.switchCallBack(c.index,l))}},this.defaults={container:null,navConfig:{},activeIndex:0,navEasing:"easeInOut",switchCallBack:function(e,t){}},this.init(t)}return(0,l["default"])(e,[{key:"init",value:function(e){this.defaults=f["default"].extend(this.defaults,e);var t=document.createElement("style");t.innerHTML=u["default"],document.head.appendChild(t),this.tabView=document.querySelector(this.defaults.container),this.render(),this.navContainer=document.querySelector('[data-role="nav-container"]'),this.navWrap=document.querySelector(".lego-tabView__navWrap"),this.allNavItem=document.querySelectorAll('[data-role="nav-item"]'),this.panelContainer=document.querySelector('[data-role="panel-container"]'),this.panelItem=document.querySelectorAll(".lego-tabView__panel"),this.navLine=document.querySelector(".lego-navLine"),this.clickFlag=!1,this.initNav(),this.bindEvent()}},{key:"render",value:function(){var e=this.defaults.navConfig,t=n(27)(e);this.tabView.innerHTML=t}},{key:"initNav",value:function(){var e=this.navContainer.querySelector(".is-current"),t=0;if(e){var n=this.calcNavStyle(e);this.navLine.style.width=n.width-20+"px",this.navLine.style.left=n.center+"px"}for(var r=0;r<this.allNavItem.length;r++)this.allNavItem[r].index=r,t+=this.allNavItem[r].clientWidth;this.navContainer.style.width=t+"px"}},{key:"bindEvent",value:function(){for(var e=this.allNavItem.length,t=0;t<e;t++){var n=this.allNavItem[t];n.addEventListener("click",this.handleClick,!1)}var r=f["default"].getUrlParam("activeIndex")||this.defaults.activeIndex;r<e?this.switchTo(r):console.error("activeIndex必须是小于导航item总数的数字")}},{key:"switchTo",value:function(e){this.allNavItem[e].click(this.handleClick.bind(this))}},{key:"calcNavStyle",value:function(e){return{width:e.clientWidth,center:e.offsetLeft+e.clientWidth/2}}},{key:"scrollLeft",value:function(e){var t=this,n=this.navWrap.scrollLeft;Math.animation(n,e,200,this.defaults.navEasing,function(e){t.navWrap.scrollLeft=e})}},{key:"scrollNavLine",value:function(e,t){var n=this;Math.animation(e,t,200,this.defaults.navEasing,function(e){n.navLine.style.left=e+"px"})}},{key:"setNavLineWidth",value:function(e,t){var n=this;Math.animation(e,t,200,this.defaults.navEasing,function(e){n.navLine.style.width=parseInt(e-20)+"px"})}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}()},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(3),o=r(i);t["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o["default"])(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()},function(e,t,n){e.exports={"default":n(4),__esModule:!0}},function(e,t,n){n(5);var r=n(8).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(6);r(r.S+r.F*!n(16),"Object",{defineProperty:n(12).f})},function(e,t,n){var r=n(7),i=n(8),o=n(9),a=n(11),l="prototype",c=function(e,t,n){var u,s,f,v=e&c.F,d=e&c.G,p=e&c.S,h=e&c.P,g=e&c.B,w=e&c.W,y=d?i:i[t]||(i[t]={}),m=y[l],b=d?r:p?r[t]:(r[t]||{})[l];d&&(n=t);for(u in n)s=!v&&b&&void 0!==b[u],s&&u in y||(f=s?b[u]:n[u],y[u]=d&&"function"!=typeof b[u]?n[u]:g&&s?o(f,r):w&&b[u]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t[l]=e[l],t}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[u]=f,e&c.R&&m&&!m[u]&&a(m,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(10);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(12),i=n(20);e.exports=n(16)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(13),i=n(15),o=n(19),a=Object.defineProperty;t.f=n(16)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(l){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(14);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(16)&&!n(17)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,n){var r=n(14),i=n(7).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,n){var r=n(14);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(22);"string"==typeof r?e.exports=r:e.exports=r.toString()},function(e,t,n){t=e.exports=n(23)(),t.push([e.id,".lego-navMore:after{width:.32rem;height:.32rem;background-image:url("+n(24)+");background-size:contain;background-repeat:no-repeat}.lego-tabView{position:relative}.lego-tabView__nav{position:fixed;top:0;left:0;z-index:2;width:100%;background-color:#fff;height:.8rem;line-height:.8rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-right:.5rem;overflow:hidden}.lego-tabView__nav:after{content:\" \";position:absolute;top:0;right:.5rem;height:.8rem;width:.4rem;z-index:100;background:-webkit-gradient(linear,left top,right top,color-stop(0,hsla(0,0%,100%,0)),color-stop(100%,#fff))}.lego-tabView__navWrap{position:relative;height:100%;box-sizing:content-box;overflow-x:scroll;overflow-y:hidden;padding-bottom:.1rem;-webkit-overflow-scrolling:touch}.lego-tabView__navWrap::-webkit-scrollbar{display:none}.lego-navList{white-space:nowrap;font-size:0}.lego-navList li{display:inline-block;font-size:.3rem;text-align:center;-webkit-transition:all .25s;transition:all .25s}.lego-navList li a,.lego-navList li span{display:inline-block;padding:0 .4rem;color:#666}.lego-navList li a:hover,.lego-navList li span:hover{text-decoration:none}.lego-navList li.is-current{font-weight:400}.lego-navList li.is-current a,.lego-navList li.is-current span{color:#fa0}.lego-navMore{height:100%;width:.5rem;position:absolute;right:0;top:0;background-color:#fff}.lego-navMore:after{content:'';position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.lego-tabView__panel{padding-top:.8rem;display:none}.lego-tabView__panel.is-show{display:block}.lego-navLine{position:absolute;left:50%;bottom:.1rem;width:1rem;height:.02rem;background:#fa0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAA0UlEQVRoQ+3Y0Q3CMAwE0OtkdCRGgE0YpWzACDAJyPwi0FU5XWt0/XYc59WtrExo+kxN60YKd7+5iEecFEirkFCysNbiBxmDMVGJP437ybZqXfgsYzAmav1xGp10W0VcZ8llijjnpIuKuM6SyxRxzkkXVeJ7nA4fAO6/jrnXIesM4PS3hesaz5gpfxUj9nuriEecFEirkFCysIjLKMlErcVrmHFew9XkdyFhv4ZtMR1eAQzfnlXhy+jpV66/ATiuXPMR3rrHRw+/yfqIu9nbir8AUYYPrD/SHx0AAAAASUVORK5CYII="},function(e,t){var n={extend:function(e,t){var n=null;for(var r in t)n=t[r],e!==n&&"undefined"!=typeof n&&(e[r]=n);return e},getUrlParam:function(e,t){var n=new RegExp("[\\?&#]"+e+"=([^&#]+)","gi"),r=(t||location.href).match(n),i=[];return r&&r.length>0?(i=r[r.length-1].split("="),i&&i.length>1?i[1]:""):""}};e.exports=n},function(e,t){var n={Linear:function(e,t,n,r){return n*e/r+t},easeIn:function(e,t,n,r){return n*(e/=r)*e+t},easeOut:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},easeInOut:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}};Math.tween=n,Math.animation=function(e,t,n,r,i){var o=function(e){return"function"==typeof e},a=function(e){return"number"==typeof e},l=function(e){return"string"==typeof e},c=function(e){if(a(e))return e;if(l(e)){if(/\d+m?s$/.test(e))return/ms/.test(e)?1*e.replace("ms",""):1e3*e.replace("s","");if(/^\d+$/.test(e))return+e}return-1};if(!a(e)||!a(t))return window.console&&console.error("from和to两个参数必须且为数值"),0;var u=Math.tween||window.Tween;if(!u)return window.console&&console.error("缓动算法函数缺失"),0;var s={duration:300,easing:"easeInOut",callback:function(){}},f=function(e){o(e)?s.callback=e:c(e)!=-1?s.duration=c(e):l(e)&&(s.easing=e)};f(n),f(r),f(i),window.requestAnimationFrame||(requestAnimationFrame=function(e){setTimeout(e,17)});var v,d=0,p=Math.ceil(s.duration/17),h=s.easing;if(v=u[h],0==o(v))return void console.error('没有找到名为"'+s.easing+'"的动画算法');var g=function w(){var n=v(d,e,t-e,p);d++,d<=p?(s.callback(n),requestAnimationFrame(w)):s.callback(t,!0)};g()}},function(e,t,n){var r=n(28);e.exports=r("cc344910-b4ad-11e7-8ce2-1147a23791ab",function(e,t){"use strict";var n=this,r=(n.$helpers,n.$each),i=(e.data,e.i,n.$escape),o="";return o+='<div class="lego-tabView"> <div class="lego-tabView__nav"> <div class="lego-tabView__navWrap"> <ul class="lego-navList" data-role="nav-container"> ',r(e,function(e,t){o+=" <li ",o+=i(0===t?"class=is-current":""),o+=' data-role="nav-item" ',o+=i(e.attr),o+="> ",e.link?(o+=" <a href=",o+=i(e.link),o+=' target="_blank">',o+=i(e.title),o+="</a> "):(o+=" <span>",o+=i(e.title),o+="</span> "),o+=" </li> "}),o+=' </ul> <div class="lego-navLine"></div> </div> <div class="lego-navMore"></div> </div> <div class="lego-tabView__content" data-role="panel-container"> ',r(e,function(e,t){o+=' <div class="lego-tabView__panel ',o+=i(0===t?"is-show":""),o+='"></div> '}),o+=" </div> </div> ",new String(o)})},function(e,t){!function(){function t(e,t){return(/string|function/.test(typeof t)?c:l)(e,t)}function n(e,t){return"string"!=typeof e&&(t=typeof e,"number"===t?e+="":e="function"===t?n(e.call(e)):""),e}function r(e){return v[e]}function i(e){return n(e).replace(/&(?![\w#]+;)|[<>"']/g,r)}function o(e,t){if(d(e))for(var n=0,r=e.length;r>n;n++)t.call(e,e[n],n,e);else for(n in e)t.call(e,e[n],n)}function a(e,t){var n=/(\/)[^\/]+\1\.\.\1/,r=("./"+e).replace(/[^\/]+$/,""),i=r+t;for(i=i.replace(/\/\.\//g,"/");i.match(n);)i=i.replace(n,"/");return i}function l(e,n){var r=t.get(e)||u({filename:e,name:"Render Error",message:"Template not found"});return n?r(n):r}function c(e,t){if("string"==typeof t){var n=t;t=function(){return new f(n)}}var r=s[e]=function(n){try{return new t(n,e)+""}catch(r){return u(r)()}};return r.prototype=t.prototype=p,r.toString=function(){return t+""},r}function u(e){var t="{Template Error}",n=e.stack||"";if(n)n=n.split("\n").slice(0,2).join("\n");else for(var r in e)n+="<"+r+">\n"+e[r]+"\n\n";return function(){return"object"==typeof console&&console.error(t+"\n\n"+n),t}}var s=t.cache={},f=this.String,v={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},d=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},p=t.utils={$helpers:{},$include:function(e,t,n){return e=a(n,e),l(e,t)},$string:n,$escape:i,$each:o},h=t.helpers=p.$helpers;t.get=function(e){return s[e.replace(/^\.\//,"")]},t.helper=function(e,t){h[e]=t},e.exports=t}()}])});