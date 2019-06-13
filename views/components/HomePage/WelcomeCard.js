"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactPlayer = _interopRequireDefault(require("react-player"));

var _SearchBox = _interopRequireDefault(require("../SearchBox"));

var _CardWrappers = _interopRequireDefault(require("../CardWrappers"));

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

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    height: 240px;\n    width: 100%;\n    border-radius: 0 0 8px 8px;\n"]);

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
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    display: ", ";\n    justify-content: center;\n    align-items: center;\n    z-index: 999;\n    height: 50px;\n    width: 50px;\n    border-radius: 50%;\n    top: 100px;\n    left: 45%;\n    background-image: linear-gradient(rgba(170,170,169,0.9), rgba(255,255,255,0.9));\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tcolor: #030F09;\n\tfont-family: Inter;\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tline-height: 30px;\n    text-align: center;\n    \n    & > span {\n        display: block;\n        opacity: 0.51;\n        color: #242424;\n        font-family: Inter;\n        font-size: 14px;\n        font-weight: 500;\n        line-height: 19px;\n        text-align: center;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        margin-top: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 10px;\n\topacity: 0.51;\n\tcolor: #242424;\n\tfont-family: Inter;\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tline-height: 19px;\n\ttext-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px 40px;\n    margin: 0 auto;\n\tcolor: #030F09;\n\tfont-family: Inter;\n\tfont-size: 18px;\n\tline-height: 30px;\n    text-align: center;\n    \n    & > span {\n        font-weight: bold;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 20px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Car = '../../media/Components/car.jpg';
var Play = '../../media/Components/play.png';

var WelcomeCardWrapper = _styledComponents["default"].div(_templateObject());

var WelcomeNote = _styledComponents["default"].div(_templateObject2());

var Info = _styledComponents["default"].div(_templateObject3());

var HowItWorksWrapper = _styledComponents["default"].div(_templateObject4());

var HIWHeading = _styledComponents["default"].div(_templateObject5());

var HIWVideoPlayerWrapper = _styledComponents["default"].div(_templateObject6());

var PlayButton = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.show ? 'flex' : 'none';
});

var PlayIcon = _styledComponents["default"].img(_templateObject8());

var HIWVideoPlayer = _styledComponents["default"].video(_templateObject9());

var WelcomeCard =
/*#__PURE__*/
function (_Component) {
  _inherits(WelcomeCard, _Component);

  function WelcomeCard(props) {
    var _this;

    _classCallCheck(this, WelcomeCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WelcomeCard).call(this, props));

    _this.playVideo = function () {
      _this.refs.vidRef.play();

      _this.setState({
        showControls: true
      });
    };

    _this.pauseVideo = function () {
      _this.setState({
        showControls: false
      });
    };

    _this.state = {
      showControls: false
    };
    _this.vidRef = _react["default"].createRef();
    return _this;
  }

  _createClass(WelcomeCard, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(WelcomeCardWrapper, null, _react["default"].createElement(_CardWrappers["default"], null, _react["default"].createElement(WelcomeNote, null, _react["default"].createElement("span", null, "Save money"), " on your next car with ", _react["default"].createElement("span", null, "Acko Drive.")), _react["default"].createElement(Info, null, "Transparent. Hassle-free. Inexpensive."), _react["default"].createElement(_SearchBox["default"], null), _react["default"].createElement(HowItWorksWrapper, null, _react["default"].createElement(HIWHeading, null, "See how it works", _react["default"].createElement("span", null, "Watch the video")), _react["default"].createElement(HIWVideoPlayerWrapper, null, _react["default"].createElement(PlayButton, {
        show: !this.state.showControls,
        onClick: this.playVideo
      }, _react["default"].createElement(PlayIcon, {
        src: Play
      })), _react["default"].createElement(HIWVideoPlayer, {
        onPause: this.pauseVideo,
        ref: "vidRef",
        controls: this.state.showControls,
        poster: Car
      }, _react["default"].createElement("source", {
        src: "https://dms.licdn.com/playback/C4D05AQFPZaF-oGOv_w/d256a8abaa9f40ae8452ee5ca13e15bc/feedshare-mp4_500-captions-thumbnails/1507940118923-hysdc8?e=1559584800&v=beta&t=kZoQWkDsZI3WkgJspD3PEFJi8v7Wyq_egZKJnoUFgQI",
        type: "video/mp4"
      }))))));
    }
  }]);

  return WelcomeCard;
}(_react.Component);

var _default = WelcomeCard;
exports["default"] = _default;