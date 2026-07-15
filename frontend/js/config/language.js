/* ESPITALETA WELLNESS
   LANGUAGE SYSTEM
*/


const translations = {


    en: {


        /* LOGIN */

        brand_badge:
        "Connected Healthcare Platform",


        feature_records_title:
        "Clinical Records",

        feature_records_description:
        "Access complete patient records, medical history and nutritional assessments from a centralized platform.",


        feature_monitoring_title:
        "Health Monitoring",

        feature_monitoring_description:
        "Monitor biometric indicators, nutritional progress and patient evolution in real time.",


        feature_analytics_title:
        "Clinical Intelligence",

        feature_analytics_description:
        "Transform clinical information into actionable insights that support healthcare decision-making.",


        feature_security_title:
        "Enterprise Security",

        feature_security_description:
        "Protect sensitive healthcare information with secure authentication and role-based access.",


        brand_footer:
        "Designed and developed by SparkByte Technologies.",



        login_title:
        "Welcome Back",


        login_subtitle:
        "Sign in to access your Espitaleta Wellness workspace.",


        email_label:
        "Email Address",


        password_label:
        "Password",


        email_placeholder:
        "Enter your email",


        password_placeholder:
        "Enter your password",


        remember_me:
        "Keep me signed in",


        forgot_password:
        "Forgot password?",


        login_button:
        "Sign In",


        divider:
        "Enterprise Access",


        enterprise_login:
        "Sign in with Organization",


        request_access_text:
        "Don't have an account?",


        request_access:
        "Request Access"


    },



    es: {


        /* LOGIN */


        brand_badge:
        "Plataforma de Salud Conectada",



        feature_records_title:
        "Registros Clínicos",


        feature_records_description:
        "Administre expedientes médicos, historial clínico y evaluaciones nutricionales desde una plataforma centralizada.",



        feature_monitoring_title:
        "Monitoreo de Salud",


        feature_monitoring_description:
        "Supervise indicadores biométricos, progreso nutricional y evolución del paciente.",



        feature_analytics_title:
        "Inteligencia Clínica",


        feature_analytics_description:
        "Convierta información clínica en datos útiles para apoyar decisiones médicas.",



        feature_security_title:
        "Seguridad Empresarial",


        feature_security_description:
        "Proteja información sensible mediante autenticación segura y control de accesos.",



        brand_footer:
        "Diseñado y desarrollado por SparkByte Technologies.",



        login_title:
        "Bienvenido",



        login_subtitle:
        "Ingrese para acceder al espacio de trabajo de Espitaleta Wellness.",



        email_label:
        "Correo electrónico",



        password_label:
        "Contraseña",



        email_placeholder:
        "Ingrese su correo electrónico",



        password_placeholder:
        "Ingrese su contraseña",



        remember_me:
        "Mantener sesión iniciada",



        forgot_password:
        "¿Olvidó su contraseña?",



        login_button:
        "Ingresar",



        divider:
        "Acceso Empresarial",



        enterprise_login:
        "Ingresar con Organización",



        request_access_text:
        "¿No tiene una cuenta?",



        request_access:
        "Solicitar acceso"


    }


};


let currentLanguage = "en";



function changeLanguage(language){


    if(!translations[language]){

        return;

    }


    currentLanguage = language;



    document.querySelectorAll("[data-lang]")
    .forEach(element=>{


        const key =
        element.dataset.lang;



        if(translations[language][key]){


            element.textContent =
            translations[language][key];


        }


    });


    document.querySelectorAll("[data-placeholder]")
    .forEach(element=>{


        const key =
        element.dataset.placeholder;



        if(translations[language][key]){


            element.placeholder =
            translations[language][key];


        }


    });


    localStorage.setItem(
        "espitaleta_language",
        language
    );


}


document.addEventListener(
"DOMContentLoaded",
()=>{


    const savedLanguage =
    localStorage.getItem(
        "espitaleta_language"
    );


    if(savedLanguage){

        changeLanguage(savedLanguage);

    }


});