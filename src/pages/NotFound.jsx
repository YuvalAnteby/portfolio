import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-4xl font-bold">404 — Page not found</h1>
            <p className="text-gray-300">The page you’re looking for doesn’t exist.</p>
            <Link
                to="/"
                className="mt-2 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-medium
                   ring-1 ring-cyan-400/40 text-cyan-300 bg-white/5 hover:bg-white/10 transition"
            >
                Go Home
            </Link>
        </div>
    );
}
