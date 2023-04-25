const express = require('express');
const router = express.Router();
const multer = require('multer');
const ApplyJobData = require('../Models/userForm.js');
const asyncHandler = require('express-async-handler')
const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const uri = 'mongodb+srv://admin:admin@devcoder980.64axway.mongodb.net/chetana?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const path = require('path');

let fileName;

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

// Serve uploaded files
router.use('/file', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('mydatabase');
        const bucket = new GridFSBucket(database);

        const downloadStream = bucket.openDownloadStreamByName(req.params.filename);
        downloadStream.pipe(res);
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        await client.close();
    }
});

// GET all users
router.get('/adminuser', asyncHandler(async (req, res) => {
    const newUser = await ApplyJobData.find();
    res.status(200).json(newUser);
}));

// POST a new user
router.post('/', upload.single('file'), async (req, res) => {
    const { placeholder, title, message, tags } = req.body;

    // Connect to the database
    await client.connect();
    const database = client.db('mydatabase');
    const bucket = new GridFSBucket(database);

    // Create a stream for the uploaded 
    
    const stream = bucket.openUploadStream(req.file.originalname);
    console.log("this is stream",stream);
    // Pipe the file data into the stream
    console.log(req.file);
    if (req.file && req.file.stream) {
        req.file.stream.pipe(stream);
    } else {
        console.error('File stream is not defined');
    }

    // Save the user data with the file ID
    const user = new ApplyJobData({
        placeholder,
        title,
        message,
        tags,
        file: {
            id: stream.id, // Set the file ID as a field in the user document
            filename: req.file.originalname,
            contentType: req.file.mimetype,
        },
    });

    const newUser = await user.save();

    res.status(201).json(newUser);
});

module.exports = router;
