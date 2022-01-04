import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import React from 'react'
import { IoHome } from 'react-icons/io5'
import { BiDoughnutChart } from 'react-icons/bi'
import { MdAddCircle } from 'react-icons/md'
import { HiCurrencyDollar } from 'react-icons/hi'
import { BsPersonCircle } from 'react-icons/bs'

function LayoutComponent({ children }) {
    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    p:'46.42px 20px 20px',
                    overflowX: 'hidden'
                }}
            >
                {children}
            </Box>
            <BottomNavigation
                showLabels
                sx={{
                    position: 'fixed',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    p: '0 10px',
                    mb: '10px'
                }}
            >
                <BottomNavigationAction label='Business' icon={<IoHome fontSize={30} />} />
                <BottomNavigationAction label='Stories' icon={<BiDoughnutChart fontSize={30} />} />
                <BottomNavigationAction label='' icon={<MdAddCircle fontSize={50} color='#0066F6' />} />
                <BottomNavigationAction label='Rewards' icon={<HiCurrencyDollar fontSize={30} />} />
                <BottomNavigationAction label='Portfolio' icon={<BsPersonCircle fontSize={30} />} />
            </BottomNavigation>
        </Box>
    )
}

export default LayoutComponent
