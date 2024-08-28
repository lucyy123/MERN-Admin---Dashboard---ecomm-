import { useState } from 'react'

import {
    Box, Divider,
    Drawer, IconButton, List,
    ListItem, ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {
    AdminPanelSettingsOutlined,
    CalendarMonthOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    Groups2Outlined,
    HomeOutlined,
    PieChartOutlined,
    PointOfSaleOutlined,
    PublicOutlined,
    ReceiptLongOutlined,
    SettingsOutlined,
    ShoppingCartOutlined,
    TodayOutlined
} from '@mui/icons-material'

import Flexbetween from './flexBetween'

function Sidebar({ isNonMobile, user, isSidebarOpen, setIsSidebarOpen, drawerWidth }) {
    const theme = useTheme()
    const navigate = useNavigate()
    const [active, setActive] = useState()

    const navItems = [
        {
            text: "Dashboard",
            icon: <HomeOutlined />,
        },
        {
            text: "Client Facing",
            icon: null,
        },
        {
            text: "Products",
            icon: <ShoppingCartOutlined />,
        },
        {
            text: "Customers",
            icon: <Groups2Outlined />,
        },
        {
            text: "Transactions",
            icon: <ReceiptLongOutlined />,
        },
        {
            text: "Geography",
            icon: <PublicOutlined />,
        },
        {
            text: "Sales",
            icon: null,
        },
        {
            text: "Overview",
            icon: <PointOfSaleOutlined />,
        },
        {
            text: "Daily",
            icon: <TodayOutlined />,
        },
        {
            text: "Monthly",
            icon: <CalendarMonthOutlined />,
        },
        {
            text: "Breakdown",
            icon: <PieChartOutlined />,
        },
        {
            text: "Management",
            icon: null,
        },
        {
            text: "Admin",
            icon: <AdminPanelSettingsOutlined />,
        },
    
    ];





    return (
        <Box component="nav" height='100%' overflow='hidden' ml={isNonMobile?'1.25rem':'none'}>
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiPaper-root": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSixing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="1rem 1.5rem 1.5rem 2rem">
                            <Flexbetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Typography variant="h4" fontWeight="bold">
                                        e-VOLFER
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </Flexbetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: "1.5rem 0 0.7rem 2rem" }}>
                                            {text}
                                        </Typography>
                                    );
                                }
                                const lcText = text.toLowerCase();

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor:
                                                    active === lcText
                                                        ? theme.palette.secondary[300]
                                                        : "transparent",
                                                color:
                                                    active === lcText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.secondary[100],
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "1rem",
                                                    color:
                                                        active === lcText
                                                            ? theme.palette.primary[600]
                                                            : theme.palette.secondary[200],
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>
{/* --------------------------------------user info--------------------------- */}
                    <Box position="absolute" bottom="2rem">
                        <Divider />
                        <Flexbetween textTransform="none" gap="0.6rem" m="1rem 1rem 0 2rem">
                            <Box
                                component="img"
                                alt="profile"
                                src={'https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0'}
                                height="25px"
                                width="25px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography
                                    fontWeight="bold"
                                    fontSize="0.65rem"
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    fontSize="0.45rem"
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user.occupation}
                                </Typography>
                            </Box>
                            <SettingsOutlined
                                sx={{
                                    color: theme.palette.secondary[300],
                                    fontSize: "18px ",
                                }}
                            />
                        </Flexbetween>
                    </Box>
                </Drawer>
            )}
        </Box>
    );

}

export default Sidebar
