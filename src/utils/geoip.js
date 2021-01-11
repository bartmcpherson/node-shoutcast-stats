const request = require('postman-request')

const geoInfo = (ip, callback) => {
  const url = 'https://tools.keycdn.com/geo.json?host=' + ip
  //const url = 'http://getcitydetails.geobytes.com/GetCityDetails?fqcn=' + ip

  request({url, json: true}, (error, response, body) => {
    if(error) {
      callback("Problem reaching GeoIP server.")
    } else {
      const geoObject = {}
      //geoObject.location = body
      console.log(body)
      //geoObject.location = body.geobytesfqcn
      //geoObject.country = body.geobytesinternet
      geoObject.city = body.data.geo.city
      geoObject.region = body.data.geo.region_name
      geoObject.country = body.data.geo.country_name
      geoObject.cn = body.data.geo.country_code
      //console.log(geoObject)
      callback(undefined, geoObject)
    }
  })
}

module.exports = geoInfo