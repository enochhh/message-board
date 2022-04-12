var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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

  res.render('index', { title: 'Express' });
});

module.exports = router;
