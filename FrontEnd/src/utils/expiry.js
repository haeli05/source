export default function runCheck () {
  let jwtDecode = require('jwt-decode')
  let presentUser = JSON.parse(window.localStorage.getItem('user'))
  if (presentUser && presentUser.token !== false) {
    let token = presentUser.token
    if (token === null || token === undefined) return
    let decoded = jwtDecode(token)
    let time = decoded.exp
    if (time < new Date().getTime() / 1000) logout()
  }
}

function logout () {
  window.localStorage.removeItem('user')
  window.localStorage.removeItem('chat')
}
