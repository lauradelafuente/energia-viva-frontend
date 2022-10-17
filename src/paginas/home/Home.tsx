import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import ModalProdutos from "../../components/produtos/modalProdutos/ModalProdutos";
import { TokenState } from "../../store/tokens/tokensReducer";
import "./Home.css";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "white" }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "#6798C0", fontWeight: "bold" }}
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: "black", fontWeight: "bold" }}
            >
              A maior empresa de tecnologia Solar!
            </Typography>
          </Box>
          
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalProdutos />
            </Box>
            <Link to="/produtos">
              <Button
                variant="outlined"
                style={{
                  borderColor: "white",
                  backgroundColor: "#3F51B5",
                  color: "white",
                }}
              >
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
       
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}></Grid>
      </Grid>
    </>
  );
}

export default Home;
