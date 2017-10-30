const express = require('express');

let router = express.Router();

const PlacesController= require('../controllers/PlacesController')

router.route('/')
    .get(PlacesController.index)
    .post(PlacesController.multerMiddleware(),PlacesController.create, PlacesController.saveImage)
router.route('/:id')
    .get(PlacesController.find,PlacesController.show)
    .put(PlacesController.find,PlacesController.update)
    .delete(PlacesController.find,PlacesController.destroy) 
module.exports = router;