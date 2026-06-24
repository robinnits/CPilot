function RankProgressCard({

    rankProgress,

    focusAnalysis

}){


    return (

        <div>


            <h2>
                🚀 Road To {rankProgress.targetRank}
            </h2>




            <h3>

                {rankProgress.currentRating}

                {" / "}

                {rankProgress.targetRating}

            </h3>




            <p>

                Progress:

                {" "}

                {rankProgress.progress}

                %

            </p>




            <p>

                Need +

                {rankProgress.ratingNeeded}

                rating

            </p>






            <h3>

                Priority Focus 🎯

            </h3>






            {


                focusAnalysis.focusAreas.map(skill=>(


                    <div key={skill.skill}>


                        <p>


                            {skill.skill}


                            {" : "}


                            {skill.score}


                            /100


                        </p>




                        <p>

                            {skill.level}

                        </p>



                    </div>


                ))

            }





        </div>


    );


}



export default RankProgressCard;