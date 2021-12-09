import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

function TermsAndConditionsScreen() {
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
                    Terms and Conditions
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    textAlign: 'center'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '17px',
                        lineHeight: '22px',
                        color: '#0066F6'
                    }}
                >
                   Review Terms & Conditions
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
                    We only retain collected information for as long as necessary to provide you with your requested service. 
                </Typography>
                <Typography
                    sx={{
                        fontSize: '17px',
                        lineHeight: '22px',
                        color: '#0066F6'
                    }}
                >
                   Terms & Condition
                </Typography>
                <Typography
                    sx={{
                        fontSize: '17px',
                        lineHeight: '22px',
                        color: '#0066F6'
                    }}
                >
                   Privacy policy
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

export default TermsAndConditionsScreen
