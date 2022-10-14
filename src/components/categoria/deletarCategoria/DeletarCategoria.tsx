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
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Categoria from "../../../models/Categoria";
import { buscaId, deleteId } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";

function DeletarCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [categoria, setCategoria] = useState<Categoria>();

  useEffect(() => {
    if (token === "") {
      alert("voce precisa estar logado!");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/categorias");
    deleteId(`/categoria/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    alert("categoria deletada com sucesso");
  }

  function nao() {
    navigate("/categorias");
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Categoria:
              </Typography>
              <Typography color="textSecondary">
                {categoria?.tipoProduto}
              </Typography>
              <Typography color="textSecondary">
                {categoria?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default DeletarCategoria;
