import { Avatar, Box, Typography, Tabs, Tab } from '@mui/material'
import React from 'react'
import LayoutComponent from '../../Components/dashboard/LayoutComponent'

function BusinessScreen() {
    const [value, setValue] = React.useState(0);

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }
    
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
                >Business</Typography>
                <Avatar>H</Avatar>
            </Box>
            <Box>
                <Tabs sx={{ background: '#D1DBFF'}} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Today" {...a11yProps(0)} />
                    <Tab label="Week" {...a11yProps(1)} />
                    <Tab label="Month" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    Today
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Week
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Month
                </TabPanel>
            </Box>
        </LayoutComponent>
    )
}

export default BusinessScreen
