import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import { Drawer } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#6798C0'}}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={3} display='flex' justifyContent='space-between' direction='row'>
          <Grid item>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
          >
            HOME
          </Typography>
          </Grid>
          <Grid item>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            
          >
            CATEGORIAS
          </Typography>
          </Grid>
          <Grid item>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            
          >
            CADASTRAR CATEGORIAS
          </Typography>
          </Grid>
          <Grid item>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Grid>
          <Grid item>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
          >
            PROMOÇÕES
          </Typography>
          </Grid>
          <Grid item>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            
          >
            SOBRE NÓS
          </Typography>
          </Grid>
          <Grid item>
          <Typography
            variant="subtitle1"
            noWrap
            component="div"
            
          >
            LOGOUT
          </Typography>
          </Grid>
          <Grid item>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className="carButton"
            >
              <AddShoppingCartIcon />
          </IconButton>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
