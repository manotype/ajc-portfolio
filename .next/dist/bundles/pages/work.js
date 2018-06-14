module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Pieces = [{
  "id": 1,
  "name": "Empower",
  "thumb": "/static/img/Empower-thumb.jpg",
  "previewImage": "/static/img/Empower-Preview.jpg",
  "previewBlurb": "Using data science to identify home energy inefficiences and available solutions",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/Empower-DetailsHero.jpg",
    "herosmall": "/static/img/Empower-DetailsHero-sm.jpg",
    "about": "Home energy inefficiencies cost homeowners hundreds to thousands of dollars per year, on top of their energy utility bills. Empower uses sophisticated algorithms to analyze utility and public data to sniff out where a home is losing its energy.",
    "sections": [{
      "tag": "large",
      "p": "By entering in your home’s address, Empower accesses data from home energy providers, county auditors, and NOAA.",
      "img": "/static/img/Empower-Feature-Large-1.jpg",
      "imgsmall": "/static/img/Empower-Feature-Large-1-sm.jpg"
    }, {
      "tag": "large",
      "p": "Data science provides insight into your home’s energy use and offers products and services to mitigate the issues.",
      "img": "/static/img/Empower-Feature-Large-2.jpg",
      "imgsmall": "/static/img/Empower-Feature-Large-2-sm.jpg"
    }, {
      "tag": "text",
      "headline": "My Involvement",
      "copy": "I acted as Lead Designer on the product overhaul and re-architected the experience by streamlining the user flow and providing the right information at the right time for homeowners."
    }]
  }
}, {
  "id": 2,
  "name": "SilentNight",
  "thumb": "/static/img/Silentnight-thumb.jpg",
  "previewImage": "/static/img/Silentnight-Preview.jpg",
  "previewBlurb": "Helping the UK’s leading mattress manufacturer transition into direct selling.",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/Silentnight-DetailsHero.jpg",
    "herosmall": "/static/img/Silentnight-DetailsHero-sm.jpg",
    "about": "Despite dominance of market share—by a considerable margin—Silentnight was feeling the pressure from new direct-to-consumer options like Casper and Leesa. They needed help to ditch the manufacturer paradigm and begin selling directly to buyers.",
    "sections": [{
      "tag": "large",
      "p": "",
      "img": "/static/img/Silentnight-Feature-Large.jpg",
      "imgsmall": "/static/img/Silentnight-Feature-Large-sm.jpg"
    }, {
      "tag": "text",
      "headline": "My Involvement",
      "copy": "In conjunction with a new digital marketing plan and media push, I designed a commerce-enabled landing page (option B above) to be tested against their re-designed e-commerce site (option A). By partnering with SEO, Media, and Data Analytics expertise, we were able to outperform their e-commerce site by a staggering percentage by surfacing desirable content that lent itself to online transactions.",
      "result": ">1,200%",
      "caption": "Conversion rate over option A"
    }]
  }
}, {
  "id": 3,
  "name": "My Wendy’s",
  "thumb": "/static/img/MyWendys-thumb.jpg",
  "previewImage": "/static/img/MyWendys-Preview.jpg",
  "previewBlurb": "The QSR Category’s first nationally-available mobile payment app",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/MyWendys-DetailsHero.jpg",
    "herosmall": "/static/img/MyWendys-DetailsHero-sm.jpg",
    "about": "Just prior to the lunch hour, wendys.com saw traffic spiking to their nutrition information pages. The MyWendy’s app was born from this insight to make that information accessible for those standing in or going through the drive-thru.",
    "sections": [{
      "tag": "columns",
      "img1": "/static/img/MyWendys-MultiColumns-1.png",
      "img2": "/static/img/MyWendys-MultiColumns-2.png",
      "img3": "/static/img/MyWendys-MultiColumns-3.png",
      "caption1": "Set",
      "caption2": "Choose",
      "caption3": "Personalize",
      "copy1": "Find meals that met calorie demands",
      "copy2": "Select from meal options and choose alternative side items",
      "copy3": "Choose ingredients you want added or substracted from individual items"
    }, {
      "tag": "large",
      "p": "After field tests and pilots in two local markets, Wendy’s became the first QSR to launch mobile payment nationwide.",
      "img": "/static/img/MyWendys-Pay.jpg",
      "imgsmall": "/static/img/MyWendys-Pay-sm.jpg"
    }, {
      "tag": "medium",
      "img": "/static/img/MyWendys-Personalization.jpg",
      "p": "The MyWendy’s experience was integrated with wendys.com so the meals could be created anywhere and also set the stage for future ordering functionality."
    }, {
      "tag": "text",
      "headline": "My Involvement",
      "copy": "I collaborated with Creative Direction and an iOS developer to prototype the nutrition path used to pitch the client. After officially being awarded the work, I provided the experience architecture and Art Direction, while closely collaborating with technology during the production of the first release. For subsequent releases, more staff was brought on to the project at which point I focused solely on Art Direction and User Interface design until the app was taken in-house."
    }]
  }
}, {
  "id": 4,
  "name": "Barnes&Noble",
  "thumb": "/static/img/BN-thumb.jpg",
  "previewImage": "/static/img/BN-Preview.jpg",
  "previewBlurb": "Lorem ipsum dolor sit amet adipiscing elit consectetur",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/BN-DetailsHero.jpg",
    "herosmall": "/static/img/BN-DetailsHero-sm.jpg",
    "about": "Like many retailers, Barnes&Noble was struggling to keep pace with the likes of Amazon and other large-scale e-tailers.",
    "sections": [{
      "tag": "text",
      "headline": "The Opportunity",
      "copy": "Trying to out-Amazon Amazon seemed like an effort that would be destined for failure from the outset. So while Amazon could compete on price, inventory, and shipping, customers showed that there was much more to it than just transactions and the act of reading, itself. Passionate readers enjoy the quest for their next book just as much as being enveloped in the stories they consume. "
    }, {
      "tag": "large",
      "p": "More than an e-commerce redesign, content was used to help readers uncover the books they didn't even know they yet wanted to read.",
      "img": "/static/img/BN-Large-Feature-2.jpg",
      "imgsmall": "/static/img/BN-Large-Feature-2-sm.jpg"
    }, {
      "tag": "columns",
      "img1": "/static/img/BN-Search.jpg",
      "img2": "/static/img/BN-Genre.jpg",
      "img3": "/static/img/BN-YourReads.jpg",
      "caption1": "Search Content & Products",
      "caption2": "Find Specific Genres",
      "caption3": "Read Anywhere",
      "copy1": "Site search targeted both discovery content and products",
      "copy2": "Book subjects are more specific to human interests, not traditional categorization",
      "copy3": "The reading experience should be seamless and not limited to one platform"
    }, {
      "tag": "large",
      "p": "Most samples of books are limited to front matter, not the actual story. Like one can in their bricks and mortars, we pushed to offer more accessible samples.",
      "img": "/static/img/BN-Large-Feature-1.jpg",
      "imgsmall": "/static/img/BN-Large-Feature-1-sm.jpg"
    }, {
      "tag": "text",
      "headline": "My Involvement",
      "copy": "In this project, I collaborated closely with strategy (Customer and UX), technology, and the client, while overseeing a team of 4 designers and a copywriter."
    }]
  }
}, {
  "id": 5,
  "name": "Hershey’s",
  "thumb": "/static/img/Hersheys-thumb.jpg",
  "previewImage": "/static/img/Hersheys-Preview.jpg",
  "previewBlurb": "Lorem ipsum dolor sit amet adipiscing elit consectetur",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/Hersheys-DetailsHero.jpg",
    "herosmall": "/static/img/Hersheys-DetailsHero-sm.jpg",
    "about": "The Hershey’s Company were experiencing a decline in sales of their premium brands and needed help prototyping experiences that could breathe new life into their product line.",
    "sections": [{
      "tag": "large",
      "p": "A new culinary program provided an opportunity to infuse premium Hershey’s chocolates into subscription based, chef-prepared meal kits.",
      "img": "/static/img/Hersheys-Large-Feature-1.jpg",
      "imgsmall": "/static/img/Hersheys-Large-Feature-1-sm.jpg"
    }, {
      "tag": "columns",
      "img1": "/static/img/Hersheys-Experience.jpg",
      "img2": "/static/img/Hersheys-Profile.jpg",
      "img3": "/static/img/Hersheys-Prefs.jpg",
      "caption1": "Subscripton Type",
      "caption2": "Flavor Profile",
      "caption3": "Cuisine Types",
      "copy1": "Customers can choose between dinner, dessert, or plans for both",
      "copy2": "Build a personal plan based on flavor preferences",
      "copy3": "Determine how flavors come together"
    }, {
      "tag": "large",
      "p": "",
      "img": "/static/img/Hersheys-Large-Feature-2.jpg",
      "imgsmall": "/static/img/Hersheys-Large-Feature-2-sm.jpg"
    }, {
      "tag": "text",
      "headline": "My Involvement",
      "copy": "Working with Creative Leadership and the client, I acted as the Lead Designer on the development of two different experiences."
    }]
  }
}, {
  "id": 6,
  "name": "Looped Transit",
  "thumb": "/static/img/Looped-thumb.jpg",
  "previewImage": "/static/img/Looped-Preview.jpg",
  "previewBlurb": "Lorem ipsum dolor sit amet adipiscing elit consectetur",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/Looped-DetailsHero.jpg",
    "herosmall": "/static/img/Looped-DetailsHero-sm.jpg",
    "about": "Before Columbus, OH was awarded Smart City by the US Department of Transportation in 2016, Looped Transit collaborated with the City on a ride-sharing program.",
    "sections": [{
      "tag": "large",
      "p": "Application Flows",
      "img": "/static/img/Looped-Large-Feature.jpg",
      "imgsmall": "/static/img/Looped-Large-Feature-sm.jpg"
    }, {
      "tag": "large",
      "p": "Annotated Wireframes",
      "img": "/static/img/Looped-Large-Feature-2.jpg",
      "imgsmall": "/static/img/Looped-Large-Feature-2-sm.jpg"
    }, {
      "tag": "text",
      "headline": "My Involvement",
      "copy": "I provided User Experience guidance and deliverables."
    }]
  }
}, {
  "id": 7,
  "name": "Visual Communication",
  "thumb": "/static/img/VisCom-thumb.jpg",
  "previewImage": "/static/img/VisCom-Preview.jpg",
  "previewBlurb": "Lorem ipsum dolor sit amet adipiscing elit consectetur",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/VisCom-Hero.jpg",
    "herosmall": "/static/img/VisCom-DetailsHero-sm.jpg",
    "about": "Though digital has been in my blood since I first played on the internet in 1995, I was formally trained in Visual Communication Design. This training was the foundation for the visual design and information architecture that is brought to my work.",
    "sections": [{
      "tag": "large",
      "p": "",
      "img": "/static/img/VisCom-Feature-Alacrity.jpg",
      "imgsmall": "/static/img/VisCom-Feature-Alacrity-sm.jpg"
    }, {
      "tag": "large",
      "p": "",
      "img": "/static/img/VisCom-Feature-Dre.jpg",
      "imgsmall": "/static/img/VisCom-Feature-Dre-sm.jpg"
    }, {
      "tag": "large",
      "p": "",
      "img": "/static/img/VisCom-Feature-Key.jpg",
      "imgsmall": "/static/img/VisCom-Feature-Key-sm.jpg"
    }, {
      "tag": "large",
      "p": "",
      "img": "/static/img/VisCom-Feature-Aesthetics.jpg",
      "imgsmall": "/static/img/VisCom-Feature-Aesthetics-sm.jpg"
    }]
  }
}, {
  "id": 8,
  "name": "Brand + Visual Identity",
  "thumb": "/static/img/Identity-thumb.jpg",
  "previewImage": "/static/img/Identity-Preview.jpg",
  "previewBlurb": "Lorem ipsum dolor sit amet adipiscing elit consectetur",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/Identity-Hero.jpg",
    "herosmall": "/static/img/Identity-DetailsHero-sm.jpg",
    "about": "Visual identity is the cornerstone of brand communication & expression. Without it, personality is washed away in the sea of sameness. The craft of visual identity melds together two of my favorite design components, typography and precision shape making.",
    "sections": [{
      "tag": "large",
      "p": "",
      "img": "/static/img/Identity-Feature-Large-3.jpg",
      "imgsmall": "/static/img/Identity-Feature-Large-3-sm.jpg"
    }, {
      "tag": "large",
      "p": "",
      "img": "/static/img/Identity-Feature-Large-2.jpg",
      "imgsmall": "/static/img/Identity-Feature-Large-2-sm.jpg"
    }, {
      "tag": "large",
      "p": "",
      "img": "/static/img/Identity-Feature-Large.jpg",
      "imgsmall": "/static/img/Identity-Feature-Large-sm.jpg"
    }]
  }
}, {
  "id": 9,
  "name": "Sketchbook",
  "thumb": "/static/img/Sketchbook-thumb.jpg",
  "previewImage": "/static/img/Sketchbook-Preview.jpg",
  "previewBlurb": "Lorem ipsum dolor sit amet adipiscing elit consectetur",
  "previewCTA": "View project details",
  "details": {
    "hero": "/static/img/Sketchbook-Hero.jpg",
    "herosmall": "/static/img/Sketchbook-DetailsHero-sm.jpg",
    "about": "Design happens in sketchbooks, on loose leaves and napkins. The computer is simply a production tool. I sometimes get lucky and have a vision in my head where I can just go straight to my Mac, but most of the time, the genesis of ideas are started on paper.",
    "sections": [{
      "tag": "large",
      "p": "",
      "img": "/static/img/Sketchbook-Feature-Large.jpg",
      "imgsmall": "/static/img/Sketchbook-Feature-Large-sm.jpg"
    }, {
      "tag": "large",
      "p": "",
      "img": "/static/img/Sketchbook-Feature-Large-2.jpg",
      "imgsmall": "/static/img/Sketchbook-Feature-Large-2-sm.jpg"
    }, {
      "tag": "medium-rev",
      "p": "",
      "img": "/static/img/Sketchbook-Feature-1.jpg"
    }, {
      "tag": "medium-rev",
      "p": "",
      "img": "/static/img/Sketchbook-Feature-2.jpg"
    }, {
      "tag": "medium-rev",
      "p": "",
      "img": "/static/img/Sketchbook-Feature-3.jpg"
    }, {
      "tag": "medium-rev",
      "p": "",
      "img": "/static/img/Sketchbook-Feature-4.jpg"
    }]
  }
}];
/* harmony default export */ __webpack_exports__["a"] = (Pieces);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pieces__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var NavPieces =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavPieces, _React$Component);

  function NavPieces(props) {
    var _this;

    _classCallCheck(this, NavPieces);

    _this = _possibleConstructorReturn(this, (NavPieces.__proto__ || Object.getPrototypeOf(NavPieces)).call(this, props));
    _this.state = {
      "pieces": []
    };
    _this.state = {
      "count": Number()
    };
    _this.state = {
      "screenWidth": Number()
    };
    return _this;
  }

  _createClass(NavPieces, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        pieces: __WEBPACK_IMPORTED_MODULE_2__Pieces__["a" /* default */]
      });
      this.setState({
        count: Number(__WEBPACK_IMPORTED_MODULE_2__Pieces__["a" /* default */].length)
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        screenWidth: window.innerWidth
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var factor;
      this.state.screenWidth >= 1024 ? factor = Number(.25) : factor = Number(.6);
      var containerWidth = "".concat(Number(this.state.screenWidth) * factor * Number(this.state.count) + this.state.count * 32, "px");
      var active = "";
      var pieceData = this.state.pieces;
      var pieceDisplay = pieceData.map(function (piece) {
        piece.id === _this2.props.id ? active = "active" : active = "";
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "jsx-2466460422" + " " + "piece-container ".concat(active)
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "/work?id=".concat(piece.id),
          className: "jsx-2466460422"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: piece.thumb,
          className: "jsx-2466460422"
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: "2466460422",
          css: [".piece-container.jsx-2466460422{display:inline-block;width:25vw;margin:0 16px;}", ".piece-container.jsx-2466460422 img.jsx-2466460422{width:100%;}", ".piece-container.jsx-2466460422 a.jsx-2466460422{font-family:\"ajcFont\";font-style:normal;}", ".active.jsx-2466460422{border-top:6px solid #F5D123;padding-top:8px;}", ".active.jsx-2466460422 img.jsx-2466460422{opacity:.5;}", "@media screen and (max-width:500px){.piece-container.jsx-2466460422{width:60vw;}}"]
        }));
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4066656779", [containerWidth]]]) + " " + "slide-container"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4066656779", [containerWidth]]]) + " " + "pieces-container"
      }, pieceDisplay), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4066656779",
        css: [".slide-container.__jsx-style-dynamic-selector{position:relative;padding:0 0 3em;overflow-x:scroll;-webkit-overflow-scrolling:touch;}", ".pieces-container.__jsx-style-dynamic-selector{width:".concat(containerWidth, ";}"), "@media screen and (max-width:1024px){.slide-container.__jsx-style-dynamic-selector{padding-bottom:1.5em;}}"],
        dynamic: [containerWidth]
      }));
    }
  }]);

  return NavPieces;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (NavPieces);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-typekit"
