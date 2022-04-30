var express = require('express');

var router = express.Router();
var User = require('../models/User')

router.get('/', (req, res) => {
    //handle action
    res.render('users.ejs')
});

router.get('/new', (req, res) => {
    // render the create form
    res.render('users.ejs')
});

router.post('/', (req, res) => {
    // capture the form
    User.create(req.body, (err, user) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/');
    })
});

router.get('/id', (req, res) => {
    // single user detail
    res.render('singleUser.ejs')
});

router.get('/id/edit', (req, res) => {
    // edit form
});

router.put('/id', (req, res) => {
    // capture the update form
});

router.delete('/id', (req, res) => {
    // delete the user
});
module.exports = router;