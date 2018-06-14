webpackHotUpdate(5,{

/***/ "./pages/work.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_MyLayout__ = __webpack_require__("./components/MyLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WorkHero__ = __webpack_require__("./components/WorkHero.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ContentMultiColumn__ = __webpack_require__("./components/ContentMultiColumn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ContentLargeFeature__ = __webpack_require__("./components/ContentLargeFeature.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ContentMediumFeature__ = __webpack_require__("./components/ContentMediumFeature.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ContentMediumFeature_rev__ = __webpack_require__("./components/ContentMediumFeature-rev.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_MultiColumnItem__ = __webpack_require__("./components/MultiColumnItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ContentText__ = __webpack_require__("./components/ContentText.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Pieces__ = __webpack_require__("./components/Pieces.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_NavPieces__ = __webpack_require__("./components/NavPieces.js");
var _jsxFileName = "/Users/ajcook4/Sites/portfolio-v1.0/ajc-portfolio/pages/work.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var Work =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Work, _React$Component);

  function Work(props) {
    var _this;

    _classCallCheck(this, Work);

    _this = _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this, props));
    _this.state = {
      "Piece": []
    };
    _this.state = {
      "Sections": []
    };
    _this.state = {
      "PieceID": Number()
    };
    _this.placeComponent = _this.placeComponent.bind(_assertThisInitialized(_this));
    _this.state = {
      "Screen": ""
    };
    return _this;
  }

  _createClass(Work, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.props.url.query.id - 1;
      var piece = Object.keys(__WEBPACK_IMPORTED_MODULE_9__components_Pieces__["a" /* default */]).map(function (key) {
        Number(key) === id ? _this2.setState({
          Piece: __WEBPACK_IMPORTED_MODULE_9__components_Pieces__["a" /* default */][key]
        }) : '';
      });
      this.setState({
        PieceID: Number(this.props.url.query.id)
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.innerWidth > 600) {
        this.setState({
          Screen: "large"
        });
      } else {
        this.setState({
          Screen: "small"
        });
      }
    }
  }, {
    key: "placeComponent",
    value: function placeComponent(sectionTag, key) {
      switch (sectionTag) {
        case 'columns':
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_ContentMultiColumn__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_MultiColumnItem__["a" /* default */], {
            img: this.state.Piece.details.sections[key].img1,
            caption: this.state.Piece.details.sections[key].caption1,
            copy: this.state.Piece.details.sections[key].copy1,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_MultiColumnItem__["a" /* default */], {
            img: this.state.Piece.details.sections[key].img2,
            caption: this.state.Piece.details.sections[key].caption2,
            copy: this.state.Piece.details.sections[key].copy2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_MultiColumnItem__["a" /* default */], {
            img: this.state.Piece.details.sections[key].img3,
            caption: this.state.Piece.details.sections[key].caption3,
            copy: this.state.Piece.details.sections[key].copy3,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }));

        case 'large':
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_ContentLargeFeature__["a" /* default */], {
            hero: this.state.Piece.details.sections[key].img,
            size: this.state.Screen,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }, this.state.Piece.details.sections[key].p);

        case 'medium':
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ContentMediumFeature__["a" /* default */], {
            hero: this.state.Piece.details.sections[key].img,
            size: this.state.Screen,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          }, this.state.Piece.details.sections[key].p);

        case 'medium-rev':
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_ContentMediumFeature_rev__["a" /* default */], {
            hero: this.state.Piece.details.sections[key].img,
            size: this.state.Screen,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }, this.state.Piece.details.sections[key].p);

        case 'text':
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_ContentText__["a" /* default */], {
            headline: this.state.Piece.details.sections[key].headline,
            copy: this.state.Piece.details.sections[key].copy,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, this.state.Piece.details.sections[key].result ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            className: "statistic",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, this.state.Piece.details.sections[key].result), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            className: "caption",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, this.state.Piece.details.sections[key].caption)) : '');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var piece = this.state.Piece;
      var section = this.state.Piece.details.sections;
      var sectionTag = '';
      var sectionId = Number();
      var sectionDetails = [];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_MyLayout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_WorkHero__["a" /* default */], {
        hero: "".concat(piece.details.hero),
        "hero-sm": "".concat(piece.details.hero - sm),
        size: this.state.Screen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, piece.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "overview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, piece.details.about))), Object.keys(piece.details.sections).map(function (key) {
        sectionTag = section[Number(key)].tag;
        sectionId = Number(key);
        return _this3.placeComponent(sectionTag, sectionId);
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "View Other Work"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_NavPieces__["a" /* default */], {
        id: this.state.PieceID,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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

  return Work;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Work;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Work, "Work", "/Users/ajcook4/Sites/portfolio-v1.0/ajc-portfolio/pages/work.js");
  reactHotLoader.register(_default, "default", "/Users/ajcook4/Sites/portfolio-v1.0/ajc-portfolio/pages/work.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/work")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.372bf47586716bb6f2d3.hot-update.js.map