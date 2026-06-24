import {

    BarChart,

    Bar,

    XAxis,

    YAxis,

    Tooltip,

    ResponsiveContainer


} from "recharts";



function RatingChart({ratingStats}){


    const data = Object.entries(ratingStats)

    .map(([rating,count])=>{


        return {

            rating:rating,

            solved:count

        };


    });



    return (


        <div>


            <h3>
                Problems Solved by Rating 📊
            </h3>



            <ResponsiveContainer

                width="100%"

                height={300}

            >


                <BarChart data={data}>


                    <XAxis

                    dataKey="rating"

                    />


                    <YAxis />


                    <Tooltip />



                    <Bar

                    dataKey="solved"

                    />



                </BarChart>



            </ResponsiveContainer>


        </div>


    );


}



export default RatingChart;