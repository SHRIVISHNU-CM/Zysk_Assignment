import { Typography, Box } from '@mui/material'
import React from 'react'
import company1 from "../images/Fictional1.png"
import company2 from "../images/Fictional2.png"
import company3 from "../images/Fictional3.png"
import company4 from "../images/Fictional4.png"
import company5 from "../images/Fictional5.png"
import company6 from "../images/Fictional6.png"

function Company() {
    const images = [
        { id: 1, image: company1 },
        { id: 2, image: company2 },
        { id: 3, image: company3 },
        { id: 4, image: company4 },
        { id: 5, image: company5 },
        { id: 6, image: company6 },
    ]
    return (
        <>
            <Box sx={{
                width:"100%"
            }}>
                <Typography variant='body2' component="h2" sx={{
                    textAlign: "center"
                }}>
                    Join 4,000+ companies already growing
                </Typography>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexWrap:'wrap',
                    gap:{lg:"70px",xs:"30px"}
                }}>
                    {
                        images.map((el, i) => {
                            return (
                                <img key={i} src={el.image} width={100}/>
                            )
                        })
                    }
                </Box>
            </Box>

        </>
    )
}

export default Company
