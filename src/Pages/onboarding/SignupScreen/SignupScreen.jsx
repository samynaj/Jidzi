import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { MdClear } from 'react-icons/md'

function SignupScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'left',
                gap: '75px',
                width: '100%',
                height: '100%',
                background: '#ffffff',
                p:'46.42px 20px 20px',
                overflowX: 'hidden'
            }}
        >
            <MdClear fontSize='28px' />
            <Box>
                <Typography 
                    sx={{
                        fontWeight: 700,
                        fontSize: '35px',
                        lineHeight: '52.71px',
                        color: '#0066F6',
                        mb: '7px'
                    }}
                >
                    Create Account
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '22.59px',
                        color: '#001533',
                    }}
                >
                    Open a Jidzi account with a few details.
                </Typography>
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px'
                }}
            >
                <label 
                    style={{ 
                        color: '#001533', 
                        fontSize: '15px',
                        lineHeight: '20px'
                    }} 
                    htmlFor='name'
                >
                    Full name
                </label>
                <input 
                    style={{ 
                        border: '1px solid #e4e4e4', 
                        borderRadius: '5px',
                        height: '50px',
                        padding: '16px',
                        marginBottom: '10px'
                    }} 
                    id='name' 
                    type="text" 
                    placeholder='Joseph Kalu' 
                />
                <label 
                    style={{ 
                        color: '#001533', 
                        fontSize: '15px',
                        lineHeight: '20px'
                    }} 
                    htmlFor='phone'
                >
                    Phone number
                </label>
                <input 
                    style={{ 
                        border: '1px solid #e4e4e4', 
                        borderRadius: '5px',
                        height: '50px',
                        padding: '16px',
                        marginBottom: '10px'
                    }}
                    id='phone' 
                    type="text" 
                    placeholder='+ 234 808 762 1236' 
                />
                <label
                    style={{ 
                        color: '#001533', 
                        fontSize: '15px',
                        lineHeight: '20px'
                    }}  
                    htmlFor='password'
                >
                    Password
                </label>
                <input 
                    style={{ 
                        border: '1px solid #e4e4e4', 
                        borderRadius: '5px',
                        height: '50px',
                        padding: '16px',
                        marginBottom: '10px'
                    }}
                    id='password'
                    type="password" 
                    placeholder='********' 
                />
                <label
                    style={{ 
                        color: '#001533', 
                        fontSize: '15px',
                        lineHeight: '20px'
                    }}  
                    htmlFor='repeat'
                >
                    Repeat password
                </label>
                <input
                    style={{ 
                        border: '1px solid #e4e4e4', 
                        borderRadius: '5px',
                        height: '50px',
                        padding: '16px',
                        marginBottom: '10px'
                    }} 
                    id='repeat' 
                    type="password" 
                    placeholder='********' 
                />
            </Box>
            <Box>
                <Button
                    sx={{
                        color: '#ffffff',
                        background: '#0066F6',
                        width: '100%',
                        height: '50px',
                        borderRadius: '5px',
                        mb: '20px'
                    }}
                >
                    Create your account
                </Button>
                <Typography
                    sx={{
                        color: '#001533',
                        fontSize: '15px',
                        lineHeight: '22.59px',
                    }}
                >
                    Do you already have a Jidzi account? <span style={{ color: '#0066F6' }} >Sign in here</span>
                </Typography>
            </Box>
        </Box>
    )
}

export default SignupScreen
