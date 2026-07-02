import Sidebar from "./Sidebar";

function MainLayout({
    children,
    activePage,
    setActivePage
}){

    return(

        <div className="main-layout">

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />

            <main className="main-content">

                {children}

            </main>

        </div>

    );

}

export default MainLayout;