const express = require('express');
const { addItemToCart, getAllCartItem, deleteCartItem } = require('../Controller/cartController');
const { verifyJWT } = require('../Middleware/verificationJWT');

const cartsRouter = express.Router()


cartsRouter.post('/', addItemToCart)

cartsRouter.get('/', verifyJWT, getAllCartItem)

cartsRouter.delete('/:id', deleteCartItem)


module.exports = cartsRouter