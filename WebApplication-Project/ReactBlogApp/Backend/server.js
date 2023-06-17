// Import express
let express = require("express");
// Import Body parser
let bodyParser = require("body-parser");
// Import Mongoose
let mongoose = require("mongoose");
require("dotenv").config();
// Import routes
let apiRoutes = require("./routes/api-routes");
//Auth
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");

// Initialize the app
let app = express();

// ---------------------- Middileware configurations -----------------
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//Configure cookie session
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//configure cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// --------------------- MongoDB Connections ---------------------
// Connect to Mongoose and set connection variable
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });
var db = mongoose.connection;
// Added check for DB connection
if (!db) console.log("Error connecting db");
else console.log("Db connected successfully");

// ----------------- server configuration -----------------------
// Setup server port
var port = process.env.PORT || 8080;

// Use routes in the App
app.use("/api", apiRoutes);
app.use("/auth", authRoute);

// Send message for default URL
app.get("/", (req, res) =>
  res.send("Hello Dev People ~ from Express \n Created by ~ Prabir Trarafdar")
);

// Launch app to listen to specified port
app.listen(port, () => console.log(`Listenting on port ${port}...`));
