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



__webpack_require__(/*! ../css/navigation.scss */ "./assets/css/navigation.scss"); // Skip backward/forward in seconds


var SKIP_DELTA = 30 * 60; // Volume up/down step

var VOLUME_DELTA = 10;

try {
  gSTB;
} catch (_unused) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9uYXZpZ2F0aW9uLnNjc3M/ZGNjMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9kb20taGVscGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiRE9NSGVscGVyIiwiZWxlbWVudCIsIm5hbWUiLCJuYW1lcyIsImNsYXNzTmFtZSIsInNwbGl0IiwiaW5kZXhPZiIsImluZGV4Iiwic3BsaWNlIiwiam9pbiIsIk5hdmlnYXRpb24iLCJlbGVtZW50cyIsImNvbmZpZ3VyYXRpb24iLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJ1aWxkIiwibGVuZ3RoIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJmb3JFYWNoIiwiZWwiLCJyZW1vdmVDbGFzcyIsImN1cnJlbnRDbGFzcyIsImFkZENsYXNzIiwiZGlyZWN0aW9uIiwiR3JpZE5hdmlnYXRpb24iLCJyb3dzIiwiY29scyIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJudW1iZXJPZlJvd3MiLCJPYmplY3QiLCJrZXlzIiwibnVtYmVyT2ZDb2xzIiwiZ2V0Q3VycmVudEluZGV4IiwiVVAiLCJnZXRDdXJyZW50Um93IiwiRE9XTiIsIkxFRlQiLCJnZXRDdXJyZW50Q29sIiwiUklHSFQiLCJjdXJzb3IiLCJjcmVhdGVFbGVtZW50IiwiY3Vyc29yQ2xhc3MiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiTWF0aCIsImZsb29yIiwicmVxdWlyZSIsIlNLSVBfREVMVEEiLCJWT0xVTUVfREVMVEEiLCJnU1RCIiwid2luZG93IiwiQ29udGludWUiLCJHZXRNZWRpYUxlbiIsIkdldE11dGUiLCJHZXRQb3NQZXJjZW50IiwiR2V0UG9zVGltZSIsIkdldFZvbHVtZSIsIkluaXRQbGF5ZXIiLCJJc1BsYXlpbmciLCJQYXVzZSIsIlBsYXkiLCJTZXRNdXRlIiwiU2V0UG9zVGltZSIsIlNldFZvbHVtZSIsIlN0b3AiLCJmb3JtYXRUaW1lIiwidGltZSIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJ0b0ZpeGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YiIsIkRFQlVHIiwicXVlcnlTZWxlY3RvciIsInZpc2liaWxpdHkiLCJpbml0UGxheWVyIiwiZGF0YSIsImlubmVySFRNTCIsImFydGlzdCIsInNyYyIsImNvdmVyIiwiZHVyYXRpb24iLCJleCIsIm1lc3NhZ2UiLCJzdGFydFBsYXllciIsImF1ZGlvVXJsIiwiZ2V0QXR0cmlidXRlIiwiYXVkaW9EYXRhIiwiSlNPTiIsInBhcnNlIiwic3RvcFBsYXllciIsInVwZGF0ZVBsYXllciIsIkRhdGUiLCJzZXRJbnRlcnZhbCIsIm5hdmlnYXRpb24iLCJlIiwia2V5Q29kZSIsInN0YldlYldpbmRvdyIsImNsb3NlIiwibW92ZSIsInNlbGVjdCIsIm1pbiIsIm1heCIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBTDtBQUNELENBcEtELEUiLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9uYXZpZ2F0aW9uLmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY2xhc3MgRE9NSGVscGVyIHtcbiAgc3RhdGljIGFkZENsYXNzKGVsZW1lbnQsIG5hbWUpIHtcbiAgICBjb25zdCBuYW1lcyA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLylcbiAgICBpZiAoLTEgPT09IG5hbWVzLmluZGV4T2YobmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgbmFtZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVDbGFzcyhlbGVtZW50LCBuYW1lKSB7XG4gICAgY29uc3QgbmFtZXMgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pXG4gICAgY29uc3QgaW5kZXggPSBuYW1lcy5pbmRleE9mKG5hbWUpXG4gICAgaWYgKC0xIDwgaW5kZXgpIHtcbiAgICAgIG5hbWVzLnNwbGljZShpbmRleCwgMSkuam9pbignICcpXG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG5hbWVzLmpvaW4oJyAnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET01IZWxwZXJcbiIsImltcG9ydCBET01IZWxwZXIgZnJvbSAnLi4vZG9tLWhlbHBlcidcblxuY2xhc3MgTmF2aWdhdGlvbiB7XG4gIHN0YXRpYyBnZXQgVVAoKSB7XG4gICAgcmV0dXJuICd1cCdcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRE9XTigpIHtcbiAgICByZXR1cm4gJ2Rvd24nXG4gIH1cblxuICBzdGF0aWMgZ2V0IExFRlQoKSB7XG4gICAgcmV0dXJuICdsZWZ0J1xuICB9XG5cbiAgc3RhdGljIGdldCBSSUdIVCgpIHtcbiAgICByZXR1cm4gJ3JpZ2h0J1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudHMsIGNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uXG5cbiAgICB0aGlzLmVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoJ3N0cmluZycgPT09IHR5cGVvZiBlbGVtZW50cyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpIDogZWxlbWVudHMpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZWxlbWVudHNbMF0pXG4gICAgfVxuICB9XG5cbiAgc2V0Q3VycmVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IGVsZW1lbnRcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgRE9NSGVscGVyLnJlbW92ZUNsYXNzKGVsLCB0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudENsYXNzIHx8ICdjdXJyZW50JylcbiAgICAgIH0pXG4gICAgICBET01IZWxwZXIuYWRkQ2xhc3MoZWxlbWVudCwgdGhpcy5jb25maWd1cmF0aW9uLmN1cnJlbnRDbGFzcyB8fCAnY3VycmVudCcpXG4gICAgfVxuICB9XG5cbiAgYnVpbGQoKSB7XG4gIH1cblxuICBtb3ZlKGRpcmVjdGlvbikge1xuICB9XG5cbiAgbW92ZVRvKGluZGV4KSB7XG4gICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZWxlbWVudHNbaW5kZXhdKVxuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRcbiAgfVxuXG4gIGdldEN1cnJlbnRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5pbmRleE9mKHRoaXMuY3VycmVudClcbiAgfVxufVxuXG5jbGFzcyBHcmlkTmF2aWdhdGlvbiBleHRlbmRzIE5hdmlnYXRpb24ge1xuICBidWlsZCgpIHtcbiAgICBjb25zdCByb3dzID0ge31cbiAgICBjb25zdCBjb2xzID0ge31cblxuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIHJvd3NbZWwub2Zmc2V0VG9wXSA9IGVsXG4gICAgICBjb2xzW2VsLm9mZnNldExlZnRdID0gZWxcbiAgICB9KVxuXG4gICAgdGhpcy5udW1iZXJPZlJvd3MgPSBPYmplY3Qua2V5cyhyb3dzKS5sZW5ndGhcbiAgICB0aGlzLm51bWJlck9mQ29scyA9IE9iamVjdC5rZXlzKGNvbHMpLmxlbmd0aFxuICB9XG5cbiAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIE5hdmlnYXRpb24uVVA6XG4gICAgICBpZiAodGhpcy5nZXRDdXJyZW50Um93KCkgPiAwKSB7XG4gICAgICAgIGluZGV4IC09IHRoaXMubnVtYmVyT2ZDb2xzXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgTmF2aWdhdGlvbi5ET1dOOlxuICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudFJvdygpIDwgdGhpcy5udW1iZXJPZlJvd3MpIHtcbiAgICAgICAgaW5kZXggKz0gdGhpcy5udW1iZXJPZkNvbHNcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBOYXZpZ2F0aW9uLkxFRlQ6XG4gICAgICBpZiAodGhpcy5nZXRDdXJyZW50Q29sKCkgPiAwKSB7XG4gICAgICAgIGluZGV4IC09IDFcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBOYXZpZ2F0aW9uLlJJR0hUOlxuICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudENvbCgpIDwgdGhpcy5udW1iZXJPZkNvbHMgLSAxKSB7XG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKGluZGV4ICE9PSB0aGlzLmdldEN1cnJlbnRJbmRleCgpKVxuICAgIHtcbiAgICAgIHRoaXMuc2V0Q3VycmVudCh0aGlzLmVsZW1lbnRzW2luZGV4XSlcbiAgICB9XG4gIH1cblxuICBzZXRDdXJyZW50KGVsZW1lbnQpIHtcbiAgICBzdXBlci5zZXRDdXJyZW50KGVsZW1lbnQpXG5cbiAgICBpZiAoIXRoaXMuY3Vyc29yKSB7XG4gICAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBET01IZWxwZXIuYWRkQ2xhc3ModGhpcy5jdXJzb3IsIHRoaXMuY29uZmlndXJhdGlvbi5jdXJzb3JDbGFzcyB8fCAnY3Vyc29yJylcbiAgICAgIHRoaXMuY3VycmVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuY3Vyc29yKVxuICAgIH1cblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS50b3AgPSB0aGlzLmN1cnJlbnQub2Zmc2V0VG9wICsgJ3B4J1xuICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUubGVmdCA9IHRoaXMuY3VycmVudC5vZmZzZXRMZWZ0ICsgJ3B4J1xuICAgICAgdGhpcy5jdXJzb3Iuc3R5bGUud2lkdGggPSB0aGlzLmN1cnJlbnQub2Zmc2V0V2lkdGggKyAncHgnXG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS5oZWlnaHQgPSB0aGlzLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRDb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgJSB0aGlzLm51bWJlck9mQ29sc1xuICB9XG5cbiAgZ2V0Q3VycmVudFJvdygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmdldEN1cnJlbnRJbmRleCgpIC8gdGhpcy5udW1iZXJPZkNvbHMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JpZE5hdmlnYXRpb25cbiIsImltcG9ydCBHcmlkTmF2aWdhdGlvbiBmcm9tICcuL21vZHVsZXMvbmF2aWdhdGlvbidcbmltcG9ydCBET01IZWxwZXIgZnJvbSAnLi9tb2R1bGVzL2RvbS1oZWxwZXInXG5cbnJlcXVpcmUoJy4uL2Nzcy9uYXZpZ2F0aW9uLnNjc3MnKTtcblxuLy8gU2tpcCBiYWNrd2FyZC9mb3J3YXJkIGluIHNlY29uZHNcbmNvbnN0IFNLSVBfREVMVEEgPSAzMCAqIDYwXG5cbi8vIFZvbHVtZSB1cC9kb3duIHN0ZXBcbmNvbnN0IFZPTFVNRV9ERUxUQSA9IDEwXG5cbnRyeSB7XG4gIGdTVEJcbn0gY2F0Y2gge1xuICB3aW5kb3cuZ1NUQiA9IHtcbiAgICBDb250aW51ZTogKCkgPT4ge30sXG4gICAgR2V0TWVkaWFMZW46ICgpID0+IDUzNTAxLFxuICAgIEdldE11dGU6ICgpID0+IDAsXG4gICAgR2V0UG9zUGVyY2VudDogKCkgPT4gNDIsXG4gICAgR2V0UG9zVGltZTogKCkgPT4gODcsXG4gICAgR2V0Vm9sdW1lOiAoKSA9PiB7fSxcbiAgICBJbml0UGxheWVyOiAoKSA9PiB7fSxcbiAgICBJc1BsYXlpbmc6ICgpID0+IHRydWUsXG4gICAgUGF1c2U6ICgpID0+IHt9LFxuICAgIFBsYXk6ICgpID0+IHt9LFxuICAgIFNldE11dGU6ICgpID0+IHt9LFxuICAgIFNldFBvc1RpbWU6ICgpID0+IHt9LFxuICAgIFNldFZvbHVtZTogKCkgPT4ge30sXG4gICAgU3RvcDogKCkgPT4ge30sXG4gIH1cbn1cblxuY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lKSA9PiB7XG4gIGNvbnN0IHNlY29uZHMgPSB0aW1lJTYwO1xuICB0aW1lID0gTWF0aC5mbG9vcih0aW1lLzYwKVxuICBjb25zdCBtaW51dGVzID0gdGltZSU2MDtcbiAgdGltZSA9IE1hdGguZmxvb3IodGltZS82MClcbiAgY29uc3QgaG91cnMgPSB0aW1lXG5cbiAgcmV0dXJuIFtob3Vycy50b0ZpeGVkKDApLCAoJzAnK21pbnV0ZXMudG9GaXhlZCgwKSkuc2xpY2UoLTIpLCAoJzAnK3NlY29uZHMudG9GaXhlZCgwKSkuc2xpY2UoLTIpXS5qb2luKCc6Jylcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc3RiID0gZ1NUQlxuXG4gIC8vIGNvbnN0IGRlYnVnQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJylcbiAgLy8gZGVidWdDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXG4gIC8vIGRlYnVnQ29udGFpbmVyLnN0eWxlLnRvcCA9IGRlYnVnQ29udGFpbmVyLnN0eWxlLmxlZnQgPSBkZWJ1Z0NvbnRhaW5lci5zdHlsZS5yaWdodCA9IDBcbiAgLy8gZGVidWdDb250YWluZXIuc3R5bGUucGFkZGluZyA9ICcxZW0nXG4gIC8vIGRlYnVnQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd5ZWxsb3cnXG4gIC8vIGRlYnVnQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ2JsYWNrJ1xuICAvLyBkZWJ1Z0NvbnRhaW5lci5zdHlsZS56SW5kZXggPSAxMDAwXG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVidWdDb250YWluZXIpXG5cbiAgY29uc3QgREVCVUcgPSAoLi4uYXJncykgPT4ge1xuICAgIC8vIGRlYnVnQ29udGFpbmVyLmlubmVySFRNTCA9IGFyZ3MubWFwKChhcmcpID0+IEpTT04uc3RyaW5naWZ5KGFyZywgbnVsbCwgMikpLmpvaW4oJ1xcbicpXG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG5cbiAgY29uc3QgaW5pdFBsYXllciA9IChkYXRhKSA9PiB7XG4gICAgdHJ5IHtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXInKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllci10aXRsZScpLmlubmVySFRNTCA9IGRhdGEuYXJ0aXN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllci1jb3ZlciBpbWcnKS5zcmMgPSBkYXRhLmNvdmVyXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXByb2dyZXNzLXRpbWUtZWxhcHNlZCcpLmlubmVySFRNTCA9IGZvcm1hdFRpbWUoMClcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tcGxheWVyLXByb2dyZXNzLXRpbWUtbGVuZ3RoJykuaW5uZXJIVE1MID0gZm9ybWF0VGltZShkYXRhLmR1cmF0aW9uKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXItcHJvZ3Jlc3MtYmFyLWVsYXBzZWQnKS5zdHlsZS53aWR0aCA9ICcwJ1xuXG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIERFQlVHKCdleGNlcHRpb24nLCBleC5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0YXJ0UGxheWVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBhdWRpb1VybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWF1ZGlvLXVybCcpXG4gICAgY29uc3QgYXVkaW9EYXRhID0gSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hdWRpby1kYXRhJykpXG5cbiAgICBpbml0UGxheWVyKGF1ZGlvRGF0YSlcbiAgICBERUJVRygnUGxheSBhdWRpbyBib29rJywgYXVkaW9VcmwsIGF1ZGlvRGF0YSlcblxuICAgIHRyeSB7XG4gICAgICBzdGIuU3RvcCgpXG4gICAgICBzdGIuSW5pdFBsYXllcigpXG4gICAgICBzdGIuUGxheShhdWRpb1VybClcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgREVCVUcoJ2V4Y2VwdGlvbicsIGV4Lm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RvcFBsYXllciA9ICgpID0+IHtcbiAgICBzdGIuU3RvcCgpXG4gIH1cblxuICBjb25zdCB1cGRhdGVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgREVCVUcoW1xuICAgICAgbmV3IERhdGUoKSxcbiAgICAgIGZvcm1hdFRpbWUoc3RiLkdldFBvc1RpbWUoKSksXG4gICAgICBzdGIuR2V0UG9zVGltZSgpLFxuICAgICAgZm9ybWF0VGltZShzdGIuR2V0TWVkaWFMZW4oKSksXG4gICAgICBzdGIuR2V0TWVkaWFMZW4oKSxcbiAgICAgIHN0Yi5HZXRQb3NQZXJjZW50KClcbiAgICBdKVxuXG4gICAgaWYgKHN0Yi5Jc1BsYXlpbmcoKSkge1xuICAgICAgRE9NSGVscGVyLmFkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXInKSwgJ2lzLXBsYXlpbmcnKVxuICAgIH0gZWxzZSB7XG4gICAgICBET01IZWxwZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1ZGlvLXBsYXllcicpLCAnaXMtcGxheWluZycpXG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXItcHJvZ3Jlc3MtdGltZS1lbGFwc2VkJykuaW5uZXJIVE1MID0gZm9ybWF0VGltZShzdGIuR2V0UG9zVGltZSgpKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXItcHJvZ3Jlc3MtdGltZS1sZW5ndGgnKS5pbm5lckhUTUwgPSBmb3JtYXRUaW1lKHN0Yi5HZXRNZWRpYUxlbigpKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1wbGF5ZXItcHJvZ3Jlc3MtYmFyLWVsYXBzZWQnKS5zdHlsZS53aWR0aCA9IHN0Yi5HZXRQb3NQZXJjZW50KCkrJyUnXG4gIH1cblxuICBzZXRJbnRlcnZhbCh1cGRhdGVQbGF5ZXIsIDUwMClcblxuICBjb25zdCBuYXZpZ2F0aW9uID0gbmV3IEdyaWROYXZpZ2F0aW9uKCcucGFyYWdyYXBocy1pdGVtLWNhbXBhaWduLWF1ZGlvLWJvb2snLCB7XG4gICAgY3VycmVudENsYXNzOiAna3Jlb2wtY2FtcGFpZ24tY3VycmVudCdcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBERUJVRyh7XG4gICAgICAvLyAna2V5JzogZS5rZXksXG4gICAgICAna2V5Q29kZSc6IGUua2V5Q29kZVxuICAgIH0pXG5cbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2UgODogLy8gQkFDS1xuICAgIGNhc2UgMjc6IC8vIEVYSVRcbiAgICBjYXNlIDEyMjogLy8gSE9NRVxuICAgICAgc3RiV2ViV2luZG93LmNsb3NlKClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDg5OiAvLyBJTkZPXG4gICAgICAvLyBERUJVRyhhdWRpbylcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDQwOiAvLyBET1dOXG4gICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uRE9XTilcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDM3OiAvLyBMRUZUXG4gICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uTEVGVClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDM5OiAvLyBSSUdIVFxuICAgICAgbmF2aWdhdGlvbi5tb3ZlKEdyaWROYXZpZ2F0aW9uLlJJR0hUKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMzg6IC8vIFVQXG4gICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uVVApXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAxMzogLy8gRU5URVIvT0tcbiAgICBjYXNlIDMyOiAvLyBTUEFDRVxuICAgICAgc3RhcnRQbGF5ZXIobmF2aWdhdGlvbi5zZWxlY3QoKSlcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDMzOiAvLyBQUkVWIFRSQUNLXG4gICAgY2FzZSAzNDogLy8gTkVYVCBUUkFDS1xuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMTA3OiAvLyBWT0xVTUUgVVBcbiAgICAgIHN0Yi5TZXRWb2x1bWUoTWF0aC5taW4oc3RiLkdldFZvbHVtZSgpICsgVk9MVU1FX0RFTFRBLCAxMDApKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMTA5OiAvLyBWT0xVTUUgRE9XTlxuICAgICBzdGIuU2V0Vm9sdW1lKE1hdGgubWF4KHN0Yi5HZXRWb2x1bWUoKSAtIFZPTFVNRV9ERUxUQSwgMCkpXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAxOTI6IC8vIE1VVEVcbiAgICAgc3RiLlNldE11dGUoMCA9PT0gc3RiLkdldE11dGUoKSA/IDEgOiAwKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgODI6IC8vIFBMQVkvUEFVU0VcbiAgICAgIERFQlVHKHN0Yi5Jc1BsYXlpbmcoKSlcbiAgICAgaWYgKHN0Yi5Jc1BsYXlpbmcoKSkge1xuICAgICAgIHN0Yi5QYXVzZSgpXG4gICAgIH0gZWxzZSB7XG4gICAgICAgc3RiLkNvbnRpbnVlKClcbiAgICAgfVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgNjY6IC8vIFNLSVAgQkFDS1dBUkRcbiAgICAgc3RiLlNldFBvc1RpbWUoTWF0aC5tYXgoc3RiLkdldFBvc1RpbWUoKSAtIFNLSVBfREVMVEEsIDApKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgNzA6IC8vIFNLSVAgRk9SV0FSRFxuICAgICBzdGIuU2V0UG9zVGltZShNYXRoLm1pbihzdGIuR2V0UG9zVGltZSgpICsgU0tJUF9ERUxUQSwgc3RiLkdldE1lZGlhTGVuKCkpKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgODM6IC8vIFNUT1BcbiAgICAgIHN0b3BQbGF5ZXIoKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMTE2OlxuICAgICAgREVCVUcoJ1JlbG9hZGluZyDigKYnKVxuICAgICAgc3RiLlN0b3AoKVxuICAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgICBicmVha1xuICAgIH1cbiAgfSlcblxuICBERUJVRygnUmVhZHknKVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=