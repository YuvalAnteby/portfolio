import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { sections } from "../content/sections";
import { SocialLinks } from "./SocialLinks";

export const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <div className="md:hidden">
            <button
                aria-label="Toggle menu"
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
                        className="absolute left-0 right-0 top-full z-50 mx-3 mt-2 rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur-xl p-2"
                    >
                        <ul className="flex flex-col gap-1">
                            {Object.entries(sections).map(([key, { icon: Icon, title, path }]) => (
                                <li key={key}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                                                isActive
                                                    ? "bg-white/10 text-white"
                                                    : "text-gray-300 hover:text-[#00C8DC] hover:bg-white/5"
                                            }`
                                        }
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="text-base">{title}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* Socials row */}
                        <div className="mt-2 border-t border-white/10 pt-2">
                            <SocialLinks />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
};
