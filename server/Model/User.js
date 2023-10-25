const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const {Schema} = mongoose

const userSchema = new Schema(
  {
    name: {
        type: String,
        trim: true,
        require: [true, 'name is required'] 
    },
    password:{
        type: String,
        trim: true,
        
    },
    email: {
        type: String, 
        trim: true, 
        require: [true, 'this email is already exits'],
        unique: true
    }, 
    role: String,  
  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema)

module.exports = User
