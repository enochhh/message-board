var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/messages');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OurSpace', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.title, 
    user: req.body.name,
    description: req.body.description,
    added: new Date()
  })
  res.redirect('/');
});

module.exports = router;
