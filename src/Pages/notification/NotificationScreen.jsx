import { Box, Typography } from '@mui/material'
import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import NotificationDayComponent from '../../Components/notification/NotificationDayComponent'

function NotificationScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'left',
                gap: '50px',
                width: '100%',
                height: '100%',
                background: '#ffffff',
                p:'46.42px 20px 20px',
                overflowX: 'hidden'
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    gap: '32.58px'
                }}
            >
                <MdOutlineArrowBackIosNew />
                <Typography 
                    sx={{
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#001533',
                        lineHeight: '22px'
                    }}
                >
                    Notification
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <NotificationDayComponent date='Today' />
                <NotificationDayComponent date='Yesterday' />
            </Box>
        </Box>
    )
}

export default NotificationScreen
