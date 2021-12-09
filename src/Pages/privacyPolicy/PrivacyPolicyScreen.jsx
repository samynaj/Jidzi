import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

function PrivacyPolicyScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'left',
                gap: '50px',
                width: '100%',
                height: '100%',
                background: '#ffffff',
                p:'46.42px 20px 20px',
                overflowX: 'hidden'
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    gap: '32.58px'
                }}
            >
                <MdOutlineArrowBackIosNew />
                <Typography 
                    sx={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#001533',
                        lineHeight: '22px'
                    }}
                >
                    Privacy Policy
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '17px',
                        lineHeight: '22px',
                        color: '#0066F6'
                    }}
                >
                    Privacy Policy
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    Your privacy is important to us. It is Brainstorming's policy to respect your privacy regarding any information we may collect from you across our <b>website</b>, and other sites we own and operate. 
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                </Typography>
                <Typography
                    sx={{
                        fontSize: '15px',
                        fontWeight: 400,
                        lineHeight: '22px',
                        letterSpacing: '0.5px',
                        color: '#999999'
                    }}
                >
                    This policy is effective as of 5 November 2019.
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
            >
                <Button
                    sx={{
                        height: '50px',
                        background: '#0066F6',
                        color: '#ffffff',
                        borderRadius: '5px'
                    }}
                >
                    I Agree
                </Button>
                <Button
                    sx={{
                        height: '50px',
                        background: '#ffffff',
                        color: '#001533',
                        border: '1px solid #666666',
                        borderRadius: '5px'
                    }}
                >
                    I Disagree
                </Button>
            </Box>
            
        </Box>
    )
}

export default PrivacyPolicyScreen
