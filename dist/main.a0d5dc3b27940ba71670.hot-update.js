webpackHotUpdate("main",{

/***/ "./src/components/DisplayFavorite.js":
/*!*******************************************!*\
  !*** ./src/components/DisplayFavorite.js ***!
  \*******************************************/
/*! exports provided: DisplayFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayFavorite\", function() { return DisplayFavorite; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction DisplayFavorite(props) {\n  var favorites = props.favorites;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, favorites.map(function (x, i) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: i\n    }, \" \", x.title, \" \");\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/DisplayFavorite.js?");

/***/ })

})