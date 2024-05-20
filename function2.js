
let firstName = "John"; //Değişkendir

function greetings(firstName = "", lastName = "") { //default Parametre eklendi
    //console.log(`Merhaba ${firstName} ? firstName :""`)
    // console.log('Hello ' + firstName);
    console.log(`Merhaba ${firstName}`)
}

console.log(firstName); // Hello John
greetings(firstName);
greetings("Parametre")

// ** Function Declaration

function greetings2(firstName, lastName) {
    console.log(`Merhaba ${firstName} ${lastName}`)

    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")

//let info = "deneme" // ????

console.log(greetingsInfo)

// ** Function Expression

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDDD</span>`

domIdWriteInfo('greeting', htmlInfo)
domIdWriteInfo('info', greetings2("John", "Kennedy"))

