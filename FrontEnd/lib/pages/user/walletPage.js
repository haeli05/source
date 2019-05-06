'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _eosjs = require('eosjs')

var _eosjs2 = _interopRequireDefault(_eosjs)

var _graph = require('./components/graph')

var _graph2 = _interopRequireDefault(_graph)

var _transferButton = require('./components/transferButton')

var _transferButton2 = _interopRequireDefault(_transferButton)

var _transferButton3 = require('./components/transferButton2')

var _transferButton4 = _interopRequireDefault(_transferButton3)

var _transactions = require('./components/transactions')

var _transactions2 = _interopRequireDefault(_transactions)

var _Typography = require('@material-ui/core/Typography')

var _Typography2 = _interopRequireDefault(_Typography)

var _history = require('./../../history')

var _history2 = _interopRequireDefault(_history)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

function _asyncToGenerator (fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step (key, arg) { try { var info = gen[key](arg); var value = info.value } catch (error) { reject(error); return } if (info.done) { resolve(value) } else { return Promise.resolve(value).then(function (value) { step('next', value) }, function (err) { step('throw', err) }) } } return step('next') }) } }

var user = _history2.default.location.pathname.split('/')[2]
var eosConfig = {
  httpEndpoint: 'http://ec2-34-227-77-165.compute-1.amazonaws.com:8888'
}
var eos = (0, _eosjs2.default)(eosConfig)

function fl (time, amount) {
  var n = []
  for (var i = 0; i < time.length; i++) {
    var t = time[i]
    var a = amount[i]
    var obj = { x: t, y: a }
    n.push(obj)
  }
  return n
}
var e = (function () {
  var _ref = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee () {
    return regeneratorRuntime.wrap(function _callee$ (_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2
            return eos.getTableRows(true, 'records', user, 'payments').then(function (rows) {
              return rows.rows
            })

          case 2:
            return _context.abrupt('return', _context.sent)

          case 3:
          case 'end':
            return _context.stop()
        }
      }
    }, _callee, undefined)
  }))

  return function e () {
    return _ref.apply(this, arguments)
  }
}())
// let a =e();
// console.log("A",a);
var updatedData = function updatedData (data, labels) {
  return {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: data,
      sum: 0
    }] }
}

var Wallet = (function (_Component) {
  _inherits(Wallet, _Component)

  function Wallet (props) {
    _classCallCheck(this, Wallet)

    var _this = _possibleConstructorReturn(this, (Wallet.__proto__ || Object.getPrototypeOf(Wallet)).call(this, props))

    _this.state = {
      legend: [],
      dataArr: [],
      arr: [],
      narr: [],
      max: 0,
      data: [],
      update: false,
      totalBalance: 0
    }
    _this.handleSubmit = _this.handleSubmit.bind(_this)
    return _this
  }

  _createClass(Wallet, [{
    key: 'componentDidMount',
    value: (function () {
      var _ref2 = _asyncToGenerator(/* #__PURE__ */regeneratorRuntime.mark(function _callee2 () {
        var a, t, d, n, datat, sum
        return regeneratorRuntime.wrap(function _callee2$ (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2
                return e()

              case 2:
                a = _context2.sent

                // console.log(a);
                t = a.map(function (id) {
                  return id.time.toString()
                })
                d = a.map(function (id) {
                  return parseInt(id.amount.split(' ')[0])
                })

                if (t.length === 0) {
                  t = [0]
                  d = [0]
                  a = [0]
                }
                // console.log("t",t,"d",d);
                // options.scales.yAxes.push({ticks:{suggestedMin:0,suggestedMax:Math.max(...d)}})
                // options.scales.xAxes.push({ticks:{suggestedMin:Math.min(...t),suggestedMax:Math.max(...t)+20}})
                n = fl(t, d)
                datat = updatedData(d, t)
                sum = d.reduce(function (a, b) {
                  return a + b
                }, 0)

                this.setState({ arr: a, legend: t, data: datat, narr: n, sum: sum })

              case 10:
              case 'end':
                return _context2.stop()
            }
          }
        }, _callee2, this)
      }))

      function componentDidMount () {
        return _ref2.apply(this, arguments)
      }

      return componentDidMount
    }())
  }, {
    key: 'handleSubmit',
    value: function handleSubmit (PrivateKey, TargetAddress, amount) {
      var keyProvider = PrivateKey
      var eos2 = (0, _eosjs2.default)({ keyProvider: keyProvider })
      amount = amount.toString() + ' ' + 'SYS'
      eos2.transfer(this.props.match.params.user, TargetAddress, amount, '').then(function (err, res) {
        if (!err) {
          alert('ERROR TRANSFER'); console.log(err)
        } else alert('SENT TRANSACTION TO ' + TargetAddress)
      })
    }
  }, {
    key: 'render',
    value: function render () {
      console.log('Datar32sdfsender', this.state.data)
      if (this.state.arr.length === 0) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Loading'
          )
        )
      } else if (this.state.arr[0] === 0) {
        return _react2.default.createElement(
          'div',
          { className: 'WalletPage' },
          _react2.default.createElement(
            'div',
            { className: 'Header' },
            _react2.default.createElement(
              'div',
              { className: 'Top' },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'display3' },
                'Wallet'
              ),
              _react2.default.createElement(_transferButton4.default, { disabled: true })
            ),
            _react2.default.createElement(_graph2.default, { data: this.state.data })
          ),
          _react2.default.createElement(
            'div',
            { className: 'Balance' },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display2' },
              'Balance:'
            ),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display2' },
              this.state.sum,
              '\xA0SRC'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Transactions' },
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'display2' },
              'Transactions'
            ),
            _react2.default.createElement(
              'div',
              { className: 'History' },
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'caption' },
                'From/To'
              ),
              _react2.default.createElement(
                _Typography2.default,
                { variant: 'caption' },
                'Amount'
              )
            )
          )
        )
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'WalletPage', style: { display: 'flex', justifyContent: 'center', paddingTop: '50px', paddingBottom: '50px' } },
          _react2.default.createElement(
            'div',
            { style: { width: '900px', backgroundColor: 'white', boxShadow: '0 0 30px #f2f2f2' } },
            _react2.default.createElement(
              'div',
              { style: { padding: '20px', paddingLeft: '30px', paddingRight: '30px' } },
              _react2.default.createElement(
                'h2',
                null,
                'Daily Income'
              ),
              _react2.default.createElement(
                'div',
                { style: { display: 'flex' } },
                _react2.default.createElement(_graph2.default, { data: this.state.data }),
                _react2.default.createElement(_transferButton2.default, { handleSubmit: this.handleSubmit })
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '30px', paddingRight: '30px', backgroundColor: '#f7f7f7', paddingTop: '10px', paddingBottom: '10px' } },
              _react2.default.createElement(
                'h2',
                null,
                'Balance:'
              ),
              _react2.default.createElement(
                'h3',
                null,
                this.state.sum,
                '\xA0SRC'
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px' } },
              _react2.default.createElement(
                'h1',
                null,
                'Transactions'
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { style: { display: 'flex', justifyContent: 'space-between' } },
                  _react2.default.createElement(
                    'p',
                    null,
                    'From/To'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Amount'
                  )
                ),
                _react2.default.createElement(_transactions2.default, { data: this.state.arr })
              )
            )
          )
        )
      }
    }
  }])

  return Wallet
}(_react.Component))

exports.default = Wallet
