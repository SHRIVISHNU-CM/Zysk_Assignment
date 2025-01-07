import React from "react";
import { Box, Typography } from "@mui/material";
import { Lock, FlashOn, BarChart, Chat, Extension, People } from "@mui/icons-material";
import Grid from '@mui/material/Grid'

function Section3() {
    const features = [
        {
            icon: <Lock fontSize="large" color="primary" />,
            title: "Share team inboxes",
            description:
                "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        },
        {
            icon: <FlashOn fontSize="large" color="primary" />,
            title: "Deliver instant answers",
            description:
                "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        },
        {
            icon: <BarChart fontSize="large" color="primary" />,
            title: "Manage your team with reports",
            description:
                "Measure what matters with our easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
        },
        {
            icon: <Chat fontSize="large" color="primary" />,
            title: "Connect with customers",
            description:
                "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
        },
        {
            icon: <Extension fontSize="large" color="primary" />,
            title: "Connect the tools you already use",
            description:
                "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
        },
        {
            icon: <People fontSize="large" color="primary" />,
            title: "Our people make the difference",
            description:
                "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        },
    ];

    return (
        <Box
            sx={{
                padding: "40px 20px",
                maxWidth: "1200px",
                margin: "auto",

            }}>
            <Box sx={{
                maxWidth: '700px',
                m: "auto"
            }}>
                <Typography variant="h6" align="center" sx={{
                    color: "red",
                    mt:7
                }}>
                    Features
                </Typography>
                <Typography variant="h4" align="center" gutterBottom>
                    Analytics that feels like it’s from the future
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    color="textSecondary"
                    sx={{
                        my: 4,
                        textAlign: "center"
                    }}

                >
                    Powerful, self-serve product and growth analytics to help you convert, engage,
                    and retain more users. Trusted by over 4,000 startups.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>

                        <Typography variant="body2" sx={{
                            textAlign: "center"
                        }}>
                            {feature.icon}

                        </Typography>
                        <Typography variant="body1" component="h2" sx={{
                            textAlign: "center"
                        }} >
                            {feature.title}
                        </Typography>
                        <Typography variant="body2" sx={{
                            color:"textSecondary",
                            textAlign:"center"
                        }}>
                            {feature.description}
                        </Typography>

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Section3;
