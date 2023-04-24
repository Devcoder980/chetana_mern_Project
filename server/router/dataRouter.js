const express = require('express');
const router = express.Router();
const multer = require('multer');
const ApplyJobData = require('../Models/userForm.js');

const { MongoClient, GridFSBucket } = require('mongodb');
const path = require('path');

const uri = 'mongodb+srv://admin:admin@devcoder980.64axway.mongodb.net/chetana';
const client = new MongoClient(uri);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const fileName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});

const upload = multer({ storage: storage });

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await ApplyJobData.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:company', async (req, res) => {
    const { company } = req.params;

    try {
        const users = await ApplyJobData.find({ company: company });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// POST a new user
router.post('/', upload.single('file'), async (req, res) => {
    const { placeholder, title, message, tags} = req.body;

    try {
        // Connect to the database
        await client.connect();
        const database = client.db('chetana');
        const bucket = new GridFSBucket(database);

        // Create a stream for the uploaded file
        const stream = bucket.openUploadStream(req.file.originalname);

        // Handle errors when piping file data into the stream
        stream.on('error', (err) => {
            console.error('Error piping file data into stream:', err);
        });
        
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
            file: stream.id // Set the file ID as a field in the user document
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
