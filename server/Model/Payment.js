const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

    email: String,
    transactionId : String,
    price: Number, 
    quantity: Number,
    items: Number, 
    itemNames: [String],
    date: Date
}
,
{
    timestamps: true
})

const Payment = mongoose.model("payments", paymentSchema)

module.exports = Payment

