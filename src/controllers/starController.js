const { Star } = require('../models');

// GET all stars
exports.getAllStars = async (req, res) => {
    try {
        const stars = await Star.findAll();

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.render('stars/index', { stars });
        }

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

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.render('stars/show', { star });
        }

        res.status(200).json(star);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching star', error: error.message });
        }
};

// POST create a new star
exports.createStar = async (req, res, next) => {
    try {
        const newStar = await Star.create(req.body);
        req.starId = newStar.id;
        req.createdStar = newStar;

        // If file is being uploaded, go to middleware
        if (req.files && req.files.image) return next();

        // Otherwise, redirect or respond with JSON
        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.redirect('/stars');
        }

        res.status(201).json(newStar);
    } catch (error) {
        res.status(500).json({ message: 'Error creating star', error: error.message });
    }
};

// PUT update a star
exports.updateStar = async (req, res, next) => {
    try {
        const star = await Star.findByPk(req.params.id);

        if (!star) {
            return res.status(404).json({ message: 'Star not found' });
        }

        await star.update(req.body);
        req.starId = star.id;
        req.updatedStar = star;

        // If file is being uploaded, go to middleware
        if (req.files && req.files.image) return next();

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.redirect(`/stars/${star.id}`);
        }

        res.status(200).json(star);
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

        if (req.headers.accept && req.headers.accept.includes('text/html')) {
            return res.redirect('/stars');
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting star', error: error.message });
    }
};

//for rendering create/edit form views
exports.form = async (req, res) => {
    let star = null;

    if (req.params.id) {
        star = await Star.findByPk(req.params.id);
    }

    res.render('stars/form', { star });
};
