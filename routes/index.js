var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Good morning!',
    user: 'Patrick',
    added: new Date()
  },
  {
    text: 'Good night!',
    user: 'Kristen',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

// New Message Form
router.get('/new', (req, res, next) => {
  res.render('form');
});

// Post new message
router.post('/new', (req, res, next) => {
  let user = req.body.name;
  let message = req.body.message;

  messages.push({text: message, user, added: new Date()});
  res.redirect('/');
})

module.exports = router;
