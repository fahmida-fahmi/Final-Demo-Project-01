const express = require('express');
const { createPayment } = require('../Controller/paymentController');
const { verifyJWT } = require('../Middleware/verificationJWT');
const createPaymentRoute = express.Router()

createPaymentRoute.post('/',verifyJWT, createPayment)


module.exports = createPaymentRoute
