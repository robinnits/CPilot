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

        "Runtime Error":"#DB2777",

        Others:"#6B7280"


    };




    const mainVerdicts = [

        "Accepted",

        "Wrong Answer",

        "Time Limit Exceed",

        "Compilation Error",

        "Runtime Error"

    ];





    let grouped = {};




    Object.entries(verdictStats || {})

    .forEach(([verdict,count])=>{


        const name =

        nameMap[verdict]

        ||

        "Others";




        if(mainVerdicts.includes(name)){


            grouped[name] =

            (grouped[name] || 0)

            +

            count;


        }

        else{


            grouped["Others"] =

            (grouped["Others"] || 0)

            +

            count;


        }


    });






    const data =

    Object.entries(grouped)

    .map(([name,value])=>({


        name,

        value


    }));







    if(data.length===0){


        return (

            <p>
                No verdict data
            </p>

        );


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




                <span className="chart-stat">

                    AC Rate: {acRate}%

                </span>



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