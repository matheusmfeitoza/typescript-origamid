"use strict";
//Exercício usando instanceof
let link = document.getElementById("origamid");
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http://", "https://");
}
