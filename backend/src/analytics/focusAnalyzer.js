const analyzeFocusAreas = (

    rankFocusAreas,

    skillAnalysis

)=>{


    const prioritySkills =
    rankFocusAreas.map(skill=>

        skill.skill

    );



    let otherWeakness = [];



    Object.entries(skillAnalysis)

    .forEach(([skill,data])=>{


        if(

            data.level === "Weak" &&

            !prioritySkills.includes(skill)

        ){


            otherWeakness.push({


                skill:skill,


                ...data


            });


        }


    });



    return {


        focusAreas:

        rankFocusAreas,



        otherWeakness:

        otherWeakness.sort(

            (a,b)=>a.score-b.score

        )


    };


};




module.exports={

    analyzeFocusAreas

};