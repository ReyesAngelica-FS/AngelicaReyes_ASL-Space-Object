const { Planet } = require('../models');

// GET all planets
exports.getAllPlanets = async (req, res) => {
    try {
        const planets = await Planet.findAll();
        res.status(200).json(planets);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching planets', error: error.message });
    }
};

// GET a single planet by ID
exports.getPlanetById = async (req, res) => {
    try {
        const planet = await Planet.findByPk(req.params.id);
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        res.status(200).json(planet);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching planet', error: error.message });
    }
};

// POST create a new planet
exports.createPlanet = async (req, res) => {
    try {
        const newPlanet = await Planet.create(req.body);
        res.status(201).json(newPlanet);
    } catch (error) {
        res.status(500).json({ message: 'Error creating planet', error: error.message });
    }
};

// PUT update a planet
exports.updatePlanet = async (req, res) => {
    try {
        const planet = await Planet.findByPk(req.params.id);
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        await planet.update(req.body);
        res.status(200).json(planet);
    } catch (error) {
        res.status(500).json({ message: 'Error updating planet', error: error.message });
    }
};

// DELETE a planet
exports.deletePlanet = async (req, res) => {
    try {
        const planet = await Planet.findByPk(req.params.id);
        if (!planet) {
            return res.status(404).json({ message: 'Planet not found' });
        }
        await planet.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting planet', error: error.message });
    }
};
