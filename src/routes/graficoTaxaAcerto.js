var express = require("express");
var router = express.Router();

var graficoTaxaAcertoController = require("../controllers/graficoTaxaAcertoController");

//Recebendo os dados do html e direcionando para a função cadastrar de kpiPontuacaoMediaController.js
router.get("/graficoTaxaAcerto/:email", function (req, res) {
    graficoTaxaAcertoController.graficoTaxaAcerto(req, res);
});

module.exports = router; 