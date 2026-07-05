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

            <div className="training-top-grid">

                <div className="card training-skill-card">
                    <SkillCard
                        focusAnalysis={
                            analytics.focusAnalysis
                        }
                    />
                </div>

                <div className="card training-overview-card">

                    <h2>Training Overview</h2>

                    <div className="overview-item">
                        <span className="overview-label">
                            Priority Topic
                        </span>

                        <span className="overview-value">
                            Graphs
                        </span>
                    </div>

                    <div className="overview-item">
                        <span className="overview-label">
                            Weak Topics
                        </span>

                        <span className="overview-value">
                            5
                        </span>
                    </div>

                    <div className="overview-item">
                        <span className="overview-label">
                            Suggested Problems
                        </span>

                        <span className="overview-value">
                            27
                        </span>
                    </div>

                    <div className="overview-item">
                        <span className="overview-label">
                            Target Difficulty
                        </span>

                        <span className="overview-value">
                            1300 - 1400
                        </span>
                    </div>

                </div>

            </div>

            <div className="card recommendation-section">

                <RecommendationCard
                    recommendations={
                        analytics.recommendations
                    }
                />

            </div>

        </div>
    );
}

export default TrainingPage;