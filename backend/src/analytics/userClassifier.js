const classifyUser=(

    rating,

    solved,

    isUnrated

)=>{


    if(isUnrated && solved < 30){


        return "BEGINNER";


    }



    if(solved < 30 && rating >= 1000){


        return "ALT_ACCOUNT";


    }




    if(solved < 100){


        return "LOW_DATA";


    }




    return "NORMAL";


};



module.exports={

    classifyUser

};