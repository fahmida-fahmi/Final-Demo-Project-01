const mongoose = require('mongoose');
const {Schema} = mongoose 

const servicesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String, 
    recipe: String,
    image: String,
    category: String,
    price: Number,
},
{timestamps: true}
)

const Services = mongoose.model("services", servicesSchema)

module.exports = Services