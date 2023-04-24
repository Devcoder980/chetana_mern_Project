const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/userModel.js');

router.post('/register', asyncHandler(async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstname, lastname, email, password: hashedPassword });
        const contact = await newUser.save();
        res.status(201).json(contact);
    } catch (err) {
        res.status(500).json({ message: 'Failed to register user', error: err });
    }
}));

router.post('/login', asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const token = jwt.sign({ email: user.email, userId: user._id }, process.env.JWT_SECRET, { expiresIn: '5h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Failed to login', error: err });
    }
}));

router.get('/', asyncHandler(async (req, res) => {
    try {
        const authToken = req.headers.authorization;
        if (!authToken) {
            return res.status(401).json({ message: 'Authentication failed: token missing' });
        }
        const token = authToken.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Authentication failed: invalid token' });
            } else {
                const userId = decoded.userId;
                const userdata = await getUserById(userId);
                res.json(userdata);
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch users', error: err });
    }
}));

router.get('/adminuser', asyncHandler(async (req, res) => {
    const newUser = await User.find();
    res.status(200).json(newUser);
}));

async function getUserById(userId) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (decodedToken.userId !== userId) {
            throw new Error('Invalid user ID');
        }
        return user;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to get user by ID');
    }
}

module.exports = router;
