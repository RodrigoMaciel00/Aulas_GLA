let salarioInicial = 1000;
let anoAtual = new Date().getFullYear();
let aumento = 0.015;
let salario = salarioInicial;

for (let ano = 1996; ano <= anoAtual; ano++) {
    aumento *= 2;
    salario *= (1 + aumento);
}

console.log("Salário atual do funcionário:", salario.toFixed(2));
