// dadaos de exemplo
var nomeUsuario = "Paulo Gonçalves";
var totalPartidas = 15;
var pontuacaoTotal = 1250;
var totalAcertos = 45;
var totalErros = 15;
var melhorSequencia = 8;
var melhorPontuacao = 120;
var desempenhoPartidas = [85, 92, 78, 95, 88, 100, 82, 110, 98, 105];


// ATUALIZAR KPIs
function atualizarKPIs() {
    document.getElementById('nomeUsuario').textContent = nomeUsuario;
    document.getElementById('totalPartidas').textContent = totalPartidas;
    document.getElementById('pontuacaoTotal').textContent = pontuacaoTotal;
    
    var taxaAcerto = Math.trunc((totalAcertos / (totalAcertos + totalErros)) * 100);
    document.getElementById('taxaAcertoKpi').textContent = taxaAcerto + '%';
    
    document.getElementById('melhorSequencia').textContent = melhorSequencia;
    document.getElementById('totalAcertos').textContent = totalAcertos;
    document.getElementById('totalErros').textContent = totalErros;
    
    var pontuacaoMedia = Math.trunc(pontuacaoTotal / totalPartidas);
    document.getElementById('pontuacaoMedia').textContent = pontuacaoMedia;
    
    document.getElementById('melhorPontuacao').textContent = melhorPontuacao;
}

// CRIAR GRÁFICO DE DESEMPENHO
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

// CRIAR GRÁFICO DE TAXA DE ACERTO
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
    criarGraficoDesempenho();
    criarGraficoTaxaAcerto();
}

function limparSessao() {
    sessionStorage.clear();
    window.location.href = 'login.html';
}