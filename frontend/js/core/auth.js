/* ESPITALETA WELLNESS
   AUTHENTICATION SYSTEM
*/


const ESPITALETA_SESSION = "espitaleta_session";


/*
    LOGIN PATH
*/

function getLoginPath(){


    const isInsidePages =
        window.location.pathname.includes("/pages/");


    return isInsidePages
        ? "../login.html"
        : "login.html";


}


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


    try{

        return JSON.parse(session);

    }
    catch(error){

        localStorage.removeItem(
            ESPITALETA_SESSION
        );

        return null;

    }


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
            getLoginPath();


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
        getLoginPath();


}