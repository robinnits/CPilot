import Sidebar from "./Sidebar";

function MainLayout({
    children,
    activePage,
    setActivePage,
    analytics
}){

    return(

        <div className="main-layout">

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
                analytics={analytics}
            />

            <main className="main-content">

                {children}

            </main>

        </div>

    );

}

export default MainLayout;