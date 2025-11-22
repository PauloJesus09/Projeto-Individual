var database = require("../database/config")

function kpiTotalDePontos(email) {
    var instrucao = `SELECT totalPontos FROM vwKpiQtdPontos WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = '${email}');`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiTotalDePontos
};