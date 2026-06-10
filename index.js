const {initializeDatabase} = require("./db/db.connect");
 const Restaurant = require("./models/restaurant.models");

initializeDatabase();

//Task 1 and Task2 to add data in db 
        const newRestaurant = {
            name: "Yo China",
            cuisine: ["Chinese", "Italian"],
            location: "MG Road, Bangalore",
            rating: 3.9,
            reviews: [],
            website: "https://yo-example.com",
            phoneNumber: "+1288997392",
            openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
            priceRange: "$$$ (31-60)",
            reservationsNeeded: true,
            isDeliveryAvailable: false,
            menuUrl: "https://yo-example.com/menu",
            photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};

        async function createRestaurant(newRestaurant){
            try{
                const restaurant = new Restaurant(newRestaurant);
                const saveRestaurant= await restaurant.save();
                console.log(saveRestaurant,"restaurant Data")
            }catch(error){
                throw error;
            }
        }
           
//  createRestaurant(newRestaurant);

//  Task1: with restaurant ID and an object with updated data of rating from 3.9 to 4.1.

async function restaurantUpdate(restaurantId,dataToUpdate){
    try{
        const updatedData = await Restaurant.findByIdAndUpdate(restaurantId,dataToUpdate,{new:true});
        console.log(updatedData);
    }catch(error){
        console.log("Error while updating data",error);
    }
}

//restaurantUpdate('6a27c77e767452474a7bd63d',{rating:4.1})

//Task2:  update  name from "Somi" to "Som Sarovar".

async function updateRestaurantDetails(restaurantname,dataToupdate){
    try{
        const updatedRestaurant = await Restaurant.findOneAndUpdate({name:restaurantname},dataToupdate,{new:true});
        console.log(updatedRestaurant);
    }catch(error){
        console.log("Error occurred while chnaging data",error);
    }
}

//updateRestaurantDetails('Somi',{name: 'Som Sarovar'});

//Task 3: restaurant with phone number "+1288997392",update isDeliveryAvailable option to true.

async function updatePhoneNumber(phoneNumber,dataToUpdate){
    try{
        const updatedRestaurant = await Restaurant.findOneAndUpdate({phoneNumber},dataToUpdate,{new:true});
        console.log(updatedRestaurant);
    }catch(error){
        console.log("Error while changing the data",error);
    }
}

updatePhoneNumber('+1288997392',{ isDeliveryAvailable: true});