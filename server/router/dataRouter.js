const express = require('express');
const router = express.Router();
const multer = require('multer');
const ApplyJobData = require('../Models/userForm.js');
const asyncHandler = require('express-async-handler')
const uri = 'mongodb+srv://admin:admin@devcoder980.64axway.mongodb.net/chetana?retryWrites=true&w=majority';


const path = require('path');



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
router.get('/adminuser', asyncHandler(async (req, res) => {
    const newUser = await ApplyJobData.find();
    res.status(200).json(newUser);
}));

// GET file download
router.get('/download/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, '../uploads', filename);

    res.download(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'File download failed' });
        }
    });
});



// POST a new user
router.post('/', upload.single('file'), async (req, res) => {
    const { placeholder, title, message, tags } = req.body;
    // Create a stream for the uploaded 
    if (!req.file) {
        return res.status(400).json({ message: 'No file was uploaded.' });
    }
    const uploadedFile = req.file;
    // Save the user data with the file ID
    const user = new ApplyJobData({
        placeholder,
        title,
        message,
        tags,
        file: uploadedFile.filename,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
});

module.exports = router;
