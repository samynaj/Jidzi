import { Box, Button } from '@mui/material'
import React from 'react'
import NumberKeysComponent from '../../Components/numberkeys/NumberKeysComponent'
import { useNavigate } from "react-router-dom"
// import FailureComponent from '../../Components/response/FailureComponent'
// import SuccessComponent from '../../Components/response/SuccessComponent'

function SuccesPageScreen() {
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
            <NumberKeysComponent />
            <Button
                sx={{
                    color: '#ffffff',
                    background: '#0066F6',
                    width: '100%',
                    height: '50px',
                    borderRadius: '5px',
                    mb: '20px'
                }}
                onClick={() => navigate('/withdraw')}
            >
                continue
            </Button>
        </Box>
    )
}

export default SuccesPageScreen
