import React, {useState} from "react";
import {TerminalComponent} from "../components/TerminalComponent";
import {extendedStack} from "../content/personalInfo";
import {TechSkillsGrid} from "../components/TechSkillsGrid";


export const About = () => {

    const [showTechSkills, setShowTechSkills] = useState(false);
    const [isTypingTech, setIsTypingTech] = useState(false);

    return (
        <div>
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