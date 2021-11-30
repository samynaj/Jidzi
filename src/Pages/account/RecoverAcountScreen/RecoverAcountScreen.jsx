import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { MdClear } from 'react-icons/md'

function RecoverAcountScreen() {
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
                    Recover password
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '22.59px',
                        color: '#001533',
                    }}
                >
                    Please enter your new password to continue
                </Typography>
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    mb: '180px'
                }}
            >
                <label
                    style={{ 
                        color: '#001533', 
                        fontSize: '15px',
                        lineHeight: '20px'
                    }}  
                    htmlFor='password'
                >
                    New password
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
                    Change password
                </Button>
            </Box>
        </Box>
    )
}

export default RecoverAcountScreen
