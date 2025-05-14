// Variáveis globais
let Nsr_currentPage = 1;
let Nsr_grauSelecionado = null;

// Imagens para as variáveis de cada grau
const Nsr_imagensVariaveis = {
    1: "Img/Nsr_variaveis_grau1.png",
    2: "Img/Nsr_variaveis_grau2.png",
    3: "Img/Nsr_variaveis_grau3.png",
    5: "Img/Nsr_variaveis_grau5.png",
    10: "Img/Nsr_variaveis_grau10.png"
};

// Funções para diferentes graus de polinômio
const Nsr_funcoes = {
    1: "f(ano,mes) = ((ano * 0,1323) + (mes * 0,0146)) + (-263,2076)",
    2: "f(ano,mes) = ((0,0079 * ano²) + (0,0015 * mes²)) + ((-31,6912 * ano) + (-0,0009 * mes)) + 31.729,7128",
    3: "f(ano,mes) = ((0,0006 * ano³) + (-0,0003 * mes³)) + ((-3,6791 * ano²) + (0,0074 * mes²)) + ((7.381,613 * ano) + (-0,0003 * mes)) + (-4.936.814,0658)",
    5: "f(ano,mes) = ((-1,55E-06 * ano⁵) + (7,73E-06 * mes⁵)) + ((0,0155 * ano⁴) + (-0,0004 * mes⁴)) + ((-61,6287 * ano³) + (0,0066 * mes³)) + ((122.807,8346 * ano²) + (-0,0425 * mes²)) + ((-1,22E8 * ano) + (0,107 * mes)) + 4,88E10",
    10: "f(ano,mes) = ((-5,29E-22 * ano¹⁰) + (4,03E-07 * mes¹⁰)) + ((4,41E-18 * ano⁹) + (-2,94E-5 * mes⁹)) + ... + ((-1,03E11 * ano) + (-18,2693 * mes)) + 4,03E13"
};

// Imagens dos gráficos para cada grau
const Nsr_graficos = {
    1: "Img/Nsr_grafico_linear_grau1.png",  
    2: "Img/Nsr_grafico_grau2.png",  
    3: "Img/Nsr_grafico_grau3.png",  
    5: "Img/Nsr_grafico_grau5.png",  
    10: "Img/Nsr_grafico_grau10.png" 
};

// Inicialização quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Define o ano atual no footer
    document.getElementById('Nsr_currentYear').textContent = new Date().getFullYear();
    
    // Inicializa tooltips do Bootstrap (opcional)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Função para selecionar o grau do polinômio
function Nsr_selectGrau(element) {
    // Remove a classe "selected" de todos os elementos
    document.querySelectorAll('.Nsr_option-box').forEach(box => {
        box.classList.remove('selected');
    });
    
    // Adiciona a classe "selected" ao elemento clicado
    element.classList.add('selected');
    
    // Armazena o valor selecionado
    Nsr_grauSelecionado = element.getAttribute('data-value');
    console.log(`Grau selecionado: ${Nsr_grauSelecionado}`);
}

