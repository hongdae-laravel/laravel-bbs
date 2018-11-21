/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyEvents_ListenSingleCharKeyEvent__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__KeyEvents_ListenMultiKeyEvent__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__KeyActions_PromptAction__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__KeyEvents_EnterEvent__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__KeyActions_RAction__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__KeyActions_WAction__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__KeyActions_FAction__ = __webpack_require__(25);









var promptAction = new __WEBPACK_IMPORTED_MODULE_2__KeyActions_PromptAction__["a" /* default */]();
var rAction = new __WEBPACK_IMPORTED_MODULE_4__KeyActions_RAction__["a" /* default */]();
var wAction = new __WEBPACK_IMPORTED_MODULE_5__KeyActions_WAction__["a" /* default */]();
var fAction = new __WEBPACK_IMPORTED_MODULE_6__KeyActions_FAction__["a" /* default */]();

var enterEvent = new __WEBPACK_IMPORTED_MODULE_3__KeyEvents_EnterEvent__["a" /* default */]();
var listenSingleKeyEvent = new __WEBPACK_IMPORTED_MODULE_0__KeyEvents_ListenSingleCharKeyEvent__["a" /* default */]();
var listenMultiKeyEvent = new __WEBPACK_IMPORTED_MODULE_1__KeyEvents_ListenMultiKeyEvent__["a" /* default */]();

var actions = { enterEvent: enterEvent, rAction: rAction, wAction: wAction, fAction: fAction, listenSingleKeyEvent: listenSingleKeyEvent, listenMultiKeyEvent: listenMultiKeyEvent };
var currentAction = 'listenSingleKeyEvent';
promptAction.setPromptAction(actions[currentAction]);

