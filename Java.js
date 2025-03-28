let titulo = document.getElementById("titulo");
console.log("getElementId:", titulo)

let esportesPorClasse = document.getElementsByClassName("esporte")
console.log("getElementsByClassName:", esportesPorClasse)

let itensLista = document.getElementsByTagName("li");
console.log("getElementsByTagName", itensLista)

let primeiroEsporte = document.querySelector(".esporte");
console.log("querySelector:", primeiroEsporte)

let todosEsportes = document.querySelectorAll(".esporte");
console.log("querySelectorAll:", todosEsportes)