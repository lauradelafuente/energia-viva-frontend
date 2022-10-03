import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className='navbar'>
          <Box className="cursor">
            <img src="https://o.remove.bg/downloads/025981c1-1e89-4fcb-88af-731636f3f058/ENERGIA_VIVA-removebg-preview.png" alt="" className='logo'/>
          </Box>

          <Grid container justifyContent="flex">
            <Box display="flex" justifyContent="start" >
            <Link to='/home' className='sublinhado'>
              <Box mx={1} className="cursor fonte">
                <Typography variant="h6" color="inherit" fontFamily='Bangers cursive'>
                  Home
                </Typography>
              </Box>
              </Link>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" fontFamily='Bangers cursive'>
                  Categorias
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" fontFamily='Bangers cursive'>
                  Promoções
                </Typography>
              </Box>

              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" fontFamily='Bangers cursive'>
                  Sobre nós
                </Typography>
              </Box>

              <Link to='/login' className='sublinhado'>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" fontFamily='Bangers cursive'>
                  Login
                </Typography>
              </Box>
              </Link>

              <a href="https://www.instagram.com/generationbrasil/?hl=pt-br" className='sublinhado'>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" fontFamily='Bangers cursive'>
                  Instagram
                </Typography>
              </Box>
              </a>
              
                  <Box mx={1} className="cursor" >
                      <Typography variant="h6" color="inherit" fontFamily='Bangers cursive'>
                        Carrinho
                      </Typography>
                  </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;