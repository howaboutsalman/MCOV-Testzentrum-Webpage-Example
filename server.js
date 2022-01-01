const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./server/database/connection');
const path = require('path');
const app = express();

const PORT = process.env.PORT|| 8080;
connectDB();
app.set("view engine", "ejs");

app.use('/', require('./server/routes/router'));
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/images', express.static(path.resolve(__dirname, "assets/images")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/views', express.static(path.resolve(__dirname, "views/")));

app.listen(PORT, () => {console.log(`App running on Port ${PORT}`);});