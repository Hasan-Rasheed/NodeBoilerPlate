
const config = require('../config.json')
const insert = require('../db_functions/insert')
const read = require('../db_functions/read')
const remove = require('../db_functions/delete')
const update = require('../db_functions/update')
 
const signup = async (req)=>{
    try{
        // console.log("In signup \n",req.body)
        // console.log("req.body.email" , req.body.email)
        // const uniqueMail  = await User.findOne({email:req.body.email})
        // if(!uniqueMail){
        //     const user = await User.create(req.body)
        //     console.log("USER \n" , user)
        //     const signupDetails = uniqueMail
        // }
        // else {
        //         return "User Already Exist"
        //     }
                const addUser = await insert.addUser(req);
                return addUser
    }
    catch(e){
        console.log(e)
        throw (e)
    }
}
const login = async (req) => {
    try{
            // console.log(req.body)
            
            const getUser = await read.getUserLogin(req)
            return getUser
    }
    catch (e) {
        console.log(e)
        throw new Error(e)
    }
}
module.exports ={
    login , 
    signup
}