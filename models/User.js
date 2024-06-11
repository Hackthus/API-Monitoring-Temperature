const mongoose = require('mongoose');
const mongoose_unique_valid = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
   
});

mongoose.plugin(mongoose_unique_valid);
module.exports = mongoose.model('User', userSchema);
  
