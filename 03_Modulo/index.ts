//Exercício usando instanceof

let link = document.getElementById("origamid");

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://");
}

// Exercício usando interfaces do DOM

/*

Exercício
1 - Selecione os elementos com a classe link.

2 - Crie uma função que deve ser executada para cada elemento.

3 - Modificar através da função o estilo da color e border.

<a class="link" href="/">Home</a>
<a class="link" href="/produtos">Produtos</a>
<button class="link">Login</button>


*/

const colors = ["red", "green", "yellow"];

const allLinks = document.querySelectorAll(".link");

function changeColorAndBorder(item: HTMLElement) {
  item.style.color = colors[Math.round(Math.random() * 2)];
  item.style.border = `1px solid  ${colors[Math.round(Math.random() * 2)]}`;
}

allLinks.forEach((link) => {
  if (link instanceof HTMLElement) {
    changeColorAndBorder(link);
  }
});

// Exercício usando Eventos e CallBacks

/* 

Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).

// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button

*/

// Capturar os 2 elementos necessários para ação do click e inserção da classe
const getBtnMobile = document.getElementById("btn-mobile");

// Função que irá adicionar a classe no menu de navegação para abrir e fechar

function handleClick(event: PointerEvent) {
  const nav = document.getElementById("nav");
  console.log(nav);
  const button = event.currentTarget;

  if (button instanceof HTMLElement && nav) {
    const active = nav.classList.contains("active");
    if (active) {
      nav.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Abrir menu");
    } else {
      nav.classList.add("active");
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Fechar menu");
    }
  }
}

getBtnMobile?.addEventListener("pointerdown", handleClick);


//Generics

function retornar<T>(objeto: T) {
  return {data: objeto, type: typeof objeto  }
}

console.log(retornar('Caderno'));
console.log(retornar(200));
console.log(retornar(true));

function returnCurrentTargetItem<T extends HTMLElement>(item: T) {
  return {
    texto: item.innerText,
    elemento: item
  }
}
const link1 = document.querySelector<HTMLAnchorElement>('.orig');

if(link1) console.log(returnCurrentTargetItem(link1));

function firstFive<T>(list: T[]): T[]{
  return list.slice(0,5);
}

const numbers = [1,2,3,4,5,6,7,8];
const fruits = ['Banana', 'Maçã', 'Mamão','Laranja','Uva','Melancia'];

console.log(firstFive(fruits));
console.log(firstFive(numbers));

// Funções
//Exercício 

/*
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
 */
function arredondaValor(valor: number): number;
function arredondaValor(valor: string): string ;
function arredondaValor(valor: string | number): string | number {
  if(typeof valor === 'string') {
    return Math.ceil(Number(valor)).toString();
  }else {
    return Math.ceil(valor);
  }
}

console.log(arredondaValor(3.8));
console.log(arredondaValor('7.2'));