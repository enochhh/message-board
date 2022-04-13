var express = require('express');
var router = express.Router();
const moment = require('moment');
const messages = require('../public/javascripts/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OurSpace', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.unshift({
    text: req.body.title, 
    user: req.body.name,
    description: req.body.description,
    added: moment().startOf('hour'-1).fromNow()
  })
  res.redirect('/');
});

module.exports = router;
