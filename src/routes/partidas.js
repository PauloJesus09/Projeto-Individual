var express = require("express");
var router = express.Router();

var partidasController = require("../controllers/partidasController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPartidas", function (req, res) {
    partidasController.cadastrarPartidas(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/buscarUltimaPartida", function (req, res) {
    partidasController.buscarUltimaPartida(req, res);
});

module.exports = router; 