var keyEvent = document.addEventListener('keyup', function (e) {
    e.preventDefault();
    var inputValueBox = document.querySelector('.inputValue');
    if (e.code === "Enter") {
        actions['enterEvent'].setInputValue(promptAction.getInputValue());
        promptAction.setPromptAction(actions['enterEvent']);
        var nextActionName = promptAction.exec(e);
        console.log('nextActionName', nextActionName);
        if (nextActionName === null) {
            promptAction.setPromptAction(actions[currentAction]);
            inputValueBox.innerHTML = '잘못된 입력입니다. 다시 시도하세요.';
        } else {
            promptAction.setPromptAction(actions[nextActionName]);
            currentAction = nextActionName;
        }
    } else {
        if (promptAction.isPossibleKeyInput(e)) {
            promptAction.exec(e);
        }
        inputValueBox.innerHTML = promptAction.getInputValue();
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyEvent = function () {
    function KeyEvent() {
        _classCallCheck(this, KeyEvent);

        this.name = '';
        this.inputValue = '';
    }

    _createClass(KeyEvent, [{
        key: 'getActionName',
        value: function getActionName() {
            return this.name;
        }
    }, {
        key: 'getInputValue',
        value: function getInputValue() {
            return this.inputValue;
        }
    }, {
        key: 'isPossibleKeyInput',
        value: function isPossibleKeyInput(e) {
            console.log(this.name + ' has not possibleKey condition.');
            return true;
        }
    }, {
        key: 'afterSetExec',
        value: function afterSetExec() {
            console.log('This is afterSetExec from KeyEvent');
        }
    }]);

    return KeyEvent;
}();

/* harmony default export */ __webpack_exports__["a"] = (KeyEvent);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyEvent__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ListenSingleCharKeyEvent = function (_KeyEvent) {
    _inherits(ListenSingleCharKeyEvent, _KeyEvent);

    function ListenSingleCharKeyEvent() {
        _classCallCheck(this, ListenSingleCharKeyEvent);

        var _this = _possibleConstructorReturn(this, (ListenSingleCharKeyEvent.__proto__ || Object.getPrototypeOf(ListenSingleCharKeyEvent)).call(this));

        _this.name = 'ListenSingleCharKeyEvent';
        return _this;
    }

    _createClass(ListenSingleCharKeyEvent, [{
        key: "setInputValue",
        value: function setInputValue(keyName) {
            this.inputValue = keyName;
        }
    }, {
        key: "isPossibleKeyInput",
        value: function isPossibleKeyInput(e) {
            if (e.keyCode > 64 && e.keyCode < 91) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "exec",
        value: function exec(e) {
            this.setInputValue(e.key);
            console.log(this.inputValue);
        }
    }]);

    return ListenSingleCharKeyEvent;
}(__WEBPACK_IMPORTED_MODULE_0__KeyEvent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ListenSingleCharKeyEvent);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyEvent__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ListenMultiKeyEvent = function (_KeyEvent) {
    _inherits(ListenMultiKeyEvent, _KeyEvent);

    function ListenMultiKeyEvent() {
        _classCallCheck(this, ListenMultiKeyEvent);

        var _this = _possibleConstructorReturn(this, (ListenMultiKeyEvent.__proto__ || Object.getPrototypeOf(ListenMultiKeyEvent)).call(this));

        _this.name = 'ListenMultiKeyEvent';
        return _this;
    }

    _createClass(ListenMultiKeyEvent, [{
        key: 'setInputValue',
        value: function setInputValue(keyName) {
            this.inputValue += keyName;
        }
    }, {
        key: 'backspaceInputValue',
        value: function backspaceInputValue() {
            this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
        }
    }, {
        key: 'exec',
        value: function exec(e) {
            if (e.key === 'Backspace') {
                this.backspaceInputValue();
            } else {
                this.setInputValue(e.key);
            }
            console.log(this.inputValue);
        }
    }]);

    return ListenMultiKeyEvent;
}(__WEBPACK_IMPORTED_MODULE_0__KeyEvent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (ListenMultiKeyEvent);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PromptAction = function () {
    function PromptAction() {
        _classCallCheck(this, PromptAction);

        this.promptAction = null;
    }

    _createClass(PromptAction, [{
        key: "setPromptAction",
        value: function setPromptAction(promptAction) {
            this.promptAction = promptAction;
            console.log(this.promptAction.getActionName() + " is setting.");
            this.promptAction.afterSetExec();
        }
    }, {
        key: "getInputValue",
        value: function getInputValue() {
            return this.promptAction.getInputValue();
        }
    }, {
        key: "isPossibleKeyInput",
        value: function isPossibleKeyInput(e) {
            return this.promptAction.isPossibleKeyInput(e);
        }
    }, {
        key: "exec",
        value: function exec(e) {
            return this.promptAction.exec(e);
        }
    }]);

    return PromptAction;
}();

/* harmony default export */ __webpack_exports__["a"] = (PromptAction);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyEvent__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var EnterEvent = function (_KeyEvent) {
    _inherits(EnterEvent, _KeyEvent);

    function EnterEvent() {
        _classCallCheck(this, EnterEvent);

        var _this = _possibleConstructorReturn(this, (EnterEvent.__proto__ || Object.getPrototypeOf(EnterEvent)).call(this));

        _this.name = 'EnterAction';
        return _this;
    }

    _createClass(EnterEvent, [{
        key: 'setInputValue',
        value: function setInputValue(val) {
            this.inputValue = val;
        }
    }, {
        key: 'exec',
        value: function exec() {
            var tAction = this.getInputValue() + 'Action';
            if (actions.hasOwnProperty(tAction)) {
                return tAction;
            } else {
                return null;
            }
        }
    }, {
        key: 'afterSetExec',
        value: function afterSetExec() {
            console.log('This is afterSetExec from EnterEvent');
        }
    }]);

    return EnterEvent;
}(__WEBPACK_IMPORTED_MODULE_0__KeyEvent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (EnterEvent);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyEvents_KeyEvent__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var RAction = function (_KeyEvent) {
    _inherits(RAction, _KeyEvent);

    function RAction() {
        _classCallCheck(this, RAction);

        var _this = _possibleConstructorReturn(this, (RAction.__proto__ || Object.getPrototypeOf(RAction)).call(this));

        _this.name = 'rAction';
        return _this;
    }

    _createClass(RAction, [{
        key: 'exec',
        value: function exec() {
            console.log('R');
        }
    }]);

    return RAction;
}(__WEBPACK_IMPORTED_MODULE_0__KeyEvents_KeyEvent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (RAction);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyEvents_KeyEvent__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var WAction = function (_KeyEvent) {
    _inherits(WAction, _KeyEvent);

    function WAction() {
        _classCallCheck(this, WAction);

        var _this = _possibleConstructorReturn(this, (WAction.__proto__ || Object.getPrototypeOf(WAction)).call(this));

        _this.name = 'wAction';
        return _this;
    }

    _createClass(WAction, [{
        key: 'exec',
        value: function exec() {
            console.log('W');
        }
    }, {
        key: 'isPossibleKeyInput',
        value: function isPossibleKeyInput() {
            console.log('test');
        }
    }, {
        key: 'afterSetExec',
        value: function afterSetExec() {
            console.log('afterSetExec from wAction');
            var inputValueBox = document.querySelector('.inputValue');
            inputValueBox.innerHTML = '';
            var tempBrElem = document.createElement('br');
            var tempSpanElem = document.createElement('span');
            tempSpanElem.innerText = '» 글 제목:';
            inputValueBox.append(tempBrElem);
            inputValueBox.append(tempSpanElem);
        }
    }]);

    return WAction;
}(__WEBPACK_IMPORTED_MODULE_0__KeyEvents_KeyEvent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (WAction);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyEvents_KeyEvent__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FAction = function (_KeyEvent) {
    _inherits(FAction, _KeyEvent);

    function FAction() {
        _classCallCheck(this, FAction);

        var _this = _possibleConstructorReturn(this, (FAction.__proto__ || Object.getPrototypeOf(FAction)).call(this));

        _this.name = 'fAction';
        return _this;
    }

    _createClass(FAction, [{
        key: 'exec',
        value: function exec() {
            console.log('F');
        }
    }]);

    return FAction;
}(__WEBPACK_IMPORTED_MODULE_0__KeyEvents_KeyEvent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (FAction);

/***/ })
/******/ ]);