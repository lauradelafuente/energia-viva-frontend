import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{backgroundColor: '#6798C0'}}>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: 'white' }}
              >
                Acompanhe nosso projeto:{' '}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://github.com/lucaandrey/energia-viva-frontend"
                target="_blank"
                rel="noreferrer"
              >
              <GitHubIcon style={{ fontSize: 45, color: 'white' }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: '#6798C0', height: '60px' }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: 'white' }}
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://github.com/lucaandrey/energia-viva-frontend">
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: 'white' }}
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;