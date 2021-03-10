const userModel = require("../models/user")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const saltRounds = 10

let controller = {}

controller.create = async (req,res) => {

    try {
        const hashedPwd = await bcrypt.hash(req.body.password, saltRounds)

        const user = new userModel({username: req.body.username, password: hashedPwd})

        await user.save()
        res.status(201)
        res.send(user)
    } catch(err) {
        console.log(err)
    }

}

controller.findOne = async (req,res) => {
    
    if (!req.params.id){
        res.status(404)
        res.send("User not found")
        return
    }
    
    const id = req.params.id

    if (!mongoose.isValidObjectId(id)){
        res.status(500)
        res.send("Invalid ObjectId")
        return;
    }

    try {
        const user = await userModel.findById({ _id: id })
        
        if (!user){
            res.status(404)
            res.send("No user found")
            return
        }

        res.status(200)
        res.send(user)
    } catch(err) {
        console.log(err)
    }
}

controller.findAll = async (req,res) => {
    try{
        const users = await userModel.find({})
        res.status(200)
        res.send(users)
    } catch(err) {
        console.log(err)
        res.send(500)
    }

}


module.exports = controller