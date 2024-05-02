const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path"); 
const measurementsRouter = require("./routes/measurementsRouter") // import router
const factsRouter = require("./routes/factsRouter"); // import facts router
const mediaRouter = require("./routes/mediaRouter");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3333;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));

// ROUTES

// example usage: http://localhost:3333/measure/length?length=100 // example usage: http://localhost:3333/measure/area?area=100 // example usage: http://localhost:3333/facts
app.use("/measure", measurementsRouter); // use router for /measure as middleware
app.use("/facts", factsRouter); // use facts router as middleware
app.use("/media", mediaRouter);

app.get("/hello", (req, res, next) => {
    res.send("Hello World!");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
