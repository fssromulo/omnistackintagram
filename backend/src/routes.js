const express = require('express');
const routes = express.Router();

const PostController = require('./controllers/PostController');

// Incluindo um novo post
routes.post('/post', PostController.save);

module.exports = routes;
