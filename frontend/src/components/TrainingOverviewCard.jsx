function TrainingOverviewCard({ overview }) {

    return (

        <div className="card training-overview-card">

            <h2 className="training-card-title">
                Training Overview
            </h2>

            <div className="overview-grid">

                <div className="overview-item">
                    <span className="overview-label">
                        Priority Topic
                    </span>

                    <span className="overview-value priority-topic">
                        {overview.priorityTopic}
                    </span>
                </div>

                <div className="overview-item">
                    <span className="overview-label">
                        Weak Topics
                    </span>

                    <span className="overview-value">
                        {overview.weakTopics}
                    </span>
                </div>

                <div className="overview-item">
                    <span className="overview-label">
                        Suggested Problems
                    </span>

                    <span className="overview-value">
                        {overview.suggestedProblems}
                    </span>
                </div>

                <div className="overview-item">
                    <span className="overview-label">
                        Target Difficulty
                    </span>

                    <span className="overview-value">
                        {overview.targetDifficulty}
                    </span>
                </div>

            </div>

        </div>

    );

}

export default TrainingOverviewCard;