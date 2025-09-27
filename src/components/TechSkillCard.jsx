import React from 'react';
import {motion} from 'framer-motion';

export const TechSkillCard = ({
                                  skill,
                                  index = 0,
                                  categoryIndex = 0,
                              }) => {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
            rotateY: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.5,
                delay: categoryIndex * 0.1 + index * 0.08,
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            scale: 1.05,
            y: -8,
            rotateY: 5,
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 200
            }
        }
    };

    const iconVariants = {
        hover: {
            rotate: [0, -10, 10, -5, 5, 0],
            scale: 1.1,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };

    const glowVariants = {
        initial: {opacity: 0},
        hover: {
            opacity: 0.8,
            transition: {duration: 0.3}
        }
    };

    // Fallback icon component if image fails to load
    const FallbackIcon = ({name, color}) => (
        <div
            className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
            style={{
                background: `linear-gradient(135deg, ${color}, ${color}dd)`,
                boxShadow: `0 4px 20px ${color}40`
            }}
        >
            {name.charAt(0)}
        </div>
    );

    return (
        <motion.a
            title={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer w-40 min-w-[10rem] max-w-[12rem]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            {/* Glow effect */}
            <motion.div
                variants={glowVariants}
                className="absolute inset-0 rounded-2xl blur-sm opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                style={{
                    background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}20)`,
                }}
            />

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6
                          border border-gray-700 group-hover:border-gray-600
                          shadow-lg group-hover:shadow-2xl
                          backdrop-blur-sm transition-all duration-300
                          overflow-hidden h-[9.25rem]">

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"/>
                    <div
                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"/>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    {/* Icon container */}
                    <motion.div
                        variants={iconVariants}
                        className="relative"
                    >
                        {skill.icon ? (
                            <>
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-16 h-16 object-contain filter drop-shadow-lg
                                             group-hover:brightness-110 transition-all duration-300"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hidden">
                                    <FallbackIcon name={skill.name} color={skill.color}/>
                                </div>
                            </>
                        ) : (
                            <FallbackIcon name={skill.name} color={skill.color}/>
                        )}

                        {/* Subtle icon glow */}
                        <div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"
                            style={{backgroundColor: skill.color}}
                        />
                    </motion.div>

                    {/* Skill name */}
                    <div className="space-y-2">
                        <h3 className={
                            `font-semibold text-white group-hover:text-gray-100 transition-colors duration-300
                             leading-tight ${skill.name.length > 15 ? "text-sm truncate max-w-[8rem]" : "text-lg"}`}>
                            {skill.name}
                        </h3>
                    </div>
                </div>

                {/* Hover shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
                             -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{x: '-100%'}}
                    whileHover={{
                        x: '200%',
                        transition: {duration: 0.8, ease: "easeInOut"}
                    }}
                />
            </div>
        </motion.a>
    );
};