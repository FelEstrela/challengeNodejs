let db = require('../database/models');
const { validationResult } = require('express-validator');

let moviesController = {
    add: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.render('add', { genres: genres });
            })
    },
    added: (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            db.Genre.findAll()
                .then(genres => { 
                    return res.render('add', { genres, errors: errors.mapped(), oldFormData: req.body }) 
                });
        } else {
            db.Movie.create({
                title: req.body.title,
                awards: req.body.awards,
                rating: req.body.rating,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre,
            });
            res.redirect('/')
        }
    },
    list: (req, res) => {
        db.Movie.findAll({
            attributes: ['id', 'title']
        })
            .then(movie =>
                res.render('home', { movie: movie })
            )
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id, {
            include: ['genre', 'actors']
        })
            .then(movie => {
                let temp = movie.dataValues.release_date;
                if (temp instanceof Date && temp.getFullYear() > 1900) {
                    let day = movie.dataValues.release_date.getDate() + 1;
                    let month = movie.dataValues.release_date.getMonth() + 1;
                    let year = movie.dataValues.release_date.getFullYear();
                    movie.dataValues.release_date = day + '/' + month + '/' + year;
                } else {
                    movie.dataValues.release_date = 'No hay fecha'
                }
                res.render('detail', { movie: movie });
            })
    },
    edit: (req, res) => {
        Promise.all([
            db.Movie.findByPk(req.params.id),
            db.Genre.findAll(),
        ])
            .then(([movie, genres]) => {
                res.render('edit', { movie: movie, genres: genres })
            })
    },
    update: (req, res) => {
        const errors = validationResult(req)
        if (errors.isEmpty()) {
            db.Movie.findByPk(req.params.id)
                .then(movie => {
                    db.Movie.update({
                        title: req.body.title,
                        length: req.body.length,
                        awards: req.body.awards,
                        rating: req.body.rating,
                        release_date: req.body.release_date,
                        genre_id: req.body.genres,
                    },
                        {
                            where: { id: req.params.id }
                        })
                        .then(() => {
                            res.redirect("/movies/" + req.params.id);
                        })
                })
        } else {
            db.Movie.findAll()
                .then(movie => { return res.render('edit', { movie, errors: errors.mapped(), oldFormData: req.body }) });
        }
    },
    delete(req, res) {
        db.Movie.destroy({
            where: { id: req.params.id }
        })
            .then(res.redirect('/'))
    },
}
module.exports = moviesController;