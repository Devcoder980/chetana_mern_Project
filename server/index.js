const express=require('express')
const app=express();
const connectDb=require('./config/dbconnection')
const bodyParser = require('body-parser');
const cors=require('cors')
connectDb();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/user',require('./router/userRouter.js'))
app.use('/api/data',require('./router/dataRouter.js'))
app.listen(5000,()=>{ console.log("server Running 5000")});