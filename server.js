const express = require("express");
const PORT = process.env.PORT || 3002;

const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static("./public"));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));