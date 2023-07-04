const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    placeholder: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    tags: [{ type: String }],
    file: {
        type: String,
    }
});

module.exports = mongoose.model('Data', dataSchema);
