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



    const minRating =
    Math.ceil(userRating / 100) * 100;


    const maxRating =
    minRating + 300;



    let recommendations = {};



    weakTopics.forEach(topic=>{


        // First filter valid problems
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



        // rating distribution
        const targetRatings = [

            minRating,

            minRating + 100,

            minRating + 200

        ];



        let selected = [];



        targetRatings.forEach(rating=>{


            const problemsAtRating = filteredProblems


                .filter(problem=>

                    problem.rating === rating

                )


                .slice(0,2);



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