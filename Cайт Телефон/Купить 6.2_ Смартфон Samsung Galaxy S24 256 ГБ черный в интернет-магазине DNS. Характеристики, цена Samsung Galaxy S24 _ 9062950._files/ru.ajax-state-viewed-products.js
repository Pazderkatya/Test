(()=>{"use strict";var e={96614:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Dom_addClasses=void 0,t.Dom_addClasses=function(e,t){t.forEach((function(t){e.classList.add(t)}))}},90804:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AjaxStateProcessorAbstract=void 0;var n=r(96614),i=function(){function e(){var e=this;this._waitingElements=[],this.addWaitingState=function(t){(0,n.Dom_addClasses)(t,["ajs-placeholder","ajs-placeholder_waiting"]),e._waitingElements.push(t)}}return Object.defineProperty(e.prototype,"service",{set:function(e){this._service=e},enumerable:!1,configurable:!0}),e.prototype.needGetStateAfterBuild=function(e){return!0},e.prototype.refreshOnlyAfterUserActivity=function(e){return!1},e.prototype.afterRefresh=function(e){this._waitingElements.forEach((function(e){setTimeout((function(){e.classList.remove("ajs-placeholder_waiting")})),setTimeout((function(){e.classList.remove("ajs-placeholder")}),1e3)})),this._waitingElements=[]},e}();t.AjaxStateProcessorAbstract=i},88368:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["__Удалить_из_истории"]=void 0,t["__Удалить_из_истории"]="Удалить из истории"},24461:function(e,t,r){var n,i=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ViewedProductsProcessor=void 0;var s=r(6543),c=o(r(80138)),E=r(21401),a=o(r(69603)),u=r(90804),d=r(88368),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._storage=new a.default,t._screen=new c.default,t}return i(t,e),t.prototype.build=function(e){return this._getRequestData()},t.prototype.needGetStateAfterBuild=function(e){return 0!==this._getIds().length},t.prototype.refresh=function(e,t){var r=e.data,n=document.getElementById(e.id);if(null!==n){if(r&&r.html){var i=document.createElement("div");i.innerHTML=r.html;var o=i.firstChild;o.setAttribute("id",e.id),this.addWaitingState(o),n.parentElement.insertBefore(o,n)}n.remove()}},t.prototype.afterRefresh=function(t){var r=this;e.prototype.afterRefresh.call(this,t),window.dispatchLazyLoadUpdateEvent(),(0,s.domDispatchEvent)(E.SliderProductsWidgetEvents.INIT),t.states.forEach((function(e){var t=document.getElementById(e.id);t&&r._initRemoveBtns(t,e.id)}))},t.prototype._getRequestData=function(){return{ids:this._getIds()}},t.prototype._getIds=function(){var e,t=document.querySelector("[data-product-card] .product-card-top__code");return null!==t&&(e=t.innerText.replace(/(.*)\s(\d+)/,"$2")),this._storage.getAll().filter((function(t){return t!==e}))},t.prototype._initRemoveBtns=function(e,t){var r,n=this;this._getProducts(e).forEach((function(i){var o,s=document.createElement("div");s.classList.add("viewed-products-slider__remove-product"),n._screen.isDesktop&&(o=window.tooltip.drawBottom(s,d.__Удалить_из_истории)),s.addEventListener("click",(function(){clearTimeout(r),o&&o.destroy(),i.closest('[data-role="slider-product"]').remove(),n._storage.remove(i.getAttribute("data-code")),0===n._getProducts(e).length?e.remove():r=setTimeout((function(){e.classList.add("viewed-products-slider_loading"),n._service.updateStateImmediately(t,n._getRequestData())}),1e3)})),i.appendChild(s)}))},t.prototype._getProducts=function(e){return[].slice.call(e.querySelectorAll('[data-id="product"]'))},t}(u.AjaxStateProcessorAbstract);t.ViewedProductsProcessor=_},69603:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.STORAGE_KEY="viewed-products",this.STORAGE_SIZE=20}return e.prototype.getAll=function(){return JSON.parse(localStorage.getItem(this.STORAGE_KEY))||[]},e.prototype.add=function(e){this.remove(e);var t=this.getAll()||[];t.unshift(e),localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t.slice(0,this.STORAGE_SIZE)))},e.prototype.remove=function(e){var t=this.getAll()||[];!1!==t.includes(e)&&(t.splice(t.indexOf(e),1),localStorage.setItem(this.STORAGE_KEY,JSON.stringify(t)))},e}();t.default=r},21401:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SliderProductsWidgetEvents=void 0,function(e){e.INIT="slider-products-widget:init"}(t.SliderProductsWidgetEvents||(t.SliderProductsWidgetEvents={}))},6543:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.domDispatchEvent=void 0,t.domDispatchEvent=function(e,t,r){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!0,r),void 0===t?window.dispatchEvent(n):t.dispatchEvent(n)}},42601:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScreenTypes=void 0,function(e){e[e.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",e[e.SCREEN_WIDE=1]="SCREEN_WIDE",e[e.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",e[e.SCREEN_TABLET=3]="SCREEN_TABLET",e[e.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(t.ScreenTypes||(t.ScreenTypes={}))},80138:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(42601),i=function(){function e(){var e=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(t){t=t||window;var r=!1;t.addEventListener(e.EVENT_RESIZE,(function(){r||(r=!0,requestAnimationFrame((function(){t.dispatchEvent(new CustomEvent(e.EVENT_OPTIMIZED_RESIZE));var n=e.calcCurrent();e._currentScreenType!==n&&(e._currentScreenType=n,t.dispatchEvent(new CustomEvent(e.EVENT_SCREEN_TYPE_CHANGED))),r=!1})))}))}}return Object.defineProperty(e.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!1,configurable:!0}),e.prototype.calcCurrent=function(){var e=document.querySelector('meta[name="screen-type-helper"]');if(null!==e)return parseInt(e.content,10);var t=window.matchMedia;if(t){if(t("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_WIDE;if(t("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_DESKTOP;if(t("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return n.ScreenTypes.SCREEN_TABLET;if(t("(min-width: "+this.SCREEN_MOBILE_MIN_WIDTH+"px)").matches)return n.ScreenTypes.SCREEN_MOBILE}else{var r=window.innerWidth;if(r>this.SCREEN_DESKTOP_MAX_WIDTH)return n.ScreenTypes.SCREEN_WIDE;if(r>this.SCREEN_TABLET_MAX_WIDTH)return n.ScreenTypes.SCREEN_DESKTOP;if(r>this.SCREEN_MOBILE_MAX_WIDTH)return n.ScreenTypes.SCREEN_TABLET;if(r>=this.SCREEN_MOBILE_MIN_WIDTH)return n.ScreenTypes.SCREEN_MOBILE}return n.ScreenTypes.SCREEN_NOT_SUPPORTED},e.prototype.check=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,n=e;r<n.length;r++){var i=n[r];if(i===this.current)return!0}return!1},Object.defineProperty(e.prototype,"isDesktop",{get:function(){return this.check(n.ScreenTypes.SCREEN_DESKTOP,n.ScreenTypes.SCREEN_WIDE)},enumerable:!1,configurable:!0}),e.prototype.addResizeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.removeResizeListener=function(e){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.addChangeScreenTypeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e.prototype.removeChangeScreenTypeListener=function(e){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e}();t.default=i}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}var n;n=r(24461),window.AjaxState.processors.register("viewed-products",new n.ViewedProductsProcessor)})();