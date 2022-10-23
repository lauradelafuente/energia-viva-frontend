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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

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
    <Grid container marginTop="50px" >
    <Swiper pagination={{type: "progressbar",}} modules={[Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
        <Grid container display="flex" direction="row"
              alignItems="center"
              justifyContent="center">
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
        </SwiperSlide>
        <SwiperSlide><Grid container>
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
      </SwiperSlide>
      </Swiper>
      </Grid>
    <Grid container direction="row" justifyContent="center" alignItems="flex-start" paddingY={3} style={{backgroundColor: '#FDC921'}}>
    <Grid sm={6} alignItems="flex-start" className="barra">
    <Box paddingX={20}>
      <Typography variant="h3" gutterBottom color="textPrimary" component="h3" style={{color: 'white'}}>QUEM SOMOS?</Typography>
      <Typography variant="h6" gutterBottom color="textPrimary" component="h6" style={{color: 'white'}}>Nossa equipe é composta por seis desenvolvedores formados na Generation Brasil. O e-commerce tem como base uma das ODS's (Objetivos de Desenvolimento Sustentável) da ONU, a ODS 7</Typography>
    </Box>
    </Grid>
    <Grid sm={6} alignItems="center" className="fgradient">
    <Box paddingX={20}>
    <Typography variant="h3" gutterBottom color="textPrimary" component="h3"  style={{color: 'white'}}>O QUE FAZEMOS?</Typography>
      <Typography variant="h6" gutterBottom color="textPrimary" component="h6" style={{color: 'white'}}>A ODS 7 põe em pauta o acesso às diferentes fontes de energia e a preservação ambiental. Nós comercializamos painéis solares e parte da renda é convertida à distribuição de energia em comunidades sem acesso.</Typography>
    </Box>
    </Grid>
    </Grid>

      
      
      </>
  );
}

export default SobreNos;
