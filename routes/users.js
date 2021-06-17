const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const validate = require('../middlewares/validate');
const midAuth = require('../middlewares/midAuth');

//create
router.get('/register', usersController.register);
router.post('/register', validate.registering, usersController.registered);

//read
router.get('/login', usersController.login);
router.post('/login', validate.loginIn, usersController.authenticate);
router.get('/list', midAuth, usersController.list);
router.get('/profile/:id', usersController.profile);

//update
router.get('/modify/:id', usersController.modify);
router.put('/modify/:id', usersController.update);

//delete
router.delete('/delete/:id', usersController.delete);
router.get('/logout', usersController.logout);

module.exports = router;
