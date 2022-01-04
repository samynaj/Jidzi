import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import LayoutComponent from '../../Components/dashboard/LayoutComponent'

function AddScreen() {
    return (
        <LayoutComponent>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    alignItems: 'center',
                    mb: '20px'
                }}
            >
                <Avatar>H</Avatar>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px',
                    textAlign: 'center'
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: '30px',
                        lineHeight: '22px',
                        color: '#5E5E5E',
                    }}
                >Add</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}
                >
                    <Box
                        sx={{
                            fontWeight: 700,
                            fontSize: '28px',
                            background: '#D5F6EE',
                            color: '#5E5E5E',
                            p: '10px',
                            borderRadius: '8px'
                        }}
                    >SALES</Box>
                    <Box
                        sx={{
                            fontWeight: 700,
                            fontSize: '28px',
                            background: '#D1DBFF',
                            color: '#5E5E5E',
                            p: '10px',
                            borderRadius: '8px'
                        }}
                    >DEBTORS</Box>
                    <Box
                        sx={{
                            fontWeight: 700,
                            fontSize: '28px',
                            background: '#FFF1D1',
                            color: '#5E5E5E',
                            p: '10px',
                            borderRadius: '8px'
                        }}
                    >EXPENSES</Box>
                    <Box
                        sx={{
                            fontWeight: 700,
                            fontSize: '28px',
                            background: '#FFDFEE',
                            color: '#5E5E5E',
                            p: '10px',
                            borderRadius: '8px'
                        }}
                    >DEBT</Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: '28px',
                            lineHeight: '22px',
                            color: '#5E5E5E'
                        }}
                    >Product Management</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                fontWeight: 700,
                                fontSize: '26px',
                                background: '#D1DBFF',
                                color: '#5E5E5E',
                                p: '10px',
                                borderRadius: '8px',
                                flex: '45%'
                            }}
                        >Add</Box>
                        <Box
                            sx={{
                                fontWeight: 700,
                                fontSize: '26px',
                                background: '#D1DBFF',
                                color: '#5E5E5E',
                                p: '10px',
                                borderRadius: '8px',
                                flex: '45%'
                            }}
                        >Data</Box>
                        <Box
                            sx={{
                                fontWeight: 700,
                                fontSize: '26px',
                                background: '#D1DBFF',
                                color: '#5E5E5E',
                                p: '10px',
                                borderRadius: '8px',
                                flex: '50%'
                            }}
                        >Manage</Box>
                    </Box>
                </Box>
            </Box>
        </LayoutComponent>
    )
}

export default AddScreen
