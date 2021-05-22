const mongoose = require('mongoose'); 

var Schema = mongoose.Schema; 

var UserSchema = new Schema({ 

    name: { 
        type: String, 
        trim: true, 
        unique: 1, 
        maxlength: 50
    }, 
    total_amount: { 
        type: Number, 
        default: 0
    }, 
    portfolio: {
        type: Array
    }
});

const User = mongoose.model("User", UserSchema)
module.exports = { User }