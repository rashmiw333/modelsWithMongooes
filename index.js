const {initializeDatabase} = require("./db/db.connect");
 const Car = require("./models/cars.models")

initializeDatabase();


const newCarData = {
        brand: "Honda",
        model: "Civic",
        year: 2018,
        bodyStyle: "Coupe",
        fuelType: "Gasoline",
        transmission: "Manual",
        engine: "1.5L Turbocharged Inline-4",
        mileage: 40000,
        color: "Black",
        price: 1800000,
        condition: "Used",
        description: "Sporty Civic coupe with low mileage and manual transmission.",
        photos: [
            "https://example.com/civic-photo1.jpg",
            "https://example.com/civic-photo2.jpg",
            "https://example.com/civic-photo3.jpg"
        ]
};
async function createCar(newCarData){
    try{
        const car = new Car(newCarData);
        const saveCar = await car.save();
        console.log(saveCar,"Car Data");
    }catch(error){
        throw error;
    }

}

// createCar(newCarData);

//Task3 : function to read all cars

async function readAllCars(){
    try{
        const cars = await Car.find();
        console.log(cars,"cars Data");
    }catch(error){
        throw error;
    }
}

//readAllCars();

//Task4: Create a function to read cars by brand ("Ford"). 

async function readCarByBrand(brandName){
    try{
        const car = await Car.findOne({brand:brandName})
        console.log(car,"carData");
    }catch(error){
        throw error;
    }
}

//readCarByBrand('Ford');

//Task5:  Create a function to read cars by color ("Black"). 

async function readCarsByColor(color){
    try{
    const cars = await Car.find({color});
    console.log(cars);
    console.log(cars);
    }catch(error){
        throw error;
    }
}

readCarsByColor("Black");

//Task 6: 6. car with model "Corolla".Update the price to 2300000. 

async function updatecarPrice(model,dataToUpdate){
    try{
        const car = await Car.findOneAndUpdate({model},dataToUpdate,{new:true});
        console.log(car);
    }catch(error){
        console.log("error while fecthing data",error);
    }
}
//updatecarPrice("Corolla",{price:2300000});

//Task7: car with model "Model S". Update the condition to "Used". 

async function updateCarCondition(model,dataToUpdate){
    try{
        const car = await Car.findOneAndUpdate({model},dataToUpdate,{new:true});
        console.log(car);
    }catch(error){
        console.log("error occurred while fecthing data",error);
}
}

//updateCarCondition("Model S",{ condition: 'Used'});

//Task8: Take the id of the car brand Tesla from the database and delete that car record.

async function deletecarById(carId){
    try{
        const deletedCar = await Car.findByIdAndDelete(carId);
        console.log(deletedCar);
    }catch(error){
        console.log("Error found while loading data",error);
    }
}

//deletecarById('6a25ba4b7dc38b5c9b7e48e5');

//Task9: Delete the car data with body style "Sedan" from the database 

async function deleteCarByBodyStyle(bodyStyle){
    try{
        const deletedCar = await Car.findOneAndDelete({bodyStyle});
        console.log(deletedCar);
    }catch(error){
        console.log("Error found while fectching data",error);
    }
}

//deleteCarByBodyStyle({bodyStyle: 'Sedan',});