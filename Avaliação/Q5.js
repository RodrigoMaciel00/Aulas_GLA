function calcularAreaPerimetro(raio) {
    let area = Math.PI * raio ** 2;
    let perimetro = 2 * Math.PI * raio;
    return { area: area.toFixed(2), perimetro: perimetro.toFixed(2) };
}

let raio = 5;
let resultados = calcularAreaPerimetro(raio);
console.log("Área do círculo:", resultados.area);
console.log("Perímetro do círculo:", resultados.perimetro);
