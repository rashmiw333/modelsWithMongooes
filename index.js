const {initializeDatabase} = require("./db/db.connect");
const Hotel = require("./models/hotel.models");

initializeDatabase();

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

//Task1: Take hotel id and delete the records of that hotel.

async function deleteHotelById(hotelId){
    try{
        const deletedHotel = await Hotel.findByIdAndDelete(hotelId);
            console.log(deletedHotel);
    }catch(error){
        console.log("Error while fetching Data",error);
    }
}

//deleteHotelById('6a26891c4afce9eb638b1470');

//Task 2: Take hotel phone number and delete the records of that hotel.

async function deleteHotelByPhoneNumber(phoneNumber){
    try{
        const deletedHotel = await Hotel.findOneAndDelete({phoneNumber});
        console.log(deletedHotel);
    }catch(error){
        console.log("Error while data loading",error);
    }
}

deleteHotelByPhoneNumber("+1234555890");