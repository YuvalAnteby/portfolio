import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy } from "lucide-react";
import { social } from "../content/socials";
import { personalInfo } from "../content/personalInfo";

export const ContactMenu = () => {
    const [open, setOpen] = useState(false);
    const [copyStatus, setCopyStatus] = useState(null);
    const wrapperRef = useRef(null);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(personalInfo.email);
            setCopyStatus("copied");
            setTimeout(() => setCopyStatus(null), 1500);
        } catch {
            setCopyStatus("error");
        }
    };

    // Close when clicking outside
    useEffect(() => {
        const handleClick = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        if (open) {
            document.addEventListener("mousedown", handleClick);
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    return (
        <div ref={wrapperRef} className="relative">
            {/* Trigger button */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="contact-options"
                className={
                    "inline-flex items-center gap-2 rounded-xl px-5 py-3 md:px-6 md:py-3.5 font-medium " +
                    "ring-1 ring-cyan-400/40 text-cyan-300 bg-white/5 hover:bg-white/10 " +
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
                        id="contact-options"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-64 rounded-xl border border-white/10 bg-zinc-900 shadow-lg p-1 z-50"
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
                            <span>{copyStatus === "copied" ? "Copied!" : "Copy email address"}</span>
                        </button>
                        <p className="sr-only" aria-live="polite">
                            {copyStatus === "copied" && "Email address copied to clipboard."}
                            {copyStatus === "error" && "Copy failed. Use the mail app link instead."}
                        </p>
                        {copyStatus === "error" && (
                            <p className="px-3 pb-2 text-xs text-red-200">Copy failed. Use the mail app link instead.</p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
