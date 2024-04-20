function calcularMontante(C, i, t) {
    let M = C * Math.pow(1 + i / 100, t);
    return M.toFixed(2);
}

let capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros, em percentual:"));
let tempoMeses = parseInt(prompt("Digite o tempo do investimento, em meses:"));

let montante = calcularMontante(capitalInicial, taxaJuros, tempoMeses);
console.log("Montante:", montante);
