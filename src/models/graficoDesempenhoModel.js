var database = require("../database/config")

function graficoDesempenho(email) {
    var instrucao = `SELECT pontos, dataFim FROM vwUltimas10Partidas WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = '${email}');`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    graficoDesempenho
};