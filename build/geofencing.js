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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/geofencing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/geofencing.scss":
/*!************************************!*\
  !*** ./assets/css/geofencing.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/geofencing.js":
/*!*********************************!*\
  !*** ./assets/js/geofencing.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../css/geofencing.scss */ "./assets/css/geofencing.scss");

(function ($) {
  var showStep = function showStep(index) {
    $('#geofencing .step').toggle(false);
    $('#geofencing .step[data-step="' + index + '"]').toggle(true);
  };

  var getLocation = function getLocation() {
    showStep('getting-location');

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(checkLocation, unknownLocation);
    } else {
      unknownLocation();
    }
  };

  var checkLocation = function checkLocation(location) {
    showStep('checking-location');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = config.origins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var origin = _step.value;
        var distance = getDistance(location.coords.latitude, location.coords.longitude, origin.coords.latitude, origin.coords.longitude);

        if (distance <= config.max_distance) {
          accessGranted();
          return;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    accessDenied();
  };

  var accessGranted = function accessGranted() {
    showStep('access-granted');
    setTimeout(function () {
      $('#geofencing').remove();
    }, 1000);
  };

  var accessDenied = function accessDenied() {
    showStep('access-denied');
  };

  var unknownLocation = function unknownLocation() {
    showStep('unknown-location');
  };

  var declined = function declined() {
    showStep('geofencing-declined');
  };

  var config = {};
  $(function () {
    // Get global geofencing config.
    config = geofencing_config || {};
    showStep('message');
    $('#geofencing-accept').on('click', getLocation);
    $('#geofencing-decline').on('click', declined);
  }); // https://stackoverflow.com/a/13841047

  function getDistance(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km

    var dLat = toRad(lat2 - lat1); // Javascript functions in radians

    var dLon = toRad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km

    return 1000 * d;
  }

  function toRad(number) {
    return number * Math.PI / 180;
  } // /** Converts numeric degrees to radians */
  // if (typeof(Number.prototype.toRad) === "undefined") {
  //   Number.prototype.toRad = function() {
  //     return this * Math.PI / 180;
  //   }
  // }

})(jQuery); // 'use strict';
// import React from 'react'
// import ReactDOM from 'react-dom';
// const e = React.createElement;
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//   render() {
//     if (this.state.liked) {
//       return 'You liked this.'
//     }
//     return <fieldset>
//       <legend>{this.props.title}</legend>
//       {e(
//         'button',
//         { onClick: () => this.setState({ liked: true }) },
//         'Like'
//       )}
//     </fieldset>
//   }
// }
// // if ('geolocation' in navigator) {
// //   navigator.geolocation.getCurrentPosition(
// //     (position) => {
// //       ;;; console.log(position)
// //     },
// //     (error) => {
// //       ;;; console.log(error)
// //     },
// //   )
// // }
// const domContainer = document.querySelector('#app')
// ReactDOM.render(e(LikeButton, {title: 'We need your location.'}), domContainer)

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9nZW9mZW5jaW5nLnNjc3M/ZDQ3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2VvZmVuY2luZy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsInNob3dTdGVwIiwiaW5kZXgiLCJ0b2dnbGUiLCJnZXRMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY2hlY2tMb2NhdGlvbiIsInVua25vd25Mb2NhdGlvbiIsImxvY2F0aW9uIiwiY29uZmlnIiwib3JpZ2lucyIsIm9yaWdpbiIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm1heF9kaXN0YW5jZSIsImFjY2Vzc0dyYW50ZWQiLCJhY2Nlc3NEZW5pZWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZGVjbGluZWQiLCJnZW9mZW5jaW5nX2NvbmZpZyIsIm9uIiwibG9uMSIsImxhdDEiLCJsb24yIiwibGF0MiIsIlIiLCJkTGF0IiwidG9SYWQiLCJkTG9uIiwiYSIsIk1hdGgiLCJzaW4iLCJjb3MiLCJjIiwiYXRhbjIiLCJzcXJ0IiwiZCIsIm51bWJlciIsIlBJIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDRCxDQXRGQSxFQXNGQ0MsTUF0RkQsQ0FBRCxDLENBd0ZBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Esa0YiLCJmaWxlIjoiZ2VvZmVuY2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9nZW9mZW5jaW5nLmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vY3NzL2dlb2ZlbmNpbmcuc2NzcycpO1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgY29uc3Qgc2hvd1N0ZXAgPSAoaW5kZXgpID0+IHtcbiAgICAkKCcjZ2VvZmVuY2luZyAuc3RlcCcpLnRvZ2dsZShmYWxzZSlcbiAgICAkKCcjZ2VvZmVuY2luZyAuc3RlcFtkYXRhLXN0ZXA9XCInK2luZGV4KydcIl0nKS50b2dnbGUodHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IGdldExvY2F0aW9uID0gKCkgPT4ge1xuICAgIHNob3dTdGVwKCdnZXR0aW5nLWxvY2F0aW9uJylcbiAgICBpZiAoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oY2hlY2tMb2NhdGlvbiwgdW5rbm93bkxvY2F0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB1bmtub3duTG9jYXRpb24oKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrTG9jYXRpb24gPSAobG9jYXRpb24pID0+IHtcbiAgICBzaG93U3RlcCgnY2hlY2tpbmctbG9jYXRpb24nKVxuXG4gICAgZm9yIChsZXQgb3JpZ2luIG9mIGNvbmZpZy5vcmlnaW5zKSB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGdldERpc3RhbmNlKFxuICAgICAgICBsb2NhdGlvbi5jb29yZHMubGF0aXR1ZGUsIGxvY2F0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIG9yaWdpbi5jb29yZHMubGF0aXR1ZGUsIG9yaWdpbi5jb29yZHMubG9uZ2l0dWRlXG4gICAgICApXG5cbiAgICAgIGlmIChkaXN0YW5jZSA8PSBjb25maWcubWF4X2Rpc3RhbmNlKSB7XG4gICAgICAgIGFjY2Vzc0dyYW50ZWQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY2Nlc3NEZW5pZWQoKVxuICB9XG5cbiAgY29uc3QgYWNjZXNzR3JhbnRlZCA9ICgpID0+IHtcbiAgICBzaG93U3RlcCgnYWNjZXNzLWdyYW50ZWQnKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJCgnI2dlb2ZlbmNpbmcnKS5yZW1vdmUoKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBjb25zdCBhY2Nlc3NEZW5pZWQgPSAoKSA9PiB7XG4gICAgc2hvd1N0ZXAoJ2FjY2Vzcy1kZW5pZWQnKVxuICB9XG5cbiAgY29uc3QgdW5rbm93bkxvY2F0aW9uID0gKCkgPT4ge1xuICAgIHNob3dTdGVwKCd1bmtub3duLWxvY2F0aW9uJylcbiAgfVxuXG4gIGNvbnN0IGRlY2xpbmVkID0gKCkgPT4ge1xuICAgIHNob3dTdGVwKCdnZW9mZW5jaW5nLWRlY2xpbmVkJylcbiAgfVxuXG4gIGxldCBjb25maWcgPSB7fVxuXG4gICQoKCkgPT4ge1xuICAgIC8vIEdldCBnbG9iYWwgZ2VvZmVuY2luZyBjb25maWcuXG4gICAgY29uZmlnID0gZ2VvZmVuY2luZ19jb25maWcgfHwge31cblxuICAgIHNob3dTdGVwKCdtZXNzYWdlJylcbiAgICAkKCcjZ2VvZmVuY2luZy1hY2NlcHQnKS5vbignY2xpY2snLCBnZXRMb2NhdGlvbilcbiAgICAkKCcjZ2VvZmVuY2luZy1kZWNsaW5lJykub24oJ2NsaWNrJywgZGVjbGluZWQpXG4gIH0pXG5cbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzEzODQxMDQ3XG4gIGZ1bmN0aW9uIGdldERpc3RhbmNlKGxvbjEsIGxhdDEsIGxvbjIsIGxhdDIpIHtcbiAgICB2YXIgUiA9IDYzNzE7IC8vIFJhZGl1cyBvZiB0aGUgZWFydGggaW4ga21cbiAgICB2YXIgZExhdCA9IHRvUmFkKGxhdDItbGF0MSk7ICAvLyBKYXZhc2NyaXB0IGZ1bmN0aW9ucyBpbiByYWRpYW5zXG4gICAgdmFyIGRMb24gPSB0b1JhZChsb24yLWxvbjEpO1xuICAgIHZhciBhID0gTWF0aC5zaW4oZExhdC8yKSAqIE1hdGguc2luKGRMYXQvMikgK1xuICAgICAgICBNYXRoLmNvcyh0b1JhZChsYXQxKSkgKiBNYXRoLmNvcyh0b1JhZChsYXQyKSkgKlxuICAgICAgICBNYXRoLnNpbihkTG9uLzIpICogTWF0aC5zaW4oZExvbi8yKTtcbiAgICB2YXIgYyA9IDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEtYSkpO1xuICAgIHZhciBkID0gUiAqIGM7IC8vIERpc3RhbmNlIGluIGttXG4gICAgcmV0dXJuIDEwMDAqZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvUmFkKG51bWJlcikge1xuICAgIHJldHVybiBudW1iZXIgKiBNYXRoLlBJIC8gMTgwO1xuICB9XG5cbiAgLy8gLyoqIENvbnZlcnRzIG51bWVyaWMgZGVncmVlcyB0byByYWRpYW5zICovXG4gIC8vIGlmICh0eXBlb2YoTnVtYmVyLnByb3RvdHlwZS50b1JhZCkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gICBOdW1iZXIucHJvdG90eXBlLnRvUmFkID0gZnVuY3Rpb24oKSB7XG4gIC8vICAgICByZXR1cm4gdGhpcyAqIE1hdGguUEkgLyAxODA7XG4gIC8vICAgfVxuICAvLyB9XG59KGpRdWVyeSkpXG5cbi8vICd1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vIGNvbnN0IGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50O1xuXG4vLyBjbGFzcyBMaWtlQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG4vLyAgICAgdGhpcy5zdGF0ZSA9IHsgbGlrZWQ6IGZhbHNlIH07XG4vLyAgIH1cblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgaWYgKHRoaXMuc3RhdGUubGlrZWQpIHtcbi8vICAgICAgIHJldHVybiAnWW91IGxpa2VkIHRoaXMuJ1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiA8ZmllbGRzZXQ+XG4vLyAgICAgICA8bGVnZW5kPnt0aGlzLnByb3BzLnRpdGxlfTwvbGVnZW5kPlxuLy8gICAgICAge2UoXG4vLyAgICAgICAgICdidXR0b24nLFxuLy8gICAgICAgICB7IG9uQ2xpY2s6ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBsaWtlZDogdHJ1ZSB9KSB9LFxuLy8gICAgICAgICAnTGlrZSdcbi8vICAgICAgICl9XG4vLyAgICAgPC9maWVsZHNldD5cbi8vICAgfVxuLy8gfVxuXG4vLyAvLyBpZiAoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcbi8vIC8vICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbi8vIC8vICAgICAocG9zaXRpb24pID0+IHtcbi8vIC8vICAgICAgIDs7OyBjb25zb2xlLmxvZyhwb3NpdGlvbilcbi8vIC8vICAgICB9LFxuLy8gLy8gICAgIChlcnJvcikgPT4ge1xuLy8gLy8gICAgICAgOzs7IGNvbnNvbGUubG9nKGVycm9yKVxuLy8gLy8gICAgIH0sXG4vLyAvLyAgIClcbi8vIC8vIH1cblxuLy8gY29uc3QgZG9tQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXG4vLyBSZWFjdERPTS5yZW5kZXIoZShMaWtlQnV0dG9uLCB7dGl0bGU6ICdXZSBuZWVkIHlvdXIgbG9jYXRpb24uJ30pLCBkb21Db250YWluZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9