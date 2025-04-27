const express = require('express');
const router = express.Router();
const galaxyController = require('../controllers/galaxyController');

// GET all galaxies
router.get('/', galaxyController.getAllGalaxies);

// GET a single galaxy by ID
router.get('/:id', galaxyController.getGalaxyById);

// POST create a new galaxy
router.post('/', galaxyController.createGalaxy);

// PUT update a galaxy by ID
router.put('/:id', galaxyController.updateGalaxy);

// DELETE a galaxy by ID
router.delete('/:id', galaxyController.deleteGalaxy);

module.exports = router;
