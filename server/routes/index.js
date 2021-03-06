const express = require('express');

const app = express();

//Hacemos uso de todas las rutas creadas en la carpeta routes
app.use(require('./user'));
app.use(require('./login'));
app.use(require('./category'));
app.use(require('./product'));
app.use(require('./uploads'));
app.use(require('./images'));

module.exports = app;