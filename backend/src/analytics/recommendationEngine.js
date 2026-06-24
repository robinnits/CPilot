const generateRecommendations = (

    focusAreas,

    problems,

    solvedSet,

    userRating

)=>{



    const trainingTopics =

    focusAreas

    .map(area=>

        area.skill

    )

    .slice(0,5);





    const baseRating =

    Math.ceil(userRating / 100) * 100;





    const minRating =

    Math.max(

        800,

        baseRating - 200

    );





    const maxRating =

    baseRating + 200;






    let recommendations = {};






    trainingTopics.forEach(topic=>{





        const filteredProblems =

        problems.filter(problem=>{





            return (


                problem.contestId &&


                problem.tags &&


                problem.tags.includes(topic) &&


                problem.rating &&


                problem.rating >= minRating &&


                problem.rating <= maxRating &&


                !solvedSet.has(

                    problem.contestId +

                    "-" +

                    problem.index

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







        if(selected.length > 0){



            recommendations[topic] =

            selected;



        }





    });







    return recommendations;




};





module.exports={

    generateRecommendations

};