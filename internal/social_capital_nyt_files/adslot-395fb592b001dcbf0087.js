(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1iyJ":function(e,t,n){"use strict";n.r(t);n("RzqG")},3:function(e,t,n){e.exports=n("1iyJ")},RzqG:function(e,t){!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)),i}function n(n){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?t(Object(o),!0).forEach((function(t){e(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var a,r,s=(a={},r={},{publish:function e(t){var n,i=void 0===(n=t.name)?"":n,o=void 0===(n=t.value)?{}:n;"all"!==(t=void 0===(t=t.scope)?"page":t)&&e({name:i,value:o,scope:"all"}),a[i]||(a[i]={}),a[i][t]||(a[i][t]=[]),a[i][t].push(o),r[i]&&r[i][t]&&r[i][t].forEach((function(e){e(o)}))},subscribe:function(e){var t,n=void 0===(t=e.name)?"":t,i=void 0===(t=e.callback)?function(){}:t,o=void 0===(e=e.scope)?"page":e;r[n]||(r[n]={}),r[n][o]||(r[n][o]=[]);var s=r[n][o].push(i)-1;return a[n]&&a[n][o]&&a[n][o].length&&a[n][o].forEach((function(e){i(e)})),{remove:function(){return r[n][o].splice(s,1)}}},unsubscribeToAll:function(e){Object.keys(r).forEach((function(t){r[t]&&r[t][e]&&delete r[t][e]})),Object.keys(a).forEach((function(t){a[t]&&a[t][e]&&delete a[t][e]}))}});function d(e,t,n,i,o,a){var r=1<arguments.length&&void 0!==t?t:0,s=2<arguments.length&&void 0!==n?n:0,d=3<arguments.length&&void 0!==i?i:0,l=4<arguments.length&&void 0!==o?o:0,c=!(5<arguments.length&&void 0!==a)||a;if(!e||1!==e.nodeType)return!1;t=(u=e.getBoundingClientRect()).top-r,n=u.left,i=u.bottom,o=u.right,a=0,e=0,r=window.innerHeight;var u=window.innerWidth;return c?a+d*l<=i&&e+s*l<=o&&t<=r-d*l&&n<=u-s*l:a<=t&&i<=r}function l(e){var t=window.location.href;e=e.replace(/[[]]/g,"\\$&");return(t=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t))&&t[2]?decodeURIComponent(t[2].replace(/\+/g,"")):""}function c(e,t,n){var i="".concat(e,"-").concat(t);try{performance.mark(i),performance.measure(i,n,i);var o=performance.getEntriesByName(i).find((function(e){return"measure"===e.entryType}));return o?Math.round(o.duration):0}catch(e){return 0}}function u(e){return-1!==document.cookie.indexOf(e)}function p(e){var t={PURR_AcceptableTrackers:0,PURR_AdConfiguration:5,PURR_DataSaleOptOutUI:2,PURR_DataProcessingConsentUI:3,PURR_AcceptableTrackers_v2:4,PURR_AdConfiguration_v2:5,PURR_DataProcessingPreferenceUI:6,PURR_DataSaleOptOutUI_v2:7,PURR_CaliforniaNoticesUI:8,PURR_EmailMarketingOptInUI:9,PURR_DeleteIPAddress:10,PURR_AdConfiguration_v3:11},n=function(e){return 2===(e=("; "+document.cookie).split("; "+e+"=")).length?e.pop().split(";").shift():null}(e),i={};return Object.keys(t).forEach((function(e){i[e]=function(e,t){return t=new RegExp("^.{"+t+"}(.)"),(null==(t=e.match(t))?void 0:t[1])||""}(n,t[e])})),Q.forEach((function(e){Object.keys(e.valueMapping).forEach((function(t){e.valueMapping[t]===i[e.name]&&(i[e.name]=t)}))})),i}function v(){var e;try{return function(){if("undefined"==typeof window)return!1;var e=-1!==(i=window.navigator.userAgent||window.navigator.vendor).indexOf("nyt_android"),t=-1!==i.indexOf("nytios"),n=-1!==i.indexOf("nyt_xwords_ios"),i=-1!==i.indexOf("Crosswords");return e||t||n||i}()?null!==(e=null===window||void 0===window?void 0:window.config)&&void 0!==e&&e.PurrDirectives?window.config.PurrDirectives:u("override-purr")?p("override-purr"):H({},X):u("nyt-purr")?p("nyt-purr"):H({},X)}catch(e){return console.warn("can’t get directives from cookie or config",e),H({},X)}}function f(){return v().PURR_AdConfiguration_v3||v().PURR_AdConfiguration_v2}var g="visibilitychange",m="mouseenter",h="mouseleave",b="readystatechange",w="unload",y="slotRequested",R="slotResponseReceived",A="slotRenderEnded",P="slotOnload",I="impressionViewable",_="responseStart",O="timeDefined",E="timeCalled",S="timeCallSent",U="timeReceived",k="timeRendered",T="timeLoaded",C="timeViewed",D="AdEmpty",j="AdDefined",M="AdCalled",L="AdRefreshed",z="AdRequestSent",x="AdResponse",V="AdRendered",q="AdLoaded",N="AdSlotReady",B="AdViewable",$="AdEnteredViewport",J="AdLeftViewport",K="AdMouseEnter",F="AdMouseLeave",G="AdsDisabled",W="GptError",Z="request_time",H=function(){return(H=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Q=[{name:"PURR_AcceptableTrackers",valueMapping:{controllers:"c",processors:"p"}},{name:"PURR_AdConfiguration",valueMapping:{full:"f",npa:"n","adluce-socrates":"s"}},{name:"PURR_DataSaleOptOutUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_DataProcessingConsentUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_AcceptableTrackers_v2",valueMapping:{controllers:"c",processors:"p",essentials:"e"}},{name:"PURR_AdConfiguration_v2",valueMapping:{full:"f",rdp:"r",npa:"n",adluce:"a","adluce-socrates":"s"}},{name:"PURR_DataProcessingPreferenceUI",valueMapping:{hide:"h","allow-opt-out":"o","allow-opt-in":"i","allow-opt-in-or-out":"a"}},{name:"PURR_DataSaleOptOutUI_v2",valueMapping:{hide:"h",show:"s","show-opted-out":"o"}},{name:"PURR_CaliforniaNoticesUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_EmailMarketingOptInUI",valueMapping:{checked:"c",unchecked:"u"}},{name:"PURR_DeleteIPAddress",valueMapping:{delete:"d",keep:"k"}},{name:"PURR_AdConfiguration_v3",valueMapping:{full:"f",rdp:"r",npa:"n",ltd:"l","adluce-socrates":"s"}}],X={PURR_DataSaleOptOutUI:"hide",PURR_DataSaleOptOutUI_v2:"hide",PURR_CaliforniaNoticesUI:"hide",PURR_DataProcessingConsentUI:"hide",PURR_DataProcessingPreferenceUI:"hide",PURR_AcceptableTrackers_v2:"controllers",PURR_AcceptableTrackers:"controllers",PURR_AdConfiguration_v2:"full",PURR_AdConfiguration:"full",PURR_EmailMarketingOptInUI:"checked",PURR_DeleteIPAddress:"delete",PURR_AdConfiguration_v3:"full"},Y="ltd",ee=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window;return e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag};function te(){var e,t,n,i=function(){window.googletag?ee().cmd.push((function(){ee()._loadStarted_||s.publish({name:D,value:{type:"AdBlockOn"}})})):s.publish({name:D,value:{type:W}})},o=f()===Y?"https://pagead2.googlesyndication.com/tag/js/gpt.js":"https://securepubads.g.doubleclick.net/tag/js/gpt.js";ee().apiReady?i():(e=o,t=i,n=function(){s.publish({name:D,value:{type:W}})},o=document.getElementsByTagName("head")[0],i=document.createElement("script"),t&&(i.onload=t),n&&(i.onerror=n),i.src=e,i.async=!0,o.appendChild(i))}function ne(e,t,n){return window.googletag.defineSlot(e,t,n)}var ie=function(t,n){s.publish({name:M,scope:t.id,value:e({id:t.id,position:t.position,slot:t.slot},E,n)})};function oe(e){ee().cmd.push((function(){var t=e.id,n=e.slot,i=c(t,E,_);ie(e,i),window.apstag&&window.apstag.setDisplayBids&&window.apstag.setDisplayBids(),n.setTargeting(Z,i.toString()),ee().display(t)}))}function ae(e,t){s.publish({name:L,scope:"all"}),ee().cmd.push((function(){e&&e.forEach((function(e){var t=e.getSlotElementId(),n=c(t,E,_);ie(t,e),e.setTargeting(Z,n.toString())})),e&&t?ee().pubads().refresh(e,t):e?ee().pubads().refresh(e):t?ee().pubads().refresh(null,t):ee().pubads().refresh()}))}function re(e,t){var n=e.displayed,i=e.slot;t.isRefresh&&n?(ae([i],t.changeCorrelator?null:{changeCorrelator:!1}),t.changeCorrelator=!1):(oe(e),e.displayed=!0)}var se=function(e,t){return!!(e&&t&&t.unobserve&&"function"==typeof t.unobserve)&&(t.unobserve(e),!0)};function de(e){return!!(e||(t=document.referrer||"",(e=/([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/).test(t)||e.test(window.location.href))||"adluce-socrates"===f());var t}var le={init:function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=void 0===(e=t.adTargeting)?{}:e;return(e=de())||(ee().cmd.push((function(){!function(){switch(f()){case"rdp":ee().pubads().setPrivacySettings({restrictDataProcessing:!0});break;case"npa":ee().pubads().setRequestNonPersonalizedAds(1);break;case Y:ee().pubads().setPrivacySettings({limitedAds:!0})}}()})),i=n(n({},i),{},{purr:f()})),n(n({},t),{},{adTargeting:i,adsDisabled:e})}};function ce(e){return e&&null!=e&&e.getSlotElementId&&null!=e&&e.getTargeting?{id:e.getSlotElementId(),position:e.getTargeting("pos")[0]||""}:{}}function ue(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};t=new IntersectionObserver((function(e,t){e=e[0],n(e,t)}),t);return e&&t.observe(e),t}function pe(e,t){s.publish({name:t,scope:e.id,value:{id:e.id,position:e.position,creativeId:e.creativeId,lineItemId:e.lineItemId}})}function ve(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};t.potentiallyViewable&&(null!==(e=t.viewabilityTimeout)&&void 0!==e||(t.viewabilityTimeout=setTimeout((function(){return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};delete e.viewabilityTimeout,delete e.potentiallyViewable,e.viewable=!0,pe(e,$)}(t)}),1e3)))}function fe(e,t){return ue(t,{root:null,rootMargin:"0px",threshold:be},(function(t){return i=e,void((n=t).target&&(t=242e3<=n.target.clientWidth*n.target.clientHeight?he:me,(t=n.intersectionRatio>=t)||(delete i.potentiallyViewable,clearTimeout(i.viewabilityTimeout),delete i.viewabilityTimeout),n.isIntersecting?!t||i.potentiallyViewable||i.viewable||(i.potentiallyViewable=!0,ve(i)):i.viewable&&(pe(i,J),delete i.viewable)));var n,i}))}function ge(e,t,n){return ue(e.AdSlotElement,{root:null,rootMargin:"".concat(t,"px"),threshold:0},(function(t,i){return o=i,a=e,i=n,void(t.isIntersecting&&(re(a,i),o.unobserve(a.AdSlotElement)));var o,a}))}var me=.5,he=.3,be=[0,me,he];function we(e,t,n,i){e.displayed||(e.observer=ge(e,i,n),n.unrenderedAds.push(e)),e.viewabilityObserver=fe(e),t[e.id]=e}function ye(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e.viewabilityTimeout&&(clearTimeout(e.viewabilityTimeout),delete e.viewabilityTimeout),e.viewable&&(delete e.viewable,e.potentiallyViewable=!0,pe(e,J))}(function(){var t=window.AdSlot4||{},o=[le],a={},r={isRefresh:!1,changeCorrelator:!1,stopAdCalls:!1,unrenderedAds:[]},u=[],p=!0,v=!1;if(t.init)return t;function f(){Object.values(a).forEach((function(n){var i,o;n.viewable&&(i=n,o=J,e(n={},$,"time_viewable_start"),e(n,J,"time_viewable_end"),t.events.publish({name:o,scope:i.id,value:{action:n[o],id:i.id,position:i.position,creativeId:i.creativeId,lineItemId:i.lineItemId}}))}))}function M(){"hidden"===document.visibilityState?Object.values(a).forEach(ye):"visible"===document.visibilityState&&Object.values(a).forEach(ve)}function L(e){var n=(e.target.parentNode.id.match(/^google/)?e.target.parentNode:e.target).parentNode.id,i=a[n],o=K,r=F;t.events.publish({name:e.type===m?o:r,scope:n,value:{type:e.type===m?"hover_mouse_enter":"hover_mouse_leave",id:n,position:i.position,creativeId:i.creativeId,lineItemId:i.lineItemId}})}function W(e){var t,n=e.observer,i=e.viewabilityObserver,o=e.AdSlotElement;return e.observer=(t=o,null!=(n=n)&&n.unobserve(t),null),delete e.potentiallyViewable,e.viewabilityObserver=(i=i,(o=null==o?void 0:o.querySelector("iframe"))&&(null!=i&&i.unobserve(o),i=h,o.removeEventListener(m,L),o.removeEventListener(i,L)),null),e}function Z(e,t){var n=null==t?void 0:t.querySelector("iframe");return(e=W(e)).AdSlotElement=t,e.viewabilityObserver=fe(e,n),null!=n&&n.addEventListener(m,L),null!=n&&n.addEventListener(h,L),e}function H(){window.addEventListener("message",(function(e){!function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return!(!window||!(window.location.origin===t||null!==(e=t.match)&&void 0!==e&&e.call(t,/(safeframe|tpc)\.googlesyndication\.com$/)))}(e.origin)||function(e,t,n,i){if(e.exclusive&&e.div){var o,a=e.div;switch(e.type){case"only-child":!function(e,t){t=1<arguments.length&&void 0!==t?t:{},(e=e&&e.empty||t.unrenderedAds||[]).length&&e.forEach((function(e){se(e.AdSlotElement,e.observer),s.publish({name:D,value:{type:e.id},scope:e.id})})),t.unrenderedAds=[],t.stopAdCalls=!0}({empty:function(e,t){return t=1<arguments.length&&void 0!==t?t:{},Object.values(t).filter((function(t){return e!==t.id}))}(a,t)},i);break;case"family-plan":void 0!==(o=t[a]&&t[a].slot&&(t[a].slot.getResponseInformation()||{}).lineItemId)&&n({adv:o,excl:"family"});break;case"blank":s.publish({name:D,value:{type:a},scope:a})}}}(e.data,a,t.updateAdReq,r)}),!1)}if(t.events=s,t.initializeAd=function(e,n){var i,o,s,l,v,f,g,m,h,b,w,y,R;t.props?(b=t.props,o=b.adUnitPath,s=b.sizeMapping,l=b.hideTopAd,v=b.adsDisabled,f=n.id,g=n.position,b=n.sizeKey,m=n.lazyLoad,h=n.truePosition,w=(b=b||g)in s?s[b]:s.default,"top"===g&&l||(v?t.events.publish({name:D,value:{type:G}}):!f||!o||!w||null!=e&&null!==(i=e.classList)&&void 0!==i&&i.contains("placed-ad")||null!=e&&null!==(R=e.parentNode)&&void 0!==R&&null!==(y=R.classList)&&void 0!==y&&y.contains("placed-ad")||u.includes(f)?u.includes(f)&&a&&a[f]&&e!==a[f].AdSlotElement&&we(Z(a[f],e),a,r,t.props.offset):r.stopAdCalls?t.events.publish({name:D,value:{type:f},scope:f}):(R=u,(y=f)&&R.push(y),ee().cmd.push((function(){var n,i,s;"undefined"!=typeof window&&window.document&&window.document.createElement&&window.self!==window.top?(n=window.outerWidth,u=w.reduce((function(e,t){var i=Number.isInteger(t[0])?t[0]:null,o=e.prevVp;return i<n&&o<i&&(e.prevVp=i,e.sizes=t[1]),e}),{prevVp:-1,sizes:[]}),i=ne(o,u.sizes,f)):(i=ne(o,["fluid"],f),s=ee().sizeMapping(),w.forEach((function(e){s.addSize([e[0],0],e[1])})),null!=i&&i.defineSizeMapping(s.build()));var l=h||g;null!=i&&i.setTargeting("div",f),null!=i&&i.setTargeting("pos",l),null!=i&&i.setCollapseEmptyDiv(!0),null!=i&&i.addService(ee().pubads());var u=Z({id:f,slot:i,position:l,sizes:w,viewabilityObserver:null},e);t.events.publish({name:j,value:{id:f,pos:l,sizes:w,truePosition:h,timeDefined:c(f,O,_),slot:i},scope:f}),m&&!d(e,0,0,0,0,p)||(a[f]&&a[f].slot?ae([i]):oe(u),u.displayed=!0),we(u,a,r,t.props.offset)}))))):t.events.subscribe({name:N,callback:function(){return t.initializeAd(e,n)}})},t.fillPlacements=function(e){if(t.props){if(!t.props.adsDisabled){var n=document.querySelectorAll(".place-ad:not(.placed-ad)");if(n&&0!==n.length)for(var i=0;i<n.length;i++){var o=n[i],a=o.id,r=(p=o.dataset).position,s=p.sizeKey,d=p.lazyLoad,l=p.slotId,c="false"!==d,u=o,p=r;d=l&&l!==a;(a||l)&&r&&(d&&!e||!d)&&(d&&(p=l,(d=document.createElement("div")).id=l,d.setAttribute("style","display: block; text-align: center; height: 100%"),u=d,o.appendChild(d)),t.initializeAd(u,{id:u.id,position:p,sizeKey:s,lazyLoad:c}),o.classList.add("placed-ad"))}}}else t.events.subscribe({name:N,callback:function(){return t.fillPlacements(e)}})},t.updateAdReq=function(e,n){t.props.adsDisabled||ee().cmd.push((function(){var i=t.props&&t.props.adTargeting||{};n||Object.keys(e).forEach((function(t){i[t]=e[t],ee().pubads().setTargeting(t,"".concat(e[t]))})),a[n]&&Object.keys(e).forEach((function(t){a[n].slot.setTargeting(t,"".concat(e[t]))}))}))},t.getAdReq=function(){return t.props&&t.props.adTargeting||{}},t.refreshAds=function(){t.props.adsDisabled||(r.isRefresh=!0,r.changeCorrelator=!0,r.unrenderedAds=[],p=!1,u=[],Object.entries(a).forEach((function(e){var n=(o=i(e,2))[0],o=(e=o[1]).displayed;r.unrenderedAds.push(e),o&&(a[n]=W(e),ye(e),e.observer=ge(e,t.props.offset,r))})),setTimeout((function(){p=!0}),2e3))},t.removeAdPlacement=function(e){ee().cmd.push((function(){var t,n=ee().pubads().getSlots().filter((function(t){return t.getSlotElementId()===e}));ee().destroySlots(n),t=e,t=(n=u).indexOf(t),n.splice(t,1)}))},t.getSlot=function(e){var t=null;return ee().cmd.push((function(){var n=ee().pubads().getSlots().filter((function(t){return t.getSlotElementId()===e}));t=n[0]||null})),t},t.init=function(){var e,i,r,s,d,u,p,m,h,O=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};v||(d=O.plugins,u=(h=(o=d||o).reduce((function(e,t){return t.init&&t.init(e)||e}),O)).adTargeting,e=void 0===u?{}:u,i=void 0===(s=h.adUnitPath)?"":s,r=void 0===(p=h.offset)?400:p,O=void 0!==(d=h.lockdownAds)&&d,s=void 0!==(u=h.hideTopAd)&&u,d=void 0===(p=h.sizeMapping)?{}:p,u=h.haltDFP,p=h.adsDisabled,h=/^tragedy$/i.test(i),h=u||p||h,t.props={adTargeting:e,adUnitPath:i,offset:r,sizeMapping:d,hideTopAd:s,adsDisabled:h},h?t.events.publish({name:D,value:{type:G}}):(e.vp=window.matchMedia("(min-width: 970px)").matches?"large":window.matchMedia("(min-width: 728px)").matches?"medium":"small",e.uap=(h=window.navigator.userAgent).match(/(nyt)[_\w\d-]*(ios)/i)?"ios":h.match(/(nyt)[_\w\d-]*(android)/i)?"android":"browser",e.aid=(h="nyt-a",(document&&document.cookie&&document.cookie.match&&(h=document.cookie.match(new RegExp("".concat(h,"=([^;]+)"))))?h[1]:"")||null),(h=l("ad-keywords"))&&(e.adv=h),(h=l("debugads"))&&(e.debugAdsQP=h),ee().cmd.push((function(){var i,o,r=(i=e,o=ee().pubads().getTargetingKeys(),Object.keys(i).filter((function(e){return o.indexOf(e)<0})).reduce((function(e,t){return e[t]=i[t],e}),{}));function s(){t.fillPlacements()}function d(){return"complete"===document.readyState}Object.keys(r).forEach((function(e){ee().pubads().setTargeting(e,r[e])})),ee().enableServices(),t.fillPlacements(!0),d()?s():document.addEventListener(b,(function e(){d()&&(document.removeEventListener(b,e),s())})),window.addEventListener(w,f),window.document.addEventListener(g,M),ee().pubads().addEventListener(y,(function(e){var i=(a=ce(e.slot)).id,o=a.position,a=c(i,S,_);t.events.publish({name:z,value:n(n({},e),{},{id:i,position:o,timeCallSent:a}),scope:i})})),ee().pubads().addEventListener(R,(function(e){var i=(a=ce(e.slot)).id,o=a.position,a=c(i,U,"".concat(i,"-").concat(E));t.events.publish({name:x,value:n(n({},e),{},{id:i,position:o,timeReceived:a}),scope:i})})),ee().pubads().addEventListener(A,(function(e){var i,o=(i=ce(e.slot)).id,r=i.position,s=c(o,k,"".concat(o,"-").concat(E));(i=a[o])&&(i.creativeId=e.sourceAgnosticCreativeId,i.lineItemId=e.sourceAgnosticLineItemId),e.isEmpty?t.events.publish({name:D,value:n(n({},e),{},{type:o,id:o,position:r,timeRendered:s}),scope:o}):t.events.publish({name:V,value:n(n({},e),{},{id:o,position:r,timeRendered:s}),scope:o})})),ee().pubads().addEventListener(P,(function(e){var i=(r=ce(e.slot)).id,o=r.position,r=a[i];a[i]=Z(r,r.AdSlotElement),r=c(i,T,"".concat(i,"-").concat(E)),t.events.publish({name:q,value:n(n({},e),{},{id:i,position:o,timeLoaded:r}),scope:i})})),ee().pubads().addEventListener(I,(function(e){var i=(r=ce(e.slot)).id,o=r.position,a=(s=e.slot.getResponseInformation()).sourceAgnosticCreativeId,r=s.sourceAgnosticLineItemId,s=c(i,C,"".concat(i,"-").concat(E));t.events.publish({name:B,value:n(n({},e),{},{id:i,position:o,creativeId:a,lineItemId:r,timeViewed:s}),scope:i})}))})),O?(m=window.googletag).cmd.push((function(){m.pubads().setForceSafeFrame(!0)})):H(),te()),v=!0,t.events.publish({name:N}))},t.isAdSlotReady=function(){return v},t.refreshAdsInView=ae,t.cmd)for(;t.cmd.length;)t.cmd.shift()();t.cmd={length:0,push:function(e){e()}},window.AdSlot4=t,window.AdSlot={placeDynamicAds:t.fillPlacements,getSlot:t.getSlot,setTargeting:function(e,n){var i={};i[e]=n,t.updateAdReq(i)},setSlotTargeting:function(e,n,i){var o={};o[n]=i,t.updateAdReq(o,e.getSlotElementId())},displayAd:oe,removeAdPlacement:t.removeAdPlacement,dispatch:function(){},destroyAdSlots:function(){ee().cmd.push((function(){ee().destroySlots()}))},checkAdsInViewport:function(){r.unrenderedAds=r.unrenderedAds.filter((function(e){var n=d(n=e.AdSlotElement,p?t.props.offset:0,0,0,0,p);return(e.potentiallyViewable=n)&&re(e,r),!n}))},refresh:t.refreshAds,AdSlotReady:!0,adTargeting:t.props&&t.props.adTargeting||{}}})()}()}},[[3,88]]]);
//# sourceMappingURL=adslot-395fb592b001dcbf0087.js.map