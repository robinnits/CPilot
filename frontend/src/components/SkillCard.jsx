function SkillCard({skills}){


    const sortedSkills =
    Object.entries(skills)
    .sort(
        (a,b)=>a[1].score-b[1].score
    );


    return (

        <div>


            <h3>
                Weakness Analysis 🧠
            </h3>



            {

                sortedSkills
                .slice(0,5)
                .map(([topic,data])=>(


                    <div key={topic}>


                        <h4>
                            {topic}
                        </h4>


                        <p>
                            Level: {data.level}
                        </p>


                        <p>
                            Score: {data.score}/100
                        </p>


                        <p>
                            Accuracy: {data.accuracy}%
                        </p>



                    </div>


                ))

            }


        </div>

    );


}



export default SkillCard;