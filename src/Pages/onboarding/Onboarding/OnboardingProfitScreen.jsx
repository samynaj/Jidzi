import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Profit from '../../../Assets/onboarding3.png'

function OnboardingProfitScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'left',
                gap: '30px',
                width: '100%',
                height: '100%',
                background: '#ffffff',
                p:'46.42px 20px 20px',
                overflowX: 'hidden'
            }}
        >
            <Box alignSelf='end'>
                Skip
            </Box>
            <Box 
                sx={{
                    height: '400px',
                    // ml: '-22px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img src={Profit} alt="income" />
            </Box>
            <Box
                sx={{
                    mt: '-70px',
                }}
            >
                <Typography 
                    sx={{
                        fontWeight: 700,
                        fontSize: '30px',
                        lineHeight: '52.71px',
                        color: '#001533',
                        mb: '7px'
                    }}
                >
                    View your profits
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontSize: '17px',
                        lineHeight: '25.5px',
                        color: '#001533',
                    }}
                >
                    Get access to risk free investments that will multiply your income and pay high returns in few months.
                </Typography>
            </Box>
            <Box
                sx={{
                    position: 'fixed',
                    bottom: '10px',
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        gap: '5px'
                    }}
                >
                    <Box sx={{width: '12px', height: '12px', background: '#c4c4c4', borderRadius: '50%'}}></Box>
                    <Box sx={{width: '12px', height: '12px', background: '#c4c4c4', borderRadius: '50%'}}></Box>
                    <Box sx={{width: '34px', height: '12px', background: '#0066F6', borderRadius: '32px'}}></Box>
                </Box>
                <Button
                    sx={{
                        color: '#ffffff',
                        background: '#0066F6',
                        width: '138px',
                        height: '50px',
                        borderRadius: '5px',
                        mb: '0px'
                    }}
                >
                    next
                </Button>
            </Box>
        </Box>
    )
}

export default OnboardingProfitScreen
