/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"./app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"analytics":"analytics","content-footer":"content-footer","vendors~logrocket":"vendors~logrocket","logrocket":"logrocket"}[chunkId]||chunkId) + "-" + {"analytics":"fae7624a04e8e25f393c","content-footer":"e911f2a44313796c8ecd","vendors~logrocket":"d7010821b1946695ac09","logrocket":"8d5665a4bcd29fac3c06"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/pacto.model/dist/pacto.model.esm.js":
/*!***********************************************************************************************************!*\
  !*** /Users/nrmnrsh/Projects/GitHub/nrmnrsh/nrmnrsh.com/node_modules/pacto.model/dist/pacto.model.esm.js ***!
  \***********************************************************************************************************/
/*! exports provided: Collection, Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var pacto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pacto */ "../../node_modules/pacto/dist/pacto.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var __refs$1 = new WeakMap();

var Model = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Model, _EventEmitter);

  var _super = _createSuper(Model);

  function Model() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Model);

    _this = _super.call(this);
    props = _objectSpread(_objectSpread({}, _this.defaults), props);
    var handler = {
      set: function set(target, prop, value) {
        var isChanged = target[prop] !== value;
        target[prop] = value;

        if (isChanged) {
          _this.trigger('change', {
            prop: prop,
            value: value
          });
        }

        return true;
      }
    },
        proxy = new Proxy(props, handler);

    __refs$1.set(_assertThisInitialized(_this), proxy);

    return _this;
  }

  _createClass(Model, [{
    key: "defaults",
    get: function get() {
      return null;
    }
  }, {
    key: "props",
    get: function get() {
      return __refs$1.get(this);
    }
  }]);

  return Model;
}(pacto__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]);

var __refs = new WeakMap();

var Collection = /*#__PURE__*/function (_EventEmitter2) {
  _inherits(Collection, _EventEmitter2);

  var _super2 = _createSuper(Collection);

  function Collection() {
    var _this2;

    var models = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Collection);

    _this2 = _super2.call(this);

    var enshureIsModel = function enshureIsModel(model) {
      return model instanceof Model ? model : new _this2.Model(model);
    },
        handler = {
      get: function get(target, property) {
        var method = target[property];

        if (typeof method === 'function') {
          return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            var isChanged = false,
                result;

            switch (property) {
              case 'pop':
              case 'reverse':
              case 'shift':
              case 'sort':
                isChanged = true;
                break;

              case 'fill':
                isChanged = true;
                args[0] = enshureIsModel(args[0]);
                break;

              case 'push':
              case 'unshift':
                isChanged = true;
                args = args.map(enshureIsModel);
                break;

              case 'splice':
                isChanged = true;
                args = args.map(function (arg, index) {
                  return index > 1 ? enshureIsModel(arg) : arg;
                });
                break;
            }

            result = method.apply(target, args);

            if (isChanged) {
              _this2.trigger('change', {
                method: property
              });
            }

            return result;
          };
        }

        return method;
      }
    },
        proxy = new Proxy(models.map(enshureIsModel), handler);

    __refs.set(_assertThisInitialized(_this2), proxy);

    return _this2;
  }

  _createClass(Collection, [{
    key: "Model",
    get: function get() {
      return Model;
    }
  }, {
    key: "models",
    get: function get() {
      return __refs.get(this);
    }
  }]);

  return Collection;
}(pacto__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]);



/***/ }),

/***/ "../../node_modules/pacto/dist/pacto.esm.js":
/*!***********************************************************************************************!*\
  !*** /Users/nrmnrsh/Projects/GitHub/nrmnrsh/nrmnrsh.com/node_modules/pacto/dist/pacto.esm.js ***!
  \***********************************************************************************************/
/*! exports provided: Context, EventEmitter, Initialize, InitializeLazy, View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return EventEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Initialize", function() { return Initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeLazy", function() { return InitializeLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __refs$1 = new WeakMap();

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    __refs$1.set(this, {});
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(type, callback) {
      var refs = __refs$1.get(this);

      refs[type] = refs[type] || [];
      refs[type].push(callback);
      return this;
    }
  }, {
    key: "off",
    value: function off(type, callback) {
      var refs = __refs$1.get(this);

      if (!refs[type]) {
        return this;
      }

      if (callback) {
        refs[type] = refs[type].filter(function (cb) {
          return cb !== callback;
        });
      } else {
        refs[type] = [];
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(type) {
      var _this = this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var refs = __refs$1.get(this);

      refs[type] && refs[type].forEach(function (callback) {
        return callback.call(null, {
          sender: _this,
          type: type,
          data: data
        });
      });
      return this;
    }
  }]);

  return EventEmitter;
}();

var __refs = new WeakMap();

var __Resolver = /*#__PURE__*/function () {
  function __Resolver(context) {
    _classCallCheck(this, __Resolver);

    var register = {},
        refs = {
      context: context,
      register: register
    };

    __refs.set(this, refs);
  }

  _createClass(__Resolver, [{
    key: "add",
    value: function add(namespace, value) {
      var _refs$get = __refs.get(this),
          register = _refs$get.register;

      register[namespace] = value;
      return this;
    }
  }, {
    key: "remove",
    value: function remove(namespace) {
      var _refs$get2 = __refs.get(this),
          register = _refs$get2.register;

      register[namespace] = undefined;
      delete register[namespace];
      return this;
    }
  }, {
    key: "get",
    value: function get(namespace) {
      var _refs$get3 = __refs.get(this),
          register = _refs$get3.register;

      return register[namespace];
    }
  }, {
    key: "has",
    value: function has(namespace) {
      return !!this.get(namespace);
    }
  }]);

  return __Resolver;
}();

var __Actions = /*#__PURE__*/function (_Resolver) {
  _inherits(__Actions, _Resolver);

  var _super = _createSuper(__Actions);

  function __Actions(context) {
    var _this2;

    _classCallCheck(this, __Actions);

    _this2 = _super.call(this, context);

    var refs = __refs.get(_assertThisInitialized(_this2)),
        register = refs.register;

    refs.onAction = function (event) {
      var type = event.type,
          actions = register[type];

      if (actions) {
        [].concat(actions).forEach(function (Action) {
          var action = new Action();
          action.context = context;
          action.event = event;
          action.run();
        });
      }
    };

    return _this2;
  }

  _createClass(__Actions, [{
    key: "add",
    value: function add(type, actions) {
      var refs = __refs.get(this),
          context = refs.context,
          onAction = refs.onAction,
          registered = this.get(type);

      if (!registered) {
        context.on(type, onAction);
      }

      actions = (registered || []).concat(actions);
      return _get(_getPrototypeOf(__Actions.prototype), "add", this).call(this, type, actions);
    }
  }, {
    key: "remove",
    value: function remove(type, actions) {
      var registered = this.get(type);

      if (registered && registered.length) {
        if (!actions) {
          return _get(_getPrototypeOf(__Actions.prototype), "remove", this).call(this, type);
        }

        if (!(actions instanceof Array)) {
          actions = [actions];
        }

        actions.forEach(function (action) {
          var index = registered.indexOf(action);

          while (index > -1) {
            registered.splice(index, 1);
            index = registered.indexOf(action);
          }
        });

        if (registered.length === 0) {
          return _get(_getPrototypeOf(__Actions.prototype), "remove", this).call(this, type);
        }
      }

      return this;
    }
  }]);

  return __Actions;
}(__Resolver);

var Context = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Context, _EventEmitter);

  var _super2 = _createSuper(Context);

  function Context() {
    var _this3;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Context);

    _this3 = _super2.call(this);
    var refs = {
      actions: new __Actions(_assertThisInitialized(_this3)),
      values: new __Resolver(_assertThisInitialized(_this3)),
      options: options
    };

    if (options && options.history) {
      // All triggered events will be stored here until they are flushed
      // away using flushHistroy():
      refs.history = [];
    }

    __refs.set(_assertThisInitialized(_this3), refs);

    return _this3;
  }

  _createClass(Context, [{
    key: "actions",
    get: function get() {
      return __refs.get(this).actions;
    }
  }, {
    key: "values",
    get: function get() {
      return __refs.get(this).values;
    }
  }, {
    key: "history",
    get: function get() {
      return __refs.get(this).history || null;
    }
  }, {
    key: "trigger",
    value: function trigger(type) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var history = this.history;
      history && history.push({
        type: type,
        data: data
      });
      return _get(_getPrototypeOf(Context.prototype), "trigger", this).call(this, type, data);
    }
  }, {
    key: "flushHistory",
    value: function flushHistory() {
      var history = this.history;
      history && history.splice(0, history.length);
    }
  }]);

  return Context;
}(EventEmitter);

function __isFalse(value) {
  return typeof value === 'boolean' && !value;
}

function __getSettings$1(instance) {
  var settings = instance.settings;

  if (!settings || _typeof(settings) !== 'object') {
    throw new Error('Define settings object');
  }

  if (!settings.view) {
    throw new Error('Define a view');
  }

  if (!settings.selector) {
    throw new Error('Define a selector');
  }

  if (!settings.namespace) {
    throw new Error('Define a namespace');
  }

  return settings;
}

var Initialize = /*#__PURE__*/function () {
  function Initialize() {
    _classCallCheck(this, Initialize);
  }

  _createClass(Initialize, [{
    key: "settings",
    get: function get() {
      return null;
    }
  }, {
    key: "run",
    value: function run() {
      var _this4 = this;

      var settings = __getSettings$1(this),
          context = this.context,
          event = this.event,
          data = event.data,
          views = context.values.get(settings.namespace) || [],
          root = data && data.root ? data.root : document.body;

      var result, elements;
      result = this.beforeAll();

      if (__isFalse(result)) {
        return;
      }

      elements = root.querySelectorAll(settings.selector);

      if (elements.length === 0) {
        return;
      }

      elements.forEach(function (el, index) {
        if (views.some(function (view) {
          return view.el == el;
        })) {
          return;
        }

        var options = _objectSpread({
          el: el,
          context: context
        }, settings.params);

        var view = null;
        result = _this4.beforeEach(options, el, index);

        if (__isFalse(result)) {
          return;
        }

        view = new settings.view(options);
        view.render();
        result = _this4.afterEach(view, el, index);

        if (__isFalse(result)) {
          return;
        }

        views.push(view);
      });

      if (views.length > 0) {
        context.values.add(settings.namespace, views);
      }

      this.afterAll(views);
    }
  }, {
    key: "beforeAll",
    value: function beforeAll() {// Overwrite this...
    }
  }, {
    key: "beforeEach",
    value: function beforeEach()
    /* options, el, index */
    {// Overwrite this...
    }
  }, {
    key: "afterEach",
    value: function afterEach()
    /* view, el, index */
    {// Overwrite this...
    }
  }, {
    key: "afterAll",
    value: function afterAll()
    /* views */
    {// Overwrite this...
    }
  }]);

  return Initialize;
}();

function __getSettings(instance) {
  var settings = instance.settings;

  if (!settings || _typeof(settings) !== 'object') {
    throw new Error('Define settings object');
  }

  if (!settings.selector) {
    throw new Error('Define a selector');
  }

  return settings;
}

var InitializeLazy = /*#__PURE__*/function () {
  function InitializeLazy() {
    _classCallCheck(this, InitializeLazy);

    this._onIntersect = this._onIntersect.bind(this);
  }

  _createClass(InitializeLazy, [{
    key: "settings",
    get: function get() {
      return null;
    }
  }, {
    key: "import",
    get: function get() {
      return null;
    }
  }, {
    key: "observerSettings",
    get: function get() {
      return {
        rootMargin: '0px',
        threshold: [0, 0.5, 1]
      };
    }
  }, {
    key: "run",
    value: function run() {
      var settings = __getSettings(this);

      this._lookup(settings.selector);
    }
  }, {
    key: "_lookup",
    value: function _lookup(selector) {
      var _this5 = this;

      var event = this.event,
          data = event.data,
          root = data && data.root ? data.root : document.body,
          elements = root.querySelectorAll(selector);

      if (elements.length === 0) {
        return;
      }

      if (document.readyState === 'complete') {
        this._setup(elements);
      } else {
        window.addEventListener('load', function () {
          return _this5._setup(elements);
        }, {
          once: true
        });
      }
    }
  }, {
    key: "_setup",
    value: function _setup(elements) {
      if (window.IntersectionObserver) {
        this._observe(elements);
      } else {
        this._fetch();
      }
    }
  }, {
    key: "_observe",
    value: function _observe(elements) {
      var _this6 = this;

      this._observer = new window.IntersectionObserver(this._onIntersect, this.observerSettings);
      elements.forEach(function (element) {
        return _this6._observer.observe(element);
      });
    }
  }, {
    key: "_disconnect",
    value: function _disconnect() {
      this._observer.disconnect();

      this._observer = null;
    }
  }, {
    key: "_fetch",
    value: function _fetch() {
      var _this7 = this;

      var event = this.event;
      this["import"].then(function (module) {
        var Action = module.Action || module["default"];

        if (!Action) {
          throw new Error('Module must export Action or default');
        }

        if (!(typeof Action.prototype.run === 'function')) {
          throw new Error('Module must be an Action');
        } // Replace the proxy action with the loaded action


        _this7.context.actions.add(event.type, Action).remove(event.type, _this7.constructor); // Execute the current action:


        _this7._execute(Action);
      })["catch"](function (error) {
        _this7.context.trigger(_this7.event.type + ':error', {
          error: error
        });

        throw error;
      });
    }
  }, {
    key: "_execute",
    value: function _execute(Action) {
      var action = new Action();
      action.context = this.context;
      action.event = this.event;
      action.run();
    }
  }, {
    key: "_onIntersect",
    value: function _onIntersect(entries) {
      var isVisible = entries.some(function (entry) {
        return entry.isIntersecting;
      });

      if (isVisible) {
        this._disconnect();

        this._fetch();
      }
    }
  }]);

  return InitializeLazy;
}();

var View = /*#__PURE__*/function (_EventEmitter2) {
  _inherits(View, _EventEmitter2);

  var _super3 = _createSuper(View);

  function View(options) {
    var _this8;

    _classCallCheck(this, View);

    _this8 = _super3.call(this);
    _this8.options = options;
    _this8.context = options.context;
    _this8.el = options.el;
    return _this8;
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.options = null;
      this.context = null;
      this.el = null;
      return this;
    }
  }]);

  return View;
}(EventEmitter);