var external__react_typekit_ = __webpack_require__(7);
var external__react_typekit__default = /*#__PURE__*/__webpack_require__.n(external__react_typekit_);

// CONCATENATED MODULE: ./components/Header.js





var Header_Header = function Header() {
  return external__react__default.a.createElement("div", {
    className: "jsx-3384152417"
  }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-3384152417"
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-3384152417"
  }), external__react__default.a.createElement("title", {
    className: "jsx-3384152417"
  }, "Aaron J Cook Design \xB7 Columbus, OH")), external__react__default.a.createElement(external__react_typekit__default.a, {
    kitId: "sro1pcj"
  }), external__react__default.a.createElement(style__default.a, {
    styleId: "3384152417",
    css: ["@font-face{font-family:\"ajcFont\";font-weight:500;src:url('/static/fonts/akk-reg.otf');}", "@font-face{font-family:\"ajcFont\";font-weight:300;src:url('/static/fonts/akk-light.otf');}", "@font-face{font-family:\"ajcFont\";font-weight:700;src:url('/static/fonts/akk-bold.otf');}", "body{margin:0;padding-top:144px;font-family:\"ajcFont\",\"Helvetica\",\"Arial\";color:#4a4a4a;}", "*{box-sizing:border-box;}", "@-webkit-keyframes fade-in{from{opacity:0;-webkit-transform:translateY(-1.5%);-ms-transform:translateY(-1.5%);transform:translateY(-1.5%);}to{opacity:1;-webkit-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%);}}", "@keyframes fade-in{from{opacity:0;-webkit-transform:translateY(-1.5%);-ms-transform:translateY(-1.5%);transform:translateY(-1.5%);}to{opacity:1;-webkit-transform:translateY(0%);-ms-transform:translateY(0%);transform:translateY(0%);}}", ".nav-menu{position:absolute;top:0;width:100%;padding:12vh 0;background-color:rgba(255,255,255,.97);height:100vh;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:.5s;animation-duration:.5s;}", ".menu-button img{height:100%;}", "button:focus{outline-color:#f2f2f2;}", "section{height:80vh;margin:0 0 10vh;position:relative;}", "section.auto-height{height:auto;}", ".container{width:92%;max-width:1600px;margin:0 auto;height:100%;}", ".light-gray{background-color:#f2f2f2;}", ".grid{display:grid;}", ".col-2{grid-template-columns:1fr 1fr;}", ".col-3{grid-template-columns:1fr 1fr 1fr;}", ".col-4{grid-template-columns:1fr 1fr 1fr 1fr;}", ".col-5{grid-template-columns:1fr 1fr 1fr 1fr 1fr;}", ".row-2{grid-template-rows:1fr 1fr;}", ".row-3{grid-template-rows:1fr 1fr 1fr;}", ".column-gutter{grid-column-gap:32px;}", ".row-gutter{grid-row-gap:32px;}", ".align-center{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}", ".justify-center{justify-self:center;}", "a:link,a:active,a:visited{-webkit-text-decoration:none;text-decoration:none;color:#4a4a4a;font-family:\"freight-text-pro\";font-weight:400;font-style:italic;font-size:1.125em;-webkit-letter-spacing:.025em;-moz-letter-spacing:.025em;-ms-letter-spacing:.025em;letter-spacing:.025em;}", "a.button{border-bottom:2px solid #F5D123;}", "a.button.gray{border-bottom:2px solid #9b9b9b;}", "a.button:before{display:inline-block;content:'';background-color:#f5d123;width:1em;height:1em;margin-right:.5em;}", "a.button.gray:before{background-color:#9b9b9b;}", "a.button:hover{opacity:0.65;}", "h2{font-size:2em;font-weight:500;-webkit-letter-spacing:.02em;-moz-letter-spacing:.02em;-ms-letter-spacing:.02em;letter-spacing:.02em;}", "h3{font-size:1.5em;font-weight:500;text-transform:uppercase;}", "p{font-size:1.5em;font-weight:300;line-height:1.75em;}", ".statistic{display:block;font-weight:300;font-size:6em;line-height:1em;color:#F5D123;}", ".caption{font-weight:500;font-size:.875em;-webkit-letter-spacing:.03em;-moz-letter-spacing:.03em;-ms-letter-spacing:.03em;letter-spacing:.03em;text-transform:uppercase;color:#F5D123;}", "@media screen and (max-width:1440px){p{font-size:1.25em;}.col-4{grid-template-columns:1fr 1fr 1fr 1fr !important;}}", "@media screen and (max-width:600px){body{padding-top:88px;}header{height:88px !important;min-height:64px !important;}section{margin:0 0 5vh;}.container{width:92%;}.col-2,.col-3,.col-4,.col-5{grid-template-columns:1fr 1fr !important;}.column-gutter{grid-column-gap:20px;}.row-gutter{grid-row-gap:20px;}h2{font-size:1.25rem !important;}h3{font-size:1.125rem !important;}p{font-size:1em;}.statistic{font-size:4em;}.previews-container{grid-template-columns:1fr !important;}}"]
  }));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Footer.js




