import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections } from "../content/sections";
import { SocialLinks } from "./SocialLinks";

export const MobileNav = ({activeSection}) => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
                buttonRef.current?.focus();
            }
        };

        document.addEventListener("keydown", closeOnEscape);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", closeOnEscape);
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    return (
        <div className="md:hidden">
            <button
                ref={buttonRef}
                aria-label="Toggle menu"
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Backdrop */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-40 bg-black/50"
                    />
                )}
            </AnimatePresence>

            {/* Sheet / Drawer */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        id="mobile-menu"
                        key="panel"
                        initial={{ y: -12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -12, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        aria-label="Primary navigation"
                        className="absolute left-0 right-0 top-full z-50 mx-3 mt-2 rounded-xl border border-white/10 bg-zinc-900 p-2 shadow-xl"
                    >
                        <ul className="flex flex-col gap-1">
                            {Object.entries(sections).map(([key, { icon: Icon, title, path }]) => (
                                <li key={key}>
                                    <a
                                        href={path}
                                        aria-current={activeSection === key ? "location" : undefined}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                                            activeSection === key
                                                    ? "bg-white/10 text-white"
                                                    : "text-gray-300 hover:text-[#00C8DC] hover:bg-white/5"
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="text-base">{title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Socials row */}
                        <div className="mt-2 border-t border-white/10 pt-2">
                            <SocialLinks isMobile />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};
