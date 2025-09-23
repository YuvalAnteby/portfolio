import React from 'react';
import {motion} from 'framer-motion';
import {personalInfo} from "../content/personalInfo";
import {Terminal} from "lucide-react";
import {SubHeader} from "../components/SubHeader";

const Main = () => {
    return (
        <motion.div
            key="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4}}
            className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center"
        >
            <motion.div
                className="mb-4 relative"
                initial={{scale: 0.9, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{type: "spring", bounce: 0.5}}
            >
                {/* Profile image */}
                <div
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-300/60 relative">
                    <img
                        src="/profile.jpg"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/7 to-transparent"/>
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
                className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent leading-relaxed px-4 py-1"
            >
                {personalInfo.name}
            </motion.h1>

            {/* sub header - current roles*/}
            <div className="w-full max-w-4xl mx-auto mt-4 md:mt-4 mb-4 md:mb-8">
                <div className="text-center max-w-3xl mx-auto space-y-2 md:space-y-4">
                    <SubHeader />
                </div>
            </div>

        </motion.div>
    );
};

export default Main;