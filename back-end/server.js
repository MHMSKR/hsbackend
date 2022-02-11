const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// setting the database
const cf = require('./config/config');
mongoose.connect(cf.dbUrl);
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + cf.dbUrl)
})
mongoose.connection.on('error', function(err) {
    console.log('mongoose connection error: ' + err)
})
mongoose.connection.on('disconnection', () => {
        console.log('Mongoose disconnected')
    })
    // require('./app/controllers/bluetooth.js')
    //example the api 
require('./app/routes/api.route.js')(app)

// listening of server
app.listen(cf.port, () => {
    console.log("server an listen on link " + `http://localhost:` + cf.port)
})