import CalendarHeatmap from "react-calendar-heatmap";

import "react-calendar-heatmap/dist/styles.css";



function HeatmapChart({heatmapStats}){


    const values =
    Object.entries(heatmapStats)

    .map(([date,count])=>{


        return {

            date:date,

            count:count

        };


    });



    const today =
    new Date();



    const oneYearAgo =
    new Date();


    oneYearAgo.setFullYear(

        today.getFullYear() - 1

    );



    return (

        <div>


            <h3>
                Submission Activity 🔥
            </h3>



            <CalendarHeatmap


                startDate={oneYearAgo}


                endDate={today}


                values={values}


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


    );


}



export default HeatmapChart;