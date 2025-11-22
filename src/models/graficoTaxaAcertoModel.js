var database = require("../database/config")

function graficoTaxaAcerto(email) {
    var instrucao = `SELECT taxaAcertoGeral FROM vwGraficoTaxaAcerto WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = '${email}');`;
    console.log(instrucao);
    return database.executar(instrucao);
}

module.exports = {
    graficoTaxaAcerto
};