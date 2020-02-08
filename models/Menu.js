const mongoose = require("mongoose");
const { Schema } = mongoose;

const menuSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("menus", menuSchema);
