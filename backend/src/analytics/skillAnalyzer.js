const calculateSkillScore = (topicAnalysis)=>{


    let skills = {};



    for(let topic in topicAnalysis){



        const data = topicAnalysis[topic];



        const accuracy =

        data.attempts === 0

        ? 0

        :

        data.solved / data.attempts;



        let score = Math.round(

            accuracy * 70

            +

            Math.min(data.solved,50) * 0.6

        );



        let level;



        if(score >= 75){

            level = "Strong";

        }

        else if(score >= 45){

            level = "Average";

        }

        else{

            level = "Weak";

        }



        skills[topic] = {

            solved:data.solved,

            attempts:data.attempts,

            accuracy:
            (accuracy*100).toFixed(2),


            score:score,


            level:level

        };


    }



    return skills;


};



module.exports = {

    calculateSkillScore

};