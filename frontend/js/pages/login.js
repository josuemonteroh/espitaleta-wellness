/* ESPITALETA WELLNESS
   LOGIN PAGE
*/


document.addEventListener("DOMContentLoaded", () => {


    /* INIT ICONS */

    lucide.createIcons();


    /*
        DEMO USER
        Prototype authentication
    */

    const DEMO_USER = {

        email: "admin@espitaleta.com",

        password: "Administrador@"

    };


    /*
        PASSWORD VISIBILITY
    */
    const passwordInput =
        document.getElementById("password");


    const togglePassword =
        document.getElementById("toggle-password");

    if(togglePassword && passwordInput){

        togglePassword.addEventListener("click",()=>{

            const visible =
                passwordInput.type === "text";


            passwordInput.type =
                visible ? "password" : "text";



            togglePassword.innerHTML =
                visible
                ? '<i data-lucide="eye"></i>'
                : '<i data-lucide="eye-off"></i>';

            lucide.createIcons();

        });

    }

    /*
        LANGUAGE MENU
    */

    const languageButton =
        document.getElementById("language-button");


    const languageMenu =
        document.getElementById("language-menu");


    if(languageButton && languageMenu){

        languageButton.addEventListener("click",(event)=>{


            event.stopPropagation();


            languageMenu.classList.toggle("active");

        });

        document.addEventListener("click",(event)=>{


            if(
                !languageButton.contains(event.target) &&
                !languageMenu.contains(event.target)
            ){

                languageMenu.classList.remove("active");

            }

        });

    }

    /*
        LANGUAGE CHANGE
    */


    const languageOptions =
        document.querySelectorAll("[data-language]");



    languageOptions.forEach(option=>{


        option.addEventListener("click",()=>{


            const selectedLanguage =
                option.dataset.language;



            if(typeof changeLanguage === "function"){


                changeLanguage(selectedLanguage);


            }



            const currentLanguage =
                document.getElementById("current-language");



            if(currentLanguage){


                currentLanguage.textContent =
                    selectedLanguage.toUpperCase();


            }



            languageMenu.classList.remove("active");


        });



    });





    /*
        LOGIN VALIDATION
    */


    const loginForm =
        document.getElementById("login-form");



    if(loginForm){


        loginForm.addEventListener("submit",(event)=>{


            event.preventDefault();



            const email =
                document.getElementById("email")
                .value
                .trim();



            const password =
                document.getElementById("password")
                .value
                .trim();




            if(
                email === DEMO_USER.email &&
                password === DEMO_USER.password
            ){



                createSession(email);

                window.location.href =
                "pages/dashboard.html";

            }
            else{


                alert(
                    "Invalid email or password"
                );


            }



        });



    }



});