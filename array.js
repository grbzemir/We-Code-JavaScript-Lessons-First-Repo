

//Array olusturmak

let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]

console.log(items)

let emptyArray = [] // boş bir liste

// Array icerisindeki eleman/oge sayisini ogrenmek
console.log(
    items.length // array icindeki oge sayisi
)

// document.querySelector('#info').innerHTML = items.length

// Array icindeki ortadaki elemanin cagirilmasi
console.log(
    "ortadaki :",
    items[Math.floor(items.length / 2)]
)

// Array icindeki ilk elemanı cagirmak

console.log(items[0])

// Array icindeki son elemanin cagirilmasi
console.log(items[items.length - 1])

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(
    typeof (items) // object olarak cikti veriyor
)


console.log(
    Array.isArray(items)
)


console.log("[] : ", Array.isArray([]))
console.log("1 : ", Array.isArray(1))
console.log("true : ", Array.isArray(true))

