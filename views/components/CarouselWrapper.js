"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    word-break: break-word;\n    width: 300px;\n\topacity: 0.51;\n\tcolor: #242424;\n\tfont-family: Inter;\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 19px;\n    text-align: center;\n    background: #fff;\n    \n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tcolor: #242424;\n\tfont-family: Inter;\n\tfont-size: 22px;\n\tfont-weight: bold;\n\tline-height: 26px;\n    text-align: center;\n    background: #fff;\n    \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: 211px;\t\n    width: 344px;\n    margin: 15px 0;\n    object-fit: contain;\n    background: #fff;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px;\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid #582CDB;\n    border-radius: 50%;\n    height: 8px;\n    width: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CarouselImage = '../../media/Components/carouselImage1.png';

var Dot = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.active ? '#582CDB' : '#FFF';
});

var CarouselContainer = _styledComponents["default"].div(_templateObject2());

var Image = _styledComponents["default"].img(_templateObject3());

var Heading = _styledComponents["default"].p(_templateObject4());

var Info = _styledComponents["default"].div(_templateObject5());

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));

    _this.change = function (e) {
      var tempIndex = [0, 0, 0, 0, 0];
      tempIndex[e] = 1;

      _this.setState({
        dotIndex: tempIndex
      });
    };

    _this.state = {
      dotIndex: [1, 0, 0, 0, 0]
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      var index = this.state.dotIndex;
      var settings = {
        customPaging: function customPaging(i) {
          return _react["default"].createElement(Dot, {
            active: index[i]
          });
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return _react["default"].createElement(_reactSlick["default"], _extends({}, settings, {
        arrows: false,
        afterChange: this.change
      }), _react["default"].createElement(CarouselItem, null), _react["default"].createElement(CarouselItem, null));
    }
  }]);

  return Carousel;
}(_react.Component);

exports["default"] = Carousel;

var CarouselItem = function CarouselItem(props) {
  return _react["default"].createElement(CarouselContainer, null, _react["default"].createElement(Image, {
    src: CarouselImage,
    alt: 'Carousel Image'
  }), _react["default"].createElement(Heading, null, "Great Cars at Great Prices"), _react["default"].createElement(Info, null, "With Acko Drive, we put a brake on all your doubts. Since our prices are pre-negotiated with authorized dealers in your local area, they will always be at their accelerated best!"));
};