// Função para avançar para a próxima página
function Nsr_nextPage() {
    if (Nsr_currentPage === 1 && !Nsr_grauSelecionado) {
        Nsr_showAlert("Por favor, selecione um grau de polinômio antes de continuar.", "warning");
        return;
    }
    
    if (Nsr_currentPage < 4) {
        // Oculta a página atual
        document.getElementById(`Nsr_page${Nsr_currentPage}`).classList.remove('active');
        
        // Avança para a próxima página
        Nsr_currentPage++;
        
        // Exibe a nova página
        document.getElementById(`Nsr_page${Nsr_currentPage}`).classList.add('active');
        
        // Atualiza conteúdo específico da página
        if (Nsr_currentPage === 2) {
            Nsr_updatePage2Content();
        } else if (Nsr_currentPage === 4) {
            Nsr_updatePage4Content();
        }
        
        // Rolagem suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Função para voltar para a página anterior
function Nsr_previousPage() {
    if (Nsr_currentPage > 1) {
        // Oculta a página atual
        document.getElementById(`Nsr_page${Nsr_currentPage}`).classList.remove('active');
        
        // Volta para a página anterior
        Nsr_currentPage--;
        
        // Exibe a nova página
        document.getElementById(`Nsr_page${Nsr_currentPage}`).classList.add('active');
        
        // Rolagem suave para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Função para mostrar alertas
function Nsr_showAlert(message, type = "info") {
    // Cria o elemento de alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Encontra o container e insere o alerta no início
    const container = document.querySelector('.container');
    container.insertBefore(alertDiv, container.firstChild);
    
    // Auto-fechar após 4 segundos
    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
}

// Função para atualizar o conteúdo da página 2
function Nsr_updatePage2Content() {
    // Atualiza o grau selecionado
    document.getElementById('Nsr_grauSelecionado').innerHTML = `<p class="mb-0">Você selecionou: <strong>Grau ${Nsr_grauSelecionado}</strong></p>`;
    
    // Adiciona a imagem das variáveis
    const imagemHTML = `
        <div class="Nsr_variaveis-container">
            <h3 class="h5 text-primary">Variáveis do Polinômio</h3>
            <img src="${Nsr_imagensVariaveis[Nsr_grauSelecionado]}" alt="Variáveis para grau ${Nsr_grauSelecionado}" class="Nsr_variaveis-img img-fluid">
        </div>
    `;
    
    // Atualiza a fórmula com a imagem das variáveis
    document.getElementById('Nsr_formula').innerHTML = `
        ${imagemHTML}
        <div class="Nsr_formula-text">${Nsr_funcoes[Nsr_grauSelecionado]}</div>
    `;
    
    // Aqui você poderia carregar os dados reais da planilha para a tabela
    // Por enquanto, usamos dados de exemplo já presentes no HTML
}

// Função para atualizar o conteúdo da página 4
function Nsr_updatePage4Content() {
    // Atualiza o grau do gráfico
    document.getElementById('Nsr_grauGrafico').textContent = Nsr_grauSelecionado;
    
    // Atualiza a imagem do gráfico
    document.getElementById('Nsr_graficoImg').src = Nsr_graficos[Nsr_grauSelecionado];
}

// Função para calcular a taxa de câmbio
function Nsr_calcularTaxa() {
    const mes = parseInt(document.getElementById('Nsr_mes').value);
    const ano = parseInt(document.getElementById('Nsr_ano').value);
    
    // Validação básica
    if (isNaN(mes) || mes < 1 || mes > 12) {
        Nsr_showAlert("Por favor, insira um mês válido entre 1 e 12.", "danger");
        return;
    }
    
    if (isNaN(ano)) {
        Nsr_showAlert("Por favor, insira um ano válido entre 2000 e 2030.", "danger");
        return;
    }

    // Calculamos a taxa estimada com base no grau selecionado
    let taxaEstimada;
    let detalhes;
    
    try {
        if (Nsr_grauSelecionado == 1) {
            // Cálculo para Grau 1
            taxaEstimada = ((ano * 0.1323) + (mes * 0.0146)) + (-263.2076);
            detalhes = `
                <div class="card mb-3">
                    <div class="card-header bg-light">Detalhes do Cálculo - Polinômio de Grau 1</div>
                    <div class="card-body">
                        <p><strong>Fórmula:</strong> f(ano,mes) = ((ano * 0,1323) + (mes * 0,0146)) + (-263,2076)</p>
                        <p><strong>Valores:</strong> ano = ${ano}, mes = ${mes}</p>
                        <p><strong>Substituindo:</strong> f(${ano}, ${mes}) = ((${ano} * 0,1323) + (${mes} * 0,0146)) - 263,2076</p>
                        <p><strong>Cálculo:</strong> ${(ano * 0.1323).toFixed(4)} + ${(mes * 0.0146).toFixed(4)} - 263,2076 = ${taxaEstimada.toFixed(4)}</p>
                    </div>
                </div>
            `;
        } else if (Nsr_grauSelecionado == 2) {
            // Cálculo para Grau 2
            const termo1 = 0.007913606 * Math.pow(ano, 2);
            const termo2 = 0.001523662 * Math.pow(mes, 2);
            const termo3 = -31.69115916 * ano;
            const termo4 = -0.000894947 * mes;
            const termo5 = 31729.71279;
            
            taxaEstimada = termo1 + termo2 + termo3 + termo4 + termo5;
            
            detalhes = `
                <div class="card mb-3">
                    <div class="card-header bg-light">Detalhes do Cálculo - Polinômio de Grau 2</div>
                    <div class="card-body">
                        <p><strong>Fórmula:</strong> f(ano,mes) = ((0,0079 * ano²) + (0,0015 * mes²)) + ((-31,6912 * ano) + (-0,0009 * mes)) + 31.729,7128</p>
                        <p><strong>Valores:</strong> ano = ${ano}, mes = ${mes}</p>
                        <p><strong>Termos calculados:</strong></p>
                        <ul>
                            <li>0,0079 * ${ano}² = ${termo1.toFixed(4)}</li>
                            <li>0,0015 * ${mes}² = ${termo2.toFixed(4)}</li>
                            <li>-31,6912 * ${ano} = ${termo3.toFixed(4)}</li>
                            <li>-0,0009 * ${mes} = ${termo4.toFixed(4)}</li>
                            <li>Constante = ${termo5.toFixed(4)}</li>
                        </ul>
                        <p><strong>Resultado:</strong> ${termo1.toFixed(4)} + ${termo2.toFixed(4)} + ${termo3.toFixed(4)} + ${termo4.toFixed(4)} + ${termo5.toFixed(4)} = ${taxaEstimada.toFixed(4)}</p>
                    </div>
                </div>
            `;
        } else if (Nsr_grauSelecionado == 3) {
            // Cálculo para Grau 3
            const termo1 = 7381.612971 * ano;
            const termo2 = -3.679050791 * Math.pow(ano, 2);
            const termo3 = 0.000611224 * Math.pow(ano, 3);
            const termo4 = -0.026746346 * mes;
            const termo5 = 0.007415189 * Math.pow(mes, 2);
            const termo6 = -0.000323379 * Math.pow(mes, 3);
            const termo7 = -4936814.066;
            
            taxaEstimada = termo1 + termo2 + termo3 + termo4 + termo5 + termo6 + termo7;
                           
            detalhes = `
                <div class="card mb-3">
                    <div class="card-header bg-light">Detalhes do Cálculo - Polinômio de Grau 3</div>
                    <div class="card-body">
                        <p><strong>Fórmula:</strong> f(ano,mes) = ((0,0006 * ano³) + (-0,0003 * mes³)) + ((-3,6791 * ano²) + (0,0074 * mes²)) + ((7.381,613 * ano) + (-0,0003 * mes)) + (-4.936.814,0658)</p>
                        <p><strong>Valores:</strong> ano = ${ano}, mes = ${mes}</p>
                        <p><strong>Termos calculados:</strong></p>
                        <ul>
                            <li>7.381,613 * ${ano} = ${termo1.toFixed(4)}</li>
                            <li>-3,6791 * ${ano}² = ${termo2.toFixed(4)}</li>
                            <li>0,0006 * ${ano}³ = ${termo3.toFixed(4)}</li>
                            <li>-0,0003 * ${mes} = ${termo4.toFixed(4)}</li>
                            <li>0,0074 * ${mes}² = ${termo5.toFixed(4)}</li>
                            <li>-0,0003 * ${mes}³ = ${termo6.toFixed(4)}</li>
                            <li>Constante = ${termo7.toFixed(4)}</li>
                        </ul>
                        <p><strong>Resultado:</strong> ${termo1.toFixed(4)} + ${termo2.toFixed(4)} + ${termo3.toFixed(4)} + ${termo4.toFixed(4)} + ${termo5.toFixed(4)} + ${termo6.toFixed(4)} + ${termo7.toFixed(4)} = ${taxaEstimada.toFixed(4)}</p>
                    </div>
                </div>
            `;
        } else if (Nsr_grauSelecionado == 5) {
            // Cálculo para Grau 5 (melhor polinômio)
            const termo1 = -122347931.414095 * ano;
            const termo2 = 0.107010614679727 * mes;
            const termo3 = 122807.834559145 * Math.pow(ano, 2);
            const termo4 = -0.0424744262731338 * Math.pow(mes, 2);
            const termo5 = -61.6287459563383 * Math.pow(ano, 3);
            const termo6 = 0.00660978340382616 * Math.pow(mes, 3);
            const termo7 = 0.0154621223043723 * Math.pow(ano, 4);
            const termo8 = -0.00039948274156242 * Math.pow(mes, 4);
            const termo9 = -1.55157961018713e-06 * Math.pow(ano, 5);
            const termo10 = 7.72825982521101e-06 * Math.pow(mes, 5);
            const termo11 = 48751082900.5348;
            
            taxaEstimada = termo1 + termo2 + termo3 + termo4 + termo5 + termo6 + termo7 + 
                         termo8 + termo9 + termo10 + termo11;
                         
            detalhes = `
                <div class="card mb-3">
                    <div class="card-header bg-light">Detalhes do Cálculo - Polinômio de Grau 5</div>
                    <div class="card-body">
                        <p><strong>Fórmula:</strong> f(ano,mes) = ((-1,55E-06 * ano⁵) + (7,73E-06 * mes⁵)) + ((0,0155 * ano⁴) + (-0,0004 * mes⁴)) + ((-61,6287 * ano³) + (0,0066 * mes³)) + ((122.807,8346 * ano²) + (-0,0425 * mes²)) + ((-1,22E8 * ano) + (0,107 * mes)) + 4,88E10</p>
                        <p><strong>Valores:</strong> ano = ${ano}, mes = ${mes}</p>
                        <p><strong>Termos principais calculados:</strong></p>
                        <ul>
                            <li>-1,22E8 * ${ano} = ${termo1.toFixed(4)}</li>
                            <li>0,107 * ${mes} = ${termo2.toFixed(4)}</li>
                            <li>122.807,8346 * ${ano}² = ${termo3.toFixed(4)}</li>
                            <li>-0,0425 * ${mes}² = ${termo4.toFixed(4)}</li>
                            <li>-61,6287 * ${ano}³ = ${termo5.toFixed(4)}</li>
                            <li>0,0066 * ${mes}³ = ${termo6.toFixed(4)}</li>
                            <li>0,0155 * ${ano}⁴ = ${termo7.toFixed(4)}</li>
                            <li>-0,0004 * ${mes}⁴ = ${termo8.toFixed(4)}</li>
                            <li>-1,55E-06 * ${ano}⁵ = ${termo9.toExponential(4)}</li>
                            <li>7,73E-06 * ${mes}⁵ = ${termo10.toExponential(4)}</li>
                            <li>Constante = ${termo11.toFixed(4)}</li>
                        </ul>
                        <p><strong>Resultado Final:</strong> ${taxaEstimada.toFixed(4)}</p>
                    </div>
                </div>
            `;
        } else if (Nsr_grauSelecionado == 10) {
            // Cálculo para Grau 10
            const termo1 = -103296132541.505 * ano;
            const termo2 = -18.2692589308974 * mes;
            const termo3 = 95423513.8075318 * Math.pow(ano, 2);
            const termo4 = 19.8607788177592 * Math.pow(mes, 2);
            const termo5 = -26000.5260130408 * Math.pow(ano, 3);
            const termo6 = -11.6311621333 * Math.pow(mes, 3);
            const termo7 = -17.2472164542622 * Math.pow(ano, 4);
            const termo8 = 4.13155006952661 * Math.pow(mes, 4);
            const termo9 = 0.0163560665755564 * Math.pow(ano, 5);
            const termo10 = -0.94145407056638 * Math.pow(mes, 5);
            const termo11 = -5.48005123677284E-06 * Math.pow(ano, 6);
            const termo12 = 0.140697687961725 * Math.pow(mes, 6);
            const termo13 = 8.57644749347337E-10 * Math.pow(ano, 7);
            const termo14 = -0.0137202587114999 * Math.pow(mes, 7);
            const termo15 = -6.10207301385269E-14 * Math.pow(ano, 8);
            const termo16 = 0.000840660928408699 * Math.pow(mes, 8);
            const termo17 = 4.41455177776382E-18 * Math.pow(ano, 9);
            const termo18 = -0.0000293729247180563 * Math.pow(mes, 9);
            const termo19 = -5.28695297101837E-22 * Math.pow(ano, 10);
            const termo20 = 4.46291175618437E-07 * Math.pow(mes, 10);
            const termo21 = 40310942434088.8;
            
            taxaEstimada = termo1 + termo2 + termo3 + termo4 + termo5 + termo6 + termo7 + 
                         termo8 + termo9 + termo10 + termo11 + termo12 + termo13 + termo14 + 
                         termo15 + termo16 + termo17 + termo18 + termo19 + termo20 + termo21;
                         
            detalhes = `
                <div class="card mb-3">
                    <div class="card-header bg-light">Detalhes do Cálculo - Polinômio de Grau 10</div>
                    <div class="card-body">
                        <p><strong>Fórmula:</strong> f(ano,mes) = ((-5,29E-22 * ano¹⁰) + (4,03E-07 * mes¹⁰)) + ((4,41E-18 * ano⁹) + (-2,94E-5 * mes⁹)) + ... + ((-1,03E11 * ano) + (-18,2693 * mes)) + 4,03E13</p>
                        <p><strong>Valores:</strong> ano = ${ano}, mes = ${mes}</p>
                        <p><strong>Termos principais calculados:</strong></p>
                        <ul>
                            <li>-1,03E11 * ${ano} = ${termo1.toExponential(4)}</li>
                            <li>-18,2693 * ${mes} = ${termo2.toFixed(4)}</li>
                            <li>9,54E7 * ${ano}² = ${termo3.toExponential(4)}</li>
                            <li>19,8608 * ${mes}² = ${termo4.toFixed(4)}</li>
                        </ul>
                        <p><em>Nota: Devido à complexidade da fórmula, apenas os principais termos são mostrados.</em></p>
                        <p><strong>Resultado Final:</strong> ${taxaEstimada.toFixed(4)}</p>
                    </div>
                </div>
            `;
        }
        
        // Mostra o resultado
        document.getElementById('Nsr_calculoDetalhado').innerHTML = detalhes;
        document.getElementById('Nsr_taxaEstimada').textContent = taxaEstimada.toFixed(4);
        document.getElementById('Nsr_resultadoCalculo').style.display = 'block';
    } catch (error) {
        Nsr_showAlert("Ocorreu um erro ao calcular a taxa: " + error.message, "danger");
    }
}

// Função para resetar o aplicativo
function Nsr_resetApp() {
    // Volta para a página 1
    document.getElementById(`Nsr_page${Nsr_currentPage}`).classList.remove('active');
    Nsr_currentPage = 1;
    document.getElementById(`Nsr_page${Nsr_currentPage}`).classList.add('active');
    
    // Limpa a seleção do grau
    document.querySelectorAll('.Nsr_option-box').forEach(box => {
        box.classList.remove('selected');
    });
    Nsr_grauSelecionado = null;
    
    // Limpa os resultados
    document.getElementById('Nsr_resultadoCalculo').style.display = 'none';
}