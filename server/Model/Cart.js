const mongoose = require('mongoose');
// const {Schema} = mongoose
const cartSchema = new mongoose.Schema (
    {
        name:String,
        image: String,
        category: String,
        price:Number,
        email: String
    },
    {
        timestamps: true
    }
)

const Carts = mongoose.model('Carts', cartSchema)

module.exports = Carts
