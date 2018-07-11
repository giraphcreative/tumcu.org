!function(i){"use strict";i.fn.fitVids=function(e){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(a.childNodes[1])}return e&&i.extend(n,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&e.push(n.customSelector);var a=".fitvidsignore";n.ignore&&(a=a+", "+n.ignore);var t=i(this).find(e.join(","));(t=(t=t.not("object object")).not(a)).each(function(){var e=i(this);if(!(0<e.parents(a).length||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var t=("object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));if(!e.attr("name")){var n="fitvid"+i.fn.fitVids._count;e.attr("name",n),i.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*t+"%"),e.removeAttr("height").removeAttr("width")}})})},i.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(window.jQuery||window.Zepto)}(function(u){var d,a,p,i,m,t,c="Close",l="BeforeClose",f="MarkupParse",h="Open",r="Change",n="mfp",g="."+n,v="mfp-ready",o="mfp-removing",s="mfp-prevent-close",e=function(){},y=!!window.jQuery,b=u(window),w=function(e,t){d.ev.on(n+e+g,t)},_=function(e,t,n,a){var i=document.createElement("div");return i.className="mfp-"+e,n&&(i.innerHTML=n),a?t&&t.appendChild(i):(i=u(i),t&&i.appendTo(t)),i},C=function(e,t){d.ev.triggerHandler(n+e,t),d.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),d.st.callbacks[e]&&d.st.callbacks[e].apply(d,u.isArray(t)?t:[t]))},x=function(e){return e===t&&d.currTemplate.closeBtn||(d.currTemplate.closeBtn=u(d.st.closeMarkup.replace("%title%",d.st.tClose)),t=e),d.currTemplate.closeBtn},k=function(){u.magnificPopup.instance||((d=new e).init(),u.magnificPopup.instance=d)};e.prototype={constructor:e,init:function(){var e=navigator.appVersion;d.isLowIE=d.isIE8=document.all&&!document.addEventListener,d.isAndroid=/android/gi.test(e),d.isIOS=/iphone|ipad|ipod/gi.test(e),d.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),d.probablyMobile=d.isAndroid||d.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),p=u(document),d.popupsCache={}},open:function(e){var t;if(!1===e.isObj){d.items=e.items.toArray(),d.index=0;var n,a=e.items;for(t=0;t<a.length;t++)if((n=a[t]).parsed&&(n=n.el[0]),n===e.el[0]){d.index=t;break}}else d.items=u.isArray(e.items)?e.items:[e.items],d.index=e.index||0;if(!d.isOpen){d.types=[],m="",e.mainEl&&e.mainEl.length?d.ev=e.mainEl.eq(0):d.ev=p,e.key?(d.popupsCache[e.key]||(d.popupsCache[e.key]={}),d.currTemplate=d.popupsCache[e.key]):d.currTemplate={},d.st=u.extend(!0,{},u.magnificPopup.defaults,e),d.fixedContentPos="auto"===d.st.fixedContentPos?!d.probablyMobile:d.st.fixedContentPos,d.st.modal&&(d.st.closeOnContentClick=!1,d.st.closeOnBgClick=!1,d.st.showCloseBtn=!1,d.st.enableEscapeKey=!1),d.bgOverlay||(d.bgOverlay=_("bg").on("click"+g,function(){d.close()}),d.wrap=_("wrap").attr("tabindex",-1).on("click"+g,function(e){d._checkIfClose(e.target)&&d.close()}),d.container=_("container",d.wrap)),d.contentContainer=_("content"),d.st.preloader&&(d.preloader=_("preloader",d.container,d.st.tLoading));var i=u.magnificPopup.modules;for(t=0;t<i.length;t++){var o=i[t];o=o.charAt(0).toUpperCase()+o.slice(1),d["init"+o].call(d)}C("BeforeOpen"),d.st.showCloseBtn&&(d.st.closeBtnInside?(w(f,function(e,t,n,a){n.close_replaceWith=x(a.type)}),m+=" mfp-close-btn-in"):d.wrap.append(x())),d.st.alignTop&&(m+=" mfp-align-top"),d.fixedContentPos?d.wrap.css({overflow:d.st.overflowY,overflowX:"hidden",overflowY:d.st.overflowY}):d.wrap.css({top:b.scrollTop(),position:"absolute"}),(!1===d.st.fixedBgPos||"auto"===d.st.fixedBgPos&&!d.fixedContentPos)&&d.bgOverlay.css({height:p.height(),position:"absolute"}),d.st.enableEscapeKey&&p.on("keyup"+g,function(e){27===e.keyCode&&d.close()}),b.on("resize"+g,function(){d.updateSize()}),d.st.closeOnContentClick||(m+=" mfp-auto-cursor"),m&&d.wrap.addClass(m);var r=d.wH=b.height(),s={};if(d.fixedContentPos&&d._hasScrollBar(r)){var c=d._getScrollbarSize();c&&(s.marginRight=c)}d.fixedContentPos&&(d.isIE7?u("body, html").css("overflow","hidden"):s.overflow="hidden");var l=d.st.mainClass;return d.isIE7&&(l+=" mfp-ie7"),l&&d._addClassToMFP(l),d.updateItemHTML(),C("BuildControls"),u("html").css(s),d.bgOverlay.add(d.wrap).prependTo(d.st.prependTo||u(document.body)),d._lastFocusedEl=document.activeElement,setTimeout(function(){d.content?(d._addClassToMFP(v),d._setFocus()):d.bgOverlay.addClass(v),p.on("focusin"+g,d._onFocusIn)},16),d.isOpen=!0,d.updateSize(r),C(h),e}d.updateItemHTML()},close:function(){d.isOpen&&(C(l),d.isOpen=!1,d.st.removalDelay&&!d.isLowIE&&d.supportsTransition?(d._addClassToMFP(o),setTimeout(function(){d._close()},d.st.removalDelay)):d._close())},_close:function(){C(c);var e=o+" "+v+" ";if(d.bgOverlay.detach(),d.wrap.detach(),d.container.empty(),d.st.mainClass&&(e+=d.st.mainClass+" "),d._removeClassFromMFP(e),d.fixedContentPos){var t={marginRight:""};d.isIE7?u("body, html").css("overflow",""):t.overflow="",u("html").css(t)}p.off("keyup.mfp focusin"+g),d.ev.off(g),d.wrap.attr("class","mfp-wrap").removeAttr("style"),d.bgOverlay.attr("class","mfp-bg"),d.container.attr("class","mfp-container"),!d.st.showCloseBtn||d.st.closeBtnInside&&!0!==d.currTemplate[d.currItem.type]||d.currTemplate.closeBtn&&d.currTemplate.closeBtn.detach(),d.st.autoFocusLast&&d._lastFocusedEl&&u(d._lastFocusedEl).focus(),d.currItem=null,d.content=null,d.currTemplate=null,d.prevHeight=0,C("AfterClose")},updateSize:function(e){if(d.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;d.wrap.css("height",n),d.wH=n}else d.wH=e||b.height();d.fixedContentPos||d.wrap.css("height",d.wH),C("Resize")},updateItemHTML:function(){var e=d.items[d.index];d.contentContainer.detach(),d.content&&d.content.detach(),e.parsed||(e=d.parseEl(d.index));var t=e.type;if(C("BeforeChange",[d.currItem?d.currItem.type:"",t]),d.currItem=e,!d.currTemplate[t]){var n=!!d.st[t]&&d.st[t].markup;C("FirstMarkupParse",n),d.currTemplate[t]=!n||u(n)}i&&i!==e.type&&d.container.removeClass("mfp-"+i+"-holder");var a=d["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,d.currTemplate[t]);d.appendContent(a,t),e.preloaded=!0,C(r,e),i=e.type,d.container.prepend(d.contentContainer),C("AfterChange")},appendContent:function(e,t){(d.content=e)?d.st.showCloseBtn&&d.st.closeBtnInside&&!0===d.currTemplate[t]?d.content.find(".mfp-close").length||d.content.append(x()):d.content=e:d.content="",C("BeforeAppend"),d.container.addClass("mfp-"+t+"-holder"),d.contentContainer.append(d.content)},parseEl:function(e){var t,n=d.items[e];if(n.tagName?n={el:u(n)}:(t=n.type,n={data:n,src:n.src}),n.el){for(var a=d.types,i=0;i<a.length;i++)if(n.el.hasClass("mfp-"+a[i])){t=a[i];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=t||d.st.type||"inline",n.index=e,n.parsed=!0,d.items[e]=n,C("ElementParse",n),d.items[e]},addGroup:function(t,n){var e=function(e){e.mfpEl=this,d._openClick(e,t,n)};n||(n={});var a="click.magnificPopup";n.mainEl=t,n.items?(n.isObj=!0,t.off(a).on(a,e)):(n.isObj=!1,n.delegate?t.off(a).on(a,n.delegate,e):(n.items=t).off(a).on(a,e))},_openClick:function(e,t,n){if((void 0!==n.midClick?n.midClick:u.magnificPopup.defaults.midClick)||!(2===e.which||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){var a=void 0!==n.disableOn?n.disableOn:u.magnificPopup.defaults.disableOn;if(a)if(u.isFunction(a)){if(!a.call(d))return!0}else if(b.width()<a)return!0;e.type&&(e.preventDefault(),d.isOpen&&e.stopPropagation()),n.el=u(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),d.open(n)}},updateStatus:function(e,t){if(d.preloader){a!==e&&d.container.removeClass("mfp-s-"+a),t||"loading"!==e||(t=d.st.tLoading);var n={status:e,text:t};C("UpdateStatus",n),e=n.status,t=n.text,d.preloader.html(t),d.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),d.container.addClass("mfp-s-"+e),a=e}},_checkIfClose:function(e){if(!u(e).hasClass(s)){var t=d.st.closeOnContentClick,n=d.st.closeOnBgClick;if(t&&n)return!0;if(!d.content||u(e).hasClass("mfp-close")||d.preloader&&e===d.preloader[0])return!0;if(e===d.content[0]||u.contains(d.content[0],e)){if(t)return!0}else if(n&&u.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){d.bgOverlay.addClass(e),d.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),d.wrap.removeClass(e)},_hasScrollBar:function(e){return(d.isIE7?p.height():document.body.scrollHeight)>(e||b.height())},_setFocus:function(){(d.st.focus?d.content.find(d.st.focus).eq(0):d.wrap).focus()},_onFocusIn:function(e){if(e.target!==d.wrap[0]&&!u.contains(d.wrap[0],e.target))return d._setFocus(),!1},_parseMarkup:function(i,e,t){var o;t.data&&(e=u.extend(t.data,e)),C(f,[i,e,t]),u.each(e,function(e,t){if(void 0===t||!1===t)return!0;if(1<(o=e.split("_")).length){var n=i.find(g+"-"+o[0]);if(0<n.length){var a=o[1];"replaceWith"===a?n[0]!==t[0]&&n.replaceWith(t):"img"===a?n.is("img")?n.attr("src",t):n.replaceWith(u("<img>").attr("src",t).attr("class",n.attr("class"))):n.attr(o[1],t)}}else i.find(g+"-"+e).html(t)})},_getScrollbarSize:function(){if(void 0===d.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),d.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return d.scrollbarSize}},u.magnificPopup={instance:null,proto:e.prototype,modules:[],open:function(e,t){return k(),(e=e?u.extend(!0,{},e):{}).isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return u.magnificPopup.instance&&u.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&(u.magnificPopup.defaults[e]=t.options),u.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},u.fn.magnificPopup=function(e){k();var t=u(this);if("string"==typeof e)if("open"===e){var n,a=y?t.data("magnificPopup"):t[0].magnificPopup,i=parseInt(arguments[1],10)||0;a.items?n=a.items[i]:(n=t,a.delegate&&(n=n.find(a.delegate)),n=n.eq(i)),d._openClick({mfpEl:n},t,a)}else d.isOpen&&d[e].apply(d,Array.prototype.slice.call(arguments,1));else e=u.extend(!0,{},e),y?t.data("magnificPopup",e):t[0].magnificPopup=e,d.addGroup(t,e);return t};var I,T,S,P="inline",E=function(){S&&(T.after(S.addClass(I)).detach(),S=null)};u.magnificPopup.registerModule(P,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){d.types.push(P),w(c+"."+P,function(){E()})},getInline:function(e,t){if(E(),e.src){var n=d.st.inline,a=u(e.src);if(a.length){var i=a[0].parentNode;i&&i.tagName&&(T||(I=n.hiddenClass,T=_(I),I="mfp-"+I),S=a.after(T).detach().removeClass(I)),d.updateStatus("ready")}else d.updateStatus("error",n.tNotFound),a=u("<div>");return e.inlineElement=a}return d.updateStatus("ready"),d._parseMarkup(t,{},e),t}}});var O,j="ajax",z=function(){O&&u(document.body).removeClass(O)},A=function(){z(),d.req&&d.req.abort()};u.magnificPopup.registerModule(j,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){d.types.push(j),O=d.st.ajax.cursor,w(c+"."+j,A),w("BeforeChange."+j,A)},getAjax:function(i){O&&u(document.body).addClass(O),d.updateStatus("loading");var e=u.extend({url:i.src,success:function(e,t,n){var a={data:e,xhr:n};C("ParseAjax",a),d.appendContent(u(a.data),j),i.finished=!0,z(),d._setFocus(),setTimeout(function(){d.wrap.addClass(v)},16),d.updateStatus("ready"),C("AjaxContentAdded")},error:function(){z(),i.finished=i.loadError=!0,d.updateStatus("error",d.st.ajax.tError.replace("%url%",i.src))}},d.st.ajax.settings);return d.req=u.ajax(e),""}}});var M;u.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=d.st.image,t=".image";d.types.push("image"),w(h+t,function(){"image"===d.currItem.type&&e.cursor&&u(document.body).addClass(e.cursor)}),w(c+t,function(){e.cursor&&u(document.body).removeClass(e.cursor),b.off("resize"+g)}),w("Resize"+t,d.resizeImage),d.isLowIE&&w("AfterChange",d.resizeImage)},resizeImage:function(){var e=d.currItem;if(e&&e.img&&d.st.image.verticalFit){var t=0;d.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",d.wH-t)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,M&&clearInterval(M),e.isCheckingImgSize=!1,C("ImageHasSize",e),e.imgHidden&&(d.content&&d.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(t){var n=0,a=t.img[0],i=function(e){M&&clearInterval(M),M=setInterval(function(){0<a.naturalWidth?d._onImageHasSize(t):(200<n&&clearInterval(M),3===++n?i(10):40===n?i(50):100===n&&i(500))},e)};i(1)},getImage:function(e,t){var n=0,a=function(){e&&(e.img[0].complete?(e.img.off(".mfploader"),e===d.currItem&&(d._onImageHasSize(e),d.updateStatus("ready")),e.hasSize=!0,e.loaded=!0,C("ImageLoadComplete")):++n<200?setTimeout(a,100):i())},i=function(){e&&(e.img.off(".mfploader"),e===d.currItem&&(d._onImageHasSize(e),d.updateStatus("error",o.tError.replace("%url%",e.src))),e.hasSize=!0,e.loaded=!0,e.loadError=!0)},o=d.st.image,r=t.find(".mfp-img");if(r.length){var s=document.createElement("img");s.className="mfp-img",e.el&&e.el.find("img").length&&(s.alt=e.el.find("img").attr("alt")),e.img=u(s).on("load.mfploader",a).on("error.mfploader",i),s.src=e.src,r.is("img")&&(e.img=e.img.clone()),0<(s=e.img[0]).naturalWidth?e.hasSize=!0:s.width||(e.hasSize=!1)}return d._parseMarkup(t,{title:function(e){if(e.data&&void 0!==e.data.title)return e.data.title;var t=d.st.image.titleSrc;if(t){if(u.isFunction(t))return t.call(d,e);if(e.el)return e.el.attr(t)||""}return""}(e),img_replaceWith:e.img},e),d.resizeImage(),e.hasSize?(M&&clearInterval(M),e.loadError?(t.addClass("mfp-loading"),d.updateStatus("error",o.tError.replace("%url%",e.src))):(t.removeClass("mfp-loading"),d.updateStatus("ready"))):(d.updateStatus("loading"),e.loading=!0,e.hasSize||(e.imgHidden=!0,t.addClass("mfp-loading"),d.findImageSize(e))),t}}});var B;u.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,o=d.st.zoom,t=".zoom";if(o.enabled&&d.supportsTransition){var n,a,i=o.duration,r=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),n="all "+o.duration/1e3+"s "+o.easing,a={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},i="transition";return a["-webkit-"+i]=a["-moz-"+i]=a["-o-"+i]=a[i]=n,t.css(a),t},s=function(){d.content.css("visibility","visible")};w("BuildControls"+t,function(){if(d._allowZoom()){if(clearTimeout(n),d.content.css("visibility","hidden"),!(e=d._getItemToZoom()))return void s();(a=r(e)).css(d._getOffset()),d.wrap.append(a),n=setTimeout(function(){a.css(d._getOffset(!0)),n=setTimeout(function(){s(),setTimeout(function(){a.remove(),e=a=null,C("ZoomAnimationEnded")},16)},i)},16)}}),w(l+t,function(){if(d._allowZoom()){if(clearTimeout(n),d.st.removalDelay=i,!e){if(!(e=d._getItemToZoom()))return;a=r(e)}a.css(d._getOffset(!0)),d.wrap.append(a),d.content.css("visibility","hidden"),setTimeout(function(){a.css(d._getOffset())},16)}}),w(c+t,function(){d._allowZoom()&&(s(),a&&a.remove(),e=null)})}},_allowZoom:function(){return"image"===d.currItem.type},_getItemToZoom:function(){return!!d.currItem.hasSize&&d.currItem.img},_getOffset:function(e){var t,n=(t=e?d.currItem.img:d.st.zoom.opener(d.currItem.el||d.currItem)).offset(),a=parseInt(t.css("padding-top"),10),i=parseInt(t.css("padding-bottom"),10);n.top-=u(window).scrollTop()-a;var o={width:t.width(),height:(y?t.innerHeight():t[0].offsetHeight)-i-a};return void 0===B&&(B=void 0!==document.createElement("p").style.MozTransform),B?o["-moz-transform"]=o.transform="translate("+n.left+"px,"+n.top+"px)":(o.left=n.left,o.top=n.top),o}}});var F="iframe",N=function(e){if(d.currTemplate[F]){var t=d.currTemplate[F].find("iframe");t.length&&(e||(t[0].src="//about:blank"),d.isIE8&&t.css("display",e?"block":"none"))}};u.magnificPopup.registerModule(F,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){d.types.push(F),w("BeforeChange",function(e,t,n){t!==n&&(t===F?N():n===F&&N(!0))}),w(c+"."+F,function(){N()})},getIframe:function(e,t){var n=e.src,a=d.st.iframe;u.each(a.patterns,function(){if(-1<n.indexOf(this.index))return this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1});var i={};return a.srcAction&&(i[a.srcAction]=n),d._parseMarkup(t,i,e),d.updateStatus("ready"),t}}});var L=function(e){var t=d.items.length;return t-1<e?e-t:e<0?t+e:e},H=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};u.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var o=d.st.gallery,e=".mfp-gallery";if(d.direction=!0,!o||!o.enabled)return!1;m+=" mfp-gallery",w(h+e,function(){o.navigateByImgClick&&d.wrap.on("click"+e,".mfp-img",function(){if(1<d.items.length)return d.next(),!1}),p.on("keydown"+e,function(e){37===e.keyCode?d.prev():39===e.keyCode&&d.next()})}),w("UpdateStatus"+e,function(e,t){t.text&&(t.text=H(t.text,d.currItem.index,d.items.length))}),w(f+e,function(e,t,n,a){var i=d.items.length;n.counter=1<i?H(o.tCounter,a.index,i):""}),w("BuildControls"+e,function(){if(1<d.items.length&&o.arrows&&!d.arrowLeft){var e=o.arrowMarkup,t=d.arrowLeft=u(e.replace(/%title%/gi,o.tPrev).replace(/%dir%/gi,"left")).addClass(s),n=d.arrowRight=u(e.replace(/%title%/gi,o.tNext).replace(/%dir%/gi,"right")).addClass(s);t.click(function(){d.prev()}),n.click(function(){d.next()}),d.container.append(t.add(n))}}),w(r+e,function(){d._preloadTimeout&&clearTimeout(d._preloadTimeout),d._preloadTimeout=setTimeout(function(){d.preloadNearbyImages(),d._preloadTimeout=null},16)}),w(c+e,function(){p.off(e),d.wrap.off("click"+e),d.arrowRight=d.arrowLeft=null})},next:function(){d.direction=!0,d.index=L(d.index+1),d.updateItemHTML()},prev:function(){d.direction=!1,d.index=L(d.index-1),d.updateItemHTML()},goTo:function(e){d.direction=e>=d.index,d.index=e,d.updateItemHTML()},preloadNearbyImages:function(){var e,t=d.st.gallery.preload,n=Math.min(t[0],d.items.length),a=Math.min(t[1],d.items.length);for(e=1;e<=(d.direction?a:n);e++)d._preloadItem(d.index+e);for(e=1;e<=(d.direction?n:a);e++)d._preloadItem(d.index-e)},_preloadItem:function(e){if(e=L(e),!d.items[e].preloaded){var t=d.items[e];t.parsed||(t=d.parseEl(e)),C("LazyLoad",t),"image"===t.type&&(t.img=u('<img class="mfp-img" />').on("load.mfploader",function(){t.hasSize=!0}).on("error.mfploader",function(){t.hasSize=!0,t.loadError=!0,C("LazyLoadError",t)}).attr("src",t.src)),t.preloaded=!0}}}});var R="retina";u.magnificPopup.registerModule(R,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(1<window.devicePixelRatio){var n=d.st.retina,a=n.ratio;1<(a=isNaN(a)?a():a)&&(w("ImageHasSize."+R,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/a,width:"100%"})}),w("ElementParse."+R,function(e,t){t.src=n.replaceSrc(t,a)}))}}}}),k()}),function(p,e,t,n){p.extend(p.fn,{accrue:function(i){return i=p.extend({calculationMethod:o},p.fn.accrue.options,i),this.each(function(){var t=p(this);t.find(".form").length||t.append('<div class="form"></div>');var n,a;m(t,i,"amount"),m(t,i,"rate"),m(t,i,"term");if("compare"==i.mode)m(t,i,"rate_compare");switch(".results"===i.response_output_div?(0===t.find(".results").length&&t.append('<div class="results"></div>'),n=t.find(".results")):n=p(i.response_output_div),i.mode){case"basic":a=o;break;case"compare":a=r;break;case"amortization":a=s}a(t,i,n),"button"==i.operation?(0===t.find("button").length&&0===t.find("input[type=submit]").length&&0===t.find("input[type=image]").length&&t.find(".form").append('<button class="accrue-calculate">'+i.button_label+"</button>"),t.find("button, input[type=submit], input[type=image]").each(function(){p(this).click(function(e){e.preventDefault(),a(t,i,n)})})):t.find("input, select").each(function(){p(this).bind("keyup change",function(){a(t,i,n)})}),t.find("form").each(function(){p(this).submit(function(e){e.preventDefault(),a(t,i,n)})})})}}),p.fn.accrue.options={mode:"basic",operation:"keyup",default_values:{amount:"$7,500",rate:"7%",rate_compare:"1.49%",term:"36m"},field_titles:{amount:"Loan Amount",rate:"Rate (APR)",rate_compare:"Comparison Rate",term:"Term"},button_label:"Calculate",field_comments:{amount:"",rate:"",rate_compare:"",term:"Format: 12m, 36m, 3y, 7y"},response_output_div:".results",response_basic:"<p><strong>Monthly Payment:</strong><br />$%payment_amount%</p><p><strong>Number of Payments:</strong><br />%num_payments%</p><p><strong>Total Payments:</strong><br />$%total_payments%</p><p><strong>Total Interest:</strong><br />$%total_interest%</p>",response_compare:'<p class="total-savings">Save $%savings% in interest!</p>',error_text:'<p class="error">Please fill in all fields.</p>',callback:function(e,t){}};var m=function(e,t,n){var a;return e.find(".accrue-"+n).length?a=e.find(".accrue-"+n):e.find("."+n).length?a=e.find("."+n):e.find("input[name~="+n+"]").length?e.find("input[name~="+n+"]"):a="","string"!=typeof a?a.val():"term_compare"!=n&&(e.find(".form").append('<div class="accrue-field-'+n+'"><p><label>'+t.field_titles[n]+':</label><input type="text" class="'+n+'" value="'+t.default_values[n]+'" />'+(0<t.field_comments[n].length?"<small>"+t.field_comments[n]+"</small>":"")+"</p></div>"),e.find("."+n).val())},o=function(e,t,n){var a=p.loanInfo({amount:m(e,t,"amount"),rate:m(e,t,"rate"),term:m(e,t,"term")});if(0!==a){var i=t.response_basic.replace("%payment_amount%",a.payment_amount_formatted).replace("%num_payments%",a.num_payments).replace("%total_payments%",a.total_payments_formatted).replace("%total_interest%",a.total_interest_formatted);n.html(i)}else n.html(t.error_text);t.callback(e,a)},r=function(e,t,n){var a=m(e,t,"term_compare");"boolean"==typeof a&&(a=m(e,t,"term"));var i=p.loanInfo({amount:m(e,t,"amount"),rate:m(e,t,"rate"),term:m(e,t,"term")}),o=p.loanInfo({amount:m(e,t,"amount"),rate:m(e,t,"rate_compare"),term:a}),r={loan_1:i,loan_2:o};if(0!==i&&0!==o){0<i.total_interest-o.total_interest?r.savings=i.total_interest-o.total_interest:r.savings=0;var s=t.response_compare.replace("%savings%",r.savings.toFixed(2)).replace("%loan_1_payment_amount%",o.payment_amount_formatted).replace("%loan_1_num_payments%",o.num_payments).replace("%loan_1_total_payments%",o.total_payments_formatted).replace("%loan_1_total_interest%",o.total_interest_formatted).replace("%loan_2_payment_amount%",i.payment_amount_formatted).replace("%loan_2_num_payments%",i.num_payments).replace("%loan_2_total_payments%",i.total_payments_formatted).replace("%loan_2_total_interest%",i.total_interest_formatted);n.html(s)}else n.html(t.error_text);t.callback(e,r)},s=function(e,t,n){var a=p.loanInfo({amount:m(e,t,"amount"),rate:m(e,t,"rate"),term:m(e,t,"term")});if(0!==a){for(var i='<table class="accrue-amortization"><tr><th class="accrue-payment-number">#</th><th class="accrue-payment-amount">Payment Amt.</th><th class="accrue-total-interest">Total Interest</th><th class="accrue-total-payments">Total Payments</th><th class="accrue-balance">Balance</th></tr>',o=a.payment_amount-a.original_amount/a.num_payments,r=a.payment_amount-o,s=0,c=0,l=parseInt(a.original_amount),u=0;u<a.num_payments;u++){s+=o,c+=a.payment_amount,l-=r;var d="td";u==a.num_payments-1&&(d="th"),i=i+"<tr><"+d+' class="accrue-payment-number">'+(u+1)+"</"+d+"><"+d+' class="accrue-payment-amount">$'+a.payment_amount_formatted+"</"+d+"><"+d+' class="accrue-total-interest">$'+s.toFixed(2)+"</"+d+"><"+d+' class="accrue-total-payments">$'+c.toFixed(2)+"</"+d+"><"+d+' class="accrue-balance">$'+l.toFixed(2)+"</"+d+"></tr>"}i+="</table>",n.html(i)}else n.html(t.error_text);t.callback(e,a)};p.loanInfo=function(e){var t=(void 0!==e.amount?e.amount:0).replace(/[^\d.]/gi,""),n=(void 0!==e.rate?e.rate:0).replace(/[^\d.]/gi,""),a=void 0!==e.term?e.term:0;a=a.match("y")?12*parseInt(a.replace(/[^\d.]/gi,"")):parseInt(a.replace(/[^\d.]/gi,""));var i=n/100/12,o=Math.pow(1+i,a),r=t*o*i/(o-1);return 0<t*n*a?{original_amount:t,payment_amount:r,payment_amount_formatted:r.toFixed(2),num_payments:a,total_payments:r*a,total_payments_formatted:(r*a).toFixed(2),total_interest:r*a-t,total_interest_formatted:(r*a-t).toFixed(2)}:0}}(jQuery,window,document),jQuery(document).ready(function(o){var e;(o(".calculator-compare").accrue({mode:"compare"}),o(".calculator-loan").accrue(),o(".calculator.scratch.one").length)&&((e=function(){var e=o(".calculator.scratch.one"),t=e.find(".amount").val(),n=e.find(".term").val(),a=e.find(".rate").val();if(""!=t&&0!=t&&""!=n&&0!=n&&""!=a&&0!=a){var i=o.loanInfo({amount:t,term:n,rate:a});0<i.payment_amount?e.find(".payment").val("$"+i.payment_amount_formatted):e.find(".payment").val("")}})(),o(".calculator.scratch.one input").keyup(e));o(".calculator.scratch.two").length&&((e=function(){var e=o(".calculator.scratch.two"),t=e.find(".amount").val(),n=e.find(".term").val(),a=e.find(".rate").val();if(""!=t&&0!=t&&""!=n&&0!=n&&""!=a&&0!=a){var i=o.loanInfo({amount:t,term:n,rate:a});0<i.payment_amount?e.find(".payment").val("$"+i.payment_amount_formatted):e.find(".payment").val("")}})(),o(".calculator.scratch.two input").keyup(e));o(".calculator.scratch.three").length&&((e=function(){var e=o(".calculator.scratch.three"),t=e.find(".amount").val(),n=e.find(".term").val(),a=e.find(".rate").val();if(""!=t&&0!=t&&""!=n&&0!=n&&""!=a&&0!=a){var i=o.loanInfo({amount:t,term:n,rate:a});0<i.payment_amount?e.find(".payment").val("$"+i.payment_amount_formatted):e.find(".payment").val("")}})(),o(".calculator.scratch.three input").keyup(e))});var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{},jaaulde.utils.cookies=function(){var t,i,o,e,a={expiresAt:null,path:"/",domain:null,secure:!1};return t=function(e){var t,n;return"object"!=typeof e||null===e?t=a:(t={expiresAt:a.expiresAt,path:a.path,domain:a.domain,secure:a.secure},"object"==typeof e.expiresAt&&e.expiresAt instanceof Date?t.expiresAt=e.expiresAt:"number"==typeof e.hoursToLive&&0!==e.hoursToLive&&((n=new Date).setTime(n.getTime()+60*e.hoursToLive*60*1e3),t.expiresAt=n),"string"==typeof e.path&&""!==e.path&&(t.path=e.path),"string"==typeof e.domain&&""!==e.domain&&(t.domain=e.domain),!0===e.secure&&(t.secure=e.secure)),t},i=function(e){return("object"==typeof(e=t(e)).expiresAt&&e.expiresAt instanceof Date?"; expires="+e.expiresAt.toGMTString():"")+"; path="+e.path+("string"==typeof e.domain?"; domain="+e.domain:"")+(!0===e.secure?"; secure":"")},o=function(){var e,t,n,a,i,o={},r=document.cookie.split(";");for(e=0;e<r.length;e+=1){n=(t=r[e].split("="))[0].replace(/^\s*/,"").replace(/\s*$/,"");try{a=decodeURIComponent(t[1])}catch(e){a=t[1]}if("object"==typeof JSON&&null!==JSON&&"function"==typeof JSON.parse)try{i=a,a=JSON.parse(a)}catch(e){a=i}o[n]=a}return o},(e=function(){}).prototype.get=function(e){var t,n,a=o();if("string"==typeof e)t=void 0!==a[e]?a[e]:null;else if("object"==typeof e&&null!==e)for(n in t={},e)void 0!==a[e[n]]?t[e[n]]=a[e[n]]:t[e[n]]=null;else t=a;return t},e.prototype.filter=function(e){var t,n={},a=o();for(t in"string"==typeof e&&(e=new RegExp(e)),a)t.match(e)&&(n[t]=a[t]);return n},e.prototype.set=function(e,t,n){if("object"==typeof n&&null!==n||(n={}),null==t)t="",n.hoursToLive=-8760;else if("string"!=typeof t){if("object"!=typeof JSON||null===JSON||"function"!=typeof JSON.stringify)throw new Error("cookies.set() received non-string value and could not serialize.");t=JSON.stringify(t)}var a=i(n);document.cookie=e+"="+encodeURIComponent(t)+a},e.prototype.del=function(e,t){var n,a={};for(n in"object"==typeof t&&null!==t||(t={}),"boolean"==typeof e&&!0===e?a=this.get():"string"==typeof e&&(a[e]=!0),a)"string"==typeof n&&""!==n&&this.set(n,null,t)},e.prototype.test=function(){var e=!1;return this.set("cT","data"),"data"===this.get("cT")&&(this.del("cT"),e=!0),e},e.prototype.setOptions=function(e){"object"!=typeof e&&(e=null),a=t(e)},new e}(),window.jQuery&&function(r){r.cookies=jaaulde.utils.cookies;var e={cookify:function(o){return this.each(function(){var e,t,n,a=["name","id"],i=r(this);for(e in a)if(!isNaN(e)&&"string"==typeof(t=i.attr(a[e]))&&""!==t){i.is(":checkbox, :radio")?i.attr("checked")&&(n=i.val()):n=i.is(":input")?i.val():i.html(),"string"==typeof n&&""!==n||(n=null),r.cookies.set(t,n,o);break}})},cookieFill:function(){return this.each(function(){var e,t,n,a,i=["name","id"],o=r(this);for(t=function(){return!!(e=i.pop())};t();)if("string"==typeof(n=o.attr(e))&&""!==n){null!==(a=r.cookies.get(n))&&(o.is(":checkbox, :radio")?o.val()===a?o.attr("checked","checked"):o.removeAttr("checked"):o.is(":input")?o.val(a):o.html(a));break}})},cookieBind:function(t){return this.each(function(){var e=r(this);e.cookieFill().change(function(){e.cookify(t)})})}};r.each(e,function(e){r.fn[e]=this})}(window.jQuery),jQuery(document).ready(function(e){var t=e(".emergency-bar-container");if(t.length){var n=t.attr("class").replace(" red","").replace(" orange","").replace(" yellow","").replace(" green","").replace(" navy","").replace(" blue","").replace(" teal","").replace("emergency-bar-container","");null==e.cookies.get("emergency-"+n+"shown")&&(e(".emergency-bar-container").addClass("show"),e(".emergency-bar-container .fa-close").click(function(){e(".emergency-bar-container").removeClass("show"),e.cookies.set("emergency-"+n+"shown","true")}))}}),jQuery(document).ready(function(a){var e=a("header nav"),t=e.find("button.menu-toggle"),n=e.find(".nav-menu");a(".content img").removeAttr("width").removeAttr("height"),t.click(function(){n.is(":visible")?n.hide():n.show(),n.find("a").click(function(){var e=a(this).parent("li"),t=a(this).next("ul");!t.is(":visible")&&e.hasClass("menu-item-has-children")&&(event.preventDefault(),e.addClass("open"),t.show())})}),a(".accordion-box-title").click(function(){a(this).parent(".accordion-box").children(".accordion-box-content").slideToggle(600)}),a("button[data-url]").click(function(){window.location.href=a(this).attr("data-url")}),a(".content a:not(.previous):not(.next):not(.lightbox-iframe)").click(function(e){e.preventDefault();var t=a(this),n=t.attr("href");t.hasClass("bypass")||n.match(/lpccu.dev/i)||n.match(/lpccu.coop/i)||n.match(/lp.giraph.io/i)||"#"===n.charAt(0)||"/"===n.charAt(0)?location.href=n:confirm("This link is taking you to a third party provider - are you sure you want to proceed?")&&window.open(n,"_blank")}),a(".content").fitVids(),a(".lightbox-iframe").magnificPopup({type:"iframe"}),a(".quick-links select").on("change",function(){location.href=a(this).find(":selected").val()})}),function(e,t,n,a,i,o,r){e.GoogleAnalyticsObject=i,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,o=t.createElement("script"),r=t.getElementsByTagName("script")[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",r.parentNode.insertBefore(o,r)}(window,document,0,0,"ga"),ga("create","UA-97184804-1","auto"),ga("send","pageview"),jQuery(document).ready(function(o){if(o(".products")){var r=o(".products"),s=r.find(".product-list"),c=1;if(s.length){var l=r.find("button.product-nav"),u=r.find("button.product-nav.next"),d=r.find("button.product-nav.previous"),p=s.find(".product").length,m=function(){var e=s.width(),t=r.find(".product"),n=t.width()+2*parseFloat(t.css("margin-right").replace("px",""))+2*parseFloat(t.css("padding-right").replace("px","")),a=Math.round(e/n),i=Math.ceil(p/a);1<c&&d.prop("disabled",!1),c==i&&u.prop("disabled",!0),1==c&&d.prop("disabled",!0),c<i&&u.prop("disabled",!1),1==c&&c==i&&(l.addClass("unnecessary"),s.addClass("no-nav"))};m(),l.click(function(){var e=o(this).attr("class").replace("product-nav ",""),t=s.width(),n=r.find(".product"),a=n.width()+2*parseFloat(n.css("margin-right").replace("px",""))+2*parseFloat(n.css("padding-right").replace("px","")),i=Math.round(t/a);Math.ceil(p/i);"next"==e&&(s.css("text-indent",parseInt(s.css("text-indent"))-t),c+=1,m()),"previous"==e&&(s.css("text-indent",parseInt(s.css("text-indent"))+t),c-=1,m(),0<parseInt(s.css("text-indent"))&&s.css("text-indent",0))}),o(window).resize(function(){s.css("text-indent",0),c=1,m()})}}}),jQuery(document).ready(function(a){var i=a(".showcase"),n=0,o=i.find(".slide").size();if(void 0!==i){var r=i.find(".slide.visible"),s=i.find(".slide").last(),c=function(){var e=l(),t=e.next(".slide");t.length||(t=r),e.attr("class","slide hide-left"),t.attr("class","slide visible"),setTimeout(function(){e.attr("class","slide")},400),u()},l=function(){return i.find(".slide.visible")},u=function(){var e=l(),t=e.find("img:visible");if(console.log(t),i.find(".slide-wrapper").length)var n=2*i.find(".slide-wrapper").css("margin-top").replace("px","");else n=0;768<=a(window).width()?i.height(t.height()+n):i.height(e.height())};setTimeout(function(){u()},500),a(window).resize(function(){l();u()}),setTimeout(function(){u(),1<o&&(n=setInterval(c,1e4))},500),a(".showcase-nav a").click(function(){var e,t;a(this).hasClass("previous")?(e=l(),(t=e.prev(".slide")).length||(t=s),e.attr("class","slide"),t.attr("class","slide visible"),setTimeout(function(){e.attr("class","slide hide-left")},400),u()):c(),1<o&&clearInterval(n)}),a(".showcase-nav a.previous").hover(function(){a(".showcase .slide:not(.visible)").attr("class","slide hide-left")}),a(".showcase-nav a.next").hover(function(){a(".showcase .slide:not(.visible)").attr("class","slide")})}}),jQuery(document).ready(function(n){n(".tab-content:first").length&&n(".tab-nav li").click(function(){var e=n(this).attr("class"),t=n(".tab-container").offset().top;n(".tab-content:not(."+e+"):visible").slideUp("slow"),n(".tab-content."+e+":hidden").slideDown("slow"),n("html,body").animate({scrollTop:t},700)}),n(".area-tabs").length&&(n(".area-tab-navigation li:first-child").click(function(){n(".area-tab-navigation li.active").removeClass("active"),n(this).addClass("active"),n(".area-tab-content.minors").removeClass("active").hide(),n(".area-tab-content.majors").addClass("active").show()}),n(".area-tab-navigation li:nth-child(2)").click(function(){n(".area-tab-navigation li.active").removeClass("active"),n(this).addClass("active"),n(".area-tab-content.majors").removeClass("active").hide(),n(".area-tab-content.minors").addClass("active").show()}))});
//# sourceMappingURL=main.js.map