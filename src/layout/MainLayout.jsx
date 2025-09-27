import Navbar from "./Navbar";

export const MainLayout = ({children}) => {

    return (
        <div className="min-h-dvh bg-black text-white overflow-x-hidden flex flex-col">
            <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <header className="bg-white dark:bg-dark">

                <Navbar/>
            </header>

            <main className="flex-1 pt-16 pb-2 px-2 max-w-7xl mx-auto w-full">
                {children}
            </main>
        </div>
    );
};
