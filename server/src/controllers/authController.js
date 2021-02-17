const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const model = require('../models/user')

let controller = {}

controller.login = async (req,res) => {

    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(400).send("Username or password empty")
        return
    }

    try {
        const userValidation = await model.findOne({ username: username , password: password })

        if (!userValidation) {
            res.sendStatus(404)
            return
        }

        const user = {
            username: userValidation.username,
            password: userValidation.password
        }

        const token = jwt.sign(user, process.env.JWT_KEY, {
            expiresIn: 1440 
        });

        res.cookie('token', token, { httpOnly: true })
        res.json({ token })


    } catch(err) {
        console.log(err)
    }

}

module.exports = controller