//Object Key - Value

let laptop1 = {
    brand: "Apple",
    model: "Macbook Pro",
    "2kg": 2,
    modelName: "MackBook Pro",
    // model-name: "MacBook Pro",
    model_name: "Macbook Pro"

}


console.log(laptop1)

console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])



// // Path: keyvalue.js

laptop1.brand = "Mac"
laptop1["brand"] = "Macbook Air"
console.log(laptop1)

// //Yeni bilgi ekleme

laptop1.version = "10.15.7"
console.log(laptop1)

keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))


keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

// // Path: keyvalue.js

// //Deger bilgierine ulawsmak (values) => object.values(item)

console.log(Object.values(laptop1))

let values = Object.values(laptop1)

values.forEach(value => {
    console.log(value)
}
)

let setting = {
    password: 1234,
    userName: 'user1'
}





//örnek