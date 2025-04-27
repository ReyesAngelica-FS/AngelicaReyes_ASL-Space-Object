const express = require('express');
const app = express();
const sequelize = require('./config/database');
const { Galaxy, Star, Planet, StarsPlanets } = require('./models');
const galaxyRoutes = require('./routes/galaxyRoutes');
const starRoutes = require('./routes/starRoutes');
const planetRoutes = require('./routes/planetRoutes');

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/galaxies', galaxyRoutes);
app.use('/stars', starRoutes);
app.use('/planets', planetRoutes);

app.get('/', (req, res) => {
    res.send('🚀 Space Object Library API is running!');
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
