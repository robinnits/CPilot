function Sidebar({
    activePage,
    setActivePage
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