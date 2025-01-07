import React from "react";
import { Grid, Typography, Box, Chip } from "@mui/material";



function Footer() {
    const footerData = [
        {
            title: "Product",
            links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
        },
        {
            title: "Company",
            links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
        },
        {
            title: "Resources",
            links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"],
        },
        {
            title: "Use cases",
            links: ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"],
        },
        {
            title: "Social",
            links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"],
        },
        {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
        },
    ];
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#f9f9f9",
                padding: "40px 20px",
                borderTop: "1px solid #e0e0e0",
            }}
        >
            <Grid container spacing={4} sx={{ maxWidth: "1200px", margin: "auto" }}>
                {footerData.map((section, index) => (
                    <Grid item xs={6} sm={4} md={2} key={index}>
                        <Typography variant="subtitle1" fontWeight="bold" >
                            {section.title}
                        </Typography>
                        <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {section.links.map((link, idx) => (
                                <Box
                                    component="li"
                                    key={idx}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "8px",
                                    }}
                                >
                                    {link === "Solutions" ? (
                                        <>
                                            <Typography
                                                variant="body2"
                                                sx={{ marginRight: "8px", cursor: "pointer" }}
                                            >
                                                {link}
                                            </Typography>
                                            <Chip label="New" size="small" color="success" />
                                        </>
                                    ) : (
                                        <Typography
                                            variant="body2"
                                            sx={{ cursor: "pointer" }}
                                            color="textSecondary"
                                        >
                                            {link}
                                        </Typography>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Footer;
