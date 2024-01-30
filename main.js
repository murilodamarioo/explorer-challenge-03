// Variables
const text = document.querySelector(".text")
const lucky = document.querySelector(".lucky")
const cookie = document.querySelector(".cookie")
const cookieOpened = document.querySelector(".cookie-opened")
const btnReset = document.querySelector(".btn-reset")

// Events
cookie.addEventListener('click', openAndCloseCookie)
btnReset.addEventListener('click', openAndCloseCookie)

function openAndCloseCookie() {
    lucky.classList.toggle("hide")
    btnReset.classList.toggle("hide")
    cookieOpened.classList.toggle("hide")

    text.classList.toggle("hide")
    cookie.classList.toggle("hide")

}