(()=>{"use strict";var e={97453:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Dom_onDocumentReady=void 0,t.Dom_onDocumentReady=function(e,t){void 0===t&&(t=!1),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):t&&e(void 0)}},13649:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(97453),i=o(n(25607));(0,r.Dom_onDocumentReady)((function(){(new i.default).init()}))},25607:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(64294),i=o(n(79922)),d=function(){function e(){var e=this;this.DROPDOWN_ZINDEX=9999,this.displayingPopover=function(t){t.preventDefault(),document.body.append(e.dropdown,e.popover),e.link.setAttribute("href",window.PROZAPASS_URL),e.popover.style.display="block";var n=t.target.getBoundingClientRect(),o=e.popover.firstElementChild.getBoundingClientRect().width,r=n.bottom+e.winScrollTop(),i=document.documentElement.clientWidth,d=n.left+(n.width/2-o/2);d+o>i&&(d=i/2-o/2),e.popover.setAttribute("style","left:".concat(d,"px; top:").concat(r,"px; z-index:").concat(e.DROPDOWN_ZINDEX+1,"; display: block;"))},this.removePopover=function(){var t=e.dropdown;if(t.remove instanceof Function)t.remove();else{var n=t.parentElement||t.parentNode;n instanceof Object&&n.removeChild instanceof Function&&t.removeChild(t)}e.popover.remove()}}return e.prototype.init=function(){var e=this;[].slice.call(document.querySelectorAll(".buy-cheaper")).forEach((function(t){if(!t.hasAttribute("data-inited")){t.hasAttribute("data-inited")||t.setAttribute("data-inited",""),e.popover=document.createElement("div"),e.popover.setAttribute("id","cheaper-popover"),e.popover.classList.add("popover","bottom"),e.link=document.createElement("a"),e.link.setAttribute("href","javascript:;"),e.link.setAttribute("id","cheaper-popover-link"),e.link.setAttribute("target","_blank"),e.link.setAttribute("rel","nofollow"),e.link.classList.add("ui-link","ui-link_blue","ui-link_pseudolink"),e.link.innerText="Узнать больше",e.dropdown=document.createElement("div"),e.dropdown.setAttribute("style","position:fixed;left:0;top:0;right:0;bottom:0;z-index: ".concat(e.DROPDOWN_ZINDEX,";")),e.content=document.createElement("div"),e.content.classList.add("popover-content"),window.IS_PROZAPASS_DISCOUNT&&e.addingTextDiscount();var n=document.createElement("div");n.classList.add("text-right");var o=document.createElement("div");o.setAttribute("id","cheaper-popover-title-image"),n.append(e.link,o),e.content.append(n),e.popover.append(e.content),t.addEventListener("click",e.displayingPopover),e.dropdown.addEventListener("click",e.removePopover),window.addEventListener("scroll",(function(){e.dropdown.click()})),window.addEventListener("resize",(function(){e.dropdown.click()}))}}))},e.prototype.addingTextDiscount=function(){var e=document.createElement("p");e.setAttribute("id","cheaper-popover-main-info"),e.innerText="Копите бонусы и оплачивайте ими свои покупки.";var t=document.createElement("p");t.setAttribute("id","cheaper-popover-second-info"),t.innerText="1 бонус = ".concat((0,r.stringCountPostfix)(1,i.default.postfix,!1)," скидки."),this.content.append(e,t)},e.prototype.winScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},e}();t.default=d},64294:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.stringCountPostfix=void 0,t.stringCountPostfix=function(e,t,n,o){if(void 0===n&&(n=!1),0===e&&void 0!==o)return o;var r=0,i=e%10,d=e%100;2<=i&&i<=4&&(r=1),(0===i||i>=5&&i<=9||d>=11&&d<=19)&&(r=2);var u=t[Math.min(r,t.length)]||"";return n?u:e+" "+u}},2110:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LOCAL_STORAGE_BEST_PRICE_LINKS=t.LOCAL_STORAGE_IDB_PRODUCT_IDS=t.LOCAL_STORAGE_ORDER_PRODUCTS=t.LOCAL_STORAGE_CURRENCY_NAME=t.SESSION_STORAGE_GIFT_CARD_DATA=t.SESSION_STORAGE_CHECKOUT_PRESET_SHOP_ID=void 0,t.SESSION_STORAGE_CHECKOUT_PRESET_SHOP_ID="SESSION_STORAGE_CHECKOUT_PRESET_SHOP_ID",t.SESSION_STORAGE_GIFT_CARD_DATA="SESSION_STORAGE_GIFT_CARD_DATA",t.LOCAL_STORAGE_CURRENCY_NAME="LOCAL_STORAGE_CURRENCY_NAME",t.LOCAL_STORAGE_ORDER_PRODUCTS="order-products",t.LOCAL_STORAGE_IDB_PRODUCT_IDS="idb-order-products",t.LOCAL_STORAGE_BEST_PRICE_LINKS="best-price-links"},79922:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var o=n(2110),r=n(73363),i=new Map;i.set(r.CurrencyEnum.RUBLE,{sign:"₽",short:"руб",symbol:"р",postfix:["рубль","рубля","рублей"]}),i.set(r.CurrencyEnum.TENGE,{sign:"₸",short:"тңг",symbol:"т",postfix:["теңге","теңге","теңге"]});var d=function(){if("undefined"==typeof window)return{sign:"",short:"",symbol:"",postfix:[]};if(!window.currencyValue){var e=document.querySelector('meta[name="currency"]');null!==e&&(window.currencyValue=e.content),window.currencyValue=window.currencyValue||r.CurrencyEnum.RUBLE,window.localStorage.setItem(o.LOCAL_STORAGE_CURRENCY_NAME,window.currencyValue)}return i.get(window.currencyValue)},u=function(){function e(){}return Object.defineProperty(e,"sign",{get:function(){return d().sign},enumerable:!1,configurable:!0}),Object.defineProperty(e,"symbol",{get:function(){return d().symbol},enumerable:!1,configurable:!0}),Object.defineProperty(e,"short",{get:function(){return d().short},enumerable:!1,configurable:!0}),Object.defineProperty(e,"postfix",{get:function(){return d().postfix},enumerable:!1,configurable:!0}),e}();t.default=u},73363:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CurrencyEnum=void 0,function(e){e.RUBLE="ruble",e.TENGE="tenge"}(t.CurrencyEnum||(t.CurrencyEnum={}))}},t={};(function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports})(13649)})();