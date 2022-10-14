import { AppBar, Toolbar, Box, Typography, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="navbar">
          <Box className="cursor">
            <img
              src="https://o.remove.bg/downloads/025981c1-1e89-4fcb-88af-731636f3f058/ENERGIA_VIVA-removebg-preview.png"
              alt=""
              className="logo"
            />
          </Box>

          <Grid container>
            <Box display="flex">
              <Link to="/home" className="sublinhado">
                <Box mx={1} className="cursor fonte">
                  <Typography
                    variant="h6"
                    color="inherit"
                    fontFamily="Bangers cursive"
                  >
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="categorias">
                <Box mx={1} className="cursor">
                  <Typography
                    variant="h6"
                    color="inherit"
                    fontFamily="Bangers cursive"
                  >
                    Categorias
                  </Typography>
                </Box>
              </Link>
              <Link to="/formularioCategoria">
                <Box mx={1} className="cursor">
                  <Typography
                    variant="h6"
                    color="inherit"
                    fontFamily="Bangers cursive"
                  >
                    Cadastrar Categorias
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} className="cursor">
                <Typography
                  variant="h6"
                  color="inherit"
                  fontFamily="Bangers cursive"
                >
                  Promoções
                </Typography>
              </Box>

              <Box mx={1} className="cursor" marginLeft="135vh">
                <Typography
                  variant="h6"
                  color="inherit"
                  fontFamily="Bangers cursive"
                >
                  Sobre nós
                </Typography>
              </Box>

              <Link to="/login" className="sublinhado">
                <Box mx={1} className="cursor">
                  <Typography
                    variant="h6"
                    color="inherit"
                    fontFamily="Bangers cursive"
                  >
                    Login
                  </Typography>
                </Box>
              </Link>

              <Box mx={1} className="cursor">
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  className="carButton"
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
