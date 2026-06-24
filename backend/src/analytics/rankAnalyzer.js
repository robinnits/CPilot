const {

    getTargetSkills

}=require("./rankSkillMap");




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



    return {


        rank:"Master",


        target:2100


    };



};







const analyzeRankProgress = (

    userRating,

    skillAnalysis

)=>{



    const nextRank =

    getNextRank(userRating);





    const requiredSkills =

    getTargetSkills(userRating);







    const focusAreas =

    requiredSkills.map(skill=>{



        return {


            skill:skill,


            score:

            skillAnalysis[skill]

            ?

            skillAnalysis[skill].score

            :

            0,


            level:

            skillAnalysis[skill]

            ?

            skillAnalysis[skill].level

            :

            "Need Practice"


        };



    })


    .sort(

        (a,b)=>a.score-b.score

    )


    .slice(0,5);








    const progress =

    (

        userRating /

        nextRank.target *

        100

    )

    .toFixed(2);









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



        focusAreas:focusAreas


    };



};








module.exports={


    analyzeRankProgress


};