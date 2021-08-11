const mongoose = require("mongoose") ;

const userShcema = mongoose.Schema({
    name : String ,
    phone : String ,
    email : {
        type : String ,
        unique : true 
    },
    hobbies : String ,
})


const Users = mongoose.model("User", userShcema) ;

module.exports = Users ;


















