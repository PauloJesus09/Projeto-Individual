// dadaos de exemplo
var nomeUsuario = "Paulo Gonçalves";
var totalPartidas = 15;
var pontuacaoTotal = 1250;
var totalAcertos = 45;
var totalErros = 15;
var melhorSequencia = 8;
var melhorPontuacao = 120;
var desempenhoPartidas = [85, 92, 78, 95, 88, 100, 82, 110, 98, 105];

// atualizando kpis
function atualizarKPIs() {
    var nomeUsuario = sessionStorage.NOME_USUARIO;

    document.getElementById('nomeUsuario').innerHTML = nomeUsuario;
    document.getElementById('totalPartidas').innerHTML = totalPartidas;
    document.getElementById('pontuacaoTotal').innerHTML = pontuacaoTotal;
    
    var taxaAcerto = Math.trunc((totalAcertos / (totalAcertos + totalErros)) * 100);
    document.getElementById('taxaAcertoKpi').innerHTML = taxaAcerto + '%';
    
    document.getElementById('melhorSequencia').innerHTML = melhorSequencia;
    document.getElementById('totalAcertos').innerHTML = totalAcertos;
    document.getElementById('totalErros').innerHTML = totalErros;
    
    
    
    document.getElementById('melhorPontuacao').innerHTML = melhorPontuacao;
}

function kpiPontuacaoMedia() {
    var email = sessionStorage.EMAIL_USUARIO;
    fetch(`kpiPontuacaoMedia/kpiPontuacaoMedia/${email}`)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(resposta);
                    

                    var pontuacaoMedia = Math.trunc(resposta[0].pontuacaoMedia);
                    document.getElementById('pontuacaoMedia').innerHTML = pontuacaoMedia;
                });
            }
        });
}

// criando o gráfico de desempenho
function criarGraficoDesempenho() {
    var ctx = document.getElementById('graficoDesempenho').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Partida 1', 'Partida 2', 'Partida 3', 'Partida 4', 'Partida 5', 
                    'Partida 6', 'Partida 7', 'Partida 8', 'Partida 9', 'Partida 10'],
            datasets: [{
                label: 'Pontuação',
                data: desempenhoPartidas,
                borderColor: '#BC9B9A',
                backgroundColor: 'rgba(188, 155, 154, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#BC9B9A',
                pointBorderColor: '#FDF8F0',
                pointBorderWidth: 2,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: '#4F443E',
                pointHoverBorderColor: '#FDF8F0'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#4F443E',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 120,
                    ticks: {
                        color: '#4F443E',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(79, 68, 62, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#4F443E',
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// gráfico de taxa de acerto em donnut
function criarGraficoTaxaAcerto() {
    var ctx = document.getElementById('graficoTaxaAcerto').getContext('2d');
    
    var total = totalAcertos + totalErros;
    var percentualAcertos = Math.round((totalAcertos / total) * 100);
    var percentualErros = 100 - percentualAcertos;
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Acertos', 'Erros'],
            datasets: [{
                data: [percentualAcertos, percentualErros],
                backgroundColor: [
                    '#BC9B9A',
                    '#D4B483'
                ],
                borderColor: [
                    '#4F443E',
                    '#4F443E'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#4F443E',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                }
            }
        }
    });
}

function inicializarDashboard() {
    atualizarKPIs();
    kpiPontuacaoMedia();
    criarGraficoDesempenho();
    criarGraficoTaxaAcerto();
}

function limparSessao() {
    alert('Você sairá de sua conta, por favor aguarde...')
    setInterval(() => {
        window.location.href = 'login.html';
    }, 1500);
    sessionStorage.clear();
}