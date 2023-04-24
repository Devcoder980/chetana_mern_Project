const express = require('express');
const router = express.Router();
const multer = require('multer');
const ApplyJobData = require('../Models/userForm.js');
const asyncHandler = require('express-async-handler')
const { MongoClient, GridFSBucket } = require('mongodb');
const path = require('path');
const fs = require('fs');
const uri = 'mongodb+srv://admin:admin@devcoder980.64axway.mongodb.net/chetana';
const client = new MongoClient(uri);
let fileName;
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9)
        fileName = `${file.fieldname}_${uniqueSuffix}${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});



const upload = multer({ storage: storage });

// GET all users
router.use('/file', express.static(path.join(__dirname, '../uploads')));
router.get('/adminuser', asyncHandler(async (req, res) => {
    const newUser = await ApplyJobData.find();
    res.status(200).json(newUser);
}));

// GET a file by filename
router.get('/file/:filename', (req, res) => {
    const filePath = path.join(__dirname, '../uploads', req.params.filename);
    console.log(filePath);
    res.send(filePath);
});

// POST a new user
router.post('/', upload.single('file'), async (req, res) => {
    const { placeholder, title, message, tags } = req.body;

    try {
        // Connect to the database
        await client.connect();
        const database = client.db('mydatabase');
        const bucket = new GridFSBucket(database);

        // Create a stream for the uploaded file
        const stream = bucket.openUploadStream(req.file.originalname);

        // Pipe the file data into the stream
        if (req.file && req.file.stream) {
            req.file.stream.pipe(stream);
        } else {
            console.error('File stream is not defined');
        }

        // Save the user data with the file ID
        // Save the user data with the file ID
        const user = new ApplyJobData({
            placeholder, title, message, tags,
            file: `${fileName}` // Set the new filename as a field in the user document
        });


        const newUser = await user.save();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        await client.close();
    }
});

module.exports = router;
