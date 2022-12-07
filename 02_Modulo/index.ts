// Inferencia

const produto = "Calculadora";
const valor = 300;

// Type Annotation

const nome: string = "Matheus";
const idade: number = 27;
const hobbies: { hobbie1: string; hobbie2: string } = {
  hobbie1: "Jogar",
  hobbie2: "Dormir",
};

// Trabalhando com funções

const somar = (
  a: number,
  b: number /* Necessário anotar o type de cada parâmetro  */
) => {
  return a + b;
};

somar(4, 10);

// Funções que recebe objeto como parâmetro

const nintendo = {
  nome: "nintendo",
  preco: "2000",
};

const formataValor = (produto: { nome: string; preco: string }) => {
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

function normalizarTexto(texto: string) {
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

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) p.innerText = `Ganho total: R$ ${value + 100 - value * 0.2}`;
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

const toNumber = (value: number | string) => {
  if (typeof value === "string") {
    return Number(value);
  } else if (typeof value === "number") {
    return value;
  } else {
    throw "value deve ser um número ou uma string";
  }
};

console.log(toNumber("300"));

type ObjectProps = {
  nome: string;
  valor: number;
  ativo: boolean;
};

// E usar da seguinte maneira

function validaUsuario(user: ObjectProps) {
  console.log(`User: ${user.nome}, está: ${user.ativo ? "ativo" : "inativo"}`);
}

validaUsuario({
  nome: "Lucas",
  valor: 1,
  ativo: false,
});

//Exercício de interface

/*

Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data) {
  document.body.innerHTML = `
    <div>
      <h2>${data.name}</h2>
    </div>
  `;
}
*/

interface iDataEmpresaProps {
  nome: string;
  fundacao: number;
  pais: string;
}

interface iDataProps {
  nome: string;
  preco: number;
  descricao: string;
  garantia?: string;
  seguroAcidentes?: string;
  empresaFabricante: iDataEmpresaProps;
  empresaMontadora: iDataEmpresaProps;
}

async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json");
  const data = await response.json();
  showProduct(data);
  console.log(data);
}

fetchProduct();

function showProduct(data: iDataProps) {
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

// Exercício com arrays

/*
Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos) {}

*/
interface iCursoProps {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: "iniciante" | "avancado";
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: iCursoProps[]) {
  cursos.forEach((curso) => {
    let color = "";
    if (curso.nivel === "iniciante") {
      color = "blue";
    } else if (curso.nivel === "avancado") {
      color = "red";
    }
    document.body.innerHTML += `
        <div>
          <h2 style="color:${color};">${curso.nome}</h2>
          <p>Horas: ${curso.horas}</p>
          <p>Tipo: ${curso.gratuito ? "gratuito" : "pago"}</p>
          <p>Conteúdo: ${curso.tags.join(", ")}</p>
          <p>Aulas: ${curso.idAulas.join(" | ")}</p>
          <p>Nivel: ${curso.nivel} </p>
        </div>

      `;
  });
}
