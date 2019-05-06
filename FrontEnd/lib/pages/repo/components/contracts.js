'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactRedux = require('react-redux')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var RepoContracts = (function (_Component) {
  _inherits(RepoContracts, _Component)

  function RepoContracts () {
    _classCallCheck(this, RepoContracts)

    return _possibleConstructorReturn(this, (RepoContracts.__proto__ || Object.getPrototypeOf(RepoContracts)).apply(this, arguments))
  }

  _createClass(RepoContracts, [{
    key: 'render',
    value: function render () {
      return _react2.default.createElement(
        'div',
        { className: 'RepoContracts', style: { display: 'flex', justifyContent: 'space-between', marginTop: '25px', width: '100%' } },
        _react2.default.createElement(
          'div',
          { className: 'Role', style: { border: '1px solid grey', borderRadius: '10px', width: '22%', padding: '10px' } },
          _react2.default.createElement(
            'div',
            { className: 'RoleName', style: { display: 'flex', marginBottom: '10px' } },
            _react2.default.createElement(
              'h3',
              { style: { marginRight: '15px' } },
              'Role Name:'
            ),
            _react2.default.createElement(
              'h3',
              null,
              'Default'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'RoleRep', style: { display: 'flex', marginBottom: '20px' } },
            _react2.default.createElement(
              'h4',
              { style: { marginRight: '15px' } },
              'Rep Required:'
            ),
            _react2.default.createElement(
              'h4',
              null,
              '0'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'RoleActions' },
            _react2.default.createElement(
              'p',
              { style: { marginRight: '15px', marginBottom: '10px' } },
              'Available Actions:'
            ),
            _react2.default.createElement(
              'div',
              { className: 'Table' },
              _react2.default.createElement(
                'div',
                { className: 'Row', style: { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid lightgrey' } },
                _react2.default.createElement(
                  'div',
                  { style: { width: '40%' } },
                  _react2.default.createElement(
                    'p',
                    { style: { color: 'grey' } },
                    'Action'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    { style: { color: 'grey' } },
                    'REP'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    { style: { color: 'grey' } },
                    'SRC'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'Row', style: { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid lightgrey', paddingTop: '5px', paddingBottom: '5px' } },
                _react2.default.createElement(
                  'div',
                  { style: { width: '40%' } },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Star'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    '1'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'p',
                    null,
                    '2'
                  )
                )
              )
            )
          )
        )
      )
    }
  }])

  return RepoContracts
}(_react.Component))

var mapStateToProps = function mapStateToProps (state) {
  return {}
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(RepoContracts)
