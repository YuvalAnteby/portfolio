import Navbar from "./Navbar";

export const MainLayout = ({children}) => {

    return (
        <div className="min-h-dvh bg-black text-white overflow-x-hidden flex flex-col">
            <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only fixed left-4 top-4 z-[60] rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
            >
                Skip to content
            </a>
            <header className="bg-white dark:bg-dark">

                <Navbar/>
            </header>

            <main
                id="main-content"
                tabIndex="-1"
                className="flex-1 pt-16 pb-2 px-2 max-w-7xl mx-auto w-full focus:outline-none"
            >
                {children}
            </main>
        </div>
    );
};
