const analyzeVerdicts = (submissions)=>{


    let verdicts = {};



    submissions.forEach(sub=>{


        const verdict =
        sub.verdict || "UNKNOWN";



        if(!verdicts[verdict]){


            verdicts[verdict] = 0;


        }



        verdicts[verdict]++;


    });



    return verdicts;


};



module.exports={

    analyzeVerdicts

};