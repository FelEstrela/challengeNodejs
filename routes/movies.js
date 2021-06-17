const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const validate = require('../middlewares/validate');
const midAuth = require('../middlewares/midAuth');

//create
router.get('/add', midAuth, moviesController.add);
router.post('/add', midAuth, validate.addMovie, moviesController.added);

//read
router.get('/', moviesController.list);
router.get('/:id', moviesController.detail);

//update
router.get('/edit/:id', midAuth, moviesController.edit);
router.put('/edit/:id', midAuth, moviesController.update);

//delete
router.delete('/delete/:id', midAuth, moviesController.delete);

module.exports = router;
