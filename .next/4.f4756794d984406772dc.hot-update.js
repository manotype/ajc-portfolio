webpackHotUpdate(4,{

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/ajcook4/Sites/v1.0.3/ajc-portfolio/components/Header.js: Expected corresponding JSX closing tag for <link> (14:4)\n\n  12 |       //<link rel=\"stylesheet\" href=\"https://use.typekit.net/sro1pcj.css\">\n  13 |       //<script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }} />\n> 14 |     </Head>\n     |     ^\n  15 |     <style jsx global>{`\n  16 |       @font-face { font-family: \"ajcFont\"; font-weight:500; src:url('/static/fonts/akk-reg.otf'); }\n  17 |       @font-face { font-family: \"ajcFont\"; font-weight:300; src:url('/static/fonts/akk-light.otf'); }\n    at _class.raise (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:778:15)\n    at _class.jsxParseElementAt (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:8051:18)\n    at _class.jsxParseElementAt (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElement (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:8077:19)\n    at _class.parseExprAtom (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:8084:21)\n    at _class.parseExprSubscripts (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseParenAndDistinguishExpression (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:3271:28)\n    at _class.parseExprAtom (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:3081:21)\n    at _class.parseExprAtom (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/node_modules/babylon/lib/index.js:8086:52)");

/***/ }),

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation__ = __webpack_require__("./components/Navigation.js");
var _jsxFileName = "/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/components/MyLayout.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        key: "1000000000000000000000",
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Navigation__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, "Layout", "/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/components/MyLayout.js");
  reactHotLoader.register(_default, "default", "/Users/ajcook4/Sites/v1.0.3/ajc-portfolio/components/MyLayout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
false,

/***/ "./node_modules/lodash/_ListCache.js":
false,

/***/ "./node_modules/lodash/_Map.js":
false,

/***/ "./node_modules/lodash/_MapCache.js":
false,

/***/ "./node_modules/lodash/_SetCache.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_apply.js":
false,

/***/ "./node_modules/lodash/_arrayIncludes.js":
false,

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
false,

/***/ "./node_modules/lodash/_arrayMap.js":
false,

/***/ "./node_modules/lodash/_asciiToArray.js":
false,

/***/ "./node_modules/lodash/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseFindIndex.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_baseIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseIntersection.js":
false,

/***/ "./node_modules/lodash/_baseIsNaN.js":
false,

/***/ "./node_modules/lodash/_baseIsNative.js":
false,

/***/ "./node_modules/lodash/_baseIsRegExp.js":
false,

/***/ "./node_modules/lodash/_baseRest.js":
false,

/***/ "./node_modules/lodash/_baseSetToString.js":
false,

/***/ "./node_modules/lodash/_baseSlice.js":
false,

/***/ "./node_modules/lodash/_baseToString.js":
false,

/***/ "./node_modules/lodash/_baseUnary.js":
false,

/***/ "./node_modules/lodash/_cacheHas.js":
false,

/***/ "./node_modules/lodash/_castArrayLikeObject.js":
false,

/***/ "./node_modules/lodash/_castSlice.js":
false,

/***/ "./node_modules/lodash/_coreJsData.js":
false,

/***/ "./node_modules/lodash/_defineProperty.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getMapData.js":
false,

/***/ "./node_modules/lodash/_getNative.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_getValue.js":
false,

/***/ "./node_modules/lodash/_hasUnicode.js":
false,

/***/ "./node_modules/lodash/_hashClear.js":
false,

/***/ "./node_modules/lodash/_hashDelete.js":
false,

/***/ "./node_modules/lodash/_hashGet.js":
false,

/***/ "./node_modules/lodash/_hashHas.js":
false,

/***/ "./node_modules/lodash/_hashSet.js":
false,

/***/ "./node_modules/lodash/_isIndex.js":
false,

/***/ "./node_modules/lodash/_isIterateeCall.js":
false,

/***/ "./node_modules/lodash/_isKeyable.js":
false,

/***/ "./node_modules/lodash/_isMasked.js":
false,

/***/ "./node_modules/lodash/_listCacheClear.js":
false,

/***/ "./node_modules/lodash/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash/_listCacheGet.js":
false,

/***/ "./node_modules/lodash/_listCacheHas.js":
false,

/***/ "./node_modules/lodash/_listCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash/_nativeCreate.js":
false,

/***/ "./node_modules/lodash/_nodeUtil.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_overRest.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/_setCacheAdd.js":
false,

/***/ "./node_modules/lodash/_setCacheHas.js":
false,

/***/ "./node_modules/lodash/_setToString.js":
false,

/***/ "./node_modules/lodash/_shortOut.js":
false,

/***/ "./node_modules/lodash/_strictIndexOf.js":
false,

/***/ "./node_modules/lodash/_stringToArray.js":
false,

/***/ "./node_modules/lodash/_toSource.js":
false,

/***/ "./node_modules/lodash/_unicodeToArray.js":
false,

/***/ "./node_modules/lodash/constant.js":
false,

/***/ "./node_modules/lodash/eq.js":
false,

/***/ "./node_modules/lodash/identity.js":
false,

/***/ "./node_modules/lodash/intersection.js":
false,

/***/ "./node_modules/lodash/isArray.js":
false,

/***/ "./node_modules/lodash/isArrayLike.js":
false,

/***/ "./node_modules/lodash/isArrayLikeObject.js":
false,

/***/ "./node_modules/lodash/isFunction.js":
false,

/***/ "./node_modules/lodash/isLength.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isRegExp.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/split.js":
false,

/***/ "./node_modules/lodash/toString.js":
false,

/***/ "./node_modules/next/head.js":
false,

/***/ "./node_modules/react-typekit/lib/Typekit.js":
false,

/***/ "./node_modules/react-typekit/lib/utilities/buildScript.js":
false

})
//# sourceMappingURL=4.f4756794d984406772dc.hot-update.js.map