webpackHotUpdate(5,{

/***/ "./components/WorkHero.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/ajcook4/Sites/portfolio-v1.0/ajc-portfolio/components/WorkHero.js";


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



var WorkHero =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WorkHero, _React$Component);

  function WorkHero(props) {
    _classCallCheck(this, WorkHero);

    return _possibleConstructorReturn(this, (WorkHero.__proto__ || Object.getPrototypeOf(WorkHero)).call(this, props));
  }

  _createClass(WorkHero, [{
    key: "render",
    value: function render() {
      var bgImage;
      this.props.size === 'large' ? bgImage = this.props.hero : bgImage = this.props.herosmall;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("section", {
        style: {
          backgroundImage: "url(".concat(bgImage, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-3648096838"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-3648096838" + " " + "hero-content container col-3"
      }, this.props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-3648096838" + " " + "more"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/img/more-arrow.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-3648096838"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1757729316",
        css: "section.jsx-3648096838{top:-144px;background:#f1f1f1;width:100%;height:100vh;background-repeat:no-repeat;background-size:cover;background-position:bottom;}.hero-content.jsx-3648096838{display:grid;grid-template-rows:40% 40% 20%;height:100vh;}.more.jsx-3648096838{grid-row-start:3;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;-webkit-animation-name:more-arrow-jsx-3648096838;animation-name:more-arrow-jsx-3648096838;-webkit-animation-duration:3.75s;animation-duration:3.75s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:.5;}@-webkit-keyframes more-arrow-jsx-3648096838{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-16px);-ms-transform:translateY(-16px);transform:translateY(-16px);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes more-arrow-jsx-3648096838{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-16px);-ms-transform:translateY(-16px);transform:translateY(-16px);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvV29ya0hlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUVnQyxBQUNRLEFBQ0osQUFHTSxBQUNLLEFBQ0gsV0FQTyxFQUNvQixJQUNwQixhQUZXLFdBQWEsR0FDUyxVQURtQixHQUNsQixzQkFDUixHQUZnRCxFQUtsRixBQUVFLFlBREcsUUFOd0csMkJBQUMsc0NBRW5ELDBEQUFtQyw4RUFBdUMsb0ZBQVcsV0FBQyIsImZpbGUiOiJjb21wb25lbnRzL1dvcmtIZXJvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hamNvb2s0L1NpdGVzL3BvcnRmb2xpby12MS4wL2FqYy1wb3J0Zm9saW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFdvcmtIZXJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYmdJbWFnZTtcbiAgICAodGhpcy5wcm9wcy5zaXplID09PSAnbGFyZ2UnKSA/IChcbiAgICAgIGJnSW1hZ2UgPSB0aGlzLnByb3BzLmhlcm9cbiAgICApIDogKFxuICAgICAgYmdJbWFnZSA9IHRoaXMucHJvcHMuaGVyb3NtYWxsXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTpgdXJsKCR7YmdJbWFnZX0pYCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnQgY29udGFpbmVyIGNvbC0zXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlXCI+PGltZyBzcmM9XCIvc3RhdGljL2ltZy9tb3JlLWFycm93LnN2Z1wiIC8+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBzZWN0aW9uIHsgdG9wOi0xNDRweDsgYmFja2dyb3VuZDojZjFmMWYxOyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwdmg7IGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbTsgfVxuICAgICAgICAgICAgLmhlcm8tY29udGVudCB7IGRpc3BsYXk6Z3JpZDsgZ3JpZC10ZW1wbGF0ZS1yb3dzOjQwJSA0MCUgMjAlOyBoZWlnaHQ6MTAwdmg7IH1cbiAgICAgICAgICAgIC5tb3JlIHsgZ3JpZC1yb3ctc3RhcnQ6MzsgYWxpZ24tc2VsZjplbmQ7IGFuaW1hdGlvbi1uYW1lOm1vcmUtYXJyb3c7IGFuaW1hdGlvbi1kdXJhdGlvbjozLjc1czsgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTsgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IG9wYWNpdHk6LjU7IH1cblxuICAgICAgICAgICAgQGtleWZyYW1lcyBtb3JlLWFycm93IHtcbiAgICAgICAgICAgICAgMCUgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICAgICAgICA1MCUgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTZweCk7IH1cbiAgICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBoMSB7IGZvbnQtd2VpZ2h0OjMwMDsgbGV0dGVyLXNwYWNpbmc6LTAuMDNlbTsgZm9udC1zaXplOjZlbTsgbGluZS1oZWlnaHQ6LjkyZW07IGdyaWQtY29sdW1uOnNwYW4gMzsgbWFyZ2luOjA7IGNvbG9yOndoaXRlOyBhbGlnbi1zZWxmOmVuZDsgfVxuICAgICAgICAgIC5vdmVydmlldyB7IGNvbG9yOndoaXRlOyBncmlkLWNvbHVtbjpzcGFuIDE7IH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTQ0MHB4KSB7XG4gICAgICAgICAgICBoMSB7IGZvbnQtc2l6ZTo0LjVlbTsgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcbiAgICAgICAgICAgIGgxIHsgZm9udC1zaXplOjNlbTsgfVxuICAgICAgICAgICAgc2VjdGlvbiB7IHRvcDotODhweCAhaW1wb3J0YW50OyBoZWlnaHQ6MTAwdmg7IGJhY2tncm91bmQtcG9zaXRpb246Ym90dG9tIHJpZ2h0ICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAgIC5oZXJvLWNvbnRlbnQgeyBhbGlnbi1zZWxmOmVuZDsgZ3JpZC10ZW1wbGF0ZS1yb3dzOjY1JSAyNSUgMTAlICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAgIC5tb3JlIGltZyB7IGhlaWdodDo0dmggfVxuICAgICAgICAgICAgLm92ZXJ2aWV3IHsgZ3JpZC1jb2x1bW46c3BhbiAyOyB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbnsvKmNsYXNzIFdvcmtIZXJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYmdJbWFnZTtcbiAgICAodGhpcy5wcm9wcy5zaXplID09PSAnbGFyZ2UnKSA/IChcbiAgICAgIGJnSW1hZ2UgPSB0aGlzLnByb3BzLmhlcm9cbiAgICApIDogKFxuICAgICAgYmdJbWFnZSA9IHRoaXMucHJvcHMuaGVyb3NtYWxsXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTpgdXJsKCR7dGhpcy5wcm9wcy5oZXJvfSlgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBjb250YWluZXIgY29sLTNcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8cD57dGhpcy5wcm9wcy5zaXplfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL21vcmUtYXJyb3cuc3ZnXCIgLz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIHNlY3Rpb24geyB0b3A6LTE0NHB4OyBiYWNrZ3JvdW5kOiNmMWYxZjE7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDB2aDsgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0OyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246Ym90dG9tOyB9XG4gICAgICAgICAgICAuaGVyby1jb250ZW50IHsgZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLXJvd3M6NDAlIDQwJSAyMCU7IGhlaWdodDoxMDB2aDsgfVxuICAgICAgICAgICAgLm1vcmUgeyBncmlkLXJvdy1zdGFydDozOyBhbGlnbi1zZWxmOmVuZDsgYW5pbWF0aW9uLW5hbWU6bW9yZS1hcnJvdzsgYW5pbWF0aW9uLWR1cmF0aW9uOjMuNzVzOyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOyBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgb3BhY2l0eTouNTsgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIG1vcmUtYXJyb3cge1xuICAgICAgICAgICAgICAwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOyB9XG4gICAgICAgICAgICAgIDUwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNnB4KTsgfVxuICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGgxIHsgZm9udC13ZWlnaHQ6MzAwOyBsZXR0ZXItc3BhY2luZzotMC4wM2VtOyBmb250LXNpemU6NmVtOyBsaW5lLWhlaWdodDouOTJlbTsgZ3JpZC1jb2x1bW46c3BhbiAzOyBtYXJnaW46MDsgY29sb3I6d2hpdGU7IGFsaWduLXNlbGY6ZW5kOyB9XG4gICAgICAgICAgLm92ZXJ2aWV3IHsgY29sb3I6d2hpdGU7IGdyaWQtY29sdW1uOnNwYW4gMTsgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNDQwcHgpIHtcbiAgICAgICAgICAgIGgxIHsgZm9udC1zaXplOjQuNWVtOyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAgICAgaDEgeyBmb250LXNpemU6M2VtOyB9XG4gICAgICAgICAgICBzZWN0aW9uIHsgdG9wOi04OHB4ICFpbXBvcnRhbnQ7IGhlaWdodDoxMDB2aDsgYmFja2dyb3VuZC1wb3NpdGlvbjpib3R0b20gcmlnaHQgIWltcG9ydGFudDsgfVxuICAgICAgICAgICAgLmhlcm8tY29udGVudCB7IGFsaWduLXNlbGY6ZW5kOyBncmlkLXRlbXBsYXRlLXJvd3M6NjUlIDI1JSAxMCUgIWltcG9ydGFudDsgfVxuICAgICAgICAgICAgLm1vcmUgaW1nIHsgaGVpZ2h0OjR2aCB9XG4gICAgICAgICAgICAub3ZlcnZpZXcgeyBncmlkLWNvbHVtbjpzcGFuIDI7IH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn0qL31cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgV29ya0hlcm9cbiJdfQ== */\n/*@ sourceURL=components/WorkHero.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3284259243",
        css: "h1{font-weight:300;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;font-size:6em;line-height:.92em;grid-column:span 3;margin:0;color:white;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}.overview{color:white;grid-column:span 1;}@media screen and (max-width:1440px){h1{font-size:4.5em;}}@media screen and (max-width:600px){h1{font-size:3em;}section{top:-88px !important;height:100vh;background-position:bottom right !important;}.hero-content{-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;grid-template-rows:65% 25% 10% !important;}.more img{height:4vh;}.overview{grid-column:span 2;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvV29ya0hlcm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUMyQixBQUU4QixBQUNHLEFBR0QsQUFJRixBQUNZLEFBQ0EsQUFDUixBQUNRLFdBRFAsQ0FWaUIsRUFPckIsRUFSc0IsQUFJcEIsR0FRVSxFQUhZLFVBUkYsR0FROEMsNEJBQ2YsZ0JBRGdCLDBCQUNmLHFCQVZsQixjQUFrQixrQkFBbUIsbUJBQVMsU0FBWSxZQUFlLDhEQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvV29ya0hlcm8uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FqY29vazQvU2l0ZXMvcG9ydGZvbGlvLXYxLjAvYWpjLXBvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgV29ya0hlcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBiZ0ltYWdlO1xuICAgICh0aGlzLnByb3BzLnNpemUgPT09ICdsYXJnZScpID8gKFxuICAgICAgYmdJbWFnZSA9IHRoaXMucHJvcHMuaGVyb1xuICAgICkgOiAoXG4gICAgICBiZ0ltYWdlID0gdGhpcy5wcm9wcy5oZXJvc21hbGxcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOmB1cmwoJHtiZ0ltYWdlfSlgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBjb250YWluZXIgY29sLTNcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL21vcmUtYXJyb3cuc3ZnXCIgLz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIHNlY3Rpb24geyB0b3A6LTE0NHB4OyBiYWNrZ3JvdW5kOiNmMWYxZjE7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDB2aDsgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0OyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246Ym90dG9tOyB9XG4gICAgICAgICAgICAuaGVyby1jb250ZW50IHsgZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLXJvd3M6NDAlIDQwJSAyMCU7IGhlaWdodDoxMDB2aDsgfVxuICAgICAgICAgICAgLm1vcmUgeyBncmlkLXJvdy1zdGFydDozOyBhbGlnbi1zZWxmOmVuZDsgYW5pbWF0aW9uLW5hbWU6bW9yZS1hcnJvdzsgYW5pbWF0aW9uLWR1cmF0aW9uOjMuNzVzOyBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOyBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgb3BhY2l0eTouNTsgfVxuXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIG1vcmUtYXJyb3cge1xuICAgICAgICAgICAgICAwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKDApOyB9XG4gICAgICAgICAgICAgIDUwJSB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xNnB4KTsgfVxuICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGgxIHsgZm9udC13ZWlnaHQ6MzAwOyBsZXR0ZXItc3BhY2luZzotMC4wM2VtOyBmb250LXNpemU6NmVtOyBsaW5lLWhlaWdodDouOTJlbTsgZ3JpZC1jb2x1bW46c3BhbiAzOyBtYXJnaW46MDsgY29sb3I6d2hpdGU7IGFsaWduLXNlbGY6ZW5kOyB9XG4gICAgICAgICAgLm92ZXJ2aWV3IHsgY29sb3I6d2hpdGU7IGdyaWQtY29sdW1uOnNwYW4gMTsgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNDQwcHgpIHtcbiAgICAgICAgICAgIGgxIHsgZm9udC1zaXplOjQuNWVtOyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAgICAgaDEgeyBmb250LXNpemU6M2VtOyB9XG4gICAgICAgICAgICBzZWN0aW9uIHsgdG9wOi04OHB4ICFpbXBvcnRhbnQ7IGhlaWdodDoxMDB2aDsgYmFja2dyb3VuZC1wb3NpdGlvbjpib3R0b20gcmlnaHQgIWltcG9ydGFudDsgfVxuICAgICAgICAgICAgLmhlcm8tY29udGVudCB7IGFsaWduLXNlbGY6ZW5kOyBncmlkLXRlbXBsYXRlLXJvd3M6NjUlIDI1JSAxMCUgIWltcG9ydGFudDsgfVxuICAgICAgICAgICAgLm1vcmUgaW1nIHsgaGVpZ2h0OjR2aCB9XG4gICAgICAgICAgICAub3ZlcnZpZXcgeyBncmlkLWNvbHVtbjpzcGFuIDI7IH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbn1cblxuey8qY2xhc3MgV29ya0hlcm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBiZ0ltYWdlO1xuICAgICh0aGlzLnByb3BzLnNpemUgPT09ICdsYXJnZScpID8gKFxuICAgICAgYmdJbWFnZSA9IHRoaXMucHJvcHMuaGVyb1xuICAgICkgOiAoXG4gICAgICBiZ0ltYWdlID0gdGhpcy5wcm9wcy5oZXJvc21hbGxcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOmB1cmwoJHt0aGlzLnByb3BzLmhlcm99KWAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jb250ZW50IGNvbnRhaW5lciBjb2wtM1wiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnNpemV9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZVwiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWcvbW9yZS1hcnJvdy5zdmdcIiAvPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgc2VjdGlvbiB7IHRvcDotMTQ0cHg7IGJhY2tncm91bmQ6I2YxZjFmMTsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMHZoOyBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7IGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjpib3R0b207IH1cbiAgICAgICAgICAgIC5oZXJvLWNvbnRlbnQgeyBkaXNwbGF5OmdyaWQ7IGdyaWQtdGVtcGxhdGUtcm93czo0MCUgNDAlIDIwJTsgaGVpZ2h0OjEwMHZoOyB9XG4gICAgICAgICAgICAubW9yZSB7IGdyaWQtcm93LXN0YXJ0OjM7IGFsaWduLXNlbGY6ZW5kOyBhbmltYXRpb24tbmFtZTptb3JlLWFycm93OyBhbmltYXRpb24tZHVyYXRpb246My43NXM7IGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7IGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyBvcGFjaXR5Oi41OyB9XG5cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgbW9yZS1hcnJvdyB7XG4gICAgICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7IH1cbiAgICAgICAgICAgICAgNTAlIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTE2cHgpOyB9XG4gICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaDEgeyBmb250LXdlaWdodDozMDA7IGxldHRlci1zcGFjaW5nOi0wLjAzZW07IGZvbnQtc2l6ZTo2ZW07IGxpbmUtaGVpZ2h0Oi45MmVtOyBncmlkLWNvbHVtbjpzcGFuIDM7IG1hcmdpbjowOyBjb2xvcjp3aGl0ZTsgYWxpZ24tc2VsZjplbmQ7IH1cbiAgICAgICAgICAub3ZlcnZpZXcgeyBjb2xvcjp3aGl0ZTsgZ3JpZC1jb2x1bW46c3BhbiAxOyB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE0NDBweCkge1xuICAgICAgICAgICAgaDEgeyBmb250LXNpemU6NC41ZW07IH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgICAgICAgICBoMSB7IGZvbnQtc2l6ZTozZW07IH1cbiAgICAgICAgICAgIHNlY3Rpb24geyB0b3A6LTg4cHggIWltcG9ydGFudDsgaGVpZ2h0OjEwMHZoOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbSByaWdodCAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgICAuaGVyby1jb250ZW50IHsgYWxpZ24tc2VsZjplbmQ7IGdyaWQtdGVtcGxhdGUtcm93czo2NSUgMjUlIDEwJSAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgICAubW9yZSBpbWcgeyBoZWlnaHQ6NHZoIH1cbiAgICAgICAgICAgIC5vdmVydmlldyB7IGdyaWQtY29sdW1uOnNwYW4gMjsgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufSovfVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBXb3JrSGVyb1xuIl19 */\n/*@ sourceURL=components/WorkHero.js */"
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

  return WorkHero;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

{
  /*class WorkHero extends React.Component {
   constructor(props) {
     super(props);
   }
  
   render() {
     let bgImage;
     (this.props.size === 'large') ? (
       bgImage = this.props.hero
     ) : (
       bgImage = this.props.herosmall
     )
      return (
       <section style={{ backgroundImage:`url(${this.props.hero})` }}>
         <div className="hero-content container col-3">
           {this.props.children}
           <p>{this.props.size}</p>
           <div className="more"><img src="/static/img/more-arrow.svg" /></div>
         </div>
         <style jsx>{`
             section { top:-144px; background:#f1f1f1; width:100%; height:100vh; background-repeat:no-repeat; background-size:cover; background-position:bottom; }
             .hero-content { display:grid; grid-template-rows:40% 40% 20%; height:100vh; }
             .more { grid-row-start:3; align-self:end; animation-name:more-arrow; animation-duration:3.75s; animation-iteration-count:infinite; animation-timing-function: ease-in-out; opacity:.5; }
              @keyframes more-arrow {
               0% { transform:translateY(0); }
               50% { transform:translateY(-16px); }
               100% { transform:translateY(0); }
             }
         `}</style>
         <style jsx global>{`
           h1 { font-weight:300; letter-spacing:-0.03em; font-size:6em; line-height:.92em; grid-column:span 3; margin:0; color:white; align-self:end; }
           .overview { color:white; grid-column:span 1; }
            @media screen and (max-width:1440px) {
             h1 { font-size:4.5em; }
           }
            @media screen and (max-width:600px) {
             h1 { font-size:3em; }
             section { top:-88px !important; height:100vh; background-position:bottom right !important; }
             .hero-content { align-self:end; grid-template-rows:65% 25% 10% !important; }
             .more img { height:4vh }
             .overview { grid-column:span 2; }
           }
         `}</style>
       </section>
     )
   }
  }*/
}
var _default = WorkHero;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WorkHero, "WorkHero", "/Users/ajcook4/Sites/portfolio-v1.0/ajc-portfolio/components/WorkHero.js");
  reactHotLoader.register(_default, "default", "/Users/ajcook4/Sites/portfolio-v1.0/ajc-portfolio/components/WorkHero.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.57a591ab546f838d1c69.hot-update.js.map