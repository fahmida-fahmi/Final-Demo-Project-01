const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
  recipe_name: String,
  ingredients: [String],
  approx_price_bdt: Number,
  nutritional_value: {
    calories: Number,
    protein: Number,
    carbohydrates: Number,
    fat: Number,
    fiber: Number,
  },
  image: String,
  category: String,
}, { timestamps: true });

const Services = mongoose.model('services', recipeSchema);

module.exports = Services;
