'use strict';

var _reactRedux = require('react-redux');

var _user = require('./actions/user.actions');

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return { user: 45 };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogin: function onLogin(key) {
      return dispatch((0, _user.login)(key));
    }
  };
};
(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Navbar2.default);