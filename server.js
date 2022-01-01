const express = require('express');
const path = require('path');
const app = express();


app.set("view engine", "ejs");

app.use('/', require('./server/routes/router'));
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/images', express.static(path.resolve(__dirname, "assets/images")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server running..."));