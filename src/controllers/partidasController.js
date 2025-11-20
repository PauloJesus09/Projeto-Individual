var partidasModel = require("../models/partidasModel");

function cadastrarPartidas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontosServer;
    var acertos = req.body.acertosServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos estão undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seu fk estão undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo partidasModel.js
        partidasModel.cadastrarPartidas(pontos, acertos, fkUsuario)
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
}

module.exports = {
    cadastrarPartidas
}