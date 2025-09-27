import {useEffect, useState} from "react";
import {useTypingEffect} from "../hooks/useTypingEffect";
import {FastForward, X, Minus, Plus, Terminal} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

export const TerminalComponent = ({
                                      mdFilePath,
                                      commandText,
                                      secondCommandText,
                                      secondCommandOutputText,
                                      showTechSkills,
                                      setShowTechSkills,
                                      setIsTypingTechSkills,
                                  }) => {
    // 1. ABOUT block
    const [aboutContent, setAboutContent] = useState('');
    const {
        displayedContent: aboutDisplayed,
        isTyping: isTypingAbout,
        setIsTyping: setIsTypingAbout,
        setDisplayedContent: setDisplayedAbout
    } = useTypingEffect(aboutContent);

    const [techContent, setTechContent] = useState('');
    const {
        displayedContent: techDisplayed,
        isTyping: isTypingTech,
        setIsTyping: setIsTypingTech,
    } = useTypingEffect(showTechSkills ? techContent : '');

    // shared UI
    const [showSkipButton, setShowSkipButton] = useState(false);

    // fetch ABOUT .md file
    useEffect(() => {
        const fetchAboutMe = async () => {
            try {
                const response = await fetch(mdFilePath);
                const text = await response.text();
                setAboutContent(text);
            } catch (error) {
                console.error('Error reading aboutme.md:', error);
                setAboutContent('Error loading content...');
            }
        };
        fetchAboutMe();
    }, [mdFilePath]);

    // show skip after a beat
    useEffect(() => {
        const timer = setTimeout(() => setShowSkipButton(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // start typing the command, then show the skills
    const handleShowTechSkills = async () => {
        if (!secondCommandText) return;
        setTimeout(() => setTechContent(secondCommandOutputText), 150);
        setShowTechSkills(true);

    };

    // Skip typing for whichever is currently typing
    const handleSkip = () => {
        if (isTypingAbout) {
            setIsTypingAbout(false);
            setDisplayedAbout(aboutContent);
        }
        if (isTypingTech) {
            setIsTypingTech(false);
        }
        setShowSkipButton(false);
    };

    // update the parent with typing tech status
    useEffect(() => {
        setIsTypingTechSkills(isTypingTech);
    }, [isTypingTech]);

    return (
        <motion.div
            key="about"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="max-w-2xl mx-auto relative flex flex-col items-center"
        >
            <div className="terminal-window bg-gray-900 rounded-lg p-4 border border-[#00FF33]/30 w-full">
                {/* mac effect */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 relative group flex items-center justify-center">
                        <X
                            className="absolute w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            strokeWidth={3}
                        />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 relative group flex items-center justify-center">
                        <Minus
                            className="absolute w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            strokeWidth={3}
                        />
                    </div>
                    <div className="w-3 h-3 rounded-full bg-green-500 relative group flex items-center justify-center">
                        <Plus
                            className="absolute w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                            strokeWidth={3}
                        />
                    </div>
                </div>

                <div className="font-mono text-gray-300 whitespace-pre-line min-h-[100px] pt-3">
                    <span className="text-green-500">{commandText}</span>
                    <span>{aboutDisplayed}</span>
                    {isTypingAbout && <span className="inline-block w-2 h-4 bg-white/50 animate-pulse ml-1"/>}
                </div>

                {/* BLOCK 2: TECH SKILLS COMMAND (shows after click) */}
                {showTechSkills && (
                    <div className="font-mono text-gray-300 whitespace-pre-line pt-4">
                        <span className="text-green-500">{secondCommandText ?? ''}</span>
                        <span>{techDisplayed}</span>
                        {isTypingTech && <span className="inline-block w-2 h-4 bg-white/50 animate-pulse ml-1"/>}
                    </div>
                )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
                <AnimatePresence>
                    {showSkipButton && isTypingAbout && (
                        <motion.button
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -20}}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            onClick={handleSkip}
                            className="px-4 py-2 bg-green-600 hover:bg-green-500
                         rounded-full flex items-center gap-2 text-white shadow-lg
                         hover:shadow-[#00FF33]/40 transition-all duration-300"
                        >
                            <FastForward className="w-4 h-4"/>
                            <span>Skip Typing</span>
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* Tech Skills Button - only show after about content is fully loaded and not already showing tech skills */}
                {!isTypingAbout && !showTechSkills && (
                    <motion.button
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        onClick={handleShowTechSkills}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500
                     rounded-full flex items-center gap-2 text-white shadow-lg
                     hover:shadow-blue-400/40 transition-all duration-300"
                    >
                        <Terminal className="w-4 h-4"/>
                        <span>Show Tech Skills</span>
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};