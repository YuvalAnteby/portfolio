import {useEffect, useState} from "react";
import {useTypingEffect} from "../hooks/useTypingEffect";
import {FastForward, X, Minus, Plus} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';

export const TerminalComponent = ({mdFilePath}) => {
    const [aboutContent, setAboutContent] = useState('');
    const {displayedContent, setIsTyping, setDisplayedContent} = useTypingEffect(aboutContent);
    const [showSkipButton, setShowSkipButton] = useState(false);

    /** text to appear the start of the terminal ALWAYS */
    const terminalPrefixText = '➜ YuvalAnteby.dev/aboutme ~ % cat aboutme.md ';

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
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkipButton(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleSkip = () => {
        setIsTyping(false);
        setDisplayedContent(aboutContent);
        setShowSkipButton(false);
    };

    return (
        <motion.div
            key="about"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="max-w-2xl mx-auto relative flex flex-col items-center"
        >
            <div className="terminal-window bg-gray-900 rounded-lg p-4 border border-[#00FF33]/30 w-full">
                {/* mac affect */}
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
                    <span className="text-green-500">{terminalPrefixText}</span>
                    <span>{displayedContent}</span>
                    <span className="inline-block w-2 h-4 bg-white/50 animate-pulse ml-1"/>
                </div>
            </div>

            <AnimatePresence>
                {showSkipButton && displayedContent !== aboutContent && (
                    <motion.button
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        onClick={handleSkip}
                        className="mt-6 px-4 py-2 bg-green-600 hover:bg-green-500
                     rounded-full flex items-center gap-2 text-white shadow-lg
                     hover:shadow-[#00FF33]/40 transition-all duration-300"
                    >
                        <FastForward className="w-4 h-4"/>
                        <span>Skip Typing</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
};