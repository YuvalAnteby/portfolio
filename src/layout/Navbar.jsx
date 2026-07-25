import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import {useLocation} from "react-router-dom";
import { Terminal } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import {sections} from "../content/sections";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const {hash} = useLocation();

    useEffect(() => {
        const section = hash.slice(1);
        if (sections[section]) setActiveSection(section);
    }, [hash]);

    useEffect(() => {
        const elements = Object.keys(sections)
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                const active = entries.find((entry) => entry.isIntersecting);
                if (active) setActiveSection(active.target.id);
            },
            {rootMargin: "-20% 0px -40% 0px"}
        );

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 h-16 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-12xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                        <a href="#home" className="flex items-center gap-2">
                            <Terminal className="w-6 h-6" style={{ color: "#00FF33" }} />
                            <span className="text-xl font-mono font-bold hover:text-[#00C8DC] transition-colors">
                Yuval.dev
              </span>
                        </a>
                    </motion.div>

                    <DesktopNav activeSection={activeSection}/>
                    <MobileNav activeSection={activeSection}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
