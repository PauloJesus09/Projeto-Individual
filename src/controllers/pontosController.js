var pontosModel = require("../models/pontosModel");

function cadastrarPontosJogo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontosServer;
    var acertos = req.body.acertosServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPartida = req.body.fkPartidaServer;
    console.log(pontos);
    console.log(acertos);
    console.log(fkUsuario);
    console.log(fkPartida);

    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Seus pontos estão undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seus acertos estão undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Seus fkUsuarios estão undefined!");
    } else if (fkPartida == undefined) {
        res.status(400).send("Seus fkUsuarios estão undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo pontosModel.js
        pontosModel.cadastrarPontosJogo(pontos, acertos, fkUsuario, fkPartida)
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
    cadastrarPontosJogo
}