var Footer_Footer = function Footer() {
  return external__react__default.a.createElement("footer", {
    className: "jsx-3965721541"
  }, external__react__default.a.createElement("div", {
    className: "jsx-3965721541" + " " + "container"
  }, external__react__default.a.createElement("div", {
    className: "jsx-3965721541"
  }, external__react__default.a.createElement("p", {
    className: "jsx-3965721541"
  }, "Aaron J Cook Design \xB7 Columbus, OH"), external__react__default.a.createElement("p", {
    className: "jsx-3965721541" + " " + "copyright"
  }, "\xA9 All rights reserved.")), external__react__default.a.createElement("div", {
    className: "jsx-3965721541" + " " + "contacts"
  }, external__react__default.a.createElement("a", {
    href: "https://www.linkedin.com/in/aaronjcook",
    target: "blank",
    className: "jsx-3965721541"
  }, external__react__default.a.createElement("button", {
    type: "button",
    target: "blank",
    className: "jsx-3965721541"
  }, external__react__default.a.createElement("img", {
    src: "/static/img/linkedin-ico.svg",
    className: "jsx-3965721541"
  }))), external__react__default.a.createElement(link__default.a, {
    href: "mailto:ajcook4@gmail.com"
  }, external__react__default.a.createElement("a", {
    className: "jsx-3965721541"
  }, external__react__default.a.createElement("button", {
    type: "button",
    className: "jsx-3965721541"
  }, external__react__default.a.createElement("img", {
    src: "/static/img/email-ico.svg",
    className: "jsx-3965721541"
  })))), external__react__default.a.createElement(link__default.a, {
    href: "tel:614-432-0778"
  }, external__react__default.a.createElement("a", {
    className: "jsx-3965721541"
  }, external__react__default.a.createElement("button", {
    type: "button",
    className: "jsx-3965721541"
  }, external__react__default.a.createElement("img", {
    src: "/static/img/phone-ico.svg",
    className: "jsx-3965721541"
  })))))), external__react__default.a.createElement(style__default.a, {
    styleId: "3965721541",
    css: ["footer.jsx-3965721541{background-color:#f2f2f2;padding:2em 0;}", "button.jsx-3965721541{border:none;background:none;margin:0 3em;}", "button.jsx-3965721541:hover{cursor:pointer;}", "button.jsx-3965721541 img.jsx-3965721541{width:40px;}", ".container.jsx-3965721541{width:92%;max-width:1600px;margin:0 auto;height:100%;display:grid;grid-template-columns:1fr 1fr;}", "p.jsx-3965721541{text-transform:uppercase;font-weight:500;margin:.25em 0;}", ".copyright.jsx-3965721541{font-family:\"freight-text-pro\";font-weight:300;font-style:italic;font-size:1.125em;-webkit-letter-spacing:.06em;-moz-letter-spacing:.06em;-ms-letter-spacing:.06em;letter-spacing:.06em;text-transform:none;}", ".contacts.jsx-3965721541{text-align:right;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}", "@media screen and (max-width:1440px){button.jsx-3965721541{margin:0 3em;}}", "@media screen and (max-width:1024px){button.jsx-3965721541 img.jsx-3965721541{width:30px;}.contacts.jsx-3965721541{padding:20px 0 0;}.copyright.jsx-3965721541{font-size:1em;}}", "@media screen and (max-width:600px){button.jsx-3965721541{margin:0 1em;}.container.jsx-3965721541{grid-template-columns:1fr;text-align:center;}.contacts.jsx-3965721541{text-align:center;}}"]
  }));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./components/NavPieces.js
var NavPieces = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Menu.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Menu_NavMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavMenu, _React$Component);

  function NavMenu(props) {
    _classCallCheck(this, NavMenu);

    return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).call(this, props));
  }

  _createClass(NavMenu, [{
    key: "render",
    value: function render() {
      var isOpen = this.props.open;
      var output = isOpen ? external__react__default.a.createElement("div", {
        className: "jsx-3268273774" + " " + "nav-menu"
      }, external__react__default.a.createElement("div", {
        className: "jsx-3268273774" + " " + "container auto-height work-section"
      }, external__react__default.a.createElement("h2", {
        className: "jsx-3268273774"
      }, "Work")), external__react__default.a.createElement("div", {
        className: "jsx-3268273774"
      }, external__react__default.a.createElement(NavPieces["a" /* default */], {
        id: this.props.id
      })), external__react__default.a.createElement("div", {
        className: "jsx-3268273774" + " " + "container grid col-2 column-gutter"
      }, external__react__default.a.createElement("div", {
        className: "jsx-3268273774" + " " + "responsive-grid"
      }, external__react__default.a.createElement("h2", {
        className: "jsx-3268273774"
      }, "About"), external__react__default.a.createElement(link__default.a, {
        href: "/about"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3268273774"
      }, external__react__default.a.createElement("p", {
        className: "jsx-3268273774" + " " + "menu-link"
      }, "About Me"))), external__react__default.a.createElement("a", {
        href: "/static/ajcook-cv-2018.pdf",
        download: true,
        className: "jsx-3268273774"
      }, external__react__default.a.createElement("p", {
        className: "jsx-3268273774" + " " + "menu-link"
      }, "Download R\xE9sum\xE9"))), external__react__default.a.createElement("div", {
        className: "jsx-3268273774" + " " + "responsive-grid contact"
      }, external__react__default.a.createElement("div", {
        className: "jsx-3268273774" + " " + "grid col-3 column-gutter contact-items"
      }, external__react__default.a.createElement("div", {
        className: "jsx-3268273774"
      }, external__react__default.a.createElement(link__default.a, {
        href: "https://www.linkedin.com/in/aaronjcook"
      }, external__react__default.a.createElement("a", {
        href: "https://www.linkedin.com/in/aaronjcook",
        target: "blank",
        className: "jsx-3268273774"
      }, external__react__default.a.createElement("img", {
        src: "/static/img/linkedin-ico.svg",
        className: "jsx-3268273774"
      }), external__react__default.a.createElement("br", {
        className: "jsx-3268273774"
      }), external__react__default.a.createElement("p", {
        className: "jsx-3268273774"
      }, "Linked In")))), external__react__default.a.createElement("div", {
        className: "jsx-3268273774"
      }, external__react__default.a.createElement(link__default.a, {
        href: "mailto:ajcook4@gmail.com"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3268273774"
      }, external__react__default.a.createElement("img", {
        src: "/static/img/email-ico.svg",
        className: "jsx-3268273774"
      }), external__react__default.a.createElement("br", {
        className: "jsx-3268273774"
      }), external__react__default.a.createElement("p", {
        className: "jsx-3268273774"
      }, "ajcook4@gmail.com")))), external__react__default.a.createElement("div", {
        className: "jsx-3268273774"
      }, external__react__default.a.createElement(link__default.a, {
        href: "tel:614-432-0778"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3268273774"
      }, external__react__default.a.createElement("img", {
        src: "/static/img/phone-ico.svg",
        className: "jsx-3268273774"
      }), external__react__default.a.createElement("br", {
        className: "jsx-3268273774"
      }), external__react__default.a.createElement("p", {
        className: "jsx-3268273774"
      }, "614\xB7432\xB70778"))))))), external__react__default.a.createElement(style__default.a, {
        styleId: "3268273774",
        css: ["h2.jsx-3268273774{font-size:3em;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;border-bottom:4px solid #F5D123;}", ".container.jsx-3268273774{height:auto;}", ".contact-items.jsx-3268273774{text-align:center;margin-top:3em;}", ".responsive-grid.contact.jsx-3268273774{-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}", "a.jsx-3268273774{font-family:\"ajcFont\";font-style:normal;}", ".menu-link.jsx-3268273774:before{display:inline-block;content:'';width:24px;height:24px;background-color:#F5D123;margin-right:24px;}", ".contact-items.jsx-3268273774 img.jsx-3268273774{width:40px;height:40px;}", "@media screen and (max-width:1024px){.responsive-grid.jsx-3268273774{grid-column:span 2;}.contact-items.jsx-3268273774{font-size:.75em;font-weight:500 !important;grid-template-columns:1fr 1fr 1fr !important;}.work-section.jsx-3268273774 h2.jsx-3268273774{margin-top:1em;}h2.jsx-3268273774{margin-top:0;}.menu-link.jsx-3268273774:before{width:16px;height:16px;margin-right:8px;}p.jsx-3268273774{margin:.5em 0;}.contact-items.jsx-3268273774 img.jsx-3268273774{width:30px;height:30px;}}"]
      })) : '';
      return external__react__default.a.createElement("div", null, output);
    }
  }]);

  return NavMenu;
}(external__react__default.a.Component);

