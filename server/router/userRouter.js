const express = require('express');
const asyncHandler = require('express-async-handler')
const router = express.Router();
const User = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');

router.post('/register', asyncHandler(async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstname, lastname, email, password: hashedPassword });
        const contact = await newUser.save();
        res.status(201).json(contact);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to login', error: err });
    }
}));

router.post('/login', asyncHandler(async (req, res) => {
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message:'Authentication Failed'});
        }
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message:'Authentication Failed'});
        }
        const token=jwt.sign({email:user.email,userId:user._id},'secret',{expiresIn:'5h'});
        res.status(200).json({token});
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to login', error: err });
    }
}))

async function getUserById(userId){
    try{
        const user=await User.findById(userId);
        if(!user){
            throw new Erro('user not found');
        }
        return user;
    }
    catch(err){
        throw new Error('failed to get user by id');
    }
}

router.get('/users',asyncHandler(async(req,res)=>{
    try{
        const authToken=req.header.authorization;
        if(!authToken){
            // the token is missing
            return res.status(401).json({message:"Authrication Failed :token missing"});
        }
        const token=authToken.split(' ')[1];
        jwt.verify(token,'secret',async(err,decoded)=>{
            if(err){
                console.log(err);
                return res.status(401).json({message:err});
            }else{
                const userId=decoded.userId;
                const userdata=await getUserById(userId);
                res.json(userdata);
            }
        })
    }
    catch(err){
        res.status(500).json({message:"Failed to fetch users",error:err});
    }
}))


module.exports = router;









module.exports = router

