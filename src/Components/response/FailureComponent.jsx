import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { ImCancelCircle } from 'react-icons/im'
import { useNavigate } from "react-router-dom"

function FailureComponent() {
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
            <ImCancelCircle fontSize='150px' color='#FF647C' />
            <Typography 
                sx={{
                    fontWeight: 700,
                    fontSize: '30px',
                    lineHeight: '42.3px',
                    color: '#001533'
                }}
            >
                Withdrawal failed!
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
                You do not have sufficient funds to complete this transaction, please select a lesser amount.
            </Typography>
            <Button
                sx={{
                    color: '#FF647C',
                    background: '#ffffff',
                    border: '1px solid #FF647C',
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    mb: '20px'
                }}
                onClick={() => navigate('/withdraw')}
            >
                Review withdrawal
            </Button>
        </Box>
    )
}

export default FailureComponent
