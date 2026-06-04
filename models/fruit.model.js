const mongooes = require("mongoose");

const fruitSchema = new mongooes.Schema({
    fruitImageUrl: String,
    fruitName: String,
    fruitInfo: String,
    calories: Number,
    carbohydrates: String,
    protiens: String,
    fats: String

});

const Fruit = mongoose.model("Fruit",fruitSchema);

module.exports = Fruit;