/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "../../node_modules/what-input/dist/what-input.js":
/*!*****************************************************************************************************!*\
  !*** /Users/nrmnrsh/Projects/GitHub/nrmnrsh/nrmnrsh.com/node_modules/what-input/dist/what-input.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.10
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports) {
      'use strict';

      module.exports = function () {
        /*
         * bail out if there is no document or window
         * (i.e. in a node/non-DOM environment)
         *
         * Return a stubbed API instead
         */
        if (typeof document === 'undefined' || typeof window === 'undefined') {
          return {
            // always return "initial" because no interaction will ever be detected
            ask: function ask() {
              return 'initial';
            },
            // always return null
            element: function element() {
              return null;
            },
            // no-op
            ignoreKeys: function ignoreKeys() {},
            // no-op
            specificKeys: function specificKeys() {},
            // no-op
            registerOnChange: function registerOnChange() {},
            // no-op
            unRegisterOnChange: function unRegisterOnChange() {}
          };
        }
        /*
         * variables
         */
        // cache document.documentElement


        var docElem = document.documentElement; // currently focused dom element

        var currentElement = null; // last used input type

        var currentInput = 'initial'; // last used input intent

        var currentIntent = currentInput; // UNIX timestamp of current event

        var currentTimestamp = Date.now(); // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`

        var shouldPersist = 'false'; // form input types

        var formInputs = ['button', 'input', 'select', 'textarea']; // empty array for holding callback functions

        var functionList = []; // list of modifier keys commonly used with the mouse and
        // can be safely ignored to prevent false keyboard detection

        var ignoreMap = [16, // shift
        17, // control
        18, // alt
        91, // Windows key / left Apple cmd
        93 // Windows menu / right Apple cmd
        ];
        var specificMap = []; // mapping of events to input types

        var inputMap = {
          keydown: 'keyboard',
          keyup: 'keyboard',
          mousedown: 'mouse',
          mousemove: 'mouse',
          MSPointerDown: 'pointer',
          MSPointerMove: 'pointer',
          pointerdown: 'pointer',
          pointermove: 'pointer',
          touchstart: 'touch',
          touchend: 'touch' // boolean: true if the page is being scrolled

        };
        var isScrolling = false; // store current mouse position

        var mousePos = {
          x: null,
          y: null // map of IE 10 pointer events

        };
        var pointerMap = {
          2: 'touch',
          3: 'touch',
          // treat pen like touch
          4: 'mouse' // check support for passive event listeners

        };
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('test', null, opts);
        } catch (e) {} // fail silently

        /*
         * set up
         */


        var setUp = function setUp() {
          // add correct mouse wheel event mapping to `inputMap`
          inputMap[detectWheel()] = 'mouse';
          addListeners();
        };
        /*
         * events
         */


        var addListeners = function addListeners() {
          // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
          // can only demonstrate potential, but not actual, interaction
          // and are treated separately
          var options = supportsPassive ? {
            passive: true
          } : false;
          document.addEventListener('DOMContentLoaded', setPersist); // pointer events (mouse, pen, touch)

          if (window.PointerEvent) {
            window.addEventListener('pointerdown', setInput);
            window.addEventListener('pointermove', setIntent);
          } else if (window.MSPointerEvent) {
            window.addEventListener('MSPointerDown', setInput);
            window.addEventListener('MSPointerMove', setIntent);
          } else {
            // mouse events
            window.addEventListener('mousedown', setInput);
            window.addEventListener('mousemove', setIntent); // touch events

            if ('ontouchstart' in window) {
              window.addEventListener('touchstart', setInput, options);
              window.addEventListener('touchend', setInput);
            }
          } // mouse wheel


          window.addEventListener(detectWheel(), setIntent, options); // keyboard events

          window.addEventListener('keydown', setInput);
          window.addEventListener('keyup', setInput); // focus events

          window.addEventListener('focusin', setElement);
          window.addEventListener('focusout', clearElement);
        }; // checks if input persistence should happen and
        // get saved state from session storage if true (defaults to `false`)


        var setPersist = function setPersist() {
          shouldPersist = !(docElem.getAttribute('data-whatpersist') || document.body.getAttribute('data-whatpersist') === 'false');

          if (shouldPersist) {
            // check for session variables and use if available
            try {
              if (window.sessionStorage.getItem('what-input')) {
                currentInput = window.sessionStorage.getItem('what-input');
              }

              if (window.sessionStorage.getItem('what-intent')) {
                currentIntent = window.sessionStorage.getItem('what-intent');
              }
            } catch (e) {// fail silently
            }
          } // always run these so at least `initial` state is set


          doUpdate('input');
          doUpdate('intent');
        }; // checks conditions before updating new input


        var setInput = function setInput(event) {
          var eventKey = event.which;
          var value = inputMap[event.type];

          if (value === 'pointer') {
            value = pointerType(event);
          }

          var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;
          var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;
          var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch'; // prevent touch detection from being overridden by event execution order

          if (validateTouch(value)) {
            shouldUpdate = false;
          }

          if (shouldUpdate && currentInput !== value) {
            currentInput = value;
            persistInput('input', currentInput);
            doUpdate('input');
          }

          if (shouldUpdate && currentIntent !== value) {
            // preserve intent for keyboard interaction with form fields
            var activeElem = document.activeElement;
            var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

            if (notFormInput) {
              currentIntent = value;
              persistInput('intent', currentIntent);
              doUpdate('intent');
            }
          }
        }; // updates the doc and `inputTypes` array with new input


        var doUpdate = function doUpdate(which) {
          docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);
          fireFunctions(which);
        }; // updates input intent for `mousemove` and `pointermove`


        var setIntent = function setIntent(event) {
          var value = inputMap[event.type];

          if (value === 'pointer') {
            value = pointerType(event);
          } // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove


          detectScrolling(event); // only execute if scrolling isn't happening

          if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
            currentIntent = value;
            persistInput('intent', currentIntent);
            doUpdate('intent');
          }
        };

        var setElement = function setElement(event) {
          if (!event.target.nodeName) {
            // If nodeName is undefined, clear the element
            // This can happen if click inside an <svg> element.
            clearElement();
            return;
          }

          currentElement = event.target.nodeName.toLowerCase();
          docElem.setAttribute('data-whatelement', currentElement);

          if (event.target.classList && event.target.classList.length) {
            docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
          }
        };

        var clearElement = function clearElement() {
          currentElement = null;
          docElem.removeAttribute('data-whatelement');
          docElem.removeAttribute('data-whatclasses');
        };

        var persistInput = function persistInput(which, value) {
          if (shouldPersist) {
            try {
              window.sessionStorage.setItem('what-' + which, value);
            } catch (e) {// fail silently
            }
          }
        };
        /*
         * utilities
         */


        var pointerType = function pointerType(event) {
          if (typeof event.pointerType === 'number') {
            return pointerMap[event.pointerType];
          } else {
            // treat pen like touch
            return event.pointerType === 'pen' ? 'touch' : event.pointerType;
          }
        }; // prevent touch detection from being overridden by event execution order


        var validateTouch = function validateTouch(value) {
          var timestamp = Date.now();
          var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;
          currentTimestamp = timestamp;
          return touchIsValid;
        }; // detect version of mouse wheel event to use
        // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event


        var detectWheel = function detectWheel() {
          var wheelType = null; // Modern browsers support "wheel"

          if ('onwheel' in document.createElement('div')) {
            wheelType = 'wheel';
          } else {
            // Webkit and IE support at least "mousewheel"
            // or assume that remaining browsers are older Firefox
            wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
          }

          return wheelType;
        }; // runs callback functions


        var fireFunctions = function fireFunctions(type) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].type === type) {
              functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
            }
          }
        }; // finds matching element in an object


        var objPos = function objPos(match) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].fn === match) {
              return i;
            }
          }
        };

        var detectScrolling = function detectScrolling(event) {
          if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
            isScrolling = false;
            mousePos.x = event.screenX;
            mousePos.y = event.screenY;
          } else {
            isScrolling = true;
          }
        }; // manual version of `closest()`


        var checkClosest = function checkClosest(elem, tag) {
          var ElementPrototype = window.Element.prototype;

          if (!ElementPrototype.matches) {
            ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
          }

          if (!ElementPrototype.closest) {
            do {
              if (elem.matches(tag)) {
                return elem;
              }

              elem = elem.parentElement || elem.parentNode;
            } while (elem !== null && elem.nodeType === 1);

            return null;
          } else {
            return elem.closest(tag);
          }
        };
        /*
         * init
         */
        // don't start script unless browser cuts the mustard
        // (also passes if polyfills are used)


        if ('addEventListener' in window && Array.prototype.indexOf) {
          setUp();
        }
        /*
         * api
         */


        return {
          // returns string: the current input type
          // opt: 'intent'|'input'
          // 'input' (default): returns the same value as the `data-whatinput` attribute
          // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
          ask: function ask(opt) {
            return opt === 'intent' ? currentIntent : currentInput;
          },
          // returns string: the currently focused element or null
          element: function element() {
            return currentElement;
          },
          // overwrites ignored keys with provided array
          ignoreKeys: function ignoreKeys(arr) {
            ignoreMap = arr;
          },
          // overwrites specific char keys to update on
          specificKeys: function specificKeys(arr) {
            specificMap = arr;
          },
          // attach functions to input and intent "events"
          // funct: function to fire on change
          // eventType: 'input'|'intent'
          registerOnChange: function registerOnChange(fn, eventType) {
            functionList.push({
              fn: fn,
              type: eventType || 'input'
            });
          },
          unRegisterOnChange: function unRegisterOnChange(fn) {
            var position = objPos(fn);

            if (position || position === 0) {
              functionList.splice(position, 1);
            }
          },
          clearStorage: function clearStorage() {
            window.sessionStorage.clear();
          }
        };
      }();
      /***/

    }
    /******/
    ])
  );
});

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! what-input */ "../../node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pacto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pacto */ "../../node_modules/pacto/dist/pacto.esm.js");
/* harmony import */ var components_analytics_actions_InitializeLazy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/analytics/actions/InitializeLazy */ "./components/analytics/actions/InitializeLazy.js");
/* harmony import */ var components_footer_actions_InitializeLazy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer/actions/InitializeLazy */ "./components/footer/actions/InitializeLazy.js");
/* harmony import */ var components_logrocket_actions_InitializeLazy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logrocket/actions/InitializeLazy */ "./components/logrocket/actions/InitializeLazy.js");
/* harmony import */ var components_serviceworker_actions_Initialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/serviceworker/actions/Initialize */ "./components/serviceworker/actions/Initialize.js");
/* harmony import */ var components_privacy_actions_Initialize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/privacy/actions/Initialize */ "./components/privacy/actions/Initialize.js");
__webpack_require__.p = window.app.staticURL; // eslint-disable-line no-undef








var context = new pacto__WEBPACK_IMPORTED_MODULE_1__["Context"]();
context.actions.add('app:run', [// Privacy first! This should always be the case but here we also require this
// to be executed first. This allows access from other components...
components_privacy_actions_Initialize__WEBPACK_IMPORTED_MODULE_6__["Action"], components_analytics_actions_InitializeLazy__WEBPACK_IMPORTED_MODULE_2__["Action"], components_footer_actions_InitializeLazy__WEBPACK_IMPORTED_MODULE_3__["Action"], components_logrocket_actions_InitializeLazy__WEBPACK_IMPORTED_MODULE_4__["Action"], components_serviceworker_actions_Initialize__WEBPACK_IMPORTED_MODULE_5__["Action"]]);
context.trigger('app:run'); // Expose:

window.nrmnrsh = {
  context: context
};

/***/ }),

/***/ "./components/analytics/actions/InitializeLazy.js":
/*!********************************************************!*\
  !*** ./components/analytics/actions/InitializeLazy.js ***!
  \********************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var generic_actions_InitializeLazyWhenLoadedWithConsent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! generic/actions/InitializeLazyWhenLoadedWithConsent */ "./generic/actions/InitializeLazyWhenLoadedWithConsent.js");
/* harmony import */ var components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/privacy/shared/config */ "./components/privacy/shared/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Action = /*#__PURE__*/function (_Initialize) {
  _inherits(Action, _Initialize);

  var _super = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super.call(this, components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["CONSENT_ANALYTICS"]);
  }

  _createClass(Action, [{
    key: "import",
    get: function get() {
      return __webpack_require__.e(/*! import() | analytics */ "analytics").then(__webpack_require__.bind(null, /*! components/analytics/actions/Initialize */ "./components/analytics/actions/Initialize.js"));
    }
  }, {
    key: "run",
    value: function run() {
      // Pay attention to do not track header of user
      // Chrome: chrome://settings/?search=Do+Not+Track
      var doNotTrack = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack;

      if (doNotTrack === '1' || doNotTrack === 'yes') {
        this.disconnect();
        return;
      }

      _get(_getPrototypeOf(Action.prototype), "run", this).call(this);
    }
  }]);

  return Action;
}(generic_actions_InitializeLazyWhenLoadedWithConsent__WEBPACK_IMPORTED_MODULE_0__["Action"]);

/***/ }),

/***/ "./components/footer/actions/InitializeLazy.js":
/*!*****************************************************!*\
  !*** ./components/footer/actions/InitializeLazy.js ***!
  \*****************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var pacto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pacto */ "../../node_modules/pacto/dist/pacto.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Action = /*#__PURE__*/function (_InitializeLazy) {
  _inherits(Action, _InitializeLazy);

  var _super = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super.apply(this, arguments);
  }

  _createClass(Action, [{
    key: "settings",
    get: function get() {
      return {
        selector: '.content-footer'
      };
    }
  }, {
    key: "import",
    get: function get() {
      return __webpack_require__.e(/*! import() | content-footer */ "content-footer").then(__webpack_require__.bind(null, /*! components/footer/actions/Initialize */ "./components/footer/actions/Initialize.js"));
    }
  }]);

  return Action;
}(pacto__WEBPACK_IMPORTED_MODULE_0__["InitializeLazy"]);

/***/ }),

/***/ "./components/logrocket/actions/InitializeLazy.js":
/*!********************************************************!*\
  !*** ./components/logrocket/actions/InitializeLazy.js ***!
  \********************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var generic_actions_InitializeLazyWhenLoadedWithConsent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! generic/actions/InitializeLazyWhenLoadedWithConsent */ "./generic/actions/InitializeLazyWhenLoadedWithConsent.js");
/* harmony import */ var components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/privacy/shared/config */ "./components/privacy/shared/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Action = /*#__PURE__*/function (_Initialize) {
  _inherits(Action, _Initialize);

  var _super = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super.call(this, components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["CONSENT_LOGROCKET"]);
  }

  _createClass(Action, [{
    key: "import",
    get: function get() {
      return Promise.all(/*! import() | logrocket */[__webpack_require__.e("vendors~logrocket"), __webpack_require__.e("logrocket")]).then(__webpack_require__.bind(null, /*! components/logrocket/actions/Initialize.js */ "./components/logrocket/actions/Initialize.js"));
    }
  }, {
    key: "run",
    value: function run() {
      // Pay attention to do not track header of user
      // Chrome: chrome://settings/?search=Do+Not+Track
      var doNotTrack = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack;

      if (doNotTrack === '1' || doNotTrack === 'yes') {
        this.disconnect();
        return;
      }

      _get(_getPrototypeOf(Action.prototype), "run", this).call(this);
    }
  }]);

  return Action;
}(generic_actions_InitializeLazyWhenLoadedWithConsent__WEBPACK_IMPORTED_MODULE_0__["Action"]);

/***/ }),

/***/ "./components/privacy/actions/Change.js":
/*!**********************************************!*\
  !*** ./components/privacy/actions/Change.js ***!
  \**********************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/privacy/shared/config */ "./components/privacy/shared/config.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Action = /*#__PURE__*/function () {
  function Action() {
    _classCallCheck(this, Action);
  }

  _createClass(Action, [{
    key: "run",
    value: function run() {
      var model = this.context.values.get(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_0__["NAMESPACE_MODEL"]);

      var _ref = this.event.data || {},
          props = _ref.props;

      Object.entries(props || {}).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        model.props[key] = value;
      });
      model.save();
      var visible = model.hasMissing;
      this.context.trigger(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_0__["EVENT_VISIBILITY"], {
        visible: visible
      });
    }
  }]);

  return Action;
}();

/***/ }),

/***/ "./components/privacy/actions/Initialize.js":
/*!**************************************************!*\
  !*** ./components/privacy/actions/Initialize.js ***!
  \**************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var pacto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pacto */ "../../node_modules/pacto/dist/pacto.esm.js");
/* harmony import */ var components_privacy_actions_Change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/privacy/actions/Change */ "./components/privacy/actions/Change.js");
/* harmony import */ var components_privacy_actions_Visibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/privacy/actions/Visibility */ "./components/privacy/actions/Visibility.js");
/* harmony import */ var components_privacy_models_Consents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/privacy/models/Consents */ "./components/privacy/models/Consents.js");
/* harmony import */ var components_privacy_views_Consents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/privacy/views/Consents */ "./components/privacy/views/Consents.js");
/* harmony import */ var components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/privacy/shared/config */ "./components/privacy/shared/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var Action = /*#__PURE__*/function (_Initialize) {
  _inherits(Action, _Initialize);

  var _super = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super.apply(this, arguments);
  }

  _createClass(Action, [{
    key: "settings",
    get: function get() {
      return {
        selector: '.privacy',
        namespace: components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE_VIEW"],
        view: components_privacy_views_Consents__WEBPACK_IMPORTED_MODULE_4__["Consents"]
      };
    }
  }, {
    key: "_model",
    get: function get() {
      var _this = this;

      return this.context.values.get(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE_MODEL"]) || function () {
        var model = new components_privacy_models_Consents__WEBPACK_IMPORTED_MODULE_3__["Consents"]();
        model.load();

        _this.context.values.add(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE_MODEL"], model);

        return model;
      }();
    }
  }, {
    key: "beforeAll",
    value: function beforeAll() {
      // Assuming that if there is already a model defined, the action has been
      // run at least once before...
      if (this.context.values.has(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE_MODEL"])) {
        return;
      }

      this.context.actions.add(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_5__["EVENT_CHANGE"], components_privacy_actions_Change__WEBPACK_IMPORTED_MODULE_1__["Action"]);
      this.context.actions.add(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_5__["EVENT_VISIBILITY"], components_privacy_actions_Visibility__WEBPACK_IMPORTED_MODULE_2__["Action"]);
    }
  }, {
    key: "beforeEach",
    value: function beforeEach(options) {
      // Merge in model into options:
      options.model = this._model;
    }
  }, {
    key: "afterAll",
    value: function afterAll() {
      var visible = this._model.hasMissing;
      this.context.trigger(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_5__["EVENT_VISIBILITY"], {
        visible: visible
      });
    }
  }]);

  return Action;
}(pacto__WEBPACK_IMPORTED_MODULE_0__["Initialize"]);

/***/ }),

/***/ "./components/privacy/actions/Visibility.js":
/*!**************************************************!*\
  !*** ./components/privacy/actions/Visibility.js ***!
  \**************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/privacy/shared/config */ "./components/privacy/shared/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Action = /*#__PURE__*/function () {
  function Action() {
    _classCallCheck(this, Action);
  }

  _createClass(Action, [{
    key: "run",
    value: function run() {
      if (!this.context.values.has(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_0__["NAMESPACE_VIEW"])) {
        return;
      }

      var _ref = this.event.data || {},
          _ref$visible = _ref.visible,
          visible = _ref$visible === void 0 ? true : _ref$visible;

      var views = this.context.values.get(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_0__["NAMESPACE_VIEW"]);
      views.forEach(function (view) {
        view.visible = visible;
      });
    }
  }]);

  return Action;
}();

/***/ }),

/***/ "./components/privacy/models/Consents.js":
/*!***********************************************!*\
  !*** ./components/privacy/models/Consents.js ***!
  \***********************************************/
/*! exports provided: Consents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consents", function() { return Consents; });
/* harmony import */ var pacto_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pacto.model */ "../../node_modules/pacto.model/dist/pacto.model.esm.js");
/* harmony import */ var components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/privacy/shared/config */ "./components/privacy/shared/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var STORAGE_KEY = 'nrmnrsh:privacy:consents:v1';
var Consents = /*#__PURE__*/function (_Model) {
  _inherits(Consents, _Model);

  var _super = _createSuper(Consents);

  function Consents() {
    _classCallCheck(this, Consents);

    return _super.apply(this, arguments);
  }

  _createClass(Consents, [{
    key: "defaults",
    get: function get() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["CONSENT_ANALYTICS"], undefined), _defineProperty(_ref, components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["CONSENT_LOGROCKET"], undefined), _ref;
    }
  }, {
    key: "hasMissing",
    get: function get() {
      return Object.values(this.props).filter(function (consent) {
        return consent === undefined;
      }).length > 0;
    }
  }, {
    key: "load",
    value: function load() {
      var _this = this;

      try {
        var data = window.localStorage.getItem(STORAGE_KEY);
        var parsed = JSON.parse(data) || {};
        Object.entries(parsed).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              value = _ref3[1];

          _this.props[key] = value;
        });
      } catch (error) {
        window.console.error('Consent load error', error);
      }
    }
  }, {
    key: "save",
    value: function save() {
      try {
        var data = JSON.stringify(this.props);
        window.localStorage.setItem(STORAGE_KEY, data);
      } catch (error) {
        window.console.error('Consent save error', error);
      }
    }
  }]);

  return Consents;
}(pacto_model__WEBPACK_IMPORTED_MODULE_2__["Model"]);

/***/ }),

/***/ "./components/privacy/shared/config.js":
/*!*********************************************!*\
  !*** ./components/privacy/shared/config.js ***!
  \*********************************************/
/*! exports provided: EVENT_CHANGE, EVENT_VISIBILITY, NAMESPACE_MODEL, NAMESPACE_VIEW, CONSENT_ANALYTICS, CONSENT_LOGROCKET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_CHANGE", function() { return EVENT_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_VISIBILITY", function() { return EVENT_VISIBILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE_MODEL", function() { return NAMESPACE_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMESPACE_VIEW", function() { return NAMESPACE_VIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSENT_ANALYTICS", function() { return CONSENT_ANALYTICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSENT_LOGROCKET", function() { return CONSENT_LOGROCKET; });
var EVENT_CHANGE = 'privacy:change';
var EVENT_VISIBILITY = 'privacy:visibility';
var NAMESPACE_MODEL = 'privacy:consents';
var NAMESPACE_VIEW = 'privacy:views';
var CONSENT_ANALYTICS = 'analytics';
var CONSENT_LOGROCKET = 'logrocket';

/***/ }),

/***/ "./components/privacy/views/Consents.js":
/*!**********************************************!*\
  !*** ./components/privacy/views/Consents.js ***!
  \**********************************************/
