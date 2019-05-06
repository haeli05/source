'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var LineChart = require('react-chartjs').Line
var options = {
  /// Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: false,
  // String - Colour of the grid lines
  // scaleGridLineColor : "rgba(0,0,0,.05)",
  // Number - Width of the grid lines
  scaleGridLineWidth: 1,
  // Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: false,
  // //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: false,
  datasetFill: false,
  // Boolean - Whether the line is curved between points
  bezierCurve: false,
  // Boolean - Whether to show a dot for each point
  pointDot: true,
  // Number - Radius of each point dot in pixels
  pointDotRadius: 4,
  // Number - Pixel width of point dot stroke
  pointDotStrokeWidth: 1,
  // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  pointHitDetectionRadius: 20,
  // Boolean - Whether to show a stroke for datasets
  datasetStroke: true,
  // Number - Pixel width of dataset stroke
  datasetStrokeWidth: 2,
  // Boolean - Whether to horizontally center the label and point dot inside the grid
  offsetGridLines: false

}

var Wallet = (function (_Component) {
  _inherits(Wallet, _Component)

  function Wallet () {
    _classCallCheck(this, Wallet)

    return _possibleConstructorReturn(this, (Wallet.__proto__ || Object.getPrototypeOf(Wallet)).apply(this, arguments))
  }

  _createClass(Wallet, [{
    key: 'render',
    value: function render () {
      console.log('Datarender', this.props.data)
      if (this.props.data.length === 0) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Loading'
          )
        )
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(LineChart, { data: this.props.data, options: options, width: '600', height: '250' })
        )
      }
    }
  }])

  return Wallet
}(_react.Component))

exports.default = Wallet
