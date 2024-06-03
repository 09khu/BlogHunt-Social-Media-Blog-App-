import React from 'react';
import { Typography, Button, Container, Box, Grid } from '@mui/material';

import aboutImage from '../assets/about.jpg';
import missionImage from '../assets/mission.png';

const About = () => {
  return (
    <div>
      <section>
        <Container>
          <Grid container spacing={4} paddingTop={'50px'}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h3" paddingTop={'50px'} justifyContent={'center'}>
                  About Us
                </Typography>
                <Typography variant="body1" paddingTop={'10px'} paragraph sx={{ color: 'gray' }}>
                  Welcome to our Blog App! We're a vibrant community of writers, creators, and enthusiasts passionate about sharing engaging content on various topics. Our mission is to inspire and inform our readers through insightful articles, captivating stories, and valuable insights. Whether you're here to explore new ideas, connect with like-minded individuals, or simply enjoy quality content, we're thrilled to have you as part of our community. Join us on this journey of discovery, learning, and inspiration!
                </Typography>
                <Button variant="contained" color="warning" sx={{ mt: 2 }}>
                  Know More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={aboutImage} alt="Team" width="90%" />
            </Grid>
          </Grid>
        </Container>
      </section>
      <br />
      <br />
      <br />
      <br />
      {/* Mission Section */}
      <section>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ pb: "30px" }} className="text-center">
                <img src={missionImage} alt="Mission" width="90%" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h3" paddingTop={'50px'} justifyContent={'center'}>
                  Our Mission
                </Typography>
                <Typography variant="body1" paddingTop={'10px'} paragraph sx={{ color: 'gray' }}>
                  Our mission is to empower and inspire individuals through the power of knowledge and creativity. We strive to provide a platform where diverse voices can be heard, ideas can be shared, and meaningful connections can be made. We believe in the transformative power of education, storytelling, and community, and we are committed to fostering a space where everyone feels valued, supported, and empowered to pursue their passions and dreams. Through our content, we aim to spark curiosity, ignite conversation, and catalyze positive change in the world. Join us as we embark on this journey of discovery, growth, and impact together.
                </Typography>
                <Button variant="contained" color="warning">
                  Know More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}

export default About;
