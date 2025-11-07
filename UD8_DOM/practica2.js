const inputEmail = document.getElementById("email")
const inputPass = document.getElementById("password")
const errorEmail = document.getElementById("errorEmail")
const errorPass = document.getElementById("errorPass")
const boton = document.getElementById("submit")
let emailOk = false
let passOk = false

inputEmail.addEventListener("focus", function() {
  errorEmail.textContent = ""
});

inputPass.addEventListener("focus", function() {
  errorPass.textContent = ""
});

inputEmail.addEventListener("blur", function() {
  emailOk = checkMail(errorEmail);
  cambiarBoton(emailOk, passOk)
});
inputPass.addEventListener("blur", function() {
  passOk = checkPass(errorPass);
  cambiarBoton(emailOk, passOk)
});

function cambiarBoton(emailOk, passOk){
  if (emailOk && passOk){
    boton.disabled = false
  }else{
    boton.disabled = true
  }
}


function checkMail(errorEmail) {
  const email = document.getElementById("email").value
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (emailCheck.test(email)) {
    errorEmail.textContent = ''
    return true

  } else {
    errorEmail.textContent = 'El formato del email debe ser xxxx@yyyy.zzzz'
    return false
  }
}

function checkPass(errorPass){
  const password = document.getElementById("password").value
  console.log(password)

  if (password.length >= 8 && password.length <= 10) {
    errorPass.textContent = ''
    return true

  } else {
    errorPass.textContent = 'La contraseña debe tener entre 8 y 10 carácteres'
    return false
  }

}