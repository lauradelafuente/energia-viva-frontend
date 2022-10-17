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

function ListaProdutos(props: any) {
  let navigate = useNavigate();

  const [produtos, setProdutos] = useState<any[]>([]);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let filter: string = props.inputText;
  let vazio: boolean = false;

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

  const filteredList = produtos.filter((filter) => {
    let filteredProducts = [];
    if (filter === "") {
      return filter;
    }
    for (let i in filter) {
      if (filter[i].nomeProduto.includes(filter)) {
        filteredProducts.push(filter[i]);
      }
    }
    setProdutos(filteredProducts);
  });

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <div>
            {filteredList.map((produto) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`${produto.potencia}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {produto.nomeProduto}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dimensão: {produto.dimensao}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Marca: {produto.marca}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Categoria: {produto.categoria?.tipoProduto}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Preço: R${produto.preco}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5}>
                    <Link
                      to={`/formularioProduto/${produto.id}`}
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
                      to={`/deletarProduto/${produto.id}`}
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
          </div>
        </Grid>
      </Container>
    </>
  );
}

export default ListaProdutos;
