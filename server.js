/****
 * Dependencies
 **/
const express =           require("express");
const methodOverride =    require("method-override");
const mongoose =          require("mongoose");
const show =              console.log;
const app =               express();
const routes =            require("./controllers/routes.js");
const db =                mongoose.connection;

/****
 * Port
 **/
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

/****
 * Database
 **/
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/project2";

/****
 * Connect to mongo
 **/
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useFindAndModify: true,
//   useUnifiedTopology: true,
// });

/****
 * Error / Success
 **/
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));
// open the connection to mongo
db.on("open", () => {});

/****
 * Middleware
 **/

//use public folder for static assets
app.use(express.static("public"));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}

app.use(express.urlencoded({ extended: false })); // extended: false - does not allow nested objects in query strings

app.use(express.json()); // returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride("_method")); // allow POST, PUT and DELETE from a form
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

/****
 * Routes
 **/
// localhost:3000
app.get("/", routes);

/****
 * New routes
 **/
app.use("/products", routes);

/****
 * Listener
 **/
app.listen(PORT, () => console.log("Listening on port:", PORT));
