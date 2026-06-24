const {analyzeTags} =
require("../analytics/tagAnalyzer");

const {

    generateRecommendations

}=require("../analytics/recommendationEngine");

const {

    calculateSkillScore

}=require("../analytics/skillAnalyzer");

const {

    analyzeTopics

}=require("../analytics/topicAnalyzer");

const codeforcesService =
require("../services/codeforcesService");

const {analyzeRatings} =
require("../analytics/ratingAnalyzer");



const getUserProfile = async(req,res)=>{


    try{

        const handle = req.params.handle;


        const user =
        await codeforcesService.getUser(handle);


        res.json({
            success:true,
            data:user
        });


    }


    catch(error){


        res.status(404).json({


            success:false,


            message:"Codeforces user not found"


        });


    }

};

const getUserAnalytics = async(req,res)=>{


    try{


        const handle = req.params.handle;

        const user =
        await codeforcesService.getUser(handle);


        const userRating = 
        user.rating || 800;


        const submissions = 
        await codeforcesService.getSubmissions(handle);



        let accepted = 0;

        let solvedProblems = new Set();



        submissions.forEach((sub)=>{


            if(sub.verdict === "OK"){


                accepted++;


                const problemID =

                sub.problem.contestId 
                + "-" +
                sub.problem.index;



                solvedProblems.add(problemID);


            }


        });


        const topicAnalysis = 
        analyzeTopics(submissions);

        const ratingStats =
        analyzeRatings(submissions);

        const tagStats =
        analyzeTags(submissions);

        const skillAnalysis =
        calculateSkillScore(topicAnalysis);

        const problems =
        await codeforcesService.getProblems();



        const recommendations =
        generateRecommendations(

            skillAnalysis,

            problems,

            solvedProblems,

            userRating

        );

        const total = submissions.length;


        const accuracy = total === 0 
            ? 0 
            : ((accepted / total) * 100).toFixed(2);



        res.json({

            success:true,


            data:{


            handle:handle,


            topicAnalysis:topicAnalysis,


            skillAnalysis:skillAnalysis,


            recommendations:recommendations,


            ratingStats:ratingStats,

            tagStats:tagStats,


            totalSubmissions:total,


            acceptedSubmissions:accepted,


            wrongSubmissions: total - accepted,


            solvedProblems:solvedProblems.size,


            accuracy:accuracy


        }


        });



    }


   catch(error){


        res.status(500).json({

            success:false,

            message:error.message

        });


    }



};



module.exports = {
    getUserProfile,
    getUserAnalytics
};