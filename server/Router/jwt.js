const express = require('express');
const { addToken } = require('../Controller/jwt');
const jwtRouter = express.Router()

jwtRouter.post('/', addToken)

module.exports = jwtRouter