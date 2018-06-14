webpackHotUpdate(4,{

/***/ "./components/WorkPreviews.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pieces__ = __webpack_require__("./components/Pieces.js");
var _jsxFileName = "/Users/ajcook4/Sites/v1.0.1/ajc-portfolio/components/WorkPreviews.js";


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





var WorkPreviews =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WorkPreviews, _React$Component);

  function WorkPreviews(props) {
    var _this;

    _classCallCheck(this, WorkPreviews);

    _this = _possibleConstructorReturn(this, (WorkPreviews.__proto__ || Object.getPrototypeOf(WorkPreviews)).call(this, props));
    _this.state = {
      "pieces": []
    };
    return _this;
  }

  _createClass(WorkPreviews, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        pieces: __WEBPACK_IMPORTED_MODULE_3__Pieces__["a" /* default */]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-746286183" + " " + "auto-height"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-746286183" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-746286183"
      }, "Featured Work"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "grid col-3 column-gutter row-gutter sm-col-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-746286183"
      }, this.state.pieces.map(function (piece, i) {
        return i < 3 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
          key: i,
          style: {
            backgroundImage: "url(".concat(piece.previewImage, ")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          className: "jsx-746286183" + " " + "light-gray grid col-3 preview-container"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          className: "jsx-746286183" + " " + "preview-info align-center"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          className: "jsx-746286183"
        }, piece.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          className: "jsx-746286183"
        }, piece.previewBlurb)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          className: "jsx-746286183" + " " + "cta align-center"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "work?id=".concat(piece.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          className: "jsx-746286183" + " " + "button gray"
        }, piece.previewCTA))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "/work?id=".concat(piece.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          className: "jsx-746286183" + " " + "secondary-feature-link"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: i,
          style: {
            backgroundImage: "url(".concat(piece.previewImage, ")"),
            backgroundPosition: "center",
            backgroundSize: "cover"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          className: "jsx-746286183" + " " + "secondary-feature grid light-gray"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          className: "jsx-746286183" + " " + "nameplate"
        }, piece.name)));
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "746286183",
        css: ".preview-container.jsx-746286183{grid-column:span 3;grid-template-rows:25% 50% 25%;background-position:center;background-size:cover;}.preview-info.jsx-746286183{background-color:#F5D123;mix-blend-mode:multiply;padding:19%;grid-row-start:2;}.preview-info.jsx-746286183 p.jsx-746286183{border-top:1px solid #4a4a4a;border-bottom:1px solid #4a4a4a;padding:.25em 0;}.cta.jsx-746286183{grid-row-start:3;padding:0 19%;}.secondary-feature.jsx-746286183{min-height:400px;}.secondary-feature-link.jsx-746286183{font-family:\"ajcFont\";font-style:normal;}.nameplate.jsx-746286183{-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;background-color:#F5D123;mix-blend-mode:multiply;-webkit-transform:translate(8px,8px);-ms-transform:translate(8px,8px);transform:translate(8px,8px);padding:.5em 1em;text-transform:uppercase;}@media screen and (max-width:1440px){.preview-container.jsx-746286183{background-position:50% 42% !important;}.preview-info.jsx-746286183{padding:12%;}}@media screen and (max-width:600px){.preview-info.jsx-746286183{grid-column:span 3;padding:25px;width:90%;mix-blend-mode:normal;}h3.jsx-746286183{margin:0;}p.jsx-746286183{margin:0 0 .5em;line-height:1.25em;}.preview-container.jsx-746286183{grid-template-rows:65% 22% 12%;background-size:200% !important;}.cta.jsx-746286183{grid-column:span 3;}.secondary-feature.jsx-746286183{margin-bottom:24px;}.container.jsx-746286183 .col-3.jsx-746286183{grid-column:1fr !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvV29ya1ByZXZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IsQUFFaUQsQUFDQyxBQUNLLEFBQ3RCLEFBQ2MsQUFDVSxBQUNwQixBQUdrQyxBQUNoQyxBQUlPLEFBQ3JCLEFBQ00sQUFDaUMsQUFDM0IsQUFDYyxBQUNPLFNBTGhDLEdBTGMsSUFNVSxDQWJILEFBQ0MsRUFKaUMsQUFjdEIsQUFJckIsQUFDYyxHQWR1QixHQUpELEVBbUJmLEVBbEI0QixFQUN2QyxBQWNnRCxDQUgzQixHQUVsQixJQVBxQixDQUpJLEVBU2UsT0FiTCxDQURzQixXQUNMLEFBQ0EsQ0FJekMsQ0FXbUMsQ0FITCxhQWRzQyxBQUUxQixDQURBLFNBS2xCLFlBTjZDLFlBTWhCLG1HQUFpQixpQkFBeUIseUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9Xb3JrUHJldmlld3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FqY29vazQvU2l0ZXMvdjEuMC4xL2FqYy1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBQaWVjZXMgZnJvbSAnLi9QaWVjZXMnXG5cblxuY2xhc3MgV29ya1ByZXZpZXdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1wicGllY2VzXCI6W119XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGllY2VzOlBpZWNlc30pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXV0by1oZWlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDI+RmVhdHVyZWQgV29yazwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgY29sLTMgY29sdW1uLWd1dHRlciByb3ctZ3V0dGVyIHNtLWNvbC0xXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5waWVjZXMubWFwKChwaWVjZSxpKSA9PiAoXG4gICAgICAgICAgICAgIChpPDMpID8gKFxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGtleT17aX0gY2xhc3NOYW1lPVwibGlnaHQtZ3JheSBncmlkIGNvbC0zIHByZXZpZXctY29udGFpbmVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke3BpZWNlLnByZXZpZXdJbWFnZX0pYCB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1pbmZvIGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3BpZWNlLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3BpZWNlLnByZXZpZXdCbHVyYn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhIGFsaWduLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gZ3JheVwiIGhyZWY9e2B3b3JrP2lkPSR7cGllY2UuaWR9YH0+e3BpZWNlLnByZXZpZXdDVEF9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWNvbmRhcnktZmVhdHVyZS1saW5rXCIgaHJlZj17YC93b3JrP2lkPSR7cGllY2UuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInNlY29uZGFyeS1mZWF0dXJlIGdyaWQgbGlnaHQtZ3JheVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTpgdXJsKCR7cGllY2UucHJldmlld0ltYWdlfSlgLCBiYWNrZ3JvdW5kUG9zaXRpb246XCJjZW50ZXJcIiAsIGJhY2tncm91bmRTaXplOlwiY292ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZXBsYXRlXCI+e3BpZWNlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucHJldmlldy1jb250YWluZXIgeyBncmlkLWNvbHVtbjpzcGFuIDM7IGdyaWQtdGVtcGxhdGUtcm93czogMjUlIDUwJSAyNSU7IGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IH1cbiAgICAgICAgICAucHJldmlldy1pbmZvIHsgYmFja2dyb3VuZC1jb2xvcjojRjVEMTIzOyBtaXgtYmxlbmQtbW9kZTptdWx0aXBseTsgcGFkZGluZzoxOSU7IGdyaWQtcm93LXN0YXJ0OjI7IH1cbiAgICAgICAgICAucHJldmlldy1pbmZvIHB7IGJvcmRlci10b3A6MXB4IHNvbGlkICM0YTRhNGE7IGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM0YTRhNGE7IHBhZGRpbmc6LjI1ZW0gMDsgfVxuICAgICAgICAgIC5jdGEgeyBncmlkLXJvdy1zdGFydDozOyBwYWRkaW5nOjAgMTklOyB9XG4gICAgICAgICAgLnNlY29uZGFyeS1mZWF0dXJlIHsgbWluLWhlaWdodDo0MDBweDsgfVxuICAgICAgICAgIC5zZWNvbmRhcnktZmVhdHVyZS1saW5rIHsgZm9udC1mYW1pbHk6XCJhamNGb250XCI7IGZvbnQtc3R5bGU6bm9ybWFsOyB9XG4gICAgICAgICAgLm5hbWVwbGF0ZSB7IGFsaWduLXNlbGY6ZW5kOyBiYWNrZ3JvdW5kLWNvbG9yOiNGNUQxMjM7IG1peC1ibGVuZC1tb2RlOm11bHRpcGx5OyB0cmFuc2Zvcm06dHJhbnNsYXRlKDhweCw4cHgpOyBwYWRkaW5nOi41ZW0gMWVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTQ0MHB4KSB7XG4gICAgICAgICAgICAucHJldmlldy1jb250YWluZXIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA0MiUgIWltcG9ydGFudDsgfVxuICAgICAgICAgICAgLnByZXZpZXctaW5mbyB7IHBhZGRpbmc6MTIlOyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAgICAgLnByZXZpZXctaW5mbyB7IGdyaWQtY29sdW1uOnNwYW4gMzsgcGFkZGluZzoyNXB4OyB3aWR0aDo5MCU7IG1peC1ibGVuZC1tb2RlOm5vcm1hbDsgfVxuICAgICAgICAgICAgaDMgeyBtYXJnaW46MDsgfVxuICAgICAgICAgICAgcCB7IG1hcmdpbjowIDAgLjVlbTsgbGluZS1oZWlnaHQ6MS4yNWVtOyB9XG4gICAgICAgICAgICAucHJldmlldy1jb250YWluZXIgeyBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAyMiUgMTIlOyBiYWNrZ3JvdW5kLXNpemU6MjAwJSAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgICAuY3RhIHsgZ3JpZC1jb2x1bW46c3BhbiAzOyB9XG4gICAgICAgICAgICAuc2Vjb25kYXJ5LWZlYXR1cmUgeyBtYXJnaW4tYm90dG9tOjI0cHg7IH1cbiAgICAgICAgICAgIC5jb250YWluZXIgLmNvbC0zIHsgZ3JpZC1jb2x1bW46MWZyICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXb3JrUHJldmlld3NcbiJdfQ== */\n/*@ sourceURL=components/WorkPreviews.js */"
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

  return WorkPreviews;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = WorkPreviews;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WorkPreviews, "WorkPreviews", "/Users/ajcook4/Sites/v1.0.1/ajc-portfolio/components/WorkPreviews.js");
  reactHotLoader.register(_default, "default", "/Users/ajcook4/Sites/v1.0.1/ajc-portfolio/components/WorkPreviews.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7828889bc3a931b007a4.hot-update.js.map