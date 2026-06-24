const analyzeRatingHistory = (history)=>{


    return history.map(contest=>{


        return {


            contestName:
            contest.contestName,


            rank:
            contest.rank,


            oldRating:
            contest.oldRating,


            newRating:
            contest.newRating,


            change:
            contest.newRating -
            contest.oldRating,


            date:

            new Date(

                contest.ratingUpdateTimeSeconds * 1000

            )

            .toISOString()

            .split("T")[0]


        };


    });


};



module.exports={

    analyzeRatingHistory

};