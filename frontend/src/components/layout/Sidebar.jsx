import { Activity, BrainCircuit } from "lucide-react";

function Sidebar({
    activePage,
    setActivePage,
    analytics,
    user
}) {

    return (
        <div className="sidebar">
            <div className="sidebar-nav">
            <button
                className={activePage === "analytics" ? "active" : ""}
                onClick={() => setActivePage("analytics")}
            >
                <Activity size={18} />
                <span>Analytics</span>
            </button>

            <button
                className={activePage === "training" ? "active" : ""}
                disabled={!analytics}
                onClick={() => setActivePage("training")}
            >
                <BrainCircuit size={18} />
                <span>Training</span>
            </button>
            </div>

            {user && (
                <div className="sidebar-profile">

                    <img
                        src={user.avatar}
                        alt={user.handle}
                        className="sidebar-avatar"
                    />

                    <div className="sidebar-user-info">

                        <div className="sidebar-name">
                            {user.handle}
                        </div>

                        <div
                            className={`sidebar-rank ${user.rank
                                .replace(/\s+/g, "-")
                                .toLowerCase()}`}
                        >
                            {user.rank}
                        </div>

                    </div>

                </div>
            )}

            <div className="sidebar-version">
    <div className="app-name">CPilot</div>
    <div className="version">v1.0.0</div>
</div>

        </div>
    );
}

export default Sidebar;