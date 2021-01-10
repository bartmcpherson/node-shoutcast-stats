const path = require('path')
const express = require('express')
const shoutCast = require('./utils/shoutcast')
const geoIP = require('./utils/geoip')

const app = express()
const port = process.env.PORT || 4000

app.get('', (req, res) => {
  shoutCast((error, listenerData) => {
    if(error) {
      console.log('err: ' + error)
    } else {
      res.send(listenerData)
    }
  })
})

app.get('/geoinfo/:ip', (req, res) => {
  let ip = req.params.ip
  geoIP(ip,(error, geoInfo) => {
    if(error) {
      console.log('err: ' + error)
    } else {
      res.send(geoInfo)
    }
  })
})

app.listen(port, () => {
  console.log('Server started on port ' + port + '.')
})

