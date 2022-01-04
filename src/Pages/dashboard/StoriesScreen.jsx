import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import LayoutComponent from '../../Components/dashboard/LayoutComponent'

function StoriesScreen() {
    return (
        <LayoutComponent>
            <Box
                 sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: '20px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: '24px',
                        lineHeight: '22px',
                        fontWeight: 700,
                        color: '#5E5E5E'
                    }}
                >Stories</Typography>
                <Avatar>H</Avatar>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px'
                }}
            >
                <Box
                    sx={{
                        background: '#0066F6',
                        color: '#ffffff',
                        height: '180px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        p: '0 50px',
                        boxShadow: '-10px 10px 20px rgba(153, 153, 153, 0.12), 10px 10px 24px rgba(153, 153, 153, 0.08)'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: '30px',
                            lineHeight: '32px',
                            textAlign: 'center'
                        }}
                    >
                        Work = Income series
                    </Typography>
                </Box>
                <Box
                    sx={{
                        background: '#0066F6',
                        color: '#ffffff',
                        height: '180px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        p: '0 50px',
                        boxShadow: '-10px 10px 20px rgba(153, 153, 153, 0.12), 10px 10px 24px rgba(153, 153, 153, 0.08)'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: '30px',
                            lineHeight: '32px',
                            textAlign: 'center'
                        }}
                    >
                        How to use the Jidzi app
                    </Typography>
                </Box>
                <Box
                    sx={{
                        background: '#0066F6',
                        color: '#ffffff',
                        height: '180px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '8px',
                        p: '0 50px',
                        boxShadow: '-10px 10px 20px rgba(153, 153, 153, 0.12), 10px 10px 24px rgba(153, 153, 153, 0.08)'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: '30px',
                            lineHeight: '32px',
                            textAlign: 'center'
                        }}
                    >
                        Financial literacy series
                    </Typography>
                </Box>
            </Box>
        </LayoutComponent>
    )
}

export default StoriesScreen
