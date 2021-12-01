import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { MdClear } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function SigninScreen() {
    const navigate = useNavigate()
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
            <MdClear fontSize='28px' onClick={() => navigate('/welcome')} />
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
                    Sign into your Account
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '22.59px',
                        color: '#001533',
                    }}
                >
                    Log into your BankMe account.
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
                <Typography
                    sx={{
                        color: '#001533',
                        fontSize: '15px',
                        lineHeight: '22.59px',
                    }}
                >
                    Have you forgotten your password?,
                </Typography>
                <Typography
                    sx={{
                        color: '#0066F6',
                        fontSize: '15px',
                        lineHeight: '22.59px',
                    }}
                    onClick={() => navigate('/forgot-password')}
                >
                    click here to recover it
                </Typography>
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
                    Log in
                </Button>
                <Typography
                    sx={{
                        color: '#001533',
                        fontSize: '15px',
                        lineHeight: '22.59px',
                    }}
                >
                    Don't have a Jidzi account? <span onClick={() => navigate('/signup')} style={{ color: '#0066F6' }} >Sign up here</span>
                </Typography>
            </Box>
        </Box>
    )
}

export default SigninScreen
