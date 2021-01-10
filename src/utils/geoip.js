const request = require('postman-request')

const geoInfo = (ip, callback) => {
  const url = 'http://getcitydetails.geobytes.com/GetCityDetails?fqcn=' + ip

  request({url, json: true}, (error, response, body) => {
    if(error) {
      callback("Problem reaching GeoIP server.")
    } else {
      const geoObject = {}
      //geoObject.location = body
      console.log(body)
      geoObject.location = body.geobytesfqcn
      geoObject.country = body.geobytesinternet
      callback(undefined, geoObject)
    }
  })
}

module.exports = geoInfo