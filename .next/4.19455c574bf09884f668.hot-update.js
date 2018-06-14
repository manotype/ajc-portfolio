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
        className: "jsx-2311245221" + " " + "auto-height"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-2311245221" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-2311245221"
      }, "Featured Work"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-2311245221" + " " + "grid col-3 column-gutter row-gutter previews-container"
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
          className: "jsx-2311245221" + " " + "light-gray grid col-3 preview-container"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          className: "jsx-2311245221" + " " + "preview-info align-center"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          className: "jsx-2311245221"
        }, piece.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          className: "jsx-2311245221"
        }, piece.previewBlurb)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          className: "jsx-2311245221" + " " + "cta align-center"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "work?id=".concat(piece.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          className: "jsx-2311245221" + " " + "button gray"
        }, piece.previewCTA))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "/work?id=".concat(piece.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          className: "jsx-2311245221" + " " + "secondary-feature-link"
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
          className: "jsx-2311245221" + " " + "secondary-feature grid light-gray"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          className: "jsx-2311245221" + " " + "nameplate"
        }, piece.name)));
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2311245221",
        css: ".preview-container.jsx-2311245221{grid-column:span 3;grid-template-rows:25% 50% 25%;background-position:center;background-size:cover;}.preview-info.jsx-2311245221{background-color:#F5D123;mix-blend-mode:multiply;padding:19%;grid-row-start:2;}.preview-info.jsx-2311245221 p.jsx-2311245221{border-top:1px solid #4a4a4a;border-bottom:1px solid #4a4a4a;padding:.25em 0;}.cta.jsx-2311245221{grid-row-start:3;padding:0 19%;}.secondary-feature.jsx-2311245221{min-height:400px;}.secondary-feature-link.jsx-2311245221{font-family:\"ajcFont\";font-style:normal;display:block;}.nameplate.jsx-2311245221{-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;background-color:#F5D123;mix-blend-mode:multiply;-webkit-transform:translate(8px,8px);-ms-transform:translate(8px,8px);transform:translate(8px,8px);padding:.5em 1em;text-transform:uppercase;}@media screen and (max-width:1440px){.preview-container.jsx-2311245221{background-position:50% 42% !important;}.preview-info.jsx-2311245221{padding:12%;}}@media screen and (max-width:600px){.preview-info.jsx-2311245221{grid-column:span 3;padding:25px;width:75%;mix-blend-mode:normal;}h3.jsx-2311245221{margin:0;}p.jsx-2311245221{margin:0 0 .5em;line-height:1.25em;}.preview-container.jsx-2311245221{grid-template-rows:65% 22% 12%;background-size:200% !important;}.cta.jsx-2311245221{grid-column:span 3;}.secondary-feature.jsx-2311245221{margin-bottom:24px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvV29ya1ByZXZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IsQUFFaUQsQUFDQyxBQUNLLEFBQ3RCLEFBQ2MsQUFDVSxBQUNwQixBQUdrQyxBQUNoQyxBQUlPLEFBQ3JCLEFBQ00sQUFDaUMsQUFDM0IsQUFDYyxTQUp6QixHQUxjLElBTVUsQ0FiSCxBQUNDLEVBSmlDLEFBY3RCLEFBSXJCLEFBQ2MsR0FkdUIsR0FKRCxJQUNhLEVBQ3ZDLEFBY2dELENBSDNCLEdBRWxCLElBUHFCLENBSmlCLEVBU0UsT0FiTCxDQURzQixJQUtsQixPQUphLEFBQ0EsQ0FJekMsQ0FXbUMsQ0FITCxhQWRzQyxBQUUxQixDQURBLFNBS2xCLFlBTjZDLFlBTWhCLG1HQUFpQixpQkFBeUIseUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9Xb3JrUHJldmlld3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FqY29vazQvU2l0ZXMvdjEuMC4xL2FqYy1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBQaWVjZXMgZnJvbSAnLi9QaWVjZXMnXG5cblxuY2xhc3MgV29ya1ByZXZpZXdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1wicGllY2VzXCI6W119XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGllY2VzOlBpZWNlc30pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXV0by1oZWlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aDI+RmVhdHVyZWQgV29yazwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGNvbC0zIGNvbHVtbi1ndXR0ZXIgcm93LWd1dHRlciBwcmV2aWV3cy1jb250YWluZXJcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBpZWNlcy5tYXAoKHBpZWNlLGkpID0+IChcbiAgICAgICAgICAgICAgKGk8MykgPyAoXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXtpfSBjbGFzc05hbWU9XCJsaWdodC1ncmF5IGdyaWQgY29sLTMgcHJldmlldy1jb250YWluZXJcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7cGllY2UucHJldmlld0ltYWdlfSlgIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWluZm8gYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57cGllY2UubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD57cGllY2UucHJldmlld0JsdXJifTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBncmF5XCIgaHJlZj17YHdvcms/aWQ9JHtwaWVjZS5pZH1gfT57cGllY2UucHJldmlld0NUQX08L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlY29uZGFyeS1mZWF0dXJlLWxpbmtcIiBocmVmPXtgL3dvcms/aWQ9JHtwaWVjZS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWZlYXR1cmUgZ3JpZCBsaWdodC1ncmF5XCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOmB1cmwoJHtwaWVjZS5wcmV2aWV3SW1hZ2V9KWAsIGJhY2tncm91bmRQb3NpdGlvbjpcImNlbnRlclwiICwgYmFja2dyb3VuZFNpemU6XCJjb3ZlclwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lcGxhdGVcIj57cGllY2UubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7IGdyaWQtY29sdW1uOnNwYW4gMzsgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNSUgNTAlIDI1JTsgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgfVxuICAgICAgICAgIC5wcmV2aWV3LWluZm8geyBiYWNrZ3JvdW5kLWNvbG9yOiNGNUQxMjM7IG1peC1ibGVuZC1tb2RlOm11bHRpcGx5OyBwYWRkaW5nOjE5JTsgZ3JpZC1yb3ctc3RhcnQ6MjsgfVxuICAgICAgICAgIC5wcmV2aWV3LWluZm8gcHsgYm9yZGVyLXRvcDoxcHggc29saWQgIzRhNGE0YTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzRhNGE0YTsgcGFkZGluZzouMjVlbSAwOyB9XG4gICAgICAgICAgLmN0YSB7IGdyaWQtcm93LXN0YXJ0OjM7IHBhZGRpbmc6MCAxOSU7IH1cbiAgICAgICAgICAuc2Vjb25kYXJ5LWZlYXR1cmUgeyBtaW4taGVpZ2h0OjQwMHB4OyB9XG4gICAgICAgICAgLnNlY29uZGFyeS1mZWF0dXJlLWxpbmsgeyBmb250LWZhbWlseTpcImFqY0ZvbnRcIjsgZm9udC1zdHlsZTpub3JtYWw7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAubmFtZXBsYXRlIHsgYWxpZ24tc2VsZjplbmQ7IGJhY2tncm91bmQtY29sb3I6I0Y1RDEyMzsgbWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7IHRyYW5zZm9ybTp0cmFuc2xhdGUoOHB4LDhweCk7IHBhZGRpbmc6LjVlbSAxZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNDQwcHgpIHtcbiAgICAgICAgICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7IGJhY2tncm91bmQtcG9zaXRpb246NTAlIDQyJSAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgICAucHJldmlldy1pbmZvIHsgcGFkZGluZzoxMiU7IH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgICAgICAgICAucHJldmlldy1pbmZvIHsgZ3JpZC1jb2x1bW46c3BhbiAzOyBwYWRkaW5nOjI1cHg7IHdpZHRoOjc1JTsgbWl4LWJsZW5kLW1vZGU6bm9ybWFsOyB9XG4gICAgICAgICAgICBoMyB7IG1hcmdpbjowOyB9XG4gICAgICAgICAgICBwIHsgbWFyZ2luOjAgMCAuNWVtOyBsaW5lLWhlaWdodDoxLjI1ZW07IH1cbiAgICAgICAgICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7IGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDIyJSAxMiU7IGJhY2tncm91bmQtc2l6ZToyMDAlICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAgIC5jdGEgeyBncmlkLWNvbHVtbjpzcGFuIDM7IH1cbiAgICAgICAgICAgIC5zZWNvbmRhcnktZmVhdHVyZSB7IG1hcmdpbi1ib3R0b206MjRweDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtQcmV2aWV3c1xuIl19 */\n/*@ sourceURL=components/WorkPreviews.js */"
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
//# sourceMappingURL=4.19455c574bf09884f668.hot-update.js.map