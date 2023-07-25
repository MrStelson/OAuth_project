const errorEmailValid = document.getElementById("errorEmail"),
      enterEmailValid = document.getElementById("enterEmail"),
      errorEmailRegValid = document.getElementById("errorEmailReg"),
      enterEmailRegValid = document.getElementById("enterEmailReg"),
      errorNameValid = document.getElementById("errorName"),
      enterNameValid = document.getElementById("enterName");

const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/
const regName = /^[а-яА-ЯёЁ \-]+$/


// Check Email in login form
enterEmailValid.addEventListener("focusout", () => {
    if (regEmail.test(enterEmailValid.value) || enterEmailValid.value === ""){
        errorEmailValid.textContent = ""
    }else{
        errorEmailValid.textContent = "Invalid Email"
    }
})


// Check Email in registration form
enterEmailRegValid.addEventListener("focusout", () => {
    if (regEmail.test(enterEmailRegValid.value) || enterEmailRegValid.value === ""){
        errorEmailRegValid.textContent = ""
    }else{
        errorEmailRegValid.textContent = "Invalid Email"
    }
})


// Check Name in registration form
enterNameValid.addEventListener("focusout", () => {
    if (regName.test(enterNameValid.value) || enterNameValid.value === ""){
        errorNameValid.textContent = ""
    }else{
        errorNameValid.textContent = "Invalid Name"
    }
});

