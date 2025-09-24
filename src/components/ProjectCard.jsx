import {Github, ExternalLink, Star, GitFork} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";

export const ProjectCard = ({repo, index}) => {
    const hasHomepage = !!repo.homepage && repo.homepage.trim() !== "";
    const topics = Array.isArray(repo.topics) ? repo.topics.slice(0, 5) : [];
    const updated = repo.updated_at
        ? new Date(repo.updated_at).toLocaleDateString(undefined, {
            year: "2-digit", // This gives '25 instead of 2025
            month: "short"
        })
        : "";

    return (
        <motion.div
            key={repo.id}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: index * 0.07}}
            className="group relative min-h-[240px] flex w-full"
        >
            {/* gradient halo */}
            <div
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-teal-500/15 to-blue-600/10 opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300 will-change-transform"/>

            {/* card */}
            <div
                className="relative w-full rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm p-4 md:p-6 flex flex-col justify-between min-h-[240px]">
                {/* header */}
                <div className="flex items-center justify-between gap-3 ">
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight truncate">
                        {repo.name}
                    </h3>

                    {/* tiny metrics */}
                    <div className="hidden sm:flex items-center gap-3 text-xs text-white/70 flex-shrink-0">
                        <span className="inline-flex items-center gap-1"><Star
                            className="w-4 h-4"/>{repo.stargazers_count}</span>
                        <span className="inline-flex items-center gap-1"><GitFork
                            className="w-4 h-4"/>{repo.forks_count}</span>
                    </div>
                </div>

                {/* description */}
                <p className="mt-2 text-sm text-white/70 line-clamp-3 sm:line-clamp-2 flex-grow">{repo.description || "—"}</p>

                {/* topic chips */}
                {topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {topics.map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] text-white/80"
                                title={t}
                            >
                {t}
              </span>
                        ))}
                    </div>
                )}

                {/* footer */}
                <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-white/60">Updated {updated}</span>

                    <div className="flex items-center gap-2">
                        {/* Ghost (outline) */}
                        {hasHomepage && (
                            <a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.02] px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/[0.06] transition-colors"
                                aria-label={`Open live site for ${repo.name}`}
                            >
                                <ExternalLink className="w-4 h-4"/>
                                Live
                            </a>
                        )}

                        {/* Primary (blue gradient) */}
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:shadow-[0_0_12px_rgba(56,189,248,0.35)] transition-shadow"
                            aria-label={`Open GitHub repo ${repo.name}`}
                        >
                            <Github className="w-4 h-4"/>
                            Repo
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
