webpackHotUpdate("main",{

/***/ "./src/components/Calendar/Calendar.js":
/*!*********************************************!*\
  !*** ./src/components/Calendar/Calendar.js ***!
  \*********************************************/
/*! exports provided: Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Calendar\", function() { return Calendar; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Calendar/Header.js\");\n\n\n\nfunction Calendar(props) {\n  var setCurrent = props.setCurrent,\n      convertDateToQuery = props.convertDateToQuery;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Date()),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      date = _useState2[0],\n      setDate = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(date.getMonth()),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      month = _useState4[0],\n      setMonth = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(date.getFullYear()),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      year = _useState6[0],\n      setYear = _useState6[1]; //converts first day of the month as an integer into an array of days of the week\n\n\n  var getFullWeek = function getFullWeek(month, year) {\n    var firstDay = new Date(year, month, 1).getDay();\n    firstDay--;\n    var conversion = [\"Mon\", \"Tue\", \"Wed\", \"Thur\", \"Fri\", \"Sat\", \"Sun\"];\n    var results = [];\n\n    for (var i = 0; i < 7; i++) {\n      if (firstDay === 7) firstDay = 0;\n      results.push(conversion[firstDay]);\n      firstDay++;\n    }\n\n    return results.map(function (x, i) {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"th\", {\n        key: i\n      }, x);\n    });\n  };\n\n  var getLastWeek = function getLastWeek(month, year) {\n    return new Date(year, month + 1, 0).getDate();\n  };\n\n  var generateWeekRow = function generateWeekRow(start, end, month, year) {\n    var results = [];\n\n    for (var i = start; i < end + 1; i++) {\n      results.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"td\", {\n        onClick: function (day, month, year) {\n          console.log(new Date(year, month, day));\n          setCurrent(convertDateToQuery(new Date(year, month, day)));\n        }.bind(null, i, month, year),\n        key: i\n      }, i));\n    }\n\n    return results;\n  };\n\n  var changeDate = function changeDate(month, year) {\n    year = month === 12 ? year + 1 : month === -1 ? year - 1 : year;\n    month = month === 12 ? 0 : month === -1 ? 11 : month;\n    setDate(new Date(year, month));\n    setMonth(month);\n    setYear(year);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"table\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {\n    month: month,\n    year: year,\n    changeDate: changeDate\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, getFullWeek(month, year))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, generateWeekRow(1, 7)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, generateWeekRow(8, 14)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, generateWeekRow(15, 21)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, generateWeekRow(22, 28)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"tr\", null, generateWeekRow(29, getLastWeek(month, year)))));\n}\n\n//# sourceURL=webpack:///./src/components/Calendar/Calendar.js?");

/***/ })

})