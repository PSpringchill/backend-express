const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prod_number: Number,
    prod_name: String,
    prod_choice1: String,
    prod_choice2: String,
    prod_choice3: String,
    prod_choice4: String,
    prod_desc: String,
    updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', ProductSchema)