const { body } = require('express-validator')
module.exports = {
// register
registering: [
body('name')
    .notEmpty().withMessage('Escriba su Nombre y Apellido').bail()
    .isLength({ min: 2, }).withMessage('No puede ser menor a 2 caracteres')
    .isLength({ max: 25, }).withMessage('Maximo 25 caracteres.'),

body('email')
    .notEmpty().withMessage('Escriba su email').bail()
    .isEmail().withMessage('Escriba un email valido'),

body('password')
    .notEmpty().withMessage('Escriba una contraseña').bail()
    .isLength({ min: 4, max: 20 }).withMessage('Escriba una contraseña entre 4 y 20 caracteres'),
],
// login
loginIn: [
body('email').isEmail().withMessage('Escriba un e-mail que sea valido'),
body('password').notEmpty().withMessage('Escriba una contraseña valida')
    ],

// movies
addMovie: [
body('title')
    .notEmpty().withMessage('Ingrese el nombre de la pelicula').bail()
    .isLength({ min: 2, }).withMessage('Debe tener al menos 2 letras')
    .isLength({ max: 30, }).withMessage('No debe ser mayor a 30 letras'),
body('length')
    .notEmpty().withMessage('Ingrese una duración').bail()
    .isLength({ min: 1, }).withMessage('Debe tener al menos 1 numero')
    .isLength({ max: 3, }).withMessage('No debe ser mayor a 3 numeros'),
body('awards')
    .notEmpty().withMessage('Ingrese cantidad de premios').bail()
    .isLength({ min: 1, }).withMessage('Debe tener al menos 1 numero')
    .isLength({ max: 3, }).withMessage('No debe ser mayor a 3 numeros'),
body('rating')
    .notEmpty().withMessage('Ingrese un rating').bail()
    .isLength({ min: 1, }).withMessage('Debe tener al menos 1 caracter')
    .isLength({ max: 4, }).withMessage('No debe ser mayor a 4 caracteres'), 
body('release_date')
    .notEmpty().withMessage('Introduzca una fecha'),
body('genre')
    .notEmpty().withMessage('Tenes que seleccionar una categoria'),
    ],
}