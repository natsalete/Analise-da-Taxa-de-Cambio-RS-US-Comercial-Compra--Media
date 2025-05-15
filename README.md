# Análise da Taxa de Câmbio R$/US$

Um aplicativo web interativo para análise e predição da taxa de câmbio entre Real Brasileiro (R$) e Dólar Americano (US$) utilizando aproximações polinomiais de diferentes graus.

![image](https://github.com/user-attachments/assets/7aa039f8-1a59-4b25-aa49-e2b0548c168f)


## 📋 Descrição

Este projeto consiste em uma interface web que permite ao usuário selecionar diferentes modelos polinomiais para análise da taxa de câmbio R$/US$ comercial (compra - média). O usuário pode visualizar:

- Modelos matemáticos de diferentes graus (1, 2, 3, 5 e 10)
- Visualização gráfica dos dados históricos e da curva gerada pelo modelo
- Predição da taxa de câmbio para datas futuras
- Detalhamento do cálculo utilizado

A aplicação utiliza aproximações polinomiais para modelar o comportamento histórico da taxa de câmbio e permitir projeções futuras.

## 🚀 Funcionalidades

- **Seleção de Grau do Polinômio**: Linear (Grau 1) até Grau 10
- **Visualização de Dados Históricos**: Tabela com registros históricos da taxa de câmbio
- **Cálculo Preditivo**: Estimativa da taxa de câmbio para uma data específica
- **Detalhamento da Fórmula**: Visualização detalhada da fórmula utilizada
- **Visualização Gráfica**: Gráficos das curvas polinomiais e dados históricos
- **Interface Responsiva**: Design adaptativo para diferentes dispositivos

## 💻 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.0
- Font Awesome 6.4.0

## 🛠️ Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/analise-taxa-cambio.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd analise-taxa-cambio
   ```

3. Abra o arquivo `index.html` em seu navegador ou utilize um servidor web local.

## 📊 Como Utilizar

1. **Selecione o Grau do Polinômio**: Escolha entre as opções disponíveis de grau 1 (linear) até grau 10
2. **Visualize a Fórmula**: Examine a fórmula matemática e variáveis do modelo escolhido
3. **Consulte Dados Históricos**: Visualize os dados históricos na tabela ou baixe a planilha completa
4. **Calcule uma Predição**: Insira um mês e ano específicos para obter uma predição da taxa de câmbio
5. **Visualize o Gráfico**: Observe como o modelo se ajusta aos dados históricos

## 📁 Estrutura do Projeto

```
analise-taxa-cambio/
├── index.html           # Página principal
├── styles.css           # Estilos personalizados
├── script.js            # Lógica da aplicação
└── Img/                 # Diretório de imagens
    ├── Nsr_grafico_grau1.png
    ├── Nsr_grafico_grau2.png
    ├── Nsr_grafico_grau3.png
    ├── Nsr_grafico_grau5.png
    ├── Nsr_grafico_grau10.png
    ├── Nsr_variaveis_grau1.png
    ├── Nsr_variaveis_grau2.png
    ├── Nsr_variaveis_grau3.png
    ├── Nsr_variaveis_grau5.png
    └── Nsr_variaveis_grau10.png
```

## 📈 Modelos Matemáticos

O projeto implementa cinco modelos polinomiais de diferentes graus:

1. **Linear (Grau 1)**: `f(ano,mes) = ((ano * 0,1323) + (mes * 0,0146)) + (-263,2076)`
2. **Quadrático (Grau 2)**: `f(ano,mes) = ((0,0079 * ano²) + (0,0015 * mes²)) + ((-31,6912 * ano) + (-0,0009 * mes)) + 31.729,7128`
3. **Cúbico (Grau 3)**: `f(ano,mes) = ((0,0006 * ano³) + (-0,0003 * mes³)) + ((-3,6791 * ano²) + (0,0074 * mes²)) + ((7.381,613 * ano) + (-0,0003 * mes)) + (-4.936.814,0658)`
4. **Grau 5 (Modelo Recomendado)**: Polinômio de quinto grau com melhor ajuste para os dados
5. **Grau 10**: Polinômio de décimo grau para análise avançada

## 📊 Fonte dos Dados

Os dados históricos utilizados neste projeto foram obtidos através de fontes oficiais e compilados em uma planilha Excel. Para acessar a planilha completa, utilize o botão de download disponível na aplicação.

## ✨ Melhorias Futuras

- [ ] Implementação de gráficos interativos
- [ ] Adição de mais métodos de modelagem (regressão não-polinomial)
- [ ] Comparativo entre diferentes modelos
- [ ] Exportação dos resultados em PDF
- [ ] Modo offline usando localStorage

## 👩‍💻 Autoria

Desenvolvido por **Natalia Salete** - [GitHub](https://github.com/natsalete)

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

⭐️ Se este projeto foi útil para você, não esqueça de deixar uma estrela no GitHub!
