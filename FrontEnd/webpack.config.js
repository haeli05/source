var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
import * from './src/assets/svg/*';

var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
        {
              test: /\.css$/,
              use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
          },
      ],
      loaders: [
        {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: 'svg-react-loader',
            query: {
                classIdPrefix: '[name]-[hash:8]__',
                filters: [
                    function (value) {
                        // ...
                        this.update(newvalue);
                    }
                ],
                propsMap: {
                    fillRule: 'fill-rule',
                    foo: 'bar'
                },
                xmlnsTest: /^xmlns.*$/
            }
        }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]
