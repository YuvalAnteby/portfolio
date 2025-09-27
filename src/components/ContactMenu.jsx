import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy } from "lucide-react";
import { social } from "../content/socials";
import { personalInfo } from "../content/personalInfo";

export const ContactMenu = () => {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const wrapperRef = useRef(null);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {}
    };

    // Close when clicking outside
    useEffect(() => {
        const handleClick = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClick);
        } else {
            document.removeEventListener("mousedown", handleClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [open]);

    return (
        <div ref={wrapperRef} className="relative">
            {/* Trigger button */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={open}
                className={
                    "inline-flex items-center gap-2 rounded-xl px-5 py-3 md:px-6 md:py-3.5 font-medium " +
                    "ring-1 ring-cyan-400/40 text-cyan-300 bg-white/5 hover:bg-white/10 backdrop-blur " +
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition"
                }
            >
                <Mail className="h-5 w-5" />
                Contact Me
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-64 rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-lg p-1 z-50"
                    >
                        <a
                            href={social.email}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition text-sm"
                            onClick={() => setOpen(false)}
                        >
                            <Mail className="h-4 w-4" />
                            <span>Open default Mail app</span>
                        </a>
                        <button
                            className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition text-sm"
                            onClick={copyEmail}
                        >
                            <Copy className="h-4 w-4" />
                            <span>{copied ? "Copied!" : "Copy email address"}</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
