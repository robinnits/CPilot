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


        const selected = problems


        .filter(problem=>{


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


        })


        .sort((a,b)=>

            a.rating - b.rating

        )


        .slice(0,5);



        recommendations[topic] = selected;


    });



    return recommendations;


};



module.exports={

    generateRecommendations

};