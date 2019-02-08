const express = require("express");

const routes = express.Router();

const Tweetcontroller = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets', Tweetcontroller.index); // buscar
routes.post('/tweets', Tweetcontroller.store); // criar

routes.post('/likes/:id', LikeController.store); // criar

//routes.put('tweets', Tweetcontroller.index); // atualizar
//routes.delete('tweets', Tweetcontroller.index); // deletar info

module.exports = routes;