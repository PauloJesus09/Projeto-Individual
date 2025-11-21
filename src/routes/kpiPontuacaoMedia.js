var express = require("express");
var router = express.Router();

var kpiPontuacaoMediaController = require("../controllers/kpiPontuacaoMediaController");

//Recebendo os dados do html e direcionando para a função cadastrar de kpiPontuacaoMediaController.js
router.get("/kpiPontuacaoMedia/:email", function (req, res) {
    kpiPontuacaoMediaController.kpiPontuacaoMedia(req, res);
});

module.exports = router; 