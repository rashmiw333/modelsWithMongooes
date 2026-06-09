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

//Task 3:Read all restaurants 

async function readAllRestaturantsData(){
    try{
        const allRestaurants = await Restaurant.find();
        console.log(allRestaurants);
    }catch(error){
        throw error;
    }
}

//readAllRestaturantsData();

//Task 4: read restaurants by name

async function readRestaurantsByname(restaurantName){
    try{
        const restaurantByName = await Restaurant.find({name:restaurantName});
        console.log(restaurantByName);
    }catch(error){
        throw error;
    }
}

//readRestaurantsByname("Somi");

//Task 5: Restaurants Which Offers reservations

async function readALLRestaurantsWithReservations(){
    try{
    const allRestaurants = await Restaurant.find({reservationsNeeded:true});
    console.log(allRestaurants);
    }catch(error){
        throw error;
    }
}

// readALLRestaurantsWithReservations();

//Task 6: Restaurants offers delivery

async function restaurantsWithDelivery(){
    try{
    const restaurantsWithDelivery = await Restaurant.find({isDeliveryAvailable:true});
    console.log(restaurantsWithDelivery);
    }catch(error){
        throw error;
    }
}

//restaurantsWithDelivery();

//Task 7: function to read phoneNumber

async function restaurantWithPhoneNumber(phoneNum){
    try{    
        const restaurantWithPhoneNum = await Restaurant.findOne({phoneNumber:phoneNum});
        console.log(restaurantWithPhoneNum);
    }catch(error){
        throw error;
    }
}

//restaurantWithPhoneNumber("+1288997392");

//Task 8: Read all restaurants by uisine ("Italian").

async function restaurantsWithCuisine(cuisineName){
    try{
        const restaurants = await Restaurant.find({cuisine:cuisineName})
        console.log(restaurants);
    }catch(error){
        throw error;
    }
}

restaurantsWithCuisine("Italian");
