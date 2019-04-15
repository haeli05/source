'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactRedux = require('react-redux');

var _user = require('./../../../actions/user.actions');

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRouter = require('react-router');

var _Tabs = require('@material-ui/core/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Tab = require('@material-ui/core/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Drawer = require('@material-ui/core/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _arrows_hamburger = require('react-icons-kit/linea/arrows_hamburger1');

var _logo = require('./../img/logo.png');

var _logo2 = _interopRequireDefault(_logo);

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _ecommerce_wallet = require('react-icons-kit/linea/ecommerce_wallet');

var _basic_lightbulb = require('react-icons-kit/linea/basic_lightbulb');

var _basic_gear = require('react-icons-kit/linea/basic_gear');

var _arrows_plus = require('react-icons-kit/linea/arrows_plus');

var _basic_home = require('react-icons-kit/linea/basic_home');

var _basic_notebook = require('react-icons-kit/linea/basic_notebook');

var _arrows_remove = require('react-icons-kit/linea/arrows_remove');

var _arrows_exclamation = require('react-icons-kit/linea/arrows_exclamation');

var _Avatar = require('@material-ui/core/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _reactIconsKit = require('react-icons-kit');

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// These are for the list inside the drawer


//  <div className="NavSearch">
//    <Button ><Icon icon={search} size={15}/></Button>
//  </div>
var MenuAppBar = function (_React$Component) {
  _inherits(MenuAppBar, _React$Component);

  function MenuAppBar(props) {
    _classCallCheck(this, MenuAppBar);

    var _this = _possibleConstructorReturn(this, (MenuAppBar.__proto__ || Object.getPrototypeOf(MenuAppBar)).call(this, props));

    _this.state = {
      redirect: false,
      token: undefined,
      currentTab: 0,
      drawer: false,
      truth: JSON.parse(sessionStorage.getItem('alpha'))
    };
    _this.goNewRepo = _this.goNewRepo.bind(_this);
    _this.goProfile = _this.goProfile.bind(_this);
    _this.goHome = _this.goHome.bind(_this);
    _this.goWallet = _this.goWallet.bind(_this);
    _this.goIdeas = _this.goIdeas.bind(_this);
    _this.goProjects = _this.goProjects.bind(_this);
    _this.goPeople = _this.goPeople.bind(_this);
    _this.llogin = _this.llogin.bind(_this);
    _this.llogout = _this.llogout.bind(_this);
    _this.sendHome = _this.sendHome.bind(_this);
    _this.checkIfTabIsCorrect = _this.checkIfTabIsCorrect.bind(_this);
    _this.toggleDrawer = _this.toggleDrawer.bind(_this);
    return _this;
  }

  _createClass(MenuAppBar, [{
    key: 'toggleDrawer',
    value: function toggleDrawer(side, open) {
      this.setState(_defineProperty({}, side, open));
    }
  }, {
    key: 'sendHome',
    value: function sendHome() {
      if (this.props.logout) {
        console.log("now true");this.props.history.go('/');
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event, checked) {
      this.setState({ token: checked });
    }
  }, {
    key: 'handleLogout',
    value: function handleLogout() {
      this.setState({ token: false });
    }
  }, {
    key: 'handleCreateAccount',
    value: function handleCreateAccount() {
      this.props.history.push('/createaccount');
    }
  }, {
    key: 'goNewRepo',
    value: function goNewRepo() {
      this.setState({ anchorEl: null });
      this.props.history.push('/newrepo/' + this.props.username);
    }
  }, {
    key: 'goProfile',
    value: function goProfile() {
      this.setState({ anchorEl: null });
      this.props.history.push('/source/' + this.props.username);
    }
  }, {
    key: 'goHome',
    value: function goHome() {
      this.props.history.push('/');
    }
  }, {
    key: 'goWallet',
    value: function goWallet() {
      this.setState({ anchorEl: null });
      this.props.history.push('/wallet/' + this.props.username + '/');
    }
  }, {
    key: 'goIdeas',
    value: function goIdeas() {
      this.props.history.push('/explore/ideas');
    }
  }, {
    key: 'goProjects',
    value: function goProjects() {
      this.props.history.push('/explore/projects');
    }
  }, {
    key: 'goPeople',
    value: function goPeople() {
      this.props.history.push('/explore/people');
    }
  }, {
    key: 'llogin',
    value: function llogin(key) {
      this.props.history.push('/login');
    }
  }, {
    key: 'llogout',
    value: function llogout() {
      this.props.dispatch((0, _user.logout)());
    }
  }, {
    key: 'checkLoggedIn',
    value: function checkLoggedIn() {
      var user = JSON.parse(localStorage.getItem('user'));
      if (user === null || user === undefined) {
        this.setState({ token: false });
      } else {
        this.setState({ token: user.authToken });
      }
    }
  }, {
    key: 'handleTabChange',
    value: function handleTabChange(tabNum) {
      this.setState({ currentTab: tabNum });
      if (tabNum === 0) {
        this.goIdeas();
      } else if (tabNum === 1) {
        this.goProjects();
      } else if (tabNum === 2) {
        this.goPeople();
      }
    }
  }, {
    key: 'checkIfTabIsCorrect',
    value: function checkIfTabIsCorrect() {
      if (this.props.location.pathname === "/explore/ideas") {
        this.setState({ currentTab: 0 });
      } else if (this.props.location.pathname === "/explore/projects") {
        this.setState({ currentTab: 1 });
      } else if (this.props.location.pathname === "/explore/people") {
        this.setState({ currentTab: 2 });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.logout) return _react2.default.createElement(_reactRouter.Redirect, { to: '/' });
      return _react2.default.createElement(
        'div',
        { className: 'Navbar' },
        _react2.default.createElement(
          _AppBar2.default,
          { className: 'AppBar', position: 'static', elevation: 3 },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'Logo' },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'title', color: 'inherit' },
                _react2.default.createElement(
                  'div',
                  { className: 'NavbarTitle', onClick: this.goHome },
                  _react2.default.createElement('img', { className: 'LogoImage', src: _logo2.default, alt: 'source' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Tabs' },
              _react2.default.createElement(
                _Tabs2.default,
                { value: this.state.currentTab, indicatorColor: 'primary' },
                _react2.default.createElement(_Tab2.default, { label: 'Ideas', onClick: function onClick() {
                    return _this2.handleTabChange(0);
                  } }),
                _react2.default.createElement(_Tab2.default, { label: 'Projects', onClick: function onClick() {
                    return _this2.handleTabChange(1);
                  } }),
                _react2.default.createElement(_Tab2.default, { label: 'People', onClick: function onClick() {
                    return _this2.handleTabChange(2);
                  } })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'Right' },
              this.props.token !== false && this.props.token !== undefined && _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _Button2.default,
                  { onClick: function onClick() {
                      return _this2.toggleDrawer('right', true);
                    } },
                  _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_hamburger.arrows_hamburger1, size: 25 })
                ),
                _react2.default.createElement(
                  _Drawer2.default,
                  { anchor: 'right', open: this.state.right, onClose: function onClose() {
                      return _this2.toggleDrawer('right', false);
                    } },
                  _react2.default.createElement(
                    'div',
                    {
                      className: 'DrawerRight',
                      tabIndex: 0,
                      role: 'button',
                      onClick: function onClick() {
                        return _this2.toggleDrawer('right', false);
                      },
                      onKeyDown: function onKeyDown() {
                        return _this2.toggleDrawer('right', false);
                      }
                    },
                    _react2.default.createElement(
                      'div',
                      { className: 'DrawerRight' },
                      _react2.default.createElement(
                        'div',
                        { className: 'ProfileSection' },
                        _react2.default.createElement(
                          _Avatar2.default,
                          { className: 'Avatar' },
                          '.'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'UserInfo' },
                          _react2.default.createElement(
                            _Typography2.default,
                            { variant: 'title' },
                            this.props.username
                          ),
                          _react2.default.createElement(
                            _Typography2.default,
                            { variant: 'body2' },
                            'something'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _List2.default,
                        { component: 'nav' },
                        _react2.default.createElement(
                          _ListItem2.default,
                          { button: true, onClick: this.goProfile },
                          _react2.default.createElement(
                            _ListItemIcon2.default,
                            null,
                            _react2.default.createElement(_reactIconsKit2.default, { icon: _basic_home.basic_home, size: 25 })
                          ),
                          _react2.default.createElement(_ListItemText2.default, { primary: 'Profile' })
                        ),
                        _react2.default.createElement(
                          _ListItem2.default,
                          { button: true, disabled: true },
                          _react2.default.createElement(
                            _ListItemIcon2.default,
                            null,
                            _react2.default.createElement(_reactIconsKit2.default, { icon: _basic_notebook.basic_notebook, size: 25 })
                          ),
                          _react2.default.createElement(_ListItemText2.default, { primary: 'Projects' })
                        ),
                        _react2.default.createElement(
                          _ListItem2.default,
                          { button: true, disabled: true },
                          _react2.default.createElement(
                            _ListItemIcon2.default,
                            null,
                            _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_exclamation.arrows_exclamation, size: 25 })
                          ),
                          _react2.default.createElement(_ListItemText2.default, { primary: 'Groups' })
                        ),
                        _react2.default.createElement(
                          _ListItem2.default,
                          { button: true, onClick: this.goWallet },
                          _react2.default.createElement(
                            _ListItemIcon2.default,
                            null,
                            _react2.default.createElement(_reactIconsKit2.default, { icon: _ecommerce_wallet.ecommerce_wallet, size: 25 })
                          ),
                          _react2.default.createElement(_ListItemText2.default, { primary: 'Wallet' })
                        ),
                        _react2.default.createElement(
                          _ListItem2.default,
                          { button: true, disabled: true },
                          _react2.default.createElement(
                            _ListItemIcon2.default,
                            null,
                            _react2.default.createElement(_reactIconsKit2.default, { icon: _basic_gear.basic_gear, size: 25 })
                          ),
                          _react2.default.createElement(_ListItemText2.default, { primary: 'Account Settings' })
                        ),
                        _react2.default.createElement(
                          _ListItem2.default,
                          { button: true, onClick: this.llogout },
                          _react2.default.createElement(
                            'a',
                            { href: '/' },
                            _react2.default.createElement(
                              _ListItemIcon2.default,
                              null,
                              _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_remove.arrows_remove, size: 25 })
                            ),
                            _react2.default.createElement(_ListItemText2.default, { primary: 'Logout' })
                          )
                        )
                      ),
                      _react2.default.createElement(_Divider2.default, null),
                      _react2.default.createElement(
                        _List2.default,
                        { component: 'nav' },
                        _react2.default.createElement(
                          _ListItem2.default,
                          { button: true, disabled: true },
                          _react2.default.createElement(
                            _ListItemIcon2.default,
                            null,
                            _react2.default.createElement(_reactIconsKit2.default, { icon: _basic_lightbulb.basic_lightbulb, size: 25 })
                          ),
                          _react2.default.createElement(_ListItemText2.default, { primary: 'New Idea' })
                        ),
                        _react2.default.createElement(
                          _ListItem2.default,
                          { button: true, onClick: this.goNewRepo },
                          _react2.default.createElement(
                            _ListItemIcon2.default,
                            null,
                            _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_plus.arrows_plus, size: 25 })
                          ),
                          _react2.default.createElement(_ListItemText2.default, { primary: 'New Project' })
                        )
                      )
                    )
                  )
                )
              ),
              (this.props.token === false || this.props.token === undefined) && _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _Button2.default,
                  { color: 'inherit', onClick: function onClick() {
                      _this2.llogin(!_this2.props.auth);
                    } },
                  'Login'
                ),
                _react2.default.createElement(
                  _Button2.default,
                  { color: 'inherit', onClick: this.handleCreateAccount },
                  'Create Account'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MenuAppBar;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    token: state.users.token,
    username: state.users.username,
    logout: state.users.logout
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MenuAppBar);