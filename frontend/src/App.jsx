import { useState } from "react";

import SearchBox from "./components/SearchBox";

import API from "./services/api";

import ProfileCard from "./components/ProfileCard";

import StatsCard from "./components/StatsCard";



function App(){


    const [user,setUser] = useState(null);

    const [analytics,setAnalytics] = useState(null);



    const analyzeUser = async(handle)=>{


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

                "Frontend Error:",

                error

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
                user &&

                <ProfileCard user={user}/>
            }



            {
                analytics &&

                <StatsCard analytics={analytics}/>
            }


        </div>

    );


}


export default App;