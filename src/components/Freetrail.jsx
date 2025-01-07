import React from 'react'
import { Box, Typography } from '@mui/material'
function Freetrail() {
    return (
        <>
            <Box sx={{
                height: "50vh",
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                bgcolor: '#e0e0e0',
                justifyContent: "center",
            }}>
                <Box sx={{
                    width:"100%"
                }}>

                    <Box sx={{
                        maxWidth: "900px",
                        margin: "auto",
                        mb: 2
                    }}>
                        <Typography variant='h4' component="h2" sx={{
                            // maxWidth:"500px",
                            textAlign: "center"
                        }}>
                            Start your trail
                        </Typography>
                        <Typography variant='subtitle2' component="h2" sx={{
                            // maxWidth:"500px",
                            textAlign: "center"
                        }}>
                            Join 4,000+ companies already growing
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: { lg: "row", xs: "column-reverse" },
                        gap: "15px",
                        padding: { xs: "0 30px" },
                       
                    }}>
                        <Typography variant="body2" sx={{
                            width: { lg: "100px", xs: "100%" },
                            textAlign: "center",
                            border: "1px solid gray",
                            padding: "10px 12px",
                            borderRadius: "5px",
                        }}>
                            Learn More
                        </Typography>
                        <Typography variant="body2" sx={{
                            width: { lg: "100px", xs: "100%" },
                            textAlign: "center",
                            padding: "10px 12px",
                            borderRadius: "5px",
                            bgcolor: "orange",
                            color: "#fff"
                        }}>
                            Get Started
                        </Typography>
                    </Box>
                </Box>


            </Box>
        </>
    )
}

export default Freetrail
