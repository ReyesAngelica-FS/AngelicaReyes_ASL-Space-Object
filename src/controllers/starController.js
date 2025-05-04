const { Star } = require('../models');

// GET all stars
exports.getAllStars = async (req, res) => {
    try {
        const stars = await Star.findAll();
        res.status(200).json(stars);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stars', error: error.message });
    }
};

// GET a single star by ID
exports.getStarById = async (req, res) => {
    try {
        const star = await Star.findByPk(req.params.id);
        if (!star) {
            return res.status(404).json({ message: 'Star not found' });
        }
        res.status(200).json(star);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching star', error: error.message });
    }
};

// ✅ POST create a new star (modified to support file upload middleware)
exports.createStar = async (req, res, next) => {
    try {
        const newStar = await Star.create(req.body);
        req.starId = newStar.id; // ⬅️ Pass ID to upload middleware
        req.createdStar = newStar; // ⬅️ Store the star to respond later
        next(); // ⬅️ Move to the upload middleware
    } catch (error) {
        res.status(500).json({ message: 'Error creating star', error: error.message });
    }
};

// ✅ PUT update a star (modified to support file upload middleware)
exports.updateStar = async (req, res, next) => {
    try {
        const star = await Star.findByPk(req.params.id);
        if (!star) {
            return res.status(404).json({ message: 'Star not found' });
        }
        await star.update(req.body);
        req.starId = star.id;
        req.updatedStar = star;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error updating star', error: error.message });
    }
};

// DELETE a star
exports.deleteStar = async (req, res) => {
    try {
        const star = await Star.findByPk(req.params.id);
        if (!star) {
            return res.status(404).json({ message: 'Star not found' });
        }
        await star.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting star', error: error.message });
    }
};
