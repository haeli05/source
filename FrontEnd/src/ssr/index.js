const express = require('express')

const app = express()

const template = require('./template')

const path = require('path')

const renderToString = require('react-dom/server').renderToString
// hide powered by express
app.disable('x-powered-by')
// start the server
app.listen(process.env.PORT || 3001)

// our apps data model

let initialState = {
  isFetching: false
}

// SSR function import
const ssr = require('./server')

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content } = ssr(initialState)
  const response = template('Server Rendered Page', preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response)
})

// tiny trick to stop server during local development

app.get('/exit', (req, res) => {
  if (process.env.PORT) {
    res.send('Sorry, the server denies your request')
  } else {
    res.send('shutting down')
    process.exit(0)
  }
})

function htmlTemplate (reactDom, reduxState) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${JSON.stringify(reduxState)}
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `
}
