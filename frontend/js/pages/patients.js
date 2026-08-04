/* ==========================================================================
   ESPITALETA WELLNESS
   PATIENTS PAGE JAVASCRIPT
   ========================================================================== */


/* ==========================================================================
   INITIALIZATION
   ========================================================================== */


document.addEventListener("DOMContentLoaded", () => {


    initializeIcons();


    initializePatientSearch();


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
   PATIENT SEARCH
   ========================================================================== */


function initializePatientSearch(){


    const searchInput = document.querySelector(
        ".search-box input"
    );


    const tableRows = document.querySelectorAll(
        ".patients-table tbody tr"
    );



    if(!searchInput || !tableRows.length){

        return;

    }




    searchInput.addEventListener(
        "input",
        () => {


            const searchValue =
                searchInput.value
                .toLowerCase()
                .trim();




            tableRows.forEach(row => {


                const patientName =
                    row
                    .querySelector(".patient-info")
                    ?.textContent
                    .toLowerCase();



                if(
                    patientName &&
                    patientName.includes(searchValue)
                ){

                    row.style.display = "";

                }

                else{

                    row.style.display = "none";

                }


            });



        }
    );



}