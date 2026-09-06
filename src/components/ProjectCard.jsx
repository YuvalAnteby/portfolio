import {Github, ExternalLink, GitFork, Star} from "lucide-react";
import {motion} from "framer-motion";
import React from "react";

export const ProjectCard = ({repo, index}) => {
    const hasHomepage = Boolean(repo.homepage?.trim());
    const topics = Array.isArray(repo.topics) ? repo.topics.slice(0, 4) : [];
    const updated = repo.updated_at
        ? new Date(repo.updated_at).toLocaleDateString(undefined, {year: "numeric", month: "short"})
        : "";
    const name = repo.displayName || repo.name;
    const stars = Number(repo.stargazers_count) || 0;
    const forks = Number(repo.forks_count) || 0;

    return (
        <motion.article
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: index * 0.07}}
            className="group relative flex min-h-[260px] w-full"
        >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/15 to-blue-600/10 opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"/>

            <div className="relative flex min-h-[260px] w-full flex-col rounded-xl border border-white/10 bg-slate-950/90 p-5 md:p-6">
                <div className="flex items-center gap-3">
                    {repo.icon && <img src={repo.icon} alt="" width={40} height={40} className="h-10 w-10 shrink-0 object-contain"/>}
                    <div className="min-w-0 break-words">
                        <p className="font-mono text-xs text-[#00FF33]">repo/{repo.repoName || repo.name}</p>
                        <h3 className="mt-0.5 text-xl font-semibold leading-tight text-white md:text-2xl">{name}</h3>
                    </div>
                </div>
                <p className="mt-3 flex-grow text-sm leading-6 text-cyan-50/70">
                    {repo.description || "Project details are available on GitHub."}
                </p>

                {topics.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {topics.map((topic) => (
                            <span key={topic} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-cyan-50/80">
                                {topic}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-5 flex items-end justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-cyan-50/60">
                        <span>{updated ? `Updated ${updated}` : 'Curated project'}</span>
                        {stars > 0 && (
                            <span className="inline-flex items-center gap-1" aria-label={`${stars} stars`}>
                                <Star className="h-3.5 w-3.5" aria-hidden="true"/>{stars}
                            </span>
                        )}
                        {forks > 0 && (
                            <span className="inline-flex items-center gap-1" aria-label={`${forks} forks`}>
                                <GitFork className="h-3.5 w-3.5" aria-hidden="true"/>{forks}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        {hasHomepage && (
                            <a
                                href={repo.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/15 bg-white/[0.02] px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                                aria-label={`Open live site for ${name}`}
                            >
                                <ExternalLink className="h-4 w-4"/>
                                Live
                            </a>
                        )}
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-shadow hover:shadow-[0_0_12px_rgba(56,189,248,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                            aria-label={`Open GitHub repo ${name}`}
                        >
                            <Github className="h-4 w-4"/>
                            Repo
                        </a>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};
