import React from 'react';
import {motion} from 'framer-motion';
import {useGithubRepos} from '../hooks/useGithubRepos';
import {ProjectCard} from "../components/ProjectCard";

export const Projects = () => {
    const {repos} = useGithubRepos('YuvalAnteby', 6);
    console.log(repos);
    return (
        <motion.div
            key="projects"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 px-4 md:px-6"
        >
            {repos.map((repo, index) => (
                <ProjectCard repo={repo} key={index}/>
            ))}
        </motion.div>
    );
};
