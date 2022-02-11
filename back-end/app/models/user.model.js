const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    hs: String
});

var MoreDataUserSchema = new mongoose.Schema({
    user_id: String,
    address: String,
    ca_ref: String,
    typeOfMeter: Number
})
const MoreDataUser = mongoose.model('MDUser', MoreDataUserSchema);
const UserData = mongoose.model('User', UserSchema);
module.exports = { UserData, MoreDataUser }