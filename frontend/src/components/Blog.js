import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, Box, IconButton, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios';

const Blog = ({ id, title, description, imageURL, userName, isUser }) => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios.delete(`https://blog-app-1-nh71.onrender.com/api/blog/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => {
        setSnackbarMessage('Blog deleted successfully!');
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate("/");
          navigate("/myBlogs");
        }, 2000); // Wait for 2 seconds before navigating
      })
      .catch(err => {
        setSnackbarMessage('Failed to delete blog!');
        setSnackbarOpen(true);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Card 
        sx={{ 
          maxWidth: 800,
          margin: 'auto',
          mt: 2,
          padding: 2, 
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc"
          }
        }}>
        {isUser && (
          <Box display={'flex'}>
            <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
              <ModeEditOutlineIcon color='warning' />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color='error' />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName}
            </Avatar>
          }
          title={title}
          titleTypographyProps={{ fontSize: 24 }}
        />
        <CardMedia
          component="img"
          height="500"
          image={imageURL}
          alt="Blog Image"
        />
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            <Typography variant="h6" sx={{ fontSize: "24px", mr: 1 }}>{userName} :-</Typography>{description}
          </Typography>
        </CardContent>
      </Card>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarMessage === 'Blog deleted successfully!' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Blog;
