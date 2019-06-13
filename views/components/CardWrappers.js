"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: ", ";\n    width: ", ";\n    border-radius: 8px;\n    background: #fff;\n    box-shadow: 0 50px 80px 0 rgba(51,30,30,0.15);\n    @media(max-width: 700px){\n        height: ", ";\n        width: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.height || '300px';
}, function (props) {
  return props.width || '275px';
}, function (props) {
  return props.height || '100%';
}, function (props) {
  return props.width || '100%';
});

var CardContainer = function CardContainer(props) {
  return _react["default"].createElement(Container, {
    onClick: props.onCLickProps
  }, props.children);
};

var _default = CardContainer;
exports["default"] = _default;