// perguntas "armazenadas" no JSON
var quiz = [
    {
        id: "1",
        pergunta: "Qual música está tocando?",
        correta: "Apesar de Você",
        alternativas: ["Feijoada Completa", "Apesar de Você", "Vai Trabalhar Vagabundo", "Tanto Mar"],
        trechos: [
            "./musicas/apesar/introApesarDeVoce.mp3",
            "./musicas/apesar/refraoApesarDeVoce.mp3",
            "./musicas/apesar/apesarDeVoce.mp3"
        ]
    },
    {
        id: "2",
        pergunta: "Que música possui esse trecho característico?",
        correta: "Cálice",
        alternativas: ["Samba de Orly", "A Banda", "Cálice", "Olha Maria"],
        trechos: [
            "./musicas/calice/introCalice.mp3",
            "./musicas/calice/refraoCalice.mp3",
            "./musicas/calice/calice.mp3"
        ]
    },
    {
        id: "3",
        pergunta: "Qual dessas músicas tem esse refrão emblemático?",
        correta: "Construção",
        alternativas: ["Bye Bye Brasil", "Construção", "João e Maria", "Meu Caro Amigo"],
        trechos: [
            "./musicas/construcao/introConstrucao.mp3",
            "./musicas/construcao/refraoConstrucao.mp3",
            "./musicas/construcao/construcao.mp3"
        ]
    },
    {
        id: "4",
        pergunta: "Qual música contém esse trecho marcante?",
        correta: "Geni e o Zepelim",
        alternativas: ["Geni e o Zepelim", "O Que Será", "Folhetim", "Acalanto"],
        trechos: [
            "./musicas/geniZepelim/introGeniZepelim.mp3",
            "./musicas/geniZepelim/refraoGeniZepelim.mp3",
            "./musicas/geniZepelim/geniZepelim.mp3"
        ]
    },
    {
        id: "5",
        pergunta: "De qual música pertence esse trecho?",
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
        pergunta: "De qual música pertence esse trecho?",
        correta: "Noiva da Cidade",
        alternativas: ["Banda", "Deus Lhe Pague", "Noiva da Cidade", "Até o Fim"],
        trechos: [
            "./musicas/noivaCidade/introNoivaCidade.mp3",
            "./musicas/noivaCidade/refraoNoivaCidade.mp3",
            "./musicas/noivaCidade/noivaCidade.mp3"
        ]
    },
    {
        id: "7",
        pergunta: "De qual música pertence esse trecho?",
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
        pergunta: "De qual música pertence esse trecho?",
        correta: "O Que Será Que Será",
        alternativas: ["Cordão", "O Que Será Que Será", "Valsinha", "Tanto Mar"],
        trechos: [
            "./musicas/oQueSera/introOqueSera.mp3",
            "./musicas/oQueSera/refraoOqueSera.mp3",
            "./musicas/oQueSera/oQeuSera.mp3"
        ]
    },
    {
        id: "9",
        pergunta: "De qual música pertence esse trecho?",
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
        pergunta: "De qual música pertence esse trecho?",
        correta: "Vai Trabalhar Vagabundo",
        alternativas: ["Vai Trabalhar Vagabundo", "Corrente", "Basta um Dia", "Homenagem ao Malandro"],
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

var audioAtual = null;

// variaveis dos botões, que começam como nulas pq nao foi selecionada nenhuma alternativa
var respostaSelecionada = null;
var idSelecionado = null;

// saber se ele selecionou alguma alternativa
var respondeu = false;

// quando clicado, o botao redireciona para o jogo e some
function comecarJogar () {
    document.getElementById("comecarJogo").style.display = "block";
    document.getElementById("iniciarJogo").style.display = "none";
}

// faz a música tocar se estiver certo com o objeto Audio
function tocarTrecho() {
    var arquivo = quiz[perguntaAtual].trechos[tentativa - 1]; // tentativa - 1 pra começar do 0, que é 1


    // if (audioAtual != null) {
    //     audioAtual.pause();  // ele pausa a música como o próprio nome diz
    //     audioAtual.currentTime = 0; // controla  quando deve parar a música ou não
    // }

    audioAtual = new Audio(arquivo);
    audioAtual.play();
}

// carrega a pergunta
function carregarPergunta() {
    var questaoAtual = quiz[perguntaAtual];
    respondeu = false;

    document.getElementById("pergunta").innerHTML = questaoAtual.pergunta;

    var divAlt = document.getElementById("opcao");

    for (var i = 0; i < questaoAtual.alternativas.length; i++) {
        divAlt.innerHTML = `

            <div class="botaoAlternativas">
                <button id="alt1" onclick="responder('${questaoAtual.alternativas[0]}', 'alt1')">${questaoAtual.alternativas[0]}</button>
                <button id="alt2" onclick="responder('${questaoAtual.alternativas[1]}', 'alt2')">${questaoAtual.alternativas[1]}</button>
                <button id="alt3" onclick="responder('${questaoAtual.alternativas[2]}', 'alt3')">${questaoAtual.alternativas[2]}</button>
                <button id="alt4" onclick="responder('${questaoAtual.alternativas[3]}', 'alt4')">${questaoAtual.alternativas[3]}</button>
            </div>
        `;

        respostaSelecionada = null;
        idSelecionado = null;

        document.getElementById("alt1").disabled = false;
        document.getElementById("alt2").disabled = false;
        document.getElementById("alt3").disabled = false;
        document.getElementById("alt4").disabled = false;
    }
}

// atualiza os status do usuário
function atualizarStatus() {
    var totalRespostas = acertos + erros;
    var taxaAcerto = document.getElementById("taxaAcerto");
    
    if (totalRespostas > 0) {
        var calculo = (acertos / totalRespostas) * 100;
        taxaAcerto.innerHTML = `${calculo.toFixed(1)} %`;
    } else {
        taxaAcerto.innerHTML = `0%`;
    }

    document.getElementById("acertos").innerHTML = acertos;
    document.getElementById("erros").innerHTML = erros;
    document.getElementById("pontos").innerHTML = pontos;
}

// mostra a resposta correta
function responder(resposta, idBotao) {

    if (audioAtual != null) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    var questaoAtual = quiz[perguntaAtual];
    var botao = document.getElementById(idBotao);
    respondeu = true;

    // os botao fica blocado
    document.getElementById("alt1").disabled = true;
    document.getElementById("alt2").disabled = true;
    document.getElementById("alt3").disabled = true;
    document.getElementById("alt4").disabled = true;

    if (resposta == questaoAtual.correta) {

        botao.classList.add("correto");
        acertos++;

        if (tentativa == 1) {
            pontos = pontos + 5;
        } else if (tentativa == 2) {
            pontos = pontos + 3;
        } else {
            pontos = pontos + 1;
        }

        atualizarStatus();
        
    } else {

        botao.classList.add("errado");
        erros++;
        tentativa++;
        atualizarStatus();

        if (tentativa > 3) { 
            alert(`Que Pena... Você já passou suas 3 tentativas, você sera redirecionado para a próxima pergunta!`);

            setTimeout(() => {
                proxima();
            }, 5000);
        }
        else {
           
            alert("Você errou! Preste atenção e ouça o próximo trecho da música.");

            // os botao fica desbloqueado
            document.getElementById("alt1").disabled = false;
            document.getElementById("alt2").disabled = false;
            document.getElementById("alt3").disabled = false;
            document.getElementById("alt4").disabled = false;
        }
    }
}

// se tudo estiver certo ou errado passa para a próxima pergunta
function proxima() {

    if (!respondeu) {
        alert(`Você precisa selecionar uma alternativa para poder continuar!`);
        return;  // trava a função, assim nunca sai do if enquanto o usuário não selecionar uma alternativa
    }

    if (audioAtual != null) {
        audioAtual.pause();
        audioAtual.currentTime = 0;
    }

    tentativa = 1;
    perguntaAtual++;

    if (perguntaAtual >= quiz.length) {
        finalizar();
    } else {
        carregarPergunta();
    }
}

function finalizar() {
    localStorage.setItem("pontuacaoFinal", pontos);

    setInterval(() => {
        window.location = "dashboard.html";
    }, 3000);
}

// sempre carrega as próximas perguntas
carregarPergunta();