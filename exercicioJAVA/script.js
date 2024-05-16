let soma1 = document.querySelector("#soma1");
let soma2 = document.querySelector("#soma2");
let btSomar = document.querySelector("#btSomar");
let Resultado = document.querySelector("#Resultado");

btSomar.onclick = function() {
    var valor1 = parseFloat(soma1.value); // Converte para número de ponto flutuante
    var valor2 = parseFloat(soma2.value); // Converte para número de ponto flutuante
    var resultado = valor1 + valor2;
    Resultado.textContent = resultado;
}