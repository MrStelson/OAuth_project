const ru = {
    translation: {
        // Login form
        "titleLoginText": "Войти в аккаунт",
        "enterEmail": "Введите Email",
        "enterPassword": "Введите пароль",
        "checkBoxLogin": "Запомнить меня",
        "forgotPasswordHref": "Забыли пароль?",
        "loginButton": "Войти",
        "notMemberText": "Нет аккаунта?",
        "notMemberHref": "Зарегистрироваться",
        'loginVK': 'Войти через VK',
        'loginGoogle': 'Войти через Google',

        // Registration form
        "titleRegistrationText": "Зарегистрироваться",
        "enterName": "Введите свое имя",
        "enterEmailReg": "Введите Email",
        "enterPasswordReg": "Введите пароль",
        "confirmPasswordReg": "Повторите пароль",
        "termConditionsReg": "Принять пользовательские соглашения",
        "termConditionsHrefReg": "Условия и соглашения", 
        "button_signup": "Зарегистрироваться",
        "haveAccount": "Уже есть аккаунт?",
        "goLoginForm": "Войти",

        // Errors
        "errorEmail": "Неверный Email",
        "errorEmailReg": "Неверный Email",
        "errorName": "Неверное имя",
    }
};

const en = {
    translation: {
        // Login form
        "titleLoginText": "Login",
        "enterEmail": "Enter your Email",
        "enterPassword": "Enter your password",
        "checkBoxLogin": "Remember me",
        "forgotPasswordHref": "Forgot password?",
        "loginButton": "Login Now",
        "notMemberText": "Not a member?",
        "notMemberHref": "Signup now",
        'loginVK': 'Login VK',
        'loginGoogle': 'Login Google',

        // Registration form
        "titleRegistrationText": "Registration",
        "enterName": "Enter your name",
        "enterEmailReg": "Enter your Email",
        "enterPasswordReg": "Enter your password",
        "confirmPasswordReg": "Confirm a password",
        "termConditionsReg": "I accept all terms & conditions",
        "termConditionsHrefReg": "Terms & conditions",
        "button_signup": "Sign up",
        "haveAccount": "Already have an acoount?",
        "goLoginForm": "Login now",

        // Errors
        "errorEmail": "Invalid Email",
        "errorEmailReg": "Invalid Email",
        "errorName": "Invalid Name",
    }
};

i18next.init(
    {
        lng: 'en',
        fallbackLng: ["en", "ru"],
        debug: true,
        resources: {
            en,
            ru
            }
    }
);

function changeLanguage(lan){
    i18next.changeLanguage(lan, (err, t) => {
        if (err){
            return console.log('something went wrong loading', err);
        }

        // login form 
        document.getElementById("titleLoginText").innerHTML = t("titleLoginText")
        document.getElementById("enterEmail").placeholder = t("enterEmail")
        document.getElementById("enterPassword").placeholder = t("enterPassword")
        document.getElementById("checkBoxLogin").innerHTML = t("checkBoxLogin")
        document.getElementById("forgotPasswordHref").innerHTML = t("forgotPasswordHref")
        document.getElementById("loginButton").value = t("loginButton")
        document.getElementById("notMemberText").innerHTML = t("notMemberText")
        document.getElementById("notMemberHref").innerHTML = t("notMemberHref")
        document.getElementById("loginVK").innerHTML = t("loginVK")
        document.getElementById("loginGoogle").innerHTML = t("loginGoogle")

        // error in login form
        if(document.getElementById("errorEmail").textContent !== ""){
            document.getElementById("errorEmail").textContent = t("errorEmail")
        }

        // registration form
        document.getElementById("titleRegistrationText").innerHTML = t("titleRegistrationText")
        document.getElementById("enterName").placeholder = t("enterName")
        document.getElementById("enterEmailReg").placeholder = t("enterEmailReg")
        document.getElementById("enterPasswordReg").placeholder = t("enterPasswordReg")
        document.getElementById("confirmPasswordReg").placeholder = t("confirmPasswordReg")
        document.getElementById("termConditionsReg").innerHTML = t("termConditionsReg")
        document.getElementById("termConditionsHrefReg").innerHTML = t("termConditionsHrefReg")
        document.getElementById("button_signup").value = t("button_signup")
        document.getElementById("haveAccount").innerHTML = t("haveAccount")
        document.getElementById("goLoginForm").innerHTML = t("goLoginForm")

        // error in registration form
        if(document.getElementById("errorEmailReg").textContent != ""){
            document.getElementById("errorEmailReg").textContent = t("errorEmailReg")
        }
        if(document.getElementById("errorName").textContent != ""){
            document.getElementById("errorName").textContent = t("errorName")
        }
    });
}


flagsRU.forEach((flag)=>{
    flag.addEventListener("click", () => {
        changeLanguage("ru")
    })
})

flagsUK.forEach((flag)=>{
    flag.addEventListener("click", () => {
        changeLanguage("en")
    })
})