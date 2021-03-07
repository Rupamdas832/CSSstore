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