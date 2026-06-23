const generateRecommendations = (
    skillAnalysis,
    problems,
    solvedSet,
    userRating
)=>{


    let weakTopics = [];


    for(let topic in skillAnalysis){


        if(skillAnalysis[topic].level === "Weak"){


            weakTopics.push(topic);


        }


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



        const baseRating =
        Math.ceil(userRating / 100) * 100;



        const targetRatings = [


            {
                rating: Math.max(
                    800,
                    baseRating - 200
                ),

                count:1
            },


            {
                rating: Math.max(
                    800,
                    baseRating - 100
                ),

                count:1
            },


            {
                rating: baseRating,

                count:1
            },


            {
                rating: baseRating + 100,

                count:1
            },


            {
                rating: baseRating + 200,

                count:1
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



            selected.push(

                ...problemsAtRating

            );


        });



        recommendations[topic] =
        selected.slice(0,5);



    });



    return recommendations;


};



module.exports={

    generateRecommendations

};