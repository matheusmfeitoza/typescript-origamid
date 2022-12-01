"use strict";
// Inferencia
const produto = "Calculadora";
const valor = 300;
// Type Annotation
const nome = "Matheus";
const idade = 27;
const hobbies = {
    hobbie1: "Jogar",
    hobbie2: "Dormir",
};
// Trabalhando com funções
const somar = (a, b /* Necessário anotar o type de cada parâmetro  */) => {
    return a + b;
};
somar(4, 10);
// Funções que recebe objeto como parâmetro
const nintendo = {
    nome: "nintendo",
    preco: "2000",
};
const formataValor = (produto) => {
    produto.preco = "RS " + produto.preco;
    return produto;
};
const produtoNovo = formataValor(nintendo);
console.log(produtoNovo);
// Exercício 01
// Ajustar a função abaixo para funcionar corretamente;
//function normalizarTexto(texto) {
//  return texto.trims().toLowercase();
//}
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(" DesIgN "));
// Exercício 02
/*
const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector('p');
  p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem('total', value);
  calcularGanho(value);
}

input.addEventListener('keyup', totalMudou)

*/
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (total !== null && input !== null) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p)
        p.innerText = `Ganho total: R$ ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    const value = Number(input?.value);
    localStorage.setItem("total", JSON.stringify(value));
    calcularGanho(value);
}
input?.addEventListener("keyup", totalMudou);