/*! exports provided: Consents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consents", function() { return Consents; });
/* harmony import */ var pacto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pacto */ "../../node_modules/pacto/dist/pacto.esm.js");
/* harmony import */ var components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/privacy/shared/config */ "./components/privacy/shared/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SELECTOR_DIALOG = '[role="dialog"]';
var SELECTOR_CHECKBOXES = '[type="checkbox"][name="privacy"]';
var SELECTOR_BUTTON_ALLOW_ALL = '.allow-all';
var SELECTOR_BUTTON_ALLOW_SELECTION = '.allow-selection';
var TEMPLATE = "\n\t<div\n\t\trole=\"dialog\"\n\t\taria-modal=\"true\"\n\t\taria-hidden=\"true\"\n\t\taria-labelledby=\"privacy-title\"\n\t\taria-describedby=\"privacy-description\"\n\t>\n\t\t<h2 id=\"privacy-title\">Enable services</h2>\n\t\t<div id=\"privacy-description\">\n\t\t\t<div class=\"description\">\n\t\t\t\t<p>\n\t\t\t\t\tThis site is using different services that allow me to enhance and\n\t\t\t\t\tanalyze the usage of this page. They might uses cookies to work properly...\n\t\t\t\t</p>\n\t\t\t\t<button role=\"button\" class=\"allow-all\">Enable all</button>\n\t\t\t</div>\n\n\t\t\t<details>\n\t\t\t\t<summary>Customize services</summary>\n\n\t\t\t\t<p>\n\t\t\t\t\tI believe preventing cookie usage is not the only way to protect\n\t\t\t\t\tyour privacy. Instead, you will have full control over all the services\n\t\t\t\t\tthat are loaded to control any data exchange to foreign services.\n\t\t\t\t</p>\n\n\t\t\t\t<form class=\"details\">\n\t\t\t\t\t<dl>\n\t\t\t\t\t\t<dt>\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"privacy\" value=\"".concat(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["CONSENT_ANALYTICS"], "\" />\n\t\t\t\t\t\t\t\tGoogle Analytics\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\tGoogle Analytics is a web analytics service offered by Google that\n\t\t\t\t\t\t\ttracks and reports website traffic. I track page views and clicks\n\t\t\t\t\t\t\ton links. The service is running using the \"anonymizeIp\" setting.\n\t\t\t\t\t\t\tRead more about <a\n\t\t\t\t\t\t\t\thref=\"https://policies.google.com/privacy?hl=en#footnote-link-info\"\n\t\t\t\t\t\t\t\trel=\"noopener noreferrer\"\n\t\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t>data privacy</a>\n\t\t\t\t\t\t\tfrom Google Analytics.\n\t\t\t\t\t\t</dd>\n\n\t\t\t\t\t\t<dt>\n\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"privacy\" value=\"").concat(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["CONSENT_LOGROCKET"], "\" />\n\t\t\t\t\t\t\t\tLogrocket\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\tLogRocket is a cloud-based and on-premise logging and session replay\n\t\t\t\t\t\t\tplatform for JavaScript applications, which helps me track UX problems\n\t\t\t\t\t\t\tand analyze as well as remediate the root causes of bugs.\n\t\t\t\t\t\t\tRead more about <a\n\t\t\t\t\t\t\t\thref=\"https://logrocket.com/privacy/\"\n\t\t\t\t\t\t\t\trel=\"noopener noreferrer\"\n\t\t\t\t\t\t\t\ttarget=\"_blank\"\n\t\t\t\t\t\t\t>privacy policy</a>\n\t\t\t\t\t\t\tfrom LogRocket.\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl>\n\n\t\t\t\t\t<button role=\"button\" class=\"allow-selection\">Use selection</button>\n\t\t\t\t</form>\n\t\t\t</details>\n\t\t</div>\n\t</div>\n");
var Consents = /*#__PURE__*/function (_View) {
  _inherits(Consents, _View);

  var _super = _createSuper(Consents);

  function Consents(options) {
    var _this;

    _classCallCheck(this, Consents);

    _this = _super.call(this, options);
    _this._model = options.model;
    _this._onAllowAll = _this._onAllowAll.bind(_assertThisInitialized(_this));
    _this._onAllowSelection = _this._onAllowSelection.bind(_assertThisInitialized(_this));
    _this._onConsentChange = _this._onConsentChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Consents, [{
    key: "visible",
    get: function get() {
      return this._dialog.getAttribute('aria-hidden') !== 'true';
    },
    set: function set(value) {
      this._dialog.setAttribute('aria-hidden', !value);
    }
  }, {
    key: "render",
    value: function render() {
      var el = this.el;
      el.innerHTML = TEMPLATE;

      this._model.on('change', this._onConsentChange);

      this._dialog = el.querySelector(SELECTOR_DIALOG);
      this._checkboxes = _toConsumableArray(el.querySelectorAll(SELECTOR_CHECKBOXES));
      this._buttonAll = el.querySelector(SELECTOR_BUTTON_ALLOW_ALL);

      this._buttonAll.addEventListener('click', this._onAllowAll);

      this._buttonSelection = el.querySelector(SELECTOR_BUTTON_ALLOW_SELECTION);

      this._buttonSelection.addEventListener('click', this._onAllowSelection);

      this.update();
      return this;
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      this._checkboxes.forEach(function (checkbox) {
        var name = checkbox.value;
        checkbox.checked = !!_this2._model.props[name];
      });
    }
  }, {
    key: "_onAllowAll",
    value: function _onAllowAll(event) {
      event.preventDefault();
      var props = {};

      this._checkboxes.forEach(function (checkbox) {
        var name = checkbox.value;
        props[name] = true;
      });

      this.context.trigger(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["EVENT_CHANGE"], {
        props: props
      });
    }
  }, {
    key: "_onAllowSelection",
    value: function _onAllowSelection(event) {
      event.preventDefault();
      var props = {};

      this._checkboxes.forEach(function (checkbox) {
        var name = checkbox.value;
        props[name] = checkbox.checked;
      });

      this.context.trigger(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["EVENT_CHANGE"], {
        props: props
      });
    }
  }, {
    key: "_onConsentChange",
    value: function _onConsentChange() {
      this.update();
    }
  }]);

  return Consents;
}(pacto__WEBPACK_IMPORTED_MODULE_0__["View"]);

/***/ }),

/***/ "./components/serviceworker/actions/Initialize.js":
/*!********************************************************!*\
  !*** ./components/serviceworker/actions/Initialize.js ***!
  \********************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Action = /*#__PURE__*/function () {
  function Action() {
    _classCallCheck(this, Action);
  }

  _createClass(Action, [{
    key: "run",
    value: function run() {
      if ('serviceWorker' in navigator) {
        if (document.readyState === 'complete') {
          this._register();
        } else {
          window.addEventListener('load', this._register.bind(this));
        }
      } else {
        this.context.trigger('serviceworker:register:unsupported');
      }
    }
  }, {
    key: "_register",
    value: function _register() {
      var context = this.context;
      navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      }).then(function (registration) {
        return context.trigger('serviceworker:register:success', {
          registration: registration
        });
      })["catch"](function (error) {
        return context.trigger('serviceworker:register:failed', {
          error: error
        });
      });
    }
  }]);

  return Action;
}();

/***/ }),

/***/ "./generic/actions/InitializeLazyWhenLoaded.js":
/*!*****************************************************!*\
  !*** ./generic/actions/InitializeLazyWhenLoaded.js ***!
  \*****************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Action = /*#__PURE__*/function () {
  function Action() {
    _classCallCheck(this, Action);
  }

  _createClass(Action, [{
    key: "import",
    get: function get() {
      throw new Error('Undefined dynamic import');
    }
  }, {
    key: "run",
    value: function run() {
      if (document.readyState === 'complete') {
        this.fetch();
      } else {
        this._onLoad = this._onLoad.bind(this);
        window.addEventListener('load', this._onLoad);
      }
    }
  }, {
    key: "fetch",
    value: function fetch() {
      this["import"].then(this.execute.bind(this));
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.context.actions.remove(this.event.type, this.constructor);
    }
  }, {
    key: "execute",
    value: function execute(module) {
      var Module = module.Action || module["default"],
          action = new Module(),
          context = this.context,
          event = this.event;
      this.disconnect();
      context.actions.add(event.type, Module);
      action.context = context;
      action.event = event;
      action.run();
    }
  }, {
    key: "_onLoad",
    value: function _onLoad() {
      window.removeEventListener('load', this._onLoad);
      this.fetch();
    }
  }]);

  return Action;
}();

/***/ }),

/***/ "./generic/actions/InitializeLazyWhenLoadedWithConsent.js":
/*!****************************************************************!*\
  !*** ./generic/actions/InitializeLazyWhenLoadedWithConsent.js ***!
  \****************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var _InitializeLazyWhenLoaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitializeLazyWhenLoaded */ "./generic/actions/InitializeLazyWhenLoaded.js");
