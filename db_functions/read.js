const db = require('../db')
const User = db.user


exports.getUserLogin = async (req) => {
    try {
        const emailExist = await User.findOne({ email: req.body.email })
        if (!emailExist) {
            return "User Doesnot Exist"
        }
        else {
            if (req.body.password == emailExist.password) {
                const userDetails = emailExist
                return userDetails
            }
            else {
                return "invalid Password"
            }
        }
    }
    catch (e) {
        throw (e)
    }
}