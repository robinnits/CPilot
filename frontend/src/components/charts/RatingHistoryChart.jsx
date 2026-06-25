import {

    LineChart,

    Line,

    XAxis,

    YAxis,

    Tooltip,

    ResponsiveContainer,

    CartesianGrid


} from "recharts";



function RatingHistoryChart({ratingHistory}){


    if(

        !ratingHistory ||

        ratingHistory.length === 0

    ){


        return (

            <h3>

                No rated contests yet 🚀

            </h3>

        );


    }



    return (


        <div>


            <h3>

                Rating Progress

            </h3>



            <ResponsiveContainer

                width="100%"

                height={250}

            >


                <LineChart

                    data={ratingHistory}

                >



                    <CartesianGrid

                    strokeDasharray="3 3"

                    />



                    <XAxis

                    dataKey="date"

                    />



                    <YAxis />



                    <Tooltip />



                    <Line

                    type="monotone"

                    dataKey="newRating"

                    strokeWidth={3}

                    />



                </LineChart>



            </ResponsiveContainer>



        </div>


    );


}



export default RatingHistoryChart;