/* harmony default export */ var Menu = (Menu_NavMenu);
// CONCATENATED MODULE: ./components/Navigation.js


function Navigation__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Navigation__typeof = function _typeof(obj) { return typeof obj; }; } else { Navigation__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Navigation__typeof(obj); }

function Navigation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Navigation__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Navigation__createClass(Constructor, protoProps, staticProps) { if (protoProps) Navigation__defineProperties(Constructor.prototype, protoProps); if (staticProps) Navigation__defineProperties(Constructor, staticProps); return Constructor; }

function Navigation__possibleConstructorReturn(self, call) { if (call && (Navigation__typeof(call) === "object" || typeof call === "function")) { return call; } return Navigation__assertThisInitialized(self); }

function Navigation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Navigation__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Navigation_NavBar =
/*#__PURE__*/
function (_React$Component) {
  Navigation__inherits(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    Navigation__classCallCheck(this, NavBar);

    _this = Navigation__possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.toggleMenu = _this.toggleMenu.bind(Navigation__assertThisInitialized(_this));
    return _this;
  }

  Navigation__createClass(NavBar, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isOpen = this.state.isOpen;
      var buttonImage = isOpen ? external__react__default.a.createElement("img", {
        src: "/static/img/close-menu-button.svg",
        alt: "Close Menu"
      }) : external__react__default.a.createElement("img", {
        src: "/static/img/menu-icon.svg",
        alt: "Open Menu"
      });
      return external__react__default.a.createElement("header", {
        className: "jsx-2568863843"
      }, external__react__default.a.createElement("a", {
        href: "/",
        className: "jsx-2568863843"
      }, external__react__default.a.createElement("img", {
        src: "/static/img/ajc-monogram-dot.svg",
        alt: "Aaron J Cook",
        className: "jsx-2568863843" + " " + "site-logo"
      })), external__react__default.a.createElement("a", {
        className: "jsx-2568863843"
      }, external__react__default.a.createElement("button", {
        type: "button",
        onClick: this.toggleMenu,
        className: "jsx-2568863843" + " " + "menu-button"
      }, buttonImage)), external__react__default.a.createElement(Menu, {
        open: this.state.isOpen
      }), external__react__default.a.createElement(style__default.a, {
        styleId: "2568863843",
        css: [".site-logo.jsx-2568863843{position:absolute;}", ".site-logo.jsx-2568863843,.menu-button.jsx-2568863843{z-index:900;}", "#menu-button.jsx-2568863843 .st0.jsx-2568863843{fill:#ffffff;}", "header.jsx-2568863843{position:fixed;top:0;width:100%;height:9vw;min-height:88px;max-height:144px;z-index:1000000;}", "header.jsx-2568863843 *.jsx-2568863843{height:100%;}", ".menu-button.jsx-2568863843{position:absolute;z-index:100;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);margin:0;padding:0;background:none;border:0px;}", ".menu-button.jsx-2568863843 img.jsx-2568863843{height:100%;mix-blend-mode:exclusion;}"]
      }));
    }
  }]);

  return NavBar;
}(external__react__default.a.Component); //export the React component like it was a Next component


