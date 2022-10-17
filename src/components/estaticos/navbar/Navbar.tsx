import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import Produtos from "../../../models/Produtos";
import { busca } from "../../../service/Service";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar(props: any) {
  const [produtos, setProdutos] = useState<Produtos[]>([]);
  let history = useNavigate();
  let dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    getProduto();
  }, []);

  function goLogout() {
    dispatch(addToken(""));

    alert("Usuário deslogado");
    history("/login");
  }
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function getProduto() {
    console.log(token);
    await busca("/produto", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }
  let handleFilter = (event: any) => {
    let lowerCase = event.target.value.toLowerCase();
    props.setInputText(lowerCase);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Grid>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleMenu}
              className="icon-1"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to="/home" className="cursor">
                <MenuItem onClick={handleClose}> Home </MenuItem>
              </Link>
              <Link to="/home" className="cursor">
                <MenuItem onClick={handleClose}> Sobre Nos </MenuItem>
              </Link>
              <Link to="/produtos" className="cursor">
                <MenuItem onClick={handleClose}> Produtos </MenuItem>
              </Link>
              <Link to="/formularioProduto" className="cursor">
                <MenuItem onClick={handleClose}> Cadastrar Produtos </MenuItem>
              </Link>
              <Link to="/formularioCategoria" className="cursor">
                <MenuItem onClick={handleClose}>
                  {" "}
                  Cadastrar Categorias{" "}
                </MenuItem>
              </Link>
            </Menu>
          </Grid>
          <Grid
            container
            spacing={3}
            display="flex"
            justifyContent={"flex-end"}
          >
            <Grid item>
              <Search className="search" onChange={handleFilter}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
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
            <Grid item>
              <Box mx={1} onClick={goLogout} className="cursor">
                <Typography variant="h6" color="inherit" className="icon-1">
                  LOGOUT
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