/* harmony import */ var components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/privacy/shared/config */ "./components/privacy/shared/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Action = /*#__PURE__*/function (_InitializeLazyWhenLo) {
  _inherits(Action, _InitializeLazyWhenLo);

  var _super = _createSuper(Action);

  function Action(consentName) {
    var _this;

    _classCallCheck(this, Action);

    _this = _super.call(this);

    if (!consentName) {
      throw new Error('Missing consent name.');
    }

    _this._consentName = consentName;
    _this._onChangeConsent = _this._onChangeConsent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Action, [{
    key: "consents",
    get: function get() {
      return this.context.values.get(components_privacy_shared_config__WEBPACK_IMPORTED_MODULE_1__["NAMESPACE_MODEL"]);
    }
  }, {
    key: "isAllowed",
    get: function get() {
      return !!this.consents.props[this._consentName];
    }
  }, {
    key: "run",
    value: function run() {
      // If the user has not given or has not given yet a consent for analytics,
      // wait for a change and initialize again later...
      if (!this.isAllowed) {
        this.consents.on('change', this._onChangeConsent);
        return;
      }

      _get(_getPrototypeOf(Action.prototype), "run", this).call(this);
    }
  }, {
    key: "_onChangeConsent",
    value: function _onChangeConsent(event) {
      var data = event.data;
      var prop = data.prop;

      if (prop !== this._consentName) {
        return;
      } // We are disable listening for further change events and re-run the the
      // initialization process. If the consent is false we loop as long as the
      // user will give a consent...


      this.consents.off('change', this._onChangeConsent);
      this.run();
    }
  }]);

  return Action;
}(_InitializeLazyWhenLoaded__WEBPACK_IMPORTED_MODULE_0__["Action"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ucm1ucnNoL1Byb2plY3RzL0dpdEh1Yi9ucm1ucnNoL25ybW5yc2guY29tL25vZGVfbW9kdWxlcy9wYWN0by5tb2RlbC9kaXN0L3BhY3RvLm1vZGVsLmVzbS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL25ybW5yc2gvUHJvamVjdHMvR2l0SHViL25ybW5yc2gvbnJtbnJzaC5jb20vbm9kZV9tb2R1bGVzL3BhY3RvL2Rpc3QvcGFjdG8uZXNtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9ucm1ucnNoL1Byb2plY3RzL0dpdEh1Yi9ucm1ucnNoL25ybW5yc2guY29tL25vZGVfbW9kdWxlcy93aGF0LWlucHV0L2Rpc3Qvd2hhdC1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbmFseXRpY3MvYWN0aW9ucy9Jbml0aWFsaXplTGF6eS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvb3Rlci9hY3Rpb25zL0luaXRpYWxpemVMYXp5LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9ncm9ja2V0L2FjdGlvbnMvSW5pdGlhbGl6ZUxhenkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcml2YWN5L2FjdGlvbnMvQ2hhbmdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJpdmFjeS9hY3Rpb25zL0luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcml2YWN5L2FjdGlvbnMvVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ByaXZhY3kvbW9kZWxzL0NvbnNlbnRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJpdmFjeS9zaGFyZWQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJpdmFjeS92aWV3cy9Db25zZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlcnZpY2V3b3JrZXIvYWN0aW9ucy9Jbml0aWFsaXplLmpzIiwid2VicGFjazovLy8uL2dlbmVyaWMvYWN0aW9ucy9Jbml0aWFsaXplTGF6eVdoZW5Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vZ2VuZXJpYy9hY3Rpb25zL0luaXRpYWxpemVMYXp5V2hlbkxvYWRlZFdpdGhDb25zZW50LmpzIl0sIm5hbWVzIjpbIl9fcmVmcyQxIiwiV2Vha01hcCIsIk1vZGVsIiwicHJvcHMiLCJkZWZhdWx0cyIsImhhbmRsZXIiLCJzZXQiLCJ0YXJnZXQiLCJwcm9wIiwidmFsdWUiLCJpc0NoYW5nZWQiLCJ0cmlnZ2VyIiwicHJveHkiLCJQcm94eSIsImdldCIsIkV2ZW50RW1pdHRlciIsIl9fcmVmcyIsIkNvbGxlY3Rpb24iLCJtb2RlbHMiLCJlbnNodXJlSXNNb2RlbCIsIm1vZGVsIiwicHJvcGVydHkiLCJtZXRob2QiLCJhcmdzIiwicmVzdWx0IiwibWFwIiwiYXJnIiwiaW5kZXgiLCJhcHBseSIsInR5cGUiLCJjYWxsYmFjayIsInJlZnMiLCJwdXNoIiwiZmlsdGVyIiwiY2IiLCJkYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJzZW5kZXIiLCJfX1Jlc29sdmVyIiwiY29udGV4dCIsInJlZ2lzdGVyIiwibmFtZXNwYWNlIiwidW5kZWZpbmVkIiwiX19BY3Rpb25zIiwib25BY3Rpb24iLCJldmVudCIsImFjdGlvbnMiLCJjb25jYXQiLCJBY3Rpb24iLCJhY3Rpb24iLCJydW4iLCJyZWdpc3RlcmVkIiwib24iLCJsZW5ndGgiLCJBcnJheSIsImluZGV4T2YiLCJzcGxpY2UiLCJDb250ZXh0Iiwib3B0aW9ucyIsInZhbHVlcyIsImhpc3RvcnkiLCJfX2lzRmFsc2UiLCJfX2dldFNldHRpbmdzJDEiLCJpbnN0YW5jZSIsInNldHRpbmdzIiwiRXJyb3IiLCJ2aWV3Iiwic2VsZWN0b3IiLCJJbml0aWFsaXplIiwidmlld3MiLCJyb290IiwiZG9jdW1lbnQiLCJib2R5IiwiZWxlbWVudHMiLCJiZWZvcmVBbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJzb21lIiwicGFyYW1zIiwiYmVmb3JlRWFjaCIsInJlbmRlciIsImFmdGVyRWFjaCIsImFkZCIsImFmdGVyQWxsIiwiX19nZXRTZXR0aW5ncyIsIkluaXRpYWxpemVMYXp5IiwiX29uSW50ZXJzZWN0IiwiYmluZCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJfbG9va3VwIiwicmVhZHlTdGF0ZSIsIl9zZXR1cCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfb2JzZXJ2ZSIsIl9mZXRjaCIsIl9vYnNlcnZlciIsIm9ic2VydmVyU2V0dGluZ3MiLCJlbGVtZW50Iiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJ0aGVuIiwibW9kdWxlIiwicHJvdG90eXBlIiwicmVtb3ZlIiwiY29uc3RydWN0b3IiLCJfZXhlY3V0ZSIsImVycm9yIiwiZW50cmllcyIsImlzVmlzaWJsZSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJfZGlzY29ubmVjdCIsIlZpZXciLCJleHBvcnRzIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImwiLCJpIiwid2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJmYWN0b3J5IiwiZGVmaW5lIiwibW9kdWxlcyIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJpZCIsImxvYWRlZCIsIm0iLCJjIiwicCIsImFzayIsImlnbm9yZUtleXMiLCJzcGVjaWZpY0tleXMiLCJyZWdpc3Rlck9uQ2hhbmdlIiwidW5SZWdpc3Rlck9uQ2hhbmdlIiwiZG9jRWxlbSIsImRvY3VtZW50RWxlbWVudCIsImN1cnJlbnRFbGVtZW50IiwiY3VycmVudElucHV0IiwiY3VycmVudEludGVudCIsImN1cnJlbnRUaW1lc3RhbXAiLCJEYXRlIiwibm93Iiwic2hvdWxkUGVyc2lzdCIsImZvcm1JbnB1dHMiLCJmdW5jdGlvbkxpc3QiLCJpZ25vcmVNYXAiLCJzcGVjaWZpY01hcCIsImlucHV0TWFwIiwia2V5ZG93biIsImtleXVwIiwibW91c2Vkb3duIiwibW91c2Vtb3ZlIiwiTVNQb2ludGVyRG93biIsIk1TUG9pbnRlck1vdmUiLCJwb2ludGVyZG93biIsInBvaW50ZXJtb3ZlIiwidG91Y2hzdGFydCIsInRvdWNoZW5kIiwiaXNTY3JvbGxpbmciLCJtb3VzZVBvcyIsIngiLCJ5IiwicG9pbnRlck1hcCIsInN1cHBvcnRzUGFzc2l2ZSIsIm9wdHMiLCJlIiwic2V0VXAiLCJkZXRlY3RXaGVlbCIsImFkZExpc3RlbmVycyIsInBhc3NpdmUiLCJzZXRQZXJzaXN0IiwiUG9pbnRlckV2ZW50Iiwic2V0SW5wdXQiLCJzZXRJbnRlbnQiLCJNU1BvaW50ZXJFdmVudCIsInNldEVsZW1lbnQiLCJjbGVhckVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJkb1VwZGF0ZSIsImV2ZW50S2V5Iiwid2hpY2giLCJwb2ludGVyVHlwZSIsImlnbm9yZU1hdGNoIiwic3BlY2lmaWNNYXRjaCIsInNob3VsZFVwZGF0ZSIsInZhbGlkYXRlVG91Y2giLCJwZXJzaXN0SW5wdXQiLCJhY3RpdmVFbGVtIiwiYWN0aXZlRWxlbWVudCIsIm5vdEZvcm1JbnB1dCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJjaGVja0Nsb3Nlc3QiLCJzZXRBdHRyaWJ1dGUiLCJmaXJlRnVuY3Rpb25zIiwiZGV0ZWN0U2Nyb2xsaW5nIiwiY2xhc3NMaXN0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0SXRlbSIsInRpbWVzdGFtcCIsInRvdWNoSXNWYWxpZCIsIndoZWVsVHlwZSIsImNyZWF0ZUVsZW1lbnQiLCJvbm1vdXNld2hlZWwiLCJsZW4iLCJmbiIsIm9ialBvcyIsIm1hdGNoIiwic2NyZWVuWCIsInNjcmVlblkiLCJlbGVtIiwidGFnIiwiRWxlbWVudFByb3RvdHlwZSIsIkVsZW1lbnQiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsInBhcmVudE5vZGUiLCJub2RlVHlwZSIsIm9wdCIsImFyciIsImV2ZW50VHlwZSIsInBvc2l0aW9uIiwiY2xlYXJTdG9yYWdlIiwiY2xlYXIiLCJfX3dlYnBhY2tfcHVibGljX3BhdGhfXyIsImFwcCIsInN0YXRpY1VSTCIsIlByaXZhY3kiLCJBbmFseXRpY3MiLCJGb290ZXIiLCJMb2dyb2NrZXQiLCJTZXJ2aWNld29ya2VyIiwibnJtbnJzaCIsIkNPTlNFTlRfQU5BTFlUSUNTIiwiZG9Ob3RUcmFjayIsIm5hdmlnYXRvciIsIm1zRG9Ob3RUcmFjayIsIkNPTlNFTlRfTE9HUk9DS0VUIiwiTkFNRVNQQUNFX01PREVMIiwia2V5Iiwic2F2ZSIsInZpc2libGUiLCJoYXNNaXNzaW5nIiwiRVZFTlRfVklTSUJJTElUWSIsIk5BTUVTUEFDRV9WSUVXIiwiQ29uc2VudHNWaWV3IiwiQ29uc2VudHNNb2RlbCIsImxvYWQiLCJoYXMiLCJFVkVOVF9DSEFOR0UiLCJDaGFuZ2UiLCJWaXNpYmlsaXR5IiwiX21vZGVsIiwiU1RPUkFHRV9LRVkiLCJDb25zZW50cyIsImNvbnNlbnQiLCJsb2NhbFN0b3JhZ2UiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwic3RyaW5naWZ5IiwiU0VMRUNUT1JfRElBTE9HIiwiU0VMRUNUT1JfQ0hFQ0tCT1hFUyIsIlNFTEVDVE9SX0JVVFRPTl9BTExPV19BTEwiLCJTRUxFQ1RPUl9CVVRUT05fQUxMT1dfU0VMRUNUSU9OIiwiVEVNUExBVEUiLCJfb25BbGxvd0FsbCIsIl9vbkFsbG93U2VsZWN0aW9uIiwiX29uQ29uc2VudENoYW5nZSIsIl9kaWFsb2ciLCJpbm5lckhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiX2NoZWNrYm94ZXMiLCJfYnV0dG9uQWxsIiwiX2J1dHRvblNlbGVjdGlvbiIsInVwZGF0ZSIsImNoZWNrYm94IiwibmFtZSIsImNoZWNrZWQiLCJwcmV2ZW50RGVmYXVsdCIsIl9yZWdpc3RlciIsInNlcnZpY2VXb3JrZXIiLCJzY29wZSIsInJlZ2lzdHJhdGlvbiIsImZldGNoIiwiX29uTG9hZCIsImV4ZWN1dGUiLCJNb2R1bGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc2VudE5hbWUiLCJfY29uc2VudE5hbWUiLCJfb25DaGFuZ2VDb25zZW50IiwiY29uc2VudHMiLCJpc0FsbG93ZWQiLCJvZmYiLCJJbml0aWFsaXplTGF6eVdoZW5Mb2FkZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EseUNBQXlDLDBIQUEwSCw2QkFBNkIseUpBQXlKO1FBQ3pWOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQSxpQ0FBaUM7O1FBRWpDO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LENBQXNCOU4sSUFBdEIsK0JBQXhCO0FBUndCO0FBU3hCOztBQVhGO0FBQUE7QUFBQSxTQWFDLGVBQWU7QUFDZCxhQUFPLEtBQUtoRCxPQUFMLENBQWFvQixNQUFiLENBQW9COUMsR0FBcEIsQ0FBd0JrUCxnRkFBeEIsQ0FBUDtBQUNBO0FBZkY7QUFBQTtBQUFBLFNBaUJDLGVBQWdCO0FBQ2YsYUFBTyxDQUFDLENBQUMsS0FBS3VELFFBQUwsQ0FBY3BULEtBQWQsQ0FBb0IsS0FBS2tULFlBQXpCLENBQVQ7QUFDQTtBQW5CRjtBQUFBO0FBQUEsV0FxQkMsZUFBTTtBQUNMO0FBQ0E7QUFDQSxVQUFJLENBQUMsS0FBS0csU0FBVixFQUFxQjtBQUNwQixhQUFLRCxRQUFMLENBQWNsUSxFQUFkLENBQWlCLFFBQWpCLEVBQTJCLEtBQUtpUSxnQkFBaEM7QUFDQTtBQUNBOztBQUVEO0FBQ0E7QUE5QkY7QUFBQTtBQUFBLFdBZ0NDLDBCQUFpQnhRLEtBQWpCLEVBQXdCO0FBQUEsVUFDZlgsSUFEZSxHQUNOVyxLQURNLENBQ2ZYLElBRGU7QUFBQSxVQUVmM0IsSUFGZSxHQUVOMkIsSUFGTSxDQUVmM0IsSUFGZTs7QUFJdkIsVUFBSUEsSUFBSSxLQUFLLEtBQUs2UyxZQUFsQixFQUFnQztBQUMvQjtBQUNBLE9BTnNCLENBUXZCO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBS0UsUUFBTCxDQUFjRSxHQUFkLENBQWtCLFFBQWxCLEVBQTRCLEtBQUtILGdCQUFqQztBQUNBLFdBQUtuUSxHQUFMO0FBQ0E7QUE3Q0Y7O0FBQUE7QUFBQSxFQUE0QnVRLGdFQUE1QixFIiwiZmlsZSI6Ii4vYXBwLnBrZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiLi9hcHBcIjogMFxuIFx0fTtcblxuXG5cbiBcdC8vIHNjcmlwdCBwYXRoIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBqc29ucFNjcmlwdFNyYyhjaHVua0lkKSB7XG4gXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgKHtcImFuYWx5dGljc1wiOlwiYW5hbHl0aWNzXCIsXCJjb250ZW50LWZvb3RlclwiOlwiY29udGVudC1mb290ZXJcIixcInZlbmRvcnN+bG9ncm9ja2V0XCI6XCJ2ZW5kb3JzfmxvZ3JvY2tldFwiLFwibG9ncm9ja2V0XCI6XCJsb2dyb2NrZXRcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCItXCIgKyB7XCJhbmFseXRpY3NcIjpcImZhZTc2MjRhMDRlOGUyNWYzOTNjXCIsXCJjb250ZW50LWZvb3RlclwiOlwiZTkxMWYyYTQ0MzEzNzk2YzhlY2RcIixcInZlbmRvcnN+bG9ncm9ja2V0XCI6XCJkNzAxMDgyMWIxOTQ2Njk1YWMwOVwiLFwibG9ncm9ja2V0XCI6XCI4ZDU2NjVhNGJjZDI5ZmFjM2MwNlwifVtjaHVua0lkXSArIFwiLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC5qc1wiKTtcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ3BhY3RvJztcblxuY29uc3QgX19yZWZzJDEgPSBuZXcgV2Vha01hcCgpO1xuXG5cbmNsYXNzIE1vZGVsIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG5cdFx0c3VwZXIoKTtcblx0XHRwcm9wcyA9IHsuLi50aGlzLmRlZmF1bHRzLCAuLi5wcm9wc307XG5cblx0XHRjb25zdFxuXHRcdFx0aGFuZGxlciA9IHtcblx0XHRcdFx0c2V0OiAodGFyZ2V0LCBwcm9wLCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGlzQ2hhbmdlZCA9IHRhcmdldFtwcm9wXSAhPT0gdmFsdWU7XG5cdFx0XHRcdFx0dGFyZ2V0W3Byb3BdID0gdmFsdWU7XG5cblx0XHRcdFx0XHRpZiAoaXNDaGFuZ2VkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZScsIHtwcm9wLCB2YWx1ZX0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cHJveHkgPSBuZXcgUHJveHkocHJvcHMsIGhhbmRsZXIpXG5cdFx0O1xuXG5cdFx0X19yZWZzJDEuc2V0KHRoaXMsIHByb3h5KTtcblx0fVxuXG5cdGdldCBkZWZhdWx0cygpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGdldCBwcm9wcygpIHtcblx0XHRyZXR1cm4gX19yZWZzJDEuZ2V0KHRoaXMpO1xuXHR9XG5cbn1cblxuY29uc3QgX19yZWZzID0gbmV3IFdlYWtNYXAoKTtcblxuXG5jbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihtb2RlbHMgPSBbXSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRjb25zdFxuXHRcdFx0ZW5zaHVyZUlzTW9kZWwgPSAobW9kZWwpID0+XG5cdFx0XHRcdChtb2RlbCBpbnN0YW5jZW9mIE1vZGVsKSA/IG1vZGVsIDogbmV3IHRoaXMuTW9kZWwobW9kZWwpLFxuXHRcdFx0aGFuZGxlciA9IHtcblx0XHRcdFx0Z2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IG1ldGhvZCA9IHRhcmdldFtwcm9wZXJ0eV07XG5cblx0XHRcdFx0XHRpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuICguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxldFxuXHRcdFx0XHRcdFx0XHRcdGlzQ2hhbmdlZCA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdFxuXHRcdFx0XHRcdFx0XHQ7XG5cblx0XHRcdFx0XHRcdFx0c3dpdGNoIChwcm9wZXJ0eSkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3BvcCc6XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAncmV2ZXJzZSc6XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc2hpZnQnOlxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3NvcnQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0aXNDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnZmlsbCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRpc0NoYW5nZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0YXJnc1swXSA9IGVuc2h1cmVJc01vZGVsKGFyZ3NbMF0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0XHRjYXNlICdwdXNoJzpcblx0XHRcdFx0XHRcdFx0XHRjYXNlICd1bnNoaWZ0Jzpcblx0XHRcdFx0XHRcdFx0XHRcdGlzQ2hhbmdlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gYXJncy5tYXAoZW5zaHVyZUlzTW9kZWwpO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzcGxpY2UnOlxuXHRcdFx0XHRcdFx0XHRcdFx0aXNDaGFuZ2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBhcmdzLm1hcCgoYXJnLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KGluZGV4ID4gMSkgPyBlbnNodXJlSXNNb2RlbChhcmcpIDogYXJnKTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gbWV0aG9kLmFwcGx5KHRhcmdldCwgYXJncyk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKGlzQ2hhbmdlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlcignY2hhbmdlJywge21ldGhvZDogcHJvcGVydHl9KTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBtZXRob2Q7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRwcm94eSA9IG5ldyBQcm94eShtb2RlbHMubWFwKGVuc2h1cmVJc01vZGVsKSwgaGFuZGxlcilcblx0XHQ7XG5cblx0XHRfX3JlZnMuc2V0KHRoaXMsIHByb3h5KTtcblx0fVxuXG5cdGdldCBNb2RlbCgpIHtcblx0XHRyZXR1cm4gTW9kZWw7XG5cdH1cblxuXHRnZXQgbW9kZWxzKCkge1xuXHRcdHJldHVybiBfX3JlZnMuZ2V0KHRoaXMpO1xuXHR9XG5cbn1cblxuZXhwb3J0IHsgQ29sbGVjdGlvbiwgTW9kZWwgfTtcbiIsImNvbnN0IF9fcmVmcyQxID0gbmV3IFdlYWtNYXAoKTtcblxuXG5jbGFzcyBFdmVudEVtaXR0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdF9fcmVmcyQxLnNldCh0aGlzLCB7fSk7XG5cdH1cblxuXHRvbih0eXBlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IHJlZnMgPSBfX3JlZnMkMS5nZXQodGhpcyk7XG5cblx0XHRyZWZzW3R5cGVdID0gcmVmc1t0eXBlXSB8fCBbXTtcblx0XHRyZWZzW3R5cGVdLnB1c2goY2FsbGJhY2spO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRvZmYodHlwZSwgY2FsbGJhY2spIHtcblx0XHRjb25zdCByZWZzID0gX19yZWZzJDEuZ2V0KHRoaXMpO1xuXG5cdFx0aWYgKCFyZWZzW3R5cGVdKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdHJlZnNbdHlwZV0gPSByZWZzW3R5cGVdLmZpbHRlcihjYiA9PiBjYiAhPT0gY2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWZzW3R5cGVdID0gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0cmlnZ2VyKHR5cGUsIGRhdGEgPSBudWxsKSB7XG5cdFx0Y29uc3QgcmVmcyA9IF9fcmVmcyQxLmdldCh0aGlzKTtcblxuXHRcdHJlZnNbdHlwZV0gJiYgcmVmc1t0eXBlXS5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2suY2FsbChudWxsLCB7XG5cdFx0XHRzZW5kZXI6IHRoaXMsXG5cdFx0XHR0eXBlLFxuXHRcdFx0ZGF0YVxuXHRcdH0pKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cbn1cblxuY29uc3QgX19yZWZzID0gbmV3IFdlYWtNYXAoKTtcblxuXG5jbGFzcyBfX1Jlc29sdmVyIHtcblxuXHRjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG5cdFx0Y29uc3Rcblx0XHRcdHJlZ2lzdGVyID0ge30sXG5cdFx0XHRyZWZzID0ge1xuXHRcdFx0XHRjb250ZXh0LFxuXHRcdFx0XHRyZWdpc3RlclxuXHRcdFx0fVxuXHRcdDtcblxuXHRcdF9fcmVmcy5zZXQodGhpcywgcmVmcyk7XG5cdH1cblxuXHRhZGQobmFtZXNwYWNlLCB2YWx1ZSkge1xuXHRcdGNvbnN0IHtyZWdpc3Rlcn0gPSBfX3JlZnMuZ2V0KHRoaXMpO1xuXHRcdHJlZ2lzdGVyW25hbWVzcGFjZV0gPSB2YWx1ZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJlbW92ZShuYW1lc3BhY2UpIHtcblx0XHRjb25zdCB7cmVnaXN0ZXJ9ID0gX19yZWZzLmdldCh0aGlzKTtcblx0XHRyZWdpc3RlcltuYW1lc3BhY2VdID0gdW5kZWZpbmVkO1xuXHRcdGRlbGV0ZShyZWdpc3RlcltuYW1lc3BhY2VdKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldChuYW1lc3BhY2UpIHtcblx0XHRjb25zdCB7cmVnaXN0ZXJ9ID0gX19yZWZzLmdldCh0aGlzKTtcblx0XHRyZXR1cm4gcmVnaXN0ZXJbbmFtZXNwYWNlXTtcblx0fVxuXG5cdGhhcyhuYW1lc3BhY2UpIHtcblx0XHRyZXR1cm4gISF0aGlzLmdldChuYW1lc3BhY2UpO1xuXHR9XG5cbn1cblxuXG5jbGFzcyBfX0FjdGlvbnMgZXh0ZW5kcyBfX1Jlc29sdmVyIHtcblxuXHRjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG5cdFx0c3VwZXIoY29udGV4dCk7XG5cdFx0Y29uc3Rcblx0XHRcdHJlZnMgPSBfX3JlZnMuZ2V0KHRoaXMpLFxuXHRcdFx0e3JlZ2lzdGVyfSA9IHJlZnNcblx0XHQ7XG5cblx0XHRyZWZzLm9uQWN0aW9uID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRjb25zdFxuXHRcdFx0XHR7dHlwZX0gPSBldmVudCxcblx0XHRcdFx0YWN0aW9ucyA9IHJlZ2lzdGVyW3R5cGVdXG5cdFx0XHQ7XG5cblx0XHRcdGlmIChhY3Rpb25zKSB7XG5cdFx0XHRcdFtdLmNvbmNhdChhY3Rpb25zKS5mb3JFYWNoKChBY3Rpb24pID0+IHtcblx0XHRcdFx0XHR2YXIgYWN0aW9uID0gbmV3IEFjdGlvbigpO1xuXHRcdFx0XHRcdGFjdGlvbi5jb250ZXh0ID0gY29udGV4dDtcblx0XHRcdFx0XHRhY3Rpb24uZXZlbnQgPSBldmVudDtcblx0XHRcdFx0XHRhY3Rpb24ucnVuKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRhZGQodHlwZSwgYWN0aW9ucykge1xuXHRcdGNvbnN0XG5cdFx0XHRyZWZzID0gX19yZWZzLmdldCh0aGlzKSxcblx0XHRcdHtjb250ZXh0LCBvbkFjdGlvbn0gPSByZWZzLFxuXHRcdFx0cmVnaXN0ZXJlZCA9IHRoaXMuZ2V0KHR5cGUpXG5cdFx0O1xuXG5cdFx0aWYgKCFyZWdpc3RlcmVkKSB7XG5cdFx0XHRjb250ZXh0Lm9uKHR5cGUsIG9uQWN0aW9uKTtcblx0XHR9XG5cblx0XHRhY3Rpb25zID0gKHJlZ2lzdGVyZWQgfHwgW10pLmNvbmNhdChhY3Rpb25zKTtcblx0XHRyZXR1cm4gc3VwZXIuYWRkKHR5cGUsIGFjdGlvbnMpO1xuXHR9XG5cblx0cmVtb3ZlKHR5cGUsIGFjdGlvbnMpIHtcblx0XHRjb25zdCByZWdpc3RlcmVkID0gdGhpcy5nZXQodHlwZSk7XG5cblx0XHRpZiAocmVnaXN0ZXJlZCAmJiByZWdpc3RlcmVkLmxlbmd0aCkge1xuXHRcdFx0aWYgKCFhY3Rpb25zKSB7XG5cdFx0XHRcdHJldHVybiBzdXBlci5yZW1vdmUodHlwZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghKGFjdGlvbnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcblx0XHRcdFx0YWN0aW9ucyA9IFthY3Rpb25zXTtcblx0XHRcdH1cblxuXHRcdFx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcblx0XHRcdFx0bGV0IGluZGV4ID0gcmVnaXN0ZXJlZC5pbmRleE9mKGFjdGlvbik7XG5cdFx0XHRcdHdoaWxlIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0cmVnaXN0ZXJlZC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4ID0gcmVnaXN0ZXJlZC5pbmRleE9mKGFjdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAocmVnaXN0ZXJlZC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHN1cGVyLnJlbW92ZSh0eXBlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG59XG5cblxuY2xhc3MgQ29udGV4dCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucyA9IG51bGwpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Y29uc3QgcmVmcyA9IHtcblx0XHRcdGFjdGlvbnM6IG5ldyBfX0FjdGlvbnModGhpcyksXG5cdFx0XHR2YWx1ZXM6IG5ldyBfX1Jlc29sdmVyKHRoaXMpLFxuXHRcdFx0b3B0aW9uc1xuXHRcdH07XG5cblx0XHRpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhpc3RvcnkpIHtcblx0XHRcdC8vIEFsbCB0cmlnZ2VyZWQgZXZlbnRzIHdpbGwgYmUgc3RvcmVkIGhlcmUgdW50aWwgdGhleSBhcmUgZmx1c2hlZFxuXHRcdFx0Ly8gYXdheSB1c2luZyBmbHVzaEhpc3Ryb3koKTpcblx0XHRcdHJlZnMuaGlzdG9yeSA9IFtdO1xuXHRcdH1cblxuXHRcdF9fcmVmcy5zZXQodGhpcywgcmVmcyk7XG5cdH1cblxuXHRnZXQgYWN0aW9ucygpIHtcblx0XHRyZXR1cm4gX19yZWZzLmdldCh0aGlzKS5hY3Rpb25zO1xuXHR9XG5cblx0Z2V0IHZhbHVlcygpIHtcblx0XHRyZXR1cm4gX19yZWZzLmdldCh0aGlzKS52YWx1ZXM7XG5cdH1cblxuXHRnZXQgaGlzdG9yeSgpIHtcblx0XHRyZXR1cm4gX19yZWZzLmdldCh0aGlzKS5oaXN0b3J5IHx8IG51bGw7XG5cdH1cblxuXHR0cmlnZ2VyKHR5cGUsIGRhdGEgPSBudWxsKSB7XG5cdFx0Y29uc3Qge2hpc3Rvcnl9ID0gdGhpcztcblx0XHRoaXN0b3J5ICYmIGhpc3RvcnkucHVzaCh7dHlwZSwgZGF0YX0pO1xuXHRcdHJldHVybiBzdXBlci50cmlnZ2VyKHR5cGUsIGRhdGEpO1xuXHR9XG5cblx0Zmx1c2hIaXN0b3J5KCkge1xuXHRcdGNvbnN0IHtoaXN0b3J5fSA9IHRoaXM7XG5cdFx0aGlzdG9yeSAmJiBoaXN0b3J5LnNwbGljZSgwLCBoaXN0b3J5Lmxlbmd0aCk7XG5cdH1cblxufVxuXG5mdW5jdGlvbiBfX2lzRmFsc2UodmFsdWUpIHtcblx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICF2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX19nZXRTZXR0aW5ncyQxKGluc3RhbmNlKSB7XG5cdGNvbnN0IHNldHRpbmdzID0gaW5zdGFuY2Uuc2V0dGluZ3M7XG5cblx0aWYgKCFzZXR0aW5ncyB8fCB0eXBlb2Ygc2V0dGluZ3MgIT09ICdvYmplY3QnKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdEZWZpbmUgc2V0dGluZ3Mgb2JqZWN0Jyk7XG5cdH1cblxuXHRpZiAoIXNldHRpbmdzLnZpZXcpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RlZmluZSBhIHZpZXcnKTtcblx0fVxuXG5cdGlmICghc2V0dGluZ3Muc2VsZWN0b3IpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RlZmluZSBhIHNlbGVjdG9yJyk7XG5cdH1cblxuXHRpZiAoIXNldHRpbmdzLm5hbWVzcGFjZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRGVmaW5lIGEgbmFtZXNwYWNlJyk7XG5cdH1cblxuXHRyZXR1cm4gc2V0dGluZ3M7XG59XG5cblxuY2xhc3MgSW5pdGlhbGl6ZSB7XG5cblx0Z2V0IHNldHRpbmdzKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cnVuKCkge1xuXHRcdGNvbnN0XG5cdFx0XHRzZXR0aW5ncyA9IF9fZ2V0U2V0dGluZ3MkMSh0aGlzKSxcblx0XHRcdHtjb250ZXh0LCBldmVudH0gPSB0aGlzLFxuXHRcdFx0e2RhdGF9ID0gZXZlbnQsXG5cdFx0XHR2aWV3cyA9IGNvbnRleHQudmFsdWVzLmdldChzZXR0aW5ncy5uYW1lc3BhY2UpIHx8IFtdLFxuXHRcdFx0cm9vdCA9IGRhdGEgJiYgZGF0YS5yb290ID8gZGF0YS5yb290IDogZG9jdW1lbnQuYm9keVxuXHRcdDtcblxuXHRcdGxldCByZXN1bHQsIGVsZW1lbnRzO1xuXG5cdFx0cmVzdWx0ID0gdGhpcy5iZWZvcmVBbGwoKTtcblx0XHRpZiAoX19pc0ZhbHNlKHJlc3VsdCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbGVtZW50cyA9IHJvb3QucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5zZWxlY3Rvcik7XG5cdFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsZW1lbnRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKHZpZXdzLnNvbWUoKHZpZXcpID0+IHZpZXcuZWwgPT0gZWwpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3B0aW9ucyA9IHtlbCwgY29udGV4dCwgLi4uc2V0dGluZ3MucGFyYW1zfTtcblx0XHRcdGxldCB2aWV3ID0gbnVsbDtcblxuXHRcdFx0cmVzdWx0ID0gdGhpcy5iZWZvcmVFYWNoKG9wdGlvbnMsIGVsLCBpbmRleCk7XG5cdFx0XHRpZiAoX19pc0ZhbHNlKHJlc3VsdCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2aWV3ID0gbmV3IHNldHRpbmdzLnZpZXcob3B0aW9ucyk7XG5cdFx0XHR2aWV3LnJlbmRlcigpO1xuXG5cdFx0XHRyZXN1bHQgPSB0aGlzLmFmdGVyRWFjaCh2aWV3LCBlbCwgaW5kZXgpO1xuXHRcdFx0aWYgKF9faXNGYWxzZShyZXN1bHQpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmlld3MucHVzaCh2aWV3KTtcblx0XHR9KTtcblxuXHRcdGlmICh2aWV3cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb250ZXh0LnZhbHVlcy5hZGQoc2V0dGluZ3MubmFtZXNwYWNlLCB2aWV3cyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5hZnRlckFsbCh2aWV3cyk7XG5cdH1cblxuXHRiZWZvcmVBbGwoKSB7XG5cdFx0Ly8gT3ZlcndyaXRlIHRoaXMuLi5cblx0fVxuXG5cdGJlZm9yZUVhY2goLyogb3B0aW9ucywgZWwsIGluZGV4ICovKSB7XG5cdFx0Ly8gT3ZlcndyaXRlIHRoaXMuLi5cblx0fVxuXG5cdGFmdGVyRWFjaCgvKiB2aWV3LCBlbCwgaW5kZXggKi8pIHtcblx0XHQvLyBPdmVyd3JpdGUgdGhpcy4uLlxuXHR9XG5cblx0YWZ0ZXJBbGwoLyogdmlld3MgKi8pIHtcblx0XHQvLyBPdmVyd3JpdGUgdGhpcy4uLlxuXHR9XG5cbn1cblxuZnVuY3Rpb24gX19nZXRTZXR0aW5ncyhpbnN0YW5jZSkge1xuXHRjb25zdCBzZXR0aW5ncyA9IGluc3RhbmNlLnNldHRpbmdzO1xuXG5cdGlmICghc2V0dGluZ3MgfHwgdHlwZW9mIHNldHRpbmdzICE9PSAnb2JqZWN0Jykge1xuXHRcdHRocm93IG5ldyBFcnJvcignRGVmaW5lIHNldHRpbmdzIG9iamVjdCcpO1xuXHR9XG5cblx0aWYgKCFzZXR0aW5ncy5zZWxlY3Rvcikge1xuXHRcdHRocm93IG5ldyBFcnJvcignRGVmaW5lIGEgc2VsZWN0b3InKTtcblx0fVxuXG5cdHJldHVybiBzZXR0aW5ncztcbn1cblxuXG5jbGFzcyBJbml0aWFsaXplTGF6eSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fb25JbnRlcnNlY3QgPSB0aGlzLl9vbkludGVyc2VjdC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Z2V0IHNldHRpbmdzKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Z2V0IGltcG9ydCgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGdldCBvYnNlcnZlclNldHRpbmdzKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRyb290TWFyZ2luOiAnMHB4Jyxcblx0XHRcdHRocmVzaG9sZDogWzAsIDAuNSwgMV1cblx0XHR9O1xuXHR9XG5cblx0cnVuKCkge1xuXHRcdGNvbnN0IHNldHRpbmdzID0gX19nZXRTZXR0aW5ncyh0aGlzKTtcblx0XHR0aGlzLl9sb29rdXAoc2V0dGluZ3Muc2VsZWN0b3IpO1xuXHR9XG5cblx0X2xvb2t1cChzZWxlY3Rvcikge1xuXHRcdGNvbnN0XG5cdFx0XHR7ZXZlbnR9ID0gdGhpcyxcblx0XHRcdHtkYXRhfSA9IGV2ZW50LFxuXHRcdFx0cm9vdCA9IGRhdGEgJiYgZGF0YS5yb290ID8gZGF0YS5yb290IDogZG9jdW1lbnQuYm9keSxcblx0XHRcdGVsZW1lbnRzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuXHRcdDtcblxuXHRcdGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuXHRcdFx0dGhpcy5fc2V0dXAoZWxlbWVudHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHRoaXMuX3NldHVwKGVsZW1lbnRzKSwge29uY2U6IHRydWV9KTtcblx0XHR9XG5cdH1cblxuXHRfc2V0dXAoZWxlbWVudHMpIHtcblx0XHRpZiAod2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG5cdFx0XHR0aGlzLl9vYnNlcnZlKGVsZW1lbnRzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fZmV0Y2goKTtcblx0XHR9XG5cdH1cblxuXHRfb2JzZXJ2ZShlbGVtZW50cykge1xuXHRcdHRoaXMuX29ic2VydmVyID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLl9vbkludGVyc2VjdCwgdGhpcy5vYnNlcnZlclNldHRpbmdzKTtcblx0XHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpKTtcblx0fVxuXG5cdF9kaXNjb25uZWN0KCkge1xuXHRcdHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR0aGlzLl9vYnNlcnZlciA9IG51bGw7XG5cdH1cblxuXHRfZmV0Y2goKSB7XG5cdFx0Y29uc3Qge2V2ZW50fSA9IHRoaXM7XG5cblx0XHR0aGlzLmltcG9ydC50aGVuKChtb2R1bGUpID0+IHtcblx0XHRcdGNvbnN0IEFjdGlvbiA9IG1vZHVsZS5BY3Rpb24gfHwgbW9kdWxlLmRlZmF1bHQ7XG5cblx0XHRcdGlmICghQWN0aW9uKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kdWxlIG11c3QgZXhwb3J0IEFjdGlvbiBvciBkZWZhdWx0Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghKHR5cGVvZiBBY3Rpb24ucHJvdG90eXBlLnJ1biA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNb2R1bGUgbXVzdCBiZSBhbiBBY3Rpb24nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVwbGFjZSB0aGUgcHJveHkgYWN0aW9uIHdpdGggdGhlIGxvYWRlZCBhY3Rpb25cblx0XHRcdHRoaXMuY29udGV4dC5hY3Rpb25zXG5cdFx0XHRcdC5hZGQoZXZlbnQudHlwZSwgQWN0aW9uKVxuXHRcdFx0XHQucmVtb3ZlKGV2ZW50LnR5cGUsIHRoaXMuY29uc3RydWN0b3IpO1xuXG5cdFx0XHQvLyBFeGVjdXRlIHRoZSBjdXJyZW50IGFjdGlvbjpcblx0XHRcdHRoaXMuX2V4ZWN1dGUoQWN0aW9uKTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdHRoaXMuY29udGV4dC50cmlnZ2VyKHRoaXMuZXZlbnQudHlwZSArICc6ZXJyb3InLCB7ZXJyb3J9KTtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH0pO1xuXHR9XG5cblx0X2V4ZWN1dGUoQWN0aW9uKSB7XG5cdFx0Y29uc3QgYWN0aW9uID0gbmV3IEFjdGlvbigpO1xuXHRcdGFjdGlvbi5jb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXHRcdGFjdGlvbi5ldmVudCA9IHRoaXMuZXZlbnQ7XG5cdFx0YWN0aW9uLnJ1bigpO1xuXHR9XG5cblx0X29uSW50ZXJzZWN0KGVudHJpZXMpIHtcblx0XHRjb25zdCBpc1Zpc2libGUgPSBlbnRyaWVzLnNvbWUoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZyk7XG5cblx0XHRpZiAoaXNWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLl9kaXNjb25uZWN0KCk7XG5cdFx0XHR0aGlzLl9mZXRjaCgpO1xuXHRcdH1cblx0fVxuXG59XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5jb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0O1xuXHRcdHRoaXMuZWwgPSBvcHRpb25zLmVsO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLm9wdGlvbnMgPSBudWxsO1xuXHRcdHRoaXMuY29udGV4dCA9IG51bGw7XG5cdFx0dGhpcy5lbCA9IG51bGw7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxufVxuXG5leHBvcnQgeyBDb250ZXh0LCBFdmVudEVtaXR0ZXIsIEluaXRpYWxpemUsIEluaXRpYWxpemVMYXp5LCBWaWV3IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKipcbiAqIHdoYXQtaW5wdXQgLSBBIGdsb2JhbCB1dGlsaXR5IGZvciB0cmFja2luZyB0aGUgY3VycmVudCBpbnB1dCBtZXRob2QgKG1vdXNlLCBrZXlib2FyZCBvciB0b3VjaCkuXG4gKiBAdmVyc2lvbiB2NS4yLjEwXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vdGVuMXNldmVuL3doYXQtaW5wdXRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIndoYXRJbnB1dFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ3aGF0SW5wdXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wid2hhdElucHV0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge30sXG4vKioqKioqLyBcdFx0XHRpZDogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyBcdFx0fTtcblxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cblxuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdCAgLypcblx0ICAgKiBiYWlsIG91dCBpZiB0aGVyZSBpcyBubyBkb2N1bWVudCBvciB3aW5kb3dcblx0ICAgKiAoaS5lLiBpbiBhIG5vZGUvbm9uLURPTSBlbnZpcm9ubWVudClcblx0ICAgKlxuXHQgICAqIFJldHVybiBhIHN0dWJiZWQgQVBJIGluc3RlYWRcblx0ICAgKi9cblx0ICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuXHQgICAgcmV0dXJuIHtcblx0ICAgICAgLy8gYWx3YXlzIHJldHVybiBcImluaXRpYWxcIiBiZWNhdXNlIG5vIGludGVyYWN0aW9uIHdpbGwgZXZlciBiZSBkZXRlY3RlZFxuXHQgICAgICBhc2s6IGZ1bmN0aW9uIGFzaygpIHtcblx0ICAgICAgICByZXR1cm4gJ2luaXRpYWwnO1xuXHQgICAgICB9LFxuXG5cdCAgICAgIC8vIGFsd2F5cyByZXR1cm4gbnVsbFxuXHQgICAgICBlbGVtZW50OiBmdW5jdGlvbiBlbGVtZW50KCkge1xuXHQgICAgICAgIHJldHVybiBudWxsO1xuXHQgICAgICB9LFxuXG5cdCAgICAgIC8vIG5vLW9wXG5cdCAgICAgIGlnbm9yZUtleXM6IGZ1bmN0aW9uIGlnbm9yZUtleXMoKSB7fSxcblxuXHQgICAgICAvLyBuby1vcFxuXHQgICAgICBzcGVjaWZpY0tleXM6IGZ1bmN0aW9uIHNwZWNpZmljS2V5cygpIHt9LFxuXG5cdCAgICAgIC8vIG5vLW9wXG5cdCAgICAgIHJlZ2lzdGVyT25DaGFuZ2U6IGZ1bmN0aW9uIHJlZ2lzdGVyT25DaGFuZ2UoKSB7fSxcblxuXHQgICAgICAvLyBuby1vcFxuXHQgICAgICB1blJlZ2lzdGVyT25DaGFuZ2U6IGZ1bmN0aW9uIHVuUmVnaXN0ZXJPbkNoYW5nZSgpIHt9XG5cdCAgICB9O1xuXHQgIH1cblxuXHQgIC8qXG5cdCAgICogdmFyaWFibGVzXG5cdCAgICovXG5cblx0ICAvLyBjYWNoZSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblx0ICB2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHQgIC8vIGN1cnJlbnRseSBmb2N1c2VkIGRvbSBlbGVtZW50XG5cdCAgdmFyIGN1cnJlbnRFbGVtZW50ID0gbnVsbDtcblxuXHQgIC8vIGxhc3QgdXNlZCBpbnB1dCB0eXBlXG5cdCAgdmFyIGN1cnJlbnRJbnB1dCA9ICdpbml0aWFsJztcblxuXHQgIC8vIGxhc3QgdXNlZCBpbnB1dCBpbnRlbnRcblx0ICB2YXIgY3VycmVudEludGVudCA9IGN1cnJlbnRJbnB1dDtcblxuXHQgIC8vIFVOSVggdGltZXN0YW1wIG9mIGN1cnJlbnQgZXZlbnRcblx0ICB2YXIgY3VycmVudFRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cblx0ICAvLyBjaGVjayBmb3IgYSBgZGF0YS13aGF0cGVyc2lzdGAgYXR0cmlidXRlIG9uIGVpdGhlciB0aGUgYGh0bWxgIG9yIGBib2R5YCBlbGVtZW50cywgZGVmYXVsdHMgdG8gYHRydWVgXG5cdCAgdmFyIHNob3VsZFBlcnNpc3QgPSAnZmFsc2UnO1xuXG5cdCAgLy8gZm9ybSBpbnB1dCB0eXBlc1xuXHQgIHZhciBmb3JtSW5wdXRzID0gWydidXR0b24nLCAnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJ107XG5cblx0ICAvLyBlbXB0eSBhcnJheSBmb3IgaG9sZGluZyBjYWxsYmFjayBmdW5jdGlvbnNcblx0ICB2YXIgZnVuY3Rpb25MaXN0ID0gW107XG5cblx0ICAvLyBsaXN0IG9mIG1vZGlmaWVyIGtleXMgY29tbW9ubHkgdXNlZCB3aXRoIHRoZSBtb3VzZSBhbmRcblx0ICAvLyBjYW4gYmUgc2FmZWx5IGlnbm9yZWQgdG8gcHJldmVudCBmYWxzZSBrZXlib2FyZCBkZXRlY3Rpb25cblx0ICB2YXIgaWdub3JlTWFwID0gWzE2LCAvLyBzaGlmdFxuXHQgIDE3LCAvLyBjb250cm9sXG5cdCAgMTgsIC8vIGFsdFxuXHQgIDkxLCAvLyBXaW5kb3dzIGtleSAvIGxlZnQgQXBwbGUgY21kXG5cdCAgOTMgLy8gV2luZG93cyBtZW51IC8gcmlnaHQgQXBwbGUgY21kXG5cdCAgXTtcblxuXHQgIHZhciBzcGVjaWZpY01hcCA9IFtdO1xuXG5cdCAgLy8gbWFwcGluZyBvZiBldmVudHMgdG8gaW5wdXQgdHlwZXNcblx0ICB2YXIgaW5wdXRNYXAgPSB7XG5cdCAgICBrZXlkb3duOiAna2V5Ym9hcmQnLFxuXHQgICAga2V5dXA6ICdrZXlib2FyZCcsXG5cdCAgICBtb3VzZWRvd246ICdtb3VzZScsXG5cdCAgICBtb3VzZW1vdmU6ICdtb3VzZScsXG5cdCAgICBNU1BvaW50ZXJEb3duOiAncG9pbnRlcicsXG5cdCAgICBNU1BvaW50ZXJNb3ZlOiAncG9pbnRlcicsXG5cdCAgICBwb2ludGVyZG93bjogJ3BvaW50ZXInLFxuXHQgICAgcG9pbnRlcm1vdmU6ICdwb2ludGVyJyxcblx0ICAgIHRvdWNoc3RhcnQ6ICd0b3VjaCcsXG5cdCAgICB0b3VjaGVuZDogJ3RvdWNoJ1xuXG5cdCAgICAvLyBib29sZWFuOiB0cnVlIGlmIHRoZSBwYWdlIGlzIGJlaW5nIHNjcm9sbGVkXG5cdCAgfTt2YXIgaXNTY3JvbGxpbmcgPSBmYWxzZTtcblxuXHQgIC8vIHN0b3JlIGN1cnJlbnQgbW91c2UgcG9zaXRpb25cblx0ICB2YXIgbW91c2VQb3MgPSB7XG5cdCAgICB4OiBudWxsLFxuXHQgICAgeTogbnVsbFxuXG5cdCAgICAvLyBtYXAgb2YgSUUgMTAgcG9pbnRlciBldmVudHNcblx0ICB9O3ZhciBwb2ludGVyTWFwID0ge1xuXHQgICAgMjogJ3RvdWNoJyxcblx0ICAgIDM6ICd0b3VjaCcsIC8vIHRyZWF0IHBlbiBsaWtlIHRvdWNoXG5cdCAgICA0OiAnbW91c2UnXG5cblx0ICAgIC8vIGNoZWNrIHN1cHBvcnQgZm9yIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzXG5cdCAgfTt2YXIgc3VwcG9ydHNQYXNzaXZlID0gZmFsc2U7XG5cblx0ICB0cnkge1xuXHQgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuXHQgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgICBzdXBwb3J0c1Bhc3NpdmUgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcblx0ICB9IGNhdGNoIChlKSB7fVxuXHQgIC8vIGZhaWwgc2lsZW50bHlcblxuXG5cdCAgLypcblx0ICAgKiBzZXQgdXBcblx0ICAgKi9cblxuXHQgIHZhciBzZXRVcCA9IGZ1bmN0aW9uIHNldFVwKCkge1xuXHQgICAgLy8gYWRkIGNvcnJlY3QgbW91c2Ugd2hlZWwgZXZlbnQgbWFwcGluZyB0byBgaW5wdXRNYXBgXG5cdCAgICBpbnB1dE1hcFtkZXRlY3RXaGVlbCgpXSA9ICdtb3VzZSc7XG5cblx0ICAgIGFkZExpc3RlbmVycygpO1xuXHQgIH07XG5cblx0ICAvKlxuXHQgICAqIGV2ZW50c1xuXHQgICAqL1xuXG5cdCAgdmFyIGFkZExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcblx0ICAgIC8vIGBwb2ludGVybW92ZWAsIGBNU1BvaW50ZXJNb3ZlYCwgYG1vdXNlbW92ZWAgYW5kIG1vdXNlIHdoZWVsIGV2ZW50IGJpbmRpbmdcblx0ICAgIC8vIGNhbiBvbmx5IGRlbW9uc3RyYXRlIHBvdGVudGlhbCwgYnV0IG5vdCBhY3R1YWwsIGludGVyYWN0aW9uXG5cdCAgICAvLyBhbmQgYXJlIHRyZWF0ZWQgc2VwYXJhdGVseVxuXHQgICAgdmFyIG9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xuXG5cdCAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2V0UGVyc2lzdCk7XG5cblx0ICAgIC8vIHBvaW50ZXIgZXZlbnRzIChtb3VzZSwgcGVuLCB0b3VjaClcblx0ICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG5cdCAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHNldElucHV0KTtcblx0ICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgc2V0SW50ZW50KTtcblx0ICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG5cdCAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgc2V0SW5wdXQpO1xuXHQgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHNldEludGVudCk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyBtb3VzZSBldmVudHNcblx0ICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNldElucHV0KTtcblx0ICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNldEludGVudCk7XG5cblx0ICAgICAgLy8gdG91Y2ggZXZlbnRzXG5cdCAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcblx0ICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNldElucHV0LCBvcHRpb25zKTtcblx0ICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBzZXRJbnB1dCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgLy8gbW91c2Ugd2hlZWxcblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGRldGVjdFdoZWVsKCksIHNldEludGVudCwgb3B0aW9ucyk7XG5cblx0ICAgIC8vIGtleWJvYXJkIGV2ZW50c1xuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzZXRJbnB1dCk7XG5cdCAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzZXRJbnB1dCk7XG5cblx0ICAgIC8vIGZvY3VzIGV2ZW50c1xuXHQgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBzZXRFbGVtZW50KTtcblx0ICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGNsZWFyRWxlbWVudCk7XG5cdCAgfTtcblxuXHQgIC8vIGNoZWNrcyBpZiBpbnB1dCBwZXJzaXN0ZW5jZSBzaG91bGQgaGFwcGVuIGFuZFxuXHQgIC8vIGdldCBzYXZlZCBzdGF0ZSBmcm9tIHNlc3Npb24gc3RvcmFnZSBpZiB0cnVlIChkZWZhdWx0cyB0byBgZmFsc2VgKVxuXHQgIHZhciBzZXRQZXJzaXN0ID0gZnVuY3Rpb24gc2V0UGVyc2lzdCgpIHtcblx0ICAgIHNob3VsZFBlcnNpc3QgPSAhKGRvY0VsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXdoYXRwZXJzaXN0JykgfHwgZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2hhdHBlcnNpc3QnKSA9PT0gJ2ZhbHNlJyk7XG5cblx0ICAgIGlmIChzaG91bGRQZXJzaXN0KSB7XG5cdCAgICAgIC8vIGNoZWNrIGZvciBzZXNzaW9uIHZhcmlhYmxlcyBhbmQgdXNlIGlmIGF2YWlsYWJsZVxuXHQgICAgICB0cnkge1xuXHQgICAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2hhdC1pbnB1dCcpKSB7XG5cdCAgICAgICAgICBjdXJyZW50SW5wdXQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2hhdC1pbnB1dCcpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnd2hhdC1pbnRlbnQnKSkge1xuXHQgICAgICAgICAgY3VycmVudEludGVudCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd3aGF0LWludGVudCcpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgIC8vIGZhaWwgc2lsZW50bHlcblx0ICAgICAgfVxuXHQgICAgfVxuXG5cdCAgICAvLyBhbHdheXMgcnVuIHRoZXNlIHNvIGF0IGxlYXN0IGBpbml0aWFsYCBzdGF0ZSBpcyBzZXRcblx0ICAgIGRvVXBkYXRlKCdpbnB1dCcpO1xuXHQgICAgZG9VcGRhdGUoJ2ludGVudCcpO1xuXHQgIH07XG5cblx0ICAvLyBjaGVja3MgY29uZGl0aW9ucyBiZWZvcmUgdXBkYXRpbmcgbmV3IGlucHV0XG5cdCAgdmFyIHNldElucHV0ID0gZnVuY3Rpb24gc2V0SW5wdXQoZXZlbnQpIHtcblx0ICAgIHZhciBldmVudEtleSA9IGV2ZW50LndoaWNoO1xuXHQgICAgdmFyIHZhbHVlID0gaW5wdXRNYXBbZXZlbnQudHlwZV07XG5cblx0ICAgIGlmICh2YWx1ZSA9PT0gJ3BvaW50ZXInKSB7XG5cdCAgICAgIHZhbHVlID0gcG9pbnRlclR5cGUoZXZlbnQpO1xuXHQgICAgfVxuXG5cdCAgICB2YXIgaWdub3JlTWF0Y2ggPSAhc3BlY2lmaWNNYXAubGVuZ3RoICYmIGlnbm9yZU1hcC5pbmRleE9mKGV2ZW50S2V5KSA9PT0gLTE7XG5cblx0ICAgIHZhciBzcGVjaWZpY01hdGNoID0gc3BlY2lmaWNNYXAubGVuZ3RoICYmIHNwZWNpZmljTWFwLmluZGV4T2YoZXZlbnRLZXkpICE9PSAtMTtcblxuXHQgICAgdmFyIHNob3VsZFVwZGF0ZSA9IHZhbHVlID09PSAna2V5Ym9hcmQnICYmIGV2ZW50S2V5ICYmIChpZ25vcmVNYXRjaCB8fCBzcGVjaWZpY01hdGNoKSB8fCB2YWx1ZSA9PT0gJ21vdXNlJyB8fCB2YWx1ZSA9PT0gJ3RvdWNoJztcblxuXHQgICAgLy8gcHJldmVudCB0b3VjaCBkZXRlY3Rpb24gZnJvbSBiZWluZyBvdmVycmlkZGVuIGJ5IGV2ZW50IGV4ZWN1dGlvbiBvcmRlclxuXHQgICAgaWYgKHZhbGlkYXRlVG91Y2godmFsdWUpKSB7XG5cdCAgICAgIHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoc2hvdWxkVXBkYXRlICYmIGN1cnJlbnRJbnB1dCAhPT0gdmFsdWUpIHtcblx0ICAgICAgY3VycmVudElucHV0ID0gdmFsdWU7XG5cblx0ICAgICAgcGVyc2lzdElucHV0KCdpbnB1dCcsIGN1cnJlbnRJbnB1dCk7XG5cdCAgICAgIGRvVXBkYXRlKCdpbnB1dCcpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoc2hvdWxkVXBkYXRlICYmIGN1cnJlbnRJbnRlbnQgIT09IHZhbHVlKSB7XG5cdCAgICAgIC8vIHByZXNlcnZlIGludGVudCBmb3Iga2V5Ym9hcmQgaW50ZXJhY3Rpb24gd2l0aCBmb3JtIGZpZWxkc1xuXHQgICAgICB2YXIgYWN0aXZlRWxlbSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdCAgICAgIHZhciBub3RGb3JtSW5wdXQgPSBhY3RpdmVFbGVtICYmIGFjdGl2ZUVsZW0ubm9kZU5hbWUgJiYgKGZvcm1JbnB1dHMuaW5kZXhPZihhY3RpdmVFbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMSB8fCBhY3RpdmVFbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nICYmICFjaGVja0Nsb3Nlc3QoYWN0aXZlRWxlbSwgJ2Zvcm0nKSk7XG5cblx0ICAgICAgaWYgKG5vdEZvcm1JbnB1dCkge1xuXHQgICAgICAgIGN1cnJlbnRJbnRlbnQgPSB2YWx1ZTtcblxuXHQgICAgICAgIHBlcnNpc3RJbnB1dCgnaW50ZW50JywgY3VycmVudEludGVudCk7XG5cdCAgICAgICAgZG9VcGRhdGUoJ2ludGVudCcpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8vIHVwZGF0ZXMgdGhlIGRvYyBhbmQgYGlucHV0VHlwZXNgIGFycmF5IHdpdGggbmV3IGlucHV0XG5cdCAgdmFyIGRvVXBkYXRlID0gZnVuY3Rpb24gZG9VcGRhdGUod2hpY2gpIHtcblx0ICAgIGRvY0VsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXdoYXQnICsgd2hpY2gsIHdoaWNoID09PSAnaW5wdXQnID8gY3VycmVudElucHV0IDogY3VycmVudEludGVudCk7XG5cblx0ICAgIGZpcmVGdW5jdGlvbnMod2hpY2gpO1xuXHQgIH07XG5cblx0ICAvLyB1cGRhdGVzIGlucHV0IGludGVudCBmb3IgYG1vdXNlbW92ZWAgYW5kIGBwb2ludGVybW92ZWBcblx0ICB2YXIgc2V0SW50ZW50ID0gZnVuY3Rpb24gc2V0SW50ZW50KGV2ZW50KSB7XG5cdCAgICB2YXIgdmFsdWUgPSBpbnB1dE1hcFtldmVudC50eXBlXTtcblxuXHQgICAgaWYgKHZhbHVlID09PSAncG9pbnRlcicpIHtcblx0ICAgICAgdmFsdWUgPSBwb2ludGVyVHlwZShldmVudCk7XG5cdCAgICB9XG5cblx0ICAgIC8vIHRlc3QgdG8gc2VlIGlmIGBtb3VzZW1vdmVgIGhhcHBlbmVkIHJlbGF0aXZlIHRvIHRoZSBzY3JlZW4gdG8gZGV0ZWN0IHNjcm9sbGluZyB2ZXJzdXMgbW91c2Vtb3ZlXG5cdCAgICBkZXRlY3RTY3JvbGxpbmcoZXZlbnQpO1xuXG5cdCAgICAvLyBvbmx5IGV4ZWN1dGUgaWYgc2Nyb2xsaW5nIGlzbid0IGhhcHBlbmluZ1xuXHQgICAgaWYgKCghaXNTY3JvbGxpbmcgJiYgIXZhbGlkYXRlVG91Y2godmFsdWUpIHx8IGlzU2Nyb2xsaW5nICYmIGV2ZW50LnR5cGUgPT09ICd3aGVlbCcgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNld2hlZWwnIHx8IGV2ZW50LnR5cGUgPT09ICdET01Nb3VzZVNjcm9sbCcpICYmIGN1cnJlbnRJbnRlbnQgIT09IHZhbHVlKSB7XG5cdCAgICAgIGN1cnJlbnRJbnRlbnQgPSB2YWx1ZTtcblxuXHQgICAgICBwZXJzaXN0SW5wdXQoJ2ludGVudCcsIGN1cnJlbnRJbnRlbnQpO1xuXHQgICAgICBkb1VwZGF0ZSgnaW50ZW50Jyk7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHZhciBzZXRFbGVtZW50ID0gZnVuY3Rpb24gc2V0RWxlbWVudChldmVudCkge1xuXHQgICAgaWYgKCFldmVudC50YXJnZXQubm9kZU5hbWUpIHtcblx0ICAgICAgLy8gSWYgbm9kZU5hbWUgaXMgdW5kZWZpbmVkLCBjbGVhciB0aGUgZWxlbWVudFxuXHQgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgY2xpY2sgaW5zaWRlIGFuIDxzdmc+IGVsZW1lbnQuXG5cdCAgICAgIGNsZWFyRWxlbWVudCgpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIGN1cnJlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdCAgICBkb2NFbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS13aGF0ZWxlbWVudCcsIGN1cnJlbnRFbGVtZW50KTtcblxuXHQgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QgJiYgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5sZW5ndGgpIHtcblx0ICAgICAgZG9jRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtd2hhdGNsYXNzZXMnLCBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvU3RyaW5nKCkucmVwbGFjZSgnICcsICcsJykpO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICB2YXIgY2xlYXJFbGVtZW50ID0gZnVuY3Rpb24gY2xlYXJFbGVtZW50KCkge1xuXHQgICAgY3VycmVudEVsZW1lbnQgPSBudWxsO1xuXG5cdCAgICBkb2NFbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS13aGF0ZWxlbWVudCcpO1xuXHQgICAgZG9jRWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtd2hhdGNsYXNzZXMnKTtcblx0ICB9O1xuXG5cdCAgdmFyIHBlcnNpc3RJbnB1dCA9IGZ1bmN0aW9uIHBlcnNpc3RJbnB1dCh3aGljaCwgdmFsdWUpIHtcblx0ICAgIGlmIChzaG91bGRQZXJzaXN0KSB7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3doYXQtJyArIHdoaWNoLCB2YWx1ZSk7XG5cdCAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAvLyBmYWlsIHNpbGVudGx5XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgLypcblx0ICAgKiB1dGlsaXRpZXNcblx0ICAgKi9cblxuXHQgIHZhciBwb2ludGVyVHlwZSA9IGZ1bmN0aW9uIHBvaW50ZXJUeXBlKGV2ZW50KSB7XG5cdCAgICBpZiAodHlwZW9mIGV2ZW50LnBvaW50ZXJUeXBlID09PSAnbnVtYmVyJykge1xuXHQgICAgICByZXR1cm4gcG9pbnRlck1hcFtldmVudC5wb2ludGVyVHlwZV07XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAvLyB0cmVhdCBwZW4gbGlrZSB0b3VjaFxuXHQgICAgICByZXR1cm4gZXZlbnQucG9pbnRlclR5cGUgPT09ICdwZW4nID8gJ3RvdWNoJyA6IGV2ZW50LnBvaW50ZXJUeXBlO1xuXHQgICAgfVxuXHQgIH07XG5cblx0ICAvLyBwcmV2ZW50IHRvdWNoIGRldGVjdGlvbiBmcm9tIGJlaW5nIG92ZXJyaWRkZW4gYnkgZXZlbnQgZXhlY3V0aW9uIG9yZGVyXG5cdCAgdmFyIHZhbGlkYXRlVG91Y2ggPSBmdW5jdGlvbiB2YWxpZGF0ZVRvdWNoKHZhbHVlKSB7XG5cdCAgICB2YXIgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuXHQgICAgdmFyIHRvdWNoSXNWYWxpZCA9IHZhbHVlID09PSAnbW91c2UnICYmIGN1cnJlbnRJbnB1dCA9PT0gJ3RvdWNoJyAmJiB0aW1lc3RhbXAgLSBjdXJyZW50VGltZXN0YW1wIDwgMjAwO1xuXG5cdCAgICBjdXJyZW50VGltZXN0YW1wID0gdGltZXN0YW1wO1xuXG5cdCAgICByZXR1cm4gdG91Y2hJc1ZhbGlkO1xuXHQgIH07XG5cblx0ICAvLyBkZXRlY3QgdmVyc2lvbiBvZiBtb3VzZSB3aGVlbCBldmVudCB0byB1c2Vcblx0ICAvLyB2aWEgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvd2hlZWxfZXZlbnRcblx0ICB2YXIgZGV0ZWN0V2hlZWwgPSBmdW5jdGlvbiBkZXRlY3RXaGVlbCgpIHtcblx0ICAgIHZhciB3aGVlbFR5cGUgPSBudWxsO1xuXG5cdCAgICAvLyBNb2Rlcm4gYnJvd3NlcnMgc3VwcG9ydCBcIndoZWVsXCJcblx0ICAgIGlmICgnb253aGVlbCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpIHtcblx0ICAgICAgd2hlZWxUeXBlID0gJ3doZWVsJztcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIFdlYmtpdCBhbmQgSUUgc3VwcG9ydCBhdCBsZWFzdCBcIm1vdXNld2hlZWxcIlxuXHQgICAgICAvLyBvciBhc3N1bWUgdGhhdCByZW1haW5pbmcgYnJvd3NlcnMgYXJlIG9sZGVyIEZpcmVmb3hcblx0ICAgICAgd2hlZWxUeXBlID0gZG9jdW1lbnQub25tb3VzZXdoZWVsICE9PSB1bmRlZmluZWQgPyAnbW91c2V3aGVlbCcgOiAnRE9NTW91c2VTY3JvbGwnO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gd2hlZWxUeXBlO1xuXHQgIH07XG5cblx0ICAvLyBydW5zIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHQgIHZhciBmaXJlRnVuY3Rpb25zID0gZnVuY3Rpb24gZmlyZUZ1bmN0aW9ucyh0eXBlKSB7XG5cdCAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZnVuY3Rpb25MaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdCAgICAgIGlmIChmdW5jdGlvbkxpc3RbaV0udHlwZSA9PT0gdHlwZSkge1xuXHQgICAgICAgIGZ1bmN0aW9uTGlzdFtpXS5mbi5jYWxsKHVuZGVmaW5lZCwgdHlwZSA9PT0gJ2lucHV0JyA/IGN1cnJlbnRJbnB1dCA6IGN1cnJlbnRJbnRlbnQpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8vIGZpbmRzIG1hdGNoaW5nIGVsZW1lbnQgaW4gYW4gb2JqZWN0XG5cdCAgdmFyIG9ialBvcyA9IGZ1bmN0aW9uIG9ialBvcyhtYXRjaCkge1xuXHQgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZ1bmN0aW9uTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHQgICAgICBpZiAoZnVuY3Rpb25MaXN0W2ldLmZuID09PSBtYXRjaCkge1xuXHQgICAgICAgIHJldHVybiBpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIHZhciBkZXRlY3RTY3JvbGxpbmcgPSBmdW5jdGlvbiBkZXRlY3RTY3JvbGxpbmcoZXZlbnQpIHtcblx0ICAgIGlmIChtb3VzZVBvcy54ICE9PSBldmVudC5zY3JlZW5YIHx8IG1vdXNlUG9zLnkgIT09IGV2ZW50LnNjcmVlblkpIHtcblx0ICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcblxuXHQgICAgICBtb3VzZVBvcy54ID0gZXZlbnQuc2NyZWVuWDtcblx0ICAgICAgbW91c2VQb3MueSA9IGV2ZW50LnNjcmVlblk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICBpc1Njcm9sbGluZyA9IHRydWU7XG5cdCAgICB9XG5cdCAgfTtcblxuXHQgIC8vIG1hbnVhbCB2ZXJzaW9uIG9mIGBjbG9zZXN0KClgXG5cdCAgdmFyIGNoZWNrQ2xvc2VzdCA9IGZ1bmN0aW9uIGNoZWNrQ2xvc2VzdChlbGVtLCB0YWcpIHtcblx0ICAgIHZhciBFbGVtZW50UHJvdG90eXBlID0gd2luZG93LkVsZW1lbnQucHJvdG90eXBlO1xuXG5cdCAgICBpZiAoIUVsZW1lbnRQcm90b3R5cGUubWF0Y2hlcykge1xuXHQgICAgICBFbGVtZW50UHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50UHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnRQcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXHQgICAgfVxuXG5cdCAgICBpZiAoIUVsZW1lbnRQcm90b3R5cGUuY2xvc2VzdCkge1xuXHQgICAgICBkbyB7XG5cdCAgICAgICAgaWYgKGVsZW0ubWF0Y2hlcyh0YWcpKSB7XG5cdCAgICAgICAgICByZXR1cm4gZWxlbTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50IHx8IGVsZW0ucGFyZW50Tm9kZTtcblx0ICAgICAgfSB3aGlsZSAoZWxlbSAhPT0gbnVsbCAmJiBlbGVtLm5vZGVUeXBlID09PSAxKTtcblxuXHQgICAgICByZXR1cm4gbnVsbDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHJldHVybiBlbGVtLmNsb3Nlc3QodGFnKTtcblx0ICAgIH1cblx0ICB9O1xuXG5cdCAgLypcblx0ICAgKiBpbml0XG5cdCAgICovXG5cblx0ICAvLyBkb24ndCBzdGFydCBzY3JpcHQgdW5sZXNzIGJyb3dzZXIgY3V0cyB0aGUgbXVzdGFyZFxuXHQgIC8vIChhbHNvIHBhc3NlcyBpZiBwb2x5ZmlsbHMgYXJlIHVzZWQpXG5cdCAgaWYgKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgJiYgQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcblx0ICAgIHNldFVwKCk7XG5cdCAgfVxuXG5cdCAgLypcblx0ICAgKiBhcGlcblx0ICAgKi9cblxuXHQgIHJldHVybiB7XG5cdCAgICAvLyByZXR1cm5zIHN0cmluZzogdGhlIGN1cnJlbnQgaW5wdXQgdHlwZVxuXHQgICAgLy8gb3B0OiAnaW50ZW50J3wnaW5wdXQnXG5cdCAgICAvLyAnaW5wdXQnIChkZWZhdWx0KTogcmV0dXJucyB0aGUgc2FtZSB2YWx1ZSBhcyB0aGUgYGRhdGEtd2hhdGlucHV0YCBhdHRyaWJ1dGVcblx0ICAgIC8vICdpbnRlbnQnOiBpbmNsdWRlcyBgZGF0YS13aGF0aW50ZW50YCB2YWx1ZSBpZiBpdCdzIGRpZmZlcmVudCB0aGFuIGBkYXRhLXdoYXRpbnB1dGBcblx0ICAgIGFzazogZnVuY3Rpb24gYXNrKG9wdCkge1xuXHQgICAgICByZXR1cm4gb3B0ID09PSAnaW50ZW50JyA/IGN1cnJlbnRJbnRlbnQgOiBjdXJyZW50SW5wdXQ7XG5cdCAgICB9LFxuXG5cdCAgICAvLyByZXR1cm5zIHN0cmluZzogdGhlIGN1cnJlbnRseSBmb2N1c2VkIGVsZW1lbnQgb3IgbnVsbFxuXHQgICAgZWxlbWVudDogZnVuY3Rpb24gZWxlbWVudCgpIHtcblx0ICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuXHQgICAgfSxcblxuXHQgICAgLy8gb3ZlcndyaXRlcyBpZ25vcmVkIGtleXMgd2l0aCBwcm92aWRlZCBhcnJheVxuXHQgICAgaWdub3JlS2V5czogZnVuY3Rpb24gaWdub3JlS2V5cyhhcnIpIHtcblx0ICAgICAgaWdub3JlTWFwID0gYXJyO1xuXHQgICAgfSxcblxuXHQgICAgLy8gb3ZlcndyaXRlcyBzcGVjaWZpYyBjaGFyIGtleXMgdG8gdXBkYXRlIG9uXG5cdCAgICBzcGVjaWZpY0tleXM6IGZ1bmN0aW9uIHNwZWNpZmljS2V5cyhhcnIpIHtcblx0ICAgICAgc3BlY2lmaWNNYXAgPSBhcnI7XG5cdCAgICB9LFxuXG5cdCAgICAvLyBhdHRhY2ggZnVuY3Rpb25zIHRvIGlucHV0IGFuZCBpbnRlbnQgXCJldmVudHNcIlxuXHQgICAgLy8gZnVuY3Q6IGZ1bmN0aW9uIHRvIGZpcmUgb24gY2hhbmdlXG5cdCAgICAvLyBldmVudFR5cGU6ICdpbnB1dCd8J2ludGVudCdcblx0ICAgIHJlZ2lzdGVyT25DaGFuZ2U6IGZ1bmN0aW9uIHJlZ2lzdGVyT25DaGFuZ2UoZm4sIGV2ZW50VHlwZSkge1xuXHQgICAgICBmdW5jdGlvbkxpc3QucHVzaCh7XG5cdCAgICAgICAgZm46IGZuLFxuXHQgICAgICAgIHR5cGU6IGV2ZW50VHlwZSB8fCAnaW5wdXQnXG5cdCAgICAgIH0pO1xuXHQgICAgfSxcblxuXHQgICAgdW5SZWdpc3Rlck9uQ2hhbmdlOiBmdW5jdGlvbiB1blJlZ2lzdGVyT25DaGFuZ2UoZm4pIHtcblx0ICAgICAgdmFyIHBvc2l0aW9uID0gb2JqUG9zKGZuKTtcblxuXHQgICAgICBpZiAocG9zaXRpb24gfHwgcG9zaXRpb24gPT09IDApIHtcblx0ICAgICAgICBmdW5jdGlvbkxpc3Quc3BsaWNlKHBvc2l0aW9uLCAxKTtcblx0ICAgICAgfVxuXHQgICAgfSxcblxuXHQgICAgY2xlYXJTdG9yYWdlOiBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoKSB7XG5cdCAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuXHQgICAgfVxuXHQgIH07XG5cdH0oKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pXG59KTtcbjsiLCJfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5hcHAuc3RhdGljVVJMOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbmltcG9ydCAnd2hhdC1pbnB1dCc7XG5cbmltcG9ydCB7Q29udGV4dH0gZnJvbSAncGFjdG8nO1xuaW1wb3J0IHtBY3Rpb24gYXMgQW5hbHl0aWNzfSBmcm9tICdjb21wb25lbnRzL2FuYWx5dGljcy9hY3Rpb25zL0luaXRpYWxpemVMYXp5JztcbmltcG9ydCB7QWN0aW9uIGFzIEZvb3Rlcn0gZnJvbSAnY29tcG9uZW50cy9mb290ZXIvYWN0aW9ucy9Jbml0aWFsaXplTGF6eSc7XG5pbXBvcnQge0FjdGlvbiBhcyBMb2dyb2NrZXR9IGZyb20gJ2NvbXBvbmVudHMvbG9ncm9ja2V0L2FjdGlvbnMvSW5pdGlhbGl6ZUxhenknO1xuaW1wb3J0IHtBY3Rpb24gYXMgU2VydmljZXdvcmtlcn0gZnJvbSAnY29tcG9uZW50cy9zZXJ2aWNld29ya2VyL2FjdGlvbnMvSW5pdGlhbGl6ZSc7XG5pbXBvcnQge0FjdGlvbiBhcyBQcml2YWN5fSBmcm9tICdjb21wb25lbnRzL3ByaXZhY3kvYWN0aW9ucy9Jbml0aWFsaXplJztcblxuXG5jb25zdCBjb250ZXh0ID0gbmV3IENvbnRleHQoKTtcbmNvbnRleHQuYWN0aW9ucy5hZGQoJ2FwcDpydW4nLCBbXG5cdC8vIFByaXZhY3kgZmlyc3QhIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSB0aGUgY2FzZSBidXQgaGVyZSB3ZSBhbHNvIHJlcXVpcmUgdGhpc1xuXHQvLyB0byBiZSBleGVjdXRlZCBmaXJzdC4gVGhpcyBhbGxvd3MgYWNjZXNzIGZyb20gb3RoZXIgY29tcG9uZW50cy4uLlxuXHRQcml2YWN5LFxuXG5cdEFuYWx5dGljcyxcblx0Rm9vdGVyLFxuXHRMb2dyb2NrZXQsXG5cdFNlcnZpY2V3b3JrZXIsXG5dKTtcbmNvbnRleHQudHJpZ2dlcignYXBwOnJ1bicpO1xuXG4vLyBFeHBvc2U6XG53aW5kb3cubnJtbnJzaCA9IHtjb250ZXh0fTtcbiIsImltcG9ydCB7QWN0aW9uIGFzIEluaXRpYWxpemV9IGZyb20gJ2dlbmVyaWMvYWN0aW9ucy9Jbml0aWFsaXplTGF6eVdoZW5Mb2FkZWRXaXRoQ29uc2VudCc7XG5pbXBvcnQge0NPTlNFTlRfQU5BTFlUSUNTfSBmcm9tICdjb21wb25lbnRzL3ByaXZhY3kvc2hhcmVkL2NvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEFjdGlvbiBleHRlbmRzIEluaXRpYWxpemUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKENPTlNFTlRfQU5BTFlUSUNTKTtcblx0fVxuXG5cdGdldCBpbXBvcnQoKSB7XG5cdFx0cmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFuYWx5dGljc1wiICovJ2NvbXBvbmVudHMvYW5hbHl0aWNzL2FjdGlvbnMvSW5pdGlhbGl6ZScpO1xuXHR9XG5cblx0cnVuKCkge1xuXHRcdC8vIFBheSBhdHRlbnRpb24gdG8gZG8gbm90IHRyYWNrIGhlYWRlciBvZiB1c2VyXG5cdFx0Ly8gQ2hyb21lOiBjaHJvbWU6Ly9zZXR0aW5ncy8/c2VhcmNoPURvK05vdCtUcmFja1xuXHRcdGNvbnN0IGRvTm90VHJhY2sgPSAobmF2aWdhdG9yLmRvTm90VHJhY2sgfHwgbmF2aWdhdG9yLm1zRG9Ob3RUcmFjayB8fCB3aW5kb3cuZG9Ob3RUcmFjayk7XG5cdFx0aWYgKGRvTm90VHJhY2sgPT09ICcxJyB8fCBkb05vdFRyYWNrID09PSAneWVzJykge1xuXHRcdFx0dGhpcy5kaXNjb25uZWN0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VwZXIucnVuKCk7XG5cdH1cblxufVxuIiwiaW1wb3J0IHtJbml0aWFsaXplTGF6eX0gZnJvbSAncGFjdG8nO1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgSW5pdGlhbGl6ZUxhenkge1xuXG5cdGdldCBzZXR0aW5ncygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0b3I6ICcuY29udGVudC1mb290ZXInXG5cdFx0fTtcblx0fVxuXG5cdGdldCBpbXBvcnQoKSB7XG5cdFx0cmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbnRlbnQtZm9vdGVyXCIgKi8nY29tcG9uZW50cy9mb290ZXIvYWN0aW9ucy9Jbml0aWFsaXplJyk7XG5cdH1cblxufVxuIiwiaW1wb3J0IHtBY3Rpb24gYXMgSW5pdGlhbGl6ZX0gZnJvbSAnZ2VuZXJpYy9hY3Rpb25zL0luaXRpYWxpemVMYXp5V2hlbkxvYWRlZFdpdGhDb25zZW50JztcbmltcG9ydCB7Q09OU0VOVF9MT0dST0NLRVR9IGZyb20gJ2NvbXBvbmVudHMvcHJpdmFjeS9zaGFyZWQvY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgSW5pdGlhbGl6ZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoQ09OU0VOVF9MT0dST0NLRVQpO1xuXHR9XG5cblx0Z2V0IGltcG9ydCgpIHtcblx0XHRyZXR1cm4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibG9ncm9ja2V0XCIgKi8nY29tcG9uZW50cy9sb2dyb2NrZXQvYWN0aW9ucy9Jbml0aWFsaXplLmpzJyk7XG5cdH1cblxuXHRydW4oKSB7XG5cdFx0Ly8gUGF5IGF0dGVudGlvbiB0byBkbyBub3QgdHJhY2sgaGVhZGVyIG9mIHVzZXJcblx0XHQvLyBDaHJvbWU6IGNocm9tZTovL3NldHRpbmdzLz9zZWFyY2g9RG8rTm90K1RyYWNrXG5cdFx0Y29uc3QgZG9Ob3RUcmFjayA9IChuYXZpZ2F0b3IuZG9Ob3RUcmFjayB8fCBuYXZpZ2F0b3IubXNEb05vdFRyYWNrIHx8IHdpbmRvdy5kb05vdFRyYWNrKTtcblx0XHRpZiAoZG9Ob3RUcmFjayA9PT0gJzEnIHx8IGRvTm90VHJhY2sgPT09ICd5ZXMnKSB7XG5cdFx0XHR0aGlzLmRpc2Nvbm5lY3QoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzdXBlci5ydW4oKTtcblx0fVxuXG59XG4iLCJpbXBvcnQge0VWRU5UX1ZJU0lCSUxJVFksIE5BTUVTUEFDRV9NT0RFTH0gZnJvbSAnY29tcG9uZW50cy9wcml2YWN5L3NoYXJlZC9jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBBY3Rpb24ge1xuXG5cdHJ1bigpIHtcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuY29udGV4dC52YWx1ZXMuZ2V0KE5BTUVTUEFDRV9NT0RFTCk7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXMuZXZlbnQuZGF0YSB8fCB7fTtcblxuXHRcdE9iamVjdC5lbnRyaWVzKHByb3BzIHx8IHt9KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblx0XHRcdG1vZGVsLnByb3BzW2tleV0gPSB2YWx1ZTtcblx0XHR9KTtcblxuXHRcdG1vZGVsLnNhdmUoKTtcblxuXHRcdGNvbnN0IHZpc2libGUgPSBtb2RlbC5oYXNNaXNzaW5nO1xuXHRcdHRoaXMuY29udGV4dC50cmlnZ2VyKEVWRU5UX1ZJU0lCSUxJVFksIHt2aXNpYmxlfSk7XG5cdH1cblxufVxuIiwiaW1wb3J0IHtJbml0aWFsaXplfSBmcm9tICdwYWN0byc7XG5cbmltcG9ydCB7QWN0aW9uIGFzIENoYW5nZX0gZnJvbSAnY29tcG9uZW50cy9wcml2YWN5L2FjdGlvbnMvQ2hhbmdlJztcbmltcG9ydCB7QWN0aW9uIGFzIFZpc2liaWxpdHl9IGZyb20gJ2NvbXBvbmVudHMvcHJpdmFjeS9hY3Rpb25zL1Zpc2liaWxpdHknO1xuaW1wb3J0IHtDb25zZW50cyBhcyBDb25zZW50c01vZGVsfSBmcm9tICdjb21wb25lbnRzL3ByaXZhY3kvbW9kZWxzL0NvbnNlbnRzJztcbmltcG9ydCB7Q29uc2VudHMgYXMgQ29uc2VudHNWaWV3fSBmcm9tICdjb21wb25lbnRzL3ByaXZhY3kvdmlld3MvQ29uc2VudHMnO1xuaW1wb3J0IHtcblx0RVZFTlRfQ0hBTkdFLFxuXHRFVkVOVF9WSVNJQklMSVRZLFxuXHROQU1FU1BBQ0VfTU9ERUwsXG5cdE5BTUVTUEFDRV9WSUVXLFxufSBmcm9tICdjb21wb25lbnRzL3ByaXZhY3kvc2hhcmVkL2NvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEFjdGlvbiBleHRlbmRzIEluaXRpYWxpemUge1xuXG5cdGdldCBzZXR0aW5ncygpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0b3I6ICcucHJpdmFjeScsXG5cdFx0XHRuYW1lc3BhY2U6IE5BTUVTUEFDRV9WSUVXLFxuXHRcdFx0dmlldzogQ29uc2VudHNWaWV3LFxuXHRcdH07XG5cdH1cblxuXHRnZXQgX21vZGVsKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnRleHQudmFsdWVzLmdldChOQU1FU1BBQ0VfTU9ERUwpIHx8ICgoKSA9PiB7XG5cdFx0XHRjb25zdCBtb2RlbCA9IG5ldyBDb25zZW50c01vZGVsKCk7XG5cdFx0XHRtb2RlbC5sb2FkKCk7XG5cblx0XHRcdHRoaXMuY29udGV4dC52YWx1ZXMuYWRkKE5BTUVTUEFDRV9NT0RFTCwgbW9kZWwpO1xuXHRcdFx0cmV0dXJuIG1vZGVsO1xuXHRcdH0pKCk7XG5cdH1cblxuXHRiZWZvcmVBbGwoKSB7XG5cdFx0Ly8gQXNzdW1pbmcgdGhhdCBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgbW9kZWwgZGVmaW5lZCwgdGhlIGFjdGlvbiBoYXMgYmVlblxuXHRcdC8vIHJ1biBhdCBsZWFzdCBvbmNlIGJlZm9yZS4uLlxuXHRcdGlmICh0aGlzLmNvbnRleHQudmFsdWVzLmhhcyhOQU1FU1BBQ0VfTU9ERUwpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250ZXh0LmFjdGlvbnMuYWRkKEVWRU5UX0NIQU5HRSwgQ2hhbmdlKTtcblx0XHR0aGlzLmNvbnRleHQuYWN0aW9ucy5hZGQoRVZFTlRfVklTSUJJTElUWSwgVmlzaWJpbGl0eSk7XG5cdH1cblxuXHRiZWZvcmVFYWNoKG9wdGlvbnMpIHtcblx0XHQvLyBNZXJnZSBpbiBtb2RlbCBpbnRvIG9wdGlvbnM6XG5cdFx0b3B0aW9ucy5tb2RlbCA9IHRoaXMuX21vZGVsO1xuXHR9XG5cblx0YWZ0ZXJBbGwoKSB7XG5cdFx0Y29uc3QgdmlzaWJsZSA9IHRoaXMuX21vZGVsLmhhc01pc3Npbmc7XG5cdFx0dGhpcy5jb250ZXh0LnRyaWdnZXIoRVZFTlRfVklTSUJJTElUWSwge3Zpc2libGV9KTtcblx0fVxuXG59XG4iLCJpbXBvcnQge05BTUVTUEFDRV9WSUVXfSBmcm9tICdjb21wb25lbnRzL3ByaXZhY3kvc2hhcmVkL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb24ge1xuXG5cdHJ1bigpIHtcblx0XHRpZiAoIXRoaXMuY29udGV4dC52YWx1ZXMuaGFzKE5BTUVTUEFDRV9WSUVXKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHt2aXNpYmxlID0gdHJ1ZX0gPSB0aGlzLmV2ZW50LmRhdGEgfHwge307XG5cdFx0Y29uc3Qgdmlld3MgPSB0aGlzLmNvbnRleHQudmFsdWVzLmdldChOQU1FU1BBQ0VfVklFVyk7XG5cblx0XHR2aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG5cdFx0XHR2aWV3LnZpc2libGUgPSB2aXNpYmxlO1xuXHRcdH0pO1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAncGFjdG8ubW9kZWwnO1xuXG5pbXBvcnQge0NPTlNFTlRfQU5BTFlUSUNTLCBDT05TRU5UX0xPR1JPQ0tFVH0gZnJvbSAnY29tcG9uZW50cy9wcml2YWN5L3NoYXJlZC9jb25maWcnO1xuXG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gJ25ybW5yc2g6cHJpdmFjeTpjb25zZW50czp2MSc7XG5cbmV4cG9ydCBjbGFzcyBDb25zZW50cyBleHRlbmRzIE1vZGVsIHtcblxuXHRnZXQgZGVmYXVsdHMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdFtDT05TRU5UX0FOQUxZVElDU106IHVuZGVmaW5lZCxcblx0XHRcdFtDT05TRU5UX0xPR1JPQ0tFVF06IHVuZGVmaW5lZCxcblx0XHR9O1xuXHR9XG5cblx0Z2V0IGhhc01pc3NpbmcoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5wcm9wcylcblx0XHRcdC5maWx0ZXIoKGNvbnNlbnQpID0+IGNvbnNlbnQgPT09IHVuZGVmaW5lZClcblx0XHRcdC5sZW5ndGggPiAwO1xuXHR9XG5cblx0bG9hZCgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7XG5cdFx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEpIHx8IHt9O1xuXHRcdFx0T2JqZWN0LmVudHJpZXMocGFyc2VkKVxuXHRcdFx0XHQuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wc1trZXldID0gdmFsdWU7XG5cdFx0XHRcdH0pO1xuXHRcdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRcdHdpbmRvdy5jb25zb2xlLmVycm9yKCdDb25zZW50IGxvYWQgZXJyb3InLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0c2F2ZSgpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpO1xuXHRcdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBkYXRhKTtcblx0XHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0XHR3aW5kb3cuY29uc29sZS5lcnJvcignQ29uc2VudCBzYXZlIGVycm9yJywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG59XG4iLCJleHBvcnQgY29uc3QgRVZFTlRfQ0hBTkdFID0gJ3ByaXZhY3k6Y2hhbmdlJztcbmV4cG9ydCBjb25zdCBFVkVOVF9WSVNJQklMSVRZID0gJ3ByaXZhY3k6dmlzaWJpbGl0eSc7XG5cbmV4cG9ydCBjb25zdCBOQU1FU1BBQ0VfTU9ERUwgPSAncHJpdmFjeTpjb25zZW50cyc7XG5leHBvcnQgY29uc3QgTkFNRVNQQUNFX1ZJRVcgPSAncHJpdmFjeTp2aWV3cyc7XG5cbmV4cG9ydCBjb25zdCBDT05TRU5UX0FOQUxZVElDUyA9ICdhbmFseXRpY3MnO1xuZXhwb3J0IGNvbnN0IENPTlNFTlRfTE9HUk9DS0VUID0gJ2xvZ3JvY2tldCc7XG4iLCJpbXBvcnQge1ZpZXd9IGZyb20gJ3BhY3RvJztcblxuaW1wb3J0IHtDT05TRU5UX0FOQUxZVElDUywgQ09OU0VOVF9MT0dST0NLRVQsIEVWRU5UX0NIQU5HRX0gZnJvbSAnY29tcG9uZW50cy9wcml2YWN5L3NoYXJlZC9jb25maWcnO1xuXG5cbmNvbnN0IFNFTEVDVE9SX0RJQUxPRyA9J1tyb2xlPVwiZGlhbG9nXCJdJztcbmNvbnN0IFNFTEVDVE9SX0NIRUNLQk9YRVMgPSAnW3R5cGU9XCJjaGVja2JveFwiXVtuYW1lPVwicHJpdmFjeVwiXSc7XG5jb25zdCBTRUxFQ1RPUl9CVVRUT05fQUxMT1dfQUxMID0gJy5hbGxvdy1hbGwnO1xuY29uc3QgU0VMRUNUT1JfQlVUVE9OX0FMTE9XX1NFTEVDVElPTiA9ICcuYWxsb3ctc2VsZWN0aW9uJztcblxuY29uc3QgVEVNUExBVEUgPSBgXG5cdDxkaXZcblx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRhcmlhLW1vZGFsPVwidHJ1ZVwiXG5cdFx0YXJpYS1oaWRkZW49XCJ0cnVlXCJcblx0XHRhcmlhLWxhYmVsbGVkYnk9XCJwcml2YWN5LXRpdGxlXCJcblx0XHRhcmlhLWRlc2NyaWJlZGJ5PVwicHJpdmFjeS1kZXNjcmlwdGlvblwiXG5cdD5cblx0XHQ8aDIgaWQ9XCJwcml2YWN5LXRpdGxlXCI+RW5hYmxlIHNlcnZpY2VzPC9oMj5cblx0XHQ8ZGl2IGlkPVwicHJpdmFjeS1kZXNjcmlwdGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFRoaXMgc2l0ZSBpcyB1c2luZyBkaWZmZXJlbnQgc2VydmljZXMgdGhhdCBhbGxvdyBtZSB0byBlbmhhbmNlIGFuZFxuXHRcdFx0XHRcdGFuYWx5emUgdGhlIHVzYWdlIG9mIHRoaXMgcGFnZS4gVGhleSBtaWdodCB1c2VzIGNvb2tpZXMgdG8gd29yayBwcm9wZXJseS4uLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWxsb3ctYWxsXCI+RW5hYmxlIGFsbDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkZXRhaWxzPlxuXHRcdFx0XHQ8c3VtbWFyeT5DdXN0b21pemUgc2VydmljZXM8L3N1bW1hcnk+XG5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0SSBiZWxpZXZlIHByZXZlbnRpbmcgY29va2llIHVzYWdlIGlzIG5vdCB0aGUgb25seSB3YXkgdG8gcHJvdGVjdFxuXHRcdFx0XHRcdHlvdXIgcHJpdmFjeS4gSW5zdGVhZCwgeW91IHdpbGwgaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciBhbGwgdGhlIHNlcnZpY2VzXG5cdFx0XHRcdFx0dGhhdCBhcmUgbG9hZGVkIHRvIGNvbnRyb2wgYW55IGRhdGEgZXhjaGFuZ2UgdG8gZm9yZWlnbiBzZXJ2aWNlcy5cblx0XHRcdFx0PC9wPlxuXG5cdFx0XHRcdDxmb3JtIGNsYXNzPVwiZGV0YWlsc1wiPlxuXHRcdFx0XHRcdDxkbD5cblx0XHRcdFx0XHRcdDxkdD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJpdmFjeVwiIHZhbHVlPVwiJHtDT05TRU5UX0FOQUxZVElDU31cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdEdvb2dsZSBBbmFseXRpY3Ncblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDwvZHQ+XG5cdFx0XHRcdFx0XHQ8ZGQ+XG5cdFx0XHRcdFx0XHRcdEdvb2dsZSBBbmFseXRpY3MgaXMgYSB3ZWIgYW5hbHl0aWNzIHNlcnZpY2Ugb2ZmZXJlZCBieSBHb29nbGUgdGhhdFxuXHRcdFx0XHRcdFx0XHR0cmFja3MgYW5kIHJlcG9ydHMgd2Vic2l0ZSB0cmFmZmljLiBJIHRyYWNrIHBhZ2Ugdmlld3MgYW5kIGNsaWNrc1xuXHRcdFx0XHRcdFx0XHRvbiBsaW5rcy4gVGhlIHNlcnZpY2UgaXMgcnVubmluZyB1c2luZyB0aGUgXCJhbm9ueW1pemVJcFwiIHNldHRpbmcuXG5cdFx0XHRcdFx0XHRcdFJlYWQgbW9yZSBhYm91dCA8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3BvbGljaWVzLmdvb2dsZS5jb20vcHJpdmFjeT9obD1lbiNmb290bm90ZS1saW5rLWluZm9cIlxuXHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdD5kYXRhIHByaXZhY3k8L2E+XG5cdFx0XHRcdFx0XHRcdGZyb20gR29vZ2xlIEFuYWx5dGljcy5cblx0XHRcdFx0XHRcdDwvZGQ+XG5cblx0XHRcdFx0XHRcdDxkdD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJpdmFjeVwiIHZhbHVlPVwiJHtDT05TRU5UX0xPR1JPQ0tFVH1cIiAvPlxuXHRcdFx0XHRcdFx0XHRcdExvZ3JvY2tldFxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PC9kdD5cblx0XHRcdFx0XHRcdDxkZD5cblx0XHRcdFx0XHRcdFx0TG9nUm9ja2V0IGlzIGEgY2xvdWQtYmFzZWQgYW5kIG9uLXByZW1pc2UgbG9nZ2luZyBhbmQgc2Vzc2lvbiByZXBsYXlcblx0XHRcdFx0XHRcdFx0cGxhdGZvcm0gZm9yIEphdmFTY3JpcHQgYXBwbGljYXRpb25zLCB3aGljaCBoZWxwcyBtZSB0cmFjayBVWCBwcm9ibGVtc1xuXHRcdFx0XHRcdFx0XHRhbmQgYW5hbHl6ZSBhcyB3ZWxsIGFzIHJlbWVkaWF0ZSB0aGUgcm9vdCBjYXVzZXMgb2YgYnVncy5cblx0XHRcdFx0XHRcdFx0UmVhZCBtb3JlIGFib3V0IDxhXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbG9ncm9ja2V0LmNvbS9wcml2YWN5L1wiXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0PnByaXZhY3kgcG9saWN5PC9hPlxuXHRcdFx0XHRcdFx0XHRmcm9tIExvZ1JvY2tldC5cblx0XHRcdFx0XHRcdDwvZGQ+XG5cdFx0XHRcdFx0PC9kbD5cblxuXHRcdFx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiIGNsYXNzPVwiYWxsb3ctc2VsZWN0aW9uXCI+VXNlIHNlbGVjdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2RldGFpbHM+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuYDtcblxuXG5leHBvcnQgY2xhc3MgQ29uc2VudHMgZXh0ZW5kcyBWaWV3IHtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cdFx0dGhpcy5fbW9kZWwgPSBvcHRpb25zLm1vZGVsO1xuXG5cdFx0dGhpcy5fb25BbGxvd0FsbCA9IHRoaXMuX29uQWxsb3dBbGwuYmluZCh0aGlzKTtcblx0XHR0aGlzLl9vbkFsbG93U2VsZWN0aW9uID0gdGhpcy5fb25BbGxvd1NlbGVjdGlvbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuX29uQ29uc2VudENoYW5nZSA9IHRoaXMuX29uQ29uc2VudENoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Z2V0IHZpc2libGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2RpYWxvZy5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykgIT09ICd0cnVlJztcblx0fVxuXG5cdHNldCB2aXNpYmxlKHZhbHVlKSB7XG5cdFx0dGhpcy5fZGlhbG9nLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAhdmFsdWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtlbH0gPSB0aGlzO1xuXG5cdFx0ZWwuaW5uZXJIVE1MID0gVEVNUExBVEU7XG5cblx0XHR0aGlzLl9tb2RlbC5vbignY2hhbmdlJywgdGhpcy5fb25Db25zZW50Q2hhbmdlKTtcblx0XHR0aGlzLl9kaWFsb2cgPSBlbC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0RJQUxPRyk7XG5cdFx0dGhpcy5fY2hlY2tib3hlcyA9IFsuLi5lbC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0NIRUNLQk9YRVMpXTtcblxuXHRcdHRoaXMuX2J1dHRvbkFsbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfQlVUVE9OX0FMTE9XX0FMTCk7XG5cdFx0dGhpcy5fYnV0dG9uQWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25BbGxvd0FsbCk7XG5cdFx0dGhpcy5fYnV0dG9uU2VsZWN0aW9uID0gZWwucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9CVVRUT05fQUxMT1dfU0VMRUNUSU9OKTtcblx0XHR0aGlzLl9idXR0b25TZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkFsbG93U2VsZWN0aW9uKTtcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5fY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuXHRcdFx0Y29uc3QgbmFtZSA9IGNoZWNrYm94LnZhbHVlO1xuXHRcdFx0Y2hlY2tib3guY2hlY2tlZCA9ICEhdGhpcy5fbW9kZWwucHJvcHNbbmFtZV07XG5cdFx0fSk7XG5cdH1cblxuXHRfb25BbGxvd0FsbChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgcHJvcHMgPSB7fTtcblxuXHRcdHRoaXMuX2NoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcblx0XHRcdGNvbnN0IG5hbWUgPSBjaGVja2JveC52YWx1ZTtcblx0XHRcdHByb3BzW25hbWVdID0gdHJ1ZTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY29udGV4dC50cmlnZ2VyKEVWRU5UX0NIQU5HRSwge3Byb3BzfSk7XG5cdH1cblxuXHRfb25BbGxvd1NlbGVjdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgcHJvcHMgPSB7fTtcblxuXHRcdHRoaXMuX2NoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcblx0XHRcdGNvbnN0IG5hbWUgPSBjaGVja2JveC52YWx1ZTtcblx0XHRcdHByb3BzW25hbWVdID0gY2hlY2tib3guY2hlY2tlZDtcblx0XHR9KTtcblxuXHRcdHRoaXMuY29udGV4dC50cmlnZ2VyKEVWRU5UX0NIQU5HRSwge3Byb3BzfSk7XG5cdH1cblxuXHRfb25Db25zZW50Q2hhbmdlKCkge1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdH1cblxufVxuIiwiZXhwb3J0IGNsYXNzIEFjdGlvbiB7XG5cblx0cnVuKCkge1xuXHRcdGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuXHRcdFx0XHR0aGlzLl9yZWdpc3RlcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLl9yZWdpc3Rlci5iaW5kKHRoaXMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250ZXh0LnRyaWdnZXIoJ3NlcnZpY2V3b3JrZXI6cmVnaXN0ZXI6dW5zdXBwb3J0ZWQnKTtcblx0XHR9XG5cdH1cblxuXHRfcmVnaXN0ZXIoKSB7XG5cdFx0Y29uc3Qge2NvbnRleHR9ID0gdGhpcztcblxuXHRcdG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnLCB7c2NvcGU6ICcvJ30pXG5cdFx0XHQudGhlbigocmVnaXN0cmF0aW9uKSA9PiBjb250ZXh0LnRyaWdnZXIoJ3NlcnZpY2V3b3JrZXI6cmVnaXN0ZXI6c3VjY2VzcycsIHtyZWdpc3RyYXRpb259KSlcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IGNvbnRleHQudHJpZ2dlcignc2VydmljZXdvcmtlcjpyZWdpc3RlcjpmYWlsZWQnLCB7ZXJyb3J9KSk7XG5cdH1cblxufVxuIiwiZXhwb3J0IGNsYXNzIEFjdGlvbiB7XG5cblx0Z2V0IGltcG9ydCgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuZGVmaW5lZCBkeW5hbWljIGltcG9ydCcpO1xuXHR9XG5cblx0cnVuKCkge1xuXHRcdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG5cdFx0XHR0aGlzLmZldGNoKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX29uTG9hZCA9IHRoaXMuX29uTG9hZC5iaW5kKHRoaXMpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLl9vbkxvYWQpO1xuXHRcdH1cblx0fVxuXG5cdGZldGNoKCkge1xuXHRcdHRoaXMuaW1wb3J0LnRoZW4odGhpcy5leGVjdXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0ZGlzY29ubmVjdCgpIHtcblx0XHR0aGlzLmNvbnRleHQuYWN0aW9ucy5yZW1vdmUodGhpcy5ldmVudC50eXBlLCB0aGlzLmNvbnN0cnVjdG9yKTtcblx0fVxuXG5cdGV4ZWN1dGUobW9kdWxlKSB7XG5cdFx0Y29uc3Rcblx0XHRcdE1vZHVsZSA9IChtb2R1bGUuQWN0aW9uIHx8IG1vZHVsZS5kZWZhdWx0KSxcblx0XHRcdGFjdGlvbiA9IG5ldyBNb2R1bGUoKSxcblx0XHRcdHtjb250ZXh0LCBldmVudH0gPSB0aGlzXG5cdFx0O1xuXG5cdFx0dGhpcy5kaXNjb25uZWN0KCk7XG5cdFx0Y29udGV4dC5hY3Rpb25zLmFkZChldmVudC50eXBlLCBNb2R1bGUpO1xuXG5cdFx0YWN0aW9uLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdGFjdGlvbi5ldmVudCA9IGV2ZW50O1xuXHRcdGFjdGlvbi5ydW4oKTtcblx0fVxuXG5cdF9vbkxvYWQoKSB7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLl9vbkxvYWQpO1xuXHRcdHRoaXMuZmV0Y2goKTtcblx0fVxuXG59XG4iLCJpbXBvcnQge0FjdGlvbiBhcyBJbml0aWFsaXplTGF6eVdoZW5Mb2FkZWR9IGZyb20gJy4vSW5pdGlhbGl6ZUxhenlXaGVuTG9hZGVkJztcblxuaW1wb3J0IHtOQU1FU1BBQ0VfTU9ERUx9IGZyb20gJ2NvbXBvbmVudHMvcHJpdmFjeS9zaGFyZWQvY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgSW5pdGlhbGl6ZUxhenlXaGVuTG9hZGVkIHtcblxuXHRjb25zdHJ1Y3Rvcihjb25zZW50TmFtZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoIWNvbnNlbnROYW1lKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY29uc2VudCBuYW1lLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvbnNlbnROYW1lID0gY29uc2VudE5hbWU7XG5cdFx0dGhpcy5fb25DaGFuZ2VDb25zZW50ID0gdGhpcy5fb25DaGFuZ2VDb25zZW50LmJpbmQodGhpcyk7XG5cdH1cblxuXHRnZXQgY29uc2VudHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29udGV4dC52YWx1ZXMuZ2V0KE5BTUVTUEFDRV9NT0RFTCk7XG5cdH1cblxuXHRnZXQgaXNBbGxvd2VkKCkge1xuXHRcdHJldHVybiAhIXRoaXMuY29uc2VudHMucHJvcHNbdGhpcy5fY29uc2VudE5hbWVdO1xuXHR9XG5cblx0cnVuKCkge1xuXHRcdC8vIElmIHRoZSB1c2VyIGhhcyBub3QgZ2l2ZW4gb3IgaGFzIG5vdCBnaXZlbiB5ZXQgYSBjb25zZW50IGZvciBhbmFseXRpY3MsXG5cdFx0Ly8gd2FpdCBmb3IgYSBjaGFuZ2UgYW5kIGluaXRpYWxpemUgYWdhaW4gbGF0ZXIuLi5cblx0XHRpZiAoIXRoaXMuaXNBbGxvd2VkKSB7XG5cdFx0XHR0aGlzLmNvbnNlbnRzLm9uKCdjaGFuZ2UnLCB0aGlzLl9vbkNoYW5nZUNvbnNlbnQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN1cGVyLnJ1bigpO1xuXHR9XG5cblx0X29uQ2hhbmdlQ29uc2VudChldmVudCkge1xuXHRcdGNvbnN0IHsgZGF0YSB9ID0gZXZlbnQ7XG5cdFx0Y29uc3QgeyBwcm9wIH0gPSBkYXRhO1xuXG5cdFx0aWYgKHByb3AgIT09IHRoaXMuX2NvbnNlbnROYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV2UgYXJlIGRpc2FibGUgbGlzdGVuaW5nIGZvciBmdXJ0aGVyIGNoYW5nZSBldmVudHMgYW5kIHJlLXJ1biB0aGUgdGhlXG5cdFx0Ly8gaW5pdGlhbGl6YXRpb24gcHJvY2Vzcy4gSWYgdGhlIGNvbnNlbnQgaXMgZmFsc2Ugd2UgbG9vcCBhcyBsb25nIGFzIHRoZVxuXHRcdC8vIHVzZXIgd2lsbCBnaXZlIGEgY29uc2VudC4uLlxuXHRcdHRoaXMuY29uc2VudHMub2ZmKCdjaGFuZ2UnLCB0aGlzLl9vbkNoYW5nZUNvbnNlbnQpO1xuXHRcdHRoaXMucnVuKCk7XG5cdH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==