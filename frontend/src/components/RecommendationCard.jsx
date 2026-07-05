function RecommendationCard({ recommendations }) {

    if (!recommendations) return null;

    return (

        <div className="card recommendation-card">

            <h2 className="training-card-title">
                Recommended Problems
            </h2>

            {

                Object.entries(recommendations)

                .map(([topic, problems]) => (

                    <div
                        key={topic}
                        className="recommendation-topic"
                    >

                        <h3 className="topic-title">
                            {topic}
                        </h3>

                        {

                            problems.map(problem => (

                                <div
                                    className="problem-card"
                                    key={
                                        problem.contestId +
                                        problem.index
                                    }
                                >

                                    <div>

                                        <div className="problem-name">
                                            {problem.name}
                                        </div>

                                        <div className="problem-meta">
                                            {problem.rating}
                                            {" • "}
                                            {problem.zone}
                                        </div>

                                    </div>

                                    <a
                                        className="solve-button"
                                        href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}
                                        target="_blank"
                                        rel="noreferrer"
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

    );

}

export default RecommendationCard;