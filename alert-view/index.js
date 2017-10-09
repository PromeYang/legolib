/*!
 * @project : lego-alertView
 * @version : 0.1.0
 * @author  : UED.Vicky
 * @update  : 2017-10-09 3:10:55 pm
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LegoAlertView=t():e.LegoAlertView=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(1),r=o(i),a=n(2),l=o(a),c=n(21),s=o(c),u=n(22),f=o(u);document.body.addEventListener("touchstart",function(){}),e.exports=function(){function e(t){(0,r["default"])(this,e),this.defaults={title:"",text:"",confirm:function(){},cancel:function(){},extraClass:"",_modalTpl:"",overlayTpl:"",okButton:"确定",cancelButton:"取消",container:document.body?document.body:"body"},this.init()}return(0,l["default"])(e,[{key:"init",value:function(){var e=document.createElement("style");e.innerHTML=f["default"],document.head.appendChild(e),this._modalTpl=document.createElement("div"),this.overlayTpl=document.createElement("div"),this.overlayTpl.innerHTML='<div class="lego-alertView__overlay"></div>',this.defaults.container.appendChild(this.overlayTpl.children[0])}},{key:"ready",value:function(){}},{key:"render",value:function(e){var t=this,n="",o="",i=e.title?'<div class="lego-alertView__title">'+e.title+"</div>":"",r=e.text?'<div class="lego-alertView__text">'+e.text+"</div>":"",a=e.buttons&&0!==e.buttons.length?"":"ext-nobuttons";if(e.buttons&&e.buttons.length>0)for(var l=0;l<e.buttons.length;l++)o+='<span class="lego-alertView__btn">'+e.buttons[l].text+"</span>";n='<div class="lego-alertView '+(e.extraClass||"")+" "+a+'">\n                            <div class="lego-alertView__content">\n                                '+i+"\n                                "+r+'\n                            </div>\n                            <div class="lego-alertView__action">'+o+"</div>\n                         </div>",this._modalTpl.innerHTML=n;var c=this._modalTpl.children[0];return this.defaults.container.appendChild(c),[].forEach.call(c.querySelectorAll(".lego-alertView__btn"),function(n,o){n.addEventListener("click",function(n){e.buttons[o].close!==!1&&t.closeModal(c),e.buttons[o].onClick&&e.buttons[o].onClick(c,n)},!1)}),this.openModal(c),c[0]}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}},{key:"openModal",value:function(e){var t=e.style;t.display="block",setTimeout(function(){e.classList.remove("modal-out"),e.classList.add("modal-in")},5);var n=document.querySelector(".lego-alertView__overlay");return n.classList.add("ext-visible"),!0}},{key:"closeModal",value:function(e){function t(){e.parentNode.removeChild(e)}var n=s["default"].animationEnd();e.classList.add("modal-out"),e.classList.remove("modal-in");var o=document.querySelector(".lego-alertView__overlay");return o.classList.remove("ext-visible"),e.addEventListener(n,t,!1),!0}},{key:"alert",value:function(e){e.okButton=e.okButton||this.defaults.okButton,e.cancelButton=e.cancelButton||this.defaults.cancelButton,e.buttons=[{text:e.okButton,onClick:e.confirm}],this.render(e)}},{key:"confirm",value:function(e){e.okButton=e.okButton||this.defaults.okButton,e.cancelButton=e.cancelButton||this.defaults.cancelButton,e.buttons=[{text:e.cancelButton,onClick:e.cancel},{text:e.okButton,onClick:e.confirm}],this.render(e)}}]),e}()},function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(3),r=o(i);t["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r["default"])(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},function(e,t,n){e.exports={"default":n(4),__esModule:!0}},function(e,t,n){n(5);var o=n(8).Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},function(e,t,n){var o=n(6);o(o.S+o.F*!n(16),"Object",{defineProperty:n(12).f})},function(e,t,n){var o=n(7),i=n(8),r=n(9),a=n(11),l="prototype",c=function(e,t,n){var s,u,f,d=e&c.F,p=e&c.G,m=e&c.S,b=e&c.P,v=e&c.B,w=e&c.W,h=p?i:i[t]||(i[t]={}),y=h[l],g=p?o:m?o[t]:(o[t]||{})[l];p&&(n=t);for(s in n)u=!d&&g&&void 0!==g[s],u&&s in h||(f=u?g[s]:n[s],h[s]=p&&"function"!=typeof g[s]?n[s]:v&&u?r(f,o):w&&g[s]==f?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[l]=e[l],t}(f):b&&"function"==typeof f?r(Function.call,f):f,b&&((h.virtual||(h.virtual={}))[s]=f,e&c.R&&y&&!y[s]&&a(y,s,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var o=n(10);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,i){return e.call(t,n,o,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var o=n(12),i=n(20);e.exports=n(16)?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(13),i=n(15),r=n(19),a=Object.defineProperty;t.f=n(16)?Object.defineProperty:function(e,t,n){if(o(e),t=r(t,!0),o(n),i)try{return a(e,t,n)}catch(l){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(14);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(16)&&!n(17)(function(){return 7!=Object.defineProperty(n(18)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,n){var o=n(14),i=n(7).document,r=o(i)&&o(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){var o=n(14);e.exports=function(e,t){if(!o(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!o(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!o(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!o(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={animationEnd:function(){var e=document.body||document.documentElement,t=e.style,n={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(var o in n)if("string"==typeof t[o])return n[o]}};e.exports=n},function(e,t,n){var o=n(23);"string"==typeof o?e.exports=o:e.exports=o.toString()},function(e,t,n){t=e.exports=n(24)(),t.push([e.id,".lego-alertView__overlay{-webkit-user-select:none;position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:10600;visibility:hidden;opacity:0;-webkit-transition-duration:.4s;transition-duration:.4s}.lego-alertView__overlay.ext-visible{visibility:visible;opacity:1}.lego-alertView{width:6rem;position:fixed;z-index:11000;left:50%;margin-left:-3rem;top:50%;text-align:center;border-radius:.35rem;opacity:0;-webkit-transform:translate3d(0,-50%,0) scale(1.185);transform:translate3d(0,-50%,0) scale(1.185);color:#000;display:none;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;font-weight:400}.lego-alertView *{font-family:San Francisco,Helvetica Neue,Helvetica,sans-serif;font-weight:300;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent}.lego-alertView.modal-in{-webkit-animation-name:show;animation-name:show}.lego-alertView.modal-out{-webkit-animation-name:hide;animation-name:hide}.lego-alertView__content{padding:.35rem;border-radius:.35rem .35rem 0 0;position:relative;background:#f4f4f4}.lego-alertView__content:after{content:'';position:absolute;left:0;bottom:0;right:auto;top:auto;height:1px;width:100%;background-color:#b5b5b5;display:block;z-index:15;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}@media only screen and (-webkit-min-device-pixel-ratio:2){.lego-alertView__content:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:3){.lego-alertView__content:after{-webkit-transform:scaleY(.33);transform:scaleY(.33)}}.lego-alertView__title{font-weight:500;font-size:16px;text-align:center}.lego-alertView__text{font-size:14px;margin-top:.1rem}.lego-alertView__action{height:.9rem;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.lego-alertView__btn{-webkit-user-select:none;width:100%;padding:0 .25rem;height:.9rem;font-size:16px;line-height:.9rem;text-align:center;color:#0894ec;font-weight:500;background:#f4f4f4;display:block;position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;cursor:pointer;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1}.lego-alertView__btn:after{content:'';position:absolute;left:0;top:0;width:1px;height:100%;background-color:#b5b5b5;z-index:15;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.lego-alertView__btn:active{background:#e3e3e3}.lego-alertView__btn:active+.lego-alertView__btn:after,.lego-alertView__btn:active:after{display:none}.lego-alertView__btn:first-child{border-radius:0 0 0 .35rem}.lego-alertView__btn:first-child:after{display:none}.lego-alertView__btn:last-child{border-radius:0 0 .35rem 0}.lego-alertView__btn:first-child:last-child{border-radius:0 0 .35rem .35rem}@media only screen and (-webkit-min-device-pixel-ratio:2){.lego-alertView__btn:after{-webkit-transform:scaleX(.5);transform:scaleX(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:3){.lego-alertView__btn:after{-webkit-transform:scaleX(.33);transform:scaleX(.33)}}@-webkit-keyframes show{to{opacity:1;-webkit-transform:translate3d(0,-50%,0) scale(1);transform:translate3d(0,-50%,0) scale(1)}}@keyframes show{to{opacity:1;-webkit-transform:translate3d(0,-50%,0) scale(1);transform:translate3d(0,-50%,0) scale(1)}}@-webkit-keyframes hide{to{opacity:0;-webkit-transform:translate3d(0,-50%,0) scale(.815);transform:translate3d(0,-50%,0) scale(.815)}}@keyframes hide{to{opacity:0;-webkit-transform:translate3d(0,-50%,0) scale(.815);transform:translate3d(0,-50%,0) scale(.815)}}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}}])});