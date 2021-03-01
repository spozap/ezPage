const mongoose = require('mongoose')
const model = require('../models/user')
const { createToken } = require('../services/token')

let controller = {}

controller.login = async (req,res) => {

    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(400).send("Username or password empty")
        return
    }

    try {
        const user = await model.findOne({ username: username , password: password })

        if (!user) {
            res.sendStatus(401)
            return
        }

        console.log("UserValidation "+user)


        let token = createToken(user)

        res.cookie('token', token, { httpOnly: true })
        res.json({ token })
        

    } catch(err) {
        console.log(err)
    }

}

module.exports = controller