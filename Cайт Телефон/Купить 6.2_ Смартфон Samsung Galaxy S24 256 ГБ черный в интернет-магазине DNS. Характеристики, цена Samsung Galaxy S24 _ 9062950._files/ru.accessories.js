(()=>{"use strict";var e={42744:function(e,t,i){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.String_formatPrice=void 0;var n=r(i(79922));t.String_formatPrice=function(e,t){void 0===t&&(t=!1);var i=e<0?"-":"",r=parseFloat(Math.abs(e)+"")+"",o=String(Math.floor(Math.abs(e))),s=o.length>3?o.length%3:0,_="";return _+=0!==s?r.substr(0,s)+" ":"",_+=r.substr(s).replace(/(\d{3})(?=\d)/g,"$1 "),t&&(_+=" "+n.default.sign),i+_}},78010:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BuyButtonEventsEnum=void 0,function(e){e.ADD="buy-button:add",e.REFRESH="buy-button:refresh",e.UPDATED="buy-button:updated",e.RESET="buy-button:reset",e.PREORDER_CLICK="preorder-button:click"}(t.BuyButtonEventsEnum||(t.BuyButtonEventsEnum={}))},43775:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=i(39837),n=i(42744),o=i(91757),s=i(78010),_=i(72458),a=function(){function e(e,t,i){this._wrap=e,this._config=t,this._ajaxStates=i,this._groups=new Map,this._popupParts={main:null,title:null,buy:null,stat:null,picture:null,products:null}}return e.prototype.init=function(){var e=this;this._drawGroups();var t,i=window.button.create(_.__Все_аксессуары,o.ButtonColorModifiers.WHITE,{href:this._config.cardUrl});i.element.classList.add(this._class("__card-link")),this._wrap.appendChild(i.element),window.addEventListener(s.BuyButtonEventsEnum.UPDATED,(function(i){var r=!1,n=i.detail.products;e._config.products.forEach((function(e){var t=n.get(e.guid);void 0!==t&&!!e.inCart!==t&&(e.inCart=t,r=!0)})),r&&(clearTimeout(t),t=setTimeout((function(){e._refresh()}),300))}))},e.prototype._refresh=function(){for(var e=0;e<this._config.productGroups.length;e++)this._refreshGroup(e);void 0!==this._activeGroup&&this._renderActiveGroupProducts()},e.prototype._drawGroups=function(){var e=this,t=this._tag("__items");this._config.productGroups.forEach((function(i,r){var n=window.links.createLinkBase("");n.classList.add(e._class("__item")),!1===window.IS_TERMINAL_MODE&&n.setAttribute("target","_blank"),t.appendChild(n),e._groups.set(r,n),n.addEventListener("mouseleave",(function(){e._setHideTimeout(500)}),{passive:!0}),n.addEventListener("mouseenter",(function(){clearTimeout(e._hideTimeout),e._activeGroup=r,e._togglePopup(!0)}),{passive:!0})})),this._wrap.appendChild(t),this._refresh()},e.prototype._getGroupPriorProduct=function(e){var t=this._config.productGroups[e],i=this._config.products,r=i.find((function(e){return t.includes(e.code)&&e.inCart}));return r||(r=i.find((function(e){return e.code===t[0]}))),r},e.prototype._refreshGroup=function(e){var t=this._getGroupPriorProduct(e),i=this._groups.get(e);i.innerHTML="",i.href=t.url;var o=this._tag("__item-price");t.inCart?o.innerHTML=_.__В_корзине:o.innerHTML=(0,n.String_formatPrice)(t.price,!0),(0,r.domToggleClass)(i,this._class("__item_in-cart"),t.inCart),i.appendChild(this._getPictureTag(t.image,"__item","accessories group "+e)),i.appendChild(o)},e.prototype._renderActiveGroupProducts=function(){var e=this,t=this._popupParts,i=this._config.products.filter((function(t){return e._config.productGroups[e._activeGroup].includes(t.code)})),o=t.products;o.innerHTML="",1>=i.length||i.forEach((function(t){var i=e._tag("__item"),s=e._tag("__item-price");t.inCart?s.innerHTML=_.__В_корзине:s.innerHTML=(0,n.String_formatPrice)(t.price,!0),(0,r.domToggleClass)(i,e._class("__item_in-cart"),t.inCart),i.appendChild(e._getPictureTag(t.image,"__item")),i.appendChild(s),i.addEventListener("mouseenter",(function(){e._viewProductTimeout=setTimeout((function(){e._viewProduct(t)}),300)}),{passive:!0}),i.addEventListener("mouseleave",(function(){clearTimeout(e._viewProductTimeout)}),{passive:!0}),o.appendChild(i)}))},e.prototype._viewProduct=function(e){var t=this._popupParts,i=t.title;i.href=e.url,i.innerHTML=e.title,t.stat.innerHTML="";var r=this._ajaxStates.getCompare(e.code);r&&(r.classList.add(this._class("__product-compare")),t.stat.appendChild(r));var n=this._tag("__product-rating","a");n.href=e.url+"opinion",!1===window.IS_TERMINAL_MODE&&n.setAttribute("target","_blank"),e.opinions?(n.innerHTML="<i></i><i></i><i></i><i></i><i></i>"+e.opinions,n.setAttribute("data-rating",""+(e.rating||0))):(n.innerHTML="<i></i> "+_.__нет_отзывов,n.setAttribute("data-rating","0")),t.stat.appendChild(n);var o=t.buy,s=this._ajaxStates.getBuy(e.code);s.classList.add(this._class("__product-buy")),o.insertAdjacentElement("afterbegin",s);var a=t.picture;a.innerHTML="",a.href=e.url,a.appendChild(this._getPictureTag(e.image,"__product","",!0))},e.prototype._initPopupElement=function(){var e=this;if(!this._popup){var t=this._tag("__popup");this._popup=t,this._wrap.appendChild(t),t.addEventListener("mouseleave",(function(t){var i=t.relatedTarget;i&&(i.closest(".popover-block")||i.closest(".base-modal")||i.closest(".popup"))||e._setHideTimeout()}),{passive:!0}),t.addEventListener("mouseenter",(function(){clearTimeout(e._hideTimeout)}),{passive:!0});var i=this._tag("__product");t.appendChild(i);var r=window.links.createLinkBase("");r.classList.add(this._class("__product-title")),!1===window.IS_TERMINAL_MODE&&r.setAttribute("target","_blank"),i.appendChild(r),this._popupParts.title=r;var n=this._tag("__product-stat");this._popupParts.stat=n,i.appendChild(n);var o=this._tag("__product-buy-wrap");this._popupParts.buy=o,i.appendChild(o);var s=window.links.createLinkBase("");s.classList.add(this._class("__product-picture-wrap")),!1===window.IS_TERMINAL_MODE&&s.setAttribute("target","_blank"),i.appendChild(s),this._popupParts.picture=s,this._popupParts.main=i;var _=this._tag("__popup-items");this._popupParts.products=_,t.appendChild(_)}},e.prototype._togglePopup=function(e){var t=this;this._groups.forEach((function(e,i){(0,r.domToggleClass)(e,t._class("__item_active"),i===t._activeGroup)})),(e||this._popup)&&(e&&(this._initPopupElement(),this._viewProduct(this._getGroupPriorProduct(this._activeGroup)),this._renderActiveGroupProducts()),(0,r.domToggleClass)(this._popup,this._class("__popup_active"),e))},e.prototype._getPictureTag=function(e,t,i,r){void 0===r&&(r=!1);var n=r?e.big:e.thumb,o=this._tag(t+"-picture","picture"),s=document.createElement("source"),_=this._tag(t+"-img","img");return _.src=n,_.height=e.height,_.width=e.width,s.setAttribute("type","image/webp"),i&&(_.alt=i),s.setAttribute("srcset",n+".webp"),o.appendChild(s),o.appendChild(_),o},e.prototype._setHideTimeout=function(e){var t=this;void 0===e&&(e=100),clearTimeout(this._hideTimeout),this._hideTimeout=setTimeout((function(){t._activeGroup=void 0,t._togglePopup(!1)}),e)},e.prototype._tag=function(e,t){void 0===t&&(t="div");var i=document.createElement(t);return i.classList.add(this._class(e)),i},e.prototype._class=function(e){return"accessories-wrap"+e},e}();t.default=a},84029:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=i(39837),n=i(42744),o=i(72458),s=function(){function e(e,t){this._wrap=e,this._config=t}return e.prototype.init=function(){this._drawProducts(),this._drawCategories(),window.dispatchLazyLoadUpdateEvent()},e.prototype._drawProducts=function(){var e=this,t=this._tag("__items");this._config.products.forEach((function(i){var r=window.links.createLinkBase("",i.url);!1===window.IS_TERMINAL_MODE&&r.setAttribute("target","_blank"),r.classList.add(e._class("__item"));var s=e._tag("__item-picture","picture"),_=e._tag("__item-img","img");_.setAttribute("data-src",i.image.thumb),_.width=i.image.width,_.height=i.image.height,s.appendChild(_);var a=document.createElement("source");a.setAttribute("type","image/webp"),a.setAttribute("data-srcset",i.image.thumb+".webp"),s.appendChild(a);var u=e._tag("__item-price");i.inCart?(u.innerHTML=o.__В_корзине,r.classList.add(e._class("__item_in-cart"))):u.innerHTML=(0,n.String_formatPrice)(i.price,!0),r.appendChild(s),r.appendChild(u),t.appendChild(r)})),this._wrap.appendChild(t)},e.prototype._drawCategories=function(){var e=this,t=this._class("__collapse_collapsed"),i=this._tag("__collapse");i.classList.add(t),i.classList.add(this._class("__collapse-toggle")),i.textContent=o.__Все_аксессуары;var n=this._tag("__collapse-icon","i");i.addEventListener("click",(function(n){n.target.closest("."+e._class("__categories"))||(n.preventDefault(),(0,r.domToggleClass)(i,t))}));var s=this._tag("__categories");s.style.width="".concat(this._wrap.parentElement.offsetWidth,"px"),this._config.categories.forEach((function(t){var i=window.links.createLinkBase("",t.url);i.classList.add(e._class("__collapse")),i.classList.add(e._class("__collapse-link"));var r=e._tag("__collapse-title");r.textContent=t.title;var n=e._tag("__collapse-icon","i");if(t.image){var o=e._tag("__collapse-img-wrap"),_=e._tag("__collapse-img","img");_.setAttribute("data-src",t.image),o.appendChild(_),i.appendChild(o)}i.appendChild(r),i.appendChild(n),s.appendChild(i)})),i.appendChild(n),i.appendChild(s),this._wrap.appendChild(i)},e.prototype._tag=function(e,t){void 0===t&&(t="div");var i=document.createElement(t);return i.classList.add(this._class(e)),i},e.prototype._class=function(e){return"accessories-wrap"+e},e}();t.default=s},20899:function(e,t,i){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=r(i(80138)),o=r(i(43775)),s=r(i(84029)),_=new n.default;window.initAccessories=function(e,t,i){_.isDesktop?new o.default(e,t,i).init():new s.default(e,t).init()}},72458:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t["__нет_отзывов"]=t["__В_корзине"]=t["__Все_аксессуары"]=void 0,t["__Все_аксессуары"]="Все аксессуары",t["__В_корзине"]="В корзине",t["__нет_отзывов"]="нет отзывов"},91757:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonColorModifiers=void 0,function(e){e.BLUE="_blue",e.BLUE_BORDERED="_blue-bordered",e.BRAND="_brand",e.BRAND_BORDERED="_brand-bordered",e.GREY="_grey",e.RED="_red",e.WHITE="_white"}(t.ButtonColorModifiers||(t.ButtonColorModifiers={}))},2110:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LOCAL_STORAGE_BEST_PRICE_LINKS=t.LOCAL_STORAGE_IDB_PRODUCT_IDS=t.LOCAL_STORAGE_ORDER_PRODUCTS=t.LOCAL_STORAGE_CURRENCY_NAME=t.SESSION_STORAGE_GIFT_CARD_DATA=t.SESSION_STORAGE_CHECKOUT_PRESET_SHOP_ID=void 0,t.SESSION_STORAGE_CHECKOUT_PRESET_SHOP_ID="SESSION_STORAGE_CHECKOUT_PRESET_SHOP_ID",t.SESSION_STORAGE_GIFT_CARD_DATA="SESSION_STORAGE_GIFT_CARD_DATA",t.LOCAL_STORAGE_CURRENCY_NAME="LOCAL_STORAGE_CURRENCY_NAME",t.LOCAL_STORAGE_ORDER_PRODUCTS="order-products",t.LOCAL_STORAGE_IDB_PRODUCT_IDS="idb-order-products",t.LOCAL_STORAGE_BEST_PRICE_LINKS="best-price-links"},79922:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=i(2110),n=i(73363),o=new Map;o.set(n.CurrencyEnum.RUBLE,{sign:"₽",short:"руб",symbol:"р",postfix:["рубль","рубля","рублей"]}),o.set(n.CurrencyEnum.TENGE,{sign:"₸",short:"тңг",symbol:"т",postfix:["теңге","теңге","теңге"]});var s=function(){if("undefined"==typeof window)return{sign:"",short:"",symbol:"",postfix:[]};if(!window.currencyValue){var e=document.querySelector('meta[name="currency"]');null!==e&&(window.currencyValue=e.content),window.currencyValue=window.currencyValue||n.CurrencyEnum.RUBLE,window.localStorage.setItem(r.LOCAL_STORAGE_CURRENCY_NAME,window.currencyValue)}return o.get(window.currencyValue)},_=function(){function e(){}return Object.defineProperty(e,"sign",{get:function(){return s().sign},enumerable:!1,configurable:!0}),Object.defineProperty(e,"symbol",{get:function(){return s().symbol},enumerable:!1,configurable:!0}),Object.defineProperty(e,"short",{get:function(){return s().short},enumerable:!1,configurable:!0}),Object.defineProperty(e,"postfix",{get:function(){return s().postfix},enumerable:!1,configurable:!0}),e}();t.default=_},73363:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CurrencyEnum=void 0,function(e){e.RUBLE="ruble",e.TENGE="tenge"}(t.CurrencyEnum||(t.CurrencyEnum={}))},39837:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.domToggleClass=void 0,t.domToggleClass=function(e,t,i){void 0===i&&(i=!e.classList.contains(t)),!0===i?e.classList.add(t):e.classList.remove(t)}},42601:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScreenTypes=void 0,function(e){e[e.SCREEN_NOT_SUPPORTED=0]="SCREEN_NOT_SUPPORTED",e[e.SCREEN_WIDE=1]="SCREEN_WIDE",e[e.SCREEN_DESKTOP=2]="SCREEN_DESKTOP",e[e.SCREEN_TABLET=3]="SCREEN_TABLET",e[e.SCREEN_MOBILE=4]="SCREEN_MOBILE"}(t.ScreenTypes||(t.ScreenTypes={}))},80138:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=i(42601),n=function(){function e(){var e=this;this.SCREEN_MOBILE_MIN_WIDTH=320,this.SCREEN_MOBILE_MAX_WIDTH=767,this.SCREEN_TABLET_MAX_WIDTH=991,this.SCREEN_DESKTOP_MAX_WIDTH=1199,this.EVENT_RESIZE="resize",this.EVENT_OPTIMIZED_RESIZE="optimizedResize",this.EVENT_SCREEN_TYPE_CHANGED="screenTypeChanged",this._currentScreenType=null,this.optimizeResizeEvent=function(t){t=t||window;var i=!1;t.addEventListener(e.EVENT_RESIZE,(function(){i||(i=!0,requestAnimationFrame((function(){t.dispatchEvent(new CustomEvent(e.EVENT_OPTIMIZED_RESIZE));var r=e.calcCurrent();e._currentScreenType!==r&&(e._currentScreenType=r,t.dispatchEvent(new CustomEvent(e.EVENT_SCREEN_TYPE_CHANGED))),i=!1})))}))}}return Object.defineProperty(e.prototype,"current",{get:function(){return null===this._currentScreenType&&(this._currentScreenType=this.calcCurrent()),this._currentScreenType},enumerable:!1,configurable:!0}),e.prototype.calcCurrent=function(){var e=document.querySelector('meta[name="screen-type-helper"]');if(null!==e)return parseInt(e.content,10);var t=window.matchMedia;if(t){if(t("(min-width: "+(this.SCREEN_DESKTOP_MAX_WIDTH+1)+"px)").matches)return r.ScreenTypes.SCREEN_WIDE;if(t("(min-width: "+(this.SCREEN_TABLET_MAX_WIDTH+1)+"px)").matches)return r.ScreenTypes.SCREEN_DESKTOP;if(t("(min-width: "+(this.SCREEN_MOBILE_MAX_WIDTH+1)+"px)").matches)return r.ScreenTypes.SCREEN_TABLET;if(t("(min-width: "+this.SCREEN_MOBILE_MIN_WIDTH+"px)").matches)return r.ScreenTypes.SCREEN_MOBILE}else{var i=window.innerWidth;if(i>this.SCREEN_DESKTOP_MAX_WIDTH)return r.ScreenTypes.SCREEN_WIDE;if(i>this.SCREEN_TABLET_MAX_WIDTH)return r.ScreenTypes.SCREEN_DESKTOP;if(i>this.SCREEN_MOBILE_MAX_WIDTH)return r.ScreenTypes.SCREEN_TABLET;if(i>=this.SCREEN_MOBILE_MIN_WIDTH)return r.ScreenTypes.SCREEN_MOBILE}return r.ScreenTypes.SCREEN_NOT_SUPPORTED},e.prototype.check=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i=0,r=e;i<r.length;i++){var n=r[i];if(n===this.current)return!0}return!1},Object.defineProperty(e.prototype,"isDesktop",{get:function(){return this.check(r.ScreenTypes.SCREEN_DESKTOP,r.ScreenTypes.SCREEN_WIDE)},enumerable:!1,configurable:!0}),e.prototype.addResizeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.removeResizeListener=function(e){window.removeEventListener(this.EVENT_OPTIMIZED_RESIZE,e)},e.prototype.addChangeScreenTypeListener=function(e){this.optimizeResizeEvent(window),window.addEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e.prototype.removeChangeScreenTypeListener=function(e){window.removeEventListener(this.EVENT_SCREEN_TYPE_CHANGED,e)},e}();t.default=n}},t={};(function i(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,i),o.exports})(20899)})();