/* harmony default export */ var Navigation = (Navigation_NavBar);
// CONCATENATED MODULE: ./components/MyLayout.js
function MyLayout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyLayout__typeof = function _typeof(obj) { return typeof obj; }; } else { MyLayout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyLayout__typeof(obj); }

function MyLayout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MyLayout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MyLayout__createClass(Constructor, protoProps, staticProps) { if (protoProps) MyLayout__defineProperties(Constructor.prototype, protoProps); if (staticProps) MyLayout__defineProperties(Constructor, staticProps); return Constructor; }

function MyLayout__possibleConstructorReturn(self, call) { if (call && (MyLayout__typeof(call) === "object" || typeof call === "function")) { return call; } return MyLayout__assertThisInitialized(self); }

function MyLayout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MyLayout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MyLayout_Layout =
/*#__PURE__*/
function (_React$Component) {
  MyLayout__inherits(Layout, _React$Component);

  function Layout(props) {
    MyLayout__classCallCheck(this, Layout);

    return MyLayout__possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
  }

  MyLayout__createClass(Layout, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "wrapper"
      }, external__react__default.a.createElement(components_Header, null), external__react__default.a.createElement(Navigation, null), this.props.children, external__react__default.a.createElement(components_Footer, null));
    }
  }]);

  return Layout;
}(external__react__default.a.Component);

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-typekit");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/MyLayout.js + 4 modules
var MyLayout = __webpack_require__(5);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/WorkHero.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var WorkHero_WorkHero =
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
      return external__react__default.a.createElement("section", {
        style: {
          backgroundImage: "url(".concat(bgImage, ")")
        },
        className: "jsx-1291583180"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1291583180" + " " + "hero-content container col-3"
      }, this.props.children, external__react__default.a.createElement("div", {
        className: "jsx-1291583180" + " " + "more"
      }, external__react__default.a.createElement("img", {
        src: "/static/img/more-arrow.svg",
        className: "jsx-1291583180"
      }))), external__react__default.a.createElement(style__default.a, {
        styleId: "1757729316",
        css: ["section.jsx-1291583180{top:-144px;background:#f1f1f1;width:100%;height:100vh;background-repeat:no-repeat;background-size:cover;background-position:bottom;}", ".hero-content.jsx-1291583180{display:grid;grid-template-rows:40% 40% 20%;height:100vh;}", ".more.jsx-1291583180{grid-row-start:3;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;-webkit-animation-name:more-arrow-jsx-1291583180;animation-name:more-arrow-jsx-1291583180;-webkit-animation-duration:3.75s;animation-duration:3.75s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:.5;}", "@-webkit-keyframes more-arrow-jsx-1291583180{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-16px);-ms-transform:translateY(-16px);transform:translateY(-16px);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes more-arrow-jsx-1291583180{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-16px);-ms-transform:translateY(-16px);transform:translateY(-16px);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}"]
      }), external__react__default.a.createElement(style__default.a, {
        styleId: "3166082657",
        css: ["h1{font-weight:300;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;font-size:6em;line-height:.92em;grid-column:span 3;margin:0;color:white;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}", ".overview{color:white;grid-column:span 1;}", "@media screen and (max-width:1440px){h1{font-size:4.5em;}}", "@media screen and (max-width:600px){h1{font-size:3em;}section{top:-88px !important;height:100vh;background-position:center !important;}.hero-content{-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;grid-template-rows:65% 25% 10% !important;}.more img{height:4vh;}.overview{grid-column:span 2;}}"]
      }));
    }
  }]);

  return WorkHero;
}(external__react__default.a.Component);

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
/* harmony default export */ var components_WorkHero = (WorkHero_WorkHero);
// CONCATENATED MODULE: ./components/MultiColumnItem.js



