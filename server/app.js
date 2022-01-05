const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(
  'mongodb+srv://lenenba:KiliAne486@cluster0.jvdy5.mongodb.net/AngularJulesTest?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Connexion opened to mongodb!');
    }
  },
);

app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
