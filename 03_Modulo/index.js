"use strict";
// //Exercício usando instanceof
window.userData = {};
const formulario = document.getElementById("form");
function handleKeyUp(event) {
    const { target } = event;
    const { id, value } = target;
    window.userData = { ...window.userData, [id]: value };
    saveDataLocalStorage(window.userData);
}
function saveDataLocalStorage(data) {
    window.localStorage.setItem('userData', JSON.stringify(data));
}
function userDataTypeGuard(data) {
    if (data && typeof data === 'object' && 'nome' in data && 'email' in data && 'cpf' in data) {
        return true;
    }
    else {
        return false;
    }
}
function getDataFromLocalStorage(data) {
    if (data && typeof data === 'string') {
        const item = window.localStorage.getItem(data);
        if (item)
            return JSON.parse(item);
    }
    else {
        console.log("Informe uma string válida para buscar do localStorage");
    }
}
function onPageLoad() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const cpf = document.getElementById('cpf');
    const dataFromStorage = getDataFromLocalStorage('userData');
    if (userDataTypeGuard(dataFromStorage)) {
        nome.value = dataFromStorage.nome;
        email.value = dataFromStorage.email;
        cpf.value = dataFromStorage.cpf;
        window.userData = dataFromStorage;
    }
}
onPageLoad();
formulario?.addEventListener('keyup', handleKeyUp);
