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

    currentRating,

    skillAnalysis,

    isUnrated=false

)=>{



    if(isUnrated){



        return {


            type:"BEGINNER",


            currentRating:"Unrated",


            targetRank:"Pupil",


            targetRating:1200,


            ratingNeeded:null,


            progress:null,


            focusAreas:[


                {

                    skill:"implementation",

                    score:0,

                    level:"Need Practice"

                },


                {

                    skill:"math",

                    score:0,

                    level:"Need Practice"

                },


                {

                    skill:"greedy",

                    score:0,

                    level:"Need Practice"

                },


                {

                    skill:"brute force",

                    score:0,

                    level:"Need Practice"

                }


            ]


        };



    }




    const nextRank =

    getNextRank(currentRating);





    const requiredSkills =

    getTargetSkills(currentRating);







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

        currentRating /

        nextRank.target *

        100

    )

    .toFixed(2);









    return {


        currentRating:currentRating,


        targetRank:nextRank.rank,


        targetRating:nextRank.target,


        ratingNeeded:

        Math.max(

            0,

            nextRank.target-currentRating

        ),



        progress:progress,



        focusAreas:focusAreas


    };



};








module.exports={


    analyzeRankProgress


};