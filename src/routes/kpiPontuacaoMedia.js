var express = require("express");
var router = express.Router();

var kpiPontuacaoMediaController = require("../controllers/kpiPontuacaoMediaController");

//Recebendo os dados do html e direcionando para a função cadastrar de kpiPontuacaoMediaController.js
router.get("/buscarKpiPontuacaoMedia", function (req, res) {
    kpiPontuacaoMediaController.buscarKpiPontuacaoMedia(req, res);
});

module.exports = router; 