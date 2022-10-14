import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Produtos from "../../../models/Produtos";
import { busca, post } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

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
      {produtos.map((produtos) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Produtos
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.potencia /*foto*/}
              </Typography>
              <Typography variant="h5" component="h2">
                {produtos.nomeProduto}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.preco}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.dimensao}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.marca}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.material}
              </Typography>
              <Typography variant="body2" component="p">
                <h1>Quanditade disponivel: </h1> {produtos.quantidade}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.categoria?.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.categoria?.tipoProduto}
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
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarProduto/${produtos.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaProdutos;
