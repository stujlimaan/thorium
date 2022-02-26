const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName:  {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Fantasy","Fairy" ] 
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema)