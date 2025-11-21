// perguntas "armazenadas" no JSON
var quiz = [
    {
        id: "1",
        pergunta: "Qual música virou um símbolo de esperança contra a opressão?",
        correta: "Apesar de Você",
        alternativas: ["Acorda Amor", "Apesar de Você", "Vai Trabalhar Vagabundo", "Milagre Brasileiro"],
        trechos: [
            "./musicas/apesar/introApesarDeVoce.mp3",
            "./musicas/apesar/refraoApesarDeVoce.mp3",
            "./musicas/apesar/apesarDeVoce.mp3"
        ]
    },
    {
        id: "2",
        pergunta: "Que canção transforma o silêncio imposto em grito proibido?",
        correta: "Cálice",
        alternativas: ["Samba de Orly", "Corda Bamba", "Olha Maria", "Cálice"],
        trechos: [
            "./musicas/calice/introCalice.mp3",
            "./musicas/calice/refraoCalice.mp3",
            "./musicas/calice/calice.mp3"
        ]
    },
    {
        id: "3",
        pergunta: "Qual música descreve o fim de um homem comum de forma poética e brutal?",
        correta: "Construção",
        alternativas: ["Bye Bye Brasil", "João e Maria", "Meu Caro Amigo", "Construção"],
        trechos: [
            "./musicas/construcao/introConstrucao.mp3",
            "./musicas/construcao/refraoConstrucao.mp3",
            "./musicas/construcao/construcao.mp3"
        ]
    },
    {
        id: "4",
        pergunta: "Em qual canção uma mulher é usada como heroína e rejeitada logo depois?",
        correta: "Geni e o Zepelim",
        alternativas: ["Geni e o Zepelim", "Teresa Tristeza", "Folhetim", "Acalanto"],
        trechos: [
            "./musicas/geniZepelim/introGeniZepelim.mp3",
            "./musicas/geniZepelim/refraoGeniZepelim.mp3",
            "./musicas/geniZepelim/geniZepelim.mp3"
        ]
    },
    {
        id: "5",
        pergunta: "Qual música retrata a vida de mulheres submissas com tom crítico e simbólico?",
        correta: "Mulheres de Atenas",
        alternativas: ["Mulheres de Atenas", "O Meu Guri", "Fado Tropical", "Trocando Em Miúdos"],
        trechos: [
            "./musicas/mulheresAtenas/introMulheresAtenas.mp3",
            "./musicas/mulheresAtenas/refraoMulheresAtenas.mp3",
            "./musicas/mulheresAtenas/mulheresAtenas.mp3"
        ]
    },
    {
        id: "6",
        pergunta: "Qual canção expressa a dor de uma mulher traída em tom teatral?",
        correta: "Noiva da Cidade",
        alternativas: ["Angélica", "Deus Lhe Pague", "Noiva da Cidade", "Até o Fim"],
        trechos: [
            "./musicas/noivaCidade/introNoivaCidade.mp3",
            "./musicas/noivaCidade/refraoNoivaCidade.mp3",
            "./musicas/noivaCidade/noivaCidade.mp3"
        ]
    },
    {
        id: "7",
        pergunta: "Em qual música o reencontro marca o fim de um sofrimento antigo?",
        correta: "Olho nos Olhos",
        alternativas: ["Desalento", "Cotidiano", "Olho nos Olhos", "Pivete"],
        trechos: [
            "./musicas/olhoNosOlhos/introOlhoNosOlhos.mp3",
            "./musicas/olhoNosOlhos/refraoOlhoNosOlhos.mp3",
            "./musicas/olhoNosOlhos/olhoNosOlhos.mp3"
        ]
    },
    {
        id: "8",
        pergunta: "Qual música levanta perguntas sobre o desejo e o desconhecido?",
        correta: "O Que Será Que Será",
        alternativas: ["Cordão", "O Que Será Que Será", "Valsinha", "Tanto Mar"],
        trechos: [
            "./musicas/oQueSera/introOqueSera.mp3",
            "./musicas/oQueSera/refraoOqueSera.mp3",
            "./musicas/oQueSera/oQueSera.mp3"
        ]
    },
    {
        id: "9",
        pergunta: "Qual música transmite a leveza de caminhar livre pela cidade?",
        correta: "Passareado",
        alternativas: ["Passareado", "Minha História (Gesubambino)", "Você vai me seguir", "Pedaço de Mim"],
        trechos: [
            "./musicas/passareado/introPassareado.mp3",
            "./musicas/passareado/refraoPassareado.mp3",
            "./musicas/passareado/passareado.mp3"
        ]
    },
    {
        id: "10",
        pergunta: "Qual música ironiza o trabalhador forçado e o 'malandro'?",
        correta: "Vai Trabalhar Vagabundo",
        alternativas: ["Corrente", "Basta um Dia", "Homenagem ao Malandro", "Vai Trabalhar Vagabundo"],
        trechos: [
            "./musicas/vaiTrabalha/introVaiTrabalhar.mp3",
            "./musicas/vaiTrabalha/refraoVaiTrabalhar.mp3",
            "./musicas/vaiTrabalha/vaiTrabalharVagabundo.mp3"
        ]
    }
];

var pontos = 0;
var perguntaAtual = 0;
var acertos = 0;
var erros = 0;
var tentativa = 1; // quantidade de tentativas que o usuário começa (o máx é 3)

// começam como nulas pq nao foi selecionada nenhuma alternativa
var audioAtual = null;

// quando clicado, o botao redireciona para o jogo e some
function comecarJogar () {

    var comecarJogo = document.getElementById("comecarJogo");
    var cardInicio = document.getElementById("cardInicio");
    var sairPagina = document.getElementById("sairPagina");

    comecarJogo.style.display = "flex";
    cardInicio.style.display = "none";
    sairPagina.style.display = "none";
    carregarPergunta();
}

// quando chegar na tela final e caso queira jogar novamente
function reiniciarJogo() {
    pontos = 0;
    perguntaAtual = 0;
    acertos = 0;
    erros = 0;
    tentativa = 1;
    
    var telaFinal = document.getElementById('telaFinal');
    var cardInicio = document.getElementById('cardInicio');
    var comecarJogo = document.getElementById('comecarJogo');
    var sairPagina = document.getElementById("sairPagina");

    telaFinal.style.display = "none";
    cardInicio.style.display = "flex";
    comecarJogo.style.display = "none";
    sairPagina.style.display = "flex";

    atualizarStatus();
    cadastrarPartidas();
}

// faz a música tocar se tudo estiver certo com o objeto Audio
function tocarTrecho() {
    var arquivo = quiz[perguntaAtual].trechos[tentativa - 1]; // tentativa - 1 pra começar do 0, que é 1

    if (audioAtual != null) {
        audioAtual.pause();  // ele pausa a música como o próprio nome diz
        audioAtual.currentTime = 0; // controla  quando deve parar a música ou não
    }

    audioAtual = new Audio(arquivo);
    audioAtual.play();
}

// carrega a pergunta
function carregarPergunta() {
    var questaoAtual = quiz[perguntaAtual];
    
    // sempre fica bloqueado ate a pergunta terminar
    var proximaPag = document.getElementById("proximaPag");
    proximaPag.disabled = true;

    var pergunta = document.getElementById("pergunta");
    pergunta.innerHTML = `${questaoAtual.pergunta}`;
    var divAlternativas = document.getElementById("alternativas");
    
    divAlternativas.innerHTML = `
        <div class="botaoAlternativas">
            <button id="alt1" onclick="responder('${questaoAtual.alternativas[0]}', 'alt1')">${questaoAtual.alternativas[0]}</button>
            <button id="alt2" onclick="responder('${questaoAtual.alternativas[1]}', 'alt2')">${questaoAtual.alternativas[1]}</button>
            <button id="alt3" onclick="responder('${questaoAtual.alternativas[2]}', 'alt3')">${questaoAtual.alternativas[2]}</button>
            <button id="alt4" onclick="responder('${questaoAtual.alternativas[3]}', 'alt4')">${questaoAtual.alternativas[3]}</button>
        </div>
    `;

    atualizarStatus();
}

// atualiza os status do usuário
function atualizarStatus() {
    var totalRespostas = acertos + erros;
    var taxaAcerto = document.getElementById("taxaAcerto");
    
    if (totalRespostas > 0) {
        var calculoRespostas = (acertos / totalRespostas) * 100;
        taxaAcerto.innerHTML = `${calculoRespostas.toFixed(1)} %`;
    } else {
        taxaAcerto.innerHTML = `0%`;
    }

    document.getElementById("acertos").innerHTML = acertos;
    document.getElementById("erros").innerHTML = erros;
    document.getElementById("pontos").innerHTML = pontos;
    document.getElementById("tentativaAtual").innerHTML = `${tentativa}`;
}

// desabilita as alternativas pelo id
function desabilitarAlternativas() {
    var alt1 = document.getElementById('alt1');
    var alt2 = document.getElementById('alt2');
    var alt3 = document.getElementById('alt3');
    var alt4 = document.getElementById('alt4');

    alt1.disabled = true;
    alt2.disabled = true;
    alt3.disabled = true;
    alt4.disabled = true;

    alt1.style.cursor = "not-allowed";
    alt2.style.cursor = "not-allowed";
    alt3.style.cursor = "not-allowed";
    alt4.style.cursor = "not-allowed";
}

// destaca a resposta correta acessando o json
function destacarRespostaCorreta(correta) {
    var alt1 = document.getElementById('alt1');
    var alt2 = document.getElementById('alt2');
    var alt3 = document.getElementById('alt3');
    var alt4 = document.getElementById('alt4');
    
    // quando a resposta estiver condizente com a alternativa selecionada do usuário, ela muda a corzinha e fica verdinho
    if (alt1.innerHTML == correta) {
        alt1.classList.add('correto');
    }

    if (alt2.innerHTML == correta) {
        alt2.classList.add('correto');
    }

    if (alt3.innerHTML == correta) {
        alt3.classList.add('correto');
    }

    if (alt4.innerHTML == correta) {
        alt4.classList.add('correto');
    }
}

// mostra a resposta correta
function responder(resposta, idBotao) {

    if (audioAtual != null) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    var questaoAtual = quiz[perguntaAtual];
    var botao = document.getElementById(idBotao);

    if (resposta == questaoAtual.correta) {

        // adiciona a cor verde a alternativa correta
        botao.classList.add("correto");
        
        if (tentativa == 1) {
            pontos = pontos + 5;
        } else if (tentativa == 2) {
            pontos = pontos + 3;
        } else {
            pontos = pontos + 1;
        }

        desabilitarAlternativas();
        document.getElementById("proximaPag").disabled = false;

        alert(`Parabéns! Resposta correta: ${questaoAtual.correta}.`);
        acertos++;
    } else {

        if (tentativa < 3) { 

            botao.classList.add("errado");
            erros++;
            tentativa++;

            alert(`Você errou! Tente novamente. Restam ${3 - (tentativa - 1)} tentativas.`);

            // tempo que fica em vermelho a alternativa errada
            setTimeout(() => {
                botao.classList.remove("errado");
            }, 1000);
        } else {
            
            erros++;

            alert(`Que pena! Suas 3 tentativas acabaram. A resposta correta era: ${questaoAtual.correta}. Você será redirecionado para a próxima questão!`);
            setTimeout(() => {
                proxima();
            }, 2000);

            document.getElementById("proximaPag").disabled = true;
            destacarRespostaCorreta(questaoAtual.correta);
            desabilitarAlternativas();
        }
    }
    atualizarStatus();
}

// se tudo estiver certo ou errado passa para a próxima pergunta
function proxima() {

    // caso voce passe para a proxima questao com o audio tocando ele trava
    if (audioAtual != null) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    // reseta a tentativa para a próxima pergunta
    tentativa = 1;
    perguntaAtual++;

    if (perguntaAtual >= quiz.length) {
        finalizar();
    } else {
        carregarPergunta();
    }
}

