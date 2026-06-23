const codeforcesService =
require("../services/codeforcesService");



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


        res.status(500).json({

            success:false,
            message:"Cannot fetch user"

        });


    }

};

const getUserAnalytics = async(req,res)=>{


    try{


        const handle = req.params.handle;


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



        const total = submissions.length;


        const accuracy = total === 0 
            ? 0 
            : ((accepted / total) * 100).toFixed(2);



        res.json({

            success:true,


            data:{


                totalSubmissions:total,

                acceptedSubmissions:accepted,

                solvedProblems:solvedProblems.size,

                accuracy:accuracy


            }


        });



    }


    catch(error){


        res.status(500).json({

            success:false,

            message:"Analytics failed"

        });


    }



};



module.exports = {
    getUserProfile,
    getUserAnalytics
};