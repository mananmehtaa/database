// importing
const express = require('express') // Importing the Express framework
const cors = require('cors') // Importing CORS middleware
const cookieSession = require('cookie-session') // Importing cookie-session middleware

// app initializing
const app = express() // Initializing the Express application

var corsOptions = { // Setting CORS options
    origin: "http://localhost:3000"
}

// setting up cors options
app.use(cors(corsOptions)) // Using the CORS middleware with options

// parse requests of content-type - application/json, application/x-www-form-urlencoded
app.use(express.json()) // Parsing incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })) // Parsing incoming requests with URL-encoded payloads
app.use(
    cookieSession({ // Configuring cookie-session middleware
        name: "temp-session",
        secret: "COOKIE_SECRET", // should use as secret environment variable
        httpOnly: true
    })
)

const db = require('./models') // Importing database models
const dbConfig = require('./config/db.config') // Importing database configuration

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, { // Connecting to the MongoDB database
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { // If connection is successful
    console.log("Successfully connected to MongoDB") // Print success message
}).catch(e => { // If connection fails
    console.log(`Error: ${e}`) // Print error message
    process.exit() // Exit the Node.js process
})

// simple route
app.get("/", (req, res) => { // Defining a simple route that returns a JSON message
    res.json({ message: "Welcome to heart rate" })
})

// user and auth routes
require("./routes/auth.routes")(app) // Setting up routes related to user authentication
require("./routes/user.routes")(app) // Setting up routes related to user management

// set port, listen
const PORT = 8080; // Setting the port number for the server
app.listen(PORT, () => { // Starting the server and listening for incoming requests
    console.log(`Server is running on ${PORT}`) // Printing a message on the console
}) // End of the code block for starting the server
