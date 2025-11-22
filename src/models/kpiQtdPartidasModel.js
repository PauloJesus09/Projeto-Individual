var database = require("../database/config")

function kpiQtdPartidas(email) {
    var instrucao = `SELECT Total FROM vwKPITotalPartidas WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = '${email}');`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiQtdPartidas
};