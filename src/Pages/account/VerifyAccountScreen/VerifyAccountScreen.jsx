import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { MdClear } from 'react-icons/md'

function VerifyAccountScreen() {
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
                    Verify account
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontSize: '15px',
                        lineHeight: '22.59px',
                        color: '#001533',
                    }}
                >
                    Please enter the CODE sent to your phone number in the boxes below.
                </Typography>
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '5px',
                    // mb: '20rem'
                }}
            >
                <input 
                    style={{ 
                        border: '1px solid #e4e4e4', 
                        borderRadius: '5px',
                        width: '50px',
                        height: '50px',
                        background: '#F2EFEF',
                        textAlign: 'center',
                        fontSize: '25px'
                    }}
                    type="number" 
                    placeholder="*"
                />
                <input 
                    style={{ 
                        border: '1px solid #e4e4e4', 
                        borderRadius: '5px',
                        width: '50px',
                        height: '50px',
                        background: '#F2EFEF',
                        textAlign: 'center',
                        fontSize: '25px'
                    }}
                    type="number" 
                    placeholder="*"
                />
                <input 
                    style={{ 
                        border: '1px solid #e4e4e4', 
                        borderRadius: '5px',
                        width: '50px',
                        height: '50px',
                        background: '#F2EFEF',
                        textAlign: 'center',
                        fontSize: '25px'
                    }}
                    type="number" 
                    placeholder="*"
                />
                <input 
                    style={{ 
                        border: '1px solid #e4e4e4', 
                        borderRadius: '5px',
                        width: '50px',
                        height: '50px',
                        background: '#F2EFEF',
                        textAlign: 'center',
                        fontSize: '25px'
                    }}
                    type="number" 
                    placeholder="*"
                />
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20px',
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
                    }}
                >
                    verify phone
                </Button>
            </Box>
        </Box>
    )
}

export default VerifyAccountScreen
