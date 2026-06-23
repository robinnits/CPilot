const analyzeTopics = (submissions)=>{


    let topics = {};



    submissions.forEach((sub)=>{


        if(!sub.problem.tags)
            return;



        sub.problem.tags.forEach((tag)=>{


            if(!topics[tag]){


                topics[tag] = {

                    attempts:0,

                    solved:0

                };


            }



            topics[tag].attempts++;



            if(sub.verdict==="OK"){


                topics[tag].solved++;


            }



        });


    });



    return topics;

};



module.exports = {

    analyzeTopics

};