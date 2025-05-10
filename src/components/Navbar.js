import React from "react";
import {Box, Button, Stack} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person'
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from '@mui/icons-material/Code';
import {useLocation, useNavigate} from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        {label: 'Main', icon: <HomeIcon/>, path: ''},
        {label: 'About Me', icon: <PersonIcon/>, path: 'about-me'},
        {label: 'Projects', icon: <CodeIcon/>, path: 'projects'},
        {label: 'Experience', icon: <WorkIcon/>, path: 'experience'},
    ];

    // Navigate to the selected page
    const handleClick = (item) => {
        navigate(`/${item.path}`);

    }

    // Styling for the buttons
    const navButtonStyle = (item) => (
        {
            borderRadius: 2,
            fontWeight: 'medium',
            px: 2,
            py: 1,
            backdropFilter: item ? 'blur(6px)' : 'none',
            color: 'text.primary',
            backgroundColor: /* frost effect */
                item ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
            boxShadow:
                item ? '0 0 10px rgba(255, 255, 255, 0.1)' : 'none',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                backgroundColor:
                    item ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)',
            },
        }
    )

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 1,
                backgroundColor: 'background.paper',
                boxShadow: 1,
                zIndex: 1100,
                top: 0,
            }}>
            <Stack
                direction="row"
                spacing={1}>
                {navItems.map((item, i) => (
                    <Button
                        key={i}
                        startIcon={item.icon}
                        component="nav"
                        variant={location.pathname === `/${item.path}` ? 'contained' : 'text'}
                        sx={navButtonStyle(location.pathname === `/${item.path}`)}
                        onClick={() => handleClick(item)}
                    >
                        {item.label}
                    </Button>
                ))}
            </Stack>
            <Contact/>
        </Box>
    );
};

export default Navbar;