const userModel = require("../models/user")
let controller = {}

controller.create = async (req,res) => {

    const user = new userModel({username: req.body.username, password: req.body.password})
    
    try {
        await user.save()
        res.status(201)
        res.send(user)
    } catch(err) {
        console.log(err)
    }

}


module.exports = controller