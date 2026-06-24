import { useState } from "react";

import CalendarHeatmap from "react-calendar-heatmap";

import "react-calendar-heatmap/dist/styles.css";




function HeatmapChart({heatmapStats}){


    const [selectedYear,setSelectedYear] =
    useState("recent");



    const allDates =
    Object.keys(heatmapStats);



    const years = [

        ...new Set(

            allDates.map(date=>

                date.split("-")[0]

            )

        )

    ]
    .sort(

        (a,b)=>b-a

    )
    .slice(0,3);




    let startDate;

    let endDate;



    const today =
    new Date();



    if(selectedYear==="recent"){


        endDate = today;


        startDate =
        new Date();


        startDate.setFullYear(

            today.getFullYear()-1

        );


    }


    else{


        startDate =

        new Date(

            selectedYear,

            0,

            1

        );



        endDate =

        new Date(

            selectedYear,

            11,

            31

        );


    }






    const values =

    Object.entries(heatmapStats)

    .filter(([date])=>{


        const d =

        new Date(date);



        return (

            d>=startDate &&

            d<=endDate

        );


    })


    .map(([date,count])=>{


        return {

            date,

            count

        };


    });






    const total =

    values.reduce(

        (sum,item)=>

        sum + item.count,

        0

    );






    return (


        <div>


            <h3>


                {

                selectedYear==="recent"

                ?

                `${total} submissions in the last year 🔥`

                :

                `${total} submissions in ${selectedYear} 🔥`


                }


            </h3>




            <div style={{display:"flex"}}>




                <div style={{flex:1}}>


                    <CalendarHeatmap


                    startDate={startDate}


                    endDate={endDate}


                    values={values}



                    showWeekdayLabels={true}



                    classForValue={(value)=>{


                        if(!value){


                            return "color-empty";


                        }



                        if(value.count < 3){


                            return "color-scale-1";


                        }



                        if(value.count < 6){


                            return "color-scale-2";


                        }



                        return "color-scale-3";


                    }}


                    />


                </div>






                <div>


                    <button

                    onClick={()=>setSelectedYear("recent")}

                    >

                    Last year

                    </button>





                    {


                    years.map(year=>(


                        <button


                        key={year}


                        onClick={()=>setSelectedYear(year)}

                        >


                        {year}


                        </button>


                    ))

                    }


                </div>




            </div>



        </div>


    );


}




export default HeatmapChart;