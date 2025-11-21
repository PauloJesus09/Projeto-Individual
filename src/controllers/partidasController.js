var partidasModel = require("../models/partidasModel");

function cadastrarPartidas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

        // Passe os valores como parâmetro e vá para o arquivo partidasModel.js
        partidasModel.cadastrarPartidas()
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

function buscarUltimaPartida(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    // Passe os valores como parâmetro e vá para o arquivo partidasModel.js
    partidasModel.buscarUltimaPartida()
    .then(
        function (resultado) {
           res.json(resultado);

           if (resultado.length == 1) {
                console.log(resultado);
                res.json(resultado[0]);
            }
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
    cadastrarPartidas,
    buscarUltimaPartida
}