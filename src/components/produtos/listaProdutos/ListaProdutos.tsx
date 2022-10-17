import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Produtos from "../../../models/Produtos";
import { busca, post } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import Navbar from "../../estaticos/navbar/Navbar";

function ListaProdutos() {
  let navigate = useNavigate();

  const [produtos, setProdutos] = useState<Produtos[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  async function getProduto() {
    console.log(token);
    await busca("/produto", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProduto();
  }, [produtos.length]);

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {produtos.map((produtos) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={`${produtos.potencia}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {produtos.nomeProduto}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dimensão: {produtos.dimensao}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Marca: {produtos.marca}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Categoria: {produtos.categoria?.tipoProduto}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Preço: R${produtos.preco}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/formularioProduto/${produtos.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="marginLeft"
                        size="small"
                        color="primary"
                        style={{ backgroundColor: "#6798C0" }}
                      >
                        Atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarProduto/${produtos.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        style={{ backgroundColor: "#FDC921" }}
                      >
                        Deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ListaProdutos;
