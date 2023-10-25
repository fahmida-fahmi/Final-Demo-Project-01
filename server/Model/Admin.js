const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const {Schema} = mongoose

const adminSchema = new Schema(
  {
    name: String,
    password:String,
    email: String,
  },
  { timestamps: true }
);

const Admins = mongoose.model('admins',adminSchema)

module.exports = Admins