var MultiColumnItem_MultiColumnItem = function MultiColumnItem(props) {
  return external__react__default.a.createElement("div", {
    className: "jsx-851723266" + " " + "item"
  }, external__react__default.a.createElement("img", {
    src: "".concat(props.img),
    className: "jsx-851723266"
  }), external__react__default.a.createElement("h3", {
    className: "jsx-851723266"
  }, props.caption), external__react__default.a.createElement("p", {
    className: "jsx-851723266"
  }, props.copy), external__react__default.a.createElement(style__default.a, {
    styleId: "851723266",
    css: [".item.jsx-851723266{grid-column:span 1;}", "p.jsx-851723266,h3.jsx-851723266{padding:0 14%;line-height:1.25em;}", "img.jsx-851723266{display:block;width:100%;}"]
  }));
};

/* harmony default export */ var components_MultiColumnItem = (MultiColumnItem_MultiColumnItem);
// CONCATENATED MODULE: ./components/ContentMultiColumn.js




var ContentMultiColumn_ContentMultiColumn = function ContentMultiColumn(props) {
  return external__react__default.a.createElement("section", {
    className: "jsx-747730336" + " " + "auto-height"
  }, external__react__default.a.createElement("div", {
    className: "jsx-747730336" + " " + "container grid col-3"
  }, props.children), external__react__default.a.createElement(style__default.a, {
    styleId: "3697373088",
    css: []
  }), external__react__default.a.createElement(style__default.a, {
    styleId: "3500497417",
    css: ["section.jsx-747730336{margin-bottom:15vh;}", "@media screen and (max-width:600px){section.jsx-747730336{margin-bottom:10vh;}.container.jsx-747730336{grid-template-columns:1fr !important;}p.jsx-747730336{line-height:1.25em !important;}}"]
  }));
};

