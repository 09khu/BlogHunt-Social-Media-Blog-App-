import { Box, Button, InputLabel, TextField, Typography, Snackbar, Alert, Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const labelStyles = { mb: 1, mt: 2, fontSize: '24px', fontWeight: 'bold' };

const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const id = useParams().id;
  const [inputs, setInputs] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const fetchDetails = async () => {
    const res = await axios.get(`https://blog-app-1-nh71.onrender.com/api/blog/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog);
      setInputs({ title: data.blog.title, description: data.blog.description });
    });
  }, [id]);

  const sendRequest = async () => {
    const res = await axios.put(`https://blog-app-1-nh71.onrender.com/api/blog/update/${id}`, {
      title: inputs.title,
      description: inputs.description   
    }).catch(err => console.log(err));

    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => {
        setSnackbarMessage('Blog edited successfully!');
        setSnackbarOpen(true);
        setTimeout(() => {
          navigate("/myBlogs/");
        }, 2000); // Wait for 2 seconds before navigating
      })
      .catch((error) => {
        setSnackbarMessage('Failed to edit blog!');
        setSnackbarOpen(true);
      });
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    
      <Container>
        <div>
      {inputs &&
        <form onSubmit={handleSubmit}>
          
          <Box 
            border={3} 
            borderColor='linear-gradient(90deg, rgba(58,157,180,1) 2%, rgba(49,49,116,1) 36%, rgba(0,58,161,1) 73%, rgba(69,187,252,1) 100%);' 
            borderRadius={8} 
            boxShadow="10px 10px 20px #ccc"
            padding={2}
            margin={'auto'}
            marginTop={3}
            marginBottom={3}
            display={'flex'}
            flexDirection={'column'}
            width={"80%"}
          >
            <Typography fontWeight={'bold'} padding={1} color={'grey'} variant='h3' textAlign={'center'}>Edit Your Blog</Typography>
            <InputLabel sx={labelStyles}>Title</InputLabel>
            <TextField name='title' onChange={handleChange} value={inputs.title} margin='normal' variant='outlined'/>
            <InputLabel sx={labelStyles}>Description</InputLabel>
            <TextField required multiline rows={6} name='description' onChange={handleChange} value={inputs.description} margin='normal' variant='outlined'/>
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
      }
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarMessage === 'Blog edited successfully!' ? 'success' : 'error'} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      </div>
      </Container>
    
  );
}

export default BlogDetail;
