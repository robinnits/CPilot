import SkillCard from "../components/SkillCard";
import RecommendationCard from "../components/RecommendationCard";
import TrainingOverviewCard from "../components/TrainingOverviewCard";

function TrainingPage({ analytics }) {

    const overview = {
        priorityTopic: "Graphs",
        weakTopics: 5,
        suggestedProblems: 27,
        targetDifficulty: "1300-1400"
    };

    return (
        <div className="training-page">

            <div className="training-grid">

                <SkillCard
                    focusAnalysis={analytics?.focusAnalysis}
                />

                <TrainingOverviewCard
                    overview={overview}
                />

            </div>

            <RecommendationCard
                recommendations={analytics?.recommendations}
            />

        </div>
    );
}

export default TrainingPage;