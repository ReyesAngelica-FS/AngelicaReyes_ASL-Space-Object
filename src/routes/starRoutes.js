// src/routes/starRoutes.js

const express = require('express');
const router = express.Router();
const starController = require('../controllers/starController');

// GET all stars
router.get('/', starController.getAllStars);

// GET a single star by ID
router.get('/:id', starController.getStarById);

// POST create a new star
router.post('/', starController.createStar);

// PUT update a star by ID
router.put('/:id', starController.updateStar);

// DELETE a star by ID
router.delete('/:id', starController.deleteStar);

module.exports = router;
