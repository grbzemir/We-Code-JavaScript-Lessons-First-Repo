// ********** Template Literals Kullanimi **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

/*kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir.*/

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `
Merhaba ${username} sitemize hosgeldin.. 
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2 + 3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.

`
console.log(info)

let username1 = "emir"
const DOMAIN1 = "emirabigf1.org"

let email1 = username1 + "@" + DOMAIN1

let bilgisi = `	
Hosgeldiniz ${username1} sitemize..
mail adresiniz: ${email1}

mail adresinin uzunlugu: ${email1.length}
borcunuzz: ${(2 + 4) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}
kisa isminiz: ${username1[0]}.



`


console.log(bilgisi);


