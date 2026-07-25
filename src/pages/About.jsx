import React, {useState} from "react";
import {TerminalComponent} from "../components/TerminalComponent";
import {extendedStack} from "../content/personalInfo";
import {TechSkillsGrid} from "../components/TechSkillsGrid";


export const About = () => {

    const [showTechSkills, setShowTechSkills] = useState(false);
    const [isTypingTech, setIsTypingTech] = useState(false);

    return (
        <div className="px-4 md:px-6">
            <div className="mb-10 max-w-2xl">
                <h2 className="font-mono mt-3 text-3xl md:text-5xl font-bold tracking-[-0.03em] text-[#00FF33]">About Me</h2>
            </div>
            <TerminalComponent
                mdFilePath={'/portfolio/aboutme.md'}
                commandText={'➜ YuvalAnteby.dev/aboutme ~ % cat aboutme.md '}
                secondCommandText={'➜ YuvalAnteby.dev/aboutme ~ % open tech-skills.app '}
                secondCommandOutputText={'\nLaunching Tech Skills GUI...\n[ OK ] Modules loaded'}
                showTechSkills={showTechSkills}
                setShowTechSkills={setShowTechSkills}
                setIsTypingTechSkills={setIsTypingTech}
            />

            {showTechSkills && !isTypingTech && (
                <TechSkillsGrid extendedStack={extendedStack} />
            )}
        </div>
    );
};
