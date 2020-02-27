webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calendar/Calendar */ \"./src/components/Calendar/Calendar.js\");\n/* harmony import */ var _Picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Picture */ \"./src/components/Picture.js\");\n/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignIn */ \"./src/components/SignIn.js\");\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Comment */ \"./src/components/Comment.js\");\n/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Favorite */ \"./src/components/Favorite.js\");\n/* harmony import */ var _DisplayFavorite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DisplayFavorite */ \"./src/components/DisplayFavorite.js\");\n\n\n\n\n\n\n\n\n\nfunction App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      apod = _useState2[0],\n      setApod = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Date()),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      current = _useState4[0],\n      setCurrent = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      allComments = _useState6[0],\n      setAllComments = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      favorites = _useState8[0],\n      setFavorites = _useState8[1];\n\n  var convertDateToQuery = function convertDateToQuery(date) {\n    var year = \"\".concat(date.getFullYear()),\n        month = date.getMonth(),\n        day = date.getDate();\n    month++;\n    month = month < 10 ? \"0\".concat(month) : \"\".concat(month);\n    day = day < 10 ? \"0\".concat(day) : \"\".concat(day);\n    return \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n  };\n\n  var getCurrentComments = function getCurrentComments() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/comment\", {\n      params: {\n        date: convertDateToQuery(current)\n      }\n    }).then(function (response) {\n      console.log(response.data);\n      setAllComments(response.data);\n    }).catch(function (error) {\n      console.log(error);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var getAPOD = function getAPOD() {\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/apod\", {\n        params: {\n          date: convertDateToQuery(current)\n        }\n      }).then(function (response) {\n        console.log(response.data, \"hello\");\n        setApod(response.data[0]);\n        getCurrentComments();\n      }).catch(function (error) {\n        axios__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api.nasa.gov/planetary/apod?api_key=\".concat(\"gcGtPWGIqOqmyEHPUpOozxDK9yyAzvliq9rhKiUh\", \"&date=\").concat(convertDateToQuery(current))).then(function (response) {\n          console.log(response.data);\n          setApod(response.data);\n          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"/apod\", {\n            date: response.data.date,\n            url: response.data.url,\n            explanation: response.data.explanation,\n            title: response.data.title,\n            type: response.data.media_type\n          }).then(function (response) {\n            console.log(\"inserted\");\n            getCurrentComments();\n          }).catch(function (error) {\n            console.log(\"no go\");\n            getCurrentComments();\n          });\n        }).catch(function (error) {\n          console.log(error);\n        });\n      });\n    };\n\n    getAPOD();\n  }, [current]);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SignIn__WEBPACK_IMPORTED_MODULE_5__[\"SignIn\"], {\n    setFavorites: setFavorites\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Picture__WEBPACK_IMPORTED_MODULE_4__[\"Picture\"], {\n    apod: apod\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_3__[\"Calendar\"], {\n    setCurrent: setCurrent\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_6__[\"Comment\"], {\n    current: current,\n    convertDateToQuery: convertDateToQuery,\n    getCurrentComments: getCurrentComments,\n    allComments: allComments\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Favorite__WEBPACK_IMPORTED_MODULE_7__[\"Favorite\"], {\n    current: convertDatetoQuery(current),\n    title: apod.title\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DisplayFavorite__WEBPACK_IMPORTED_MODULE_8__[\"DisplayFavorite\"], {\n    favorites: favorites\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ })

})