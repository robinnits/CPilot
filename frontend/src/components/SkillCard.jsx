function SkillCard({focusAnalysis}){


    return (

        <div>


            <h2>
                Skill Analysis 🧠
            </h2>





            <h3>
                Priority Focus 🎯
            </h3>





            {

                focusAnalysis.focusAreas.length === 0

                ?

                <p>
                    Great! No major priority weakness 🎉
                </p>

                :

                focusAnalysis.focusAreas.map(skill=>(


                    <div key={skill.skill}>


                        <h4>

                            {skill.skill}

                        </h4>



                        <p>

                            Score:

                            {" "}

                            {skill.score}

                            /100

                        </p>




                        <p>

                            Status:

                            {" "}

                            {skill.level}

                        </p>



                    </div>


                ))

            }







            <h3>

                Other Weakness 🧠

            </h3>






            {

                focusAnalysis.otherWeakness.length === 0

                ?

                <p>

                    No other major weakness 🚀

                </p>

                :

                focusAnalysis.otherWeakness.map(skill=>(


                    <div key={skill.skill}>


                        <h4>

                            {skill.skill}

                        </h4>




                        <p>

                            Score:

                            {" "}

                            {skill.score}

                            /100

                        </p>




                        <p>

                            Status:

                            {" "}

                            {skill.level}

                        </p>



                    </div>


                ))

            }




        </div>


    );


}



export default SkillCard;