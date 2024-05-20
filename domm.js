

let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover", domClick)

function domClick() {
    console.log("Tiklandi")
    console.log(this.innerHTML = "Tiklandiği İçin Bilgi Degisti")
    // console.log(this.style.color = "red")
    this.style.color == "red" ? this.style.color = "black " : this.style.color = "red"

}