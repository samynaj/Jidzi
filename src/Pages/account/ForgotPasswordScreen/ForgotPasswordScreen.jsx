import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { MdClear } from 'react-icons/md'

function ForgotPasswordScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'left',
                gap: '65px',
                width: '100%',
                height: '100%',
                background: '#ffffff',
                p:'46.42px 20px 20px',
                overflowX: 'hidden'
            }}
        >
            <MdClear fontSize='30px' />
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
                    Forgot password?
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '22.59px',
                        color: '#001533',
                    }}
                >
                    Please enter your phone number to recover your password.
                </Typography>
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '5px',
                    mb: '20rem'
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
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '90%'
                }}
            >
                <Button
                    sx={{
                        color: '#ffffff',
                        background: '#0066F6',
                        width: '100%',
                        height: '50px',
                        borderRadius: '5px',
                        mb: '10px'
                    }}
                >
                    Recover password
                </Button>
            </Box>
        </Box>
    )
}

export default ForgotPasswordScreen
