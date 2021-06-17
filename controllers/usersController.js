let db = require('../database/models');
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

let usersController = {
  register : (req, res) => {
    db.User.findAll()
            .then(user => {
                res.render('register', { user: user })
            })
    },
    registered(req, res) {
        let errors = validationResult(req)
        let Hash = bcrypt.hashSync(req.body.password, 10)

        if (errors.isEmpty()) {
            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: Hash,
                remember_token: req.body.password,
                rol: req.body.rol
            })
                .then((function () {
                    req.session.user = req.body.name;
                    req.session.auth = true;
                    req.session.user.rol = req.body.rol;
                    if (req.body.remember != undefined) {
                        res.cookie('remember', user.email, { maxAge: 120000 })
                    }
                res.redirect('/');
                }))
        } else {
            db.User.findAll()
                .then(user => { return res.render('register', { user, errors: errors.mapped(), oldFormData: req.body }) });
        }
    },
    login(req, res) {
        res.render('login');
    },
    authenticate(req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    if (user) {
                        if (bcrypt.compareSync(req.body.password, user.password)) {
                            req.session.user = user;
                            if (user.rol == 1) {
                                req.session.auth = true;
                            } else {
                                req.session.auth = false;
                            }
                            return res.redirect('/');
                        } else {
                            res.render('login', {
                                errors: {
                                    password: {
                                        value: '',
                                        msg: 'el email o la contraseña son incorrectos ',
                                        param: 'password',
                                        location: 'body'
                                    }
                                },
                            })

                        }

                    } else {
                        res.render('login', {
                            errors: {
                                password: {
                                    value: '',
                                    msg: 'el email o la contraseña son incorrectos',
                                    param: 'email',
                                    location: 'body'
                                }
                            },
                            oldFormData: req.body
                        })
                    }
                })
        } else {
            res.render('login', {
                errors: errors.mapped(),
                oldFormData: req.body
            });
        }
    },
    list: (req, res) => {
        db.User.findAll({
            attributes: ['id', 'name', 'email']
        })
            .then(user =>
                res.render('list', { user: user })
            )
    },
    profile(req, res) {
        db.User.findByPk(req.params.id)
            .then(user => res.render('profile', { user: user }));
    },
    modify: (req, res) => {
        Promise.all([
            db.User.findByPk(req.params.id),
        ])
            .then(([user]) => {
                res.render('modify', { user: user })
            })
    },
    update: (req, res) => {
            db.User.findByPk(req.params.id)
                .then(user => {
                    db.User.update({
                        name: req.body.name,
                        email: req.body.length,
                    },
                        {
                            where: { id: req.params.id }
                        })
                        .then(() => {
                            res.redirect("/user/profile/" + req.params.id);
                        })
                })
    },
    logout(req, res) {
        req.session.destroy()
        res.redirect('/')
    },
    delete(req, res) {
        db.User.destroy({
            where: { id: req.params.id }
        })
            .then(res.redirect('/'))
    },
}
module.exports = usersController;