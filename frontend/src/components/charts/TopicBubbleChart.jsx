import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";


function TopicBubbleChart({ tagStats }) {


    const svgRef = useRef();

    const [tooltip,setTooltip] = useState(null);



    const data =
    Object.entries(tagStats || {})
    .map(([name,value])=>({

        name,
        value

    }))
    .sort((a,b)=>b.value-a.value)
    .slice(0,25);



    const strongest = data[0];



    useEffect(()=>{


        if(!tagStats) return;


        const width = 650;
        const height = 520;



        const root =
        d3.hierarchy({

            children:data

        })
        .sum(d=>Math.sqrt(d.value));



        const pack =
        d3.pack()
        .size([width,height])
        .padding(8);



        const nodes =
        pack(root)
        .leaves();



        const svg =
        d3.select(svgRef.current);


        svg.selectAll("*").remove();



        const node =
        svg.selectAll("g")
        .data(nodes)
        .enter()
        .append("g")
        .attr(
            "transform",
            d=>`translate(${d.x},${d.y})`
        )
        .style("cursor","pointer")



        .on("mouseenter",(event,d)=>{


            setTooltip({

                x:event.clientX,
                y:event.clientY,

                name:d.data.name,
                value:d.data.value

            });


        })


        .on("mousemove",(event,d)=>{


            setTooltip({

                x:event.clientX,
                y:event.clientY,

                name:d.data.name,
                value:d.data.value

            });


        })


        .on("mouseleave",()=>{


            setTooltip(null);


        });





        node.append("circle")

        .attr("r",d=>d.r)

        .attr("fill","#26352D")

        .attr("stroke","#22C55E")

        .attr("strokeWidth",1.5);





        node.append("text")

        .attr("text-anchor","middle")

        .attr("fill","#E6EDF3")

        .style("pointer-events","none")

        .style("font-size",d=>{


            if(d.r > 70)
                return "18px";


            if(d.r > 40)
                return "14px";


            return "10px";


        })


        .each(function(d){


            const text =
            d3.select(this);


            const words =
            d.data.name.split(" ");



            if(d.r < 14)
                return;



            words.forEach((word,index)=>{


                text.append("tspan")

                .text(word)

                .attr("x",0)

                .attr(
                    "dy",

                    index===0

                    ?

                    `${-(words.length-1)*0.4}em`

                    :

                    "1.2em"

                );


            });


        });



    },[tagStats]);





    return (

        <div
        style={{position:"relative"}}
        >


            <div className="chart-header">


                <h2>
                    Skill Map
                </h2>



                <div>


                    <span>
                        Strongest: {strongest?.name}
                    </span>


                    <span>
                        Covered: {data.length}
                    </span>


                </div>


            </div>




            <svg

            ref={svgRef}

            width={650}

            height={520}

            />





            {

            tooltip &&


            <div

            style={{


                position:"fixed",

                left:tooltip.x + 15,

                top:tooltip.y + 15,


                background:"#252525",


                border:"1px solid #3A3A3A",


                color:"#E6EDF3",


                padding:"8px 12px",

                borderRadius:"8px",


                fontSize:"13px",


                pointerEvents:"none",


                zIndex:9999


            }}


            >


                <b>
                    {tooltip.name}
                </b>


                <br/>


                {tooltip.value} solved


            </div>


            }



        </div>


    );


}



export default TopicBubbleChart;