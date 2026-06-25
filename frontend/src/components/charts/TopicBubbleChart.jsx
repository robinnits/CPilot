import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";


function TopicBubbleChart({ tagStats }) {


    const svgRef = useRef();

    const [tooltip,setTooltip] = useState(null);



    useEffect(()=>{


        if(!tagStats) return;


        const width = 900;
        const height = 650;


        const data =
        Object.entries(tagStats)
        .map(([name,value])=>({

            name,
            value

        }))
        .sort((a,b)=>b.value-a.value)
        .slice(0,25);



        const root =
        d3.hierarchy({

            children:data

        })
        .sum(d=>Math.sqrt(d.value));



        const pack =
        d3.pack()
        .size([width,height])
        .padding(12);



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

        .attr("fill","#eeeeee")

        .attr("stroke","#7bd88f")

        .attr("strokeWidth",3)



        node.append("text")

        .attr("text-anchor","middle")

        .attr("fill","green")

        .style("pointer-events","none")

        .style("font-size",d=>{


            if(d.r > 70){

                return "18px";

            }


            if(d.r > 40){

                return "14px";

            }


            return "11px";


        })


        .each(function(d){


            const text =
            d3.select(this);


            const words =
            d.data.name.split(" ");


            // hide very tiny bubbles

            if(d.r < 22){


                return;


            }



            words.forEach((word,index)=>{


                text.append("tspan")

                .text(word)

                .attr("x",0)

                .attr(
                    "dy",

                    index === 0

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


            <h2>
                Topic Universe 🧠
            </h2>


            <svg

            ref={svgRef}

            width={900}

            height={650}

            />



            {

                tooltip &&

                <div

                style={{


                position:"fixed",

                left:tooltip.x + 15,

                top:tooltip.y + 15,

                background:"white",

                border:"1px solid #ccc",

                padding:"10px",

                borderRadius:"8px",

                boxShadow:"0 2px 10px #aaa",

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