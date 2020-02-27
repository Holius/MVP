webpackHotUpdate("main",{

/***/ "./src/components/SignIn.js":
/*!**********************************!*\
  !*** ./src/components/SignIn.js ***!
  \**********************************/
/*! exports provided: SignIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignIn\", function() { return SignIn; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SignIn(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"username\",\n    name: \"username\",\n    required: true,\n    onChange: function onChange(event) {\n      setUser(event.target.value);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"password\",\n    id: \"passsword\",\n    name: \"password\",\n    required: true,\n    onChange: function onChange(event) {\n      setPassword(event.target.value);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Log In\",\n    onClick: function onClick() {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/user/login\", {\n        name: user,\n        password: password\n      }).then(function (data) {\n        console.log(\"logged in\", data);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Sign Up\",\n    onClick: function onClick() {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/user/signup\", {\n        name: user,\n        password: password\n      }).then(function (data) {\n        console.log(\"logged in\", data);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Log Out\",\n    onClick: function onClick() {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/user/logout\").then(function (data) {\n        console.log(\"logged out\", data);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Apples\",\n    onClick: function onClick() {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/apples\").then(function (data) {\n        console.log(\"Apples\", data);\n      }).catch(function (error) {\n        console.log(error);\n      });\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/SignIn.js?");

/***/ })

})