/* harmony default export */ var components_ContentMultiColumn = (ContentMultiColumn_ContentMultiColumn);
// CONCATENATED MODULE: ./components/ContentLargeFeature.js


function ContentLargeFeature__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ContentLargeFeature__typeof = function _typeof(obj) { return typeof obj; }; } else { ContentLargeFeature__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ContentLargeFeature__typeof(obj); }

function ContentLargeFeature__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContentLargeFeature__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ContentLargeFeature__createClass(Constructor, protoProps, staticProps) { if (protoProps) ContentLargeFeature__defineProperties(Constructor.prototype, protoProps); if (staticProps) ContentLargeFeature__defineProperties(Constructor, staticProps); return Constructor; }

function ContentLargeFeature__possibleConstructorReturn(self, call) { if (call && (ContentLargeFeature__typeof(call) === "object" || typeof call === "function")) { return call; } return ContentLargeFeature__assertThisInitialized(self); }

function ContentLargeFeature__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ContentLargeFeature__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ContentLargeFeature_ContentLargeFeature =
/*#__PURE__*/
function (_React$Component) {
  ContentLargeFeature__inherits(ContentLargeFeature, _React$Component);

  function ContentLargeFeature(props) {
    ContentLargeFeature__classCallCheck(this, ContentLargeFeature);

    return ContentLargeFeature__possibleConstructorReturn(this, (ContentLargeFeature.__proto__ || Object.getPrototypeOf(ContentLargeFeature)).call(this, props));
  }

  ContentLargeFeature__createClass(ContentLargeFeature, [{
    key: "render",
    value: function render() {
      var bgImage;
      this.props.size === 'large' ? bgImage = this.props.hero : bgImage = this.props.herosmall;
      return external__react__default.a.createElement("section", {
        className: "jsx-1128585507"
      }, external__react__default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(bgImage, ")")
        },
        className: "jsx-1128585507" + " " + "container light-gray grid col-3"
      }, external__react__default.a.createElement("div", {
        className: "jsx-1128585507" + " " + "align-center"
      }, external__react__default.a.createElement("p", {
        className: "jsx-1128585507"
      }, this.props.children))), external__react__default.a.createElement(style__default.a, {
        styleId: "1128585507",
        css: ["p.jsx-1128585507{padding:0 14%;}", ".container.jsx-1128585507{background-position:center;background-size:cover;}", "section.jsx-1128585507{margin-bottom:15vh;}", "@media screen and (max-width:1440px){.container.jsx-1128585507{background-position:75% 45%;}}", "@media screen and (max-width:600px){.align-center.jsx-1128585507{grid-column:span 3;-webkit-align-self:end;-ms-flex-item-align:end;align-self:end;}p.jsx-1128585507{padding:20px 12.5% 30px;margin-bottom:0;}section.jsx-1128585507{margin-bottom:10vh;}.container.jsx-1128585507{background-size:cover;background-position:center;}}"]
      }));
    }
  }]);

  return ContentLargeFeature;
}(external__react__default.a.Component);

/* harmony default export */ var components_ContentLargeFeature = (ContentLargeFeature_ContentLargeFeature);
// CONCATENATED MODULE: ./components/ContentMediumFeature.js



var ContentMediumFeature_ContentMediumFeature = function ContentMediumFeature(props) {
  return external__react__default.a.createElement("section", {
    className: "auto-height"
  }, external__react__default.a.createElement("div", {
    className: "jsx-2186348229" + " " + "container grid col-3"
  }, external__react__default.a.createElement("div", {
    className: "jsx-2186348229" + " " + "image"
  }, external__react__default.a.createElement("img", {
    src: "".concat(props.hero),
    className: "jsx-2186348229"
  })), external__react__default.a.createElement("p", {
    className: "jsx-2186348229" + " " + "align-center"
  }, props.children), external__react__default.a.createElement(style__default.a, {
    styleId: "2186348229",
    css: [".image.jsx-2186348229{grid-column:span 2;text-align:center;}", "p.jsx-2186348229{padding:14%;background-color:#f2f2f2;}", "section.jsx-2186348229{margin-bottom:15vh;}", "@media screen and (max-width:1440px){img.jsx-2186348229{width:85%;}}", "@media screen and (max-width:600px){section.jsx-2186348229{margin-bottom:10vh;}.container.jsx-2186348229{grid-template-columns:1fr !important;}p.jsx-2186348229{padding:20px;}img.jsx-2186348229{width:100%;}}"]
  })));
};

/* harmony default export */ var components_ContentMediumFeature = (ContentMediumFeature_ContentMediumFeature);
// CONCATENATED MODULE: ./components/ContentMediumFeature-rev.js



