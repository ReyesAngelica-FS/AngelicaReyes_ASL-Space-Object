const express = require('express');
const router = express.Router();
const starController = require('../controllers/starController');
const { uploadImage } = require('../middlewares'); 

// GET all stars
router.get('/', starController.getAllStars);

// GET a single star by ID
router.get('/:id', starController.getStarById);

// POST create a new star + image
router.post('/', starController.createStar, uploadImage, (req, res) => {
    res.status(201).json(req.createdStar); // respond after image upload
});

// PUT update a star + image
router.put('/:id', starController.updateStar, uploadImage, (req, res) => {
    res.status(200).json(req.updatedStar); // respond after image upload
});

// DELETE a star by ID
router.delete('/:id', starController.deleteStar);

module.exports = router;
