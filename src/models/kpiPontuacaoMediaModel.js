var database = require("../database/config")

function kpiPontuacaoMedia(email) {
    var instrucao = `SELECT * FROM vwKPIMedia WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = '${email}');`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    kpiPontuacaoMedia
};