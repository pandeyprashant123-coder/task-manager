const mongoose = require("mongoose");


const conectDB =(url)=>{
  return mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
  })
}
module.exports =conectDB
  
