import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { busca } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./ListaCategoria.css";

function ListaCategoria() {
  let navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      alert("Voce precisa estar logado!");
      navigate("/login");
    }
  }, [token]);

  async function getCategoria() {
    console.log(token);
    await busca("/categoria", setCategoria, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getCategoria();
  }, [categoria.length]);

  return (
    <>
      <Grid container className="image">
        <Box maxWidth="sm" className='caixa'>
        <Typography variant="h4" color="textSecondary" component="h1" align="center" className="formatacao"
        >
          Todas as categorias:
        </Typography>
        {categoria.map((categoria) => (
          <Box m={2}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Categoria
                </Typography>
                <p>
                  {categoria.descricao}
                </p>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/formularioCategoria/${categoria.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="marginLeft blue"
                        size="small"
                        color="primary"
                      >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarCategoria/${categoria.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        className="yellow"
                      >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
        </Box>
      </Grid>
    </>
  );
}

export default ListaCategoria;

