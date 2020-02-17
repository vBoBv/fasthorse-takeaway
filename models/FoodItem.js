const mongoose = require('mongoose');
const { Schema } = mongoose;
const FoodListSchema = require('./FoodList');

const foodItemSchema = new Schema({
	category: String,
	foodList: [FoodListSchema]
});

module.exports = foodItemSchema;
