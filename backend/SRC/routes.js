const express = require('express');

const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/incidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController')

const connection = require('./database/connection');

const routes = express.Router();


routes.post('/sessions', SessionController.create);

// Profile List
routes.get('/profile', ProfileController.index);

// Ong List / Create
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Incidents List / Create / Delete
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;