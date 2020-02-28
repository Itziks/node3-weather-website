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
                body.daily.data[0].summary + ' Temperature of ' + body.currently.temperature + ' and rain Probability of ' + body.currently.precipProbability + '%'
            )
        }
    })
}

module.exports = forecast