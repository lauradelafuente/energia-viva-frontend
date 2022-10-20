import React from "react";
import "./SobreNos.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function SobreNos() {
  let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme:"colored",
            progress: undefined,
        });
          navigate("/login")
      }
  }, [token])
  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center" paddingY={4} className="fgradient">
    <Grid alignItems="center" className="fgradient">
    <Box paddingX={20}>
      <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" style={{color: 'white'}}>Nossa equipe é composta por seis desenvolvedores formados na Generation Brasil. O e-commerce tem como base uma das ODS's (Objetivos de Desenvolimento Sustentável) da ONU. A ODS 7, que põe em pauta o acesso às diferentes fontes de energia e preservação ambiental. Conheça um pouco sobre nós:</Typography>
    </Box>
    </Grid>
    </Grid>

      <Grid container display="flex" justifyContent="flex-start">
        <div className="container">
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <div className="card card0">
              <div className="border">
                <h2>Laura De La Fuente</h2>
                <div className="icons">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://github.com/lauradelafuente"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://www.linkedin.com/in/laura-delafuente/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <div className="card card1">
              <div className="border">
                <h2>Luca Andrey</h2>
                <div className="icons">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://github.com/lucaandrey"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://www.linkedin.com/in/lucaandrey/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <div className="card card2">
              <div className="border">
                <h2>Kelvyn Farias</h2>
                <div className="icons">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://github.com/KelvynFarias"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://www.linkedin.com/in/kelvyn-sabino-de-farias-9163a4210/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
      <Grid container>
        <div className="container">
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <div className="card card3">
              <div className="border">
                <h2>Larissa Lacerda</h2>
                <div className="icons">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://github.com/LarissaLacerdasilvad"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://www.linkedin.com/in/larissa-lacerda-b0a218171/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <div className="card card4">
              <div className="border">
                <h2>Gustavo Henrique</h2>
                <div className="icons">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://github.com/Guxtavo-s"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://www.linkedin.com/in/gustavo-hmo/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <div className="card card5">
              <div className="border">
                <h2>Henrique Leonardo</h2>
                <div className="icons">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://github.com/Henrique1200"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <a
                      href="https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADddkgYB3aA8MUdgiIid6Yk4U7b5K941YbU&keywords=henrique%20leonardo&origin=RICH_QUERY_SUGGESTION&position=0&searchId=bd2a7d95-c687-4766-934b-d54bca8ec0a6&sid=6TV"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon
                        style={{ fontSize: 40, color: "#FDC921" }}
                        aria-hidden="true"
                      />
                    </a>
                  </Box>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

export default SobreNos;
