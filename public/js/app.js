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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("app.js is running.");
var buttons = {
    r: '읽기',
    w: '쓰기',
    f: '새로고침'
};

var KeyEventHandler = function () {
    // Todo: 게터 세터를 간단하게 만들기 위해 설정파일을 객체로 변경할 것!
    function KeyEventHandler(e, multiCharactors) {
        _classCallCheck(this, KeyEventHandler);

        this.e = {};
        this.buttons = buttons;
        this.inputValue = '';
        this.canHasMultiCharactors = multiCharactors;
    }

    _createClass(KeyEventHandler, [{
        key: 'setEvent',
        value: function setEvent(e) {
            this.e = e;
        }
    }, {
        key: 'setCanHasMultiCharactors',
        value: function setCanHasMultiCharactors(boolean) {
            this.canHasMultiCharactors = boolean;
        }
    }, {
        key: 'getCanHasMultiCharactors',
        value: function getCanHasMultiCharactors() {
            return this.canHasMultiCharactors;
        }
    }, {
        key: 'setInputValue',
        value: function setInputValue(key) {
            if (this.canHasMultiCharactors) {
                this.inputValue += key;
            } else {
                this.inputValue = key;
            }
        }
    }, {
        key: 'getInputValue',
        value: function getInputValue() {
            return this.inputValue;
        }
    }, {
        key: 'getKey',
        value: function getKey() {
            return this.e.key;
        }
    }, {
        key: 'getKeyCode',
        value: function getKeyCode() {
            return this.e.keyCode;
        }
    }, {
        key: 'getKeyName',
        value: function getKeyName() {
            var kName = this.buttons[this.e.key];
            return kName ? kName : null;
        }
    }]);

    return KeyEventHandler;
}();

var inputValue = '';
var keyEventHandler = new KeyEventHandler();

var keyEvent = document.addEventListener('keyup', function (e) {
    // 한글자만 받는 경우가 있고 여러 글자를 받는 경우가 있다.
    e.preventDefault();

    var inputValueBox = document.querySelector('.inputValue');
    keyEventHandler.setEvent(e);

    var kCode = keyEventHandler.getKeyCode();
    if (kCode === 13) {
        // Enter
        keyEventHandler.setCanHasMultiCharactors(true);
        alert(inputValue);
    }
    if (kCode === 8) {
        // Backspace
        inputValueBox.innerHTML = inputValue.slice(0, inputValue.length - 1);
    }
    if (kCode > 64 && kCode < 91) {
        keyEventHandler.setInputValue(keyEventHandler.getKey());
        inputValue += keyEventHandler.getKey();
        inputValueBox.innerHTML = keyEventHandler.getInputValue();
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);