// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining a Patient model using the Mongoose library
const Patient = mongoose.model(
    // The name of the model in the MongoDB database
    "Patient",
    // The schema for the model, which defines the structure of the documents
    new mongoose.Schema({
        user: Object,       // A field for the patient's user information
        mobile_num: String, // A field for the patient's mobile number
        doctor: Object      // A field for the doctor object associated with the patient
    })
);

// Exporting the Patient model so that it can be used in other modules
module.exports = Patient;
