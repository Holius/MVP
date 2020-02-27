webpackHotUpdate("main",{

/***/ "./node_modules/react-paginate/dist/index.js":
false,

/***/ "./src/components/Comment.js":
/*!***********************************!*\
  !*** ./src/components/Comment.js ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comment\", function() { return Comment; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Comment(props) {\n  var current = props.current,\n      convertDateToQuery = props.convertDateToQuery,\n      getCurrentComments = props.getCurrentComments,\n      allComments = props.allComments;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"A space to write about space.\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      comment = _useState2[0],\n      setComment = _useState2[1];\n\n  var postComment = function postComment() {\n    console.log(convertDateToQuery(current));\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/comment\", {\n      comment: comment,\n      date: convertDateToQuery(current)\n    }).then(function (data) {\n      console.log(\"posted comment\");\n      getCurrentComments();\n    }).catch(function (error) {\n      console.log(error);\n    });\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"textarea\", {\n    rows: \"4\",\n    cols: \"50\",\n    name: \"comment\",\n    defaultValue: \"A space to write about space.\",\n    onChange: function onChange(event) {\n      setComment(event.target.value);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Post\",\n    onClick: postComment\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, allComments.map(function (x, i) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      key: i\n    }, \" \", x.comment, \" was created on \", x.created_on, \" by \", x.users_username);\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/Comment.js?");

/***/ })

})