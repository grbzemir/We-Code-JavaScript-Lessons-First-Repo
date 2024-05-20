
function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}
hello("JavaScript")

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }
helloFuncV1("JavaScript")



const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)
//Bir parametre , bir dönüş işlemi!
helloFuncV2("JavaScript")

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`)

helloFuncV3("JavaScript", "ES6")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)

}

helloFuncV4("JavaScript", "ES6")

