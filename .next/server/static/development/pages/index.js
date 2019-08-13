module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/fran/Desktop/my-site/pages/index.js";



class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      className: "jsx-3287767515",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "ACME")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3287767515" + " " + "splash",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "107",
      height: "139",
      fill: "none",
      className: "jsx-3287767515",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
      width: "80",
      height: "80",
      x: "13",
      fill: "#000",
      rx: "40",
      className: "jsx-3287767515",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      fill: "#fff",
      "fill-rule": "evenodd",
      d: "M56.1516 27.8788l-3.4546-6.0606-17.2727 30.303h6.8283l13.899-24.2424zm4.3561 7.6425l-3.4548 6.1539 2.5064 4.3971h-4.9749l-3.3959 6.0489h18.7812l-9.462-16.5999z",
      "clip-rule": "evenodd",
      className: "jsx-3287767515",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      fill: "#fff",
      d: "M7.4375 132.656H3.32812L2.54688 135H.0546875L4.28906 123.625h2.17188L10.7188 135H8.22656l-.78906-2.344zm-3.47656-1.898h2.84375L5.375 126.5l-1.41406 4.258zm37.37816.453c-.0886 1.224-.5417 2.187-1.3594 2.891-.8125.703-1.8854 1.054-3.2188 1.054-1.4583 0-2.6067-.489-3.4453-1.468-.8333-.985-1.25-2.334-1.25-4.047v-.696c0-1.093.1927-2.057.5781-2.89.3855-.834.9349-1.472 1.6485-1.914.7187-.448 1.5521-.672 2.5-.672 1.3125 0 2.3698.351 3.1719 1.054.802.704 1.2656 1.691 1.3906 2.961h-2.3438c-.0573-.734-.263-1.265-.6172-1.593-.3489-.334-.8828-.5-1.6015-.5-.7813 0-1.3672.281-1.7578.843-.3854.558-.5834 1.425-.5938 2.602v.859c0 1.229.1849 2.128.5547 2.696.375.567.9636.851 1.7656.851.724 0 1.2631-.164 1.6172-.492.3594-.333.5651-.846.6172-1.539h2.3438zm25.4015-7.586l2.9219 8.25 2.9062-8.25h3.0782V135h-2.3516v-3.109l.2344-5.368L70.4594 135H68.85l-3.0625-8.469.2344 5.36V135h-2.3438v-11.375h3.0625zm38.5964 6.445h-4.5v3.047h5.282V135h-7.6253v-11.375h7.6093v1.898h-5.266v2.711h4.5v1.836z",
      className: "jsx-3287767515",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3287767515",
      __self: this
    }, "html{margin:0;}body{background-color:#222228;color:#fff;}.splash.jsx-3287767515{opacity:0;-webkit-animation:fadeIn-jsx-3287767515 2s ease-in-out forwards;animation:fadeIn-jsx-3287767515 2s ease-in-out forwards;}.splash.jsx-3287767515{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;}@-webkit-keyframes fadeIn-jsx-3287767515{to{opacity:1;}}@keyframes fadeIn-jsx-3287767515{to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcmFuL0Rlc2t0b3AvbXktc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm9CLEFBR3NCLEFBR2dCLEFBS2YsQUFLUSxBQVNOLFNBckJkLENBUTJDLEFBY3pDLFFBVFMsT0FWRSxFQVdILFFBQ3dCLENBWGxDLDhGQUtBLFVBT29CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvZnJhbi9EZXNrdG9wL215LXNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5BQ01FPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGFzaFwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDdcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTM5XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjgwXCIgaGVpZ2h0PVwiODBcIiB4PVwiMTNcIiBmaWxsPVwiIzAwMFwiIHJ4PVwiNDBcIiAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk01Ni4xNTE2IDI3Ljg3ODhsLTMuNDU0Ni02LjA2MDYtMTcuMjcyNyAzMC4zMDNoNi44MjgzbDEzLjg5OS0yNC4yNDI0em00LjM1NjEgNy42NDI1bC0zLjQ1NDggNi4xNTM5IDIuNTA2NCA0LjM5NzFoLTQuOTc0OWwtMy4zOTU5IDYuMDQ4OWgxOC43ODEybC05LjQ2Mi0xNi41OTk5elwiXG4gICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgICAgZD1cIk03LjQzNzUgMTMyLjY1NkgzLjMyODEyTDIuNTQ2ODggMTM1SC4wNTQ2ODc1TDQuMjg5MDYgMTIzLjYyNWgyLjE3MTg4TDEwLjcxODggMTM1SDguMjI2NTZsLS43ODkwNi0yLjM0NHptLTMuNDc2NTYtMS44OThoMi44NDM3NUw1LjM3NSAxMjYuNWwtMS40MTQwNiA0LjI1OHptMzcuMzc4MTYuNDUzYy0uMDg4NiAxLjIyNC0uNTQxNyAyLjE4Ny0xLjM1OTQgMi44OTEtLjgxMjUuNzAzLTEuODg1NCAxLjA1NC0zLjIxODggMS4wNTQtMS40NTgzIDAtMi42MDY3LS40ODktMy40NDUzLTEuNDY4LS44MzMzLS45ODUtMS4yNS0yLjMzNC0xLjI1LTQuMDQ3di0uNjk2YzAtMS4wOTMuMTkyNy0yLjA1Ny41NzgxLTIuODkuMzg1NS0uODM0LjkzNDktMS40NzIgMS42NDg1LTEuOTE0LjcxODctLjQ0OCAxLjU1MjEtLjY3MiAyLjUtLjY3MiAxLjMxMjUgMCAyLjM2OTguMzUxIDMuMTcxOSAxLjA1NC44MDIuNzA0IDEuMjY1NiAxLjY5MSAxLjM5MDYgMi45NjFoLTIuMzQzOGMtLjA1NzMtLjczNC0uMjYzLTEuMjY1LS42MTcyLTEuNTkzLS4zNDg5LS4zMzQtLjg4MjgtLjUtMS42MDE1LS41LS43ODEzIDAtMS4zNjcyLjI4MS0xLjc1NzguODQzLS4zODU0LjU1OC0uNTgzNCAxLjQyNS0uNTkzOCAyLjYwMnYuODU5YzAgMS4yMjkuMTg0OSAyLjEyOC41NTQ3IDIuNjk2LjM3NS41NjcuOTYzNi44NTEgMS43NjU2Ljg1MS43MjQgMCAxLjI2MzEtLjE2NCAxLjYxNzItLjQ5Mi4zNTk0LS4zMzMuNTY1MS0uODQ2LjYxNzItMS41MzloMi4zNDM4em0yNS40MDE1LTcuNTg2bDIuOTIxOSA4LjI1IDIuOTA2Mi04LjI1aDMuMDc4MlYxMzVoLTIuMzUxNnYtMy4xMDlsLjIzNDQtNS4zNjhMNzAuNDU5NCAxMzVINjguODVsLTMuMDYyNS04LjQ2OS4yMzQ0IDUuMzZWMTM1aC0yLjM0Mzh2LTExLjM3NWgzLjA2MjV6bTM4LjU5NjQgNi40NDVoLTQuNXYzLjA0N2g1LjI4MlYxMzVoLTcuNjI1M3YtMTEuMzc1aDcuNjA5M3YxLjg5OGgtNS4yNjZ2Mi43MTFoNC41djEuODM2elwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIDpnbG9iYWwoaHRtbCkge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Z2xvYmFsKGJvZHkpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3BsYXNoIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAycyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3BsYXNoIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/fran/Desktop/my-site/pages/index.js */"));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fran/Desktop/my-site/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map