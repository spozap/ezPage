var jwt = require('jwt-simple')
var moment = require('moment')

exports.createToken = function(user) {
    
    var payload = {
        sub: user._id, // Id that identifies the subject of the token
        iat: moment().unix(), // Creation date
        exp: moment().add(14,"days").unix() // Expiration date
    }

    return jwt.encode(payload, process.env.JWT_KEY)
}