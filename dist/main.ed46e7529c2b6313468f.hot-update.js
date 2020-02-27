webpackHotUpdate("main",{

/***/ "./src/components/Calendar/Calendar.js":
/*!*********************************************!*\
  !*** ./src/components/Calendar/Calendar.js ***!
  \*********************************************/
/*! exports provided: Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calendar\", function() { return Calendar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/components/Calendar/Header.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction Calendar(props) {\n  var init = new Date();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(init),\n      _useState2 = _slicedToArray(_useState, 2),\n      date = _useState2[0],\n      setDate = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(init.getMonth()),\n      _useState4 = _slicedToArray(_useState3, 2),\n      month = _useState4[0],\n      setMonth = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(init.getFullYear()),\n      _useState6 = _slicedToArray(_useState5, 2),\n      year = _useState6[0],\n      setYear = _useState6[1]; // const [count, setCount] = useState(0);\n  //converts first day of the month as an integer into an array of days of the week\n\n\n  var getFullWeek = function getFullWeek(firstDay) {\n    firstDay--;\n    var conversion = [\"Mon\", \"Tue\", \"Wed\", \"Thur\", \"Fri\", \"Sat\", \"Sun\"];\n    var results = [];\n\n    for (var i = 0; i < 7; i++) {\n      if (firstDay === 7) firstDay = 0;\n      results.push(conversion[firstDay]);\n      firstDay++;\n    }\n\n    return results;\n  };\n\n  var getLastWeek = function getLastWeek(month, year) {\n    return 30;\n  };\n\n  var generateWeekRow = function generateWeekRow(start, end) {\n    var results = [];\n\n    for (var i = start; i < end + 1; i++) {\n      results.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        key: i\n      }, \" \", i, \" \"));\n    }\n\n    return results;\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, getFullWeek(new Date(year, month, 1).getDay()).map(function (x, i) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n      key: i\n    }, x);\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, generateWeekRow(1, 7)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, generateWeekRow(8, 14)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, generateWeekRow(15, 21)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, generateWeekRow(22, 28)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, generateWeekRow(29, getLastWeek(month, year)))));\n}\n\n//# sourceURL=webpack:///./src/components/Calendar/Calendar.js?");

/***/ })

})