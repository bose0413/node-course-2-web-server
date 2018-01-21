const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

// config
// hbs: Express.js view engine for handlebars.js
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear() );
hbs.registerHelper('screamIt', (text) => text.toUpperCase() );

// express: fast, unopinionated, minimalist web framework for node.
app.set('view engine', 'hbs');

// Middelware
// logg
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.path}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unnable to append to server log');
    }
  });

  next();
});

// static
app.use(express.static(__dirname + '/public'));

//API
app.get('/', (req, res) =>
  res.render('home.hbs', {
    pageTitle: 'Home',
    wellcomeMessage: 'Wellcome to my website'
  })
);
app.get('/about', (req, res) =>
  res.render('about.hbs', {
    pageTitle: 'About'
  })
);

// Init
app.listen(3000, () => console.log('Server is up on port 3000'));
