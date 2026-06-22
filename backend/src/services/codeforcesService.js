const axios = require("axios");


const getUser = async(handle)=>{


    const response = await axios.get(
        `https://codeforces.com/api/user.info?handles=${handle}`
    );


    return response.data.result[0];

};


module.exports = {
    getUser
};