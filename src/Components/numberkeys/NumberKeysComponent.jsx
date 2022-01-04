import { Box } from '@mui/material'
import React from 'react'
import { RiDeleteBack2Fill } from 'react-icons/ri'

function NumberKeysComponent() {
    return (
        <Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '50px'
                }}
            >
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={1}
                >
                    1
                </Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={2}>2</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={3}>3</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={4}>4</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={5}>5</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={6}>6</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={7}>7</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={8}>8</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={9}>9</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={'.'}>.</Box>
                <Box 
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }} 
                    value={0}>0</Box>
                <Box
                    sx={{
                        fontSize: '42px',
                        lineHeight: '42.25px',
                        color: '#001533'
                    }}
                >
                    <RiDeleteBack2Fill />
                </Box>
            </Box>
        </Box>
    )
}

export default NumberKeysComponent
