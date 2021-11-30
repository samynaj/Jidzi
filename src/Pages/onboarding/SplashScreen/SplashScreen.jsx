import { Box } from '@mui/material'
import React from 'react'
import Logo from '../../../Assets/logo.png'

function SplashScreen() {
    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                background: '#ffffff',
                p:'20px',
                overflow: 'hidden'
            }}
        >
            <img
                src={Logo} 
                alt="logo" 
                width= '80%'
            />
        </Box>
    )
}

export default SplashScreen
