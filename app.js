const passwordInput = document.querySelector("#password")
const passwordShow = document.querySelector("#passwordShow")

function showPassword() {
    if(passwordInput.type === "password"){
        passwordInput.type = "text"
    }
    else {
        passwordInput.type = "password"
    }
}

passwordShow.addEventListener("click", showPassword)


const modalOpen = document.querySelector("#modalOpen")
const modalClose = document.querySelector("#modalClose")
const modal = document.querySelector("#modal")

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

modalOpen.addEventListener("click", openModal)
modalClose.addEventListener("click", closeModal)