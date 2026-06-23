const axios = require("axios");


const getUser = async(handle)=>{


    const response = await axios.get(
        `https://codeforces.com/api/user.info?handles=${handle}`
    );


    return response.data.result[0];

};

const getSubmissions = async(handle)=>{


    const response = await axios.get(

        `https://codeforces.com/api/user.status?handle=${handle}`

    );


    return response.data.result;

};

const getProblems = async()=>{


    const response = await axios.get(
        "https://codeforces.com/api/problemset.problems"
    );


    return response.data.result.problems;

};

module.exports = {
    getUser,
    getSubmissions,
    getProblems
};