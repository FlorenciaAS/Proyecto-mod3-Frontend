import React from 'react';
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import '../Styles/Navbar.css';
import logoMatea from '../images/logoMatea.png'


function Navbar() {
  return (
    <div className="Navbar-container">
      <AppBar position="static" className="Navbar-container">
          <Toolbar className="Toolbar-container">
            <img className='img-nav' src={logoMatea}></img>
              <Box fontFamily="Righteous"
                    fontSize={28}
                    align="center"
                    className="Box-container">
                        Mateify
              </Box>
          </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;