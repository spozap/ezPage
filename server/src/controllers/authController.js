const mongoose = require('mongoose')
const model = require('../models/user')
const bcrypt = require('bcrypt')
const { createToken } = require('../services/token')
const userModel = require('../models/user')

const saltRounds = 10

let controller = {}

controller.login = async (req,res) => {

    const username = req.body.username
    const password = req.body.password

    if (!username || !password) {
        res.status(400).send("Username or password empty")
        return
    }

    try {

        const user = await model.findOne({ username: username })

        if (!user) {
            res.sendStatus(401)
            return
        }

        let compare = await bcrypt.compare(password,user.password)

        if (!compare){
            res.sendStatus(401)
            return
        }

        console.log("UserValidation "+user)

        let token = createToken(user)

        res.cookie('token', token, { httpOnly: true })
        res.json({ token })
        

    } catch(err) {
        res.status(500).send(err)
    }

}

controller.register = async (req,res) => {

    if (!req.body.username || !req.body.password) {
        res.status(400).send("Username or password empty")
        return
    }

    try {

        const cmp = await model.findOne({ username: req.body.username })

        if (cmp) {
            res.status(409).send("User already exists")
            return
        }

        const hashedPwd = await bcrypt.hash(req.body.password, saltRounds)
        let user = new userModel({username: req.body.username , password: hashedPwd})
        
        user.save()

    } catch (err) {
        res.status(500).send(err)
    }

    res.status(201).send("User registered successfully")

}

module.exports = controller