const express = require('express');
const app = express();

const session = require('express-session')
const auth = require('./middlewares/authenticate');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const path = require('path');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

const bcryptjs = require('bcryptjs');

app.use(session({
  secret: 'felipeEstrela',
  resave: false,
  saveUninitialized: true,
}));
app.use(auth)


var homeRoutes = require('./routes/home');
var usersRoutes = require('./routes/users');
var moviesRoutes = require('./routes/movies');



app.use('/', homeRoutes);
app.use('/user', usersRoutes);
app.use('/movies', moviesRoutes);

// port
app.set('port', process.env.PORT || 1989);
app.listen(app.get('port'), () => {
  console.log('El servidor ha iniciado');
  console.log('El servidor esta funcionando en el puerto', app.get('port'));
});

module.exports = app;