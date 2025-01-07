import { Box, Typography } from '@mui/material'
import React from 'react'
import company7 from "../images/Fictional7.png"
import avatar from "../images/Avatar.png"



function Section4() {
    return (
        <>
            <Box sx={{
                height: "70vh",
                display: 'flex',
                flexDirection: "column",
                alignItems: "center",
                bgcolor: 'textSecondary',
                justifyContent:"center",
            }}>
                <Box>
                    <Box sx={{
                        textAlign: "center",
                        mb:2
                    }}>
                        <img src={company7} width={100} />
                    </Box>
                    <Box sx={{
                        maxWidth: "900px",
                        margin: "auto",
                        mb:2
                    }}>
                        <Typography variant='h4' component="h2" sx={{
                            // maxWidth:"500px",
                            textAlign: "center"
                        }}>
                            We've been using Untitled to kick start every new project and can't imagine working without it.
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <img src={avatar} />
                        <Typography variant='subtitle2' component="h2" sx={{
                            fontSize: "10px"
                        }}>
                            Candice Wu
                        </Typography>
                        <Typography variant='subtitle2' component="h2">
                            Product Manager, Sisyphus
                        </Typography>

                    </Box>
                </Box>


            </Box>

        </>
    )
}

export default Section4
