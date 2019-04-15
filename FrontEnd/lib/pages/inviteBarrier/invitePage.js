'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _user = require('./../../reducers/user.reducer');

var _user2 = require('./../../actions/user.actions');

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Invite = function (_Component) {
  _inherits(Invite, _Component);

  function Invite(props) {
    _classCallCheck(this, Invite);

    var _this = _possibleConstructorReturn(this, (Invite.__proto__ || Object.getPrototypeOf(Invite)).call(this, props));

    _this.state = {
      invite: ""
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Invite, [{
    key: 'handleChange',
    value: function handleChange(target, e) {
      var change = {};
      change[target] = e.target.value;
      this.setState(change);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.dispatch((0, _user2.inviteCodeCheck)({ invite: this.state.invite }));
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      if (e.key == 'Enter') {
        this.handleSubmit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'InvitePage' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'Header' },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display4' },
              'Welcome to Source'
            )
          ),
          !this.props.good && _react2.default.createElement(
            'div',
            { className: 'CodeCheck' },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'caption' },
              'Invite Code'
            ),
            _react2.default.createElement('input', { value: this.state.invite, onKeyPress: function onKeyPress(e) {
                _this2.handleKeyPress(e);
              }, onChange: function onChange(e) {
                _this2.handleChange("invite", e);
              } }),
            _react2.default.createElement(
              'div',
              { className: 'ButtonDiv' },
              _react2.default.createElement(
                _Button2.default,
                { variant: 'raised', color: 'primary', className: 'SubmitButton', onClick: this.handleSubmit },
                'Submit'
              )
            )
          ),
          this.props.good && _react2.default.createElement(
            'div',
            { className: 'CodePassed' },
            _react2.default.createElement(
              'a',
              { href: '/explore' },
              _react2.default.createElement(
                _Button2.default,
                { variant: 'raised', color: 'primary', className: 'ExploreButton' },
                'Begin Exploring'
              )
            )
          )
        )
      );
    }
  }]);

  return Invite;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    good: (0, _user.getGood)(state)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Invite);