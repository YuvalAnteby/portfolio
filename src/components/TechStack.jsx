import React from "react";
import {techStack} from "../content/personalInfo";

export const TechStack = () => {

    return (
        <ul className="mt-5 md:mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-white/60">
            {techStack.map(t => (
                <li key={t} className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">
                    {t}
                </li>
            ))}
        </ul>
    );
};