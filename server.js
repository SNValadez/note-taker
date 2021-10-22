const express = require("express");
const PORT = process.env.PORT || 3002;

const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');