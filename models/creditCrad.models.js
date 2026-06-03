const mongooes = require("mongoose");

const cardSchema = new mongooes.Schema({
    bankName: String,
    cardNumber: Number,
    cardValidity: Number,
    cardHolderName: String,
    cardType:{
        type: String,
        default: "American Express"
    }

});

const CreditCard = new mongoose.model("CreditCard",cardSchema);

module.exports = CreditCard;