const mongoose = require('mongoose')

var historySchema = mongoose.Schema({
    month: String,
    energy: {
        energyEachDay: []
    },
    totalEnergy: Number

})