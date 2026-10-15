// ============================================
// script.js - parte que roda depois que a página carrega
// Serve pra testar se o scraper espera o JavaScript agir.
// ============================================

// Espera 1 segundo antes de criar o card.
setTimeout(function () {
  // Pega a seção onde os produtos ficam.
  var secaoProdutos = document.getElementById("produtos");

  // Monta o card novo na mão.
  var cardNovo = document.createElement("article");
  cardNovo.className = "produto produto-js";
  cardNovo.innerHTML =
    '<h3>Headset Gamer (adicionado por JavaScript)</h3>' +
    '<p class="preco">R$ 259,00</p>' +
    '<p>Microfone removível, som surround.</p>' +
    '<p class="estoque">Em estoque: 27 unidades</p>' +
    '<p>SKU: HEA-005 · Categoria: Áudio</p>';

  // Coloca o card dentro da seção.
  secaoProdutos.appendChild(cardNovo);

  // Escreve no console do navegador (scraper pode ler isso).
  console.log("Card inserido via JavaScript - SKU HEA-005");
}, 1000);