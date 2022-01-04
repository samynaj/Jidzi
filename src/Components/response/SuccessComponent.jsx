import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import { useNavigate } from "react-router-dom"

function SuccessComponent({type, amount}) {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '50px',
                width: '100%',
                height: '100vh',
                background: '#ffffff',
                p:'20px',
                overflowX: 'hidden'
            }}
        >
            <BsCheck2Circle fontSize='150px' color='#16BE81' />
            <Typography 
                sx={{
                    fontWeight: 700,
                    fontSize: '30px',
                    lineHeight: '42.3px',
                    color: '#001533'
                }}
            >
                Congratulations!
            </Typography>
            <Typography
                sx={{
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '20px',
                    color: '#999999',
                    mb: '172px',
                    textAlign: 'center'
                }}
            >
                Your order for {amount} {type} was placed successfully! A text message will be sent to your phone containing the ORDER NUMBER of your transaction, phone number and address of the nearest agent to complete your transaction.
            </Typography>
            <Button
                sx={{
                    color: '#ffffff',
                    background: '#16BE81',
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    mb: '20px'
                }}
                onClick={() => navigate('/dashboard')}
            >
                close
            </Button>
        </Box>
    )
}

export default SuccessComponent
