const analyzeTags = (submissions)=>{


    let tags = {};


    let solvedProblems = new Set();



    submissions.forEach(sub=>{


        if(
            sub.verdict !== "OK" ||
            !sub.problem.tags
        ){

            return;

        }



        const problemId =
        sub.problem.contestId +
        "-" +
        sub.problem.index;



        if(
            solvedProblems.has(problemId)
        ){

            return;

        }



        solvedProblems.add(problemId);



        sub.problem.tags.forEach(tag=>{


            if(!tags[tag]){


                tags[tag]=0;


            }



            tags[tag]++;


        });


    });



    return tags;


};



module.exports={

    analyzeTags

};