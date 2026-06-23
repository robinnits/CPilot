function RecommendationCard({recommendations}){


    return (

        <div>


            <h2>
                Training Plan 🚀
            </h2>


            {


                Object.entries(recommendations)

                .map(([topic, problems])=>{


                    const groupedProblems = {


                        Warmup: problems.filter(

                            problem =>
                            problem.zone === "Warmup"

                        ),


                        Growth: problems.filter(

                            problem =>
                            problem.zone === "Growth"

                        ),


                        Challenge: problems.filter(

                            problem =>
                            problem.zone === "Challenge"

                        )


                    };



                    return (


                        <div key={topic}>


                            <h3>
                                {topic}
                            </h3>




                            {

                                Object.entries(groupedProblems)

                                .map(([zone, zoneProblems])=>(


                                    <div key={zone}>


                                        <h4>
                                            {zone}
                                        </h4>



                                        {

                                        zoneProblems.map(problem=>(



                                            <div

                                            key={

                                                problem.contestId +

                                                problem.index

                                            }

                                            >



                                                <p>


                                                    {problem.rating}

                                                    {" - "}

                                                    {problem.name}


                                                </p>



                                                <a


                                                href={

`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`

                                                }


                                                target="_blank"


                                                >


                                                    Solve on Codeforces


                                                </a>



                                            </div>



                                        ))

                                        }



                                    </div>



                                ))

                            }




                        </div>


                    );


                })

            }



        </div>


    );


}



export default RecommendationCard;