import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Expenses from '../../../Assets/onboarding2.png'

function OnboardingExpensesScreen() {
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
                    height: '350px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img src={Expenses} alt="income" />
            </Box>
            <Box
                sx={{
                    mt: '-70px'
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
                    Track your expenses
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 400,
                        fontSize: '17px',
                        lineHeight: '25.5px',
                        color: '#001533',
                    }}
                >
                    With just your phone number, you can withdraw your funds at any point in time from any BankMe agent close to you.
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
                    <Box sx={{width: '34px', height: '12px', background: '#0066F6', borderRadius: '32px'}}></Box>
                    <Box sx={{width: '12px', height: '12px', background: '#c4c4c4', borderRadius: '50%'}}></Box>
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

export default OnboardingExpensesScreen
