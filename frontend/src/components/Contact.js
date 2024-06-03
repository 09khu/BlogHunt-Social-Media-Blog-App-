import React from 'react';
import {Typography,Button,Container,Box, Grid,TextField,} from '@mui/material';
import contactImage from '../assets/about.jpg'; 

const Contact = () => {



  return (
    <Container>
      <Grid container spacing={4} paddingTop={'50px'}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <img src={contactImage} alt="Contact Us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            
            sx={{
              padding: '30px',
              borderRadius: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)', 
              height: '100%', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" marginBottom={'20px'}>Get in Touch</Typography>
            <TextField
              fullWidth
              label="Name"
              name="name"
              margin="normal"
              required
              sx={{ backgroundColor: 'white' }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              margin="normal"
              required
              type="email"
              sx={{ backgroundColor: 'white' }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              margin="normal"
              required
              multiline
              rows={4}
  
              sx={{ backgroundColor: 'white' }}
            />
            <Button variant="contained" color="warning" sx={{ mt: 2 }} type="submit">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

