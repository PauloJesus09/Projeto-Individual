// atualizando o sessionstorage do usuario
function atualizarSessionStorage() {
  var nomeUsuario = document.getElementById("nomeUsuario");
  nomeUsuario.innerHTML = sessionStorage.NOME_USUARIO;
}

function kpiPontuacaoMedia() {
  var email = sessionStorage.EMAIL_USUARIO;
  fetch(`kpiPontuacaoMedia/kpiPontuacaoMedia/${email}`).then(function (
    response
  ) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(resposta);

        var pontuacaoMedia = Math.trunc(resposta[0].pontuacaoMedia);
        document.getElementById("pontuacaoMedia").innerHTML = pontuacaoMedia;
      });
    }
  });
}

function kpiQtdPartidas() {
  var email = sessionStorage.EMAIL_USUARIO;
  fetch(`kpiQtdPartidas/kpiQtdPartidas/${email}`).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(resposta);
        document.getElementById("totalPartidas").innerHTML = resposta[0].Total;
      });
    }
  });
}

function kpiMelhorPontuacao() {
  var email = sessionStorage.EMAIL_USUARIO;
  fetch(`kpiMelhorPontuacao/kpiMelhorPontuacao/${email}`).then(function (
    response
  ) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(resposta);
        document.getElementById("melhorPontuacao").innerHTML =
          resposta[0].melhorPontuacao;
      });
    }
  });
}

function kpiTotalDePontos() {
  var email = sessionStorage.EMAIL_USUARIO;
  fetch(`kpiTotalDePontos/kpiTotalDePontos/${email}`).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(resposta);
        document.getElementById("totalAcertos").innerHTML =
          resposta[0].totalPontos;
      });
    }
  });
}

function graficoDesempenho() {
  var email = sessionStorage.EMAIL_USUARIO;
  fetch(`graficoDesempenho/graficoDesempenho/${email}`).then(function (
    response
  ) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(resposta);
        resposta[0].pontos;
        resposta[0].dataFim;
      });
    }
  });
}

// criando o gráfico de desempenho
function graficoDesempenho() {
  var ctx = document.getElementById("graficoDesempenho");
  var email = sessionStorage.EMAIL_USUARIO;

  fetch(`graficoDesempenho/graficoDesempenho/${email}`).then(function (
    response
  ) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(resposta);

        var pontos = [];
        var datas = [];

        for (var i = 0; i < resposta.length; i++) {
          pontos.push(resposta[i].pontos);

          var dataOriginal = resposta[i].dataFim;
          var dataPreFormatada = new Date(dataOriginal);

        //   var meses = ['jan', 'dez']

          var dataFormatada = dataPreFormatada.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
          datas.push(dataFormatada);
        }

        new Chart(ctx, {
          type: "bar",
          data: {
            labels: datas,
            datasets: [
              {
                label: "Pontuação",
                data: pontos,
                borderColor: "#BC9B9A",
                backgroundColor: "rgba(188, 155, 154, 0.1)",
                borderWidth: 2,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 50,
                ticks: {
                  color: "#4F443E",
                  font: {
                    size: 13.5,
                  },
                },
                grid: {
                  color: "rgba(79, 68, 62, 0.1)",
                },
              },
              x: {
                ticks: {
                  color: "#4F443E",
                  font: {
                    size: 13.5,
                  },
                },
                grid: {
                  display: false,
                },
              },
            },
          },
        });
      });
    }
  });
}

// gráfico de taxa de acerto em donnut
function graficoTaxaAcerto() {
  var ctx = document.getElementById("graficoTaxaAcerto");

  var email = sessionStorage.EMAIL_USUARIO;
  fetch(`graficoTaxaAcerto/graficoTaxaAcerto/${email}`).then(function (
    response
  ) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(resposta);

        var taxaDeAcerto = Math.trunc(resposta[0].taxaAcertoGeral);
        var taxaDeErro = 100 - taxaDeAcerto;

        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: [`Acertos`, `Erros`],
            datasets: [
              {
                data: [taxaDeAcerto, taxaDeErro],
                backgroundColor: ["#BC9B9A", "#D4B483"],
                borderColor: ["#4F443E", "#4F443E"],
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: "#4F443E",
                  font: {
                    size: 12,
                    weight: "bold",
                  },
                  padding: 15,
                },
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    var data = context.dataset.data,
                      label = context.label,
                      currentValue = context.raw,
                      total = 0;

                    for (var i = 0; i < data.length; i++) {
                      total += data[i];
                    }

                    var percentage = parseFloat(
                      ((currentValue / total) * 100).toFixed(1)
                    );

                    return (`${percentage}%`);
                  },
                },
              },
            },
          },
        });
      });
    }
  });
}

function inicializarDashboard() {
  atualizarSessionStorage();
  graficoDesempenho();
  graficoTaxaAcerto();
  kpiPontuacaoMedia();
  kpiQtdPartidas();
  kpiMelhorPontuacao();
  kpiTotalDePontos();
}

function limparSessao() {
  alert("Você sairá de sua conta, por favor aguarde...");
  setInterval(() => {
    window.location.href = "login.html";
    sessionStorage.clear();
  }, 1500);
}
