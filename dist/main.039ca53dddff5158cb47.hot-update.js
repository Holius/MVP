webpackHotUpdate("main",{

/***/ "./src/components/Favorite.js":
/*!************************************!*\
  !*** ./src/components/Favorite.js ***!
  \************************************/
/*! exports provided: Favorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Favorite\", function() { return Favorite; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Favorite(props) {\n  var current = props.current,\n      title = props.title,\n      getFavorite = props.getFavorite,\n      favorites = props.favorites;\n\n  var postFavorite = function postFavorite(date, title) {\n    var bool = true;\n\n    for (var i = 0; i < favorites.length; i++) {\n      if (favorites[i].title === title) bool = false;\n    }\n\n    if (bool) {\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"/favorite\", {\n        title: title,\n        date: current\n      }).then(function (response) {\n        console.log(\"success\");\n        getFavorite();\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"favorite\",\n    onClick: function (date, title) {\n      postFavorite(date, title);\n    }.bind(null, current, title)\n  }, \"Favorite\");\n}\n\n//# sourceURL=webpack:///./src/components/Favorite.js?");

/***/ })

})