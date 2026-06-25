const {

    getTargetSkills

}=require("./rankSkillMap");





const ranks = [

    {name:"Pupil", rating:1200},

    {name:"Specialist", rating:1400},

    {name:"Expert", rating:1600},

    {name:"Candidate Master", rating:1900},

    {name:"Master", rating:2100},

    {name:"International Master", rating:2300},

    {name:"Grandmaster", rating:2400},

    {name:"International Grandmaster", rating:2600},

    {name:"Legendary Grandmaster", rating:3000}

];






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

            achieved:false,


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






    const requiredSkills =

    getTargetSkills(currentRating);





    const focusAreas =

    requiredSkills

    .map(skill=>{


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


    .sort((a,b)=>a.score-b.score)


    .slice(0,5);







    let nextRank=null;



    for(let rank of ranks){


        if(currentRating < rank.rating){


            nextRank=rank;

            break;


        }


    }







    // tourist / LGM edge case

    if(!nextRank){



        return {


            currentRating:currentRating,


            targetRank:"Legendary Grandmaster",


            targetRating:3000,


            ratingNeeded:0,


            progress:100,


            achieved:true,


            focusAreas:focusAreas


        };



    }








    const progress =

    (

        currentRating /

        nextRank.rating *

        100

    )

    .toFixed(2);








    return {


        currentRating:currentRating,


        targetRank:nextRank.name,


        targetRating:nextRank.rating,


        ratingNeeded:

        Math.max(

            0,

            nextRank.rating-currentRating

        ),



        progress:progress,


        achieved:false,


        focusAreas:focusAreas


    };



};






module.exports={

    analyzeRankProgress

};