webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Calendar/Calendar */ \"./src/components/Calendar/Calendar.js\");\n/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picture */ \"./src/components/Picture.js\");\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SignIn */ \"./src/components/SignIn.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comment */ \"./src/components/Comment.js\");\n\n\n\n\n\n\n\n\n\nfunction App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      apod = _useState2[0],\n      setApod = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(new Date()),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),\n      current = _useState4[0],\n      setCurrent = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),\n      allComments = _useState6[0],\n      setAllComments = _useState6[1];\n\n  var convertDateToQuery = function convertDateToQuery(date) {\n    var year = \"\".concat(date.getFullYear()),\n        month = date.getMonth(),\n        day = date.getDate();\n    month++;\n    month = month < 10 ? \"0\".concat(month) : \"\".concat(month);\n    day = day < 10 ? \"0\".concat(day) : \"\".concat(day);\n    return \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n  };\n\n  var getCurrentComments = function getCurrentComments() {\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"/comment\", {\n      params: {\n        date: convertDateToQuery(current)\n      }\n    }).then(function (response) {\n      console.log(response.data);\n      setAllComments(response.data);\n    }).catch(function (error) {\n      console.log(error);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var getAPOD =\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default()(\"https://api.nasa.gov/planetary/apod?api_key=\".concat(\"gcGtPWGIqOqmyEHPUpOozxDK9yyAzvliq9rhKiUh\", \"&date=\").concat(convertDateToQuery(current)));\n\n              case 2:\n                result = _context.sent;\n                _context.next = 5;\n                return setApod(result.data);\n\n              case 5:\n                console.log(result.data);\n                _context.next = 8;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(\"/apod\", {\n                  date: result.data.date,\n                  url: result.data.url,\n                  description: result.data.explanation,\n                  title: result.data.title,\n                  type: result.data.media_type\n                }).then(function (response) {\n                  console.log(\"inserted\");\n                }).catch(function (error) {\n                  getCurrentComments();\n                  console.log(\"no go\");\n                });\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getAPOD() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getAPOD();\n  }, [current]);\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SignIn__WEBPACK_IMPORTED_MODULE_7__[\"SignIn\"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Picture__WEBPACK_IMPORTED_MODULE_6__[\"Picture\"], {\n    apod: apod\n  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_5__[\"Calendar\"], {\n    setCurrent: setCurrent\n  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_8__[\"Comment\"], {\n    current: current,\n    convertDateToQuery: convertDateToQuery,\n    getCurrentComments: getCurrentComments,\n    allComments: allComments\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ })

})