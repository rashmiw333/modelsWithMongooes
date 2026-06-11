const {initializeDatabase} = require("./db/db.connect");
 const Restaurant = require("./models/restaurant.models");

initializeDatabase();

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

//Task1:  Take restaurant id and delete the records of that restaurant.

async function deleteRestaurantById(restaurantId){
    try{
        const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
        console.log(deletedRestaurant)
    }catch(error){
        console.log("Error occurred while fetching Data",error);
    }
}

//deleteRestaurantById('6a267eb053ab8c1fb77992b3');

//Task2: Take restaurant name  and delete the records of that restaurant.

async function deleteRestaurantFromDB(restaurantName){
    try{
        const deletedRestaurant = await Restaurant.findOneAndDelete({name:restaurantName});
        console.log(deletedRestaurant);
    }catch(error){
        console.log("error occurred while deleting Data",error);
    }
}

deleteRestaurantFromDB("Cha Cha");