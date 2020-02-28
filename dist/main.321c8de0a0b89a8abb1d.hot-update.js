webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Calendar_Calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Calendar/Calendar */ \"./src/components/Calendar/Calendar.js\");\n\n\n\n\n\n\n\nfunction App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),\n      apod = _useState2[0],\n      setApod = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(new Date()),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),\n      current = _useState4[0],\n      setCurrent = _useState4[1];\n\n  var convertDateToQuery = function convertDateToQuery(date) {\n    console.log(\"here\", _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(date), date);\n    console.log(date.getFullYear());\n    var year = \"\".concat(date.getFullYear()),\n        month = date.getMonth(),\n        day = date.getDate();\n    month++;\n    month = month < 10 ? \"0\".concat(month) : \"\".concat(month);\n    day = day < 10 ? \"0\".concat(day) : \"\".concat(day);\n    return \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var getAPOD =\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_5___default()(\"https://api.nasa.gov/planetary/apod?api_key=\".concat(\"gcGtPWGIqOqmyEHPUpOozxDK9yyAzvliq9rhKiUh\", \"&date=\").concat(convertDateToQuery(current)));\n\n              case 2:\n                result = _context.sent;\n                setApod(result.data);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getAPOD() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getAPOD();\n  }, [current]);\n  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Picture, {\n    apod: apod\n  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_6__[\"Calendar\"], {\n    setCurrent: setCurrent\n  }));\n} // {\n// date: \"2020-02-22\", explanation: \"A mere 11 million light-years away, Centaurus A is…ay, and gamma-ray energy radiated by Centaurus A.\", hdurl: \"https://apod.nasa.gov/apod/image/2002/CenA_hst.jpg\", media_type: \"image\", service_version: \"v1\", …}\n// date: \"2020-02-22\"\n// explanation: \"A mere 11 million light-years away, Centaurus A is the closest active galaxy to planet Earth. Also known as NGC 5128, the peculiar elliptical galaxy is over 60,000 light-years across. A region spanning about 8,500 light-years, including the galaxy's center (upper left), is framed in this sharp Hubble Space telescope close-up. Centaurus A is apparently the result of a collision of two otherwise normal galaxies resulting in a violent jumble of star forming regions, massive star clusters, and imposing dark dust lanes. Near the galaxy's center, left over cosmic debris is steadily being consumed by a central black hole with a billion times the mass of the Sun. As in other active galaxies, that process likely generates the radio, X-ray, and gamma-ray energy radiated by Centaurus A.\"\n// hdurl: \"https://apod.nasa.gov/apod/image/2002/CenA_hst.jpg\"\n// media_type: \"image\"\n// service_version: \"v1\"\n// title: \"Central Centaurus A\"\n// url: \"https://apod.nasa.gov/apod/image/2002/CenA_hst1000.jpg\"\n// }\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ })

})