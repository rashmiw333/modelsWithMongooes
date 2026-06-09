const {initializeDatabase} = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

//Task 1 & Task 2 : add data into database.
const newHotel = {
        name: "Sunset Resort",
        category: "Resort",
        location: "12 Main Road, Anytown",
        rating: 4.0,
        reviews: [],
        website: "https://sunset-example.com",
        phoneNumber: "+1299655890",
        checkInTime: "2:00 PM",
        checkOutTime: "11:00 AM",
        amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
        priceRange: "$$$$ (61+)",
        reservationsNeeded: true,
        isParkingAvailable: true,
        isWifiAvailable: true,
        isPoolAvailable: true,
        isSpaAvailable: true,
        isRestaurantAvailable: true,
        photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};
async function createHotel(newHotel){
    try{
        const hotel = new Hotel(newHotel);
        const saveHotel = await hotel.save();
        console.log(saveHotel,"Hotel Data");
    }catch(error){
        throw error;
    }

}

//createHotel(newHotel);

//Task3:  read all hotels from the database

async function readAllHotels(){
    try{
    const hotels = await Hotel.find();
      console.log(hotels);
    }catch(error){
        throw error;
    }
}

//readAllHotels();

//Task4 : read a hotel by its name ("Lake View")

async function readHotelByName(hotelName){
    try{
        const hotels = await Hotel.findOne({name:hotelName});
        console.log(hotels);
    }catch(error){
        throw error;
    }
}

//readHotelByName("Lake View");

//Task5: read all hotels which offers parking space

async function hotelsWithParkingSpace(){
    try{
        const hotels = await Hotel.find({isParkingAvailable: true});
        console.log(hotels);
    }catch(error){
            throw error;
    }
}

//hotelsWithParkingSpace();

//Task6: to read all hotels which has restaurant available

async function hotelsWithRestaurants(){
    try{
        const hotels = await Hotel.find({isRestaurantAvailable: true}); 
        console.log(hotels);
    }catch(error){
        throw error;
    }
}

//hotelsWithRestaurants();

//Task7: to read all hotels by category ("Mid-Range")

async function hotelsByCategory(category){
        try{
            const hotelsByCategory = await Hotel.find({category:category});
            console.log(hotelsByCategory);
        }catch(error){
            throw error;
        }
}

//hotelsByCategory("Mid-Range");

//Task8: to read all hotels by price range ("$$$$ (61+)")

async function hotelsByPrice(range){
        try{
            const hotels = await Hotel.find({priceRange:range});
            console.log(hotels);
        }catch(error){
            throw error;
        }
}

//hotelsByPrice("$$$$ (61+)");

//Task 9: to read all hotels with 4.0 rating

async function hotelsByRating(rating){
    try{
        const hotels = await Hotel.find({rating});
        console.log(hotels);
    }catch(error){
        throw error;
    }
}

//hotelsByRating(4.0);

//Task 10 :to read a hotel by phone number ("+1299655890")

async function hotelsByPhone(phoneNumber){
    try{
        const hotels = await Hotel.findOne({phoneNumber});
        console.log(hotels);
    }catch(error){
        throw error;
    }
}

hotelsByPhone("+1299655890");