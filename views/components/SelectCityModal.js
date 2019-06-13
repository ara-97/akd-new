"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FullPageModalWrapper = _interopRequireDefault(require("./FullPageModalWrapper"));

var _CarouselWrapper = _interopRequireDefault(require("./CarouselWrapper"));

var _CTAButton = _interopRequireDefault(require("./CTAButton"));

var _BottomSlideModal = _interopRequireDefault(require("./BottomSlideModal"));

var _Logo = _interopRequireDefault(require("./Logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px 10px;\n\tcolor: #030F09;\n\tfont-family: Inter;\n\tfont-size: 16px;\n\tfont-weight: 500;\n    line-height: 22px;\n    border-radius: 8px;\n    background-color: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    margin: 10px 0; \n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    height: 20px;\n    width: 20px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tcolor: #030F09;\n\tfont-family: Inter;\n\tfont-size: 16px;\n\tfont-weight: 500;\n    line-height: 50px;\n    padding-left: 15px;\n    vertical-align: middle;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\theight: 50px;\n\twidth: 325px;\n    border-radius: 8px;\n    margin: 20px 0;\n    background-color: #FFFFFF;\n    display: grid;\n    cursor: pointer;\n    grid-template-columns: 4fr 1fr;\n    box-shadow: 0px 6px 13px rgb(229,231,231);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n    @media(max-width: 700px){\n        /* position: fixed;\n        bottom: 0;\n        left: 0;\n        width: 100%; */\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 40px 0px 10px 0px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DownArrowIcon = '../../media/Components/down-arrow.png';

var SelectCityModalContainer = _styledComponents["default"].div(_templateObject());

var LogoWrapper = _styledComponents["default"].div(_templateObject2());

var CarouselContentContainer = _styledComponents["default"].div(_templateObject3());

var DropdownContainer = _styledComponents["default"].div(_templateObject4());

var CityDropdownSelect = _styledComponents["default"].div(_templateObject5());

var CityName = _styledComponents["default"].div(_templateObject6());

var DownArrowWrapper = _styledComponents["default"].div(_templateObject7());

var DownArrow = _styledComponents["default"].img(_templateObject8());

var CityDropdown = _styledComponents["default"].div(_templateObject9());

var CityDropdownItemWrapper = _styledComponents["default"].div(_templateObject10());

var CityDropdownItem = _styledComponents["default"].div(_templateObject11(), function (props) {
  return props.selected ? '#DACFFF' : '#fff';
});

var SelectCityModal =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectCityModal, _Component);

  function SelectCityModal(props) {
    var _this;

    _classCallCheck(this, SelectCityModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectCityModal).call(this, props));

    _this.toggleCitySelectModal = function () {
      _this.setState({
        showCityModal: !_this.state.showCityModal
      });
    };

    _this.selectCity = function (city) {
      _this.setState({
        selectedCity: city
      });
    };

    _this.state = {
      showCityModal: false,
      selectedCity: ''
    };
    return _this;
  }

  _createClass(SelectCityModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var state = this.state;
      var cities = ['Mumbai', 'Delhi NCR', 'Bangalore', 'Hyderabad', 'Chennai'];
      return _react["default"].createElement(SelectCityModalContainer, null, _react["default"].createElement(_FullPageModalWrapper["default"], {
        show: props.show
      }, _react["default"].createElement(CarouselContentContainer, null, _react["default"].createElement(LogoWrapper, null, _react["default"].createElement(_Logo["default"], {
        height: '30px',
        width: '150px'
      })), _react["default"].createElement(_CarouselWrapper["default"], null)), _react["default"].createElement(DropdownContainer, null, _react["default"].createElement(CityDropdownSelect, {
        onClick: this.toggleCitySelectModal
      }, _react["default"].createElement(CityName, null, "Select your city"), _react["default"].createElement(DownArrowWrapper, null, _react["default"].createElement(DownArrow, {
        src: DownArrowIcon,
        alt: 'Down Arrow'
      }))), _react["default"].createElement(_CTAButton["default"], null, "Get Started"))), _react["default"].createElement(_BottomSlideModal["default"], {
        show: state.showCityModal,
        heading: 'Select your city',
        modalHeight: '70%',
        closeModal: this.toggleCitySelectModal
      }, _react["default"].createElement(CityDropdown, null, cities.map(function (city, city_index) {
        return _react["default"].createElement(CityDropdownItemWrapper, {
          key: city_index
        }, _react["default"].createElement(CityDropdownItem, {
          selected: state.selectedCity === city,
          onClick: function onClick() {
            return _this2.selectCity(city);
          }
        }, city));
      })), _react["default"].createElement(_CTAButton["default"], {
        fixed: true
      }, "Get Started")));
    }
  }]);

  return SelectCityModal;
}(_react.Component);

var _default = SelectCityModal;
exports["default"] = _default;