(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(t,e,n){"use strict";n.r(e),n.d(e,"Action",function(){return A});var i=n(0);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"run",value:function(){if(!!this.context.values.get(i.e).props[i.a]){var t=this.event.data||{},e=t.action,n=t.category,r=t.label,o=t.value,t=["send","event",n,e].concat(r?[r]:[]).concat(o?[o]:[]);if(!e||!n)throw new Error("Missing action or category for event tracking.");if(o&&!r)throw new Error("Missing label for value for event tracking.");if(o&&"number"!=typeof o&&"object"!==c(o)&&o.constructor!==Object||Array.isArray(o))throw new Error("Value for event tracking must be a number or object.");window.ga.apply(null,t)}}}])&&o(e.prototype,n),r&&o(e,r),t}();function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=f(n);return t=r?(t=f(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==s(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)),r}function y(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach(function(t){var e,n;e=r,t=o[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))})}return r}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var g=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(h(this,e),!t.context)throw new Error("Missing context in event mapper options.");this.options=t,this.context=t.context,this._mappings={},this._onEvent=this._onEvent.bind(this)}return b(e,[{key:"mappings",get:function(){return y({},this._mappings)}},{key:"map",value:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=this._mappings[t]||[];0===r.length&&this.context.on(t,this._onEvent),r.push({toType:e,dataMapping:n}),this._mappings[t]=r}},{key:"execute",value:function(n){var r=this;(this._mappings[n.type]||[]).forEach(function(t){var e=t.toType,t=t.dataMapping;r.context.trigger(e,r._build(n.data||{},t))})}},{key:"_build",value:function(n,r){var o=this,i=y({},n);return Object.keys(r).forEach(function(t){var e=r[t];switch(s(e)){case"string":0===e.indexOf(".")?(e=e.substr(1),"function"==typeof n[e]?i[t]=n[e].call():i[t]=n[e]):i[t]=e;break;case"function":i[t]=e.call(o,n,r);break;default:i[t]=e}}),i}},{key:"_onEvent",value:function(t){this.execute(t)}}]),e}(),v=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(r,g);var n=l(r);function r(t){var e;if(h(this,r),e=n.call(this,t),!t.trackEventType)throw new Error("Missing event type definition for event tracking.");return e}return b(r,[{key:"registerEvent",value:function(t,e){this.map(t,this.options.trackEventType,e)}}]),r}();function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=[25,50,75,100],m=function(){function e(t){var o,i,c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this.context=t.context,this.reset(),this._onScroll=(o=this._onScroll.bind(this),i=250,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=this;window.clearTimeout(c),c=setTimeout(function(){return o.apply(r,e)},i)}),window.addEventListener("scroll",this._onScroll)}var t,n,r;return t=e,(n=[{key:"destroy",value:function(){window.removeEventListener("scroll",this._onScroll)}},{key:"reset",value:function(){this._percentage=0,this._triggers=[].concat(w)}},{key:"update",value:function(){var e=this,t=document,n=t.documentElement,r=t.body,o=[],t=Math.max(n.clientHeight,window.innerHeight||0),n=Math.max(r.scrollHeight,r.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight,window.clientHeight||0),i=window.pageYOffset/(n-t)*100;i!==this._percentage&&(this._percentage=i,this._triggers.forEach(function(t){t<=i&&o.push(t)}),o.length&&(this._triggers=this._triggers.filter(function(t){return!o.includes(t)}),o.forEach(function(t){return e.context.trigger("scrolldepth:percentage",{percentage:t})})))}},{key:"_onScroll",value:function(){this.update()}}])&&d(t.prototype,n),r&&d(t,r),e}();function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var E=[["set","anonymizeIp",!0],["send","pageview"]],n="analytics:",j=n+"trackevent",S={nonInteraction:!0},x={nonInteraction:!1};function P(){return window.location.pathname}var A=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,(n=[{key:"run",value:function(){this._load(),this._setup()}},{key:"_load",value:function(){var t=document.createElement("script"),e=window.ga||function(){(e.q=e.q||[]).push(Array.apply(null,arguments))};e.l=+new Date,window.GoogleAnalyticsObject="ga",window.ga=e,t.async=!0,t.src="https://www.google-analytics.com/analytics.js",document.head.appendChild(t),e("create","UA-17711526-1","auto"),E.forEach(function(t){return e.apply(null,t)})}},{key:"_setup",value:function(){var e=this.context,t=new v({context:e,trackEventType:j});e.actions.add(j,a),e.values.add("analytics:registry",t),new m({context:e}),t.registerEvent("scrolldepth:percentage",{category:"scrolldepth",action:".percentage",label:P,value:function(t){return t.percentage<75?S:x}}),document.body.addEventListener("click",function(t){t=function(t,e){for(var n=_(document.querySelectorAll(e)),r=t;r;){if(n.includes(r))return r;r=r.parentElement}return null}(t.target,'[href^="http"]');t&&e.trigger(j,{category:"outbound",action:"click",label:t.href,value:S})})}}])&&O(e.prototype,n),r&&O(e,r),t}()}}]);
//# sourceMappingURL=analytics-3c3e5433415635a8e9e5.js.map