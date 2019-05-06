'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _group = require('@vx/group')

var _mockData = require('@vx/mock-data')

var _scale = require('@vx/scale')

var _heatmap = require('@vx/heatmap')

var _d3Array = require('d3-array')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var data = (0, _mockData.genBins)(52, 7)

// accessors
var x = function x (d) {
  return d.bin
}
var y = function y (d) {
  return d.bins
}
var z = function z (d) {
  return d.count
}
var settings = {
  width: 500,
  height: 120,
  events: false,
  margin: {
    top: 10,
    left: 20,
    right: 20,
    bottom: 20
  }

  // bounds
  // const size =  settings.width > (settings.margin.left + settings.margin.right)
  //  ? settings.width - settings.margin.left - settings.margin.right
  //  : settings.width;
}; var xMax = settings.width - settings.margin.left
// const yMax = settings.height - settings.margin.bottom;
var dMin = (0, _d3Array.min)(data, function (d) {
  return (0, _d3Array.min)(y(d), x)
})
var dMax = (0, _d3Array.max)(data, function (d) {
  return (0, _d3Array.max)(y(d), x)
})
var dStep = dMax / data[0].bins.length
// const bwidth = xMax / data.length;
// const bHeight = yMax / data[0].bins.length;
var colorMax = (0, _d3Array.max)(data, function (d) {
  return (0, _d3Array.max)(y(d), z)
})

// scales
var xScale = (0, _scale.scaleLinear)({
  range: [0, xMax],
  domain: (0, _d3Array.extent)(data, x)
})
var yScale = (0, _scale.scaleLinear)({
  /*  */
  range: [100, 1],
  domain: [dMin, dMax]
})
var colorScale = (0, _scale.scaleLinear)({
  range: ['#d0deed', '#5b9ee5'],
  domain: [0, colorMax]
})
// const colorScale2 = scaleLinear({
//  range: ['#122549', '#b4fbde'],
//  domain: [0, colorMax]
// });
var opacityScale = (0, _scale.scaleLinear)({
  range: [1, 1],
  domain: [0, colorMax]
})

var HeatMap = (function (_React$Component) {
  _inherits(HeatMap, _React$Component)

  function HeatMap () {
    _classCallCheck(this, HeatMap)

    return _possibleConstructorReturn(this, (HeatMap.__proto__ || Object.getPrototypeOf(HeatMap)).apply(this, arguments))
  }

  _createClass(HeatMap, [{
    key: 'render',
    value: function render () {
      if (settings.width < 10) return null
      return _react2.default.createElement(
        'div',
        { className: 'HeatMapJS' },
        _react2.default.createElement(
          'svg',
          { width: settings.width, height: settings.height },
          _react2.default.createElement('rect', {
            x: 0,
            y: 0,
            width: settings.width,
            height: settings.height,
            rx: 6,
            fill: 'white'
          }),
          _react2.default.createElement(
            _group.Group,
            { top: settings.margin.top },
            _react2.default.createElement(_heatmap.HeatmapCircle, {
              data: data,
              xScale: xScale,
              yScale: yScale,
              colorScale: colorScale,
              opacityScale: opacityScale,
              radius: 8.5,
              step: dStep,
              gap: 4,
              onClick: function onClick (data) {
                return function (event) {
                  if (!settings.events) return
                  alert('clicked: ' + JSON.stringify(data.bin))
                }
              }
            })
          )
        )
      )
    }
  }])

  return HeatMap
}(_react2.default.Component))

exports.default = HeatMap
