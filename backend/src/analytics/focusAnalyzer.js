const {

    getTargetSkills

}=require("./rankSkillMap");




const analyzeFocusAreas = (

    userRating,

    skillAnalysis

)=>{


    const targetSkills =
    getTargetSkills(userRating);



    let focusAreas = [];

    let otherWeakness = [];






    targetSkills.forEach(skill=>{



        if(

            !skillAnalysis[skill]

        ){



            focusAreas.push({


                skill:skill,


                score:0,


                level:"Need Practice"


            });



        }



        else if(

            skillAnalysis[skill].level === "Weak"

        ){



            focusAreas.push({


                skill:skill,


                ...skillAnalysis[skill]


            });



        }



    });







    Object.entries(skillAnalysis)

    .forEach(([skill,data])=>{



        if(

            data.level === "Weak" &&

            !targetSkills.includes(skill)

        ){



            otherWeakness.push({


                skill:skill,


                ...data


            });



        }



    });






    return {


        focusAreas:


        focusAreas

        .sort(

            (a,b)=>a.score-b.score

        ),



        otherWeakness:


        otherWeakness

        .sort(

            (a,b)=>a.score-b.score

        )


    };



};






module.exports={

    analyzeFocusAreas

};