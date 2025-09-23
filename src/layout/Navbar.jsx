import React from "react";
import {motion} from 'framer-motion';
import {Link} from "react-router-dom";
import {Terminal} from "lucide-react";
import {DesktopNav} from "./DesktopNav";

const Navbar = () => {

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{x: -50, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                    >
                        <Link to="/" className="flex items-center space-x-2">
                            <Terminal className="w-6 h-6" style={{color: "00FF33"}}/>
                            <span
                                className="text-xl font-mono font-bold hover:text-[#00C8DC] transition-colors">Yuval.dev</span>
                        </Link>
                    </motion.div>
                    <DesktopNav/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
