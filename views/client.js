"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireWildcard(require("react-dom"));

var _reactRedux = require("react-redux");

var _ConfigureStore = _interopRequireDefault(require("./Redux/ConfigureStore"));

var _App = _interopRequireDefault(require("./Components/App"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Read the state sent with markup
var state = window.__STATE__; // delete the state from global window object

delete window.__STATE__; // reproduce the store used to render the page on server

var store = (0, _ConfigureStore["default"])(state);
/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

var jsx = _react["default"].createElement(_reactRedux.Provider, {
  store: store
}, _react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement(_App["default"], null)));

var app = document.getElementById("app");

_reactDom["default"].hydrate(jsx, app);