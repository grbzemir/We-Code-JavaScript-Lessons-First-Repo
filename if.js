


// userName.length > 0 ? username : "Kullanici Bilginiz Bulunamadi :("

let userName = prompt("Kullanici Adiniz:");
let info = document.querySelector("#info");

// Ternary kullanımı:
// kosul ? dogruysa : yanlissa

info.innerHTML = `${userName ? userName : "Kullanici Bilginiz Bulunamadi :("}`;
