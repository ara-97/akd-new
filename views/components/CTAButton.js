"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tcolor: #FFFFFF;\n\tfont-family: Inter;\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tline-height: 50px;\n    text-align: center;\n    vertical-align: middle;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\theight: 50px;\n    width: 325px;\n    cursor: pointer;\n    margin: 0 auto;\n\tborder-radius: 8px;\n\tbackground-color: #30BE76;\n    &:hover{\n        background: #1BAF64;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: ", ";\n    bottom: ", ";\n    padding: ", ";\n    background: #fff;\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CTAWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.fixed ? 'fixed' : 'relative';
}, function (props) {
  return props.fixed ? '0' : 'initial';
}, function (props) {
  return props.fixed ? '20px 0' : '0px';
});

var ButtonWrapper = _styledComponents["default"].div(_templateObject2());

var CTAText = _styledComponents["default"].div(_templateObject3());

var CTAButton = function CTAButton(props) {
  return _react["default"].createElement(CTAWrapper, {
    fixed: props.fixed
  }, _react["default"].createElement(ButtonWrapper, {
    onClick: props.onClickProps
  }, _react["default"].createElement(CTAText, null, props.children)));
};

var _default = CTAButton;
exports["default"] = _default;