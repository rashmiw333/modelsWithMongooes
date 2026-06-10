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

//Task1: hotel: Lake View and update its checkOutTime to 11 AM.

async function updateHotelById(hotelId,dataToUpdate){
    try{
    const hotel = await Hotel.findByIdAndUpdate(hotelId,dataToUpdate,{new:true});
      console.log(hotel);
    }catch(error){
        console.log("Error occurred while updating data",error);
    }
}

//updateHotelById('6a27e3a4b6bf41af0d30df99',{checkOutTime:"11:00 AM"})

//Task2 :  "Sunset Resort" update its rating to 4.2.

async function updateHotelByName(hotelName,dataToUpdate){
    try{
        const hotel = await Hotel.findOneAndUpdate({name:hotelName},dataToUpdate,{new:true});
        console.log(hotel);
    }catch(error){
        console.log("Error while changing data",error);
    }
}

//updateHotelByName("Sunset Resort",{rating: 4.2});

//Task3:  Take the hotel with phone number "+1299655890" update it to "+1997687392".

async function updateHotelWithPhoneNumber(phoneNumber,dataToUpdate){
    try{
        const hotel = await Hotel.findOneAndUpdate({phoneNumber},dataToUpdate,{new:true});
        console.log(hotel);
    }catch(error){
           console.log("error found while updating",error);
    }
}

updateHotelWithPhoneNumber("+1299655890",{phoneNumber:'+1997687392'});

