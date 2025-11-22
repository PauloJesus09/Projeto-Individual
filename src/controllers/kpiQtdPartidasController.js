var kpiQtdPartidasModel = require("../models/kpiQtdPartidasModel");

function kpiQtdPartidas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.params.email;

    // Passe os valores como parâmetro e vá para o arquivo buscarKpiPontuacaoMediaModel.js
    kpiQtdPartidasModel.kpiQtdPartidas(email)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );  
}

module.exports = {
    kpiQtdPartidas
}