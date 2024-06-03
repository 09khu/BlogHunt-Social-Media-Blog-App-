import React, { useState } from 'react';
import {AppBar, Button, Toolbar, Typography,Box, Tabs, Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';

const Header = () => {
  const dispath = useDispatch();
  const isLoggedIn =  useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  const [value, setValue]= useState();
  
  return <AppBar 
     position='sticky'
     sx={{
      background:
      'linear-gradient(90deg, rgba(58,157,180,1) 2%, rgba(49,49,116,1) 36%, rgba(0,58,161,1) 73%, rgba(69,187,252,1) 100%);'
    }}
    >
     <Toolbar>
      <Typography variant="h4">Blogs App</Typography>
      <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
      <Tab  LinkComponent={Link} to="/about" label="About Us"/>
     {isLoggedIn && 
        <Tabs textColor='inherit' value={value} onChange={(e,value)=>setValue(value)} >
          <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
          <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
          <Tab LinkComponent={Link} to="/blogs/add" label="Add Blogs"/>

        </Tabs>}
        
        <Tab  LinkComponent={Link} to="/contact" label="Contact Us"/>
      </Box>
      
      <Box display='flex' marginLeft='auto'>
       { !isLoggedIn && <> 
       <Button 
          LinkComponent={Link} 
          to="/auth"  
          variant='contained'
          sx={{margin:1,borderRadius:10}}
          color="warning"
        >
          Login
        </Button>

        <Button 
          LinkComponent={Link}
          to="/auth" 
          variant='contained' 
          sx={{margin:1,borderRadius:10}} 
          color='warning'
          >
            SignUp
            </Button> 
            </>
          }
        {isLoggedIn && 
        <Button 
          onClick={()=>dispath(authActions.logout())}
          LinkComponent={Link} 
          to="/auth" 
          variant='contained' 
          sx={{margin:1,borderRadius:10}} 
          color='warning'
          >
            LogOut
        </Button>
        }
      </Box>
     </Toolbar>
    </AppBar>

};

export default Header