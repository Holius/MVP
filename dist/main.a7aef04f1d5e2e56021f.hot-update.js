webpackHotUpdate("main",{

/***/ "./.env":
/*!**************!*\
  !*** ./.env ***!
  \**************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("REACT_APP_KY =\"gcGtPWGIqOqmyEHPUpOozxDK9yyAzvliq9rhKiUh\"\r\n\n\n//# sourceURL=webpack:///./.env?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar/Calendar */ \"./src/components/Calendar/Calendar.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../.env */ \"./.env\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_env__WEBPACK_IMPORTED_MODULE_3__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n // import dotenv from \"dotenv\";\n\n\nfunction App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      apod = _useState2[0],\n      setApod = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(new Date()),\n      _useState4 = _slicedToArray(_useState3, 2),\n      current = _useState4[0],\n      setCurrent = _useState4[1]; // useEffect(() => {\n  //   const getApod = async () => {\n  //     const result = await axios();\n  //   };\n  // });\n\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, process.env.API_KEY.length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_2__[\"Calendar\"], null));\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/node-libs-browser/node_modules/process/browser.js */ \"./node_modules/node-libs-browser/node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ })

})