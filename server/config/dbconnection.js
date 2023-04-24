const url='mongodb+srv://admin:admin@devcoder980.64axway.mongodb.net/chetana'
const mongoose=require('mongoose');
const connectDb=async()=>{
    mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log("Connected to mongoDB"))
    .catch((e)=>console.log("Erro connecting ot mogodb",e));
}
module.exports=connectDb