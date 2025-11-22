var express = require("express");
var router = express.Router();

var kpiMelhorPontuacaoController = require("../controllers/kpiMelhorPontuacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de kpiPontuacaoMediaController.js
router.get("/kpiMelhorPontuacao/:email", function (req, res) {
    kpiMelhorPontuacaoController.kpiMelhorPontuacao(req, res);
});

module.exports = router; 