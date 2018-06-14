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
        className: "jsx-1326882375" + " " + "auto-height"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-1326882375" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-1326882375"
      }, "Featured Work"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-1326882375" + " " + "grid col-3 column-gutter row-gutter "
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1326882375" + " " + "previews-container "
      }, this.state.pieces.map(function (piece, i) {
        return i < 3 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
          key: i,
          style: {
            backgroundImage: "url(".concat(piece.previewImage, ")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          className: "jsx-1326882375" + " " + "light-gray grid col-3 preview-container"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          className: "jsx-1326882375" + " " + "preview-info align-center"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          className: "jsx-1326882375"
        }, piece.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          className: "jsx-1326882375"
        }, piece.previewBlurb)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          className: "jsx-1326882375" + " " + "cta align-center"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "work?id=".concat(piece.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          className: "jsx-1326882375" + " " + "button gray"
        }, piece.previewCTA))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "/work?id=".concat(piece.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          className: "jsx-1326882375" + " " + "secondary-feature-link"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: i,
          style: {
            backgroundImage: "url(".concat(piece.previewImage, ")"),
            backgroundPosition: "center",
            backgroundSize: "cover"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          className: "jsx-1326882375" + " " + "secondary-feature grid light-gray"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          className: "jsx-1326882375" + " " + "nameplate"
        }, piece.name)));
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1326882375",
        css: ".preview-container.jsx-1326882375{grid-column:span 3;grid-template-rows:25% 50% 25%;background-position:center;background-size:cover;}.preview-info.jsx-1326882375{background-color:#F5D123;mix-blend-mode:multiply;padding:19%;grid-row-start:2;}.preview-info.jsx-1326882375 p.jsx-1326882375{border-top:1px solid #4a4a4a;border-bottom:1px solid #4a4a4a;padding:.25em 0;}.cta.jsx-1326882375{grid-row-start:3;padding:0 19%;}.secondary-feature.jsx-1326882375{min-height:400px;}.secondary-feature-link.jsx-1326882375{font-family:\"ajcFont\";font-style:normal;}.nameplate.jsx-1326882375{-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;background-color:#F5D123;mix-blend-mode:multiply;-webkit-transform:translate(8px,8px);-ms-transform:translate(8px,8px);transform:translate(8px,8px);padding:.5em 1em;text-transform:uppercase;}@media screen and (max-width:1440px){.preview-container.jsx-1326882375{background-position:50% 42% !important;}.preview-info.jsx-1326882375{padding:12%;}}@media screen and (max-width:600px){.preview-info.jsx-1326882375{grid-column:span 3;padding:25px;width:75%;mix-blend-mode:normal;}h3.jsx-1326882375{margin:0;}p.jsx-1326882375{margin:0 0 .5em;line-height:1.25em;}.preview-container.jsx-1326882375{grid-template-rows:65% 22% 12%;background-size:200% !important;}.cta.jsx-1326882375{grid-column:span 3;}.secondary-feature.jsx-1326882375{margin-bottom:24px;}.previews-container.jsx-1326882375{grid-column:span4;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvV29ya1ByZXZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDb0IsQUFFaUQsQUFDQyxBQUNLLEFBQ3RCLEFBQ2MsQUFDVSxBQUNwQixBQUdrQyxBQUNoQyxBQUlPLEFBQ3JCLEFBQ00sQUFDaUMsQUFDM0IsQUFDYyxBQUNBLFNBTHpCLEdBTGMsSUFNVSxDQWJILEFBQ0MsQ0FnQkksQ0FwQjZCLEFBY3RCLEFBSXJCLEFBQ2MsR0FkdUIsR0FKRCxJQUNhLEVBQ3ZDLEFBY2dELENBSDNCLEdBRWxCLElBUHFCLENBSkksRUFTZSxPQWJMLENBRHNCLFdBQ0wsQUFDQSxDQUl6QyxDQVdtQyxDQUhMLGFBZHNDLEFBRTFCLENBREEsU0FLbEIsWUFONkMsWUFNaEIsbUdBQWlCLGlCQUF5Qix5QkFBQyIsImZpbGUiOiJjb21wb25lbnRzL1dvcmtQcmV2aWV3cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWpjb29rNC9TaXRlcy92MS4wLjEvYWpjLXBvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IFBpZWNlcyBmcm9tICcuL1BpZWNlcydcblxuXG5jbGFzcyBXb3JrUHJldmlld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XCJwaWVjZXNcIjpbXX1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtwaWVjZXM6UGllY2VzfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhdXRvLWhlaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMj5GZWF0dXJlZCBXb3JrPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgY29sLTMgY29sdW1uLWd1dHRlciByb3ctZ3V0dGVyIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld3MtY29udGFpbmVyIFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucGllY2VzLm1hcCgocGllY2UsaSkgPT4gKFxuICAgICAgICAgICAgICAoaTwzKSA/IChcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBrZXk9e2l9IGNsYXNzTmFtZT1cImxpZ2h0LWdyYXkgZ3JpZCBjb2wtMyBwcmV2aWV3LWNvbnRhaW5lclwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHtwaWVjZS5wcmV2aWV3SW1hZ2V9KWAgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW5mbyBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntwaWVjZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwaWVjZS5wcmV2aWV3Qmx1cmJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YSBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uIGdyYXlcIiBocmVmPXtgd29yaz9pZD0ke3BpZWNlLmlkfWB9PntwaWVjZS5wcmV2aWV3Q1RBfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgKTooXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWZlYXR1cmUtbGlua1wiIGhyZWY9e2Avd29yaz9pZD0ke3BpZWNlLmlkfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJzZWNvbmRhcnktZmVhdHVyZSBncmlkIGxpZ2h0LWdyYXlcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6YHVybCgke3BpZWNlLnByZXZpZXdJbWFnZX0pYCwgYmFja2dyb3VuZFBvc2l0aW9uOlwiY2VudGVyXCIgLCBiYWNrZ3JvdW5kU2l6ZTpcImNvdmVyXCIgfX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVwbGF0ZVwiPntwaWVjZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnByZXZpZXctY29udGFpbmVyIHsgZ3JpZC1jb2x1bW46c3BhbiAzOyBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSA1MCUgMjUlOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyB9XG4gICAgICAgICAgLnByZXZpZXctaW5mbyB7IGJhY2tncm91bmQtY29sb3I6I0Y1RDEyMzsgbWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7IHBhZGRpbmc6MTklOyBncmlkLXJvdy1zdGFydDoyOyB9XG4gICAgICAgICAgLnByZXZpZXctaW5mbyBweyBib3JkZXItdG9wOjFweCBzb2xpZCAjNGE0YTRhOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNGE0YTRhOyBwYWRkaW5nOi4yNWVtIDA7IH1cbiAgICAgICAgICAuY3RhIHsgZ3JpZC1yb3ctc3RhcnQ6MzsgcGFkZGluZzowIDE5JTsgfVxuICAgICAgICAgIC5zZWNvbmRhcnktZmVhdHVyZSB7IG1pbi1oZWlnaHQ6NDAwcHg7IH1cbiAgICAgICAgICAuc2Vjb25kYXJ5LWZlYXR1cmUtbGluayB7IGZvbnQtZmFtaWx5OlwiYWpjRm9udFwiOyBmb250LXN0eWxlOm5vcm1hbDsgfVxuICAgICAgICAgIC5uYW1lcGxhdGUgeyBhbGlnbi1zZWxmOmVuZDsgYmFja2dyb3VuZC1jb2xvcjojRjVEMTIzOyBtaXgtYmxlbmQtbW9kZTptdWx0aXBseTsgdHJhbnNmb3JtOnRyYW5zbGF0ZSg4cHgsOHB4KTsgcGFkZGluZzouNWVtIDFlbTsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOyB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE0NDBweCkge1xuICAgICAgICAgICAgLnByZXZpZXctY29udGFpbmVyIHsgYmFja2dyb3VuZC1wb3NpdGlvbjo1MCUgNDIlICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAgIC5wcmV2aWV3LWluZm8geyBwYWRkaW5nOjEyJTsgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAgICAgICAgIC5wcmV2aWV3LWluZm8geyBncmlkLWNvbHVtbjpzcGFuIDM7IHBhZGRpbmc6MjVweDsgd2lkdGg6NzUlOyBtaXgtYmxlbmQtbW9kZTpub3JtYWw7IH1cbiAgICAgICAgICAgIGgzIHsgbWFyZ2luOjA7IH1cbiAgICAgICAgICAgIHAgeyBtYXJnaW46MCAwIC41ZW07IGxpbmUtaGVpZ2h0OjEuMjVlbTsgfVxuICAgICAgICAgICAgLnByZXZpZXctY29udGFpbmVyIHsgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMjIlIDEyJTsgYmFja2dyb3VuZC1zaXplOjIwMCUgIWltcG9ydGFudDsgfVxuICAgICAgICAgICAgLmN0YSB7IGdyaWQtY29sdW1uOnNwYW4gMzsgfVxuICAgICAgICAgICAgLnNlY29uZGFyeS1mZWF0dXJlIHsgbWFyZ2luLWJvdHRvbToyNHB4OyB9XG4gICAgICAgICAgICAucHJldmlld3MtY29udGFpbmVyIHsgZ3JpZC1jb2x1bW46c3BhbjQ7IH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBXb3JrUHJldmlld3NcbiJdfQ== */\n/*@ sourceURL=components/WorkPreviews.js */"
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
//# sourceMappingURL=4.77513ba5750b92394591.hot-update.js.map