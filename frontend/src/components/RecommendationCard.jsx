function RecommendationCard({recommendations}){


    return (

        <div>


            <h2>
                Recommended Training 🚀
            </h2>


            {


                Object.entries(recommendations)

                .map(([topic,problems])=>(


                    <div key={topic}>


                        <h3>
                            {topic}
                        </h3>


                        {

                            problems.map(problem=>(


                                <div
                                key={
                                    problem.contestId +
                                    problem.index
                                }
                                >


                                    <p>

                                        {problem.name}

                                    </p>


                                    <p>

                                    Rating:
                                    {problem.rating}

                                    </p>



                                    <a

                                    href={
`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`
                                    }

                                    target="_blank"

                                    >

                                    Solve

                                    </a>



                                </div>


                            ))


                        }


                    </div>


                ))

            }



        </div>

    );


}


export default RecommendationCard;