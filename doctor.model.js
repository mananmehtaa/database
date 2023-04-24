// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining a Doctor model using the Mongoose library
const Doctor = mongoose.model(
    // The name of the model in the MongoDB database
    "Doctor",
    // The schema for the model, which defines the structure of the documents
    new mongoose.Schema({
        user: Object,      // A field for the doctor's user information
        mobile_num: String // A field for the doctor's mobile number
    })
);

// Exporting the Doctor model so that it can be used in other modules
module.exports = Doctor;
