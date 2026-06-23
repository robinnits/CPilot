const skillTags = new Set([

    "implementation",

    "math",

    "greedy",

    "dp",

    "data structures",

    "brute force",

    "constructive algorithms",

    "graphs",

    "matrices",

    "ternary search",

    "expression parsing",

    "sortings",

    "binary search",

    "dfs and similar",

    "trees",

    "strings",

    "number theory",

    "combinatorics",

    "geometry",

    "bitmasks",

    "two pointers",

    "dsu",

    "shortest paths",

    "probabilities",

    "divide and conquer",

    "hashing",

    "flows"

]);

const analyzeTopics = (submissions)=>{


    let topics = {};



    submissions.forEach((sub)=>{


        if(!sub.problem.tags)
            return;



        sub.problem.tags.forEach((tag)=>{

            if(!skillTags.has(tag)){


                return;


            }


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