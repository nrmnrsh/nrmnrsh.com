!function(c){function t(t){for(var e,n,r=t[0],o=t[1],i=0,u=[];i<r.length;i++)n=r[i],a[n]&&u.push(a[n][0]),a[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(c[e]=o[e]);for(s&&s(t);u.length;)u.shift()()}var n={},a={0:0};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(i){var t=[],n=a[i];if(0!==n)if(n)t.push(n[2]);else{var e=new Promise(function(t,e){n=a[i]=[t,e]});t.push(n[2]=e);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(t){return o.p+""+({2:"analytics"}[t]||t)+"-"+{2:"2c88a807d841f43c7697"}[t]+".js"}(i),r=function(t){u.onerror=u.onload=null,clearTimeout(c);var e=a[i];if(0!==e){if(e){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+i+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,e[1](o)}a[i]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},o.m=c,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var s=r;o(o.s=0)}([function(t,e,n){"use strict";var r=n(1),o=n(2);n.p=window.app.static_url;var i=new r.Context;i.actions.add("app:run",[o.Action]),i.trigger("app:run"),window.nrmnrsh={context:i}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});function c(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:c(o,e,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0}var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=new WeakMap,f=function(){function t(){l(this,t),u.set(this,{})}return o(t,[{key:"on",value:function(t,e){var n=u.get(this);return n[t]=n[t]||[],n[t].push(e),this}},{key:"off",value:function(t,e){var n=u.get(this);return n[t]&&(n[t]=e?n[t].filter(function(t){return t!==e}):[]),this}},{key:"trigger",value:function(e){var n=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,t=u.get(this);return t[e]&&t[e].forEach(function(t){return t.call(null,{sender:n,type:e,data:r})}),this}}]),t}(),h=new WeakMap,v=function(){function n(t){l(this,n);var e={context:t,register:{}};h.set(this,e)}return o(n,[{key:"add",value:function(t,e){return h.get(this).register[t]=e,this}},{key:"remove",value:function(t){var e=h.get(this).register;return e[t]=void 0,delete e[t],this}},{key:"get",value:function(t){return h.get(this).register[t]}},{key:"has",value:function(t){return!!this.get(t)}}]),n}(),p=function(t){function u(r){l(this,u);var t=i(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,r)),e=h.get(t),o=e.register;return e.onAction=function(n){var t=n.type,e=o[t];e&&[].concat(e).forEach(function(t){var e=new t;e.context=r,e.event=n,e.run()})},t}return s(u,v),o(u,[{key:"add",value:function(t,e){var n=h.get(this),r=n.context,o=n.onAction,i=this.get(t);return i||r.on(t,o),e=(i||[]).concat(e),c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"add",this).call(this,t,e)}},{key:"remove",value:function(t,e){var n=this.get(t);if(n&&n.length){if(!e)return c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"remove",this).call(this,t);if(e instanceof Array||(e=[e]),e.forEach(function(t){for(var e=n.indexOf(t);-1<e;)n.splice(e,1),e=n.indexOf(t)}),0===n.length)return c(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"remove",this).call(this,t)}return this}}]),u}(),y=function(t){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;l(this,r);var e=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this)),n={actions:new p(e),values:new v(e),options:t};return t&&t.history&&(n.history=[]),h.set(e,n),e}return s(r,f),o(r,[{key:"trigger",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=this.history;return n&&n.push({type:t,data:e}),c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"trigger",this).call(this,t,e)}},{key:"flushHistory",value:function(){var t=this.history;t&&t.splice(0,t.length)}},{key:"actions",get:function(){return h.get(this).actions}},{key:"values",get:function(){return h.get(this).values}},{key:"history",get:function(){return h.get(this).history||null}}]),r}();function d(t){return"boolean"==typeof t&&!t}var g=function(){function t(){l(this,t)}return o(t,[{key:"run",value:function(){var o=this,i=function(t){var e=t.settings;if(!e||"object"!==(void 0===e?"undefined":r(e)))throw new Error("Define settings object");if(!e.view)throw new Error("Define a view");if(!e.selector)throw new Error("Define a selector");if(!e.namespace)throw new Error("Define a namespace");return e}(this),u=this.context,t=this.event.data,c=u.values.get(i.namespace)||[],e=t&&t.root?t.root:document.body,n=void 0;d(this.beforeAll())||0!==(n=e.querySelectorAll(i.selector)).length&&(n.forEach(function(e,t){if(!c.some(function(t){return t.el==e})){var n=a({el:e,context:u},i.params),r=null;d(o.beforeEach(n,e,t))||((r=new i.view(n)).render(),d(o.afterEach(r,e,t))||c.push(r))}}),0<c.length&&u.values.add(i.namespace,c),this.afterAll(c))}},{key:"beforeAll",value:function(){}},{key:"beforeEach",value:function(){}},{key:"afterEach",value:function(){}},{key:"afterAll",value:function(){}},{key:"settings",get:function(){return null}}]),t}();var b=function(){function t(){l(this,t),this._onIntersect=this._onIntersect.bind(this)}return o(t,[{key:"run",value:function(){var t=function(t){var e=t.settings;if(!e||"object"!==(void 0===e?"undefined":r(e)))throw new Error("Define settings object");if(!e.selector)throw new Error("Define a selector");return e}(this);this._lookup(t.selector)}},{key:"_lookup",value:function(t){var e=this,n=this.event.data,r=(n&&n.root?n.root:document.body).querySelectorAll(t);0!==r.length&&("complete"===document.readyState?this._setup(r):window.addEventListener("load",function(){return e._setup(r)},{once:!0}))}},{key:"_setup",value:function(t){window.IntersectionObserver?this._observe(t):this._fetch()}},{key:"_observe",value:function(t){var e=this;this._observer=new window.IntersectionObserver(this._onIntersect,this.observerSettings),t.forEach(function(t){return e._observer.observe(t)})}},{key:"_disconnect",value:function(){this._observer.disconnect(),this._observer=null}},{key:"_fetch",value:function(){var n=this,r=this.event;this.import.then(function(t){var e=t.Action||t.default;if(!e)throw new Error("Module must export Action or default");if("function"!=typeof e.prototype.run)throw new Error("Module must be an Action");n.context.actions.add(r.type,e).remove(r.type,n.constructor),n._execute(e)}).catch(function(t){throw n.context.trigger(n.event.type+":error",{error:t}),t})}},{key:"_execute",value:function(t){var e=new t;e.context=this.context,e.event=this.event,e.run()}},{key:"_onIntersect",value:function(t){t.some(function(t){return t.isIntersecting})&&(this._disconnect(),this._fetch())}},{key:"settings",get:function(){return null}},{key:"import",get:function(){return null}},{key:"observerSettings",get:function(){return{rootMargin:"0px",threshold:[0,.5,1]}}}]),t}(),_=function(t){function n(t){l(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.options=t,e.context=t.context,e.el=t.el,e}return s(n,f),o(n,[{key:"render",value:function(){return this}},{key:"destroy",value:function(){return this.options=null,this.context=null,this.el=null,this}}]),n}();e.Context=y,e.EventEmitter=f,e.Initialize=g,e.InitializeLazy=b,e.View=_},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();e.Action=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"run",value:function(){var t=navigator.doNotTrack||navigator.msDoNotTrack||window.doNotTrack;"1"!==t&&"yes"!==t?"complete"===document.readyState?this._fetch():(this._onLoad=this._onLoad.bind(this),window.addEventListener("load",this._onLoad)):this._disconnect()}},{key:"_fetch",value:function(){this.import.then(this._execute.bind(this))}},{key:"_disconnect",value:function(){this.context.actions.remove(this.event.type,this.constructor)}},{key:"_execute",value:function(t){var e=t.Action||t.default,n=new e,r=this.context,o=this.event;this._disconnect(),r.actions.add(o.type,e),n.context=r,n.event=o,n.run()}},{key:"_onLoad",value:function(){window.removeEventListener("load",this._onLoad),this._fetch()}},{key:"import",get:function(){return n.e(2).then(n.t.bind(null,4,7))}}]),t}()}]);
//# sourceMappingURL=app.pkg.js.map