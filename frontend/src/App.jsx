import { useState } from "react";

import SearchBox from "./components/SearchBox";

import API from "./services/api";

import ProfileCard from "./components/ProfileCard";

import SkillCard from "./components/SkillCard";

import RecommendationCard 
from "./components/RecommendationCard";

import PerformanceSection 
from "./components/PerformanceSection";

import HeatmapChart 
from "./components/charts/HeatmapChart";

import VerdictChart 
from "./components/charts/VerdictChart";

import TopicBubbleChart
from "./components/charts/TopicBubbleChart";

import Navbar
from "./components/layout/Navbar";



function App(){


    const [user,setUser] =
    useState(null);


    const [analytics,setAnalytics] =
    useState(null);


    const [error,setError] =
    useState("");


    const [loading,setLoading] =
    useState(false);




    const analyzeUser = async(handle)=>{


        setError("");

        setUser(null);

        setAnalytics(null);

        setLoading(true);



        try{


            const userResponse =
            await API.get(`/user/${handle}`);


            const analyticsResponse =
            await API.get(`/user/analytics/${handle}`);



            setUser(
                userResponse.data.data
            );


            setAnalytics(
                analyticsResponse.data.data
            );



        }


        catch(error){


            setError(

                error.response?.data?.message

                ||

                "Unable to analyze profile 😢"

            );


        }


        finally{

            setLoading(false);

        }


    };





    return (


       <div className="app">


            <Navbar/>




            <main
            className="
            max-w-7xl
            mx-auto
            px-0
            py-0
            space-y-10
            "
            >



                <SearchBox

                onSearch={analyzeUser}

                />




                {

                loading &&


                <h3>

                Analyzing profile...

                </h3>


                }





                {

                error &&


                <p>

                {error}

                </p>


                }






                {


                user && analytics &&


                <ProfileCard

                user={user}

                analytics={analytics}

                />

                }






                {


                analytics &&


                <>


                   <PerformanceSection

                    analytics={analytics}

                    />






                    <div className="card skill-card">


                        <h2>
                            Skill Analytics
                        </h2>



                        <div className="skill-grid">


                            <div className="chart-box topic-box">


                                <TopicBubbleChart

                                tagStats={
                                    analytics.tagStats
                                }

                                />


                            </div>




                            <div className="chart-box verdict-box">


                                <VerdictChart

                                verdictStats={
                                    analytics.verdictStats
                                }

                                />


                            </div>


                        </div>


                    </div>







                    <HeatmapChart

                    heatmapStats={
                        analytics.heatmapStats
                    }

                    />








                    <SkillCard

                    focusAnalysis={
                        analytics.focusAnalysis
                    }

                    />






                    <RecommendationCard

                    recommendations={
                        analytics.recommendations
                    }

                    />



                </>

                }



            </main>


        </div>


    );


}



export default App;