const request = require('request')

const forecast = (latitude, logitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9ce99fd40ab1ab919254c3da8a700365/' + latitude + ',' + logitude + '?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined,
                'There are currently ' + body.currently.temperature + ' degress out. The high today is ' + body.daily.data[0].temperatureHigh +
                ' with a low of: ' + body.daily.data[0].temperatureLow + '. There is a  percip probability of ' + body.currently.precipProbability + '%'
            )
        }
    })
}

module.exports = forecast