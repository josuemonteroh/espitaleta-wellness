/* ESPITALETA WELLNESS
   AUTHENTICATION SYSTEM
*/


const ESPITALETA_SESSION = "espitaleta_session";



/*
    CREATE SESSION
*/

function createSession(user){


    const session = {


        user:user,

        authenticated:true,

        createdAt:new Date().toISOString()


    };


    localStorage.setItem(

        ESPITALETA_SESSION,

        JSON.stringify(session)

    );


}



/*
    GET SESSION
*/

function getSession(){


    const session =
        localStorage.getItem(
            ESPITALETA_SESSION
        );



    if(!session){

        return null;

    }



    return JSON.parse(session);


}



/*
    CHECK AUTH
*/

function isAuthenticated(){


    const session =
        getSession();



    return session &&
           session.authenticated === true;


}



/*
    PROTECT PAGES
*/

function requireAuth(){


    if(!isAuthenticated()){


        window.location.href =
            "login.html";


    }


}



/*
    LOGOUT
*/

function logout(){


    localStorage.removeItem(
        ESPITALETA_SESSION
    );


    window.location.href =
        "login.html";


}