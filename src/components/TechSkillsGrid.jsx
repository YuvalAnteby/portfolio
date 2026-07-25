import React from 'react';
import {motion} from 'framer-motion';

export const TechSkillsGrid = ({extendedStack}) => (
    <motion.div
        initial={{opacity: 0, y: 16}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.35}}
        className="mx-auto mt-8 max-w-4xl border-y border-white/10"
    >
        {extendedStack.map((category) => category.stack?.length > 0 && (
            <div
                key={category.name}
                className="grid gap-3 border-b border-white/10 px-2 py-5 last:border-b-0 sm:grid-cols-[12rem_1fr] sm:items-start sm:px-4"
            >
                <h3 className="font-mono text-sm font-semibold text-[#00FF33]">{category.name}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {category.stack.map((skill) => {
                        const label = (
                            <>
                                {skill.icon && (
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white/90 p-0.5" aria-hidden="true">
                                        <img src={skill.icon} alt="" loading="lazy" className="h-full w-full object-contain"/>
                                    </span>
                                )}
                                <span>{skill.name}</span>
                            </>
                        );

                        return skill.url ? (
                            <a
                                key={skill.name}
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 text-sm text-cyan-100 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                            >
                                {label}
                            </a>
                        ) : (
                            <span key={skill.name} className="inline-flex min-h-11 items-center gap-2 text-sm text-cyan-50/70">
                                {label}
                            </span>
                        );
                    })}
                </div>
            </div>
        ))}
    </motion.div>
);
