webpackHotUpdate("main",{

/***/ "./src/components/Favorite.js":
/*!************************************!*\
  !*** ./src/components/Favorite.js ***!
  \************************************/
/*! exports provided: Favorite */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\src\\\\components\\\\Favorite.js: Unexpected token (7:2)\\n\\n\\u001b[0m \\u001b[90m  5 | \\u001b[39m  \\u001b[36mconst\\u001b[39m { current\\u001b[33m,\\u001b[39m title\\u001b[33m,\\u001b[39m getFavorite\\u001b[33m,\\u001b[39m favorites\\u001b[33m,\\u001b[39m convertDateToQuery } \\u001b[33m=\\u001b[39m props\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m  \\u001b[36mconst\\u001b[39m \\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  7 | \\u001b[39m  \\u001b[36mconst\\u001b[39m postFavorite \\u001b[33m=\\u001b[39m (date\\u001b[33m,\\u001b[39m title) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m    let bool \\u001b[33m=\\u001b[39m \\u001b[36mtrue\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m    \\u001b[36mfor\\u001b[39m (let i \\u001b[33m=\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m;\\u001b[39m i \\u001b[33m<\\u001b[39m favorites\\u001b[33m.\\u001b[39mlength\\u001b[33m;\\u001b[39m i\\u001b[33m++\\u001b[39m) {\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m      \\u001b[36mif\\u001b[39m (favorites[i]\\u001b[33m.\\u001b[39mtitle \\u001b[33m===\\u001b[39m title) bool \\u001b[33m=\\u001b[39m \\u001b[36mfalse\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Object.raise (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3831:17)\\n    at Object.unexpected (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5143:16)\\n    at Object.parseBindingAtom (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5405:20)\\n    at Object.parseVarId (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7905:20)\\n    at Object.parseVar (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7877:12)\\n    at Object.parseVarStatement (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7714:10)\\n    at Object.parseStatementContent (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7310:21)\\n    at Object.parseStatement (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7810:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7797:10)\\n    at Object.parseBlock (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7786:10)\\n    at Object.parseFunctionBody (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6876:24)\\n    at Object.parseFunctionBodyAndFinish (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6860:10)\\n    at C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7945:12\\n    at Object.withTopicForbiddingContext (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7150:14)\\n    at Object.parseFunction (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7944:10)\\n    at Object.parseFunctionStatement (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7596:17)\\n    at Object.parseStatementContent (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7278:31)\\n    at Object.parseStatement (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Object.parseExportDeclaration (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8412:17)\\n    at Object.maybeParseExportDeclaration (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8361:31)\\n    at Object.parseExport (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8290:29)\\n    at Object.parseStatementContent (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7347:27)\\n    at Object.parseStatement (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7243:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7810:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7797:10)\\n    at Object.parseTopLevel (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7181:10)\\n    at Object.parse (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8660:17)\\n    at parse (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10660:38)\\n    at parser (C:\\\\Users\\\\justi\\\\code\\\\MVP\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\");\n\n//# sourceURL=webpack:///./src/components/Favorite.js?");

/***/ })

})