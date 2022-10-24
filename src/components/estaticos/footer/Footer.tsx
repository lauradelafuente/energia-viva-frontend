import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if(token != ""){
      footerComponent = <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <footer className="footer-distributed">
<Grid container alignItems='row'>
<Grid alignItems='center' item xs={4} className="footer-left">
          <Link to="/home" className="logo-link">
            <h3 className="h3">
              Energia <span className="span-viva">Viva</span>
            </h3>
          </Link>

  <p className="footer-links">
    <a href="#">Home</a>
    <p></p>
    <a href="#">Produtos</a>
    <p></p>
    <a href="#">Sobre nós</a>
    <p></p>
    <a href="#">Perguntas frequentes</a>
    <p></p>
    <a href="#">Contatos</a>
  </p>

  <p className="footer-energiaviva">Energia Viva © 2022</p>

</Grid>
<Grid alignItems='center' item xs={4} className="footer-center">
<div>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com" target="_blank">
                        <FacebookIcon className='redes' />
                    </a>
                    <a href="https://www.instagram.com" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                        <GitHubIcon className='redes' />
                    </a>
                </Box>
            </div>

</Grid>

<Grid alignItems='center' item xs={4}> 
<div className="footer-right">

  <p>Contate-nos</p>

  <form action="#" method="post">

    <input type="text" name="email" placeholder="Email"/>
    <textarea name="message" placeholder="Message"></textarea>
    <button>Enviar</button>

  </form>

</div>
</Grid>
</Grid>

</footer>
    </Grid>
    
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;