function finalizar() {
    var totalRespostas = acertos + erros;
    var taxaCalculadaFormatada = 0;
    
    if (totalRespostas > 0) {
        var taxaCalculada = (acertos / totalRespostas) * 100;
        taxaCalculadaFormatada = taxaCalculada.toFixed(1); // se tiver ela fica bonitinha com 1 casa decimal
    } else {
        taxaCalculadaFormatada = 0; // se nao tiver resposta a taxa é 0
    }

    var mensagemFinal = document.getElementById("mensagemFinal");
    if (taxaCalculadaFormatada > 50) {
        mensagemFinal.innerHTML = `
        <div id="telaFinal">
            <div id="jogoFinal">
                <h2 id="tituloFinal">Parabéns, você é um expert em Chico Buarque!</h2>
                <p>Você completou todas as questões!</p>
                <p>Pontuação Total: <strong id="pontuacaoFinal">0</strong></p>
                <p>Acertos: <strong id="acertosFinal">0</strong></p>
                <p>Taxa de Acerto: <strong id="taxaFinal">0%</strong></p>
                <div class="proximaMusica">
                    <button onclick="reiniciarJogo()">Jogar Novamente</button>
                    <button onclick="buscarUltimaPartida()">Ver Desempenho</button>
                </div>
            </div>
        </div>`;
    } else {
        mensagemFinal.innerHTML = `
        <div id="telaFinal">
            <div id="jogoFinal">
                <h2 id="tituloFinal">Fim de Jogo. Tente Novamente!</h2>
                <p>Você completou todas as questões!</p>
                <p>Pontuação Total: <strong id="pontuacaoFinal">0</strong></p>
                <p>Acertos: <strong id="acertosFinal">0</strong></p>
                <p>Taxa de Acerto: <strong id="taxaFinal">0%</strong></p>
                <div class="proximaMusica">
                    <button onclick="reiniciarJogo()">Jogar Novamente</button>
                    <button onclick="buscarUltimaPartida()">Ver Desempenho</button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("telaFinal").style.display = "flex"; 
    document.getElementById("comecarJogo").style.display = "none";

    document.getElementById("pontuacaoFinal").innerHTML = pontos;
    document.getElementById("acertosFinal").innerHTML = acertos;
    document.getElementById("taxaFinal").innerHTML = `${taxaCalculadaFormatada}%`;
}

function dashboard() {
    window.location='dashboard.html';
}

var fkUsuario = sessionStorage.ID_USUARIO; 

function buscarUltimaPartida () {
    fetch("/partidas/buscarUltimaPartida", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO buscar ultima partida()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_ULTIMAPARTIDA = json[0].idPartida; 

            });
            cadastrarPartidas();
        }
    });
}

var idUltimaPartida = sessionStorage.ID_ULTIMAPARTIDA;
if (idUltimaPartida == undefined || idUltimaPartida == 0 || idUltimaPartida == null) {
    idUltimaPartida = 1;
} else {
    idUltimaPartida = Number(idUltimaPartida) + 1;
} 

function cadastrarPartidas() {
    
    fetch("/partidas/cadastrarPartidas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            // pontosServer: pontosVar,
            // acertosServer: acertosVar,
            // fkUsuarioServer: fkUsuarioVar,
            // fkPartidaServer: fkPartidaVar,
        }),
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
        console.log(`acertos e pontos cadastrados`);
        cadastrarPontosJogo();

        } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
        }
    }).catch(function (resposta) {
       console.log(`#ERRO DE REDE: ${resposta}`);
    });
    return false;
}

function cadastrarPontosJogo() {
    var pontosVar = pontos;
    var acertosVar = acertos;
    var fkUsuarioVar = fkUsuario;
    var fkPartidaVar = idUltimaPartida;

    fetch("/pontos/cadastrarPontosJogo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            pontosServer: pontosVar,
            acertosServer: acertosVar,
            fkUsuarioServer: fkUsuarioVar,
            fkPartidaServer: fkPartidaVar,
        }),
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
        console.log(`acertos e pontos cadastrados`);
        dashboard();

        } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
        }
    }).catch(function (resposta) {
       console.log(`#ERRO DE REDE: ${resposta}`);
    });
    return false;
}