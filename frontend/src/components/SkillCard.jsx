function SkillCard({ focusAnalysis }) {

    if (!focusAnalysis) return null;

    return (

        <div className="card training-skill-card">

            <h2 className="training-card-title">
                Skill Analysis
            </h2>

            <div className="skill-columns">
            <div className="skill-section">

                <h3 className="skill-section-title">
                    Priority Focus
                </h3>

                {
                    focusAnalysis.focusAreas.map(skill => (

                        <div
                            className="skill-item"
                            key={skill.skill}
                        >

                            <div className="skill-top-row">

                                <span className="skill-name">
                                    {skill.skill}
                                </span>

                                <span className="skill-score">
                                    {skill.score}/100
                                </span>

                            </div>

                                                        <div className="skill-progress-bar">

                                <div
                                    className={`skill-progress-fill ${skill.level.toLowerCase()}`}
                                    style={{
                                        width: `${skill.score}%`
                                    }}
                                />

                            </div>

                            <div className="skill-bottom-row">

                                <span
                                    className={`skill-level ${skill.level.toLowerCase()}`}
                                >
                                    {skill.level}
                                </span>

                            </div>

                        </div>

                    ))
                }

            </div>

            <div className="skill-section">

                <h3 className="skill-section-title">
                    Other Weaknesses
                </h3>

                {
                    focusAnalysis.otherWeakness.map(skill => (

                        <div
                            className="skill-item"
                            key={skill.skill}
                        >

                            <div className="skill-top-row">

                                <span className="skill-name">
                                    {skill.skill}
                                </span>

                                <span className="skill-score">
                                    {skill.score}/100
                                </span>

                            </div>

                                                        <div className="skill-progress-bar">

                                <div
                                    className={`skill-progress-fill ${skill.level.toLowerCase()}`}
                                    style={{
                                        width: `${skill.score}%`
                                    }}
                                />

                            </div>

                            <div className="skill-bottom-row">

                                <span
                                    className={`skill-level ${skill.level.toLowerCase()}`}
                                >
                                    {skill.level}
                                </span>

                            </div>

                        </div>

                    ))
                }

            </div>
            </div>

        </div>

    );

}

export default SkillCard;