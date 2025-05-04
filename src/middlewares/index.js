const util = require('util');
const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const { Star } = require('../models');

const uploadImage = async (req, res, next) => {
    if (!req.imageId) return next();
    if (!req.files || Object.keys(req.files).length === 0) return next();

    const image = req.files.image;
    const ext = path.extname(image.name);
    if (!ext) return res.status(400).send('Invalid file format.');

    const uploadDir = path.join(__dirname, '..', '..', 'public', 'images');
    const uploadPath = path.join(uploadDir, `${req.imageId}${ext}`);

    try {
        await fsPromises.mkdir(uploadDir, { recursive: true });
        await image.mv(uploadPath);
        await Star.update({ extension: ext }, { where: { id: req.imageId } });
        console.log(`Uploaded image to ${uploadPath}`);
        next();
    } catch (err) {
        console.error('Error uploading file:', err);
        next(err);
    }
};

module.exports = { uploadImage };
