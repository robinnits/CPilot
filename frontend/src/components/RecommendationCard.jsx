function RecommendationCard({recommendations}){


    return (

        <div>


            <h2>
                Training Plan 🚀
            </h2>



            {


                Object.entries(recommendations)

                .map(([topic,problems])=>{


                    const warmup =
                    problems.filter(

                        p=>p.zone==="Warmup"

                    );


                    const growth =
                    problems.filter(

                        p=>p.zone==="Growth"

                    );


                    const challenge =
                    problems.filter(

                        p=>p.zone==="Challenge"

                    );



                    const renderProblems = (list)=>{


                        return list.map(problem=>(


                            <div

                            key={

                                problem.contestId

                                +

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


                        ));


                    };



                    return (


                        <div key={topic}>


                            <h3>
                                {topic}
                            </h3>



                            {


                                warmup.length > 0 &&

                                <>

                                <h4>
                                    Warmup
                                </h4>


                                {renderProblems(warmup)}


                                </>


                            }




                            {


                                growth.length > 0 &&

                                <>

                                <h4>
                                    Growth
                                </h4>


                                {renderProblems(growth)}


                                </>


                            }



                            {


                                challenge.length > 0 &&

                                <>

                                <h4>
                                    Challenge
                                </h4>


                                {renderProblems(challenge)}


                                </>


                            }



                        </div>


                    );


                })


            }


        </div>


    );


}


export default RecommendationCard;