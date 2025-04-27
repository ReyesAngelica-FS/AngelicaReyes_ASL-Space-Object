// src/routes/planetRoutes.js

const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController');

// GET all planets
router.get('/', planetController.getAllPlanets);

// GET a single planet by ID
router.get('/:id', planetController.getPlanetById);

// POST create a new planet
router.post('/', planetController.createPlanet);

// PUT update a planet by ID
router.put('/:id', planetController.updatePlanet);

// DELETE a planet by ID
router.delete('/:id', planetController.deletePlanet);

module.exports = router;
