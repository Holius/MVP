webpackHotUpdate("main",{

/***/ "./src/components/Picture.js":
/*!***********************************!*\
  !*** ./src/components/Picture.js ***!
  \***********************************/
/*! exports provided: Picture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Picture\", function() { return Picture; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Favorite */ \"./src/components/Favorite.js\");\n\n\nfunction Picture(props) {\n  var apod = props.apod,\n      getFavorite = props.getFavorite,\n      favorites = props.favorites;\n\n  if (apod === null) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading\");\n  }\n\n  var url = apod.url; //   const url = apod.hdurl !== undefined ? apod.hdurl : apod.url;\n\n  var type = apod.media_type;\n  var title = apod.title;\n  var explanation = apod.explanation;\n  var date = apod.date;\n\n  if (type === \"image\") {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", {\n      className: \"apod\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figcaption\", {\n      className: \"title\"\n    }, \"\".concat(date, \": \").concat(title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"pictureFrame\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: url\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Favorite__WEBPACK_IMPORTED_MODULE_1__[\"Favorite\"], {\n      current: date,\n      getFavorite: getFavorite,\n      favorites: favorites,\n      title: title\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, explanation));\n  } else {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", {\n      className: \"apod\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figcaption\", {\n      className: \"title\"\n    }, \"\".concat(date, \": \").concat(title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"iframe\", {\n      src: apod.url\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, explanation));\n  }\n} // {\n// date: \"2020-02-22\", explanation: \"A mere 11 million light-years away, Centaurus A is…ay, and gamma-ray energy radiated by Centaurus A.\", hdurl: \"https://apod.nasa.gov/apod/image/2002/CenA_hst.jpg\", media_type: \"image\", service_version: \"v1\", …}\n// date: \"2020-02-22\"\n// explanation: \"A mere 11 million light-years away, Centaurus A is the closest active galaxy to planet Earth. Also known as NGC 5128, the peculiar elliptical galaxy is over 60,000 light-years across. A region spanning about 8,500 light-years, including the galaxy's center (upper left), is framed in this sharp Hubble Space telescope close-up. Centaurus A is apparently the result of a collision of two otherwise normal galaxies resulting in a violent jumble of star forming regions, massive star clusters, and imposing dark dust lanes. Near the galaxy's center, left over cosmic debris is steadily being consumed by a central black hole with a billion times the mass of the Sun. As in other active galaxies, that process likely generates the radio, X-ray, and gamma-ray energy radiated by Centaurus A.\"\n// hdurl: \"https://apod.nasa.gov/apod/image/2002/CenA_hst.jpg\"\n// media_type: \"image\"\n// service_version: \"v1\"\n// title: \"Central Centaurus A\"\n// url: \"https://apod.nasa.gov/apod/image/2002/CenA_hst1000.jpg\"\n// }\n\n//# sourceURL=webpack:///./src/components/Picture.js?");

/***/ })

})