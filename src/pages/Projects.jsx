import React from 'react';
import {motion} from 'framer-motion';
import {useGithubRepos} from '../hooks/useGithubRepos';
import {ProjectCard} from "../components/ProjectCard";
import {social} from "../content/socials";

export const Projects = () => {
    const {repos, loading, error} = useGithubRepos('YuvalAnteby', 3);

    return (
        <motion.div
            key="projects"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="px-4 md:px-6"
        >
            <div className="mb-10 max-w-3xl">
                <p className="font-mono mt-3 text-3xl md:text-5xl font-bold tracking-[-0.03em] text-[#00FF33]">Personal Projects</p>
            </div>

            {loading && (
                <div role="status" aria-label="Loading projects">
                    <p className="mb-4 text-cyan-50/70">Loading projects…</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-hidden="true">
                        {[0, 1, 2].map((index) => (
                            <div key={index} className="min-h-[240px] animate-pulse rounded-lg bg-white/[0.04]"/>
                        ))}
                    </div>
                </div>
            )}
            {error && (
                <p role="alert" className="rounded-xl bg-red-950/50 p-4 text-red-100">
                    Live GitHub metadata is unavailable, so the curated project summaries are shown instead.
                </p>
            )}
            {!loading && !error && repos.length === 0 && (
                <p className="text-cyan-50/70">No public projects are available right now.</p>
            )}

            {repos.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.map((repo, index) => (
                        <ProjectCard repo={repo} index={index} key={repo.id}/>
                    ))}
                </div>
            )}

            <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-xl border border-cyan-300/30 px-5 py-3 font-medium text-cyan-200 transition hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
                View all repositories
            </a>
        </motion.div>
    );
};
