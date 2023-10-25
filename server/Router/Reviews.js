const express = require('express');
const reviewRouter = express.Router()

const { addReview, getAllReviews } = require('../Controller/reviewController');

reviewRouter.get('/', getAllReviews)
reviewRouter.post('/', addReview)

module.exports = reviewRouter