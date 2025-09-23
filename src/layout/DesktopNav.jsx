import {NavLink} from "react-router-dom";
import {SocialLinks} from "./SocialLinks";
import React from "react";
import {sections} from "../content/sections";

export const DesktopNav = () => {

    return (
        <div className="hidden md:flex flex-1 items-center justify-between ml-8">
            <nav className="flex space-x-1">
                {Object.entries(sections).map(([key, { icon: Icon, title, path }]) => (
                    <NavLink
                        key={key}
                        to={path}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                                isActive
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-400 hover:text-[#00C8DC] hover:bg-white/5'
                            }`
                        }
                    >
                        <Icon className="w-4 h-4" />
                        <span>{title}</span>
                    </NavLink>
                ))}
            </nav>
            <SocialLinks />
        </div>
    );
};