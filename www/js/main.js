!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=2)}([function(e,t,i){!function(t){"use strict";var i,n,o=!1;function r(e){if("undefined"!=typeof document&&!o){var t=document.documentElement;n=window.pageYOffset,document.documentElement.scrollHeight>window.innerHeight?t.style.width="calc(100% - "+function(){if(void 0!==i)return i;var e=document.documentElement,t=document.createElement("div");return t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"),e.appendChild(t),i=t.offsetWidth-t.clientWidth,e.removeChild(t),i}()+"px)":t.style.width="100%",t.style.position="fixed",t.style.top=-n+"px",t.style.overflow="hidden",o=!0}}function s(){if("undefined"!=typeof document&&o){var e=document.documentElement;e.style.width="",e.style.position="",e.style.top="",e.style.overflow="",window.scroll(0,n),o=!1}}var c={on:r,off:s,toggle:function(){o?s():r()}};void 0!==e.exports?e.exports=c:t.noScroll=c}(window)},function(e,t,i){"use strict";
/*! npm.im/object-fit-images 3.2.4 */var n="bfred-it:object-fit-images",o=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,r="undefined"==typeof Image?{style:{"object-position":1}}:new Image,s="object-fit"in r.style,c="object-position"in r.style,a="background-size"in r.style,l="string"==typeof r.currentSrc,u=r.getAttribute,d=r.setAttribute,f=!1;function p(e,t,i){var n="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";u.call(e,"src")!==n&&d.call(e,"src",n)}function g(e,t){e.naturalWidth?t(e):setTimeout(g,100,e,t)}function v(e){var t=function(e){for(var t,i=getComputedStyle(e).fontFamily,n={};null!==(t=o.exec(i));)n[t[1]]=t[2];return n}(e),i=e[n];if(t["object-fit"]=t["object-fit"]||"fill",!i.img){if("fill"===t["object-fit"])return;if(!i.skipTest&&s&&!t["object-position"])return}if(!i.img){i.img=new Image(e.width,e.height),i.img.srcset=u.call(e,"data-ofi-srcset")||e.srcset,i.img.src=u.call(e,"data-ofi-src")||e.src,d.call(e,"data-ofi-src",e.src),e.srcset&&d.call(e,"data-ofi-srcset",e.srcset),p(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{!function(e){var t={get:function(t){return e[n].img[t||"src"]},set:function(t,i){return e[n].img[i||"src"]=t,d.call(e,"data-ofi-"+i,t),v(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}(e)}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!l&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(i.img),e.style.backgroundImage='url("'+(i.img.currentSrc||i.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?g(i.img,(function(){i.img.naturalWidth>e.width||i.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"})):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(i.img,(function(t){p(e,t.naturalWidth,t.naturalHeight)}))}function h(e,t){var i=!f&&!e;if(t=t||{},e=e||"img",c&&!t.skipTest||!a)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var o=0;o<e.length;o++)e[o][n]=e[o][n]||{skipTest:t.skipTest},v(e[o]);i&&(document.body.addEventListener("load",(function(e){"IMG"===e.target.tagName&&h(e.target,{skipTest:t.skipTest})}),!0),f=!0,e="img"),t.watchMQ&&window.addEventListener("resize",h.bind(null,e,{skipTest:t.skipTest}))}h.supportsObjectFit=s,h.supportsObjectPosition=c,function(){function e(e,t){return e[n]&&e[n].img&&("src"===t||"srcset"===t)?e[n].img:e}c||(HTMLImageElement.prototype.getAttribute=function(t){return u.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,i){return d.call(e(this,t),t,String(i))})}(),e.exports=h},function(e,t,i){e.exports=i(3)},function(e,t,i){"use strict";i.r(t);var n,o,r,s,c,a,l=i(1),u=i.n(l),d=(n=$(".js-slider-header"),o=$(".js-slider-products"),r=$(".js-slider-reviews"),{updatePagination:function(e,t){for(var i,n=t,o=e-2,r=e+2+1,s=[],c=[],a=1;a<=n;a++)(1==a||a==n||a>=o&&a<r)&&s.push(a);for(var l=0,u=s;l<u.length;l++){var d=u[l];i&&(d-i==2?c.push(i+1):d-i!=1&&c.push("...")),c.push(d),i=d}return c},changeSliderDots:function(e){for(var t=r.find(".slick-dots li a"),i=0;i<t.length;i++){var n=$(t[i]),o=n.parents("li");o.removeClass("hide");var s=n.data("slide-index");-1===e.indexOf(s)&&o.addClass("hide")}},initReviewsSlider:function(){r.on("init",(function(e,t){if(!(t.slideCount<7)){var i=d.updatePagination(0,t.slideCount);d.changeSliderDots(i)}})),r.slick({arrows:!1,slidesToShow:1,slidesToScroll:1,dots:!0,infinite:!1,customPaging:function(e,t){return"<a data-slide-index=".concat(t+1,">").concat(t+1,"</a>")}}),r.on("beforeChange",(function(e,t,i,n){var o=d.updatePagination(n,t.slideCount);d.changeSliderDots(o)}))},initHeaderSlider:function(){n.on("init",(function(e,t,i){n.addClass("init")})),n.slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:"linear",arrows:!1,autoplay:!0,autoplaySpeed:5e3,initialSlide:0,responsive:[{breakpoint:480,settings:{adaptiveHeight:!0}}]})},initProductSlider:function(){$(".js-slider-product-for").not(".slick-initialized").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".js-slider-product-nav"}),$(".js-slider-product-nav").not(".slick-initialized").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".js-slider-product-for",dots:!1,focusOnSelect:!0})},initProductsSlider:function(){o.not(".slick-initialized").slick({slidesToShow:4,slidesToScroll:4,variableWidth:!0,dots:!1,prevArrow:'<button class="prev"><i class="fico fico-arrowSlider"></i></button>',nextArrow:'<button class="next"><i class="fico fico-arrowSlider"></i></button>',responsive:[{breakpoint:1441,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1250,settings:{slidesToShow:3,slidesToScroll:1}}]})},destroyProductsSlider:function(){o.filter(".slick-initialized").slick("unslick")},init:function(){d.initHeaderSlider(),d.initReviewsSlider()}}),f=d,p=function(){var e=$(".js-btn-accordeon"),t=$(".js-info-accordeon"),i=$(".js-tab"),n=$(".js-product-all"),o=$(".js-product-show"),r=$(".js-list-prod"),s=$(".js-catalog-count"),c=$(".js-product"),a=$(".js-btn-catalog"),l=$(".js-review"),u=$(".js-reviews-all"),d=$(".js-reviews-show"),f=$(".js-btn-reviews");function g(e){var t=$('.js-list-prod[data-target="'.concat(e,'"]'));r.removeClass("active"),t.addClass("active")}return{openFaqContent:function(){e.on("click",(function(i){i.preventDefault();var n=$(this),o=n.parents(".js-accordeon");n.hasClass("active")||(o.find(t).slideUp(700),o.find(e).removeClass("active")),n.toggleClass("active"),n.next(t).slideToggle()}))},highlightingActiveTab:function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=i.exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("id");if(e){var t=$("#".concat(e));i.removeClass("active"),t.addClass("active"),g(e)}},showListProducts:function(){i.click((function(e){e.preventDefault();var t=$(this),n=t.prop("id");i.removeClass("active"),t.addClass("active"),g(n),p.calculateProducts()}))},showCatalog:function(){a.click((function(e){e.preventDefault();var t=$(this);t.parent(r).find(".js-catalog-hide").addClass("show"),p.calculateProducts(),t.hide()}))},calculateProducts:function(){var e=s.parent(".js-list-prod.active"),t=e.find(c).length,i=e.find(".js-catalog-show").find(c).length;!function(e,t){e==t?a.hide():a.show()}(i,t),e.find(".js-catalog-hide").hasClass("show")?(e.find(o).html(t),e.find(a).hide()):(e.find(o).html(i),e.find(n).html(t))},calculateReviews:function(){d.html(l.length);var e=$(".js-reviews-show-list").find(l).length;$(".js-reviews-hide-list").hasClass("show")?(d.html(l.length),a.hide()):(d.html(e),u.html(l.length))},showReviews:function(){f.click((function(e){e.preventDefault();var t=$(this);$(".js-reviews-hide-list").addClass("show"),p.calculateReviews(),t.hide()}))},init:function(){p.openFaqContent(),p.highlightingActiveTab(),p.showListProducts(),p.showCatalog(),p.calculateProducts(),p.calculateReviews(),p.showReviews()}}}(),g=p,v=i(0),h=i.n(v),m=(s=$(".js-popup"),c=$(".js-show-popup"),a=$(".js-overlay"),{initPopUp:function(){c.click((function(e){e.preventDefault();var t=$(this),i=$(t.data("target"));t.toggleClass("active"),i.toggleClass("active"),a.addClass("active"),$(".menu-mobile").removeClass("menu-mobile--active"),$(".js-burger").removeClass("burger--active"),h.a.on()}))},closePopup:function(){$(".js-close").click((function(e){e.preventDefault(),s.removeClass("active"),c.removeClass("active"),a.removeClass("active"),h.a.off()}))},init:function(){m.initPopUp(),m.closePopup()}}),w=m,b=$(document),y=$(window),j=function(){var e=$(".js-burger"),t=$(".js-scroll"),i=$(".js-overlay"),n=$(".js-fixed-menu"),o=n.height();function r(e){var t=e.offset().top;$("html, body").animate({scrollTop:t-15},800)}return{showFixedMenu:function(){b.scroll((function(){var e=b.scrollTop(),t="none",i="none";e<o?((e/o).toFixed(2),n.removeClass("menu--fixed")):(1,t="0px 0px 20px rgba(52, 49, 89, 0.1)",i="white",n.addClass("menu--fixed")),n.css({boxShadow:t,background:i})}))},showMobileMenu:function(){e.click((function(t){t.preventDefault(),$($(this).data("target")).toggleClass("menu-mobile--active"),e.toggleClass("burger--active"),i.toggleClass("active"),h.a.toggle()}))},scrollToTarget:function(){t.click((function(t){t.preventDefault(),h.a.off();var n=$(this),o=n.attr("href"),s=$(o);n.data("target")&&r($(n.data("target")));s.length&&r(s),$(".menu-mobile").removeClass("menu-mobile--active"),e.removeClass("burger--active"),i.removeClass("active")}))},init:function(){j.showMobileMenu(),j.showFixedMenu()}}}(),S=j;function C(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function P(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?C(Object(i),!0).forEach((function(t){T(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function T(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var k=function(){var e={WIN_WIDTH:0},t={afterResize:!1,onInit:!1};function i(){return{WIN_WIDTH:y.width()}}function n(){var n,o,r,s;y.resize((n=function(){e=i(),t.afterResize&&t.afterResize(e)},o=100,function(){var e=this,t=arguments,i=function(){s=null,r||n.apply(e,t)},c=r&&!s;clearTimeout(s),s=setTimeout(i,o),c&&n.apply(e,t)}))}return{layoutHandler:function(o){o&&(t=P(P({},t),o)),e=i(),t.onInit&&t.onInit(e),n()}}}();$((function(){for(var e=(new Date).getFullYear(),t=document.getElementsByClassName("year"),i=0;i<t.length;i++){t[i].innerHTML=e}f.init(),g.init(),w.init(),S.init(),u()(),k.layoutHandler({onInit:function(e){f.initProductSlider(),e.WIN_WIDTH>=480?f.initProductsSlider():e.WIN_WIDTH<=479&&f.destroyProductsSlider()},afterResize:function(e){f.initProductSlider(),e.WIN_WIDTH>=480?f.initProductsSlider():e.WIN_WIDTH<=479&&f.destroyProductsSlider()}})}))}]);