import {

    PieChart,

    Pie,

    Tooltip,

    ResponsiveContainer,

    Cell,


} from "recharts";



function VerdictChart({verdictStats}){


    const nameMap = {


        OK:"Accepted",

        WRONG_ANSWER:"Wrong Answer",

        TIME_LIMIT_EXCEEDED:"Time Limit",

        COMPILATION_ERROR:"Compilation Error",

        RUNTIME_ERROR:"Runtime Error"


    };



    const data =
    Object.entries(verdictStats)

    .map(([verdict,count])=>{


        return {


            name:nameMap[verdict] || verdict,


            value:count


        };


    });



    return (


        <div>


            <h3>
                Verdict Analysis 📈
            </h3>



            <ResponsiveContainer

                width="100%"

                height={300}

            >


                <PieChart>



                    <Pie

                    data={data}

                    dataKey="value"

                    nameKey="name"

                    outerRadius={100}

                    label

                    >



                    {

                    data.map((entry,index)=>(


                        <Cell

                        key={index}

                        />

                    ))

                    }



                    </Pie>



                    <Tooltip />



                </PieChart>


            </ResponsiveContainer>



        </div>


    );


}



export default VerdictChart;