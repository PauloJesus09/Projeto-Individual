var express = require("express");
var router = express.Router();

var kpiTotalDePontosController = require("../controllers/kpiTotalDePontosController");

//Recebendo os dados do html e direcionando para a função cadastrar de kpiPontuacaoMediaController.js
router.get("/kpiTotalDePontos/:email", function (req, res) {
    kpiTotalDePontosController.kpiTotalDePontos(req, res);
});

module.exports = router; 