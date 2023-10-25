const express = require('express');
const {  postPaymentInfo, getAllPayments } = require('../Controller/paymentController');
const { verifyJWT } = require('../Middleware/verificationJWT');

const paymentRoute = express.Router()


paymentRoute.post('/', verifyJWT, postPaymentInfo)

paymentRoute.get('/', verifyJWT, getAllPayments)


module.exports = paymentRoute
