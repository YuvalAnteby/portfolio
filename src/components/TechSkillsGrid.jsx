import React from 'react';
import { motion } from 'framer-motion';
import { TechSkillCard } from './TechSkillCard';

export const TechSkillsGrid = ({ extendedStack }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-6xl mx-auto mt-8 p-6"
        >

            {/* Categories */}
            <div className="space-y-8">
                {extendedStack.map((category, categoryIndex) => (
                    // Only render categories that have skills
                    category.stack && category.stack.length > 0 && (
                        <motion.div
                            key={category.name}
                            variants={categoryVariants}
                            className="space-y-4"
                        >
                            {/* Category Title */}
                            <div className="flex items-center space-x-3">
                                <span className="text-[#00FF33] text-lg font-mono">➜</span>
                                <h3 className="text-xl font-semibold text-[#06b6d4] font-mono">
                                    {category.name}
                                </h3>
                                <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
                            </div>

                            {/* Skills Row */}
                            <div className="flex flex-wrap gap-4 justify-start">
                                {category.stack.map((skill, skillIndex) => (
                                    <TechSkillCard
                                        key={skill.name}
                                        skill={skill}
                                        index={skillIndex}
                                        categoryIndex={categoryIndex}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )
                ))}
            </div>
        </motion.div>
    );
};