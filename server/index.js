const express=require('express')
const app=express();
const connectDb=require('./config/dbconnection')
const bodyParser = require('body-parser');

connectDb();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/',require('./router/userRouter.js'))

app.listen(5000,()=>{ console.log("server Running 5000")});