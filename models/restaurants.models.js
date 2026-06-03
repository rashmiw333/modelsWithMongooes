const mongooes = require("mongoose");

const restaurantSchema = new mongooes.Schema({
    name:{
        type: String,
        required:true
    },
    cuisine :{
        type: String,
        enum:[ 'Italian', 'Mexican', 'Chinese', 'Indian', 'American', 'French', 'Japanese', 'Mediterranean', 'Thai', 'Vegetarian', 'Vegan','Other']
    },
    location:{
         type: String,
        required:true
    },
    owner:{
        type: String,
        required:true
    },
    phone : String,
    websiteUrl: String,
    openingYear: Number,
    rating :{
        type: Number,
        min:0,
        max:5,
        default:0,
    },
    specialDishes:{
        type: String
    },
    photoUrls:{
        type: String
    }

},{timeStamps:true},
);

const Restaurants = new mongoose.model("Restaurants",restaurantSchema);

module.exports = Restaurants;