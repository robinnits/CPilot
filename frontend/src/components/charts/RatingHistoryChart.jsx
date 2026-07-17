import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    ReferenceLine
} from "recharts";

function RatingHistoryChart({ ratingHistory }) {

    if (!ratingHistory || ratingHistory.length === 0) {

        return (
            <h3>No rated contests yet</h3>
        );

    }

    const peak = Math.max(
        ...ratingHistory.map(x => x.newRating)
    );

    const firstRating = ratingHistory[0].newRating;

    const currentRating =
        ratingHistory[ratingHistory.length - 1].newRating;

    const gained = currentRating - firstRating;

    // ---------- Custom Tooltip ----------
    const CustomTooltip = ({ active, payload, label }) => {

        if (!active || !payload || !payload.length) return null;

        const formattedDate = new Date(label).toLocaleDateString(
            "en-GB",
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );

        return (

            <div
                style={{
                    background: "#1f1f1f",
                    border: "1px solid #3a3a3a",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#fff",
                    boxShadow: "0 8px 24px rgba(0,0,0,.35)"
                }}
            >

                <div
                    style={{
                        color: "#d1d5db",
                        fontSize: "13px",
                        marginBottom: "8px"
                    }}
                >
                    {formattedDate}
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "18px",
                        fontSize: "14px"
                    }}
                >

                    <span style={{ color: "#9ca3af" }}>
                        Rating
                    </span>

                    <strong style={{ color: "#dddddd" }}>
                        {payload[0].value}
                    </strong>

                </div>

            </div>

        );

    };

    return (

        <div>

            <div className="journey-header">

                <h3>
                    Rating Journey
                </h3>

                <div>

                    <span>
                        Peak: {peak}
                    </span>

                    <span>
                        {gained >= 0 ? "+" : ""}
                        {gained} gained
                    </span>

                </div>

            </div>

            <ResponsiveContainer
                width="100%"
                height={280}
            >

                <LineChart
                    data={ratingHistory}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        opacity={0.15}
                    />

                    {/* Rank milestones */}

                    <ReferenceLine
                        y={1200}
                        label="Pupil"
                        stroke="#00C853"
                    />

                    <ReferenceLine
                        y={1400}
                        label="Specialist"
                        stroke="#03A9F4"
                    />

                    <ReferenceLine
                        y={1600}
                        label="Expert"
                        stroke="#AA00FF"
                    />

                    <ReferenceLine
                        y={2100}
                        label="Master"
                        stroke="#FFB300"
                    />

                    <XAxis
                        dataKey="date"
                        stroke="#999"
                        minTickGap={40}
                    />

                    <YAxis
                        stroke="#999"
                        domain={[0, "dataMax + 200"]}
                        ticks={[
                            0,
                            800,
                            1200,
                            1400,
                            1600,
                            1900,
                            2100,
                            2400,
                            2600,
                            3000
                        ]}
                    />

                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            stroke: "#9ca3af",
                            strokeWidth: 1,
                            strokeDasharray: "4 4"
                        }}
                    />

                    <Line
                        type="monotone"
                        dataKey="newRating"
                        stroke="#2F81F7"
                        strokeWidth={3}
                        dot={{
                            r: 3
                        }}
                        activeDot={{
                            r: 7
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default RatingHistoryChart;