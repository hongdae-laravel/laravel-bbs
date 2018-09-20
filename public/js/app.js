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
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PromptAction = function () {
    function PromptAction() {
        _classCallCheck(this, PromptAction);

        this.promptAction = null;
    }

    _createClass(PromptAction, [{
        key: 'setPromptAction',
        value: function setPromptAction(promptAction) {
            this.promptAction = promptAction;
            console.log(this.promptAction.getActionName() + ' is setting.');
        }
    }, {
        key: 'getInputValue',
        value: function getInputValue() {
            return this.promptAction.getInputValue();
        }
    }, {
        key: 'isPossibleKeyInput',
        value: function isPossibleKeyInput(e) {
            return this.promptAction.isPossibleKeyInput(e);
        }
    }, {
        key: 'exec',
        value: function exec(e) {
            return this.promptAction.exec(e);
        }
    }]);

    return PromptAction;
}();

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
    }]);

    return KeyEvent;
}();

var ListenSingleCharKeyEvent = function (_KeyEvent) {
    _inherits(ListenSingleCharKeyEvent, _KeyEvent);

    function ListenSingleCharKeyEvent() {
        _classCallCheck(this, ListenSingleCharKeyEvent);

        var _this = _possibleConstructorReturn(this, (ListenSingleCharKeyEvent.__proto__ || Object.getPrototypeOf(ListenSingleCharKeyEvent)).call(this));

        _this.name = 'ListenSingleCharKeyEvent';
        return _this;
    }

    _createClass(ListenSingleCharKeyEvent, [{
        key: 'setInputValue',
        value: function setInputValue(keyName) {
            this.inputValue = keyName;
        }
    }, {
        key: 'isPossibleKeyInput',
        value: function isPossibleKeyInput(e) {
            if (e.keyCode > 64 && e.keyCode < 91) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'exec',
        value: function exec(e) {
            this.setInputValue(e.key);
            console.log(this.inputValue);
        }
    }]);

    return ListenSingleCharKeyEvent;
}(KeyEvent);

var ListenMultiKeyEvent = function (_KeyEvent2) {
    _inherits(ListenMultiKeyEvent, _KeyEvent2);

    function ListenMultiKeyEvent() {
        _classCallCheck(this, ListenMultiKeyEvent);

        var _this2 = _possibleConstructorReturn(this, (ListenMultiKeyEvent.__proto__ || Object.getPrototypeOf(ListenMultiKeyEvent)).call(this));

        _this2.name = 'ListenMultiKeyEvent';
        return _this2;
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
}(KeyEvent);

var EnterEvent = function (_KeyEvent3) {
    _inherits(EnterEvent, _KeyEvent3);

    function EnterEvent() {
        _classCallCheck(this, EnterEvent);

        var _this3 = _possibleConstructorReturn(this, (EnterEvent.__proto__ || Object.getPrototypeOf(EnterEvent)).call(this));

        _this3.name = 'EnterAction';
        return _this3;
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
    }]);

    return EnterEvent;
}(KeyEvent);

var RAction = function (_KeyEvent4) {
    _inherits(RAction, _KeyEvent4);

    function RAction() {
        _classCallCheck(this, RAction);

        var _this4 = _possibleConstructorReturn(this, (RAction.__proto__ || Object.getPrototypeOf(RAction)).call(this));

        _this4.name = 'rAction';
        return _this4;
    }

    _createClass(RAction, [{
        key: 'exec',
        value: function exec() {
            console.log('R');
        }
    }]);

    return RAction;
}(KeyEvent);

var WAction = function (_KeyEvent5) {
    _inherits(WAction, _KeyEvent5);

    function WAction() {
        _classCallCheck(this, WAction);

        var _this5 = _possibleConstructorReturn(this, (WAction.__proto__ || Object.getPrototypeOf(WAction)).call(this));

        _this5.name = 'wAction';
        return _this5;
    }

    _createClass(WAction, [{
        key: 'exec',
        value: function exec() {
            console.log('W');
        }
    }]);

    return WAction;
}(KeyEvent);

var FAction = function (_KeyEvent6) {
    _inherits(FAction, _KeyEvent6);

    function FAction() {
        _classCallCheck(this, FAction);

        var _this6 = _possibleConstructorReturn(this, (FAction.__proto__ || Object.getPrototypeOf(FAction)).call(this));

        _this6.name = 'fAction';
        return _this6;
    }

    _createClass(FAction, [{
        key: 'exec',
        value: function exec() {
            console.log('F');
        }
    }]);

    return FAction;
}(KeyEvent);

var pAction = new PromptAction();
var rAction = new RAction();
var wAction = new WAction();
var fAction = new FAction();

var enterEvent = new EnterEvent();
var listenSingleKeyEvent = new ListenSingleCharKeyEvent();
var listenMultiKeyEvent = new ListenMultiKeyEvent();

var actions = { enterEvent: enterEvent, rAction: rAction, wAction: wAction, fAction: fAction, listenSingleKeyEvent: listenSingleKeyEvent, listenMultiKeyEvent: listenMultiKeyEvent };
var currentAction = 'listenSingleKeyEvent';
pAction.setPromptAction(actions[currentAction]);

var keyEvent = document.addEventListener('keyup', function (e) {
    e.preventDefault();
    var inputValueBox = document.querySelector('.inputValue');
    if (e.code === "Enter") {
        actions['enterEvent'].setInputValue(pAction.getInputValue());
        pAction.setPromptAction(actions['enterEvent']);
        var nextActionName = pAction.exec(e);
        console.log('nextActionName', nextActionName);
        if (nextActionName === null) {
            pAction.setPromptAction(actions[currentAction]);
            inputValueBox.innerHTML = '잘못된 입력입니다. 다시 시도하세요.';
        } else {
            pAction.setPromptAction(actions[nextActionName]);
            currentAction = nextActionName;
        }
    } else {
        if (pAction.isPossibleKeyInput(e)) {
            pAction.exec(e);
        }
        inputValueBox.innerHTML = pAction.getInputValue();
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);