import { useState } from "react";

import SearchBox from "./components/SearchBox";

import API from "./services/api";

import ProfileCard from "./components/ProfileCard";

import StatsCard from "./components/StatsCard";

import SkillCard from "./components/SkillCard";

import RecommendationCard 
from "./components/RecommendationCard";

import RatingChart 
from "./components/charts/RatingChart";

// import TagChart 
// from "./components/charts/TagChart";

import HeatmapChart 
from "./components/charts/HeatmapChart";

import VerdictChart 
from "./components/charts/VerdictChart";

import RatingHistoryChart
from "./components/charts/RatingHistoryChart";

import RankProgressCard
from "./components/RankProgressCard";

import TopicBubbleChart
from "./components/charts/TopicBubbleChart";



function App(){


    const [user,setUser] = useState(null);

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


            console.log(
                "Searching:",
                handle
            );




            const userResponse =
            await API.get(

                `/user/${handle}`

            );




            const analyticsResponse =
            await API.get(

                `/user/analytics/${handle}`

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

                "Unable to analyze profile 😢"


            );



        }



        finally{


            setLoading(false);


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


                loading &&


                <h3>

                    🚀 Analyzing Codeforces profile...

                </h3>


            }






            {


                error &&


                <p>

                    ❌ {error}

                </p>


            }








            {

                user &&

                <ProfileCard user={user}/>

            }






            {


                analytics &&


                <>


                <StatsCard

                analytics={analytics}

                />




                <RankProgressCard

                rankProgress={

                    analytics.rankProgress

                }

                />





                <RatingChart

                ratingStats={

                    analytics.ratingStats

                }

                />






                <RatingHistoryChart

                ratingHistory={

                    analytics.ratingHistory

                }

                />



                <TopicBubbleChart

                tagStats={
                analytics.tagStats
                }

                />



                {/* <TagChart

                tagStats={

                    analytics.tagStats

                }

                /> */}







                <HeatmapChart

                heatmapStats={

                    analytics.heatmapStats

                }

                />






                <VerdictChart

                verdictStats={

                    analytics.verdictStats

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





        </div>

    );


}




export default App;