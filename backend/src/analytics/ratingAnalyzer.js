const analyzeRatings = (submissions)=>{


    let ratings = {};


    let solvedProblems = new Set();



    submissions.forEach(sub=>{


        if(
            sub.verdict !== "OK" ||
            !sub.problem.rating
        ){

            return;

        }



        const problemId =
        sub.problem.contestId +
        "-" +
        sub.problem.index;



        if(solvedProblems.has(problemId)){

            return;

        }



        solvedProblems.add(problemId);



        const rating =
        sub.problem.rating;



        if(!ratings[rating]){


            ratings[rating]=0;


        }



        ratings[rating]++;


    });



    return ratings;


};



module.exports={

    analyzeRatings

};