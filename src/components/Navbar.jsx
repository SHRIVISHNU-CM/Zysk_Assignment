import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import avatar from "../images/Avatar.png"
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    return (
        <Box sx={{
            height: "40px",
            maxWidth: "1000px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Box sx={{
                display: "flex" ,
                gap: "30px"
            }}>
                <Typography variant='body1' component="h2" sx={{
                    color: "red"
                }}>
                    ZYSK
                </Typography>
                <Box sx={{
                  display: { lg: "flex", xs: "none", sm: "none", md: "none" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "30px"
                }}>
                    <Typography variant='body2' component="h2">
                        Home
                    </Typography>
                    <Typography variant='body2' component="h2">
                        Products
                    </Typography>
                    <Typography variant='body2' component="h2">
                        Resources
                    </Typography>
                    <Typography variant='body2' component="h2">
                        Pricing
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Avatar sx={{
                    display: { lg: "block", xs: "none" }
                }}>
                    <img src={avatar} width={50} />
                </Avatar>
                <Typography component="div" sx={{
                    display: { lg: "none", xs: "block" }
                }}>
                    <MenuIcon />
                </Typography>
            </Box>
        </Box>
    )
}

export default Navbar
