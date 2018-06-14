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
        className: "jsx-711082201" + " " + "auto-height"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-711082201" + " " + "container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-711082201"
      }, "Featured Work"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-711082201" + " " + "grid col-3 column-gutter row-gutter"
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
          className: "jsx-711082201" + " " + "light-gray grid col-3 preview-container"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          className: "jsx-711082201" + " " + "preview-info align-center"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          className: "jsx-711082201"
        }, piece.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          className: "jsx-711082201"
        }, piece.previewBlurb)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          className: "jsx-711082201" + " " + "cta align-center"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "work?id=".concat(piece.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          className: "jsx-711082201" + " " + "button gray"
        }, piece.previewCTA))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "/work?id=".concat(piece.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          className: "jsx-711082201" + " " + "secondary-feature-link"
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
          className: "jsx-711082201" + " " + "secondary-feature grid light-gray"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          className: "jsx-711082201" + " " + "nameplate"
        }, piece.name)));
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "711082201",
        css: ".preview-container.jsx-711082201{grid-column:span 3;grid-template-rows:25% 50% 25%;background-position:center;background-size:cover;}.preview-info.jsx-711082201{background-color:#F5D123;mix-blend-mode:multiply;padding:19%;grid-row-start:2;}.preview-info.jsx-711082201 p.jsx-711082201{border-top:1px solid #4a4a4a;border-bottom:1px solid #4a4a4a;padding:.25em 0;}.cta.jsx-711082201{grid-row-start:3;padding:0 19%;}.secondary-feature.jsx-711082201{min-height:400px;}.secondary-feature-link.jsx-711082201{font-family:\"ajcFont\";font-style:normal;display:block;}.nameplate.jsx-711082201{-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;background-color:#F5D123;mix-blend-mode:multiply;-webkit-transform:translate(8px,8px);-ms-transform:translate(8px,8px);transform:translate(8px,8px);padding:.5em 1em;text-transform:uppercase;}@media screen and (max-width:1440px){.preview-container.jsx-711082201{background-position:50% 42% !important;}.preview-info.jsx-711082201{padding:12%;}}@media screen and (max-width:600px){.preview-info.jsx-711082201{grid-column:span 3;padding:25px;width:75%;mix-blend-mode:normal;}h3.jsx-711082201{margin:0;}p.jsx-711082201{margin:0 0 .5em;line-height:1.25em;}.preview-container.jsx-711082201{grid-template-rows:65% 22% 12%;background-size:200% !important;}.cta.jsx-711082201{grid-column:span 3;}.secondary-feature.jsx-711082201{margin-bottom:24px;}.secondar-feature-link.jsx-711082201{grid-column:span 3 !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvV29ya1ByZXZpZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDb0IsQUFFaUQsQUFDQyxBQUNLLEFBQ3RCLEFBQ2MsQUFDVSxBQUNwQixBQUdrQyxBQUNoQyxBQUlPLEFBQ3JCLEFBQ00sQUFDaUMsQUFDM0IsQUFDYyxBQUNlLFNBTHhDLEdBTGMsSUFNVSxDQWJILEFBQ0MsRUFKaUMsQUFjdEIsQUFJckIsQUFDYyxHQWR1QixHQUpELElBQ2EsQ0FrQnBCLENBakJuQixBQWNnRCxDQUgzQixHQUVsQixJQVBxQixDQUppQixFQVNFLE9BYkwsQ0FEc0IsSUFLbEIsT0FKYSxBQUNBLENBSXpDLENBV21DLENBSEwsYUFkc0MsQUFFMUIsQ0FEQSxTQUtsQixZQU42QyxZQU1oQixtR0FBaUIsaUJBQXlCLHlCQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvV29ya1ByZXZpZXdzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hamNvb2s0L1NpdGVzL3YxLjAuMS9hamMtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgUGllY2VzIGZyb20gJy4vUGllY2VzJ1xuXG5cbmNsYXNzIFdvcmtQcmV2aWV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcInBpZWNlc1wiOltdfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3BpZWNlczpQaWVjZXN9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImF1dG8taGVpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyPkZlYXR1cmVkIFdvcms8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBjb2wtMyBjb2x1bW4tZ3V0dGVyIHJvdy1ndXR0ZXJcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnBpZWNlcy5tYXAoKHBpZWNlLGkpID0+IChcbiAgICAgICAgICAgICAgKGk8MykgPyAoXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24ga2V5PXtpfSBjbGFzc05hbWU9XCJsaWdodC1ncmF5IGdyaWQgY29sLTMgcHJldmlldy1jb250YWluZXJcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7cGllY2UucHJldmlld0ltYWdlfSlgIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWluZm8gYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57cGllY2UubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD57cGllY2UucHJldmlld0JsdXJifTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBncmF5XCIgaHJlZj17YHdvcms/aWQ9JHtwaWVjZS5pZH1gfT57cGllY2UucHJldmlld0NUQX08L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlY29uZGFyeS1mZWF0dXJlLWxpbmtcIiBocmVmPXtgL3dvcms/aWQ9JHtwaWVjZS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWZlYXR1cmUgZ3JpZCBsaWdodC1ncmF5XCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOmB1cmwoJHtwaWVjZS5wcmV2aWV3SW1hZ2V9KWAsIGJhY2tncm91bmRQb3NpdGlvbjpcImNlbnRlclwiICwgYmFja2dyb3VuZFNpemU6XCJjb3ZlclwiIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lcGxhdGVcIj57cGllY2UubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7IGdyaWQtY29sdW1uOnNwYW4gMzsgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNSUgNTAlIDI1JTsgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgfVxuICAgICAgICAgIC5wcmV2aWV3LWluZm8geyBiYWNrZ3JvdW5kLWNvbG9yOiNGNUQxMjM7IG1peC1ibGVuZC1tb2RlOm11bHRpcGx5OyBwYWRkaW5nOjE5JTsgZ3JpZC1yb3ctc3RhcnQ6MjsgfVxuICAgICAgICAgIC5wcmV2aWV3LWluZm8gcHsgYm9yZGVyLXRvcDoxcHggc29saWQgIzRhNGE0YTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzRhNGE0YTsgcGFkZGluZzouMjVlbSAwOyB9XG4gICAgICAgICAgLmN0YSB7IGdyaWQtcm93LXN0YXJ0OjM7IHBhZGRpbmc6MCAxOSU7IH1cbiAgICAgICAgICAuc2Vjb25kYXJ5LWZlYXR1cmUgeyBtaW4taGVpZ2h0OjQwMHB4OyB9XG4gICAgICAgICAgLnNlY29uZGFyeS1mZWF0dXJlLWxpbmsgeyBmb250LWZhbWlseTpcImFqY0ZvbnRcIjsgZm9udC1zdHlsZTpub3JtYWw7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAubmFtZXBsYXRlIHsgYWxpZ24tc2VsZjplbmQ7IGJhY2tncm91bmQtY29sb3I6I0Y1RDEyMzsgbWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7IHRyYW5zZm9ybTp0cmFuc2xhdGUoOHB4LDhweCk7IHBhZGRpbmc6LjVlbSAxZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNDQwcHgpIHtcbiAgICAgICAgICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7IGJhY2tncm91bmQtcG9zaXRpb246NTAlIDQyJSAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgICAucHJldmlldy1pbmZvIHsgcGFkZGluZzoxMiU7IH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgICAgICAgICAucHJldmlldy1pbmZvIHsgZ3JpZC1jb2x1bW46c3BhbiAzOyBwYWRkaW5nOjI1cHg7IHdpZHRoOjc1JTsgbWl4LWJsZW5kLW1vZGU6bm9ybWFsOyB9XG4gICAgICAgICAgICBoMyB7IG1hcmdpbjowOyB9XG4gICAgICAgICAgICBwIHsgbWFyZ2luOjAgMCAuNWVtOyBsaW5lLWhlaWdodDoxLjI1ZW07IH1cbiAgICAgICAgICAgIC5wcmV2aWV3LWNvbnRhaW5lciB7IGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDIyJSAxMiU7IGJhY2tncm91bmQtc2l6ZToyMDAlICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAgIC5jdGEgeyBncmlkLWNvbHVtbjpzcGFuIDM7IH1cbiAgICAgICAgICAgIC5zZWNvbmRhcnktZmVhdHVyZSB7IG1hcmdpbi1ib3R0b206MjRweDsgfVxuICAgICAgICAgICAgLnNlY29uZGFyLWZlYXR1cmUtbGluayB7IGdyaWQtY29sdW1uOnNwYW4gMyAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgV29ya1ByZXZpZXdzXG4iXX0= */\n/*@ sourceURL=components/WorkPreviews.js */"
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
//# sourceMappingURL=4.1be2f9efdf215db2824c.hot-update.js.map