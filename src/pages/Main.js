import React from 'react';
import {motion} from 'framer-motion';
import {personalInfo} from "../content/personalInfo";
import {Linkedin, FolderGit2, Mail, Terminal, Github} from "lucide-react";
import {Link} from "react-router-dom";
import {social} from "../content/socials";
import {TechStack} from "../components/TechStack";

const Main = () => {

    return (
        <div className={
            "relative rounded-xl bg-black/10 overflow-hidden backdrop-blur-sm " + // sizing
             "before:absolute before:inset-0 before:bg-gradient-to-br " + // placement
             "before:from-blue-500/10 before:via-indigo-500/15 before:to-cyan-500/10 " + // coloring
             "before:duration-500 before:blur-xl before:opacity-100 group"  // animation
        }>
            <motion.div
                key="home"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.4}}
                className="relative z-10 min-h-[calc(100vh-6rem)] mx-auto max-w-3xl px-4 flex flex-col items-center justify-center text-center"
            >
                <motion.div
                    className="pt-2 mb-4 relative"
                    initial={{scale: 0.9, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{type: "spring", bounce: 0.5}}
                >
                    {/* Profile image */}
                    <div
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-300/60 relative">
                        <img
                            src={`portfolio/profile.jpg`}
                            alt={personalInfo.name}
                            className="w-full h-full object-cover"
                        />
                        <div aria-hidden="true"
                             className="absolute inset-0 bg-gradient-to-br from-teal-500/7 to-transparent"/>
                    </div>
                    {/* Border around profile picture*/}
                    <motion.div
                        className="absolute -bottom-2 -right-2 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full flex items-center justify-center"
                        animate={{rotate: 360}}
                        transition={{duration: 2, repeat: Infinity, ease: "linear"}}
                    >
                        <Terminal className="w-5 h-5 md:w-6 md:h-6 text-white"/>
                    </motion.div>
                </motion.div>

                {/* Full name */}
                <motion.h1
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.4}}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent leading-relaxed px-4 py-1"
                >
                    {personalInfo.name}
                </motion.h1>

                {/* sub header - current roles*/}
                <div className="w-full max-w-4xl mx-auto mt-2 md:mt-4 mb-4 md:mb-8">
                    <div className="text-center max-w-3xl mx-auto space-y-2 md:space-y-4 font-semibold text-2xl">
                        <h2>{personalInfo.SubHeader}</h2>
                    </div>
                </div>

                {/* CTA buttons */}
                <motion.div
                    initial={{y: 10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.35}}
                    className="mt-4 md:mt-6 flex items-center gap-3 md:gap-4"
                >
                    {/* Primary: View Projects */}
                    <Link
                        to="/projects"
                        aria-label="View my projects"
                        className={
                            "group inline-flex items-center gap-2 rounded-xl px-5 py-3 md:px-6 md:py-3.5 " + // placement
                            "font-medium shadow-lg ring-1 ring-teal-500/30 " + // sizing
                            "bg-gradient-to-r from-teal-500 to-blue-600 text-white " + // coloring
                            "hover:scale-105 hover:shadow-cyan-500/40 " + // hover
                            "focus:scale-105 focus:shadow-cyan-500/40   focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 " + // focus
                            "transition transform duration-200" // animation
                        }
                    >
                        <FolderGit2 className="h-5 w-5"/>
                        View Projects
                    </Link>

                    {/* Secondary: Contact Me */}
                    <a
                        href={social.email}
                        aria-label="Contact me by email"
                        className={
                            "inline-flex items-center gap-2 rounded-xl px-5 py-3 md:px-6 md:py-3.5 font-medium " + // placement
                            "ring-1 ring-cyan-400/40 text-cyan-300 " + // coloring
                            "bg-white/5 hover:bg-white/10 backdrop-blur " + // hover
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 " + // focus
                            "transition" // animation
                        }
                    >
                        <Mail className="h-5 w-5"/>
                        Contact Me
                    </a>
                </motion.div>

                {/* CV file - not in use now */}
                {/*
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="mt-2"
                >
                    <a
                        href="/portfolio/Yuval_Anteby_CV.pdf"
                        download
                        className="inline-flex items-center gap-2 text-sm text-cyan-300/80 hover:text-cyan-200 transition"
                    >
                        <FileDown className="h-4 w-4" />
                        Download CV
                    </a>
                </motion.div>
                */}

                {/* main tech stack */}
                <TechStack/>

                {/* Social (mobile only) */}
                <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
                    <a
                        href={social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-300/85 hover:text-cyan-200 transition">
                        <Github className="h-5 w-5"/>
                        <span className="text-sm">GitHub</span>
                    </a>
                    <a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-300/85 hover:text-cyan-200 transition">
                        <Linkedin className="h-5 w-5"/>
                        <span className="text-sm">LinkedIn</span>
                    </a>
                </div>
            </motion.div>

        </div>
    );
};

export default Main;