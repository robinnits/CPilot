import {

    BarChart,

    Bar,

    XAxis,

    YAxis,

    Tooltip,

    ResponsiveContainer


} from "recharts";



function TagChart({tagStats}){


    const data = Object.entries(tagStats)


    .map(([tag,count])=>{


        return {


            tag:tag,


            solved:count


        };


    })


    .sort(

        (a,b)=> b.solved - a.solved

    )


    .slice(0,10);




    return (


        <div>


            <h3>

                Top Problem Tags 🧩

            </h3>



            <ResponsiveContainer

                width="100%"

                height={400}

            >



                <BarChart

                    data={data}

                    layout="vertical"

                >



                    <XAxis

                    type="number"

                    />



                    <YAxis

                    dataKey="tag"

                    type="category"

                    width={150}

                    />



                    <Tooltip />



                    <Bar

                    dataKey="solved"

                    />



                </BarChart>



            </ResponsiveContainer>



        </div>


    );


}



export default TagChart;