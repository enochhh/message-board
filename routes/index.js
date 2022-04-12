var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!", 
    user: "Adam",
    added: new Date()
  },
  {
    text: "Hello world!", 
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

module.exports = router;
