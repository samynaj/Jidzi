import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom"

function WelcomeScreen() {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                background: '#ffffff',
                p:'20px',
                overflowX: 'hidden'
            }}
        >
            <Typography 
                sx={{
                    fontWeight: 700,
                    fontSize: '30px',
                    lineHeight: '42.3px',
                    color: '#001533'
                }}
            >
                Welcome to Jidzi
            </Typography>
            <Typography
                sx={{
                    fontWeight: 400,
                    fontSize: '17px',
                    lineHeight: '25.5px',
                    color: '#001533',
                    mb: '172px'
                }}
            >
                #1 business growth partner
            </Typography>
            <Button
                sx={{
                    color: '#ffffff',
                    background: '#0066F6',
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    mb: '20px'
                }}
                onClick={() => navigate('/signup')}
            >
                create your free account
            </Button>
            <Button
                sx={{
                    color: '#001533',
                    background: '#ffffff',
                    width: '100%',
                    height: '50px',
                    border: '1px solid #999999',
                    borderRadius: '5px'
                }}
                onClick={() => navigate('/signin')}
            >
                log into your account
            </Button>
        </Box>
    )
}

export default WelcomeScreen
