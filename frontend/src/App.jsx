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

import MainLayout from "./components/layout/MainLayout";
import AnalyticsPage from "./pages/AnalyticsPage";
import TrainingPage from "./pages/TrainingPage";



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

                "Unable to analyze profile"

            );


        }


        finally{

            setLoading(false);

        }


    };

    const [activePage, setActivePage] =
    useState("analytics");





    return (

    <div className="app">

        <Navbar />

        <MainLayout
            activePage={activePage}
            setActivePage={setActivePage}
        >

            {
                activePage === "analytics" && (

                    <main
                        className="
                        max-w-7xl
                        mx-auto
                        px-0
                        py-0
                        space-y-6
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
                            analytics && (

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

                                    <div className="card heatmap-card">

                                        <HeatmapChart
                                            heatmapStats={
                                                analytics.heatmapStats
                                            }
                                        />

                                    </div>

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

                            )
                        }

                    </main>

                )
            }

            {
                activePage === "training" &&

                <TrainingPage
                    analytics={analytics}
                />
            }

        </MainLayout>

    </div>

);

}



export default App;