-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

DROP DATABASE IF EXISTS hollanda;
CREATE DATABASE hollanda;
USE hollanda;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
senha CHAR(200) NOT NULL
);

SELECT * FROM usuario; 

CREATE TABLE partida (
idPartida INT PRIMARY KEY AUTO_INCREMENT,
dataFim DATE DEFAULT (CURDATE()) -- volta a data no formato ano-mes-dia
);

SELECT * FROM partida;

CREATE TABLE resultado (
idResultado INT AUTO_INCREMENT,
fkUsuario INT NOT NULL,
fkPartida INT NOT NULL,
pontos INT,
totalAcertos INT,
totalErros INT,
CONSTRAINT pkComposta 
	PRIMARY KEY (idResultado, fkPartida, fkUsuario),
	FOREIGN KEY (fkPartida) REFERENCES partida(idPartida),
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

SELECT * FROM resultado;

-- Pega a ultima partida pelo id
SELECT idPartida FROM partida 
	ORDER BY idPartida DESC LIMIT 1;

-- KPI: Total de Partidas do Usuário
CREATE OR REPLACE VIEW vwKPITotalPartidas AS 
	SELECT COUNT(*) AS Total, 
	usuario.idUsuario AS idUsuario 
    FROM resultado JOIN usuario 
    ON resultado.fkUsuario = usuario.idUsuario
	GROUP BY usuario.idUsuario;

SELECT Total FROM vwKPITotalPartidas
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = "paulo@gmail.com");

-- KPI: Pontuação Média
CREATE OR REPLACE VIEW vwKPIMedia AS
SELECT AVG(r.pontos) AS pontuacaoMedia, u.email, u.idUsuario FROM resultado r
	JOIN usuario u
    ON u.idUsuario = r.fkUsuario GROUP BY u.idUsuario;
    
SELECT * FROM vwKPIMedia
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = "paulo@gmail.com");

-- KPI: Total de pontos que o usuário possui
CREATE OR REPLACE VIEW vwKpiQtdPontos AS
	SELECT r.fkUsuario AS idUsuario,
    SUM(r.pontos) AS totalPontos
	FROM resultado r GROUP BY r.fkUsuario;
    
SELECT totalPontos FROM vwKpiQtdPontos
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = "paulo@gmail.com");
    
-- KPI: Melhor Pontuação
CREATE OR REPLACE VIEW vwKpiMelhorPontuacao AS 
	SELECT r.fkUsuario AS idUsuario, MAX(r.pontos) AS melhorPontuacao
	FROM resultado r JOIN partida p 
    ON p.idPartida = r.fkPartida
	GROUP BY r.fkUsuario;
    
SELECT melhorPontuacao FROM vwKpiMelhorPontuacao
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = "paulo@gmail.com");
    
-- Gráfico: Taxa de Acerto Geral
CREATE OR REPLACE VIEW vwGraficoTaxaAcerto AS
SELECT r.fkUsuario AS idUsuario, 
	(SUM(r.totalAcertos) / (SUM(r.totalAcertos) + SUM(r.totalErros))) * 100 AS taxaAcertoGeral 
	FROM partida p JOIN resultado r 
	ON p.idPartida = r.fkPartida
	GROUP BY r.fkUsuario;
    
SELECT taxaAcertoGeral FROM vwGraficoTaxaAcerto
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = "paulo@gmail.com");
    
-- Gráfico que mostra a pontuação e a data bruta das últimas 10 partidas do usuário
CREATE OR REPLACE VIEW vwUltimas10Partidas AS
SELECT r.fkUsuario AS idUsuario, 
	r.pontos, 
    p.dataFim 
	FROM partida p
	JOIN resultado r 
    ON p.idPartida = r.fkPartida
	WHERE r.fkUsuario = fkUsuario
	GROUP BY r.fkUsuario, p.idPartida, r.pontos, p.dataFim ORDER BY p.dataFim DESC LIMIT 10;
    
SELECT pontos, dataFim FROM vwUltimas10Partidas
	WHERE idUsuario = (SELECT idUsuario FROM usuario WHERE email = "paulo@gmail.com");