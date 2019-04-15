'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _reactRedux = require('react-redux');

var _user = require('./../../reducers/user.reducer');

var _Tabs = require('@material-ui/core/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('@material-ui/core/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _personCard = require('./components/personCard');

var _personCard2 = _interopRequireDefault(_personCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function TabContainer(props) {
  return _react2.default.createElement(
    _Typography2.default,
    { component: 'div', style: { padding: "24px" } },
    props.children
  );
}

TabContainer.propTypes = {
  children: _propTypes2.default.node.isRequired
};

var ExplorePeople = function (_Component) {
  _inherits(ExplorePeople, _Component);

  function ExplorePeople(props) {
    _classCallCheck(this, ExplorePeople);

    var _this = _possibleConstructorReturn(this, (ExplorePeople.__proto__ || Object.getPrototypeOf(ExplorePeople)).call(this, props));

    _this.state = {
      currentTab: 0,
      header: "For You"
    };
    return _this;
  }

  _createClass(ExplorePeople, [{
    key: 'handleTabChange',
    value: function handleTabChange(tabNum) {
      if (tabNum === 0) {
        this.setState({ currentTab: 0 });
        this.setState({ header: "For You" });
      } else if (tabNum === 1) {
        this.setState({ currentTab: 1 });
        this.setState({ header: "New" });
      } else if (tabNum === 2) {
        this.setState({ currentTab: 2 });
        this.setState({ header: "Popular" });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'ExplorePeople' },
        _react2.default.createElement(
          'div',
          { className: 'PageTitle' },
          _react2.default.createElement(
            _Typography2.default,
            { id: 'overline' },
            'PEOPLE'
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display4' },
            this.state.header
          ),
          _react2.default.createElement(
            _Tabs2.default,
            { value: this.state.currentTab, indicatorColor: 'primary' },
            _react2.default.createElement(_Tab2.default, { label: 'For You', onClick: function onClick() {
                return _this2.handleTabChange(0);
              } }),
            _react2.default.createElement(_Tab2.default, { label: 'New', onClick: function onClick() {
                return _this2.handleTabChange(1);
              } }),
            _react2.default.createElement(_Tab2.default, { label: 'Popular', onClick: function onClick() {
                return _this2.handleTabChange(2);
              } })
          )
        ),
        _react2.default.createElement(_personCard2.default, null)
      );
    }
  }]);

  return ExplorePeople;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: (0, _user.getUser)(state)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ExplorePeople);