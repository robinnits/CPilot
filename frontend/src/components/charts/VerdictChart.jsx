import {

    PieChart,
    Pie,
    Tooltip,
    ResponsiveContainer,
    Cell,
    Legend

} from "recharts";





function VerdictChart({verdictStats}){


    const nameMap={


        OK:"Accepted",

        WRONG_ANSWER:"Wrong Answer",

        TIME_LIMIT_EXCEEDED:"Time Limit Exceed",

        COMPILATION_ERROR:"Compilation Error",

        RUNTIME_ERROR:"Runtime Error"


    };



    const colorMap={


        Accepted:"#16A34A",

        "Wrong Answer":"#DC2626",

        "Time Limit Exceed":"#D97706",

        "Compilation Error":"#7C3AED",

        "Runtime Error":"#DB2777"


    };





    const data =
    Object.entries(verdictStats || {})

    .map(([verdict,count])=>({


        name:nameMap[verdict] || verdict,

        value:count


    }));





    if(data.length===0){


        return <p>No verdict data</p>;

    }






    const total =

    data.reduce(

        (sum,item)=>sum+item.value,

        0

    );




    const accepted =

    data.find(

        x=>x.name==="Accepted"

    )?.value || 0;




    const acRate =

    ((accepted/total)*100)

    .toFixed(1);







    return (


        <div>


            <div className="chart-header">


                <h3>
                    Verdict Analysis
                </h3>


                <div>

                    <span>
                        AC Rate: {acRate}%
                    </span>

                </div>


            </div>






            <ResponsiveContainer

            width="100%"

            height={420}

            >


                <PieChart>


                    <Pie


                    data={data}


                    dataKey="value"


                    nameKey="name"


                    innerRadius={65}


                    outerRadius={115}


                    paddingAngle={2}

                    
                    stroke="none"


                    >



                    {

                    data.map((entry,index)=>(


                        <Cell

                        key={index}


                        fill={

                        colorMap[entry.name]

                        ||

                        "#6B7280"

                        }


                        />


                    ))

                    }



                    </Pie>





                    <Tooltip


                    contentStyle={{


                        background:"#252525",

                        border:"none",

                        borderRadius:"8px",

                        color:"#fff"


                    }}


                    />




                    <Legend />


                </PieChart>


            </ResponsiveContainer>



        </div>


    );


}



export default VerdictChart;