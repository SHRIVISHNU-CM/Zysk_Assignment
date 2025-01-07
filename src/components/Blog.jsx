import React from "react";
import { Box, Button, Typography, Card, CardContent, CardMedia, Avatar } from "@mui/material";
import blog1 from "../images/blog1.png"
import blog2 from "../images/blog2.png"
import blog3 from "../images/blog3.png"
import avatar from "../images/Avatar.png"

//created array of objects for posts
const blogPosts = [
    {
        id: 1,
        category: "Design",
        title: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        avatar:avatar,
        author: "Olivia Rhye",
        date: "20 Jan 2024",
        image: blog1, 
    },
    {
        id: 2,
        category: "Product",
        title: "Migrating to Linear 101",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        avatar:avatar,
        author: "Phoenix Baker",
        date: "19 Jan 2024",
        image: blog2, 
    },
    {
        id: 3,
        category: "Software Engineering",
        title: "Building your API stack",
        description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        avatar:avatar,
        author: "Lana Steiner",
        date: "18 Jan 2024",
        image: blog3, 
    },
];

function Blog() {
    return (
        <Box
            sx={{
                height:"minheight",
                maxWidth: "1200px",
                margin: "auto",
                padding:"60px 0"
            }}
        >
            {/* Header */}
            <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}>
                <Box sx={{ marginBottom: "40px" }}>
                    <Typography variant="subtitle1" color="error" gutterBottom>
                        Our Blog
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Latest Blog Posts
                    </Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ marginBottom: "24px" }}>
                        Tools and strategies modern teams need to help their companies grow.
                    </Typography>

                </Box>
                <Button variant="contained" color="error" sx={{
                    display:{lg:"block",xs:"none"}
                }}>
                    View all posts
                </Button>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "24px",
                    justifyContent: "center",
                }}
            >
                {blogPosts.map((post) => (
                    <Card
                        key={post.id}
                        sx={{
                            width:"350px",
                            minWidth: "280px",
                            maxWidth: "400px",
                            boxShadow: 2,
                            borderRadius: "8px",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={post.image}
                            alt={post.title}
                        />
                        <CardContent>
                            <Typography variant="overline" color="error" display="block">
                                {post.category}
                            </Typography>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "16px" }}>
                                {post.description}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <Avatar>
                                <img src={post.avatar}/>
                                </Avatar>
                                <Box>
                                    <Typography variant="body2" fontWeight="bold">
                                        {post.author}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {post.date}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Blog;
