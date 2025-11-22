var express = require("express");
var router = express.Router();

var kpiQtdPartidasController = require("../controllers/kpiQtdPartidasController");

//Recebendo os dados do html e direcionando para a função cadastrar de kpiPontuacaoMediaController.js
router.get("/kpiQtdPartidas/:email", function (req, res) {
    kpiQtdPartidasController.kpiQtdPartidas(req, res);
});

module.exports = router; 