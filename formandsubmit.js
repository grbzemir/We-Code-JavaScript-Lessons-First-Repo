


let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault()
    console.log("islem gerceklesti")
}

//form submit oldugunda sadece veri değişir
