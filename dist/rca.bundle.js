(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-redux"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-redux", "redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("react-redux"), require("redux")) : factory(root["React"], root["ReactDOM"], root["ReactRedux"], root["Redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE_react_redux__, __WEBPACK_EXTERNAL_MODULE_redux__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/redux-counterApp/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/redux-counterApp/src/actions/index.js":
/*!*****************************************************!*\
  !*** ./pages/redux-counterApp/src/actions/index.js ***!
  \*****************************************************/
/*! exports provided: add, subtract, changeVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeVisibility", function() { return changeVisibility; });
var ADD = 'ADD';
var SUBTRACT = 'SUBTRACT';
var CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

var add = function add() {
  return {
    type: ADD
  };
};

var subtract = function subtract() {
  return {
    type: SUBTRACT
  };
};

var changeVisibility = function changeVisibility(visible) {
  return {
    type: CHANGE_VISIBILITY,
    visible: visible
  };
};



/***/ }),

/***/ "./pages/redux-counterApp/src/components/Counter.js":
/*!**********************************************************!*\
  !*** ./pages/redux-counterApp/src/components/Counter.js ***!
  \**********************************************************/
/*! exports provided: CounterConnected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterConnected", function() { return CounterConnected; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectors_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors/index */ "./pages/redux-counterApp/src/selectors/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/index */ "./pages/redux-counterApp/src/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Value:", this.props.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.props.add
      }, "Add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.props.subtract
      }, "Subtract"));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var CounterConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    value: Object(_selectors_index__WEBPACK_IMPORTED_MODULE_2__["getCounterValue"])(state)
  };
}, function (dispatch) {
  return {
    add: function add() {
      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_3__["add"])());
    },
    subtract: function subtract() {
      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_3__["subtract"])());
    }
  };
})(Counter);

/***/ }),

/***/ "./pages/redux-counterApp/src/components/Visibility.js":
/*!*************************************************************!*\
  !*** ./pages/redux-counterApp/src/components/Visibility.js ***!
  \*************************************************************/
/*! exports provided: VisibilityConnected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityConnected", function() { return VisibilityConnected; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/index */ "./pages/redux-counterApp/src/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Visibility =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Visibility, _React$Component);

  function Visibility() {
    _classCallCheck(this, Visibility);

    return _possibleConstructorReturn(this, _getPrototypeOf(Visibility).apply(this, arguments));
  }

  _createClass(Visibility, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.changeVisibility(true);
        }
      }, "Visible"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.changeVisibility(false);
        }
      }, "Hide"));
    }
  }]);

  return Visibility;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var VisibilityConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, function (dispatch) {
  return {
    changeVisibility: function changeVisibility(value) {
      return dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_1__["changeVisibility"])(value));
    }
  };
})(Visibility);

/***/ }),

/***/ "./pages/redux-counterApp/src/index.js":
/*!*********************************************!*\
  !*** ./pages/redux-counterApp/src/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/index */ "./pages/redux-counterApp/src/reducers/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Visibility */ "./pages/redux-counterApp/src/components/Visibility.js");
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Counter */ "./pages/redux-counterApp/src/components/Counter.js");
/* harmony import */ var _selectors_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectors/index */ "./pages/redux-counterApp/src/selectors/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__["rootReducer"]);

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Visibility__WEBPACK_IMPORTED_MODULE_5__["VisibilityConnected"], null), this.props.visible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Counter__WEBPACK_IMPORTED_MODULE_6__["CounterConnected"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var AppConnected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    visible: Object(_selectors_index__WEBPACK_IMPORTED_MODULE_7__["getVisibility"])(state)
  };
})(App);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppConnected, null)), document.getElementById('root'));

/***/ }),

/***/ "./pages/redux-counterApp/src/reducers/counterReducer.js":
/*!***************************************************************!*\
  !*** ./pages/redux-counterApp/src/reducers/counterReducer.js ***!
  \***************************************************************/
/*! exports provided: counterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return counterReducer; });
var counterReducer = function counterReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        value: state.value + 1
      };

    case "SUBTRACT":
      return {
        value: state.value - 1
      };

    default:
      return state || {
        value: 0
      };
  }
};

/***/ }),

/***/ "./pages/redux-counterApp/src/reducers/index.js":
/*!******************************************************!*\
  !*** ./pages/redux-counterApp/src/reducers/index.js ***!
  \******************************************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _counterReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterReducer */ "./pages/redux-counterApp/src/reducers/counterReducer.js");
/* harmony import */ var _visibilityReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visibilityReducer */ "./pages/redux-counterApp/src/reducers/visibilityReducer.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  counter: _counterReducer__WEBPACK_IMPORTED_MODULE_0__["counterReducer"],
  visible: _visibilityReducer__WEBPACK_IMPORTED_MODULE_1__["visibilityReducer"]
});

/***/ }),

/***/ "./pages/redux-counterApp/src/reducers/visibilityReducer.js":
/*!******************************************************************!*\
  !*** ./pages/redux-counterApp/src/reducers/visibilityReducer.js ***!
  \******************************************************************/
/*! exports provided: visibilityReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visibilityReducer", function() { return visibilityReducer; });
var visibilityReducer = function visibilityReducer(state, action) {
  if (action.type === "CHANGE_VISIBILITY") {
    return action.visible;
  }

  return true;
};

/***/ }),

/***/ "./pages/redux-counterApp/src/selectors/index.js":
/*!*******************************************************!*\
  !*** ./pages/redux-counterApp/src/selectors/index.js ***!
  \*******************************************************/
/*! exports provided: getCounterValue, getVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCounterValue", function() { return getCounterValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibility", function() { return getVisibility; });
var getCounterValue = function getCounterValue(state) {
  return state.counter.value;
};

var getVisibility = function getVisibility(state) {
  return state.visible;
};



/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "react-redux":
/*!*************************************************************************************************************!*\
  !*** external {"root":"ReactRedux","commonjs":"react-redux","commonjs2":"react-redux","amd":"react-redux"} ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_redux__;

/***/ }),

/***/ "redux":
/*!**************************************************************************************!*\
  !*** external {"root":"Redux","commonjs":"redux","commonjs2":"redux","amd":"redux"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redux__;

/***/ })

/******/ });
});
//# sourceMappingURL=rca.bundle.js.map