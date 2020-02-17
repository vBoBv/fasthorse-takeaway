const mongoose = require('mongoose');
const { Schema } = mongoose;
const FoodItemSchema = require('./FoodItem');

const menuSchema = new Schema({
	item: [FoodItemSchema],
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
	// title: String,
	// price: Number,
	// description: String,
	// _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model('menus', menuSchema);