var ContentMediumFeature_rev_ContentMediumFeatureRev = function ContentMediumFeatureRev(props) {
  return external__react__default.a.createElement("section", {
    className: "auto-height"
  }, external__react__default.a.createElement("div", {
    className: "jsx-380780617" + " " + "container grid col-3"
  }, external__react__default.a.createElement("p", {
    className: "jsx-380780617" + " " + "align-center"
  }, props.children), external__react__default.a.createElement("div", {
    className: "jsx-380780617" + " " + "image"
  }, external__react__default.a.createElement("img", {
    src: "".concat(props.hero),
    className: "jsx-380780617"
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "380780617",
    css: [".image.jsx-380780617{grid-column:span 2;text-align:center;}", "p.jsx-380780617{padding:14%;}", "section.jsx-380780617{margin-bottom:15vh;}", "@media screen and (max-width:1440px){img.jsx-380780617{width:85%;}}", "@media screen and (max-width:600px){section.jsx-380780617{margin-bottom:10vh;}.container.jsx-380780617{grid-template-columns:1fr !important;}p.jsx-380780617{padding:20px;}img.jsx-380780617{width:100%;}}"]
  })));
};

/* harmony default export */ var ContentMediumFeature_rev = (ContentMediumFeature_rev_ContentMediumFeatureRev);
// CONCATENATED MODULE: ./components/ContentText.js



var ContentText_ContentText = function ContentText(props) {
  return external__react__default.a.createElement("section", {
    className: "jsx-646193038" + " " + "auto-height"
  }, external__react__default.a.createElement("div", {
    className: "jsx-646193038" + " " + "container grid col-4"
  }, external__react__default.a.createElement("div", {
    className: "jsx-646193038" + " " + "col"
  }, external__react__default.a.createElement("h3", {
    className: "jsx-646193038"
  }, props.headline), external__react__default.a.createElement("p", {
    className: "jsx-646193038"
  }, props.copy), props.children)), external__react__default.a.createElement(style__default.a, {
    styleId: "646193038",
    css: [".container.jsx-646193038{border-top:1px solid #d2d2d2;border-bottom:1px solid #d2d2d2;padding:72px 0;}", ".col.jsx-646193038{grid-column-start:2;grid-column-end:span 2;}", "section.jsx-646193038{margin-bottom:15vh;}", "@media screen and (max-width:1440px){.container.jsx-646193038{padding:40px 0;}}", "@media screen and (max-width:600px){.col.jsx-646193038{grid-column-start:1;}.container.jsx-646193038{padding:24px 0;}section.jsx-646193038{margin-bottom:10vh;}}"]
  }));
};

/* harmony default export */ var components_ContentText = (ContentText_ContentText);
// EXTERNAL MODULE: ./components/Pieces.js
var Pieces = __webpack_require__(3);

// EXTERNAL MODULE: ./components/NavPieces.js
var NavPieces = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/work.js
function work__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { work__typeof = function _typeof(obj) { return typeof obj; }; } else { work__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return work__typeof(obj); }

function work__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function work__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function work__createClass(Constructor, protoProps, staticProps) { if (protoProps) work__defineProperties(Constructor.prototype, protoProps); if (staticProps) work__defineProperties(Constructor, staticProps); return Constructor; }

function work__possibleConstructorReturn(self, call) { if (call && (work__typeof(call) === "object" || typeof call === "function")) { return call; } return work__assertThisInitialized(self); }

function work__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function work__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var work_Work =
/*#__PURE__*/
function (_React$Component) {
  work__inherits(Work, _React$Component);

  function Work(props) {
    var _this;

    work__classCallCheck(this, Work);

    _this = work__possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this, props));
    _this.state = {
      "Piece": []
    };
    _this.state = {
      "Sections": []
    };
    _this.state = {
      "PieceID": Number()
    };
    _this.placeComponent = _this.placeComponent.bind(work__assertThisInitialized(_this));
    _this.state = {
      "Screen": ""
    };
    return _this;
  }

  work__createClass(Work, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.props.url.query.id - 1;
      var piece = Object.keys(Pieces["a" /* default */]).map(function (key) {
        Number(key) === id ? _this2.setState({
          Piece: Pieces["a" /* default */][key]
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
          return external__react__default.a.createElement(components_ContentMultiColumn, null, external__react__default.a.createElement(components_MultiColumnItem, {
            img: this.state.Piece.details.sections[key].img1,
            caption: this.state.Piece.details.sections[key].caption1,
            copy: this.state.Piece.details.sections[key].copy1
          }), external__react__default.a.createElement(components_MultiColumnItem, {
            img: this.state.Piece.details.sections[key].img2,
            caption: this.state.Piece.details.sections[key].caption2,
            copy: this.state.Piece.details.sections[key].copy2
          }), external__react__default.a.createElement(components_MultiColumnItem, {
            img: this.state.Piece.details.sections[key].img3,
            caption: this.state.Piece.details.sections[key].caption3,
            copy: this.state.Piece.details.sections[key].copy3
          }));

        case 'large':
          return external__react__default.a.createElement(components_ContentLargeFeature, {
            hero: this.state.Piece.details.sections[key].img,
            herosmall: this.state.Piece.details.sections[key].imgsmall,
            size: this.state.Screen
          }, this.state.Piece.details.sections[key].p);

        case 'medium':
          return external__react__default.a.createElement(components_ContentMediumFeature, {
            hero: this.state.Piece.details.sections[key].img
          }, this.state.Piece.details.sections[key].p);

        case 'medium-rev':
          return external__react__default.a.createElement(ContentMediumFeature_rev, {
            hero: this.state.Piece.details.sections[key].img
          }, this.state.Piece.details.sections[key].p);

        case 'text':
          return external__react__default.a.createElement(components_ContentText, {
            headline: this.state.Piece.details.sections[key].headline,
            copy: this.state.Piece.details.sections[key].copy
          }, this.state.Piece.details.sections[key].result ? external__react__default.a.createElement("p", null, external__react__default.a.createElement("span", {
            className: "statistic"
          }, this.state.Piece.details.sections[key].result), external__react__default.a.createElement("span", {
            className: "caption"
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
      return external__react__default.a.createElement(MyLayout["a" /* default */], null, external__react__default.a.createElement(components_WorkHero, {
        hero: "".concat(piece.details.hero),
        herosmall: "".concat(piece.details.herosmall),
        size: this.state.Screen
      }, external__react__default.a.createElement("h1", null, piece.name), external__react__default.a.createElement("div", {
        className: "overview"
      }, external__react__default.a.createElement("p", null, piece.details.about))), Object.keys(piece.details.sections).map(function (key) {
        sectionTag = section[Number(key)].tag;
        sectionId = Number(key);
        return _this3.placeComponent(sectionTag, sectionId);
      }), external__react__default.a.createElement("h2", {
        className: "container"
      }, "View Other Work"), external__react__default.a.createElement(NavPieces["a" /* default */], {
        id: this.state.PieceID
      }));
    }
  }]);

  return Work;
}(external__react__default.a.Component);

/* harmony default export */ var work = __webpack_exports__["default"] = (work_Work);

/***/ })
/******/ ]);