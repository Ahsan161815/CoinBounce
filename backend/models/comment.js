const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'users',
    },
    blog: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'blogs',
    },
}, {timestamps: true}
);

module.exports = mongoose.model('Comment', commentSchema, 'comments');