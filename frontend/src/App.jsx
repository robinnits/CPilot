import { useState } from "react";

import SearchBox from "./components/SearchBox";

import API from "./services/api";

import ProfileCard from "./components/ProfileCard";

import StatsCard from "./components/StatsCard";

import SkillCard from "./components/SkillCard";



function App(){


    const [user,setUser] = useState(null);
    const [error,setError] = useState("");

    const [analytics,setAnalytics] = useState(null);



    const analyzeUser = async(handle)=>{
        setError("");
        setUser(null);
        setAnalytics(null);


        try{


            console.log(
                "Searching:",
                handle
            );


            const userResponse =
            await API.get(
                `/user/${handle}`
            );


            console.log(
                "User:",
                userResponse.data
            );



            const analyticsResponse =
            await API.get(

                `/user/analytics/${handle}`

            );


            console.log(
                "Analytics:",
                analyticsResponse.data
            );



            setUser(

                userResponse.data.data

            );


            setAnalytics(

                analyticsResponse.data.data

            );



        }


        catch(error){


            console.log(
                error.response?.data
            );


            setError(

                error.response?.data?.message
                ||
                "Something went wrong 😢"

            );


        }


    };



    return (

        <div>


            <h1>
                CPilot 🚀
            </h1>


            <SearchBox
            onSearch={analyzeUser}
            />
            {
            error &&

            <p>
                {error}
            </p>

            }


            {
                user &&

                <ProfileCard user={user}/>
            }



            {
                analytics &&

                <StatsCard analytics={analytics}/>
            }

            {

            analytics &&

            <SkillCard

            skills={analytics.skillAnalysis}

            />

            }


        </div>

    );


}


export default App;