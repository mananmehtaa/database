// Importing the Mongoose library
const mongoose = require('mongoose');

// Defining a User model using the Mongoose library
const User = mongoose.model(
    // The name of the model in the MongoDB database
    "User",
    // The schema for the model, which defines the structure of the documents
    new mongoose.Schema({
        username: String,                   // A field for the user's username
        email: String,                      // A field for the user's email
        password: String,                   // A field for the user's password
        created_on: {                       // A field for the date and time the user was created
            type: Date,                     // The field type is Date
            default: Date.now               // The default value is the current date and time
        },
        user_type: String,                  // A field for the type of user (e.g. "patient", "doctor")
    })
);

// Exporting the User model so that it can be used in other modules
module.exports = User;
