function RankProgressCard({rankProgress}){


    const isBeginner =

    rankProgress.currentRating === "Unrated";



    return (

        <div>


            <h2>

                🚀 Road To {rankProgress.targetRank}

            </h2>



            <h3>


                {

                    isBeginner

                    ?

                    "Start Your Journey 🌱"

                    :

                    `${rankProgress.currentRating} / ${rankProgress.targetRating}`


                }


            </h3>




            {


                !isBeginner &&


                <>


                    <p>


                        Progress:


                        {" "}


                        {rankProgress.progress}


                        %


                    </p>




                    <p>


                        Need +


                        {rankProgress.ratingNeeded}


                        {" "}


                        rating


                    </p>


                </>


            }



        </div>

    );


}



export default RankProgressCard;