import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Produtos from "../../../models/Produtos";
import { buscaId, deleteId, post } from "../../../service/Service";
import { addToken } from "../../../store/tokens/actions";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function DeletarProdutos() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<Produtos>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

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
    buscaId(`/produto/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/produtos");
    deleteId(`/produto/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    alert("Tema deletado com sucesso");
  }

  function nao() {
    navigate("/produtos");
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Produto:
              </Typography>
              <Typography color="textSecondary">
                {produto?.nomeProduto}
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
              <Box>
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

export default DeletarProdutos;
