const rankSkillMap = {


    newbie:[

        "implementation",

        "math",

        "brute force",

        "greedy",

        "sortings",

        "strings"

    ],



    pupil:[

        "implementation",

        "math",

        "greedy",

        "binary search",

        "constructive algorithms",

        "two pointers",

        "dp",

        "data structures",

        "dfs and similar"

    ],



    specialist:[

        "dp",

        "graphs",

        "trees",

        "data structures",

        "dfs and similar",

        "number theory",

        "combinatorics",

        "bitmasks",

        "dsu"

    ],



    expert:[

        "dp",

        "graphs",

        "trees",

        "data structures",

        "shortest paths",

        "divide and conquer",

        "hashing",

        "geometry",

        "flows"

    ]


};




const getTargetSkills = (rating)=>{


    if(rating < 1200){


        return rankSkillMap.newbie;


    }



    if(rating < 1400){


        return rankSkillMap.pupil;


    }



    if(rating < 1600){


        return rankSkillMap.specialist;


    }



    return rankSkillMap.expert;


};




module.exports={

    getTargetSkills

};