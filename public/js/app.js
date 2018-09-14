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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KeyEventHandler = function KeyEventHandler(props) {
    _classCallCheck(this, KeyEventHandler);

    this.props = props;
};

var props = {
    buttons: {
        r: '읽기',
        w: '쓰기',
        f: '새로고침'
    },
    inputValue: '',
    canHasMultiCharacters: false,
    get getCanHasMultiCharacters() {
        return this.canHasMultiCharacters;
    },
    set setCanHasMultiCharacters(bool) {
        this.canHasMultiCharacters = bool;
    },
    get getInputValue() {
        return this.inputValue;
    },
    set setInputValue(e) {
        var kCode = e.keyCode;
        var key = e.key;
        if (kCode === 13) {
            // Enter
            this.setCanHasMultiCharacters = true;
            alert(this.getInputValue);
        }
        if (kCode === 8) {
            // Backspace
            this.inputValue = this.inputValue.slice(0, this.inputValue.length - 1);
        }
        if (kCode > 64 && kCode < 91) {
            if (this.canHasMultiCharacters) {
                this.inputValue += key;
            } else {
                this.inputValue = key;
            }
        }
    }
};

var keyEventHandler = new KeyEventHandler(props);
var keyEvent = document.addEventListener('keyup', function (e) {
    e.preventDefault();
    var inputValueBox = document.querySelector('.inputValue');

    keyEventHandler.props.setInputValue = e;
    inputValueBox.innerHTML = keyEventHandler.props.getInputValue;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);