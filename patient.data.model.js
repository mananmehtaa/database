// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining a Patient_Data model using the Mongoose library
const Patient_Data = mongoose.model(
    // The name of the model in the MongoDB database
    "Patient_Data",
    // The schema for the model, which defines the structure of the documents
    new mongoose.Schema({
        patient: Object,        // A field for the patient object associated with the data
        heart_rate: String,     // A field for the patient's heart rate data
        temperature: String,    // A field for the patient's temperature data
        spo2: String,           // A field for the patient's oxygen saturation data
        created_at: {           // A field for the date and time the data was created
            type: Date,         // The field type is Date
            default: Date.now   // The default value is the current date and time
        }
    })
);

// Exporting the Patient_Data model so that it can be used in other modules
module.exports = Patient_Data;
