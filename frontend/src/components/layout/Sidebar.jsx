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
                Analytics
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
                Training Center
            </button>

        </div>

    );

}

export default Sidebar;