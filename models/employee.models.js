const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    profilePic : String,
    fullName: String,
    designation: String,
    employeeId : String,
    dob: Date,
    mail: String,
    phoneNum: Number,
    address: String
});

const Employee = mongoose.model("Employee",employeeSchema);

module.exports = Employee;