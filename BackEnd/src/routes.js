const express = require('express');

const ongController = require('./controller/OngController');
const incidentController = require('./controller/IncidentController');
const profileController = require('./controller/ProfileController');
const sessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;