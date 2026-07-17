import SkillCard from "../components/SkillCard";
import RecommendationCard from "../components/RecommendationCard";

function TrainingPage({ analytics }) {

    return (

        <div className="training-page">

            <div className="training-content">

                <SkillCard
                    focusAnalysis={analytics.focusAnalysis}
                />

                <RecommendationCard
                    recommendations={analytics.recommendations}
                />

            </div>

        </div>

    );

}

export default TrainingPage;