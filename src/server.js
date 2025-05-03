const express = require('express');
const twig = require('twig'); // <-- Add this line
const path = require('path'); // <-- Add this too

const app = express();
const sequelize = require('./config/database');
const { Galaxy, Star, Planet, StarsPlanets } = require('./models');
const galaxyRoutes = require('./routes/galaxyRoutes');
const starRoutes = require('./routes/starRoutes');
const planetRoutes = require('./routes/planetRoutes');
const PORT = process.env.PORT || 8080;

// 🔧 Set up Twig as the view engine
app.set('view engine', 'twig');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use('/galaxies', galaxyRoutes);
app.use('/stars', starRoutes);
app.use('/planets', planetRoutes);

// 👇 Update your homepage route to render a template
app.get('/', (req, res) => {
    res.render('home', {
        title: '🚀 Welcome to the Space Object Library API',
        description: 'Explore galaxies, stars, and planets with this RESTful API.'
    });
});

sequelize.sync({ force: false })
    .then(() => {
        console.log('🌌 Database synced successfully.');
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ Unable to sync database:', error);
    });
