"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    object-fit: contain;\n    height: ", ";\n    width: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AckoDriveLogo = '../../media/Components/logo.png';

var LogoContainer = _styledComponents["default"].div(_templateObject());

var Image = _styledComponents["default"].img(_templateObject2(), function (props) {
  return props.height || '40px';
}, function (props) {
  return props.width || '240px';
});

var Logo = function Logo(props) {
  return _react["default"].createElement(LogoContainer, null, _react["default"].createElement(Image, {
    src: AckoDriveLogo,
    height: props.height,
    width: props.width,
    alt: 'Logo'
  }));
};

var _default = Logo;
exports["default"] = _default;