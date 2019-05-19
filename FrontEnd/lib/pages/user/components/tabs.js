'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _Tabs = require('@material-ui/core/Tabs')

var _Tabs2 = _interopRequireDefault(_Tabs)

var _Tab = require('@material-ui/core/Tab')

var _Tab2 = _interopRequireDefault(_Tab)

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

var _Button = require('@material-ui/core/Button')

var _Button2 = _interopRequireDefault(_Button)

var _reactIconsKit = require('react-icons-kit')

var _reactIconsKit2 = _interopRequireDefault(_reactIconsKit)

var _arrows_plus = require('react-icons-kit/linea/arrows_plus')

var _Grid = require('@material-ui/core/Grid')

var _Grid2 = _interopRequireDefault(_Grid)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

function TabContainer (props) {
  return _react2.default.createElement(
    _Typography2.default,
    { component: 'div' },
    props.children
  )
}

TabContainer.propTypes = {
  children: _propTypes2.default.node.isRequired
}

var SimpleTabs = (function (_React$Component) {
  _inherits(SimpleTabs, _React$Component)

  function SimpleTabs (props) {
    _classCallCheck(this, SimpleTabs)

    var _this = _possibleConstructorReturn(this, (SimpleTabs.__proto__ || Object.getPrototypeOf(SimpleTabs)).call(this, props))

    _this.state = {
      value: 0
    }; return _this
  }

  _createClass(SimpleTabs, [{
    key: 'handleChange',
    value: function handleChange (event, value) {
      this.setState({ value: value })
    }
  }, {
    key: 'render',
    value: function render () {
      var value = this.state.value

      return _react2.default.createElement(
        'div',
        { className: 'RightPaneRoot' },
        _react2.default.createElement(
          'div',
          { className: 'Header' },
          _react2.default.createElement(
            'div',
            { className: 'Top' },
            _react2.default.createElement(
              _Typography2.default,
              { id: 'overline' },
              'USER'
            ),
            _react2.default.createElement(
              _Button2.default,
              { variant: 'raised', color: 'primary', size: 'small', className: 'FollowButton', disabled: true },
              _react2.default.createElement(_reactIconsKit2.default, { icon: _arrows_plus.arrows_plus, size: 20, className: 'PlusIcon' }),
              'Follow'
            )
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display3' },
            this.props.props.match.params.user
          )
        ),
        _react2.default.createElement(
          _Tabs2.default,
          { value: value, onChange: this.handleChange, indicatorColor: 'primary' },
          _react2.default.createElement(_Tab2.default, { label: 'About' }),
          _react2.default.createElement(_Tab2.default, { label: 'Ideas', disabled: true }),
          _react2.default.createElement(_Tab2.default, { label: 'Projects' })
        ),
        value === 0 && _react2.default.createElement(
          TabContainer,
          null,
          _react2.default.createElement(
            'div',
            { className: 'TabContainer' },
            _react2.default.createElement(
              'div',
              { className: 'Bio' },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'body1' },
                'bio'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'UserGrid' },
              _react2.default.createElement(
                _Grid2.default,
                { container: true, spacing: 24 },
                _react2.default.createElement(
                  _Grid2.default,
                  { item: true, xs: 12, sm: 6 },
                  _react2.default.createElement(
                    'div',
                    { className: 'TopProjects' },
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'title', className: 'Title' },
                      'Top Projects'
                    ),
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'body1', className: 'Body' },
                      'coming soon'
                    )
                  )
                ),
                _react2.default.createElement(
                  _Grid2.default,
                  { item: true, xs: 12, sm: 6 },
                  _react2.default.createElement(
                    'div',
                    { className: 'Activity' },
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'title', className: 'Title' },
                      'Activity'
                    ),
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'body1', className: 'Body' },
                      'coming soon'
                    )
                  )
                ),
                _react2.default.createElement(
                  _Grid2.default,
                  { item: true, xs: 12, sm: 6 },
                  _react2.default.createElement(
                    'div',
                    { className: 'RecentDiscussions' },
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'title', className: 'Title' },
                      'Recent Discussions'
                    ),
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'body1', className: 'Body' },
                      'coming soon'
                    )
                  )
                ),
                _react2.default.createElement(
                  _Grid2.default,
                  { item: true, xs: 12, sm: 6 },
                  _react2.default.createElement(
                    'div',
                    { className: 'TopContributions' },
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'title', className: 'Title' },
                      'Top Contributions'
                    ),
                    _react2.default.createElement(
                      _Typography2.default,
                      { variant: 'body1', className: 'Body' },
                      'coming soon'
                    )
                  )
                )
              )
            )
          )
        ),
        value === 1 && _react2.default.createElement(TabContainer, null),
        value === 2 && _react2.default.createElement(
          TabContainer,
          null,
          _react2.default.createElement(
            'div',
            { className: 'TabContainer' },
            _react2.default.createElement(
              'div',
              { className: 'Repos' },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'body1', className: 'Body' },
                'coming soon'
              )
            )
          )
        )
      )
    }
  }])

  return SimpleTabs
}(_react2.default.Component))

exports.default = SimpleTabs

/*
<div className="Months" style={{display:"flex", fontSize:"10px", justifyContent:"space-between", paddingLeft:"28px", paddingRight:"10px"}}>
  <p>Jan</p>
  <p>Feb</p>
  <p>Mar</p>
  <p>Apr</p>
  <p>May</p>
  <p>Jun</p>
  <p>Jul</p>
  <p>Aug</p>
  <p>Sep</p>
  <p>Oct</p>
  <p>Nov</p>
  <p>Dec</p>
</div>
<div className="Weeks+Map" style={{display:"flex"}}>
  <div className="Weeks" style={{fontSize:"10px"}}>
    <p>Mon</p>
    <p>Wed</p>
    <p>Fri</p>
  </div>
  <HeatMap/>
</div>
*/
