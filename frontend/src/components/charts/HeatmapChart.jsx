import { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function HeatmapChart({ heatmapStats }) {

    const [selectedYear, setSelectedYear] =
    useState("recent");



    const allDates =
    Object.keys(heatmapStats || {});



    const years = [

        ...new Set(

            allDates.map(date =>

                date.split("-")[0]

            )

        )

    ]
    .sort((a,b)=>b-a);



    const today = new Date();

    let startDate;
    let endDate;



    if(selectedYear === "recent"){

        endDate = today;

        startDate = new Date();

        startDate.setFullYear(

            today.getFullYear() - 1

        );

    }

    else{

        startDate =
        new Date(selectedYear,0,1);

        endDate =
        new Date(selectedYear,11,31);

    }



    const values =

    Object.entries(
        heatmapStats || {}
    )

    .filter(([date])=>{

        const d = new Date(date);

        return (

            d >= startDate &&
            d <= endDate

        );

    })

    .map(([date,count])=>({

        date,
        count

    }));



    const totalSubmissions =

    values.reduce(

        (sum,item)=>

            sum + item.count,

        0

    );



    const activeDays =
    values.length;



    // -------------------------
    // Max Streak Calculation
    // -------------------------

    const sortedDates =

    values
    .map(v=>v.date)
    .sort();



    let maxStreak = 0;
    let currentStreak = 0;
    let previousDate = null;



    sortedDates.forEach(date=>{

        const currentDate =
        new Date(date);

        if(!previousDate){

            currentStreak = 1;

        }

        else{

            const diff =

            Math.floor(

                (
                    currentDate -
                    previousDate
                )

                /

                (
                    1000 *
                    60 *
                    60 *
                    24
                )

            );

            if(diff === 1){

                currentStreak++;

            }

            else{

                currentStreak = 1;

            }

        }

        maxStreak =

        Math.max(

            maxStreak,
            currentStreak

        );

        previousDate =
        currentDate;

    });



    return (

        <div>

            <div
            className="heatmap-header"
            >

                <div
                className="heatmap-title"
                >

                    <span
                    className="submission-count"
                    >
                        Activity Heatmap 
                    </span>
                </div>



                <div
                className="heatmap-stats"
                >

                    <span>

                        Total active days:
                        {" "}
                        {activeDays}

                    </span>


                    <span>

                        Max streak:
                        {" "}
                        {maxStreak}

                    </span>



                    <select

                    className="
                    heatmap-select
                    "

                    value={
                        selectedYear
                    }

                    onChange={(e)=>

                        setSelectedYear(
                            e.target.value
                        )

                    }

                    >

                        <option
                        value="recent"
                        >
                            Current
                        </option>


                        {

                        years.map(year=>(

                            <option

                            key={year}

                            value={year}

                            >

                                {year}

                            </option>

                        ))

                        }

                    </select>

                </div>

            </div>



            <div className="heatmap-grid-box">
            <CalendarHeatmap

                startDate={startDate}

                endDate={endDate}

                values={values}

                showWeekdayLabels={false}



                classForValue={(value)=>{

                    if(!value){

                        return "color-empty";

                    }

                    if(value.count <= 2){

                        return "color-scale-1";

                    }

                    if(value.count <= 5){

                        return "color-scale-2";

                    }

                    if(value.count <= 9){

                        return "color-scale-3";

                    }

                    return "color-scale-4";

                }}



                tooltipDataAttrs={(value) => {

                    if (!value || !value.date) {
                        return {
                            "data-tooltip-id": "heatmap-tooltip",
                            "data-tooltip-content": "No submissions"
                        };
                    }

                    return {
                        "data-tooltip-id": "heatmap-tooltip",
                        "data-tooltip-content":
                            `${value.count} problem${
                                value.count > 1 ? "s" : ""
                            } solved on ${
                                new Date(value.date).toLocaleDateString(
                                    "en-US",
                                    {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric"
                                    }
                                )
                            }`
                    };
                }}

                

            />

            <Tooltip
                id="heatmap-tooltip"
                place="top"
                style={{
                    background: "#1f1f1f",
                    color: "#ffffff",
                    borderRadius: "12px",
                    padding: "4px 8px",
                    fontSize: "12px",
                    border: "1px solid #3a3a3a"
                }}
            />
            </div>

        </div>

    );

}

export default HeatmapChart;