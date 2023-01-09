const express = require("express");
const app = express();
const task = require('./routes/task');
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleWare = require("./middleware/error-handler")
require('dotenv').config()
//middleware
app.use(express.static('./public'))
app.use(express.json());


app.use('/api/v1/task', task);
app.use(notFound)
app.use(errorHandlerMiddleWare)
const port = process.env.PORT||3000;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listenig at port ${port}....`));
    }catch(err){
        console.log(err)
    }
}

start()