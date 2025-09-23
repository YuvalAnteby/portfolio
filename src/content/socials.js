import {Github, Linkedin, Mail} from "lucide-react";


export const social = {
    "github": "https://github.com/YuvalAnteby",
    "linkedin": "https://www.linkedin.com/in/yuval-anteby/",
    "email": "mailto:yuvalanteby.dev@gmail.com"
};

// Initialize socialLinks directly instead of using useState + useEffect
export const socialLinks = [
    {
        href: social?.github || "https://github.com",
        icon: Github,
        label: "GitHub",
        color: "hover:text-[#2DA44E]"  // GitHub color
    },
    {
        href: social?.linkedin || "https://linkedin.com",
        icon: Linkedin,
        label: "LinkedIn",
        color: "hover:text-[#0A66C2]"  // LinkedIn color
    },
    {
        href: social?.email || "mailto:example@example.com",
        icon: Mail,
        label: "Email",
        color: "hover:text-[#00C8DC]"  // Matching site theme
    }
];