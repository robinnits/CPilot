const {

    getTargetSkills

}=require("./rankSkillMap");

const generateRecommendations = (
    skillAnalysis,
    problems,
    solvedSet,
    userRating
)=>{


    const targetSkills =
    getTargetSkills(userRating);



    let weakTopics = [];



    targetSkills.forEach(skill=>{


        if(

            !skillAnalysis[skill] ||

            skillAnalysis[skill].level === "Weak"

        ){


            weakTopics.push(skill);


        }


    });

    if(weakTopics.length === 0){


        weakTopics =
        targetSkills.slice(0,3);


    }



    const baseRating =
    Math.ceil(userRating / 100) * 100;


    const minRating =
    Math.max(800, baseRating - 200);


    const maxRating =
    baseRating + 200;



    let recommendations = {};



    weakTopics.forEach(topic=>{


        const filteredProblems = problems.filter(problem=>{


            return (

                problem.contestId &&

                problem.tags &&

                problem.tags.includes(topic) &&

                problem.rating &&

                problem.rating >= minRating &&

                problem.rating <= maxRating &&

                !solvedSet.has(

                    problem.contestId + "-" + problem.index

                )

            );


        });



        const targetRatings = [


            {
                rating: Math.max(
                    800,
                    baseRating - 200
                ),

                count:1,

                zone:"Warmup"
            },


            {
                rating: Math.max(
                    800,
                    baseRating - 100
                ),

                count:1,

                zone:"Warmup"
            },


            {
                rating: baseRating,

                count:1,

                zone:"Growth"
            },


            {
                rating: baseRating + 100,

                count:1,

                zone:"Growth"
            },


            {
                rating: baseRating + 200,

                count:1,

                zone:"Challenge"
            }


        ];



        let selected = [];



        targetRatings.forEach(level=>{


            const problemsAtRating =
            filteredProblems


            .filter(problem=>

                problem.rating === level.rating

            )


            .slice(

                0,

                level.count

            );



            const problemsWithZone =
            problemsAtRating.map(problem=>{


                return {

                    ...problem,

                    zone: level.zone

                };


            });


            selected.push(

                ...problemsWithZone

            );


        });


        if(weakTopics.length === 0){


            weakTopics =
            targetSkills.slice(0,3);


        }


        weakTopics =
        weakTopics.slice(0,5);

        if(selected.length > 0){


            recommendations[topic] =
            selected.slice(0,5);


        }


    });



    return recommendations;


};



module.exports={

    generateRecommendations

};