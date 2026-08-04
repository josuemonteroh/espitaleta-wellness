/* ==========================================================================
   ESPITALETA WELLNESS
   METRICS PAGE JAVASCRIPT
   ========================================================================== */


/* ==========================================================================
   INITIALIZATION
   ========================================================================== */


document.addEventListener("DOMContentLoaded", () => {


    initializeIcons();


    createWeightChart();


    createBMIChart();


    createPatientsStatusChart();


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
   WEIGHT EVOLUTION CHART
   ========================================================================== */


function createWeightChart(){


    const canvas =
        document.getElementById(
            "weightEvolutionChart"
        );



    if(!canvas){

        return;

    }




    new Chart(canvas, {


        type:"line",


        data:{


            labels:[

                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo"

            ],



            datasets:[{


                label:"Peso promedio",


                data:[

                    82,
                    81,
                    80,
                    79,
                    78.4

                ],


                borderWidth:3,


                tension:.4


            }]


        },



        options:{


            responsive:true,


            maintainAspectRatio:false,


            plugins:{


                legend:{


                    display:false


                }


            }


        }


    });


}








/* ==========================================================================
   BMI DISTRIBUTION CHART
   ========================================================================== */


function createBMIChart(){


    const canvas =
        document.getElementById(
            "bmiDistributionChart"
        );



    if(!canvas){

        return;

    }




    new Chart(canvas, {


        type:"doughnut",



        data:{


            labels:[

                "Normal",
                "Sobrepeso",
                "Obesidad",
                "Bajo peso"

            ],



            datasets:[{


                data:[

                    45,
                    35,
                    15,
                    5

                ],


                borderWidth:0


            }]


        },



        options:{


            responsive:true,


            maintainAspectRatio:false


        }


    });


}









/* ==========================================================================
   PATIENT STATUS CHART
   ========================================================================== */


function createPatientsStatusChart(){


    const canvas =
        document.getElementById(
            "patientsStatusChart"
        );



    if(!canvas){

        return;

    }




    new Chart(canvas, {


        type:"bar",



        data:{


            labels:[

                "Estables",
                "Revisión",
                "Críticos"

            ],



            datasets:[{


                label:"Pacientes",


                data:[

                    85,
                    25,
                    10

                ],


                borderWidth:1


            }]


        },



        options:{


            responsive:true,


            maintainAspectRatio:false,


            plugins:{


                legend:{


                    display:false


                }


            }


        }


    });


}