
let title = document.getElementById('title');
title.innerHTML = "Degisen Bilgi";
console.log(title.innerHTML);

//Birtane seçim yapar quarySelector
let link = document.querySelector('ul#list>li>a');
link.innerHTML += "degisti";
link.style.color = "red";
link.classList.add('btn');

