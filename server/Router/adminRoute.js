const express = require('express');
const { getAllAdmin, getSingleAdmin } = require('../Controller/adminController');
const { verifyJWT } = require('../Middleware/verificationJWT');
const adminRoute = express.Router()

adminRoute.get('/', getAllAdmin)

adminRoute.get('/:email', verifyJWT ,getSingleAdmin)

module.exports = adminRoute