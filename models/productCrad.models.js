const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productImageUrl: String,
    productInfo: String,
    productRating:Number,
    productReviews: String,
    productFeatures: {
        type: [String],
        default: [
      'High-resolution 4K movie recording',
      'Choose your own shooting style',
      'Self-framing made easy',
      'Flexible low-angle shooting',
      'Convenient Touch Tracking and Touch Focus features',
      'Cleaner images in dimly lit settings',
      'Superior image resolution and natural-looking textures',
      'Uncompromising image quality',
      'Real-time Tracking',
      'Persistent tracking at high speed',
      'NFC & Bluetooth'
    ]
    },
    productPrice:Number,
    isDiscounted: Boolean,
    discountedPrice: Number,
    availableItems: Number,
   delivery:{
    type:String,
    default:"free Delivery"
   }

});

const ProductCard =  mongoose.model("ProductCard",productSchema);

module.exports = ProductCard;