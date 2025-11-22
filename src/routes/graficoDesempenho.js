var express = require("express");
var router = express.Router();

var graficoDesempenhoController = require("../controllers/graficoDesempenhoController");

//Recebendo os dados do html e direcionando para a função cadastrar de kpiPontuacaoMediaController.js
router.get("/graficoDesempenho/:email", function (req, res) {
    graficoDesempenhoController.graficoDesempenho(req, res);
});

module.exports = router; 