"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: ", ";\n    width: ", ";\n    background: white;\n    margin: 10% auto;   \n    border-radius: 8px;\n    animation: ", " ease 1s;\n    animation-iteration-count: 1;\n    animation-fill-mode:forwards;\n    @media (max-width: 700px) {\n        max-width: 100%;\n        width: 100%;\n        height: 100%;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    overflow: auto;\n    position: fixed;\n    width: 100%;\n    min-height: 100%;\n    top:50%;\n    left:50%;\n    transform: translate(-50%,-50%);\n    z-index: 999;\n    opacity: 0.1;\n    animation: ", " ease 0.5s;\n    animation-iteration-count: 1;\n    animation-fill-mode:forwards;\n\n    @media (max-width: 700px) {\n        width: 100%;\n        height: 100%;\n        max-width: 100%;\n        max-height: 100%;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity:0;\n    }\n    100% {\n        opacity:1;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity:0;\n        transform:  translate(0%,100%);\n    }\n    100% {\n        opacity:1;\n        transform:  translate(0%,-5%);\n}   \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SlideUpAnimation = (0, _styledComponents.keyframes)(_templateObject());
var FadeInAnimation = (0, _styledComponents.keyframes)(_templateObject2());

var Modal = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.show ? 'block' : 'none';
}, FadeInAnimation);

var ModalContent = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.height || '100%';
}, function (props) {
  return props.width || '100%';
}, SlideUpAnimation);

var FullPageModalWrapper = function FullPageModalWrapper(_ref) {
  var children = _ref.children,
      show = _ref.show,
      height = _ref.height,
      width = _ref.width;
  return _react["default"].createElement(Modal, {
    show: show
  }, _react["default"].createElement(ModalContent, {
    height: height,
    width: width
  }, children));
};

FullPageModalWrapper.propTypes = {
  children: _propTypes["default"].node.isRequired,
  show: _propTypes["default"].bool.isRequired
};
var _default = FullPageModalWrapper;
exports["default"] = _default;