import { Box, Button, InputLabel, TextField, Typography, Snackbar, Alert, Container } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const labelStyles = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' };

const AddBlog = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: ""
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async () => {
    const res = await axios.post("https://blog-app-1-nh71.onrender.com/api/blog/add", {
      title: inputs.title,
      description: inputs.description,
      image: inputs.imageURL,
      user: localStorage.getItem("userId")
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(data => {
        setSnackbarMessage('Blog added successfully!');
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate("/blogs");
        }, 2000); // Wait for 2 seconds before navigating
      })
      .catch(error => {
        setSnackbarMessage('Failed to add blog!');
        setSnackbarOpen(true);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Box
        border={3}
        borderColor='linear-gradient(90deg, rgba(58,157,180,1) 2%, rgba(49,49,116,1) 36%, rgba(0,58,161,1) 73%, rgba(69,187,252,1) 100%);'
        borderRadius={8}
        boxShadow="10px 10px 20px #ccc"
        padding={3}
        margin={'auto'}
        marginTop={3}
        marginBottom={3}
        display={'flex'}
        flexDirection={'column'}
        width={"60%"}
      >
        <Typography fontWeight={'bold'} padding={1} color={'grey'} variant='h3' textAlign={'center'}>
          Post Your Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField name='title' onChange={handleChange} value={inputs.title} margin='normal' variant='outlined' fullWidth />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField required multiline rows={3} name='description' onChange={handleChange} value={inputs.description} margin='normal' variant='outlined' fullWidth />
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField name='imageURL' onChange={handleChange} value={inputs.imageURL} margin='normal' variant='outlined' fullWidth />
          <Box display="flex" justifyContent="center">
            <Button
              sx={{ mt: 2, borderRadius: 4 }}
              variant='contained'
              color='warning'
              type='submit'
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarMessage === 'Blog added successfully!' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default AddBlog;
