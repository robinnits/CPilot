import Sidebar from "./Sidebar";
import Footer from "../Footer";

function MainLayout({
    children,
    activePage,
    setActivePage,
    analytics,
    user
}){

    return(

        <div className="main-layout">

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
                analytics={analytics}
                user = {user}
            />

            <main className="main-content">

                {children}

                <Footer />

            </main>

        </div>

    );

}

export default MainLayout;