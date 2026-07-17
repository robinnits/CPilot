import { Target } from "lucide-react";

function SkillCard({ focusAnalysis }) {

    if (!focusAnalysis) return null;

    return (

        <div className="card training-skill-card">

            <div className="section-header">

                <Target
                    size={24}
                    className="section-icon training-icon"
                />

                <div>

                    <h2 className="training-card-title">
                        Training Insights
                    </h2>

                    <p className="training-subtitle">
                        Personalized focus areas based on your recent Codeforces performance.
                    </p>

                </div>

            </div>

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

                                <div className="skill-meta">

                                    <span className="skill-score">
                                        {skill.score}/100
                                    </span>

                                    <span
                                        className={`skill-level-badge ${skill.level.toLowerCase()}`}
                                    >
                                        {skill.level}
                                    </span>

                                </div>

                            </div>

                            <div className="skill-progress-bar">

                                <div
                                    className={`skill-progress-fill ${skill.level.toLowerCase()}`}
                                    style={{
                                        width:`${skill.score}%`
                                    }}
                                />

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

                                <div className="skill-meta">

                                    <span className="skill-score">
                                        {skill.score}/100
                                    </span>

                                    <span
                                        className={`skill-level-badge ${skill.level.toLowerCase()}`}
                                    >
                                        {skill.level}
                                    </span>

                                </div>

                            </div>

                            <div className="skill-progress-bar">

                                <div
                                    className={`skill-progress-fill ${skill.level.toLowerCase()}`}
                                    style={{
                                        width:`${skill.score}%`
                                    }}
                                />

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