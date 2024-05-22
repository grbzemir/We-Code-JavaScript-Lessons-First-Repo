

let user = { username: "emircangürbüz", isActive: true }

console.log(user)

localStorage.setItem('userInfo', JSON.stringify(user))
//JSON.stringify(), JavaScript nesnesini(object) dizeye dönüştürmek için kullanılır
let userInfo = localStorage.getItem('userInfo')

userInfo = JSON.parse(userInfo)
console.log(userInfo)

