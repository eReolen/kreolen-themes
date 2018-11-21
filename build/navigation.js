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

/***/ "./assets/js/modules/navigation/index.js":
/*!***********************************************!*\
  !*** ./assets/js/modules/navigation/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    key: "addClass",
    value: function addClass(element, name) {
      var names = element.className.split(/\s+/);

      if (-1 === names.indexOf(name)) {
        element.className += ' ' + name;
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      var names = element.className.split(/\s+/);
      var index = names.indexOf(name);

      if (-1 < index) {
        element.className = names.splice(index, 1).join(' ');
      }
    }
  }, {
    key: "setCurrent",
    value: function setCurrent(element) {
      var _this = this;

      if (element) {
        this.current = element;
        this.elements.forEach(function (el) {
          _this.removeClass(el, _this.configuration.currentClass || 'current');
        });
        this.addClass(element, this.configuration.currentClass || 'current');
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
        this.addClass(this.cursor, this.configuration.cursorClass || 'cursor');
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
__webpack_require__(/*! ../css/navigation.scss */ "./assets/css/navigation.scss");


window.addEventListener('load', function () {
  var stuff = document.createElement('pre');
  stuff.style.position = 'absolute';
  stuff.style.bottom = stuff.style.left = stuff.style.right = 0;
  stuff.style.padding = '1em';
  stuff.style.backgroundColor = 'yellow';
  stuff.style.color = 'black';
  document.body.appendChild(stuff);
  var navigation = new _modules_navigation__WEBPACK_IMPORTED_MODULE_0__["default"]('.paragraphs-item-campaign-audio-books .field-name-field-audio-books .field-item > div', {
    currentClass: 'kreol-campaign-current'
  });
  document.addEventListener('keydown', function (e) {
    stuff.innerHTML = JSON.stringify({
      // 'key': e.key,
      'keyCode': e.keyCode
    }, null, 2);

    switch (e.keyCode) {
      case 8: // BACK

      case 27: // EXIT

      case 122:
        // HOME
        stbWebWindow.close();
        break;

      case 89:
        // INFO
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
        var element = navigation.select();
        stuff.innerHTML = 'Play audio book';
        var audioUrl = 'https://audio.api.streaming.pubhub.dk/Play.ashx?o=942aad16-d9bc-4726-a76d-5c1094bb28f8';
        var stb = gSTB;
        stb.Stop();
        stb.InitPlayer();
        stb.Play(audioUrl);
        break;

      case 33: // PREV TRACK

      case 34: // NEXT TRACK

      case 107: // VOLUME UP

      case 109: // VOLUME DOWN

      case 192: // MUTE

      case 82: // PLAY/PAUSE

      case 66: // SKIP BACKWARD

      case 70: // SKIP FORWARD

      case 83:
        // STOP
        break;

      case 116:
        stuff.innerHTML = 'Reloading …';
        location.href = location.href;
        break;
    }
  });
}); // (function ($) {
//   if ('undefined' === typeof stbWebWindow) {
//     var stbWebWindow = {
//       close: () => {}
//     }
//   }
//   $(() => {
//     alert('ready')
//     setTimeout(() => {
//       const navigation = new GridNavigation('.paragraphs-item-campaign-audio-books .field-name-field-audio-books .field-item > div', {
//         currentClass: 'kreol-campaign-current'
//       })
//       const stuff = document.createElement('pre')
//       stuff.style.position = 'absolute'
//       stuff.style.bottom = stuff.style.left = stuff.style.right = 0
//       stuff.style.padding = '1em'
//       stuff.style.backgroundColor = 'yellow'
//       stuff.style.color = 'black'
//       document.body.appendChild(stuff)
//       alert(87)
//       document.addEventListener('keydown', function(event) {
//         stuff.innerHTML = JSON.stringify({
//           'key': event.key,
//           'keyCode': event.keyCode
//         }, null, 2)
//         if (116 === event.keyCode) {
//           // Reload
//           location.href = location.href
//           return
//         }
//         switch (event.key) {
//         case 'Escape':
//           stbWebWindow.close()
//           break
//         case 'ArrowDown':
//           navigation.move(GridNavigation.DOWN)
//           break
//         case 'ArrowLeft':
//           navigation.move(GridNavigation.LEFT)
//           break
//         case 'ArrowRight':
//           navigation.move(GridNavigation.RIGHT)
//           break
//         case 'ArrowUp':
//           navigation.move(GridNavigation.UP)
//           break
//         case 'Enter':
//         case ' ':
//           const element = navigation.select()
//           ;;; console.log('select', element)
//           break
//         default:
//           if (!isNaN(parseInt(event.key))) {
//             navigation.moveTo(parseInt(event.key)-1)
//           }
//           break
//         }
//       })
//       alert(42)
//     }, 1000)
//   })
// }(jQuery))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9uYXZpZ2F0aW9uLnNjc3M/ZGNjMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9kdWxlcy9uYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJlbGVtZW50cyIsImNvbmZpZ3VyYXRpb24iLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJ1aWxkIiwibGVuZ3RoIiwic2V0Q3VycmVudCIsImVsZW1lbnQiLCJuYW1lIiwibmFtZXMiLCJjbGFzc05hbWUiLCJzcGxpdCIsImluZGV4T2YiLCJpbmRleCIsInNwbGljZSIsImpvaW4iLCJjdXJyZW50IiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlQ2xhc3MiLCJjdXJyZW50Q2xhc3MiLCJhZGRDbGFzcyIsImRpcmVjdGlvbiIsIkdyaWROYXZpZ2F0aW9uIiwicm93cyIsImNvbHMiLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0IiwibnVtYmVyT2ZSb3dzIiwiT2JqZWN0Iiwia2V5cyIsIm51bWJlck9mQ29scyIsImdldEN1cnJlbnRJbmRleCIsIlVQIiwiZ2V0Q3VycmVudFJvdyIsIkRPV04iLCJMRUZUIiwiZ2V0Q3VycmVudENvbCIsIlJJR0hUIiwiY3Vyc29yIiwiY3JlYXRlRWxlbWVudCIsImN1cnNvckNsYXNzIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIk1hdGgiLCJmbG9vciIsInJlcXVpcmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3R1ZmYiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9keSIsIm5hdmlnYXRpb24iLCJlIiwiaW5uZXJIVE1MIiwiSlNPTiIsInN0cmluZ2lmeSIsImtleUNvZGUiLCJzdGJXZWJXaW5kb3ciLCJjbG9zZSIsIm1vdmUiLCJzZWxlY3QiLCJhdWRpb1VybCIsInN0YiIsImdTVEIiLCJTdG9wIiwiSW5pdFBsYXllciIsIlBsYXkiLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBTUEsVTs7Ozs7d0JBQ1k7QUFDZCxhQUFPLElBQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLE1BQVA7QUFDRDs7O3dCQUVpQjtBQUNoQixhQUFPLE1BQVA7QUFDRDs7O3dCQUVrQjtBQUNqQixhQUFPLE9BQVA7QUFDRDs7O0FBRUQsc0JBQVlDLFFBQVosRUFB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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9uYXZpZ2F0aW9uLmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY2xhc3MgTmF2aWdhdGlvbiB7XG4gIHN0YXRpYyBnZXQgVVAoKSB7XG4gICAgcmV0dXJuICd1cCdcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRE9XTigpIHtcbiAgICByZXR1cm4gJ2Rvd24nXG4gIH1cblxuICBzdGF0aWMgZ2V0IExFRlQoKSB7XG4gICAgcmV0dXJuICdsZWZ0J1xuICB9XG5cbiAgc3RhdGljIGdldCBSSUdIVCgpIHtcbiAgICByZXR1cm4gJ3JpZ2h0J1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudHMsIGNvbmZpZ3VyYXRpb24pIHtcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uXG5cbiAgICB0aGlzLmVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoJ3N0cmluZycgPT09IHR5cGVvZiBlbGVtZW50cyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudHMpIDogZWxlbWVudHMpXG4gICAgdGhpcy5idWlsZCgpXG4gICAgaWYgKHRoaXMuZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRDdXJyZW50KHRoaXMuZWxlbWVudHNbMF0pXG4gICAgfVxuICB9XG5cbiAgYWRkQ2xhc3MoZWxlbWVudCwgbmFtZSkge1xuICAgIGNvbnN0IG5hbWVzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvKVxuICAgIGlmICgtMSA9PT0gbmFtZXMuaW5kZXhPZihuYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBuYW1lO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IG5hbWVzID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoL1xccysvKVxuICAgIGNvbnN0IGluZGV4ID0gbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoLTEgPCBpbmRleCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBuYW1lcy5zcGxpY2UoaW5kZXgsIDEpLmpvaW4oJyAnKTtcbiAgICB9XG4gIH1cblxuICBzZXRDdXJyZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gZWxlbWVudFxuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKGVsLCB0aGlzLmNvbmZpZ3VyYXRpb24uY3VycmVudENsYXNzIHx8ICdjdXJyZW50JylcbiAgICAgIH0pXG4gICAgICB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIHRoaXMuY29uZmlndXJhdGlvbi5jdXJyZW50Q2xhc3MgfHwgJ2N1cnJlbnQnKVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkKCkge1xuICB9XG5cbiAgbW92ZShkaXJlY3Rpb24pIHtcbiAgfVxuXG4gIG1vdmVUbyhpbmRleCkge1xuICAgIHRoaXMuc2V0Q3VycmVudCh0aGlzLmVsZW1lbnRzW2luZGV4XSlcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50XG4gIH1cblxuICBnZXRDdXJyZW50SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHMuaW5kZXhPZih0aGlzLmN1cnJlbnQpXG4gIH1cbn1cblxuY2xhc3MgR3JpZE5hdmlnYXRpb24gZXh0ZW5kcyBOYXZpZ2F0aW9uIHtcbiAgYnVpbGQoKSB7XG4gICAgY29uc3Qgcm93cyA9IHt9XG4gICAgY29uc3QgY29scyA9IHt9XG5cbiAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICByb3dzW2VsLm9mZnNldFRvcF0gPSBlbFxuICAgICAgY29sc1tlbC5vZmZzZXRMZWZ0XSA9IGVsXG4gICAgfSlcblxuICAgIHRoaXMubnVtYmVyT2ZSb3dzID0gT2JqZWN0LmtleXMocm93cykubGVuZ3RoXG4gICAgdGhpcy5udW1iZXJPZkNvbHMgPSBPYmplY3Qua2V5cyhjb2xzKS5sZW5ndGhcbiAgfVxuXG4gIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKVxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBOYXZpZ2F0aW9uLlVQOlxuICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudFJvdygpID4gMCkge1xuICAgICAgICBpbmRleCAtPSB0aGlzLm51bWJlck9mQ29sc1xuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlIE5hdmlnYXRpb24uRE9XTjpcbiAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRSb3coKSA8IHRoaXMubnVtYmVyT2ZSb3dzKSB7XG4gICAgICAgIGluZGV4ICs9IHRoaXMubnVtYmVyT2ZDb2xzXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgTmF2aWdhdGlvbi5MRUZUOlxuICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudENvbCgpID4gMCkge1xuICAgICAgICBpbmRleCAtPSAxXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGNhc2UgTmF2aWdhdGlvbi5SSUdIVDpcbiAgICAgIGlmICh0aGlzLmdldEN1cnJlbnRDb2woKSA8IHRoaXMubnVtYmVyT2ZDb2xzIC0gMSkge1xuICAgICAgICBpbmRleCArPSAxXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChpbmRleCAhPT0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSlcbiAgICB7XG4gICAgICB0aGlzLnNldEN1cnJlbnQodGhpcy5lbGVtZW50c1tpbmRleF0pXG4gICAgfVxuICB9XG5cbiAgc2V0Q3VycmVudChlbGVtZW50KSB7XG4gICAgc3VwZXIuc2V0Q3VycmVudChlbGVtZW50KVxuXG4gICAgaWYgKCF0aGlzLmN1cnNvcikge1xuICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgdGhpcy5hZGRDbGFzcyh0aGlzLmN1cnNvciwgdGhpcy5jb25maWd1cmF0aW9uLmN1cnNvckNsYXNzIHx8ICdjdXJzb3InKVxuICAgICAgdGhpcy5jdXJyZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jdXJzb3IpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLnRvcCA9IHRoaXMuY3VycmVudC5vZmZzZXRUb3AgKyAncHgnXG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS5sZWZ0ID0gdGhpcy5jdXJyZW50Lm9mZnNldExlZnQgKyAncHgnXG4gICAgICB0aGlzLmN1cnNvci5zdHlsZS53aWR0aCA9IHRoaXMuY3VycmVudC5vZmZzZXRXaWR0aCArICdweCdcbiAgICAgIHRoaXMuY3Vyc29yLnN0eWxlLmhlaWdodCA9IHRoaXMuY3VycmVudC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudENvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAlIHRoaXMubnVtYmVyT2ZDb2xzXG4gIH1cblxuICBnZXRDdXJyZW50Um93KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgLyB0aGlzLm51bWJlck9mQ29scylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmlkTmF2aWdhdGlvblxuIiwicmVxdWlyZSgnLi4vY3NzL25hdmlnYXRpb24uc2NzcycpO1xuaW1wb3J0IEdyaWROYXZpZ2F0aW9uIGZyb20gJy4vbW9kdWxlcy9uYXZpZ2F0aW9uJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICB2YXIgc3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKVxuICBzdHVmZi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgc3R1ZmYuc3R5bGUuYm90dG9tID0gc3R1ZmYuc3R5bGUubGVmdCA9IHN0dWZmLnN0eWxlLnJpZ2h0ID0gMFxuICBzdHVmZi5zdHlsZS5wYWRkaW5nID0gJzFlbSdcbiAgc3R1ZmYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3llbGxvdydcbiAgc3R1ZmYuc3R5bGUuY29sb3IgPSAnYmxhY2snXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3R1ZmYpXG5cbiAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBHcmlkTmF2aWdhdGlvbignLnBhcmFncmFwaHMtaXRlbS1jYW1wYWlnbi1hdWRpby1ib29rcyAuZmllbGQtbmFtZS1maWVsZC1hdWRpby1ib29rcyAuZmllbGQtaXRlbSA+IGRpdicsIHtcbiAgICBjdXJyZW50Q2xhc3M6ICdrcmVvbC1jYW1wYWlnbi1jdXJyZW50J1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHN0dWZmLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICdrZXknOiBlLmtleSxcbiAgICAgICdrZXlDb2RlJzogZS5rZXlDb2RlXG4gICAgfSwgbnVsbCwgMilcblxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSA4OiAvLyBCQUNLXG4gICAgY2FzZSAyNzogLy8gRVhJVFxuICAgIGNhc2UgMTIyOiAvLyBIT01FXG4gICAgICBzdGJXZWJXaW5kb3cuY2xvc2UoKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgODk6IC8vIElORk9cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDQwOiAvLyBET1dOXG4gICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uRE9XTilcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDM3OiAvLyBMRUZUXG4gICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uTEVGVClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDM5OiAvLyBSSUdIVFxuICAgICAgbmF2aWdhdGlvbi5tb3ZlKEdyaWROYXZpZ2F0aW9uLlJJR0hUKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMzg6IC8vIFVQXG4gICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uVVApXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAxMzogLy8gRU5URVIvT0tcbiAgICBjYXNlIDMyOiAvLyBTUEFDRVxuICAgICAgY29uc3QgZWxlbWVudCA9IG5hdmlnYXRpb24uc2VsZWN0KClcbiAgICAgIHN0dWZmLmlubmVySFRNTCA9ICdQbGF5IGF1ZGlvIGJvb2snXG5cbiAgICAgIGNvbnN0IGF1ZGlvVXJsID0gJ2h0dHBzOi8vYXVkaW8uYXBpLnN0cmVhbWluZy5wdWJodWIuZGsvUGxheS5hc2h4P289OTQyYWFkMTYtZDliYy00NzI2LWE3NmQtNWMxMDk0YmIyOGY4J1xuXHRcdFx0Y29uc3Qgc3RiID0gZ1NUQlxuXHRcdFx0c3RiLlN0b3AoKVxuXHRcdFx0c3RiLkluaXRQbGF5ZXIoKVxuXHRcdFx0c3RiLlBsYXkoYXVkaW9VcmwpXG5cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIDMzOiAvLyBQUkVWIFRSQUNLXG4gICAgY2FzZSAzNDogLy8gTkVYVCBUUkFDS1xuXG4gICAgY2FzZSAxMDc6IC8vIFZPTFVNRSBVUFxuICAgIGNhc2UgMTA5OiAvLyBWT0xVTUUgRE9XTlxuICAgIGNhc2UgMTkyOiAvLyBNVVRFXG5cblxuICAgIGNhc2UgODI6IC8vIFBMQVkvUEFVU0VcbiAgICBjYXNlIDY2OiAvLyBTS0lQIEJBQ0tXQVJEXG4gICAgY2FzZSA3MDogLy8gU0tJUCBGT1JXQVJEXG4gICAgY2FzZSA4MzogLy8gU1RPUFxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgMTE2OlxuICAgICAgc3R1ZmYuaW5uZXJIVE1MID0gJ1JlbG9hZGluZyDigKYnXG4gICAgICBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZlxuICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG59KVxuXG5cblxuLy8gKGZ1bmN0aW9uICgkKSB7XG4vLyAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHN0YldlYldpbmRvdykge1xuLy8gICAgIHZhciBzdGJXZWJXaW5kb3cgPSB7XG4vLyAgICAgICBjbG9zZTogKCkgPT4ge31cbi8vICAgICB9XG4vLyAgIH1cblxuLy8gICAkKCgpID0+IHtcbi8vICAgICBhbGVydCgncmVhZHknKVxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBHcmlkTmF2aWdhdGlvbignLnBhcmFncmFwaHMtaXRlbS1jYW1wYWlnbi1hdWRpby1ib29rcyAuZmllbGQtbmFtZS1maWVsZC1hdWRpby1ib29rcyAuZmllbGQtaXRlbSA+IGRpdicsIHtcbi8vICAgICAgICAgY3VycmVudENsYXNzOiAna3Jlb2wtY2FtcGFpZ24tY3VycmVudCdcbi8vICAgICAgIH0pXG5cbi8vICAgICAgIGNvbnN0IHN0dWZmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJylcbi8vICAgICAgIHN0dWZmLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuLy8gICAgICAgc3R1ZmYuc3R5bGUuYm90dG9tID0gc3R1ZmYuc3R5bGUubGVmdCA9IHN0dWZmLnN0eWxlLnJpZ2h0ID0gMFxuLy8gICAgICAgc3R1ZmYuc3R5bGUucGFkZGluZyA9ICcxZW0nXG4vLyAgICAgICBzdHVmZi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuLy8gICAgICAgc3R1ZmYuc3R5bGUuY29sb3IgPSAnYmxhY2snXG4vLyAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0dWZmKVxuXG4vLyAgICAgICBhbGVydCg4NylcblxuLy8gICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgICAgICAgIHN0dWZmLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAna2V5JzogZXZlbnQua2V5LFxuLy8gICAgICAgICAgICdrZXlDb2RlJzogZXZlbnQua2V5Q29kZVxuLy8gICAgICAgICB9LCBudWxsLCAyKVxuXG5cbi8vICAgICAgICAgaWYgKDExNiA9PT0gZXZlbnQua2V5Q29kZSkge1xuLy8gICAgICAgICAgIC8vIFJlbG9hZFxuLy8gICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5ocmVmXG4vLyAgICAgICAgICAgcmV0dXJuXG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuLy8gICAgICAgICBjYXNlICdFc2NhcGUnOlxuLy8gICAgICAgICAgIHN0YldlYldpbmRvdy5jbG9zZSgpXG4vLyAgICAgICAgICAgYnJlYWtcbi8vICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbi8vICAgICAgICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uRE9XTilcbi8vICAgICAgICAgICBicmVha1xuLy8gICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuLy8gICAgICAgICAgIG5hdmlnYXRpb24ubW92ZShHcmlkTmF2aWdhdGlvbi5MRUZUKVxuLy8gICAgICAgICAgIGJyZWFrXG4vLyAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuLy8gICAgICAgICAgIG5hdmlnYXRpb24ubW92ZShHcmlkTmF2aWdhdGlvbi5SSUdIVClcbi8vICAgICAgICAgICBicmVha1xuLy8gICAgICAgICBjYXNlICdBcnJvd1VwJzpcbi8vICAgICAgICAgICBuYXZpZ2F0aW9uLm1vdmUoR3JpZE5hdmlnYXRpb24uVVApXG4vLyAgICAgICAgICAgYnJlYWtcbi8vICAgICAgICAgY2FzZSAnRW50ZXInOlxuLy8gICAgICAgICBjYXNlICcgJzpcbi8vICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbmF2aWdhdGlvbi5zZWxlY3QoKVxuLy8gICAgICAgICAgIDs7OyBjb25zb2xlLmxvZygnc2VsZWN0JywgZWxlbWVudClcbi8vICAgICAgICAgICBicmVha1xuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoZXZlbnQua2V5KSkpIHtcbi8vICAgICAgICAgICAgIG5hdmlnYXRpb24ubW92ZVRvKHBhcnNlSW50KGV2ZW50LmtleSktMSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgYnJlYWtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSlcblxuLy8gICAgICAgYWxlcnQoNDIpXG4vLyAgICAgfSwgMTAwMClcbi8vICAgfSlcbi8vIH0oalF1ZXJ5KSlcbiJdLCJzb3VyY2VSb290IjoiIn0=