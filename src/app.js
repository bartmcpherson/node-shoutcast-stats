const path = require('path')
const express = require('express')
const shoutcast = require('./utils/shoutcast')

const app = express()
const port = process.env.PORT || 4000

app.get('', (req, res) => {
  shoutcast((error, listenerData) => {
    if(error) {
      console.log('err: ' + error)
    } else {
      res.send(listenerData)
    }
  })
})

app.listen(port, () => {
  console.log('Server started on port ' + port + '.')
})

