const express = require("express") ;
const cors = require("cors")
const app = express() ;
app.use(cors()) ;
app.use(express.json())
require('dotenv').config() ;


require("./src/db/conn.js") ;

app.use(require("./src/api/api.js")) ;

const _PORT = process.env.PORT || 8000 ;

app.listen(_PORT, ()=>{
    console.log(`App is running on port ${_PORT}`)
})













