function RankProgressCard({

    rankProgress

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

                {" "}

                rating

            </p>




        </div>


    );


}



export default RankProgressCard;