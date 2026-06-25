import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Cell
} from "recharts";



function RatingChart({ ratingStats }) {


    const data =
    Object.entries(ratingStats || {})
    .map(([rating,count])=>({

        rating,
        count

    }));




    if(data.length === 0){


        return (

            <div>

                <h3>
                    Problems Solved by Rating
                </h3>

                <p>
                    No rating data available
                </p>

            </div>

        );

    }





    const mostSolved = data.reduce(

        (max,item)=>

            item.count > max.count
            ?
            item
            :
            max

    );



    const peakProblem =
    Math.max(

        ...data.map(

            x=>Number(x.rating)

        )

    );






    const getColor = (rating)=>{


        rating = Number(rating);


        if(rating < 1200)
            return "#808080";


        if(rating < 1400)
            return "#00C853";


        if(rating < 1600)
            return "#03A9F4";


        if(rating < 1900)
            return "#AA00FF";


        if(rating < 2100)
            return "#FFB300";


        return "#FF3333";


    };





    return (


        <div>


            <div className="chart-header">


                <h3>
                    Problems Solved by Rating
                </h3>



                <div>

                    <span>
                        Most Solved: {mostSolved.rating}
                    </span>


                    <span>
                        Peak: {peakProblem}
                    </span>


                </div>


            </div>






            <ResponsiveContainer

            width="100%"

            height={300}

            >


                <BarChart

                data={data}

                barCategoryGap="30%"

                >



                    <CartesianGrid

                    strokeDasharray="3 3"

                    opacity={0.15}

                    />



                    <XAxis

                    dataKey="rating"

                    stroke="#8B949E"

                    interval={

                        data.length > 20 ? 1 : 0

                    }

                    />



                    <YAxis

                    stroke="#8B949E"

                    />



                    <Tooltip


                    cursor={false}


                    contentStyle={{

                        background:"#252525",

                        border:"none",

                        borderRadius:"8px",

                        color:"#E6EDF3"

                    }}


                    formatter={(value)=>[

                        value,

                        "Solved"

                    ]}


                    labelFormatter={(label)=>

                        `Rating ${label}`

                    }


                    />





                    <Bar

                    dataKey="count"

                    radius={[4,4,0,0]}

                    barSize={100}

                    >



                    {

                    data.map((entry,index)=>(


                        <Cell

                        key={index}

                        fill={
                            getColor(entry.rating)
                        }

                        />


                    ))

                    }



                    </Bar>


                </BarChart>


            </ResponsiveContainer>


        </div>


    );


}



export default RatingChart;