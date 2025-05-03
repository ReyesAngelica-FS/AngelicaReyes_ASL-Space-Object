const app = require('./src/server'); 
const sequelize = require('./src/config/database'); 

const PORT = process.env.PORT || 8080;

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
