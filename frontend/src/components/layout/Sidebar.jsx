import { BarChart3, BrainCircuit } from "lucide-react";

function Sidebar({
    activePage,
    setActivePage,
    analytics
}){

    return(

        <div className="sidebar">

            <button
                className={
                    activePage === "analytics"
                    ? "active"
                    : ""
                }
                onClick={()=>
                    setActivePage("analytics")
                }
            >
                <BarChart3 size={18}/>Analytics
            </button>

            <button
                className={
                    activePage === "training"
                    ? "active"
                    : ""
                }

                disabled={!analytics}

                onClick={()=>
                    setActivePage("training")
                }
            >
                <BrainCircuit size={18}/>Training Center
            </button>

        </div>

    );

}

export default Sidebar;