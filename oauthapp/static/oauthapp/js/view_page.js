const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),

      terms_conditions = document.getElementById("terms_conditions"),
      login_button = document.getElementById("button_signup"),

      flags = document.querySelectorAll(".flag_icon"),
      flagsRU = document.querySelectorAll(".ruFlag"),
      flagsUK = document.querySelectorAll(".ukFlag")



    // js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", () =>{
        pwFields.forEach(pwField =>{
            if(pwField.type === "password"){
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye")
                })
            }else{
                pwField.type = "password"
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash")
                })
            }
        })
    })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", () =>{
    container.classList.add("active");
    })
    
    login.addEventListener("click", () =>{
    container.classList.remove("active");
    })


    // js code to check terms and conditions checkbox
    terms_conditions.addEventListener("click", () =>{
    if(terms_conditions.checked){
        login_button.classList.toggle("disabled")
        login_button.disabled = false
    }else{
        login_button.classList.toggle("disabled")
        login_button.disabled = true
    }
    })

    

    // js code to change language
    // to RU
    flagsRU.forEach((flag) => {
        flag.addEventListener("click", () =>{
            flagsRU.forEach((activeFlag) => {
                activeFlag.classList.add("activeFlag")
            })
            flagsUK.forEach((activeFlag) => {
                activeFlag.classList.remove("activeFlag")
            })
        })
    })

    // to UK
    flagsUK.forEach((flag) => {
        flag.addEventListener("click", () =>{
            flagsUK.forEach((activeFlag) => {
                activeFlag.classList.add("activeFlag")
            })
            flagsRU.forEach((activeFlag) => {
                activeFlag.classList.remove("activeFlag")
            })
        })
    })
