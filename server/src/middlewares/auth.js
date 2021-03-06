var jwt = require('jwt-simple')
var moment = require('moment')

exports.validateAuth = function validateToken (req,res,next) {

    if (!req.headers.authorization){
        res.status(403).send({message: "Your request does not have authorization header"})
    }

    try {
        var token = req.headers.authorization.split(" ")[1]
        var payload = jwt.decode(token, process.env.JWT_KEY)
    } catch(err){
        console.log("Token not supported")
    }

    if (!payload){
        res.status(401).send({message: "Token is not valid"})
        return
    }

    if(payload.exp <= moment().unix()) {
        res.status(401).send({message: "Token is expired"})
    }
    
    req.user = payload.sub
    next() // Execute next function

}