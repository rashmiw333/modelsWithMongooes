const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
//     name (String): The name of the restaurant. This field is required.
// cuisine (Array of Strings): The cuisine offered by restaurant. 
// Choose form 'American', 'Italian', 'Chinese', 'Indian', 'Japanese', 'Mexican', 'Thai', 'French', 'Mediterranean'
// , 'Greek', 'Spanish', and 'Other'. This field is required.
// location (String): The location of the restaurant. This field is required.
// rating (Number): The restaurant's rating, represented as a number between 0 and 5. The default value is 0.
// reviews (Array of Strings): The user review comments for the restaurant.
// website (String): The URL to the restaurant's official website.
// phoneNumber (String): The contact phone number for the restaurant. This field is required.
// openHours (String): The open hours of restaurant.
// priceRange (String): The price range of menu items present at the restaurant. 
// Choose form '$ (0-10)', '$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)' and 'Other'.
// reservationsNeeded(Boolean): Is reservation needed for restaurant. Default value is false.
// isDeliveryAvailable(Boolean): Is home delivery option available. Default value is false.
// menuUrl (String): The link for menu of the restaurant. This field is required.
// photos (Array of Strings): URLs of photos showcasing the restaurant's ambiance, dishes, etc.
// Include the option { timestamps: true } to automatically track the creation and update times of each restaurant entry.

name: {
    type: String,
    required:true
},
cuisine:{
    type:[String],
    enum: ['American', 'Italian', 'Chinese', 'Indian', 'Japanese', 'Mexican', 'Thai', 'French', 'Mediterranean', 
        'Greek', 'Spanish','Other'],
    required:true    
},
location:{
    type:String,
    required:true
},
rating:{
    type:Number,
    min:0,
    max:5,
    default:0
},
reviews:{
    type:[String],

},
website:String,
phoneNumber:{
    type:String,
    required:true
},
openHours:{
    type:String
},
priceRange:{
    type:String,
    enuum:['$ (0-10)', '$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)' , 'Other'],
},
reservationsNeeded:{
    type:Boolean,
    default:false
},
isDeliveryAvailable:{
    type:Boolean,
    default:false
},
menuUrl:{
    type:String,
    required:false
},
photos:{
    type:[String]
},
},{ timestamps: true });

const Restaurant = mongoose.model('Restaurant',restaurantSchema);
module.exports = Restaurant;