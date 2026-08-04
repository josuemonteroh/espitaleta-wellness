/* ==========================================================================
   ESPITALETA WELLNESS
   HISTORY PAGE JAVASCRIPT
   ========================================================================== */



document.addEventListener("DOMContentLoaded", () => {


    initializeIcons();


    initializeSearch();


    initializeHistoryActions();


});






/* ==========================================================================
   LUCIDE ICONS
   ========================================================================== */


function initializeIcons(){


    if(window.lucide){

        lucide.createIcons();

    }


}








/* ==========================================================================
   SEARCH PATIENTS
   ========================================================================== */


function initializeSearch(){


    const searchInput =
        document.querySelector(
            ".history-actions input"
        );



    const rows =
        document.querySelectorAll(
            ".patients-table tbody tr"
        );



    if(!searchInput){

        return;

    }




    searchInput.addEventListener(
        "input",
        () => {


            const value =
                searchInput.value
                .toLowerCase()
                .trim();





            rows.forEach(row => {



                const patient =
                    row
                    .querySelector(
                        ".patient-info"
                    )
                    ?.textContent
                    .toLowerCase();





                if(patient.includes(value)){


                    row.style.display = "";


                }else{


                    row.style.display = "none";


                }



            });



        }

    );


}









/* ==========================================================================
   HISTORY ACTIONS
   ========================================================================== */


function initializeHistoryActions(){


    const buttons =
        document.querySelectorAll(
            ".table-button"
        );



    buttons.forEach(button => {



        button.addEventListener(
            "click",
            (event)=>{


                event.preventDefault();



                const patient =
                    button
                    .closest("tr")
                    .querySelector(
                        ".patient-info strong"
                    )
                    ?.textContent;



                console.log(
                    "Consultando historial:",
                    patient
                );



                /*
                    Aquí posteriormente se conectará
                    con el módulo de expediente clínico.
                */



            }

        );



    });


}