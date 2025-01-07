import React from 'react'
import { Typography, Box } from '@mui/material'
import image1 from "../images/image-1.png"

function Hero() {
    return (
        <>
            <Box sx={{
                mt: 10,
                width: "100%",
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px"

            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid red",
                    padding: "3px 4px",
                    borderRadius: "50px"
                }}>
                    <Typography variant="body2" component="h2" sx={{
                        border: "1px solid red",
                        // minWidth:"50px",
                        borderRadius: "50px",
                        padding: "4px 3px"
                    }}>
                        New feature
                    </Typography>
                    <Typography>
                        Check out the team dashboard
                    </Typography>
                </Box>
                <Typography variant='h4' component="h2" sx={{
                    textAlign: "center"
                }} >
                    Beautiful analytics to grow smarter
                </Typography>
                <Typography variant='h6' component="h2" sx={{
                    textAlign: "center",
                    width: { lg: "800px" }
                }} >
                    Powerfull, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4.000 startups.
                </Typography>


            </Box>
            <Box sx={{
                mb:5,
                mt:4
            }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: { lg: "row", xs: "column-reverse" },
                    gap: "15px",
                    padding: { xs: "0 30px" }
                    // width:"100%"
                }}>
                    <Typography variant="body2" sx={{
                        width: { lg: "100px", xs: "100%" },
                        textAlign: "center",
                        border: "1px solid gray",
                        padding: "10px 12px",
                        borderRadius: "25px",
                    }}>
                        Demo
                    </Typography>
                    <Typography variant="body2" sx={{
                        width: { lg: "100px", xs: "100%" },
                        textAlign: "center",
                        padding: "10px 12px",
                        borderRadius: "25px",
                        bgcolor: "orange",
                        color: "#fff"
                    }}>
                        Sign up
                    </Typography>
                </Box>

                <Box sx={{
                    mt:3,
                    textAlign:"center"
                }}>
                    <img src={image1} />

                </Box>

            </Box>


        </>
    )
}

export default Hero
