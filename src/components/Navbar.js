import React from "react";
import {Button, Stack} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from '@mui/icons-material/Code';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navItems = [
        {label: 'Main', icon: <HomeIcon />},
        {label: 'About Me', icon: <PersonIcon />},
        {label: 'Projects', icon: <CodeIcon />},
        {label: 'Experience', icon: <WorkIcon />},
    ];

    // Navigate to the selected page
    const navigate = useNavigate();
    const handleClick = (item) => {
        if (item.label === "Main") {
            navigate("/");
        } else {
            navigate(`/${item.label}`);
        }
    }

    return (
        <Stack
        direction="row"
        spacing={1}>
            {navItems.map((item, i) => (
                <Button
                    key={i}
                    variant="text"
                    startIcon={item.icon}
                    onClick={() => handleClick(item)}
                >
                    {item.label}
                </Button>
            ))}

        </Stack>
    );
};

export default Navbar;