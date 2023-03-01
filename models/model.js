const mongoose = require('mongoose');

// Schema
const projectsSchema = new mongoose.Schema({
    name: { 
        required: true,
        type: String,
    },
    Department: {
        required: true,
        type: String,
    },
    Employee : { 
        required: true,
        type: String, 
    },
   
});

module.exports = mongoose.model('projects', projectsSchema);
const projectsModel = mongoose.model('projects', projectsSchema);
