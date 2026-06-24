const analyzeHeatmap = (submissions)=>{


    let heatmap = {};



    submissions.forEach(sub=>{


        const date = new Date(

            sub.creationTimeSeconds * 1000

        )

        .toISOString()

        .split("T")[0];



        if(!heatmap[date]){


            heatmap[date] = 0;


        }



        heatmap[date]++;


    });



    return heatmap;


};



module.exports={

    analyzeHeatmap

};