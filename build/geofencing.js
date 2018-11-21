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
    var el = document.getElementById('campaign-geofencing-config');

    try {
      config = JSON.parse(el.innerHTML);
    } catch (e) {}

    showStep('message');
    $('#geofencing-accept').on('click', getLocation);
    $('#geofencing-decline').on('click', declined); // $('#geofencing-decline').on('click', getLocation)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9nZW9mZW5jaW5nLnNjc3M/ZDQ3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZ2VvZmVuY2luZy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiJCIsInNob3dTdGVwIiwiaW5kZXgiLCJ0b2dnbGUiLCJnZXRMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY2hlY2tMb2NhdGlvbiIsInVua25vd25Mb2NhdGlvbiIsImxvY2F0aW9uIiwiY29uZmlnIiwib3JpZ2lucyIsIm9yaWdpbiIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm1heF9kaXN0YW5jZSIsImFjY2Vzc0dyYW50ZWQiLCJhY2Nlc3NEZW5pZWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZGVjbGluZWQiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJKU09OIiwicGFyc2UiLCJpbm5lckhUTUwiLCJlIiwib24iLCJsb24xIiwibGF0MSIsImxvbjIiLCJsYXQyIiwiUiIsImRMYXQiLCJ0b1JhZCIsImRMb24iLCJhIiwiTWF0aCIsInNpbiIsImNvcyIsImMiLCJhdGFuMiIsInNxcnQiLCJkIiwibnVtYmVyIiwiUEkiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlE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QUFaO0FBQ0EsUUFBSU8sQ0FBQyxHQUFHWCxDQUFDLEdBQUdRLENBQVosQ0FSMkMsQ0FRNUI7O0FBQ2YsV0FBTyxPQUFLRyxDQUFaO0FBQ0Q7O0FBRUQsV0FBU1QsS0FBVCxDQUFlVSxNQUFmLEVBQXVCO0FBQ3JCLFdBQU9BLE1BQU0sR0FBR1AsSUFBSSxDQUFDUSxFQUFkLEdBQW1CLEdBQTFCO0FBQ0QsR0FuRlcsQ0FxRlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNELENBM0ZBLEVBMkZDQyxNQTNGRCxDQUFELEMsQ0E2RkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxrRiIsImZpbGUiOiJnZW9mZW5jaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL2dlb2ZlbmNpbmcuanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9jc3MvZ2VvZmVuY2luZy5zY3NzJyk7XG5cbihmdW5jdGlvbiAoJCkge1xuICBjb25zdCBzaG93U3RlcCA9IChpbmRleCkgPT4ge1xuICAgICQoJyNnZW9mZW5jaW5nIC5zdGVwJykudG9nZ2xlKGZhbHNlKVxuICAgICQoJyNnZW9mZW5jaW5nIC5zdGVwW2RhdGEtc3RlcD1cIicraW5kZXgrJ1wiXScpLnRvZ2dsZSh0cnVlKVxuICB9XG5cbiAgY29uc3QgZ2V0TG9jYXRpb24gPSAoKSA9PiB7XG4gICAgc2hvd1N0ZXAoJ2dldHRpbmctbG9jYXRpb24nKVxuICAgIGlmICgnZ2VvbG9jYXRpb24nIGluIG5hdmlnYXRvcikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihjaGVja0xvY2F0aW9uLCB1bmtub3duTG9jYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHVua25vd25Mb2NhdGlvbigpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2hlY2tMb2NhdGlvbiA9IChsb2NhdGlvbikgPT4ge1xuICAgIHNob3dTdGVwKCdjaGVja2luZy1sb2NhdGlvbicpXG5cbiAgICBmb3IgKGxldCBvcmlnaW4gb2YgY29uZmlnLm9yaWdpbnMpIHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gZ2V0RGlzdGFuY2UoXG4gICAgICAgIGxvY2F0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgbG9jYXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgb3JpZ2luLmNvb3Jkcy5sYXRpdHVkZSwgb3JpZ2luLmNvb3Jkcy5sb25naXR1ZGVcbiAgICAgIClcblxuICAgICAgaWYgKGRpc3RhbmNlIDw9IGNvbmZpZy5tYXhfZGlzdGFuY2UpIHtcbiAgICAgICAgYWNjZXNzR3JhbnRlZCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGFjY2Vzc0RlbmllZCgpXG4gIH1cblxuICBjb25zdCBhY2Nlc3NHcmFudGVkID0gKCkgPT4ge1xuICAgIHNob3dTdGVwKCdhY2Nlc3MtZ3JhbnRlZCcpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAkKCcjZ2VvZmVuY2luZycpLnJlbW92ZSgpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGNvbnN0IGFjY2Vzc0RlbmllZCA9ICgpID0+IHtcbiAgICBzaG93U3RlcCgnYWNjZXNzLWRlbmllZCcpXG4gIH1cblxuICBjb25zdCB1bmtub3duTG9jYXRpb24gPSAoKSA9PiB7XG4gICAgc2hvd1N0ZXAoJ3Vua25vd24tbG9jYXRpb24nKVxuICB9XG5cbiAgY29uc3QgZGVjbGluZWQgPSAoKSA9PiB7XG4gICAgc2hvd1N0ZXAoJ2dlb2ZlbmNpbmctZGVjbGluZWQnKVxuICB9XG5cbiAgbGV0IGNvbmZpZyA9IHt9XG5cbiAgJCgoKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtcGFpZ24tZ2VvZmVuY2luZy1jb25maWcnKVxuICAgIHRyeSB7XG4gICAgICAgIGNvbmZpZyA9IEpTT04ucGFyc2UoZWwuaW5uZXJIVE1MKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG5cbiAgICBzaG93U3RlcCgnbWVzc2FnZScpXG4gICAgJCgnI2dlb2ZlbmNpbmctYWNjZXB0Jykub24oJ2NsaWNrJywgZ2V0TG9jYXRpb24pXG4gICAgJCgnI2dlb2ZlbmNpbmctZGVjbGluZScpLm9uKCdjbGljaycsIGRlY2xpbmVkKVxuICAgIC8vICQoJyNnZW9mZW5jaW5nLWRlY2xpbmUnKS5vbignY2xpY2snLCBnZXRMb2NhdGlvbilcblxuICB9KVxuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMzg0MTA0N1xuICBmdW5jdGlvbiBnZXREaXN0YW5jZShsb24xLCBsYXQxLCBsb24yLCBsYXQyKSB7XG4gICAgdmFyIFIgPSA2MzcxOyAvLyBSYWRpdXMgb2YgdGhlIGVhcnRoIGluIGttXG4gICAgdmFyIGRMYXQgPSB0b1JhZChsYXQyLWxhdDEpOyAgLy8gSmF2YXNjcmlwdCBmdW5jdGlvbnMgaW4gcmFkaWFuc1xuICAgIHZhciBkTG9uID0gdG9SYWQobG9uMi1sb24xKTtcbiAgICB2YXIgYSA9IE1hdGguc2luKGRMYXQvMikgKiBNYXRoLnNpbihkTGF0LzIpICtcbiAgICAgICAgTWF0aC5jb3ModG9SYWQobGF0MSkpICogTWF0aC5jb3ModG9SYWQobGF0MikpICpcbiAgICAgICAgTWF0aC5zaW4oZExvbi8yKSAqIE1hdGguc2luKGRMb24vMik7XG4gICAgdmFyIGMgPSAyICogTWF0aC5hdGFuMihNYXRoLnNxcnQoYSksIE1hdGguc3FydCgxLWEpKTtcbiAgICB2YXIgZCA9IFIgKiBjOyAvLyBEaXN0YW5jZSBpbiBrbVxuICAgIHJldHVybiAxMDAwKmQ7XG4gIH1cblxuICBmdW5jdGlvbiB0b1JhZChudW1iZXIpIHtcbiAgICByZXR1cm4gbnVtYmVyICogTWF0aC5QSSAvIDE4MDtcbiAgfVxuXG4gIC8vIC8qKiBDb252ZXJ0cyBudW1lcmljIGRlZ3JlZXMgdG8gcmFkaWFucyAqL1xuICAvLyBpZiAodHlwZW9mKE51bWJlci5wcm90b3R5cGUudG9SYWQpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8vICAgTnVtYmVyLnByb3RvdHlwZS50b1JhZCA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgcmV0dXJuIHRoaXMgKiBNYXRoLlBJIC8gMTgwO1xuICAvLyAgIH1cbiAgLy8gfVxufShqUXVlcnkpKVxuXG4vLyAndXNlIHN0cmljdCc7XG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG4vLyBjb25zdCBlID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcblxuLy8gY2xhc3MgTGlrZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgIHRoaXMuc3RhdGUgPSB7IGxpa2VkOiBmYWxzZSB9O1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGlmICh0aGlzLnN0YXRlLmxpa2VkKSB7XG4vLyAgICAgICByZXR1cm4gJ1lvdSBsaWtlZCB0aGlzLidcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gPGZpZWxkc2V0PlxuLy8gICAgICAgPGxlZ2VuZD57dGhpcy5wcm9wcy50aXRsZX08L2xlZ2VuZD5cbi8vICAgICAgIHtlKFxuLy8gICAgICAgICAnYnV0dG9uJyxcbi8vICAgICAgICAgeyBvbkNsaWNrOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbGlrZWQ6IHRydWUgfSkgfSxcbi8vICAgICAgICAgJ0xpa2UnXG4vLyAgICAgICApfVxuLy8gICAgIDwvZmllbGRzZXQ+XG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4vLyAvLyAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4vLyAvLyAgICAgKHBvc2l0aW9uKSA9PiB7XG4vLyAvLyAgICAgICA7OzsgY29uc29sZS5sb2cocG9zaXRpb24pXG4vLyAvLyAgICAgfSxcbi8vIC8vICAgICAoZXJyb3IpID0+IHtcbi8vIC8vICAgICAgIDs7OyBjb25zb2xlLmxvZyhlcnJvcilcbi8vIC8vICAgICB9LFxuLy8gLy8gICApXG4vLyAvLyB9XG5cbi8vIGNvbnN0IGRvbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKVxuLy8gUmVhY3RET00ucmVuZGVyKGUoTGlrZUJ1dHRvbiwge3RpdGxlOiAnV2UgbmVlZCB5b3VyIGxvY2F0aW9uLid9KSwgZG9tQ29udGFpbmVyKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==