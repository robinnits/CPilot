import {

    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    ReferenceLine

} from "recharts";



function RatingHistoryChart({ratingHistory}){


    if(

        !ratingHistory ||

        ratingHistory.length===0

    ){


        return (

            <h3>
                No rated contests yet 🚀
            </h3>

        );

    }





    const peak = Math.max(

        ...ratingHistory.map(
            x=>x.newRating
        )

    );



    const firstRating =
    ratingHistory[0].newRating;



    const currentRating =
    ratingHistory[
        ratingHistory.length-1
    ].newRating;



    const gained =
    currentRating-firstRating;






    return (


    <div>


        <div className="journey-header">


            <h3>

                Rating Journey 🚀

            </h3>



            <div>


                <span>
                    Peak: {peak}
                </span>


                <span>
                    {gained>=0?"+":""}{gained} gained
                </span>


            </div>



        </div>






        <ResponsiveContainer

        width="100%"

        height={280}

        >



            <LineChart

            data={ratingHistory}

            >



                <CartesianGrid

                strokeDasharray="3 3"

                opacity={0.15}

                />





                {/* CF rank milestones */}


                <ReferenceLine

                y={1200}

                label="Pupil"

                stroke="#00C853"

                />



                <ReferenceLine

                y={1400}

                label="Specialist"

                stroke="#03A9F4"

                />



                <ReferenceLine

                y={1600}

                label="Expert"

                stroke="#AA00FF"

                />



                <ReferenceLine

                y={2100}

                label="Master"

                stroke="#FFB300"

                />





                <XAxis

                dataKey="date"

                stroke="#999"

                minTickGap={40}

                />



                <YAxis

                stroke="#999"

                domain={[

                    "dataMin - 200",

                    "dataMax + 200"

                ]}

                />





                <Tooltip


                contentStyle={{


                    background:"#1f1f1f",

                    border:"none",

                    borderRadius:"8px",

                    color:"#fff"


                }}


                />





                <Line


                type="monotone"


                dataKey="newRating"


                stroke="#2F81F7"


                strokeWidth={3}


                dot={{


                    r:3


                }}



                activeDot={{


                    r:7


                }}


                />



            </LineChart>



        </ResponsiveContainer>



    </div>


    );


}



export default RatingHistoryChart;