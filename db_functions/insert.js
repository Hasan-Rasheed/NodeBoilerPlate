const db = require('../db')
const User = db.user

exports.addUser = async (req) => {
    try{
        const uniqueMail  = await User.findOne({email:req.body.email})
        if(!uniqueMail){
            const user = await User.create(req.body)
            const signupDetails = user
            return user
        }
        else {
            return "User Already Exist"
        }
    }
    catch(e){
        console.log(e)
        throw (e)

    }
}