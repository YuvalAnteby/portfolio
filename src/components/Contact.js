import React from 'react';
import {Button, Stack, Tooltip} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Mail} from "@mui/icons-material";

const Contact = () => {
    const contactLinks = [
        {label: 'GitHub', icon: <GitHubIcon/>, url: 'https://github.com/YuvalAnteby'},
        {label: 'LinkedIn', icon: <LinkedInIcon/>, url: 'https://www.linkedin.com/in/yuval-anteby/'},
        {label: 'Email', icon: <Mail/>, url: 'mailto:yuvala2001@gmail.com'},
    ];

    // Open in a new tab the selected contact option
    const handleClick = (item) => {
        window.open(`${item.url}`, '_blank', 'noopener,noreferrer');

    }

    return (
        <Stack direction="row" spacing={0}>
            {contactLinks.map((item, i) => (
                <Tooltip title={item.label} arrow>
                    <Button
                        key={i}
                        variant="text"
                        aria-label={item.label}
                        sx={{minWidth: '50px', padding: 1}}
                        onClick={() => {
                            handleClick(item)
                        }}
                    >
                        {item.icon}
                    </Button>
                </Tooltip>

            ))}
        </Stack>
    );
};

export default Contact;
