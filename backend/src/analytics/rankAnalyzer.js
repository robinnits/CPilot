const getNextRank = (rating)=>{


    if(rating < 1200){

        return {

            rank:"Pupil",

            target:1200

        };

    }



    if(rating < 1400){

        return {

            rank:"Specialist",

            target:1400

        };

    }



    if(rating < 1600){

        return {

            rank:"Expert",

            target:1600

        };

    }



    if(rating < 1900){

        return {

            rank:"Candidate Master",

            target:1900

        };

    }



    if(rating < 2100){

        return {

            rank:"Master",

            target:2100

        };

    }



    return {

        rank:"Legend",

        target:rating

    };


};



const analyzeRankProgress = (

    userRating,

    skillAnalysis

)=>{


    const nextRank =
    getNextRank(userRating);



    const weakTopics =
    Object.entries(skillAnalysis)


    .filter(([topic,data])=>{


        return data.level === "Weak";


    })


    .map(([topic,data])=>{


        return {


            topic:topic,


            score:data.score


        };


    })

    .slice(0,5);



    const progress =

    Math.min(

        100,

        (

            userRating /

            nextRank.target *

            100

        ).toFixed(2)

    );



    return {


        currentRating:userRating,


        targetRank:nextRank.rank,


        targetRating:nextRank.target,


        ratingNeeded:

        Math.max(

            0,

            nextRank.target-userRating

        ),



        progress:progress,


        focusAreas:weakTopics


    };


};




module.exports={

    analyzeRankProgress

};