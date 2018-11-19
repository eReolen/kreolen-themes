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

/***/ "./assets/js/geofencing.js":
/*!*********************************!*\
  !*** ./assets/js/geofencing.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import '../css/geofencing.scss'
(function ($) {
  var showStep = function showStep(index) {
    // $('#geofencing-overlay').toggle(true)
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
    var distance = getDistance(location.coords.longitude, location.coords.latitude, origin.coords.longitude, origin.coords.latitude);

    if (distance <= maxDistance) {
      accessGranted();
    } else {
      accessDenied();
    }
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

  var origin = null;
  var maxDistance = null;
  $(function () {
    var coords = $('#geofencing').data('origin').split(',');
    origin = {
      coords: {
        latitude: coords[0],
        longitude: coords[1]
      }
    };
    maxDistance = parseFloat($('#geofencing').data('maxDistance'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2dlb2ZlbmNpbmcuanMiXSwibmFtZXMiOlsiJCIsInNob3dTdGVwIiwiaW5kZXgiLCJ0b2dnbGUiLCJnZXRMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY2hlY2tMb2NhdGlvbiIsInVua25vd25Mb2NhdGlvbiIsImxvY2F0aW9uIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImNvb3JkcyIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwib3JpZ2luIiwibWF4RGlzdGFuY2UiLCJhY2Nlc3NHcmFudGVkIiwiYWNjZXNzRGVuaWVkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImRlY2xpbmVkIiwiZGF0YSIsInNwbGl0IiwicGFyc2VGbG9hdCIsIm9uIiwibG9uMSIsImxhdDEiLCJsb24yIiwibGF0MiIsIlIiLCJkTGF0IiwidG9SYWQiLCJkTG9uIiwiYSIsIk1hdGgiLCJzaW4iLCJjb3MiLCJjIiwiYXRhbjIiLCJzcXJ0IiwiZCIsIm51bWJlciIsIlBJIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtB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LEVBQWQsR0FBbUIsR0FBMUI7QUFDRCxHQXJGVyxDQXVGWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0QsQ0E3RkEsRUE2RkNDLE1BN0ZELENBQUQsQyxDQStGQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGtGIiwiZmlsZSI6Imdlb2ZlbmNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvZ2VvZmVuY2luZy5qc1wiKTtcbiIsIi8vaW1wb3J0ICcuLi9jc3MvZ2VvZmVuY2luZy5zY3NzJ1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgY29uc3Qgc2hvd1N0ZXAgPSAoaW5kZXgpID0+IHtcbiAgICAvLyAkKCcjZ2VvZmVuY2luZy1vdmVybGF5JykudG9nZ2xlKHRydWUpXG4gICAgJCgnI2dlb2ZlbmNpbmcgLnN0ZXAnKS50b2dnbGUoZmFsc2UpXG4gICAgJCgnI2dlb2ZlbmNpbmcgLnN0ZXBbZGF0YS1zdGVwPVwiJytpbmRleCsnXCJdJykudG9nZ2xlKHRydWUpXG4gIH1cblxuICBjb25zdCBnZXRMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBzaG93U3RlcCgnZ2V0dGluZy1sb2NhdGlvbicpXG4gICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGNoZWNrTG9jYXRpb24sIHVua25vd25Mb2NhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdW5rbm93bkxvY2F0aW9uKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBjaGVja0xvY2F0aW9uID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgc2hvd1N0ZXAoJ2NoZWNraW5nLWxvY2F0aW9uJylcblxuICAgIGNvbnN0IGRpc3RhbmNlID0gZ2V0RGlzdGFuY2UoXG4gICAgICBsb2NhdGlvbi5jb29yZHMubG9uZ2l0dWRlLCBsb2NhdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICBvcmlnaW4uY29vcmRzLmxvbmdpdHVkZSwgb3JpZ2luLmNvb3Jkcy5sYXRpdHVkZVxuICAgIClcblxuICAgIGlmIChkaXN0YW5jZSA8PSBtYXhEaXN0YW5jZSkge1xuICAgICAgYWNjZXNzR3JhbnRlZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY2Vzc0RlbmllZCgpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWNjZXNzR3JhbnRlZCA9ICgpID0+IHtcbiAgICBzaG93U3RlcCgnYWNjZXNzLWdyYW50ZWQnKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgJCgnI2dlb2ZlbmNpbmcnKS5yZW1vdmUoKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBjb25zdCBhY2Nlc3NEZW5pZWQgPSAoKSA9PiB7XG4gICAgc2hvd1N0ZXAoJ2FjY2Vzcy1kZW5pZWQnKVxuICB9XG5cbiAgY29uc3QgdW5rbm93bkxvY2F0aW9uID0gKCkgPT4ge1xuICAgIHNob3dTdGVwKCd1bmtub3duLWxvY2F0aW9uJylcbiAgfVxuXG4gIGNvbnN0IGRlY2xpbmVkID0gKCkgPT4ge1xuICAgIHNob3dTdGVwKCdnZW9mZW5jaW5nLWRlY2xpbmVkJylcbiAgfVxuXG4gIGxldCBvcmlnaW4gPSBudWxsXG4gIGxldCBtYXhEaXN0YW5jZSA9IG51bGxcblxuICAkKCgpID0+IHtcbiAgICBjb25zdCBjb29yZHMgPSAkKCcjZ2VvZmVuY2luZycpLmRhdGEoJ29yaWdpbicpLnNwbGl0KCcsJylcbiAgICBvcmlnaW4gPSB7XG4gICAgICBjb29yZHM6IHtcbiAgICAgICAgbGF0aXR1ZGU6IGNvb3Jkc1swXSxcbiAgICAgICAgbG9uZ2l0dWRlOiBjb29yZHNbMV0sXG4gICAgICB9XG4gICAgfVxuICAgIG1heERpc3RhbmNlID0gcGFyc2VGbG9hdCgkKCcjZ2VvZmVuY2luZycpLmRhdGEoJ21heERpc3RhbmNlJykpXG5cbiAgICBzaG93U3RlcCgnbWVzc2FnZScpXG4gICAgJCgnI2dlb2ZlbmNpbmctYWNjZXB0Jykub24oJ2NsaWNrJywgZ2V0TG9jYXRpb24pXG4gICAgJCgnI2dlb2ZlbmNpbmctZGVjbGluZScpLm9uKCdjbGljaycsIGRlY2xpbmVkKVxuICAgIC8vICQoJyNnZW9mZW5jaW5nLWRlY2xpbmUnKS5vbignY2xpY2snLCBnZXRMb2NhdGlvbilcblxuICB9KVxuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMzg0MTA0N1xuICBmdW5jdGlvbiBnZXREaXN0YW5jZShsb24xLCBsYXQxLCBsb24yLCBsYXQyKSB7XG4gICAgdmFyIFIgPSA2MzcxOyAvLyBSYWRpdXMgb2YgdGhlIGVhcnRoIGluIGttXG4gICAgdmFyIGRMYXQgPSB0b1JhZChsYXQyLWxhdDEpOyAgLy8gSmF2YXNjcmlwdCBmdW5jdGlvbnMgaW4gcmFkaWFuc1xuICAgIHZhciBkTG9uID0gdG9SYWQobG9uMi1sb24xKTtcbiAgICB2YXIgYSA9IE1hdGguc2luKGRMYXQvMikgKiBNYXRoLnNpbihkTGF0LzIpICtcbiAgICAgICAgTWF0aC5jb3ModG9SYWQobGF0MSkpICogTWF0aC5jb3ModG9SYWQobGF0MikpICpcbiAgICAgICAgTWF0aC5zaW4oZExvbi8yKSAqIE1hdGguc2luKGRMb24vMik7XG4gICAgdmFyIGMgPSAyICogTWF0aC5hdGFuMihNYXRoLnNxcnQoYSksIE1hdGguc3FydCgxLWEpKTtcbiAgICB2YXIgZCA9IFIgKiBjOyAvLyBEaXN0YW5jZSBpbiBrbVxuICAgIHJldHVybiAxMDAwKmQ7XG4gIH1cblxuICBmdW5jdGlvbiB0b1JhZChudW1iZXIpIHtcbiAgICByZXR1cm4gbnVtYmVyICogTWF0aC5QSSAvIDE4MDtcbiAgfVxuXG4gIC8vIC8qKiBDb252ZXJ0cyBudW1lcmljIGRlZ3JlZXMgdG8gcmFkaWFucyAqL1xuICAvLyBpZiAodHlwZW9mKE51bWJlci5wcm90b3R5cGUudG9SYWQpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8vICAgTnVtYmVyLnByb3RvdHlwZS50b1JhZCA9IGZ1bmN0aW9uKCkge1xuICAvLyAgICAgcmV0dXJuIHRoaXMgKiBNYXRoLlBJIC8gMTgwO1xuICAvLyAgIH1cbiAgLy8gfVxufShqUXVlcnkpKVxuXG4vLyAndXNlIHN0cmljdCc7XG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG4vLyBjb25zdCBlID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcblxuLy8gY2xhc3MgTGlrZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgc3VwZXIocHJvcHMpO1xuLy8gICAgIHRoaXMuc3RhdGUgPSB7IGxpa2VkOiBmYWxzZSB9O1xuLy8gICB9XG5cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIGlmICh0aGlzLnN0YXRlLmxpa2VkKSB7XG4vLyAgICAgICByZXR1cm4gJ1lvdSBsaWtlZCB0aGlzLidcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gPGZpZWxkc2V0PlxuLy8gICAgICAgPGxlZ2VuZD57dGhpcy5wcm9wcy50aXRsZX08L2xlZ2VuZD5cbi8vICAgICAgIHtlKFxuLy8gICAgICAgICAnYnV0dG9uJyxcbi8vICAgICAgICAgeyBvbkNsaWNrOiAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbGlrZWQ6IHRydWUgfSkgfSxcbi8vICAgICAgICAgJ0xpa2UnXG4vLyAgICAgICApfVxuLy8gICAgIDwvZmllbGRzZXQ+XG4vLyAgIH1cbi8vIH1cblxuLy8gLy8gaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XG4vLyAvLyAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4vLyAvLyAgICAgKHBvc2l0aW9uKSA9PiB7XG4vLyAvLyAgICAgICA7OzsgY29uc29sZS5sb2cocG9zaXRpb24pXG4vLyAvLyAgICAgfSxcbi8vIC8vICAgICAoZXJyb3IpID0+IHtcbi8vIC8vICAgICAgIDs7OyBjb25zb2xlLmxvZyhlcnJvcilcbi8vIC8vICAgICB9LFxuLy8gLy8gICApXG4vLyAvLyB9XG5cbi8vIGNvbnN0IGRvbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKVxuLy8gUmVhY3RET00ucmVuZGVyKGUoTGlrZUJ1dHRvbiwge3RpdGxlOiAnV2UgbmVlZCB5b3VyIGxvY2F0aW9uLid9KSwgZG9tQ29udGFpbmVyKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==