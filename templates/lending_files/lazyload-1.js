var lzld="0408_1700";function t_lazyload__init(){t_lazyload__detectwebp();var t=document.querySelector("#allrecords");t&&"yes"===t.getAttribute("data-tilda-imgoptimoff")?window.lazy_imgoptimoff="yes":window.lazy_imgoptimoff="";for(var e=document.querySelectorAll(".t156 .t-img"),i=0;i<e.length;i++)e[i].setAttribute("data-lazy-rule","skip");t=document.querySelectorAll(".t492,.t552,.t251,.t603,.t660,.t661,.t662,.t680,.t827,.t909,.t218,.t740,.t132,.t694,.t762,.t786,.t546");Array.prototype.forEach.call(t,function(t){t=t.querySelectorAll(".t-bgimg");Array.prototype.forEach.call(t,function(t){t.setAttribute("data-lazy-rule","comm:resize,round:100")})}),setTimeout(function(){lazyload_cover=new LazyLoad({elements_selector:".t-cover__carrier",show_while_loading:!1,data_src:"content-cover-bg",placeholder:"",threshold:700})},100),setTimeout(function(){var t,e;lazyload_img=new LazyLoad({elements_selector:".t-img",threshold:800}),lazyload_bgimg=new LazyLoad({elements_selector:".t-bgimg",show_while_loading:!1,placeholder:"",threshold:800}),lazyload_iframe=new LazyLoad({elements_selector:".t-iframe"}),window.jQuery&&$(document).bind("slide.bs.carousel",function(){setTimeout(function(){t_lazyload_update()},500)}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(document.body.classList||((t=document.createElement("div")).classList.add("t-mbfix"),document.body.appendChild(t),e=document.querySelector(".t-mbfix"),setTimeout(function(){e.classList.add("t-mbfix_hide")},50),setTimeout(function(){null!==e.parentNode&&e.parentNode.removeChild(e)},1e3)))},500),window.addEventListener("resize",function(){clearTimeout(window.t_lazyload_resize_timerid),window.t_lazyload_resize_timerid=setTimeout(t_lazyload__onWindowResize,1e3)}),setTimeout(function(){"object"==typeof performance&&"object"==typeof performance.timing&&(window.t_lazyload_domloaded=+window.performance.timing.domContentLoadedEventEnd-+window.performance.timing.navigationStart)},0)}function t_lazyload_update(){"undefined"!=typeof lazyload_cover&&lazyload_cover.update(),"undefined"!=typeof lazyload_img&&lazyload_img.update(),"undefined"!=typeof lazyload_bgimg&&lazyload_bgimg.update(),"undefined"!=typeof lazyload_iframe&&lazyload_iframe.update()}function t_lazyload__onWindowResize(){var t;t_lazyload_update(),"yes"!==window.lazy_imgoptimoff&&(t=document.querySelectorAll(".t-cover__carrier, .t-bgimg, .t-img"),Array.prototype.forEach.call(t,function(t){window.t_lazyload_updateResize_elem(t)}))}function t_lazyload__detectwebp(){var t=new Image;t.onload=t.onerror=function(){2!=t.height||(window.lazy_webp="y")},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}function t_lazyload__ping(e){var i="https://"+e+".tildacdn.com";if("static"==e){var t=document.currentScript;if("object"==typeof t&&"string"==typeof t.src&&0===t.src.indexOf(i))return;if(null===document.head.querySelector('script[src^="'+i+'"]'))return}t=new Image;t.src=i+"/pixel.png",t.onload=function(){window["lazy_ok_"+e]="y"},setTimeout(function(){var t;"y"!==window["lazy_ok_"+e]&&(window["lazy_err_"+e]="y",console.log(e+" ping error"),t=document.querySelectorAll(".loading"),Array.prototype.forEach.call(t,function(t){var e="",e=t.lazy_loading_src;"string"==typeof str&&0===e.indexOf(i)&&(t.classList.remove("loading"),t.wasProcessed=!1)}),t_lazyload_update())},1e4)}!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.LazyLoad=e()}(this,function(){var e,o,a,i,g,h,n=!1;function l(t,e,i){var n;o?t.addEventListener(e,i):a&&(t.attachEvent("on"+e,(n=t,function(){i.call(n,window.event)})),t=null)}function r(t,e,i){o?t.removeEventListener(e,i):a&&t.detachEvent("on"+e,i)}function c(){return(new Date).getTime()}function d(t,e){return function(){return t.apply(e,arguments)}}function s(t,e){i?t.classList.add(e):t.className+=(t.className?" ":"")+e}function y(t,e){i?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}function w(t,e){return i?t.classList.contains(e):new RegExp(" "+e+" ").test(" "+t.className+" ")}function b(t,e){for(var i=t.parentNode;i&&i!==document;){if(!0===w(i,e))return i;i=i.parentNode}return null}function v(t){return null!=t}function u(t){t=t.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}}function x(t,e,i){var n,o,a;function l(){return window.innerWidth||n.documentElement.clientWidth||document.body.clientWidth}function r(t){return t.getBoundingClientRect().top+o-n.documentElement.clientTop}function c(t){return t.getBoundingClientRect().left+a-n.documentElement.clientLeft}return!0!==window.flag_performance_pass3000&&"object"==typeof performance&&performance.now()<3e3?i=300:window.flag_performance_pass3000=!0,n=t.ownerDocument,o=window.pageYOffset||n.body.scrollTop,a=window.pageXOffset||n.body.scrollLeft,"fixed"===t.getAttribute("data-content-cover-parallax")&&t.closest&&t.closest(".t-cover__container")&&(t=t.closest(".t-cover__container")),!((e===window?(window.innerHeight||n.documentElement.clientHeight||document.body.clientHeight)+o:r(e)+e.offsetHeight)<=r(t)-i||(e===window?o:r(e))>=r(t)+1200+t.offsetHeight||(e===window?l()+window.pageXOffset:c(e)+l())<=c(t)-i||(e===window?a:c(e))>=c(t)+i+t.offsetWidth)}function p(t,e,i,n){var o=e.getAttribute("data-"+n);if(o){var a=e.clientWidth,l=e.clientHeight;!w(e,"t-slds__bgimg")&&!w(e,"t-slds__img")||w(e,"t827__image")||(!1===v(d=b(e,"t-slds__container"))&&(d=b(e,"t-slds__thumbsbullet")),v(d)&&(a=d.clientWidth,l=d.clientHeight)),w(e,"tn-atom")&&w(e,"t-bgimg")&&v(d=b(e,"tn-atom__scale-wrapper"))&&(a=(r=A("round",(u=d.getBoundingClientRect()).width,u.height,10))[0],l=r[1]);var r,c,n="",d="",s="",u="",x=1,p=!0,f=!1;if("yes"==window.lazy_imgoptimoff&&(p=!1),"y"!==window.lazy_err_thumb&&"y"!==window.lazy_err_static||(p=!1),"IMG"===e.tagName?s="resize":"undefined"!=typeof getComputedStyle?("50%"==(n=(r=getComputedStyle(e).backgroundPosition.split(" "))[0])?n="center":"0%"==n?n="left":"100%"==n&&(n="right"),"50%"==(d=r[1])?d="center":"0%"==d?d="top":"100%"==d&&(d="bottom"),s="contain"==getComputedStyle(e)["background-size"]?"contain":"cover","fixed"==getComputedStyle(e)["background-attachment"]&&(f=!0)):f=!0,u=e.getAttribute("data-lazy-rule"))for(var _=u.split(","),m=0;m<_.length;m++)-1<_[m].indexOf("round:")&&(x=+_[m].split(":")[1]),-1<_[m].indexOf("comm:")&&"resize"!=(s=_[m].split(":")[1])&&"cover"!=s&&"contain"!=s&&(p=!1),-1<_[m].indexOf("skip")&&(f=!0),-1<_[m].indexOf("optimoff")&&(p=!1);1<x&&(a=(r=A(s,a,l,x))[0],l=r[1]),"cover"==s&&0<a&&0<l&&a<=1e3&&(a===5*Math.ceil(a/5)&&l===5*Math.ceil(l/5)||-1<g.indexOf(a+"x"+l)||-1<h.indexOf(a+"x"+l)||w(e,"tn-atom")||w(e,"tn-atom__img")||(w(e,"t-cover__carrier")||(s="resize"),a=(r=A(s,a,l,100))[0],l=r[1])),"resize"==s&&a<30&&(f=!0),!0===p&&(o=!0===f||1e3<a||1e3<l||0==a||"IMG"!=e.tagName&&0==l?z(o):function(t,e,i,n,o,a,l){if("undefined"==i||null==i)return i;if(0<i.indexOf(".svg")||0<i.indexOf(".gif")||0<i.indexOf(".ico")||-1===i.indexOf("static.tildacdn.")||0<i.indexOf("-/empty/")||0<i.indexOf("-/resizeb/"))return i;if(-1<i.indexOf("/-/"))return i;if(0==n&&0==o)return i;if("y"==window.lazy_err_thumb)return i;if(-1<i.indexOf("lib"))return i;if("IMG"!=t&&"DIV"!=t&&"TD"!=t&&"A"!=t)return i;1<window.devicePixelRatio&&(0<n&&(n=parseInt(2*n)),0<o&&(o=parseInt(2*o)));if(1e3<n||1800<o)return r=z(i);if("resize"==e){(c=i.split("/")).splice(i.split("/").length-1,0,"-/resize/"+n+"x"+("DIV"==t&&0<o?o:"")+"/"+("y"==window.lazy_webp?"-/format/webp":""));var r=c.join("/").replace("/static.tildacdn.com","/thumb.tildacdn.com").replace("/static.tildacdn.info","/thumb.tildacdn.com")}else{if(!(0<n&&0<o))return i;var c;"left"==a||"right"==a||(a="center"),"top"==l||"bottom"==l||(l="center"),(c=i.split("/")).splice(i.split("/").length-1,0,"-/"+e+"/"+n+"x"+o+"/"+a+"/"+l+"/"+("y"==window.lazy_webp?"-/format/webp":""));r=c.join("/").replace("/static.tildacdn.com","/thumb.tildacdn.com").replace("/static.tildacdn.info","/thumb.tildacdn.com")}return r}(e.tagName,s,o,a,l,n,d)),"y"===window.lazy_err_static&&0===o.indexOf("https://static.tildacdn.com/")&&(o=o.replace("https://static.tildacdn.com/","https://static3.tildacdn.com/")),o&&("IMG"===t.tagName||"IFRAME"===t.tagName?t.setAttribute("src",o):"OBJECT"===t.tagName?t.setAttribute("data",o):(-1!==t.style.backgroundImage.indexOf("-gradient(")&&(c=t.style.backgroundImage.split("), ")[1]),c?t.style.backgroundImage="url("+o+"), "+c:(function(t,e){var i=t.getAttribute("data-content-cover-id");if(!i)return;var n=e.split(".");n=n[n.length-1];t='url("'+e+'")',e=document.getElementById("recorddiv"+i),i=e.style.backgroundImage;"svg"!==n&&"png"!==n||i!==t||(e.style.backgroundImage="")}(t,o),t.style.backgroundImage="url("+o+")")),e.lazy_loading_src=o)}else y(e,"loading")}function A(t,e,i,n){var o;return"cover"==t&&0<e&&0<i?(o=e/i)<=(t=1)?(o<=.8&&(t=.8),o<=.751&&(t=.75),o<=.667&&(t=.667),o<=.563&&(t=.562),o<=.501&&(t=.5),i=Math.ceil(i/n)*n,e=Math.ceil(i*t),e=10*Math.ceil(e/10)):(1.25<=o&&(t=1.25),1.332<=o&&(t=1.333),1.5<=o&&(t=1.5),1.777<=o&&(t=1.777),2<=o&&(t=2),e=Math.ceil(e/n)*n,i=Math.ceil(e/t),i=10*Math.ceil(i/10)):(0<e&&(e=Math.ceil(e/n)*n),0<i&&(i=Math.ceil(i/n)*n)),[e,i]}function z(t){if("undefined"==t||null==t)return t;if(0<t.indexOf(".svg")||0<t.indexOf(".gif")||0<t.indexOf(".ico")||-1===t.indexOf("static.tildacdn.")||0<t.indexOf("-/empty/")||0<t.indexOf("-/resizeb/"))return t;if(-1<t.indexOf("/-/"))return t;if(-1<t.indexOf("lib"))return t;if("y"!==window.lazy_webp)return t;if("y"===window.lazy_err_thumb)return t;var e=t.split("/");return e.splice(t.split("/").length-1,0,"-/format/webp"),e.join("/").replace("/static.tildacdn.com","/thumb.tildacdn.com").replace("/static.tildacdn.info","/thumb.tildacdn.com")}function f(t,e,i){if("string"==typeof e&&null!=e&&""!=e){if(console.log("lazy loading err"),0===e.indexOf("https://static.tildacdn.com/"))return window.lazy_err_static="y",void _(t,e.replace("https://static.tildacdn.com/","https://static3.tildacdn.com/"));if(-1!==e.indexOf("https://thumb.tildacdn.com/")&&-1!==e.indexOf("/-/")){window.lazy_err_thumb="y";var n=e.split("/"),o="",a="";if(3<n.length)for(var l=0;l<n.length;l++)""!==n[l]&&("til"==n[l].substring(0,3)&&36==n[l].length&&4==(n[l].match(/-/g)||[]).length&&(o=n[l]),l==n.length-1&&(a=n[l]));""!==o&&""!==a&&_(t,"https://static3.tildacdn.com/"+o+"/"+a),"function"!=typeof t_errors__sendCDNErrors&&((t=document.createElement("script")).src="https://static.tildacdn.com/js/tilda-errors-1.0.min.js",t.type="text/javascript",t.async=!0,document.body.appendChild(t));i=1<i?c()-i:"";"object"!=typeof window.t_cdnerrors&&(window.t_cdnerrors=[]),window.t_cdnerrors.push({url:e,time:i,debug:{domloaded:window.t_lazyload_domloaded}})}}}function _(t,e){console.log("try reload: "+e),"IMG"===t.tagName?e&&t.setAttribute("src",e):e&&(t.style.backgroundImage="url("+e+")")}function t(t){n||(e={elements_selector:"img",container:window,threshold:300,throttle:50,data_src:"original",data_srcset:"original-set",class_loading:"loading",class_loaded:"loaded",skip_invisible:!0,show_while_loading:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null,placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},o=!!window.addEventListener,a=!!window.attachEvent,i=!!document.body.classList,n=!0,g=["200x151","640x712","320x356","670x744","335x372","300x225","500x375","400x301","748x832","374x416","670x502","335x251","360x234","560x622","280x311","640x416"],h=["353x245","155x151","158x164","372x495","280x272","117x117","291x280","280x269","335x241","283x283","150x156","353x233","414x730","372x362","275x206","290x322","248x207","177x136","173x173","280x308","195x214","248x191","155x196","163x203","320x444","158x162","176x203","412x700","360x88","360x616","167x167","130x144","280x233","560x314","320x299","372x275","320x178","372x242","360x352","353x294","260x182","372x310","335x344","374x432","414x500","374x360","220x338","150x146","335x239","176x176","320x302","374x260","360x568","191x221","192x192","372x558","335x188","320x358","335x258","374x575","26x26","353x360","360x206","335x248","335x322","167x256","560x364","155x172","163x216","163x181","360x257","374x561","374x243","220x212","177x148","291x324","167x160","375x749","335x387","172x172","260x302","414x700","220x254","177x172","374x519","176x169","320x352","335x233","150x203","360x207","158x121","360x396","158x131","150x98","220x169","182x202","320x179","372x413","181x226","353x200","158x153","375x628","176x271","374x364","320x492","374x247","414x833","353x393","335x218","560x399","412x264","293x164","56x56","177x204","248x382","181x181","118x118","260x346","374x497","260x202","393x251","158x158","372x200","373x414","320x229","177x177","312x175","374x312","84x84","320x329","177x194","353x350","335x503","335x446","335x326","374x200","158x182","320x237","335x221","176x196","150x229","320x224","248x276","360x299","260x289","196x216","335x279","177x272","320x426","260x172","155x194","320x369","372x350","360x302","360x402","169x186","158x242","173x199","167x185","360x238","220x123","320x308","414x265","374x350","300x333","177x170","320x222","320x311","260x169","150x173","320x246","353x265","192x222","158x151","372x414","150x144","760x502","314x176","320x208","182x182","320x211","163x163","372x279","360x202","360x252","260x252","260x286","353x392","160x104","374x281","353x353","150x231","320x267","372x372","177x197","275x154","158x175","374x374","150x167","260x146"]),this._settings=function(t,e){var i,n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,t),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._handleScrollFn=d(this.handleScroll,this),l(window,"resize",this._handleScrollFn),this.update(),this.loadAnimatedImages()}return t.prototype._showOnLoad=function(e){var i,n,o=this._settings;!e.getAttribute("src")&&o.placeholder&&e.setAttribute("src",o.placeholder),l(i=document.createElement("img"),"load",function t(){null!==o&&(o.callback_load&&o.callback_load(e),p(e,e,o.data_srcset,o.data_src),o.callback_set&&o.callback_set(e),y(e,o.class_loading),s(e,o.class_loaded),r(i,"load",t))}),l(i,"error",function(t){y(e,o.class_loading),o.callback_error&&o.callback_error(e),void 0!==t.path?f(e,t.path[0].currentSrc,n):void 0!==t.target&&f(e,t.target.currentSrc,n)}),s(e,o.class_loading),n=c(),p(i,e,o.data_srcset,o.data_src)},t.prototype._showOnAppear=function(e){var i,n=this._settings;function o(){null!==n&&(n.callback_load&&n.callback_load(e),y(e,n.class_loading),s(e,n.class_loaded),r(e,"load",o))}"IMG"!==e.tagName&&"IFRAME"!==e.tagName||(l(e,"load",o),l(e,"error",function(t){r(e,"load",o),y(e,n.class_loading),n.callback_error&&n.callback_error(e),void 0!==t.path?f(e,t.path[0].currentSrc,i):void 0!==t.target&&f(e,t.target.currentSrc,i)}),s(e,n.class_loading)),i=c(),p(e,e,n.data_srcset,n.data_src),n.callback_set&&n.callback_set(e)},t.prototype._loopThroughElements=function(){for(var t,e=this._settings,i=this._elements,n=i?i.length:0,o=[],a=0;a<n;a++)t=i[a],e.skip_invisible&&t.isSkipByPosition&&t.isNotUnderScreenRange||x(t,e.container,e.threshold)&&(e.show_while_loading?this._showOnAppear(t):this._showOnLoad(t),o.push(a),t.wasProcessed=!0);for(;0<o.length;)i.splice(o.pop(),1),e.callback_processed&&e.callback_processed(i.length);0===n&&this._stopScrollHandler()},t.prototype._purgeElements=function(){for(var t=this._elements,e=t.length,i=[],n=0;n<e;n++)t[n].wasProcessed&&i.push(n);for(;0<i.length;)t.splice(i.pop(),1)},t.prototype._startScrollHandler=function(){this._isHandlingScroll||(this._isHandlingScroll=!0,l(this._settings.container,"scroll",this._handleScrollFn))},t.prototype._stopScrollHandler=function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,r(this._settings.container,"scroll",this._handleScrollFn))},t.prototype.loadAnimatedImages=function(){var t,e,i,n,o,a,l=this._settings,r=this._elements,c=r?r.length:0,d=[];function s(t,e){var i,n,i=(i=t,"trigger"===(n=e)?(e=i.getAttribute("data-animate-sbs-trgels"))&&(o=document.querySelector('[data-elem-id="'+e+'"]')):"viewport"===n&&(o=b(i,"t396")),v(o)?u(o):null);if(i){var o=u(t),t=Math.abs(i.top-o.top),o=Math.abs(i.left-o.left);return t>l.threshold||o>l.threshold}}for(t=0;t<c;t++)(w(a=r[t],"tn-atom__img")||w(a,"tn-atom"))&&(i=(e=b(a,"tn-elem")).getAttribute("data-animate-sbs-opts"),"intoview"!==(n=e.getAttribute("data-animate-sbs-event"))&&"blockintoview"!==n||(o="viewport"),e.getAttribute("data-animate-sbs-trgels")||(o="trigger"),l.skip_invisible&&null===a.offsetParent||!i||s(e,o)&&(l.show_while_loading?this._showOnAppear(a):this._showOnLoad(a),d.push(t),a.wasProcessed=!0));for(;0<d.length;)r.splice(d.pop(),1),l.callback_processed&&l.callback_processed(r.length)},t.prototype.handleScroll=function(){var t,e,i;this._settings&&(e=c(),0!==(i=this._settings.throttle)?(t=i-(e-this._previousLoopTime))<=0||i<t?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=e,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(d(function(){this._previousLoopTime=c(),this._loopTimeout=null,this._loopThroughElements()},this),t)):this._loopThroughElements())},t.prototype.update=function(){this._elements=function(e){var i;try{i=Array.prototype.slice.call(e)}catch(t){for(var n=[],o=e.length,a=0;a<o;a++)n.push(e[a]);i=n}return i.forEach(function(t){t.isSkipByPosition=null===t.offsetParent&&!1===v(b(t,"t396__carrier-wrapper"))&&"fixed"!==t.getAttribute("data-content-cover-parallax");var e=b(t,"t-rec");v(e)&&(t.isNotUnderScreenRange=!1===e.hasAttribute("data-screen-max")&&!1===e.hasAttribute("data-screen-min"))}),i}(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},t.prototype.destroy=function(){r(window,"resize",this._handleScrollFn),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null},t}),window.lazy="y","loading"!=document.readyState?t_lazyload__init():document.addEventListener("DOMContentLoaded",t_lazyload__init),window.t_lazyload_updateResize_elem=function(t){if(window.jQuery&&t instanceof jQuery){if(0==t.length)return;t=t.get(0)}var e,i,n,o,a,l,r;null!=t&&(l="IMG"==(e=t.tagName)?(i=t.getAttribute("src"),"-/resize/"):"undefined"!=typeof getComputedStyle?(i=getComputedStyle(t)["background-image"].replace("url(","").replace(")","").replace(/"/gi,""),"contain"==getComputedStyle(t)["background-size"]?"-/contain/":"-/cover/"):"-/cover/",null==i||-1===i.indexOf(l)||0<i.indexOf(".svg")||0<i.indexOf(".gif")||0<i.indexOf(".ico")||-1===i.indexOf("thumb.tildacdn.com")||0<i.indexOf("-/empty/")&&0<i.indexOf("-/resizeb/")||(n=i.indexOf(l)+l.length,r=i.indexOf("/",n),0<n&&0<r&&(o=i.slice(n,r).split("x"),a=t.clientWidth,l=t.clientHeight,0<a&&0<l&&(0<o[0]||0<o[1])&&(0<o[0]&&a>o[0]||0<o[1]&&l>o[1])&&(0<o[0]&&100<a-o[0]||0<o[1]&&100<l-o[1])&&(r=i.slice(0,n)+(0<o[0]?a:"")+"x"+(0<o[1]?l:"")+i.substring(r),"IMG"==e?t.setAttribute("src",r):t.style.backgroundImage="url('"+r+"')"))))};