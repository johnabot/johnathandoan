import React from 'react';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <IconButton href="https://www.linkedin.com/in/johnathandoan/" target="_blank">
              <LinkedInIcon />
          </IconButton>
          <IconButton href="mailto:johnathanhungdoan@gmail.com">
              <EmailIcon />
          </IconButton>
          <IconButton href="https://github.com/johnabot" target="_blank">
              <GithubIcon />
          </IconButton>
        </div>
        <p> &copy; 2023 Johnathan Doan </p>
    </div>
  )
}

export default Footer