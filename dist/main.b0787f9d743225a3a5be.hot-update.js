webpackHotUpdate("main",{

/***/ "./src/components/Comment.js":
/*!***********************************!*\
  !*** ./src/components/Comment.js ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comment\", function() { return Comment; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Comment(props) {\n  var current = props.current;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      comment = _useState.comment,\n      setComment = _useState.setComment;\n\n  var postComment = function postComment() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(\"/user/login\", {\n      comment: comment\n    }).then(function (data) {\n      console.log(\"logged in\");\n    }).catch(function (error) {\n      console.log(error);\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    rows: \"4\",\n    cols: \"50\",\n    name: \"comment\"\n  }, \"A space to write about space.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Post\",\n    onClick: postComment\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/Comment.js?");

/***/ })

})