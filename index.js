const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const measurementsRouter = require("./routes/measurementsRouter"); // import router
const factsRouter = require("./routes/factsRouter"); // import facts router
const mediaRouter = require("./routes/mediaRouter");
const yelpRouter = require("./routes/yelpRouter");
const restaurantsRouter = require("./routes/restaurantsRouter");
const citiesRouter = require("./routes/citiesRouter");
const historyRouter = require("./routes/historyRouter");
const peopleRouter = require("./routes/peopleRouter");
const rateLimit = require("express-rate-limit");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3333;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));

// Define the rate limit rule
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes.",
});

// ======================== Rate Limiting ======================== //
// Apply the rate limiting middleware to all requests
app.use(limiter);

// ROUTES

// example usage: http://localhost:3333/measure/length?length=100 // example usage: http://localhost:3333/measure/area?area=100 // example usage: http://localhost:3333/facts
app.use("/measure", measurementsRouter); // use router for /measure as middleware
app.use("/facts", factsRouter); // use facts router as middleware
app.use("/media", mediaRouter);
app.use("/yelp", yelpRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/cities", citiesRouter);
app.use("/history", historyRouter);
app.use("/people", peopleRouter);

app.get("/hello", (req, res, next) => {
  res.send("Hello World!");
  next();
});

app.get("/", (req, res) => {
  // serve index.html
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
