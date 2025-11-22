var database = require("../database/config")

function kpiMelhorPontuacao(email) {
    var instrucao = `SELECT melhorPontuacao FROM vwKpiMelhorPontuacao WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = '${email}');`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiMelhorPontuacao
};