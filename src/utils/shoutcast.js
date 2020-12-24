const request = require('postman-request')
const prettySeconds = require('pretty-seconds')
const config = require('./config')

const listeners = (callback) => {
  let url = 'http://' + config.username + ':' + config.userpassword + '@' + config.stream.ip + ':' + config.stream.port + config.stream.uri

  request({url, json: true}, (error, response, body) => {
    if(error) {
      callback("Problem reaching ShoutCast server.")
    } else if (JSON.stringify(body).indexOf('Unauthorized') > -1) {
      callback('Could not authenticate with ShoutCast server.')
    } else {
      const listenerObject = {}
      listenerObject['listeners'] = []
      body.forEach(element => {
        const currListener = {
          ip: element.hostname,
          time: prettySeconds(element.connecttime)
        }
        listenerObject['listeners'].push(currListener)
      })
      callback(undefined, listenerObject)
    }
  })
}

module.exports = listeners
// const url = 'http://admin:Wcsb893$tr3@madm!n@40.71.172.49:8367/admin.cgi?sid=1&mode=viewjson&page=3'
