import { Box, Typography } from '@mui/material'
import React from 'react'
import { VscArrowSwap } from 'react-icons/vsc'
import { GoFileDirectory } from 'react-icons/go'


function NotificationItemComponent({ withdraw, details, time}) {
    return (
        <Box 
            sx={{
                display: 'flex',
                gap: '14px',
                p: '30px'
            }}
        >
            <Box
                sx={{
                    w: '38px',
                    h: '38px',
                    background: '#FFFFFF',
                    opacity: '1',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
               {
                   withdraw? <VscArrowSwap color='#FD9101' fontSize='20px' /> : <GoFileDirectory color='#0066F6' fontSize='20px'/>
               } 
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        lineHeight: '16.7px',
                        fontWeight: 700,
                        color: '#001533'
                    }}
                >
                    {details}
                </Typography>
                <Typography
                    sx={{
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '14.03px',
                        color: '#222222',
                        opacity: '0.4'
                    }}
                >
                    {time}
                </Typography>
            </Box>
        </Box>
    )
}

export default NotificationItemComponent
