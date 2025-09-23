import { motion } from 'framer-motion';
import {socialLinks} from "../content/socials";


export const SocialLinks = ({ isMobile = false }) => {

    // animation
    const navConfig = {
        mobileMenuTransition: {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: 'auto' },
            exit: { opacity: 0, height: 0 }
        },
        iconAnimation: {
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.95 }
        }
    };

    return (
        <div className={`flex items-center ${isMobile ? 'justify-around w-full' : 'gap-2'}`}>
            {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...navConfig.iconAnimation}
                    className={`
            ${isMobile ? 'p-3 flex flex-col items-center gap-1' : 'p-2'}
            rounded-lg text-gray-400 ${color} hover:bg-white/5 transition-colors
          `}
                    title={label}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Icon className="w-5 h-5" />
                    {isMobile && <span className="text-xs">{label}</span>}
                </motion.a>
            ))}
        </div>
    );
};