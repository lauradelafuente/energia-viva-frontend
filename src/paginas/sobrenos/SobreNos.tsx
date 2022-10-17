import React from 'react';
import "./SobreNos.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';

function SobreNos() {
  return (
    <div className="container">
  <div className="card card0">
    <div className="border">
      <h2>Laura De La Fuente</h2>
      <div className="icons">
      <GitHubIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      <LinkedInIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      </div>
    </div>
  </div>
  <div className="card card1">
    <div className="border">
      <h2>Luca Andrey</h2>
      <div className="icons">
      <GitHubIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      <LinkedInIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      </div>
    </div>
  </div>
  <div className="card card2">
    <div className="border">
      <h2>Kelvyn Farias</h2>
      <div className="icons">
      <Box display="flex" alignItems="center" justifyContent="center">
        <a
        href="https://github.com/lucaandrey/energia-viva-frontend"
        target="_blank"
        rel="noreferrer"
        >
      <GitHubIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      </a>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <a
        href="https://github.com/lucaandrey/energia-viva-frontend"
        target="_blank"
        rel="noreferrer"
        >
      <LinkedInIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      </a>
      </Box>
      </div>
    </div>
  </div>
  <div className="card card3">
    <div className="border">
      <h2>Larissa Lacerda</h2>
      <div className="icons">
      <GitHubIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      <LinkedInIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      </div>
    </div>
  </div>
  <div className="card card2">
    <div className="border">
      <h2>Gustavo Henrique</h2>
      <div className="icons">
      <GitHubIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      <LinkedInIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      </div>
    </div>
  </div>
  <div className="card card2">
    <div className="border">
      <h2>Henrique Leonardo</h2>
      <div className="icons">
      <GitHubIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      <LinkedInIcon style={{ fontSize: 40, color: '#FDC921' }} aria-hidden="true"/>
      </div>
    </div>
  </div>
</div>
  )
}

export default SobreNos
