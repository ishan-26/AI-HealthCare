import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <AppBar position="static" className="bg-gray-900 shadow-lg">
      <Toolbar className="flex flex-wrap justify-between items-center">
       
        <Typography variant="h5" component={Link} to="/" className="text-white font-bold no-underline">
          MedNex
        </Typography>

        <div className="space-x-4">
         <Button
            color="inherit"
            component={Link}
            to="/"
            className="transition-all duration-300 rounded-full text-white border border-transparent hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 py-2 px-4"
            >   
          Home
        </Button>


          <Button
            color="inherit"
            component={Link}
            to="/ProfileCard"
            className="transition-all duration-300 rounded-full text-white border border-transparent hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 py-2 px-4"
          >
            Our Team
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/ContactForm"
            className="transition-all duration-300 rounded-full text-white border border-transparent hover:border-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 py-2 px-4"
          >
            Contact Us
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarComponent;
