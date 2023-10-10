const express = require("express");
const expressValidator = require("express-validator");
const https = require("https");
const path = require("path");
const env = require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const dbPool = require('./config/database');
const cors = require("cors")

const router = require("./routes/index.router");

const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/emenu-api",router);


const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL || "https://localhost";
global.baseUrl = BASE_URL + ":" + PORT;
const server = app.listen(PORT, console.log(`Server started on port ${PORT}`));
// const server = https.createServer({}, app).listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
module.exports = server;
