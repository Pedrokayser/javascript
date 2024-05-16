let valorpago = document.querySelector("#valorpago");
let Valorprotudo = document.querySelector("#Valordoprotudo");
let btSomar = document.querySelector("#btSomar");

btSomar.onclick = function CalcularTroco() {
    var valorPago = parseInt(valorpago.value);
    var ValorProduto = parseInt(Valorprotudo.value);
    var troco = valorPago - ValorProduto;

    // Exibir o resultado na página
    document.getElementById("Resultado").innerText = "Troco: " + troco;
}

