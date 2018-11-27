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

/* global geofencing_config:false, jQuery:false */
__webpack_require__(/*! ../css/geofencing.scss */ "./assets/css/geofencing.scss");

(function ($) {
  var showStep = function showStep(index) {
    $('#geofencing').toggle(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9nZW9mZW5jaW5nLnNjc3M/ZDQ3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2VvZmVuY2luZy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsInNob3dTdGVwIiwiaW5kZXgiLCJ0b2dnbGUiLCJnZXRMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY2hlY2tMb2NhdGlvbiIsInVua25vd25Mb2NhdGlvbiIsImxvY2F0aW9uIiwiY29uZmlnIiwib3JpZ2lucyIsIm9yaWdpbiIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm1heF9kaXN0YW5jZSIsImFjY2Vzc0dyYW50ZWQiLCJhY2Nlc3NEZW5pZWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZGVjbGluZWQiLCJnZW9mZW5jaW5nX2NvbmZpZyIsIm9uIiwibG9uMSIsImxhdDEiLCJsb24yIiwibGF0MiIsIlIiLCJkTGF0IiwidG9SYWQiLCJkTG9uIiwiYSIsIk1hdGgiLCJzaW4iLCJjb3MiLCJjIiwiYXRhbjIiLCJzcXJ0IiwiZCIsIm51bWJlciIsIlBJIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LE1BQU0sR0FBR1AsSUFBSSxDQUFDUSxFQUFkLEdBQW1CLEdBQTFCO0FBQ0QsR0EvRVcsQ0FpRlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELENBdkZBLEVBdUZDQyxNQXZGRCxDQUFELEMsQ0F5RkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrRiIsImZpbGUiOiJnZW9mZW5jaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2dlb2ZlbmNpbmcuanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKiBnbG9iYWwgZ2VvZmVuY2luZ19jb25maWc6ZmFsc2UsIGpRdWVyeTpmYWxzZSAqL1xuXG5yZXF1aXJlKCcuLi9jc3MvZ2VvZmVuY2luZy5zY3NzJyk7XG5cbihmdW5jdGlvbiAoJCkge1xuICBjb25zdCBzaG93U3RlcCA9IChpbmRleCkgPT4ge1xuICAgICQoJyNnZW9mZW5jaW5nJykudG9nZ2xlKHRydWUpXG4gICAgJCgnI2dlb2ZlbmNpbmcgLnN0ZXAnKS50b2dnbGUoZmFsc2UpXG4gICAgJCgnI2dlb2ZlbmNpbmcgLnN0ZXBbZGF0YS1zdGVwPVwiJytpbmRleCsnXCJdJykudG9nZ2xlKHRydWUpXG4gIH1cblxuICBjb25zdCBnZXRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBzaG93U3RlcCgnZ2V0dGluZy1sb2NhdGlvbicpXG4gICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGNoZWNrTG9jYXRpb24sIHVua25vd25Mb2NhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdW5rbm93bkxvY2F0aW9uKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja0xvY2F0aW9uID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgc2hvd1N0ZXAoJ2NoZWNraW5nLWxvY2F0aW9uJylcblxuICAgIGZvciAobGV0IG9yaWdpbiBvZiBjb25maWcub3JpZ2lucykge1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSBnZXREaXN0YW5jZShcbiAgICAgICAgbG9jYXRpb24uY29vcmRzLmxhdGl0dWRlLCBsb2NhdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICBvcmlnaW4uY29vcmRzLmxhdGl0dWRlLCBvcmlnaW4uY29vcmRzLmxvbmdpdHVkZVxuICAgICAgKVxuXG4gICAgICBpZiAoZGlzdGFuY2UgPD0gY29uZmlnLm1heF9kaXN0YW5jZSkge1xuICAgICAgICBhY2Nlc3NHcmFudGVkKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgYWNjZXNzRGVuaWVkKClcbiAgfVxuXG4gIGNvbnN0IGFjY2Vzc0dyYW50ZWQgPSAoKSA9PiB7XG4gICAgc2hvd1N0ZXAoJ2FjY2Vzcy1ncmFudGVkJylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICQoJyNnZW9mZW5jaW5nJykucmVtb3ZlKClcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgY29uc3QgYWNjZXNzRGVuaWVkID0gKCkgPT4ge1xuICAgIHNob3dTdGVwKCdhY2Nlc3MtZGVuaWVkJylcbiAgfVxuXG4gIGNvbnN0IHVua25vd25Mb2NhdGlvbiA9ICgpID0+IHtcbiAgICBzaG93U3RlcCgndW5rbm93bi1sb2NhdGlvbicpXG4gIH1cblxuICBjb25zdCBkZWNsaW5lZCA9ICgpID0+IHtcbiAgICBzaG93U3RlcCgnZ2VvZmVuY2luZy1kZWNsaW5lZCcpXG4gIH1cblxuICBsZXQgY29uZmlnID0ge31cblxuICAkKCgpID0+IHtcbiAgICAvLyBHZXQgZ2xvYmFsIGdlb2ZlbmNpbmcgY29uZmlnLlxuICAgIGNvbmZpZyA9IGdlb2ZlbmNpbmdfY29uZmlnIHx8IHt9XG5cbiAgICBzaG93U3RlcCgnbWVzc2FnZScpXG4gICAgJCgnI2dlb2ZlbmNpbmctYWNjZXB0Jykub24oJ2NsaWNrJywgZ2V0TG9jYXRpb24pXG4gICAgJCgnI2dlb2ZlbmNpbmctZGVjbGluZScpLm9uKCdjbGljaycsIGRlY2xpbmVkKVxuICB9KVxuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMzg0MTA0N1xuICBmdW5jdGlvbiBnZXREaXN0YW5jZShsb24xLCBsYXQxLCBsb24yLCBsYXQyKSB7XG4gICAgdmFyIFIgPSA2MzcxIC8vIFJhZGl1cyBvZiB0aGUgZWFydGggaW4ga21cbiAgICB2YXIgZExhdCA9IHRvUmFkKGxhdDItbGF0MSkgIC8vIEphdmFzY3JpcHQgZnVuY3Rpb25zIGluIHJhZGlhbnNcbiAgICB2YXIgZExvbiA9IHRvUmFkKGxvbjItbG9uMSlcbiAgICB2YXIgYSA9IE1hdGguc2luKGRMYXQvMikgKiBNYXRoLnNpbihkTGF0LzIpICtcbiAgICAgICAgTWF0aC5jb3ModG9SYWQobGF0MSkpICogTWF0aC5jb3ModG9SYWQobGF0MikpICpcbiAgICAgICAgTWF0aC5zaW4oZExvbi8yKSAqIE1hdGguc2luKGRMb24vMilcbiAgICB2YXIgYyA9IDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEtYSkpXG4gICAgdmFyIGQgPSBSICogYyAvLyBEaXN0YW5jZSBpbiBrbVxuICAgIHJldHVybiAxMDAwKmRcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvUmFkKG51bWJlcikge1xuICAgIHJldHVybiBudW1iZXIgKiBNYXRoLlBJIC8gMTgwXG4gIH1cblxuICAvLyAvKiogQ29udmVydHMgbnVtZXJpYyBkZWdyZWVzIHRvIHJhZGlhbnMgKi9cbiAgLy8gaWYgKHR5cGVvZihOdW1iZXIucHJvdG90eXBlLnRvUmFkKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAvLyAgIE51bWJlci5wcm90b3R5cGUudG9SYWQgPSBmdW5jdGlvbigpIHtcbiAgLy8gICAgIHJldHVybiB0aGlzICogTWF0aC5QSSAvIDE4MDtcbiAgLy8gICB9XG4gIC8vIH1cbn0oalF1ZXJ5KSlcblxuLy8gJ3VzZSBzdHJpY3QnO1xuXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gY29uc3QgZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQ7XG5cbi8vIGNsYXNzIExpa2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKTtcbi8vICAgICB0aGlzLnN0YXRlID0geyBsaWtlZDogZmFsc2UgfTtcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBpZiAodGhpcy5zdGF0ZS5saWtlZCkge1xuLy8gICAgICAgcmV0dXJuICdZb3UgbGlrZWQgdGhpcy4nXG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIDxmaWVsZHNldD5cbi8vICAgICAgIDxsZWdlbmQ+e3RoaXMucHJvcHMudGl0bGV9PC9sZWdlbmQ+XG4vLyAgICAgICB7ZShcbi8vICAgICAgICAgJ2J1dHRvbicsXG4vLyAgICAgICAgIHsgb25DbGljazogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxpa2VkOiB0cnVlIH0pIH0sXG4vLyAgICAgICAgICdMaWtlJ1xuLy8gICAgICAgKX1cbi8vICAgICA8L2ZpZWxkc2V0PlxuLy8gICB9XG4vLyB9XG5cbi8vIC8vIGlmICgnZ2VvbG9jYXRpb24nIGluIG5hdmlnYXRvcikge1xuLy8gLy8gICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuLy8gLy8gICAgIChwb3NpdGlvbikgPT4ge1xuLy8gLy8gICAgICAgOzs7IGNvbnNvbGUubG9nKHBvc2l0aW9uKVxuLy8gLy8gICAgIH0sXG4vLyAvLyAgICAgKGVycm9yKSA9PiB7XG4vLyAvLyAgICAgICA7OzsgY29uc29sZS5sb2coZXJyb3IpXG4vLyAvLyAgICAgfSxcbi8vIC8vICAgKVxuLy8gLy8gfVxuXG4vLyBjb25zdCBkb21Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJylcbi8vIFJlYWN0RE9NLnJlbmRlcihlKExpa2VCdXR0b24sIHt0aXRsZTogJ1dlIG5lZWQgeW91ciBsb2NhdGlvbi4nfSksIGRvbUNvbnRhaW5lcilcbiJdLCJzb3VyY2VSb290IjoiIn0=