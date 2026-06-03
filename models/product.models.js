const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
productimageUrl: String,
productName: String,
isProductNew: Boolean,
productCategory: String,
productDescription: String,
colors:{
    type: String,
    enum: ['blue','red','green','orange','black']
},
size:{
    type:Number,
    enum: [7,8,9,10,11]
},
price: Number

});

const Product = new mongoose.model("Product",productSchema);

module.exports = Product;

