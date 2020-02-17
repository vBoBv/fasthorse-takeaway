const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodListSchema = new Schema({
	foodTitle: String,
	foodPrice: Number,
	foodDescription: String
});

module.exports = foodListSchema;
