"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    height: 40px;\n    width: 100%;\n    font-size: 18px;\n    outline: 0;\n    border: 0;\n    padding-left: 5px;\n    &::placeholder{\n        color: #A8A8A8;\n        font-family: Helvetica;\n        font-size: 14px;\n        line-height: 40px;\n        vertical-align: middle;\n    }\n    &:focus{\n        outline: none;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 10px 0 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: 18px;\n    width: 18px;\n    padding-left: 2px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: 0.6fr 4.4fr;\n    height: 50px;\n    margin-top: 15px;\n    box-shadow: 0 6px 20px 0 rgba(13,51,32,0.1);\n    border-radius: 8px;\n    border: 2px solid #03CA78;\n    box-sizing: border-box;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Search = '../../media/Components/search.png';

var SearchContainer = _styledComponents["default"].div(_templateObject());

var SearchWrapper = _styledComponents["default"].div(_templateObject2());

var SearchIconWrapper = _styledComponents["default"].div(_templateObject3());

var SearchIcon = _styledComponents["default"].img(_templateObject4());

var SearchInputWrapper = _styledComponents["default"].div(_templateObject5());

var SearchInput = _styledComponents["default"].input(_templateObject6());

var SearchBox =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBox, _Component);

  function SearchBox() {
    _classCallCheck(this, SearchBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchBox).apply(this, arguments));
  }

  _createClass(SearchBox, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(SearchContainer, null, _react["default"].createElement(SearchWrapper, null, _react["default"].createElement(SearchIconWrapper, null, _react["default"].createElement(SearchIcon, {
        src: Search,
        alt: 'Search'
      })), _react["default"].createElement(SearchInputWrapper, null, _react["default"].createElement(SearchInput, {
        placeholder: "Search by Car Model e.g. WagonR"
      }))));
    }
  }]);

  return SearchBox;
}(_react.Component);

var _default = SearchBox;
exports["default"] = _default;