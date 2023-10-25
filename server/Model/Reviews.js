const mongoose = require('mongoose');
const {Schema} = mongoose 

const reviewsSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        details: String,
        rating: Number,
        favRecipe: String,
        suggestion  : String
        
    },
    {timestamps: true}
    )
const Reviews = mongoose.model('Reviews', reviewsSchema)

module.exports = Reviews