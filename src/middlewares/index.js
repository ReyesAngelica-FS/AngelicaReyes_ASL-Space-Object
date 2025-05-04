const util = require('util');
const path = require('path');
const { Star } = require('../models'); 

const uploadImage = async (req, res, next) => {
    if (!req.imageId) return next();
    if (!req.files || Object.keys(req.files).length === 0) return next();

    const image = req.files.image;
    const ext = path.extname(image.name);
    const uploadPath = path.join(__dirname, '..', '..', 'public', 'images', `${req.imageId}${ext}`);

    try {
        await image.mv(uploadPath);
        await Star.update({ extension: ext }, { where: { id: req.imageId } }); 
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = { uploadImage };
