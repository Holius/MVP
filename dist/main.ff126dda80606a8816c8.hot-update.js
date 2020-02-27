webpackHotUpdate("main",{

/***/ "./src/components/Comment.js":
/*!***********************************!*\
  !*** ./src/components/Comment.js ***!
  \***********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Comment\", function() { return Comment; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Comment(props) {\n  var current = props.current,\n      convertDateToQuery = props.convertDateToQuery,\n      getCurrentComments = props.getCurrentComments,\n      allComments = props.allComments;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"A space to write about space.\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      comment = _useState2[0],\n      setComment = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      page = _useState4[0],\n      setPage = _useState4[1];\n\n  var postComment = function postComment() {\n    console.log(convertDateToQuery(current));\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/comment\", {\n      comment: comment,\n      date: convertDateToQuery(current)\n    }).then(function (data) {\n      console.log(\"posted comment\");\n      getCurrentComments();\n    }).catch(function (error) {\n      console.log(error);\n    });\n  };\n\n  var loadComments = function loadComments(start) {\n    console.log(\"hello\", allComments);\n    if (start === 1) start = 0;\n    var begin = start * 5;\n    var end = begin + 5;\n    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, allComments.slice(begin, end).map(function (x, i) {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        key: i\n      }, \" \", x.comment, \" was created on \", x.created_on, \" by \", x.users_username);\n    }));\n  };\n\n  var displayPageNumbers = function displayPageNumbers(array) {\n    if (array.length < 5) return;\n    var length = array.length;\n    var pages = 0;\n\n    while (length > 0) {\n      length -= 5;\n      pages++;\n    }\n\n    var results = [];\n\n    var _loop = function _loop(i) {\n      array.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        key: i,\n        onClick: function () {\n          setPage(i);\n        }.bind(null, i)\n      }, i + 1));\n    };\n\n    for (var i = 0; i < pages; i++) {\n      _loop(i);\n    }\n\n    return results;\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"textarea\", {\n    rows: \"4\",\n    cols: \"50\",\n    name: \"comment\",\n    defaultValue: \"A space to write about space.\",\n    onChange: function onChange(event) {\n      setComment(event.target.value);\n    }\n  }), loadComments(page), displayPageNumbers(allComments), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Post\",\n    onClick: postComment\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/Comment.js?");

/***/ })

})