"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _ConfigureStore = _interopRequireDefault(require("../Redux/ConfigureStore"));

var _template = _interopRequireDefault(require("../../views/template"));

var _data = _interopRequireDefault(require("../../assets/data.json"));

var _App = _interopRequireDefault(require("../Containers/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var app = express(); // Serving static files

app.use('/assets', express["static"]('assets'));
app.use('/media', express["static"]('media')); // hide powered by express

app.disable('x-powered-by'); // start the server

app.listen(process.env.PORT || 3000);
var initialState = {
  isFetching: false,
  apps: _data["default"] // server rendered home page

};
app.get('/*', function (req, res) {
  // Configure the store with the initial state provided
  var store = (0, _ConfigureStore["default"])(initialState); // render the App store static markup ins content variable

  var content = (0, _server.renderToString)(_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, _react["default"].createElement(_reactRouterDom.StaticRouter, null, _react["default"].createElement(_App["default"], null)))); // Get a copy of store data to create the same store on client side 

  var preloadedState = store.getState();
  var response = (0, _template["default"])("Server Rendered Page", preloadedState, content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
});