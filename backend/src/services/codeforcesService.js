const axios = require("axios");



const fetchWithRetry = async(url, retries = 3)=>{


    for(let i=0; i<retries; i++){


        try{


            const response =
            await axios.get(

                url,

                {

                    timeout:10000

                }

            );


            return response;


        }


        catch(error){


            console.log(
                `Retry ${i+1} failed`
            );


            if(i === retries-1){


                throw error;


            }



            await new Promise(resolve=>


                setTimeout(

                    resolve,

                    1000

                )


            );


        }


    }


};




const getUser = async(handle)=>{


    try{


        const response =
        await fetchWithRetry(

            `https://codeforces.com/api/user.info?handles=${handle}`

        );


        return response.data.result[0];


    }


    catch(error){


        throw new Error(

            "Unable to fetch Codeforces user"

        );


    }


};




const getSubmissions = async(handle)=>{


    try{


        const response =
        await fetchWithRetry(

            `https://codeforces.com/api/user.status?handle=${handle}`

        );


        return response.data.result;


    }


    catch(error){


        throw new Error(

            "Unable to fetch Codeforces submissions"

        );


    }


};




const getProblems = async()=>{


    try{


        const response =
        await fetchWithRetry(

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

const getRatingHistory = async(handle)=>{


    try{


        const response = await fetchWithRetry(

            `https://codeforces.com/api/user.rating?handle=${handle}`

        );



        return response.data.result;


    }


    catch(error){


        return [];


    }


};




module.exports = {


    getUser,


    getSubmissions,


    getProblems,

    getRatingHistory


};