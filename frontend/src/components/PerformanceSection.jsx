import RatingChart from "./charts/RatingChart";
import RatingHistoryChart from "./charts/RatingHistoryChart";


function PerformanceSection({ analytics }) {


    return (

        <div className="performance-card">


            <h2>
                Performance Analytics 📈
            </h2>


            <div className="performance-grid">


                <div className="chart-box">

                    <RatingHistoryChart

                    ratingHistory={
                        analytics.ratingHistory
                    }

                    />

                </div>



                <div className="chart-box">

                    <RatingChart

                    ratingStats={
                        analytics.ratingStats
                    }

                    />

                </div>


            </div>


        </div>

    );


}


export default PerformanceSection;