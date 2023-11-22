const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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

userSchema.methods.comparePassword = async (candidatePassword, userPassword) => {
  console.log('inside method');
  return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model('User',userSchema)

module.exports = User
