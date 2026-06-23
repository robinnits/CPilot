const generateRecommendations = (
    skillAnalysis,
    problems,
    solvedSet
)=>{


    let weakTopics = [];



    for(let topic in skillAnalysis){


        if(skillAnalysis[topic].level==="Weak"){


            weakTopics.push(topic);


        }


    }



    let recommendations = {};



    weakTopics.forEach(topic=>{


        const selected = problems

        .filter(problem=>{


            return (

                problem.tags &&

                problem.tags.includes(topic) &&

                problem.rating &&

                problem.rating <= 1400 &&

                !solvedSet.has(

                    problem.contestId+"-"+problem.index

                )

            );


        })


        .slice(0,5);



        recommendations[topic]=selected;


    });



    return recommendations;


};



module.exports={

    generateRecommendations

};