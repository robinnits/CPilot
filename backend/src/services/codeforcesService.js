const axios = require("axios");


const getUser = async(handle)=>{


    const response = await axios.get(
        `https://codeforces.com/api/user.info?handles=${handle}`
    );


    return response.data.result[0];

};

const getSubmissions = async(handle)=>{


    try{


        const response = await axios.get(

            `https://codeforces.com/api/user.status?handle=${handle}`

        );


        return response.data.result;


    }


    catch(error){


        throw new Error(
            "Codeforces API unavailable"
        );


    }


};

const getProblems = async()=>{


    try{


        const response = await axios.get(

        "https://codeforces.com/api/problemset.problems"

        );


        return response.data.result.problems;


    }


    catch(error){


        throw new Error(

        "Unable to fetch Codeforces problems"

        );


    }


};

module.exports = {
    getUser,
    getSubmissions,
    getProblems
};