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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/navigation.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/navigation.scss":
/*!************************************!*\
  !*** ./assets/css/navigation.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/modules/dom-helper/index.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/dom-helper/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DOMHelper =
/*#__PURE__*/
function () {
  function DOMHelper() {
    _classCallCheck(this, DOMHelper);
  }

  _createClass(DOMHelper, null, [{
    key: "addClass",
    value: function addClass(element, name) {
      var names = element.className.split(/\s+/);

      if (-1 === names.indexOf(name)) {
        element.className += ' ' + name;
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, name) {
      var names = element.className.split(/\s+/);
      var index = names.indexOf(name);

      if (-1 < index) {
        names.splice(index, 1).join(' ');
        element.className = names.join(' ');
      }
    }
  }]);

  return DOMHelper;
}();

/* harmony default export */ __webpack_exports__["default"] = (DOMHelper);

/***/ }),

/***/ "./assets/js/modules/navigation/index.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/navigation/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom-helper */ "./assets/js/modules/dom-helper/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Navigation =
/*#__PURE__*/
function () {
  _createClass(Navigation, null, [{
    key: "UP",
    get: function get() {
      return 'up';
    }
  }, {
    key: "DOWN",
    get: function get() {
      return 'down';
    }
  }, {
    key: "LEFT",
    get: function get() {
      return 'left';
    }
  }, {
    key: "RIGHT",
    get: function get() {
      return 'right';
    }
  }]);

  function Navigation(elements, configuration) {
    _classCallCheck(this, Navigation);

    this.configuration = configuration;
    this.elements = Array.prototype.slice.call('string' === typeof elements ? document.querySelectorAll(elements) : elements);
    this.build();

    if (this.elements.length > 0) {
      this.setCurrent(this.elements[0]);
    }
  }

  _createClass(Navigation, [{
    key: "setCurrent",
    value: function setCurrent(element) {
      var _this = this;

      if (element) {
        this.current = element;
        this.elements.forEach(function (el) {
          _dom_helper__WEBPACK_IMPORTED_MODULE_0__["default"].removeClass(el, _this.configuration.currentClass || 'current');
        });
        _dom_helper__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(element, this.configuration.currentClass || 'current');
      }
    }
  }, {
    key: "build",
    value: function build() {}
  }, {
    key: "move",
    value: function move(direction) {}
  }, {
    key: "moveTo",
    value: function moveTo(index) {
      this.setCurrent(this.elements[index]);
    }
  }, {
    key: "select",
    value: function select() {
      return this.current;
    }
  }, {
    key: "getCurrentIndex",
    value: function getCurrentIndex() {
      return this.elements.indexOf(this.current);
    }
  }]);

  return Navigation;
}();

var GridNavigation =
/*#__PURE__*/
function (_Navigation) {
  _inherits(GridNavigation, _Navigation);

  function GridNavigation() {
    _classCallCheck(this, GridNavigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridNavigation).apply(this, arguments));
  }

  _createClass(GridNavigation, [{
    key: "build",
    value: function build() {
      var rows = {};
      var cols = {};
      this.elements.forEach(function (el) {
        rows[el.offsetTop] = el;
        cols[el.offsetLeft] = el;
      });
      this.numberOfRows = Object.keys(rows).length;
      this.numberOfCols = Object.keys(cols).length;
    }
  }, {
    key: "move",
    value: function move(direction) {
      var index = this.getCurrentIndex();

      switch (direction) {
        case Navigation.UP:
          if (this.getCurrentRow() > 0) {
            index -= this.numberOfCols;
          }

          break;

        case Navigation.DOWN:
          if (this.getCurrentRow() < this.numberOfRows) {
            index += this.numberOfCols;
          }

          break;

        case Navigation.LEFT:
          if (this.getCurrentCol() > 0) {
            index -= 1;
          }

          break;

        case Navigation.RIGHT:
          if (this.getCurrentCol() < this.numberOfCols - 1) {
            index += 1;
          }

          break;
      }

      if (index !== this.getCurrentIndex()) {
        this.setCurrent(this.elements[index]);
      }
    }
  }, {
    key: "setCurrent",
    value: function setCurrent(element) {
      _get(_getPrototypeOf(GridNavigation.prototype), "setCurrent", this).call(this, element);

      if (!this.cursor) {
        this.cursor = document.createElement('div');
        _dom_helper__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(this.cursor, this.configuration.cursorClass || 'cursor');
        this.current.parentNode.appendChild(this.cursor);
      }

      if (element) {
        this.cursor.style.top = this.current.offsetTop + 'px';
        this.cursor.style.left = this.current.offsetLeft + 'px';
        this.cursor.style.width = this.current.offsetWidth + 'px';
        this.cursor.style.height = this.current.offsetHeight + 'px';
      }
    }
  }, {
    key: "getCurrentCol",
    value: function getCurrentCol() {
      return this.getCurrentIndex() % this.numberOfCols;
    }
  }, {
    key: "getCurrentRow",
    value: function getCurrentRow() {
      return Math.floor(this.getCurrentIndex() / this.numberOfCols);
    }
  }]);

  return GridNavigation;
}(Navigation);

