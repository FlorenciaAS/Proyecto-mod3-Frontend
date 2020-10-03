import React from 'react';
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Box } from "@material-ui/core";
import '../Styles/Navbar.css';


function Navbar() {
  return (
    <div className="Navbar-container">
      <AppBar position="static" className="Navbar-container">
          <Toolbar className="Toolbar-container">
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