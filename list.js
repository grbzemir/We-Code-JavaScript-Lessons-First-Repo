/* Baştaki elemana veya sondaki elemanlara değer ekleme */


let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "Son Öge Degisti"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "İlk Öge Degisti"


let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Ben Eklenen Ögeyim"

// ulDOM.appendChild(liDOM) // En sona ekler
ulDOM.prepend(liDOM) // En başa ekler