/* harmony default export */ __webpack_exports__["default"] = (GridNavigation);

/***/ }),

/***/ "./assets/js/navigation.js":
/*!*********************************!*\
  !*** ./assets/js/navigation.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navigation */ "./assets/js/modules/navigation/index.js");
/* harmony import */ var _modules_dom_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom-helper */ "./assets/js/modules/dom-helper/index.js");
/* global gSTB:false, stbWebWindow:false */



__webpack_require__(/*! ../css/navigation.scss */ "./assets/css/navigation.scss"); // Skip backward/forward in seconds


var SKIP_DELTA = 30 * 60; // Volume up/down step

var VOLUME_DELTA = 10;

var formatTime = function formatTime(time) {
  var seconds = time % 60;
  time = Math.floor(time / 60);
  var minutes = time % 60;
  time = Math.floor(time / 60);
  var hours = time;
  return [hours.toFixed(0), ('0' + minutes.toFixed(0)).slice(-2), ('0' + seconds.toFixed(0)).slice(-2)].join(':');
};

window.addEventListener('load', function () {
  var stb = gSTB; // const debugContainer = document.createElement('pre')
  // debugContainer.style.position = 'absolute'
  // debugContainer.style.top = debugContainer.style.left = debugContainer.style.right = 0
  // debugContainer.style.padding = '1em'
  // debugContainer.style.backgroundColor = 'yellow'
  // debugContainer.style.color = 'black'
  // debugContainer.style.zIndex = 1000
  // document.body.appendChild(debugContainer)

  var DEBUG = function DEBUG() {// debugContainer.innerHTML = args.map((arg) => JSON.stringify(arg, null, 2)).join('\n')
  };

  document.querySelector('.audio-player').style.visibility = 'hidden';

  var initPlayer = function initPlayer(data) {
    try {
      document.querySelector('.audio-player').style.visibility = 'visible';
      document.querySelector('.audio-player-title').innerHTML = data.artist;
      document.querySelector('.audio-player-cover img').src = data.cover;
      document.querySelector('.audio-player-progress-time-elapsed').innerHTML = formatTime(0);
      document.querySelector('.audio-player-progress-time-length').innerHTML = formatTime(data.duration);
      document.querySelector('.audio-player-progress-bar-elapsed').style.width = '0';
    } catch (ex) {
      DEBUG('exception', ex.message);
    }
  };

  var startPlayer = function startPlayer(element) {
    var audioUrl = element.getAttribute('data-audio-url');
    var audioData = JSON.parse(element.getAttribute('data-audio-data'));
    initPlayer(audioData);
    DEBUG('Play audio book', audioUrl, audioData);

    try {
      stb.Stop();
      stb.InitPlayer();
      stb.Play(audioUrl);
    } catch (ex) {
      DEBUG('exception', ex.message);
    }
  };

  var stopPlayer = function stopPlayer() {
    stb.Stop();
  };

  var updatePlayer = function updatePlayer() {
    DEBUG([new Date(), formatTime(stb.GetPosTime()), stb.GetPosTime(), formatTime(stb.GetMediaLen()), stb.GetMediaLen(), stb.GetPosPercent()]);

    if (stb.IsPlaying()) {
      _modules_dom_helper__WEBPACK_IMPORTED_MODULE_1__["default"].addClass(document.querySelector('.audio-player'), 'is-playing');
    } else {
      _modules_dom_helper__WEBPACK_IMPORTED_MODULE_1__["default"].removeClass(document.querySelector('.audio-player'), 'is-playing');
    }

    document.querySelector('.audio-player-progress-time-elapsed').innerHTML = formatTime(stb.GetPosTime());
    document.querySelector('.audio-player-progress-time-length').innerHTML = formatTime(stb.GetMediaLen());
    document.querySelector('.audio-player-progress-bar-elapsed').style.width = stb.GetPosPercent() + '%';
  };

  setInterval(updatePlayer, 500);
  var navigation = new _modules_navigation__WEBPACK_IMPORTED_MODULE_0__["default"]('.paragraphs-item-campaign-audio-book', {
    currentClass: 'kreol-campaign-current'
  });
  document.addEventListener('keydown', function (e) {
    DEBUG({
      // 'key': e.key,
      'keyCode': e.keyCode
    });

    switch (e.keyCode) {
      case 8: // BACK

      case 27: // EXIT

      case 122:
        // HOME
        stbWebWindow.close();
        break;

      case 89:
        // INFO
        // DEBUG(audio)
        break;

      case 40:
        // DOWN
        navigation.move(_modules_navigation__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN);
        break;

      case 37:
        // LEFT
        navigation.move(_modules_navigation__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT);
        break;

      case 39:
        // RIGHT
        navigation.move(_modules_navigation__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT);
        break;

      case 38:
        // UP
        navigation.move(_modules_navigation__WEBPACK_IMPORTED_MODULE_0__["default"].UP);
        break;

      case 13: // ENTER/OK

      case 32:
        // SPACE
        startPlayer(navigation.select());
        break;

      case 33: // PREV TRACK

      case 34:
        // NEXT TRACK
        break;

      case 107:
        // VOLUME UP
        stb.SetVolume(Math.min(stb.GetVolume() + VOLUME_DELTA, 100));
        break;

      case 109:
        // VOLUME DOWN
        stb.SetVolume(Math.max(stb.GetVolume() - VOLUME_DELTA, 0));
        break;

      case 192:
        // MUTE
        stb.SetMute(0 === stb.GetMute() ? 1 : 0);
        break;

      case 82:
        // PLAY/PAUSE
        DEBUG(stb.IsPlaying());

        if (stb.IsPlaying()) {
          stb.Pause();
        } else {
          stb.Continue();
        }

        break;

      case 66:
        // SKIP BACKWARD
        stb.SetPosTime(Math.max(stb.GetPosTime() - SKIP_DELTA, 0));
        break;

      case 70:
        // SKIP FORWARD
        stb.SetPosTime(Math.min(stb.GetPosTime() + SKIP_DELTA, stb.GetMediaLen()));
        break;

      case 83:
        // STOP
        stopPlayer();
        break;

      case 116:
        DEBUG('Reloading …');
        stb.Stop();
        location.reload(true);
        break;
    }
  });
  DEBUG('Ready');
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9uYXZpZ2F0aW9uLnNjc3M/ZGNjMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9kb20taGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiRE9NSGVscGVyIiwiZWxlbWVudCIsIm5hbWUiLCJuYW1lcyIsImNsYXNzTmFtZSIsInNwbGl0IiwiaW5kZXhPZiIsImluZGV4Iiwic3BsaWNlIiwiam9pbiIsIk5hdmlnYXRpb24iLCJlbGVtZW50cyIsImNvbmZpZ3VyYXRpb24iLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJ1aWxkIiwibGVuZ3RoIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJmb3JFYWNoIiwiZWwiLCJyZW1vdmVDbGFzcyIsImN1cnJlbnRDbGFzcyIsImFkZENsYXNzIiwiZGlyZWN0aW9uIiwiR3JpZE5hdmlnYXRpb24iLCJyb3dzIiwiY29scyIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJudW1iZXJPZlJvd3MiLCJPYmplY3QiLCJrZXlzIiwibnVtYmVyT2ZDb2xzIiwiZ2V0Q3VycmVudEluZGV4IiwiVVAiLCJnZXRDdXJyZW50Um93IiwiRE9XTiIsIkxFRlQiLCJnZXRDdXJyZW50Q29sIiwiUklHSFQiLCJjdXJzb3IiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yQ2xhc3MiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiTWF0aCIsImZsb29yIiwicmVxdWlyZSIsIlNLSVBfREVMVEEiLCJWT0xVTUVfREVMVEEiLCJmb3JtYXRUaW1lIiwidGltZSIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJ0b0ZpeGVkIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YiIsImdTVEIiLCJERUJVRyIsInF1ZXJ5U2VsZWN0b3IiLCJ2aXNpYmlsaXR5IiwiaW5pdFBsYXllciIsImRhdGEiLCJpbm5lckhUTUwiLCJhcnRpc3QiLCJzcmMiLCJjb3ZlciIsImR1cmF0aW9uIiwiZXgiLCJtZXNzYWdlIiwic3RhcnRQbGF5ZXIiLCJhdWRpb1VybCIsImdldEF0dHJpYnV0ZSIsImF1ZGlvRGF0YSIsIkpTT04iLCJwYXJzZSIsIlN0b3AiLCJJbml0UGxheWVyIiwiUGxheSIsInN0b3BQbGF5ZXIiLCJ1cGRhdGVQbGF5ZXIiLCJEYXRlIiwiR2V0UG9zVGltZSIsIkdldE1lZGlhTGVuIiwiR2V0UG9zUGVyY2VudCIsIklzUGxheWluZyIsInNldEludGVydmFsIiwibmF2aWdhdGlvbiIsImUiLCJrZXlDb2RlIiwic3RiV2ViV2luZG93IiwiY2xvc2UiLCJtb3ZlIiwic2VsZWN0IiwiU2V0Vm9sdW1lIiwibWluIiwiR2V0Vm9sdW1lIiwibWF4IiwiU2V0TXV0ZSIsIkdldE11dGUiLCJQYXVzZSIsIkNvbnRpbnVlIiwiU2V0UG9zVGltZSIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFmO0FBQ0M7O0FBRUYsV0FBSyxFQUFMO0FBQVM7QUFDUlUsV0FBRyxDQUFDOEMsVUFBSixDQUFlM0QsSUFBSSxDQUFDb0QsR0FBTCxDQUFTdkMsR0FBRyxDQUFDMEIsVUFBSixLQUFtQnBDLFVBQTVCLEVBQXdDVSxHQUFHLENBQUMyQixXQUFKLEVBQXhDLENBQWY7QUFDQzs7QUFFRixXQUFLLEVBQUw7QUFBUztBQUNQSixrQkFBVTtBQUNWOztBQUVGLFdBQUssR0FBTDtBQUNFckIsYUFBSyxDQUFDLGFBQUQsQ0FBTDtBQUNBRixXQUFHLENBQUNvQixJQUFKO0FBQ0EyQixnQkFBUSxDQUFDQyxNQUFULENBQWdCLElBQWhCO0FBQ0E7QUF6RUY7QUEyRUQsR0FqRkQ7QUFtRkE5QyxPQUFLLENBQUMsT0FBRCxDQUFMO0FBQ0QsQ0FwS0QsRSIsImZpbGUiOiJuYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL25hdmlnYXRpb24uanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjbGFzcyBET01IZWxwZXIge1xuICBzdGF0aWMgYWRkQ2xhc3MoZWxlbWVudCwgbmFtZSkge1xuICAgIGNvbnN0IG5hbWVzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvKVxuICAgIGlmICgtMSA9PT0gbmFtZXMuaW5kZXhPZihuYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBuYW1lXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlbW92ZUNsYXNzKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBjb25zdCBuYW1lcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylcbiAgICBjb25zdCBpbmRleCA9IG5hbWVzLmluZGV4T2YobmFtZSlcbiAgICBpZiAoLTEgPCBpbmRleCkge1xuICAgICAgbmFtZXMuc3BsaWNlKGluZGV4LCAxKS5qb2luKCcgJylcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gbmFtZXMuam9pbignICcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhlbHBlclxuIiwiaW1wb3J0IERPTUhlbHBlciBmcm9tICcuLi9kb20taGVscGVyJ1xuXG5jbGFzcyBOYXZpZ2F0aW9uIHtcbiAgc3RhdGljIGdldCBVUCgpIHtcbiAgICByZXR1cm4gJ3VwJ1xuICB9XG5cbiAgc3RhdGljIGdldCBET1dOKCkge1xuICAgIHJldHVybiAnZG93bidcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTEVGVCgpIHtcbiAgICByZXR1cm4gJ2xlZnQnXG4gIH1cblxuICBzdGF0aWMgZ2V0IFJJR0hUKCkge1xuICAgIHJldHVybiAncmlnaHQnXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50cywgY29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb25cblxuICAgIHRoaXMuZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgnc3RyaW5nJyA9PT0gdHlwZW9mIGVsZW1lbnRzID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cykgOiBlbGVtZW50cylcbiAgICB0aGlzLmJ1aWxkKClcbiAgICBpZiAodGhpcy5lbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5lbGVtZW50c1swXSlcbiAgICB9XG4gIH1cblxuICBzZXRDdXJyZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gZWxlbWVudFxuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBET01IZWxwZXIucmVtb3ZlQ2xhc3MoZWwsIHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50Q2xhc3MgfHwgJ2N1cnJlbnQnKVxuICAgICAgfSlcbiAgICAgIERPTUhlbHBlci5hZGRDbGFzcyhlbGVtZW50LCB0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudENsYXNzIHx8ICdjdXJyZW50JylcbiAgICB9XG4gIH1cblxuICBidWlsZCgpIHtcbiAgfVxuXG4gIG1vdmUoZGlyZWN0aW9uKSB7XG4gIH1cblxuICBtb3ZlVG8oaW5kZXgpIHtcbiAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5lbGVtZW50c1tpbmRleF0pXG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFxuICB9XG5cbiAgZ2V0Q3VycmVudEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzLmluZGV4T2YodGhpcy5jdXJyZW50KVxuICB9XG59XG5cbmNsYXNzIEdyaWROYXZpZ2F0aW9uIGV4dGVuZHMgTmF2aWdhdGlvbiB7XG4gIGJ1aWxkKCkge1xuICAgIGNvbnN0IHJvd3MgPSB7fVxuICAgIGNvbnN0IGNvbHMgPSB7fVxuXG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgcm93c1tlbC5vZmZzZXRUb3BdID0gZWxcbiAgICAgIGNvbHNbZWwub2Zmc2V0TGVmdF0gPSBlbFxuICAgIH0pXG5cbiAgICB0aGlzLm51bWJlck9mUm93cyA9IE9iamVjdC5rZXlzKHJvd3MpLmxlbmd0aFxuICAgIHRoaXMubnVtYmVyT2ZDb2xzID0gT2JqZWN0LmtleXMoY29scykubGVuZ3RoXG4gIH1cblxuICBtb3ZlKGRpcmVjdGlvbikge1xuICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KClcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgTmF2aWdhdGlvbi5VUDpcbiAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRSb3coKSA+IDApIHtcbiAgICAgICAgaW5kZXggLT0gdGhpcy5udW1iZXJPZkNvbHNcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBOYXZpZ2F0aW9uLkRPV046XG4gICAgICBpZiAodGhpcy5nZXRDdXJyZW50Um93KCkgPCB0aGlzLm51bWJlck9mUm93cykge1xuICAgICAgICBpbmRleCArPSB0aGlzLm51bWJlck9mQ29sc1xuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIE5hdmlnYXRpb24uTEVGVDpcbiAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRDb2woKSA+IDApIHtcbiAgICAgICAgaW5kZXggLT0gMVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIE5hdmlnYXRpb24uUklHSFQ6XG4gICAgICBpZiAodGhpcy5nZXRDdXJyZW50Q29sKCkgPCB0aGlzLm51bWJlck9mQ29scyAtIDEpIHtcbiAgICAgICAgaW5kZXggKz0gMVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggIT09IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkpXG4gICAge1xuICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZWxlbWVudHNbaW5kZXhdKVxuICAgIH1cbiAgfVxuXG4gIHNldEN1cnJlbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnNldEN1cnJlbnQoZWxlbWVudClcblxuICAgIGlmICghdGhpcy5jdXJzb3IpIHtcbiAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIERPTUhlbHBlci5hZGRDbGFzcyh0aGlzLmN1cnNvciwgdGhpcy5jb25maWd1cmF0aW9uLmN1cnNvckNsYXNzIHx8ICdjdXJzb3InKVxuICAgICAgdGhpcy5jdXJyZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3VycmVudC5vZmZzZXRUb3AgKyAncHgnXG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJyZW50Lm9mZnNldExlZnQgKyAncHgnXG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS53aWR0aCA9IHRoaXMuY3VycmVudC5vZmZzZXRXaWR0aCArICdweCdcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLmhlaWdodCA9IHRoaXMuY3VycmVudC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudENvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAlIHRoaXMubnVtYmVyT2ZDb2xzXG4gIH1cblxuICBnZXRDdXJyZW50Um93KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgLyB0aGlzLm51bWJlck9mQ29scylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkTmF2aWdhdGlvblxuIiwiLyogZ2xvYmFsIGdTVEI6ZmFsc2UsIHN0YldlYldpbmRvdzpmYWxzZSAqL1xuXG5pbXBvcnQgR3JpZE5hdmlnYXRpb24gZnJvbSAnLi9tb2R1bGVzL25hdmlnYXRpb24nXG5pbXBvcnQgRE9NSGVscGVyIGZyb20gJy4vbW9kdWxlcy9kb20taGVscGVyJ1xuXG5yZXF1aXJlKCcuLi9jc3MvbmF2aWdhdGlvbi5zY3NzJyk7XG5cbi8vIFNraXAgYmFja3dhcmQvZm9yd2FyZCBpbiBzZWNvbmRzXG5jb25zdCBTS0lQX0RFTFRBID0gMzAgKiA2MFxuXG4vLyBWb2x1bWUgdXAvZG93biBzdGVwXG5jb25zdCBWT0xVTUVfREVMVEEgPSAxMFxuXG5jb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUlNjA7XG4gIHRpbWUgPSBNYXRoLmZsb29yKHRpbWUvNjApXG4gIGNvbnN0IG1pbnV0ZXMgPSB0aW1lJTYwO1xuICB0aW1lID0gTWF0aC5mbG9vcih0aW1lLzYwKVxuICBjb25zdCBob3VycyA9IHRpbWVcblxuICByZXR1cm4gW2hvdXJzLnRvRml4ZWQoMCksICgnMCcrbWludXRlcy50b0ZpeGVkKDApKS5zbGljZSgtMiksICgnMCcrc2Vjb25kcy50b0ZpeGVkKDApKS5zbGljZSgtMildLmpvaW4oJzonKVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCBzdGIgPSBnU1RCXG5cbiAgLy8gY29uc3QgZGVidWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKVxuICAvLyBkZWJ1Z0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgLy8gZGVidWdDb250YWluZXIuc3R5bGUudG9wID0gZGVidWdDb250YWluZXIuc3R5bGUubGVmdCA9IGRlYnVnQ29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gMFxuICAvLyBkZWJ1Z0NvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzFlbSdcbiAgLy8gZGVidWdDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgLy8gZGVidWdDb250YWluZXIuc3R5bGUuY29sb3IgPSAnYmxhY2snXG4gIC8vIGRlYnVnQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9IDEwMDBcbiAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWJ1Z0NvbnRhaW5lcilcblxuICBjb25zdCBERUJVRyA9ICguLi5hcmdzKSA9PiB7XG4gICAgLy8gZGVidWdDb250YWluZXIuaW5uZXJIVE1MID0gYXJncy5tYXAoKGFyZykgPT4gSlNPTi5zdHJpbmdpZnkoYXJnLCBudWxsLCAyKSkuam9pbignXFxuJylcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcblxuICBjb25zdCBpbml0UGxheWVyID0gKGRhdGEpID0+IHtcbiAgICB0cnkge1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllcicpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSdcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXRpdGxlJykuaW5uZXJIVE1MID0gZGF0YS5hcnRpc3RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLWNvdmVyIGltZycpLnNyYyA9IGRhdGEuY292ZXJcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXItcHJvZ3Jlc3MtdGltZS1lbGFwc2VkJykuaW5uZXJIVE1MID0gZm9ybWF0VGltZSgwKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXItcHJvZ3Jlc3MtdGltZS1sZW5ndGgnKS5pbm5lckhUTUwgPSBmb3JtYXRUaW1lKGRhdGEuZHVyYXRpb24pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllci1wcm9ncmVzcy1iYXItZWxhcHNlZCcpLnN0eWxlLndpZHRoID0gJzAnXG5cbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgREVCVUcoJ2V4Y2VwdGlvbicsIGV4Lm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RhcnRQbGF5ZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGF1ZGlvVXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXVkaW8tdXJsJylcbiAgICBjb25zdCBhdWRpb0RhdGEgPSBKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWF1ZGlvLWRhdGEnKSlcblxuICAgIGluaXRQbGF5ZXIoYXVkaW9EYXRhKVxuICAgIERFQlVHKCdQbGF5IGF1ZGlvIGJvb2snLCBhdWRpb1VybCwgYXVkaW9EYXRhKVxuXG4gICAgdHJ5IHtcbiAgICAgIHN0Yi5TdG9wKClcbiAgICAgIHN0Yi5Jbml0UGxheWVyKClcbiAgICAgIHN0Yi5QbGF5KGF1ZGlvVXJsKVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBERUJVRygnZXhjZXB0aW9uJywgZXgubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdG9wUGxheWVyID0gKCkgPT4ge1xuICAgIHN0Yi5TdG9wKClcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVBsYXllciA9ICgpID0+IHtcbiAgICBERUJVRyhbXG4gICAgICBuZXcgRGF0ZSgpLFxuICAgICAgZm9ybWF0VGltZShzdGIuR2V0UG9zVGltZSgpKSxcbiAgICAgIHN0Yi5HZXRQb3NUaW1lKCksXG4gICAgICBmb3JtYXRUaW1lKHN0Yi5HZXRNZWRpYUxlbigpKSxcbiAgICAgIHN0Yi5HZXRNZWRpYUxlbigpLFxuICAgICAgc3RiLkdldFBvc1BlcmNlbnQoKVxuICAgIF0pXG5cbiAgICBpZiAoc3RiLklzUGxheWluZygpKSB7XG4gICAgICBET01IZWxwZXIuYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllcicpLCAnaXMtcGxheWluZycpXG4gICAgfSBlbHNlIHtcbiAgICAgIERPTUhlbHBlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyJyksICdpcy1wbGF5aW5nJylcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllci1wcm9ncmVzcy10aW1lLWVsYXBzZWQnKS5pbm5lckhUTUwgPSBmb3JtYXRUaW1lKHN0Yi5HZXRQb3NUaW1lKCkpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllci1wcm9ncmVzcy10aW1lLWxlbmd0aCcpLmlubmVySFRNTCA9IGZvcm1hdFRpbWUoc3RiLkdldE1lZGlhTGVuKCkpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllci1wcm9ncmVzcy1iYXItZWxhcHNlZCcpLnN0eWxlLndpZHRoID0gc3RiLkdldFBvc1BlcmNlbnQoKSsnJSdcbiAgfVxuXG4gIHNldEludGVydmFsKHVwZGF0ZVBsYXllciwgNTAwKVxuXG4gIGNvbnN0IG5hdmlnYXRpb24gPSBuZXcgR3JpZE5hdmlnYXRpb24oJy5wYXJhZ3JhcGhzLWl0ZW0tY2FtcGFpZ24tYXVkaW8tYm9vaycsIHtcbiAgICBjdXJyZW50Q2xhc3M6ICdrcmVvbC1jYW1wYWlnbi1jdXJyZW50J1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIERFQlVHKHtcbiAgICAgIC8vICdrZXknOiBlLmtleSxcbiAgICAgICdrZXlDb2RlJzogZS5rZXlDb2RlXG4gICAgfSlcblxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSA4OiAvLyBCQUNLXG4gICAgY2FzZSAyNzogLy8gRVhJVFxuICAgIGNhc2UgMTIyOiAvLyBIT01FXG4gICAgICBzdGJXZWJXaW5kb3cuY2xvc2UoKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgODk6IC8vIElORk9cbiAgICAgIC8vIERFQlVHKGF1ZGlvKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgNDA6IC8vIERPV05cbiAgICAgIG5hdmlnYXRpb24ubW92ZShHcmlkTmF2aWdhdGlvbi5ET1dOKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMzc6IC8vIExFRlRcbiAgICAgIG5hdmlnYXRpb24ubW92ZShHcmlkTmF2aWdhdGlvbi5MRUZUKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMzk6IC8vIFJJR0hUXG4gICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uUklHSFQpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAzODogLy8gVVBcbiAgICAgIG5hdmlnYXRpb24ubW92ZShHcmlkTmF2aWdhdGlvbi5VUClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDEzOiAvLyBFTlRFUi9PS1xuICAgIGNhc2UgMzI6IC8vIFNQQUNFXG4gICAgICBzdGFydFBsYXllcihuYXZpZ2F0aW9uLnNlbGVjdCgpKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMzM6IC8vIFBSRVYgVFJBQ0tcbiAgICBjYXNlIDM0OiAvLyBORVhUIFRSQUNLXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAxMDc6IC8vIFZPTFVNRSBVUFxuICAgICAgc3RiLlNldFZvbHVtZShNYXRoLm1pbihzdGIuR2V0Vm9sdW1lKCkgKyBWT0xVTUVfREVMVEEsIDEwMCkpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAxMDk6IC8vIFZPTFVNRSBET1dOXG4gICAgIHN0Yi5TZXRWb2x1bWUoTWF0aC5tYXgoc3RiLkdldFZvbHVtZSgpIC0gVk9MVU1FX0RFTFRBLCAwKSlcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDE5MjogLy8gTVVURVxuICAgICBzdGIuU2V0TXV0ZSgwID09PSBzdGIuR2V0TXV0ZSgpID8gMSA6IDApXG4gICAgICBicmVha1xuXG4gICAgY2FzZSA4MjogLy8gUExBWS9QQVVTRVxuICAgICAgREVCVUcoc3RiLklzUGxheWluZygpKVxuICAgICBpZiAoc3RiLklzUGxheWluZygpKSB7XG4gICAgICAgc3RiLlBhdXNlKClcbiAgICAgfSBlbHNlIHtcbiAgICAgICBzdGIuQ29udGludWUoKVxuICAgICB9XG4gICAgICBicmVha1xuXG4gICAgY2FzZSA2NjogLy8gU0tJUCBCQUNLV0FSRFxuICAgICBzdGIuU2V0UG9zVGltZShNYXRoLm1heChzdGIuR2V0UG9zVGltZSgpIC0gU0tJUF9ERUxUQSwgMCkpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSA3MDogLy8gU0tJUCBGT1JXQVJEXG4gICAgIHN0Yi5TZXRQb3NUaW1lKE1hdGgubWluKHN0Yi5HZXRQb3NUaW1lKCkgKyBTS0lQX0RFTFRBLCBzdGIuR2V0TWVkaWFMZW4oKSkpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSA4MzogLy8gU1RPUFxuICAgICAgc3RvcFBsYXllcigpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAxMTY6XG4gICAgICBERUJVRygnUmVsb2FkaW5nIOKApicpXG4gICAgICBzdGIuU3RvcCgpXG4gICAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxuXG4gIERFQlVHKCdSZWFkeScpXG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==