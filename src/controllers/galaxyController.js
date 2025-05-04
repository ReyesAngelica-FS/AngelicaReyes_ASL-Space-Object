const { Galaxy } = require('../models');

// GET all galaxies
exports.getAllGalaxies = async (req, res) => {
    try {
        const galaxies = await Galaxy.findAll();

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.render('galaxies/index', { galaxies });
        }

        res.status(200).json(galaxies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching galaxies', error: error.message });
        }
};

// GET a single galaxy by ID
exports.getGalaxyById = async (req, res) => {
    try {
        const galaxy = await Galaxy.findByPk(req.params.id);
        if (!galaxy) {
            return res.status(404).json({ message: 'Galaxy not found' });
        }

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
        return res.render('galaxies/show', { galaxy });
        }

        res.status(200).json(galaxy);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching galaxy', error: error.message });
        }
};

// POST create a new galaxy
exports.createGalaxy = async (req, res) => {
    try {
        const newGalaxy = await Galaxy.create(req.body);

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.redirect('/galaxies');
        }

        res.status(201).json(newGalaxy);
    } catch (error) {
        res.status(500).json({ message: 'Error creating galaxy', error: error.message });
        }
};

// PUT update a galaxy
exports.updateGalaxy = async (req, res) => {
    try {
        const galaxy = await Galaxy.findByPk(req.params.id);
        if (!galaxy) {
        return res.status(404).json({ message: 'Galaxy not found' });
        }

        await galaxy.update(req.body);

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.redirect(`/galaxies/${galaxy.id}`);
        }

        res.status(200).json(galaxy);
    } catch (error) {
        res.status(500).json({ message: 'Error updating galaxy', error: error.message });
        }
};

// DELETE a galaxy
exports.deleteGalaxy = async (req, res) => {
    try {
        const galaxy = await Galaxy.findByPk(req.params.id);
        if (!galaxy) {
            return res.status(404).json({ message: 'Galaxy not found' });
        }

        await galaxy.destroy();

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.redirect('/galaxies');
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting galaxy', error: error.message });
        }
};
