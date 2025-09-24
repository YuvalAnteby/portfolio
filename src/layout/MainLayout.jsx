import Navbar from "./Navbar";

export const MainLayout = ({children}) => {

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <div className="fixed inset-0 bg-grid-pattern opacity-10" />
            <header className="bg-white dark:bg-dark">

                <Navbar/>
            </header>

            <main className="pt-24 pb-2 px-2 max-w-12xl mx-auto">
                {children}
            </main>
        </div>
    );
};
