const express = require('express');
const twig = require('twig');
const path = require('path');

const { Galaxy, Star, Planet, StarsPlanets } = require('./models');
const galaxyRoutes = require('./routes/galaxyRoutes');
const starRoutes = require('./routes/starRoutes');
const planetRoutes = require('./routes/planetRoutes');

const app = express();

// View engine setup
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use('/galaxies', galaxyRoutes);
app.use('/stars', starRoutes);
app.use('/planets', planetRoutes);

app.get('/', (req, res) => {
    res.render('home', {
        title: '🚀 Welcome to the Space Object Library API',
        description: 'Explore galaxies, stars, and planets with this RESTful API.'
    });
});

module.exports = app;
