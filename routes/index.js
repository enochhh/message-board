var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!", 
    user: "Adam",
    description: "A short thought",
    added: new Date()
  },
  {
    text: "Hello world!", 
    user: "Charles",
    description: "A slightly longer thought",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
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
