"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(903);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(949);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Header.tsx






function Header() {
  return /*#__PURE__*/jsx_runtime_.jsx(material_.AppBar, {
    position: "static",
    color: "primary",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Toolbar, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.IconButton, {
        edge: "start",
        className: "menuButton",
        color: "inherit",
        "aria-label": "menu",
        children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {})
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Typography, {
        variant: "h6",
        className: "title",
        children: "RCV"
      })]
    })
  });
}

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: external "@mui/material/colors"
const colors_namespaceObject = require("@mui/material/colors");
// EXTERNAL MODULE: external "react-cookie"
var external_react_cookie_ = __webpack_require__(311);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const theme = (0,material_.createTheme)({
  palette: {
    primary: {
      main: colors_namespaceObject.deepPurple[800]
    },
    secondary: {
      main: colors_namespaceObject.green[500]
    }
  }
});

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(material_.ThemeProvider, {
    theme: theme,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_cookie_.CookiesProvider, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 903:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 949:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 311:
/***/ ((module) => {

module.exports = require("react-cookie");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(138));
module.exports = __webpack_exports__;

})();