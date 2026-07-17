function RecommendationCard({ recommendations }) {

    if (!recommendations) return null;

    return (

        <div className="recommendation-wrapper">

            <h2 className="training-card-title">
                Recommended Problems
            </h2>

            <div className="recommendation-grid">

                {
                    Object.entries(recommendations)
                    .map(([topic, problems]) => (

                        <div
                            key={topic}
                            className="recommendation-topic-card"
                        >

                            <div className="topic-header">

                                <h3 className="topic-title">
                                    {topic}
                                </h3>

                                <span className="topic-count">
                                    {problems.length} {problems.length === 1 ? "Problem" : "Problems"}                                </span>

                            </div>

                            {
                                problems.map(problem => (

                                    <div
                                        key={
                                            problem.contestId +
                                            problem.index
                                        }
                                        className="problem-row"
                                    >

                                        <div>

                                            <div className="problem-name">
                                                {problem.name}
                                            </div>

                                            <div className="problem-meta">

                                                <span className="problem-rating">
                                                    {problem.rating}
                                                </span>

                                                <span
                                                    className={`problem-zone ${problem.zone.toLowerCase()}`}
                                                >
                                                    {problem.zone}
                                                </span>

                                            </div>

                                        </div>

                                        <a
                                            href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="solve-button"
                                        >
                                            Solve
                                        </a>

                                    </div>

                                ))
                            }

                        </div>

                    ))
                }

            </div>

        </div>

    );

}

export default RecommendationCard;