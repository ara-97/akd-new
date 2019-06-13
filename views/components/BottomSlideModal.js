"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    height: 20px;\n    width: 20px;\n    cursor: pointer;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    vertical-align: middle;\n    line-height: 50px;\n    padding-left: 20px;\n\tcolor: #030F09;\n\tfont-family: Inter;\n\tfont-size: 20px;\n\tfont-weight: 500;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n    height: 50px;\n    margin-top: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    overflow: auto;\n    height: 100%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    bottom: 0;\n    padding-bottom: 20px;\n    border-radius: 20px 20px 0 0%;\n    background-color: #fff;\n    height: ", ";\n    width: 100%;\n    animation-name: slideIn;\n    animation-duration: 0.4s;\n    animation-name: ", ";\n    animation-duration: 0.4s\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    position: fixed; \n    z-index: 999; \n    left: 0;\n    top: 0;\n    width: 100%; \n    height: 100%; \n    overflow: auto; \n    background-color: rgba(40,41,40,0.3);\n    animation-name: ", "; \n    animation-duration: 0.4s;\n    animation-name: fadeIn;\n    animation-duration: 0.4s\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    from { opacity: 0 }\n    to { opacity: 1 }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    from {bottom: -300px; opacity: 0}\n    to {bottom: 0; opacity: 1}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Close = '../../media/Components/close.png';
var slideIn = (0, _styledComponents.keyframes)(_templateObject());
var fadeIn = (0, _styledComponents.keyframes)(_templateObject2());

var Modal = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.show ? 'block' : 'none';
}, fadeIn);

var ModalBody = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.modalHeight || '9%';
}, slideIn);

var ModalContent = _styledComponents["default"].div(_templateObject5());

var ModalHeader = _styledComponents["default"].div(_templateObject6());

var Heading = _styledComponents["default"].div(_templateObject7());

var CloseIcon = _styledComponents["default"].img(_templateObject8());

var CloseIconWrapper = _styledComponents["default"].div(_templateObject9());

var BottomSlideModalWrapper = function BottomSlideModalWrapper(props) {
  return _react["default"].createElement(Modal, {
    show: props.show
  }, _react["default"].createElement(ModalBody, {
    modalHeight: props.modalHeight
  }, _react["default"].createElement(ModalHeader, null, _react["default"].createElement(Heading, null, props.heading), _react["default"].createElement(CloseIconWrapper, null, _react["default"].createElement(CloseIcon, {
    src: Close,
    alt: 'Close',
    onClick: props.closeModal
  }))), _react["default"].createElement(ModalContent, null, props.children)));
};

var _default = BottomSlideModalWrapper;
exports["default"] = _default;