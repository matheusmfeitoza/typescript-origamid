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
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p)
        p.innerText = `Ganho total: R$ ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
input?.addEventListener("keyup", totalMudou);
// Exercício Union types
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
const toNumber = (value) => {
    if (typeof value === "string") {
        return Number(value);
    }
    else if (typeof value === "number") {
        return value;
    }
    else {
        throw "value deve ser um número ou uma string";
    }
};
console.log(toNumber("300"));
// E usar da seguinte maneira
function validaUsuario(user) {
    console.log(`User: ${user.nome}, está: ${user.ativo ? "ativo" : "inativo"}`);
}
validaUsuario({
    nome: "Lucas",
    valor: 1,
    ativo: false,
});
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    showProduct(data);
    console.log(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
    <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco} </p>
        <p>${data.descricao} </p>

        <div>
          <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        </div>
        <div>
          <h3>Montadora: ${data.empresaMontadora.nome}</h3>
        </div>
    </div>
  `;
}
