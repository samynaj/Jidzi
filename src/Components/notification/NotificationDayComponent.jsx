import { Box, Typography } from '@mui/material'
import React from 'react'
import NotificationItemComponent from './NotificationItemComponent'

function NotificationDayComponent({ date }) {
    return (
        <Box>
            <Typography
                sx={{
                    fontSize: '14px',
                    lineHeight: '16px',
                    color: '#222222',
                    opacity: '0.5',
                    mb: '5px'
                }}
            >
                { date }
            </Typography>
            <Box 
                sx={{
                    border: '1px solid #C9C9C9',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    borderRadius: '8px'
                }}
            >
                <NotificationItemComponent withdraw details='Withdrew GHS5,000' time='08:58 PM' />
                <NotificationItemComponent details='Received money GHS2,000 from Dito' time='08:40 PM' />
                <NotificationItemComponent withdraw details='Withdrew GHS40,000 from emergency funds' time='08:20 AM' />
                <NotificationItemComponent details='Added GHS4,400 to your savings' time='06:58 AM' />
            </Box>
        </Box>
    )
}

export default NotificationDayComponent
