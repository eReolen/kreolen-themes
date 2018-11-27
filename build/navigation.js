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


var SKIP_SHORT_DELTA = 1 * 60;
var SKIP_LONG_DELTA = 5 * 60; // Volume up/down step

var VOLUME_DELTA = 10;

var formatTime = function formatTime(time) {
  var seconds = time % 60;
  time = Math.floor(time / 60);
  var minutes = time % 60;
  time = Math.floor(time / 60);
  var hours = time;
  return [hours.toFixed(0), ('0' + minutes.toFixed(0)).slice(-2), ('0' + seconds.toFixed(0)).slice(-2)].join(':');
};

try {
  var stb = gSTB;
  stb.GetVolume();
} catch (ex) {
  window.gSTB = {
    Continue: function Continue() {},
    GetMediaLen: function GetMediaLen() {
      return 53501;
    },
    GetMute: function GetMute() {
      return 0;
    },
    GetPosPercent: function GetPosPercent() {
      return 42;
    },
    GetPosTime: function GetPosTime() {
      return 87;
    },
    GetVolume: function GetVolume() {},
    InitPlayer: function InitPlayer() {},
    IsPlaying: function IsPlaying() {
      return true;
    },
    Pause: function Pause() {},
    Play: function Play() {},
    SetMute: function SetMute() {},
    SetPosTime: function SetPosTime() {},
    SetVolume: function SetVolume() {},
    Stop: function Stop() {}
  };
}

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

      case 33:
        // PREV TRACK
        stb.SetPosTime(Math.max(stb.GetPosTime() - SKIP_LONG_DELTA, 0));
        updatePlayer();
        break;

      case 34:
        // NEXT TRACK
        stb.SetPosTime(Math.min(stb.GetPosTime() + SKIP_LONG_DELTA, stb.GetMediaLen()));
        updatePlayer();
        break;

      case 66:
        // SKIP BACKWARD
        stb.SetPosTime(Math.max(stb.GetPosTime() - SKIP_SHORT_DELTA, 0));
        updatePlayer();
        break;

      case 70:
        // SKIP FORWARD
        stb.SetPosTime(Math.min(stb.GetPosTime() + SKIP_SHORT_DELTA, stb.GetMediaLen()));
        updatePlayer();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9uYXZpZ2F0aW9uLnNjc3M/ZGNjMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9kb20taGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiRE9NSGVscGVyIiwiZWxlbWVudCIsIm5hbWUiLCJuYW1lcyIsImNsYXNzTmFtZSIsInNwbGl0IiwiaW5kZXhPZiIsImluZGV4Iiwic3BsaWNlIiwiam9pbiIsIk5hdmlnYXRpb24iLCJlbGVtZW50cyIsImNvbmZpZ3VyYXRpb24iLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJ1aWxkIiwibGVuZ3RoIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJmb3JFYWNoIiwiZWwiLCJyZW1vdmVDbGFzcyIsImN1cnJlbnRDbGFzcyIsImFkZENsYXNzIiwiZGlyZWN0aW9uIiwiR3JpZE5hdmlnYXRpb24iLCJyb3dzIiwiY29scyIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJudW1iZXJPZlJvd3MiLCJPYmplY3QiLCJrZXlzIiwibnVtYmVyT2ZDb2xzIiwiZ2V0Q3VycmVudEluZGV4IiwiVVAiLCJnZXRDdXJyZW50Um93IiwiRE9XTiIsIkxFRlQiLCJnZXRDdXJyZW50Q29sIiwiUklHSFQiLCJjdXJzb3IiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yQ2xhc3MiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiTWF0aCIsImZsb29yIiwicmVxdWlyZSIsIlNLSVBfU0hPUlRfREVMVEEiLCJTS0lQX0xPTkdfREVMVEEiLCJWT0xVTUVfREVMVEEiLCJmb3JtYXRUaW1lIiwidGltZSIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJ0b0ZpeGVkIiwic3RiIiwiZ1NUQiIsIkdldFZvbHVtZSIsImV4Iiwid2luZG93IiwiQ29udGludWUiLCJHZXRNZWRpYUxlbiIsIkdldE11dGUiLCJHZXRQb3NQZXJjZW50IiwiR2V0UG9zVGltZSIsIkluaXRQbGF5ZXIiLCJJc1BsYXlpbmciLCJQYXVzZSIsIlBsYXkiLCJTZXRNdXRlIiwiU2V0UG9zVGltZSIsIlNldFZvbHVtZSIsIlN0b3AiLCJhZGRFdmVudExpc3RlbmVyIiwiREVCVUciLCJxdWVyeVNlbGVjdG9yIiwidmlzaWJpbGl0eSIsImluaXRQbGF5ZXIiLCJkYXRhIiwiaW5uZXJIVE1MIiwiYXJ0aXN0Iiwic3JjIiwiY292ZXIiLCJkdXJhdGlvbiIsIm1lc3NhZ2UiLCJzdGFydFBsYXllciIsImF1ZGlvVXJsIiwiZ2V0QXR0cmlidXRlIiwiYXVkaW9EYXRhIiwiSlNPTiIsInBhcnNlIiwic3RvcFBsYXllciIsInVwZGF0ZVBsYXllciIsIkRhdGUiLCJzZXRJbnRlcnZhbCIsIm5hdmlnYXRpb24iLCJlIiwia2V5Q29kZSIsInN0YldlYldpbmRvdyIsImNsb3NlIiwibW92ZSIsInNlbGVjdCIsIm1heCIsIm1pbiIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTUEsUzs7Ozs7Ozs7OzZCQUNZQyxPLEVBQVNDLEksRUFBTTtBQUM3QixVQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsS0FBbEIsQ0FBd0IsS0FBeEIsQ0FBZDs7QUFDQSxVQUFJLENBQUMsQ0FBRCxLQUFPRixLQUFLLENBQUNHLE9BQU4sQ0FBY0osSUFBZCxDQUFYLEVBQWdDO0FBQzlCRCxlQUFPLENBQUNHLFNBQVIsSUFBcUIsTUFBTUYsSUFBM0I7QUFDRDtBQUNGOzs7Z0NBRWtCRCxPLEVBQVNDLEksRUFBTTtBQUNoQyxVQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsS0FBbEIsQ0FBd0IsS0FBeEIsQ0FBZDtBQUNBLFVBQU1FLEtBQUssR0FBR0osS0FBSyxDQUFDRyxPQUFOLENBQWNKLElBQWQsQ0FBZDs7QUFDQSxVQUFJLENBQUMsQ0FBRCxHQUFLSyxLQUFULEVBQWdCO0FBQ2RKLGFBQUssQ0FBQ0ssTUFBTixDQUFhRCxLQUFiLEVBQW9CLENBQXBCLEVBQXVCRSxJQUF2QixDQUE0QixHQUE1QjtBQUNBUixlQUFPLENBQUNHLFNBQVIsR0FBb0JELEtBQUssQ0FBQ00sSUFBTixDQUFXLEdBQVgsQ0FBcEI7QUFDRDtBQUNGOzs7Ozs7QUFHWVQsd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOztJQUVNVSxVOzs7Ozt3QkFDWTtBQUNkLGFBQU8sSUFBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sTUFBUDtBQUNEOzs7d0JBRWlCO0FBQ2hCLGFBQU8sTUFBUDtBQUNEOzs7d0JBRWtCO0FBQ2pCLGFBQU8sT0FBUDtBQUNEOzs7QUFFRCxzQkFBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFFQSxTQUFLRCxRQUFMLEdBQWdCRSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQixhQUFhLE9BQU9MLFFBQXBCLEdBQStCTSxRQUFRLENBQUNDLGdCQUFULENBQTBCUCxRQUExQixDQUEvQixHQUFxRUEsUUFBaEcsQ0FBaEI7QUFDQSxTQUFLUSxLQUFMOztBQUNBLFFBQUksS0FBS1IsUUFBTCxDQUFjUyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzVCLFdBQUtDLFVBQUwsQ0FBZ0IsS0FBS1YsUUFBTCxDQUFjLENBQWQsQ0FBaEI7QUFDRDtBQUNGOzs7OytCQUVVVixPLEVBQVM7QUFBQTs7QUFDbEIsVUFBSUEsT0FBSixFQUFhO0FBQ1gsYUFBS3FCLE9BQUwsR0FBZXJCLE9BQWY7QUFDQSxhQUFLVSxRQUFMLENBQWNZLE9BQWQsQ0FBc0IsVUFBQ0MsRUFBRCxFQUFRO0FBQzVCeEIsNkRBQVMsQ0FBQ3lCLFdBQVYsQ0FBc0JELEVBQXRCLEVBQTBCLEtBQUksQ0FBQ1osYUFBTCxDQUFtQmMsWUFBbkIsSUFBbUMsU0FBN0Q7QUFDRCxTQUZEO0FBR0ExQiwyREFBUyxDQUFDMkIsUUFBVixDQUFtQjFCLE9BQW5CLEVBQTRCLEtBQUtXLGFBQUwsQ0FBbUJjLFlBQW5CLElBQW1DLFNBQS9EO0FBQ0Q7QUFDRjs7OzRCQUVPLENBQ1A7Ozt5QkFFSUUsUyxFQUFXLENBQ2Y7OzsyQkFFTXJCLEssRUFBTztBQUNaLFdBQUtjLFVBQUwsQ0FBZ0IsS0FBS1YsUUFBTCxDQUFjSixLQUFkLENBQWhCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS2UsT0FBWjtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS1gsUUFBTCxDQUFjTCxPQUFkLENBQXNCLEtBQUtnQixPQUEzQixDQUFQO0FBQ0Q7Ozs7OztJQUdHTyxjOzs7Ozs7Ozs7Ozs7OzRCQUNJO0FBQ04sVUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQSxVQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBLFdBQUtwQixRQUFMLENBQWNZLE9BQWQsQ0FBc0IsVUFBQ0MsRUFBRCxFQUFRO0FBQzVCTSxZQUFJLENBQUNOLEVBQUUsQ0FBQ1EsU0FBSixDQUFKLEdBQXFCUixFQUFyQjtBQUNBTyxZQUFJLENBQUNQLEVBQUUsQ0FBQ1MsVUFBSixDQUFKLEdBQXNCVCxFQUF0QjtBQUNELE9BSEQ7QUFLQSxXQUFLVSxZQUFMLEdBQW9CQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sSUFBWixFQUFrQlYsTUFBdEM7QUFDQSxXQUFLaUIsWUFBTCxHQUFvQkYsTUFBTSxDQUFDQyxJQUFQLENBQVlMLElBQVosRUFBa0JYLE1BQXRDO0FBQ0Q7Ozt5QkFFSVEsUyxFQUFXO0FBQ2QsVUFBSXJCLEtBQUssR0FBRyxLQUFLK0IsZUFBTCxFQUFaOztBQUNBLGNBQVFWLFNBQVI7QUFDQSxhQUFLbEIsVUFBVSxDQUFDNkIsRUFBaEI7QUFDRSxjQUFJLEtBQUtDLGFBQUwsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUJqQyxpQkFBSyxJQUFJLEtBQUs4QixZQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0YsYUFBSzNCLFVBQVUsQ0FBQytCLElBQWhCO0FBQ0UsY0FBSSxLQUFLRCxhQUFMLEtBQXVCLEtBQUtOLFlBQWhDLEVBQThDO0FBQzVDM0IsaUJBQUssSUFBSSxLQUFLOEIsWUFBZDtBQUNEOztBQUNEOztBQUNGLGFBQUszQixVQUFVLENBQUNnQyxJQUFoQjtBQUNFLGNBQUksS0FBS0MsYUFBTCxLQUF1QixDQUEzQixFQUE4QjtBQUM1QnBDLGlCQUFLLElBQUksQ0FBVDtBQUNEOztBQUNEOztBQUNGLGFBQUtHLFVBQVUsQ0FBQ2tDLEtBQWhCO0FBQ0UsY0FBSSxLQUFLRCxhQUFMLEtBQXVCLEtBQUtOLFlBQUwsR0FBb0IsQ0FBL0MsRUFBa0Q7QUFDaEQ5QixpQkFBSyxJQUFJLENBQVQ7QUFDRDs7QUFDRDtBQXBCRjs7QUF1QkEsVUFBSUEsS0FBSyxLQUFLLEtBQUsrQixlQUFMLEVBQWQsRUFBc0M7QUFDcEMsYUFBS2pCLFVBQUwsQ0FBZ0IsS0FBS1YsUUFBTCxDQUFjSixLQUFkLENBQWhCO0FBQ0Q7QUFDRjs7OytCQUVVTixPLEVBQVM7QUFDbEIscUZBQWlCQSxPQUFqQjs7QUFFQSxVQUFJLENBQUMsS0FBSzRDLE1BQVYsRUFBa0I7QUFDaEIsYUFBS0EsTUFBTCxHQUFjNUIsUUFBUSxDQUFDNkIsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0E5QywyREFBUyxDQUFDMkIsUUFBVixDQUFtQixLQUFLa0IsTUFBeEIsRUFBZ0MsS0FBS2pDLGFBQUwsQ0FBbUJtQyxXQUFuQixJQUFrQyxRQUFsRTtBQUNBLGFBQUt6QixPQUFMLENBQWEwQixVQUFiLENBQXdCQyxXQUF4QixDQUFvQyxLQUFLSixNQUF6QztBQUNEOztBQUVELFVBQUk1QyxPQUFKLEVBQWE7QUFDWCxhQUFLNEMsTUFBTCxDQUFZSyxLQUFaLENBQWtCQyxHQUFsQixHQUF3QixLQUFLN0IsT0FBTCxDQUFhVSxTQUFiLEdBQXlCLElBQWpEO0FBQ0EsYUFBS2EsTUFBTCxDQUFZSyxLQUFaLENBQWtCRSxJQUFsQixHQUF5QixLQUFLOUIsT0FBTCxDQUFhVyxVQUFiLEdBQTBCLElBQW5EO0FBQ0EsYUFBS1ksTUFBTCxDQUFZSyxLQUFaLENBQWtCRyxLQUFsQixHQUEwQixLQUFLL0IsT0FBTCxDQUFhZ0MsV0FBYixHQUEyQixJQUFyRDtBQUNBLGFBQUtULE1BQUwsQ0FBWUssS0FBWixDQUFrQkssTUFBbEIsR0FBMkIsS0FBS2pDLE9BQUwsQ0FBYWtDLFlBQWIsR0FBNEIsSUFBdkQ7QUFDRDtBQUNGOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtsQixlQUFMLEtBQXlCLEtBQUtELFlBQXJDO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU9vQixJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLcEIsZUFBTCxLQUF5QixLQUFLRCxZQUF6QyxDQUFQO0FBQ0Q7Ozs7RUFuRTBCM0IsVTs7QUFzRWRtQiw2RUFBZixFOzs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOztBQUVBOEIsbUJBQU8sQ0FBQyw0REFBRCxDQUFQLEMsQ0FFQTs7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsSUFBSSxFQUE3QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxJQUFJLEVBQTVCLEMsQ0FFQTs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsRUFBckI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLE1BQU1DLE9BQU8sR0FBR0QsSUFBSSxHQUFDLEVBQXJCO0FBQ0FBLE1BQUksR0FBR1AsSUFBSSxDQUFDQyxLQUFMLENBQVdNLElBQUksR0FBQyxFQUFoQixDQUFQO0FBQ0EsTUFBTUUsT0FBTyxHQUFHRixJQUFJLEdBQUMsRUFBckI7QUFDQUEsTUFBSSxHQUFHUCxJQUFJLENBQUNDLEtBQUwsQ0FBV00sSUFBSSxHQUFDLEVBQWhCLENBQVA7QUFDQSxNQUFNRyxLQUFLLEdBQUdILElBQWQ7QUFFQSxTQUFPLENBQUNHLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBRCxFQUFtQixDQUFDLE1BQUlGLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixDQUFoQixDQUFMLEVBQXlCckQsS0FBekIsQ0FBK0IsQ0FBQyxDQUFoQyxDQUFuQixFQUF1RCxDQUFDLE1BQUlrRCxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBTCxFQUF5QnJELEtBQXpCLENBQStCLENBQUMsQ0FBaEMsQ0FBdkQsRUFBMkZOLElBQTNGLENBQWdHLEdBQWhHLENBQVA7QUFDRCxDQVJEOztBQVVBLElBQUk7QUFDRixNQUFNNEQsR0FBRyxHQUFHQyxJQUFaO0FBQ0FELEtBQUcsQ0FBQ0UsU0FBSjtBQUNELENBSEQsQ0FHRSxPQUFPQyxFQUFQLEVBQVc7QUFDWEMsUUFBTSxDQUFDSCxJQUFQLEdBQWM7QUFDWkksWUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FETjtBQUVaQyxlQUFXLEVBQUU7QUFBQSxhQUFNLEtBQU47QUFBQSxLQUZEO0FBR1pDLFdBQU8sRUFBRTtBQUFBLGFBQU0sQ0FBTjtBQUFBLEtBSEc7QUFJWkMsaUJBQWEsRUFBRTtBQUFBLGFBQU0sRUFBTjtBQUFBLEtBSkg7QUFLWkMsY0FBVSxFQUFFO0FBQUEsYUFBTSxFQUFOO0FBQUEsS0FMQTtBQU1aUCxhQUFTLEVBQUUscUJBQU0sQ0FBRSxDQU5QO0FBT1pRLGNBQVUsRUFBRSxzQkFBTSxDQUFFLENBUFI7QUFRWkMsYUFBUyxFQUFFO0FBQUEsYUFBTSxJQUFOO0FBQUEsS0FSQztBQVNaQyxTQUFLLEVBQUUsaUJBQU0sQ0FBRSxDQVRIO0FBVVpDLFFBQUksRUFBRSxnQkFBTSxDQUFFLENBVkY7QUFXWkMsV0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FYTDtBQVlaQyxjQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQVpSO0FBYVpDLGFBQVMsRUFBRSxxQkFBTSxDQUFFLENBYlA7QUFjWkMsUUFBSSxFQUFFLGdCQUFNLENBQUU7QUFkRixHQUFkO0FBZ0JEOztBQUVEYixNQUFNLENBQUNjLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVc7QUFDekMsTUFBTWxCLEdBQUcsR0FBR0MsSUFBWixDQUR5QyxDQUd6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1rQixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFhLENBQ3pCO0FBQ0QsR0FGRDs7QUFJQXZFLFVBQVEsQ0FBQ3dFLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0N2QyxLQUF4QyxDQUE4Q3dDLFVBQTlDLEdBQTJELFFBQTNEOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBVTtBQUMzQixRQUFJO0FBRUYzRSxjQUFRLENBQUN3RSxhQUFULENBQXVCLGVBQXZCLEVBQXdDdkMsS0FBeEMsQ0FBOEN3QyxVQUE5QyxHQUEyRCxTQUEzRDtBQUNBekUsY0FBUSxDQUFDd0UsYUFBVCxDQUF1QixxQkFBdkIsRUFBOENJLFNBQTlDLEdBQTBERCxJQUFJLENBQUNFLE1BQS9EO0FBQ0E3RSxjQUFRLENBQUN3RSxhQUFULENBQXVCLHlCQUF2QixFQUFrRE0sR0FBbEQsR0FBd0RILElBQUksQ0FBQ0ksS0FBN0Q7QUFFQS9FLGNBQVEsQ0FBQ3dFLGFBQVQsQ0FBdUIscUNBQXZCLEVBQThESSxTQUE5RCxHQUEwRTlCLFVBQVUsQ0FBQyxDQUFELENBQXBGO0FBQ0E5QyxjQUFRLENBQUN3RSxhQUFULENBQXVCLG9DQUF2QixFQUE2REksU0FBN0QsR0FBeUU5QixVQUFVLENBQUM2QixJQUFJLENBQUNLLFFBQU4sQ0FBbkY7QUFDQWhGLGNBQVEsQ0FBQ3dFLGFBQVQsQ0FBdUIsb0NBQXZCLEVBQTZEdkMsS0FBN0QsQ0FBbUVHLEtBQW5FLEdBQTJFLEdBQTNFO0FBRUQsS0FWRCxDQVVFLE9BQU9tQixFQUFQLEVBQVc7QUFDWGdCLFdBQUssQ0FBQyxXQUFELEVBQWNoQixFQUFFLENBQUMwQixPQUFqQixDQUFMO0FBQ0Q7QUFDRixHQWREOztBQWdCQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDbEcsT0FBRCxFQUFhO0FBQy9CLFFBQU1tRyxRQUFRLEdBQUduRyxPQUFPLENBQUNvRyxZQUFSLENBQXFCLGdCQUFyQixDQUFqQjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVd2RyxPQUFPLENBQUNvRyxZQUFSLENBQXFCLGlCQUFyQixDQUFYLENBQWxCO0FBRUFWLGNBQVUsQ0FBQ1csU0FBRCxDQUFWO0FBQ0FkLFNBQUssQ0FBQyxpQkFBRCxFQUFvQlksUUFBcEIsRUFBOEJFLFNBQTlCLENBQUw7O0FBRUEsUUFBSTtBQUNGakMsU0FBRyxDQUFDaUIsSUFBSjtBQUNBakIsU0FBRyxDQUFDVSxVQUFKO0FBQ0FWLFNBQUcsQ0FBQ2EsSUFBSixDQUFTa0IsUUFBVDtBQUNELEtBSkQsQ0FJRSxPQUFPNUIsRUFBUCxFQUFXO0FBQ1hnQixXQUFLLENBQUMsV0FBRCxFQUFjaEIsRUFBRSxDQUFDMEIsT0FBakIsQ0FBTDtBQUNEO0FBQ0YsR0FkRDs7QUFnQkEsTUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QnBDLE9BQUcsQ0FBQ2lCLElBQUo7QUFDRCxHQUZEOztBQUlBLE1BQU1vQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCbEIsU0FBSyxDQUFDLENBQ0osSUFBSW1CLElBQUosRUFESSxFQUVKNUMsVUFBVSxDQUFDTSxHQUFHLENBQUNTLFVBQUosRUFBRCxDQUZOLEVBR0pULEdBQUcsQ0FBQ1MsVUFBSixFQUhJLEVBSUpmLFVBQVUsQ0FBQ00sR0FBRyxDQUFDTSxXQUFKLEVBQUQsQ0FKTixFQUtKTixHQUFHLENBQUNNLFdBQUosRUFMSSxFQU1KTixHQUFHLENBQUNRLGFBQUosRUFOSSxDQUFELENBQUw7O0FBU0EsUUFBSVIsR0FBRyxDQUFDVyxTQUFKLEVBQUosRUFBcUI7QUFDbkJoRixpRUFBUyxDQUFDMkIsUUFBVixDQUFtQlYsUUFBUSxDQUFDd0UsYUFBVCxDQUF1QixlQUF2QixDQUFuQixFQUE0RCxZQUE1RDtBQUNELEtBRkQsTUFFTztBQUNMekYsaUVBQVMsQ0FBQ3lCLFdBQVYsQ0FBc0JSLFFBQVEsQ0FBQ3dFLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBdEIsRUFBK0QsWUFBL0Q7QUFDRDs7QUFDRHhFLFlBQVEsQ0FBQ3dFLGFBQVQsQ0FBdUIscUNBQXZCLEVBQThESSxTQUE5RCxHQUEwRTlCLFVBQVUsQ0FBQ00sR0FBRyxDQUFDUyxVQUFKLEVBQUQsQ0FBcEY7QUFDQTdELFlBQVEsQ0FBQ3dFLGFBQVQsQ0FBdUIsb0NBQXZCLEVBQTZESSxTQUE3RCxHQUF5RTlCLFVBQVUsQ0FBQ00sR0FBRyxDQUFDTSxXQUFKLEVBQUQsQ0FBbkY7QUFDQTFELFlBQVEsQ0FBQ3dFLGFBQVQsQ0FBdUIsb0NBQXZCLEVBQTZEdkMsS0FBN0QsQ0FBbUVHLEtBQW5FLEdBQTJFZ0IsR0FBRyxDQUFDUSxhQUFKLEtBQW9CLEdBQS9GO0FBQ0QsR0FsQkQ7O0FBb0JBK0IsYUFBVyxDQUFDRixZQUFELEVBQWUsR0FBZixDQUFYO0FBRUEsTUFBTUcsVUFBVSxHQUFHLElBQUloRiwyREFBSixDQUFtQixzQ0FBbkIsRUFBMkQ7QUFDNUVILGdCQUFZLEVBQUU7QUFEOEQsR0FBM0QsQ0FBbkI7QUFJQVQsVUFBUSxDQUFDc0UsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBVXVCLENBQVYsRUFBYTtBQUNoRHRCLFNBQUssQ0FBQztBQUNKO0FBQ0EsaUJBQVdzQixDQUFDLENBQUNDO0FBRlQsS0FBRCxDQUFMOztBQUtBLFlBQVFELENBQUMsQ0FBQ0MsT0FBVjtBQUNBLFdBQUssQ0FBTCxDQURBLENBQ1E7O0FBQ1IsV0FBSyxFQUFMLENBRkEsQ0FFUzs7QUFDVCxXQUFLLEdBQUw7QUFBVTtBQUNSQyxvQkFBWSxDQUFDQyxLQUFiO0FBQ0E7O0FBRUYsV0FBSyxFQUFMO0FBQVM7QUFDUDtBQUNBOztBQUVGLFdBQUssRUFBTDtBQUFTO0FBQ1BKLGtCQUFVLENBQUNLLElBQVgsQ0FBZ0JyRiwyREFBYyxDQUFDWSxJQUEvQjtBQUNBOztBQUVGLFdBQUssRUFBTDtBQUFTO0FBQ1BvRSxrQkFBVSxDQUFDSyxJQUFYLENBQWdCckYsMkRBQWMsQ0FBQ2EsSUFBL0I7QUFDQTs7QUFFRixXQUFLLEVBQUw7QUFBUztBQUNQbUUsa0JBQVUsQ0FBQ0ssSUFBWCxDQUFnQnJGLDJEQUFjLENBQUNlLEtBQS9CO0FBQ0E7O0FBRUYsV0FBSyxFQUFMO0FBQVM7QUFDUGlFLGtCQUFVLENBQUNLLElBQVgsQ0FBZ0JyRiwyREFBYyxDQUFDVSxFQUEvQjtBQUNBOztBQUVGLFdBQUssRUFBTCxDQTNCQSxDQTJCUzs7QUFDVCxXQUFLLEVBQUw7QUFBUztBQUNQNEQsbUJBQVcsQ0FBQ1UsVUFBVSxDQUFDTSxNQUFYLEVBQUQsQ0FBWDtBQUNBOztBQUVGLFdBQUssRUFBTDtBQUFTO0FBQ1A5QyxXQUFHLENBQUNlLFVBQUosQ0FBZTNCLElBQUksQ0FBQzJELEdBQUwsQ0FBUy9DLEdBQUcsQ0FBQ1MsVUFBSixLQUFtQmpCLGVBQTVCLEVBQTZDLENBQTdDLENBQWY7QUFDQTZDLG9CQUFZO0FBQ1o7O0FBRUYsV0FBSyxFQUFMO0FBQVM7QUFDUHJDLFdBQUcsQ0FBQ2UsVUFBSixDQUFlM0IsSUFBSSxDQUFDNEQsR0FBTCxDQUFTaEQsR0FBRyxDQUFDUyxVQUFKLEtBQW1CakIsZUFBNUIsRUFBNkNRLEdBQUcsQ0FBQ00sV0FBSixFQUE3QyxDQUFmO0FBQ0ErQixvQkFBWTtBQUNaOztBQUVGLFdBQUssRUFBTDtBQUFTO0FBQ1ByQyxXQUFHLENBQUNlLFVBQUosQ0FBZTNCLElBQUksQ0FBQzJELEdBQUwsQ0FBUy9DLEdBQUcsQ0FBQ1MsVUFBSixLQUFtQmxCLGdCQUE1QixFQUE4QyxDQUE5QyxDQUFmO0FBQ0E4QyxvQkFBWTtBQUNaOztBQUVGLFdBQUssRUFBTDtBQUFTO0FBQ1ByQyxXQUFHLENBQUNlLFVBQUosQ0FBZTNCLElBQUksQ0FBQzRELEdBQUwsQ0FBU2hELEdBQUcsQ0FBQ1MsVUFBSixLQUFtQmxCLGdCQUE1QixFQUE4Q1MsR0FBRyxDQUFDTSxXQUFKLEVBQTlDLENBQWY7QUFDQStCLG9CQUFZO0FBQ1o7O0FBRUYsV0FBSyxHQUFMO0FBQVU7QUFDUnJDLFdBQUcsQ0FBQ2dCLFNBQUosQ0FBYzVCLElBQUksQ0FBQzRELEdBQUwsQ0FBU2hELEdBQUcsQ0FBQ0UsU0FBSixLQUFrQlQsWUFBM0IsRUFBeUMsR0FBekMsQ0FBZDtBQUNBOztBQUVGLFdBQUssR0FBTDtBQUFVO0FBQ1JPLFdBQUcsQ0FBQ2dCLFNBQUosQ0FBYzVCLElBQUksQ0FBQzJELEdBQUwsQ0FBUy9DLEdBQUcsQ0FBQ0UsU0FBSixLQUFrQlQsWUFBM0IsRUFBeUMsQ0FBekMsQ0FBZDtBQUNBOztBQUVGLFdBQUssR0FBTDtBQUFVO0FBQ1JPLFdBQUcsQ0FBQ2MsT0FBSixDQUFZLE1BQU1kLEdBQUcsQ0FBQ08sT0FBSixFQUFOLEdBQXNCLENBQXRCLEdBQTBCLENBQXRDO0FBQ0E7O0FBRUYsV0FBSyxFQUFMO0FBQVM7QUFDUFksYUFBSyxDQUFDbkIsR0FBRyxDQUFDVyxTQUFKLEVBQUQsQ0FBTDs7QUFDQSxZQUFJWCxHQUFHLENBQUNXLFNBQUosRUFBSixFQUFxQjtBQUNuQlgsYUFBRyxDQUFDWSxLQUFKO0FBQ0QsU0FGRCxNQUVPO0FBQ0xaLGFBQUcsQ0FBQ0ssUUFBSjtBQUNEOztBQUNEOztBQUVGLFdBQUssRUFBTDtBQUFTO0FBQ1ArQixrQkFBVTtBQUNWOztBQUVGLFdBQUssR0FBTDtBQUNFakIsYUFBSyxDQUFDLGFBQUQsQ0FBTDtBQUNBbkIsV0FBRyxDQUFDaUIsSUFBSjtBQUNBZ0MsZ0JBQVEsQ0FBQ0MsTUFBVCxDQUFnQixJQUFoQjtBQUNBO0FBakZGO0FBbUZELEdBekZEO0FBMkZBL0IsT0FBSyxDQUFDLE9BQUQsQ0FBTDtBQUNELENBNUtELEUiLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9uYXZpZ2F0aW9uLmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY2xhc3MgRE9NSGVscGVyIHtcbiAgc3RhdGljIGFkZENsYXNzKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBjb25zdCBuYW1lcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylcbiAgICBpZiAoLTEgPT09IG5hbWVzLmluZGV4T2YobmFtZSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIG5hbWVcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlQ2xhc3MoZWxlbWVudCwgbmFtZSkge1xuICAgIGNvbnN0IG5hbWVzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvKVxuICAgIGNvbnN0IGluZGV4ID0gbmFtZXMuaW5kZXhPZihuYW1lKVxuICAgIGlmICgtMSA8IGluZGV4KSB7XG4gICAgICBuYW1lcy5zcGxpY2UoaW5kZXgsIDEpLmpvaW4oJyAnKVxuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBuYW1lcy5qb2luKCcgJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRE9NSGVscGVyXG4iLCJpbXBvcnQgRE9NSGVscGVyIGZyb20gJy4uL2RvbS1oZWxwZXInXG5cbmNsYXNzIE5hdmlnYXRpb24ge1xuICBzdGF0aWMgZ2V0IFVQKCkge1xuICAgIHJldHVybiAndXAnXG4gIH1cblxuICBzdGF0aWMgZ2V0IERPV04oKSB7XG4gICAgcmV0dXJuICdkb3duJ1xuICB9XG5cbiAgc3RhdGljIGdldCBMRUZUKCkge1xuICAgIHJldHVybiAnbGVmdCdcbiAgfVxuXG4gIHN0YXRpYyBnZXQgUklHSFQoKSB7XG4gICAgcmV0dXJuICdyaWdodCdcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzLCBjb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvblxuXG4gICAgdGhpcy5lbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCdzdHJpbmcnID09PSB0eXBlb2YgZWxlbWVudHMgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRzKSA6IGVsZW1lbnRzKVxuICAgIHRoaXMuYnVpbGQoKVxuICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudCh0aGlzLmVsZW1lbnRzWzBdKVxuICAgIH1cbiAgfVxuXG4gIHNldEN1cnJlbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBlbGVtZW50XG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIERPTUhlbHBlci5yZW1vdmVDbGFzcyhlbCwgdGhpcy5jb25maWd1cmF0aW9uLmN1cnJlbnRDbGFzcyB8fCAnY3VycmVudCcpXG4gICAgICB9KVxuICAgICAgRE9NSGVscGVyLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50Q2xhc3MgfHwgJ2N1cnJlbnQnKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkKCkge1xuICB9XG5cbiAgbW92ZShkaXJlY3Rpb24pIHtcbiAgfVxuXG4gIG1vdmVUbyhpbmRleCkge1xuICAgIHRoaXMuc2V0Q3VycmVudCh0aGlzLmVsZW1lbnRzW2luZGV4XSlcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50XG4gIH1cblxuICBnZXRDdXJyZW50SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHMuaW5kZXhPZih0aGlzLmN1cnJlbnQpXG4gIH1cbn1cblxuY2xhc3MgR3JpZE5hdmlnYXRpb24gZXh0ZW5kcyBOYXZpZ2F0aW9uIHtcbiAgYnVpbGQoKSB7XG4gICAgY29uc3Qgcm93cyA9IHt9XG4gICAgY29uc3QgY29scyA9IHt9XG5cbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICByb3dzW2VsLm9mZnNldFRvcF0gPSBlbFxuICAgICAgY29sc1tlbC5vZmZzZXRMZWZ0XSA9IGVsXG4gICAgfSlcblxuICAgIHRoaXMubnVtYmVyT2ZSb3dzID0gT2JqZWN0LmtleXMocm93cykubGVuZ3RoXG4gICAgdGhpcy5udW1iZXJPZkNvbHMgPSBPYmplY3Qua2V5cyhjb2xzKS5sZW5ndGhcbiAgfVxuXG4gIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKVxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBOYXZpZ2F0aW9uLlVQOlxuICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudFJvdygpID4gMCkge1xuICAgICAgICBpbmRleCAtPSB0aGlzLm51bWJlck9mQ29sc1xuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIE5hdmlnYXRpb24uRE9XTjpcbiAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRSb3coKSA8IHRoaXMubnVtYmVyT2ZSb3dzKSB7XG4gICAgICAgIGluZGV4ICs9IHRoaXMubnVtYmVyT2ZDb2xzXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgTmF2aWdhdGlvbi5MRUZUOlxuICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudENvbCgpID4gMCkge1xuICAgICAgICBpbmRleCAtPSAxXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgTmF2aWdhdGlvbi5SSUdIVDpcbiAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRDb2woKSA8IHRoaXMubnVtYmVyT2ZDb2xzIC0gMSkge1xuICAgICAgICBpbmRleCArPSAxXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChpbmRleCAhPT0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSkge1xuICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZWxlbWVudHNbaW5kZXhdKVxuICAgIH1cbiAgfVxuXG4gIHNldEN1cnJlbnQoZWxlbWVudCkge1xuICAgIHN1cGVyLnNldEN1cnJlbnQoZWxlbWVudClcblxuICAgIGlmICghdGhpcy5jdXJzb3IpIHtcbiAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIERPTUhlbHBlci5hZGRDbGFzcyh0aGlzLmN1cnNvciwgdGhpcy5jb25maWd1cmF0aW9uLmN1cnNvckNsYXNzIHx8ICdjdXJzb3InKVxuICAgICAgdGhpcy5jdXJyZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3VycmVudC5vZmZzZXRUb3AgKyAncHgnXG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJyZW50Lm9mZnNldExlZnQgKyAncHgnXG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS53aWR0aCA9IHRoaXMuY3VycmVudC5vZmZzZXRXaWR0aCArICdweCdcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLmhlaWdodCA9IHRoaXMuY3VycmVudC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudENvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAlIHRoaXMubnVtYmVyT2ZDb2xzXG4gIH1cblxuICBnZXRDdXJyZW50Um93KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgLyB0aGlzLm51bWJlck9mQ29scylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkTmF2aWdhdGlvblxuIiwiLyogZ2xvYmFsIGdTVEI6ZmFsc2UsIHN0YldlYldpbmRvdzpmYWxzZSAqL1xuXG5pbXBvcnQgR3JpZE5hdmlnYXRpb24gZnJvbSAnLi9tb2R1bGVzL25hdmlnYXRpb24nXG5pbXBvcnQgRE9NSGVscGVyIGZyb20gJy4vbW9kdWxlcy9kb20taGVscGVyJ1xuXG5yZXF1aXJlKCcuLi9jc3MvbmF2aWdhdGlvbi5zY3NzJylcblxuLy8gU2tpcCBiYWNrd2FyZC9mb3J3YXJkIGluIHNlY29uZHNcbmNvbnN0IFNLSVBfU0hPUlRfREVMVEEgPSAxICogNjBcbmNvbnN0IFNLSVBfTE9OR19ERUxUQSA9IDUgKiA2MFxuXG4vLyBWb2x1bWUgdXAvZG93biBzdGVwXG5jb25zdCBWT0xVTUVfREVMVEEgPSAxMFxuXG5jb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUlNjBcbiAgdGltZSA9IE1hdGguZmxvb3IodGltZS82MClcbiAgY29uc3QgbWludXRlcyA9IHRpbWUlNjBcbiAgdGltZSA9IE1hdGguZmxvb3IodGltZS82MClcbiAgY29uc3QgaG91cnMgPSB0aW1lXG5cbiAgcmV0dXJuIFtob3Vycy50b0ZpeGVkKDApLCAoJzAnK21pbnV0ZXMudG9GaXhlZCgwKSkuc2xpY2UoLTIpLCAoJzAnK3NlY29uZHMudG9GaXhlZCgwKSkuc2xpY2UoLTIpXS5qb2luKCc6Jylcbn1cblxudHJ5IHtcbiAgY29uc3Qgc3RiID0gZ1NUQlxuICBzdGIuR2V0Vm9sdW1lKClcbn0gY2F0Y2ggKGV4KSB7XG4gIHdpbmRvdy5nU1RCID0ge1xuICAgIENvbnRpbnVlOiAoKSA9PiB7fSxcbiAgICBHZXRNZWRpYUxlbjogKCkgPT4gNTM1MDEsXG4gICAgR2V0TXV0ZTogKCkgPT4gMCxcbiAgICBHZXRQb3NQZXJjZW50OiAoKSA9PiA0MixcbiAgICBHZXRQb3NUaW1lOiAoKSA9PiA4NyxcbiAgICBHZXRWb2x1bWU6ICgpID0+IHt9LFxuICAgIEluaXRQbGF5ZXI6ICgpID0+IHt9LFxuICAgIElzUGxheWluZzogKCkgPT4gdHJ1ZSxcbiAgICBQYXVzZTogKCkgPT4ge30sXG4gICAgUGxheTogKCkgPT4ge30sXG4gICAgU2V0TXV0ZTogKCkgPT4ge30sXG4gICAgU2V0UG9zVGltZTogKCkgPT4ge30sXG4gICAgU2V0Vm9sdW1lOiAoKSA9PiB7fSxcbiAgICBTdG9wOiAoKSA9PiB7fVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHN0YiA9IGdTVEJcblxuICAvLyBjb25zdCBkZWJ1Z0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpXG4gIC8vIGRlYnVnQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAvLyBkZWJ1Z0NvbnRhaW5lci5zdHlsZS50b3AgPSBkZWJ1Z0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gZGVidWdDb250YWluZXIuc3R5bGUucmlnaHQgPSAwXG4gIC8vIGRlYnVnQ29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAnMWVtJ1xuICAvLyBkZWJ1Z0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuICAvLyBkZWJ1Z0NvbnRhaW5lci5zdHlsZS5jb2xvciA9ICdibGFjaydcbiAgLy8gZGVidWdDb250YWluZXIuc3R5bGUuekluZGV4ID0gMTAwMFxuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlYnVnQ29udGFpbmVyKVxuXG4gIGNvbnN0IERFQlVHID0gKC4uLmFyZ3MpID0+IHtcbiAgICAvLyBkZWJ1Z0NvbnRhaW5lci5pbm5lckhUTUwgPSBhcmdzLm1hcCgoYXJnKSA9PiBKU09OLnN0cmluZ2lmeShhcmcsIG51bGwsIDIpKS5qb2luKCdcXG4nKVxuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllcicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuXG4gIGNvbnN0IGluaXRQbGF5ZXIgPSAoZGF0YSkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXRpdGxlJykuaW5uZXJIVE1MID0gZGF0YS5hcnRpc3RcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXItY292ZXIgaW1nJykuc3JjID0gZGF0YS5jb3ZlclxuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXByb2dyZXNzLXRpbWUtZWxhcHNlZCcpLmlubmVySFRNTCA9IGZvcm1hdFRpbWUoMClcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXItcHJvZ3Jlc3MtdGltZS1sZW5ndGgnKS5pbm5lckhUTUwgPSBmb3JtYXRUaW1lKGRhdGEuZHVyYXRpb24pXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXByb2dyZXNzLWJhci1lbGFwc2VkJykuc3R5bGUud2lkdGggPSAnMCdcblxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBERUJVRygnZXhjZXB0aW9uJywgZXgubWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGFydFBsYXllciA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYXVkaW9VcmwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hdWRpby11cmwnKVxuICAgIGNvbnN0IGF1ZGlvRGF0YSA9IEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXVkaW8tZGF0YScpKVxuXG4gICAgaW5pdFBsYXllcihhdWRpb0RhdGEpXG4gICAgREVCVUcoJ1BsYXkgYXVkaW8gYm9vaycsIGF1ZGlvVXJsLCBhdWRpb0RhdGEpXG5cbiAgICB0cnkge1xuICAgICAgc3RiLlN0b3AoKVxuICAgICAgc3RiLkluaXRQbGF5ZXIoKVxuICAgICAgc3RiLlBsYXkoYXVkaW9VcmwpXG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIERFQlVHKCdleGNlcHRpb24nLCBleC5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0b3BQbGF5ZXIgPSAoKSA9PiB7XG4gICAgc3RiLlN0b3AoKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlUGxheWVyID0gKCkgPT4ge1xuICAgIERFQlVHKFtcbiAgICAgIG5ldyBEYXRlKCksXG4gICAgICBmb3JtYXRUaW1lKHN0Yi5HZXRQb3NUaW1lKCkpLFxuICAgICAgc3RiLkdldFBvc1RpbWUoKSxcbiAgICAgIGZvcm1hdFRpbWUoc3RiLkdldE1lZGlhTGVuKCkpLFxuICAgICAgc3RiLkdldE1lZGlhTGVuKCksXG4gICAgICBzdGIuR2V0UG9zUGVyY2VudCgpXG4gICAgXSlcblxuICAgIGlmIChzdGIuSXNQbGF5aW5nKCkpIHtcbiAgICAgIERPTUhlbHBlci5hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyJyksICdpcy1wbGF5aW5nJylcbiAgICB9IGVsc2Uge1xuICAgICAgRE9NSGVscGVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXInKSwgJ2lzLXBsYXlpbmcnKVxuICAgIH1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXByb2dyZXNzLXRpbWUtZWxhcHNlZCcpLmlubmVySFRNTCA9IGZvcm1hdFRpbWUoc3RiLkdldFBvc1RpbWUoKSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXByb2dyZXNzLXRpbWUtbGVuZ3RoJykuaW5uZXJIVE1MID0gZm9ybWF0VGltZShzdGIuR2V0TWVkaWFMZW4oKSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXByb2dyZXNzLWJhci1lbGFwc2VkJykuc3R5bGUud2lkdGggPSBzdGIuR2V0UG9zUGVyY2VudCgpKyclJ1xuICB9XG5cbiAgc2V0SW50ZXJ2YWwodXBkYXRlUGxheWVyLCA1MDApXG5cbiAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBHcmlkTmF2aWdhdGlvbignLnBhcmFncmFwaHMtaXRlbS1jYW1wYWlnbi1hdWRpby1ib29rJywge1xuICAgIGN1cnJlbnRDbGFzczogJ2tyZW9sLWNhbXBhaWduLWN1cnJlbnQnXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgREVCVUcoe1xuICAgICAgLy8gJ2tleSc6IGUua2V5LFxuICAgICAgJ2tleUNvZGUnOiBlLmtleUNvZGVcbiAgICB9KVxuXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIDg6IC8vIEJBQ0tcbiAgICBjYXNlIDI3OiAvLyBFWElUXG4gICAgY2FzZSAxMjI6IC8vIEhPTUVcbiAgICAgIHN0YldlYldpbmRvdy5jbG9zZSgpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSA4OTogLy8gSU5GT1xuICAgICAgLy8gREVCVUcoYXVkaW8pXG4gICAgICBicmVha1xuXG4gICAgY2FzZSA0MDogLy8gRE9XTlxuICAgICAgbmF2aWdhdGlvbi5tb3ZlKEdyaWROYXZpZ2F0aW9uLkRPV04pXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAzNzogLy8gTEVGVFxuICAgICAgbmF2aWdhdGlvbi5tb3ZlKEdyaWROYXZpZ2F0aW9uLkxFRlQpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAzOTogLy8gUklHSFRcbiAgICAgIG5hdmlnYXRpb24ubW92ZShHcmlkTmF2aWdhdGlvbi5SSUdIVClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDM4OiAvLyBVUFxuICAgICAgbmF2aWdhdGlvbi5tb3ZlKEdyaWROYXZpZ2F0aW9uLlVQKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMTM6IC8vIEVOVEVSL09LXG4gICAgY2FzZSAzMjogLy8gU1BBQ0VcbiAgICAgIHN0YXJ0UGxheWVyKG5hdmlnYXRpb24uc2VsZWN0KCkpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAzMzogLy8gUFJFViBUUkFDS1xuICAgICAgc3RiLlNldFBvc1RpbWUoTWF0aC5tYXgoc3RiLkdldFBvc1RpbWUoKSAtIFNLSVBfTE9OR19ERUxUQSwgMCkpXG4gICAgICB1cGRhdGVQbGF5ZXIoKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMzQ6IC8vIE5FWFQgVFJBQ0tcbiAgICAgIHN0Yi5TZXRQb3NUaW1lKE1hdGgubWluKHN0Yi5HZXRQb3NUaW1lKCkgKyBTS0lQX0xPTkdfREVMVEEsIHN0Yi5HZXRNZWRpYUxlbigpKSlcbiAgICAgIHVwZGF0ZVBsYXllcigpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSA2NjogLy8gU0tJUCBCQUNLV0FSRFxuICAgICAgc3RiLlNldFBvc1RpbWUoTWF0aC5tYXgoc3RiLkdldFBvc1RpbWUoKSAtIFNLSVBfU0hPUlRfREVMVEEsIDApKVxuICAgICAgdXBkYXRlUGxheWVyKClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDcwOiAvLyBTS0lQIEZPUldBUkRcbiAgICAgIHN0Yi5TZXRQb3NUaW1lKE1hdGgubWluKHN0Yi5HZXRQb3NUaW1lKCkgKyBTS0lQX1NIT1JUX0RFTFRBLCBzdGIuR2V0TWVkaWFMZW4oKSkpXG4gICAgICB1cGRhdGVQbGF5ZXIoKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMTA3OiAvLyBWT0xVTUUgVVBcbiAgICAgIHN0Yi5TZXRWb2x1bWUoTWF0aC5taW4oc3RiLkdldFZvbHVtZSgpICsgVk9MVU1FX0RFTFRBLCAxMDApKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMTA5OiAvLyBWT0xVTUUgRE9XTlxuICAgICAgc3RiLlNldFZvbHVtZShNYXRoLm1heChzdGIuR2V0Vm9sdW1lKCkgLSBWT0xVTUVfREVMVEEsIDApKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMTkyOiAvLyBNVVRFXG4gICAgICBzdGIuU2V0TXV0ZSgwID09PSBzdGIuR2V0TXV0ZSgpID8gMSA6IDApXG4gICAgICBicmVha1xuXG4gICAgY2FzZSA4MjogLy8gUExBWS9QQVVTRVxuICAgICAgREVCVUcoc3RiLklzUGxheWluZygpKVxuICAgICAgaWYgKHN0Yi5Jc1BsYXlpbmcoKSkge1xuICAgICAgICBzdGIuUGF1c2UoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RiLkNvbnRpbnVlKClcbiAgICAgIH1cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDgzOiAvLyBTVE9QXG4gICAgICBzdG9wUGxheWVyKClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDExNjpcbiAgICAgIERFQlVHKCdSZWxvYWRpbmcg4oCmJylcbiAgICAgIHN0Yi5TdG9wKClcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG5cbiAgREVCVUcoJ1JlYWR5Jylcbn0pXG4iXSwic291cmNlUm9vdCI6IiJ9