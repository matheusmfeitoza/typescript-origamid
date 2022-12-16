// //Exercício usando instanceof

// let link = document.getElementById("origamid");

// if (link instanceof HTMLAnchorElement) {
//   link.href = link.href.replace("http://", "https://");
// }

// // Exercício usando interfaces do DOM

// /*

// Exercício
// 1 - Selecione os elementos com a classe link.

// 2 - Crie uma função que deve ser executada para cada elemento.

// 3 - Modificar através da função o estilo da color e border.

// <a class="link" href="/">Home</a>
// <a class="link" href="/produtos">Produtos</a>
// <button class="link">Login</button>


// */

// const colors = ["red", "green", "yellow"];

// const allLinks = document.querySelectorAll(".link");

// function changeColorAndBorder(item: HTMLElement) {
//   item.style.color = colors[Math.round(Math.random() * 2)];
//   item.style.border = `1px solid  ${colors[Math.round(Math.random() * 2)]}`;
// }

// allLinks.forEach((link) => {
//   if (link instanceof HTMLElement) {
//     changeColorAndBorder(link);
//   }
// });

// // Exercício usando Eventos e CallBacks

// /* 

// Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).

// // Estado dos elementos

// // menu inativo:
// // class="" em nav
// // aria-expanded="false" em button
// // aria-label="Abrir Menu" em button

// // menu ativo:
// // class="active" em nav
// // aria-expanded="true" em button
// // aria-label="Fechar Menu" em button

// */

// // Capturar os 2 elementos necessários para ação do click e inserção da classe
// const getBtnMobile = document.getElementById("btn-mobile");

// // Função que irá adicionar a classe no menu de navegação para abrir e fechar

// function handleClick(event: PointerEvent) {
//   const nav = document.getElementById("nav");
//   console.log(nav);
//   const button = event.currentTarget;

//   if (button instanceof HTMLElement && nav) {
//     const active = nav.classList.contains("active");
//     if (active) {
//       nav.classList.remove("active");
//       button.setAttribute("aria-expanded", "false");
//       button.setAttribute("aria-label", "Abrir menu");
//     } else {
//       nav.classList.add("active");
//       button.setAttribute("aria-expanded", "true");
//       button.setAttribute("aria-label", "Fechar menu");
//     }
//   }
// }

// getBtnMobile?.addEventListener("pointerdown", handleClick);


// //Generics

// function retornar<T>(objeto: T) {
//   return {data: objeto, type: typeof objeto  }
// }

// console.log(retornar('Caderno'));
// console.log(retornar(200));
// console.log(retornar(true));

// function returnCurrentTargetItem<T extends HTMLElement>(item: T) {
//   return {
//     texto: item.innerText,
//     elemento: item
//   }
// }
// const link1 = document.querySelector<HTMLAnchorElement>('.orig');

// if(link1) console.log(returnCurrentTargetItem(link1));

// function firstFive<T>(list: T[]): T[]{
//   return list.slice(0,5);
// }

// const numbers = [1,2,3,4,5,6,7,8];
// const fruits = ['Banana', 'Maçã', 'Mamão','Laranja','Uva','Melancia'];

// console.log(firstFive(fruits));
// console.log(firstFive(numbers));

// // Funções
// //Exercício 

// /*
// // Crie uma função que arredonda um valor passado para cima.
// // A função pode receber string ou number.
// // A função deve retornar o mesmo tipo que ela receber.
//  */
// function arredondaValor(valor: number): number;
// function arredondaValor(valor: string): string ;
// function arredondaValor(valor: string | number): string | number {
//   if(typeof valor === 'string') {
//     return Math.ceil(Number(valor)).toString();
//   }else {
//     return Math.ceil(valor);
//   }
// }

// console.log(arredondaValor(3.8));
// console.log(arredondaValor('7.2'));

// // User Type Guard
// //Exercício 

// /* 
// // 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// // 2 - Defina a interface da API
// // 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// // 4 - Use Type Guards para garantir a Type Safety do código
// // 5 - Preencha os dados da API na tela.
// */

// async function getDataFromApi(urlAPI: string)  {
//     const response = await fetch(urlAPI);
//     const data = await response.json();
//     handleDataFromApi(data);
// }
// getDataFromApi('https://api.origamid.dev/json/cursos.json');

// interface ApiDataProps {
//   nome: string;
//   horas: string;
//   aulas: number;
//   gratuito: boolean;
//   tags: string[];
//   idAulas: number[];
//   nivel: string;
// }

// function ApiDataGuard(data: unknown): data is ApiDataProps{
//   if(data && typeof data === 'object' && 'nome' in data && 'horas' in data && 'tags' in data) {
//     return true
//   } else return false
// }

// function handleDataFromApi(data: unknown) {
// if(Array.isArray(data)){
//   data.filter(ApiDataGuard).forEach(curso => {document.body.innerHTML += `
//   <div>
//     <h2>${curso.nome}</h2>
//     <p>Horas de curso: ${curso.horas}</p>
//     <span>${curso.tags.join(', ')}</span> 
//   </div>
//   `})
// }
// }


// Exercício geral sobre objetos e interfaces

// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome: string;
  email: string;
  cpf: string;
}

interface Window {
  userData: {}
}
window.userData = {}

const formulario = document.getElementById("form");

function handleKeyUp(event :KeyboardEvent) {
  const {target} = event 
  const {id, value} = target as HTMLInputElement;
  window.userData = {...window.userData, [id]: value}
  saveDataLocalStorage(window.userData);
}

function saveDataLocalStorage(data: unknown) {
  window.localStorage.setItem('userData', JSON.stringify(data));
}

function userDataTypeGuard (data: unknown): data is UserData {
  if(data && typeof data === 'object' && 'nome' in data && 'email' in data && 'cpf' in data){
    return true;
  } else {
    return false;
  }
}

function getDataFromLocalStorage(data: string) {
  if(data && typeof data === 'string'){
    const item = window.localStorage.getItem(data)
    if(item) return JSON.parse(item)
  } else{
    console.log("Informe uma string válida para buscar do localStorage");
  }
}

function onPageLoad() {
  const nome = document.getElementById('nome') as HTMLInputElement;
  const email = document.getElementById('email') as HTMLInputElement;
  const cpf = document.getElementById('cpf') as HTMLInputElement;
  const dataFromStorage = getDataFromLocalStorage('userData');
  if(userDataTypeGuard(dataFromStorage)){
    nome.value = dataFromStorage.nome;
    email.value = dataFromStorage.email;
    cpf.value = dataFromStorage.cpf;
    window.userData = dataFromStorage
  }
}
onPageLoad();

formulario?.addEventListener('keyup',handleKeyUp)