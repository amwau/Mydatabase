const mongoose = require('mongoose');

// Schema
const projectsSchema = new mongoose.Schema({
    name: { 
        required: true,
        type: Number,
    },
    Department: {
        required: true,
        type: String,
    },
    Employee: { 
        required: true,
        type: String, 
    },
});

module.exports = mongoose.model('Projects', projectsSchema);