const { UserData, MoreDataUser } = require('../models/user.model')

exports.create = function(req, res) {
    if (!req.body.username) {
        res.status(400).send({ message: "can not be empty" });
    }

    var user = new UserData({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        hs: req.body.hs
    })
    user.save(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log('data is saved')
            res.send(data)
        }
    })

}

exports.list = function(req, res) {
    UserData.find((err, user) => {
        if (err) {
            console.log(err)
        } else {
            res.send(user)
        }
    })
}

exports.index = function(req, res) {
    UserData.findById(req.params.id, function(err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            req.send(JSON.stringify({
                error: 'Error'
            }))
        }
    })
}

exports.update = function(req, res) {
    var user_id = String(req.params.id)
    var moreData = new MoreDataUser({
        user_id: user_id, // get data frome current user id 
        address: req.body.address,
        ca_ref: req.body.ca_ref,
        typeOfMeter: req.body.typeOfMeter
    })

    moreData.save(function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
}