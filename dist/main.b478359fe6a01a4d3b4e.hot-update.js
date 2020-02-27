webpackHotUpdate("main",{

/***/ "./src/components/Calendar/Header.js":
/*!*******************************************!*\
  !*** ./src/components/Calendar/Header.js ***!
  \*******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Header(props) {\n  var month = props.month,\n      year = props.year,\n      changeDate = props.changeDate;\n\n  var convertMonthToString = function convertMonthToString(num) {\n    var months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    return months[month];\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"calendar-backward\",\n    onClick: changeDate.bind(null, month - 1, year)\n  }, \"back\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"calendar-center\"\n  }, \" \", \"\".concat(convertMonthToString(month), \" \").concat(year), \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    className: \"calendar-forward\",\n    onClick: changeDate.bind(null, month + 1, year)\n  }, \"forward\"));\n}\n\n//# sourceURL=webpack:///./src/components/Calendar/Header.js?");

/***/ })

})