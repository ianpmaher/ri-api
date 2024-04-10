const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path"); 
const measurementsRouter = require("./routes/measurementsRouter") // import router
const app = express();
const port = 3333;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));

// ROUTES

app.use("/measure", measurementsRouter); // use router for /measure as middleware

app.get("/hello", (req, res, next) => {
    res.send("Hello World!");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
