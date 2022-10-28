const resultado = document.querySelector('.display');
const botaoLimpar = document.querySelector('.limpar');
const botaoApagar = document.querySelector('.apagar');
const botaoIgual = document.querySelector('.igual');
const botaoDivisao = document.querySelector('.divisao');
const botaoMultiplicacao = document.querySelector('.multiplicacao');
const botaoSubtracao = document.querySelector('.subtracao');
const botaoAdicao = document.querySelector('.adicao');
const botaoNumeros = document.querySelectorAll('.numero');
let primeiroValor = "";
let segundoValor = "";
let operacao = "nenhumaOperacaoSelecionada";
let valor1 = "";
let valor2 = "";
let produto = "";

const limpar = () => {
    produto = "";
    resultado.textContent = "";
}
const funcaoApagar = () => {
    resultado.textContent = resultado.textContent.substring(1, resultado.textContent.length);
}
const funcaoGuardarValores = () => {
    if (operacao === "nenhumaOperacaoSelecionada") {
        primeiroValor += resultado.textContent[resultado.textContent.length - 1];
    } else {
        segundoValor += resultado.textContent[resultado.textContent.length - 1];
    }
}
const funcaoInserirEGuardar = (inserirNumero) => {
    resultado.textContent += inserirNumero;
    funcaoGuardarValores();
    resultado.textContent;
}
const funcaoZerar = () => {
    primeiroValor = "";
    segundoValor = "";
    operacao = "nenhumaOperacaoSelecionada";
    valor1 = 0;
    valor2 = 0;
    produto = "";
}
const funcaoResultado = () => {
    produto = produto.toString();
    if (produto.length > 14) {
        produto = produto.substring(0, 14);
        alert("⛄\nOps! Resultado acima de 14 dígitos!\nExibindo somente os primeiros 14 dígitos!");
    }
    resultado.textContent = produto;
}
const botoesOperacoes = (operador) => {
    if (primeiroValor !== "") {
        operacao = operador;
        limpar();
    } else {
        limpar();
        resultado.textContent = "valor?";
    }
}
const funcaoBotaoApagar = () => {
    if (primeiroValor === "" && resultado.textContent !== "") {
        funcaoZerar();
    }
    if (resultado.textContent === "valor?" || resultado.textContent === "infinito" || resultado.textContent === "impossível") {
        resultado.textContent = "";
    }
    resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1);
    if (operacao === "nenhumaOperacaoSelecionada") {
        primeiroValor = resultado.textContent;
    } else {
        segundoValor = resultado.textContent;
    }
}

const funcaoBotaoIgual = () => {
    if (primeiroValor !== "" && segundoValor !== "") {
        valor1 = parseInt(primeiroValor.trim(), 10);
        valor2 = parseInt(segundoValor.trim(), 10);
        if (operacao === "/") {
            produto = valor1 / valor2;
            funcaoResultado();
        }
        if (operacao === "x") {
            produto = valor1 * valor2;
            funcaoResultado();
        }
        if (operacao === "-") {
            produto = valor1 - valor2;
            funcaoResultado();
        }
        if (operacao === "+") {
            produto = valor1 + valor2;
            funcaoResultado();
        }
        if (resultado.textContent === "Infinity") {
            resultado.textContent = "infinito";
        }
        if (resultado.textContent === "NaN") {
            resultado.textContent = "impossível";
        }
        funcaoZerar();
    } else {
        limpar();
    }
}
const funcaoBotoesNumeros = (numero) => {
    if (primeiroValor === "" && resultado.textContent !== "") {
        resultado.textContent = "";
    }
    if (resultado.textContent.length >= 14) {
        funcaoApagar();
        funcaoInserirEGuardar(numero);
    } else if (resultado.textContent === "valor?" || resultado.textContent !== "" && primeiroValor === "") {
        limpar();
        funcaoInserirEGuardar(numero);
    } else {
        funcaoInserirEGuardar(numero);
    }
}

botaoLimpar.onclick = () => {
    limpar();
    funcaoZerar();
}
botaoApagar.onclick = () => {
    funcaoBotaoApagar();
}

botaoIgual.onclick = () => {
    funcaoBotaoIgual();
}

botaoDivisao.onclick = () => {
    botoesOperacoes("/");
}
botaoMultiplicacao.onclick = () => {
    botoesOperacoes("x");
}
botaoSubtracao.onclick = () => {
    botoesOperacoes("-");
}
botaoAdicao.onclick = () => {
    botoesOperacoes("+");
}

botaoNumeros[0].onclick = () => {
    funcaoBotoesNumeros("9");
}
botaoNumeros[3].onclick = () => {
    funcaoBotoesNumeros("8");
}
botaoNumeros[2].onclick = () => {
    funcaoBotoesNumeros("7");
}
botaoNumeros[5].onclick = () => {
    funcaoBotoesNumeros("6");
}
botaoNumeros[4].onclick = () => {
    funcaoBotoesNumeros("5");
}
botaoNumeros[7].onclick = () => {
    funcaoBotoesNumeros("4");
}
botaoNumeros[6].onclick = () => {
    funcaoBotoesNumeros("3");
}
botaoNumeros[9].onclick = () => {
    funcaoBotoesNumeros("2");
}
botaoNumeros[8].onclick = () => {
    funcaoBotoesNumeros("1");
}
botaoNumeros[1].onclick = () => {
    funcaoBotoesNumeros("0");
}