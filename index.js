// Importing the Mongoose library
const mongoose = require('mongoose');

// Setting the default Promise library for Mongoose to use
mongoose.Promise = global.Promise;

// Creating an empty object to hold our database models
const db = {};

// Adding the Mongoose library to the db object
db.mongoose = mongoose;

// Importing and adding the user model to the db object
db.user = require('./user.model');

// Importing and adding the patient model to the db object
db.patient = require('./patient.model');

// Importing and adding the doctor model to the db object
db.doctor = require('./doctor.model');

// Importing and adding the patient data model to the db object
db.patient_data = require('./patient.data.model');

// Exporting the db object so that it can be used in other parts of the codebase
module.exports = db;
