const express = require('express');
const { addBookings, getAllBookings, deleteBooking } = require('../Controller/bookingsController');
const { verifyJWT } = require('../Middleware/verificationJWT');

const bookingsRouter = express.Router()

bookingsRouter.post('/', addBookings)

bookingsRouter.get('/', verifyJWT, getAllBookings)

bookingsRouter.delete('/:id', deleteBooking)

module.exports = bookingsRouter