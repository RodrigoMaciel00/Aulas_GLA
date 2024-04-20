function calcularEstatisticas(numeros) {
    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    let soma = numeros.reduce((a, b) => a + b, 0);
    
    console.log("Conjunto de números:", numeros);
    console.log("Menor valor:", menor);
    console.log("Maior valor:", maior);
    console.log("Soma dos valores:", soma);
}

let conjunto = [10, 5, 8, 20, 3, 15];
calcularEstatisticas(conjunto);
