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

    const contestCount = ratingHistory.length;

    const rankLines = [
        { y: 1200, label: "Pupil", color: "#008000" },
        { y: 1400, label: "Specialist", color: "#03A89E" },
        { y: 1600, label: "Expert", color: "#0000FF" },
        { y: 1900, label: "Candidate Master", color: "#AA00AA" },
        { y: 2100, label: "Master", color: "#FF8C00" },
        { y: 2300, label: "International Master", color: "#FF8C00" },
        { y: 2400, label: "Grandmaster", color: "#FF0000" },
        { y: 2600, label: "International Grandmaster", color: "#FF0000" },
        { y: 3000, label: "Legendary Grandmaster", color: "#FF0000" },
    ];

    const currentRating =
        ratingHistory[ratingHistory.length - 1].newRating;

    const currentIndex = rankLines.findIndex((line, index) => {
        const next = rankLines[index + 1];

        return !next || currentRating < next.y;
    });

    const lastVisibleIndex = Math.min(
    currentIndex + 2,
    rankLines.length - 1
    );

    const visibleRankLines = rankLines.slice(
    0,
    lastVisibleIndex + 1
    );

    const highestVisibleLine =
        visibleRankLines[visibleRankLines.length - 1].y;

    const chartMax =
        Math.max(
            peak + 150,
            highestVisibleLine + 200
        );

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
                        {contestCount} Contests
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

                    {visibleRankLines.map(rank => (
                        <ReferenceLine
                            key={rank.label}
                            y={rank.y}
                            stroke={rank.color}
                            strokeOpacity={0.65}
                            label={{
                                value: rank.label,
                                position: "insideTopRight",
                                fill: rank.color,
                                fontSize: 13,
                            }}
                        />
                    ))}

                    <XAxis
                        dataKey="date"
                        stroke="#999"
                        minTickGap={40}
                    />

                    <YAxis
                        stroke="#999"
                        domain={[0, chartMax]}
                        ticks={[
                            0,
                            800,
                            1200,
                            1400,
                            1600,
                            1900,
                            2100,
                            2300,
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