const mongoose = require("mongoose") ;

const DB = process.env.DB ;


mongoose.connect(DB, {
    useCreateIndex: true ,
    useNewUrlParser : true ,
    useUnifiedTopology : true ,
    useFindAndModify : false 
}).then(()=>{
    console.log("Database Connection Successful")
}).catch((err)=>{
    console.log(err)
})






























