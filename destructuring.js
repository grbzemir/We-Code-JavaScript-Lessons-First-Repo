
let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "localhost",
}


let { userName: user, password, isActive, ip: ServerIP, serverName } = settings

console.log(user, password, isActive, ServerIP, serverName)
console.log(settings)
console.log(user)


let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings
console.log(userName2, password2, isActive2, newSettings)

//objhenin descturcturing ile kopyalanmasi

// let settings2 = settings

//Hatalı Kullanım

// settings2.userName = "Degisen Bilgi"
// console.log("settings", settings)
// console.log("settings2", settings2)


//Dogrusu

let settings2 = { ...settings }
settings2.userName = "Degisen Bilgi"
console.log("settings", settings)
console.log("settings2", settings2)


let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score

console.log(score1, score2, otherScore)

let copyOfScore = [...score]
console.log(copyOfScore)

//örnek