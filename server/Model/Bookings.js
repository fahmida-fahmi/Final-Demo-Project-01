const mongoose = require('mongoose');

const usersBookings = new mongoose.Schema({
    itemName: String,
    image: String,
    price:Number,
    name: String, 
    email: String,
    guest: Number,
    phone: Number,
    time: String,
    date: String,
    


},
{
    timestamps: true
}
)

const Bookings = mongoose.model('bookings', usersBookings)
module.exports = Bookings


