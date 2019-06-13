"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeMainContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background:red;\n    @media (max-width:700px){\n        background:green;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeMainContainer = _styledComponents["default"].div(_templateObject());

exports.HomeMainContainer = HomeMainContainer;