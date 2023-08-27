import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home"> 
      <div className="about">
        <h2> Hi, My name is Johnathan</h2>
        <div className= "prompt">
          <p>
            A software developer with a passion for cloud and web3. 
          </p>
          <LinkedInIcon />
          <EmailIcon /> 
          <GithubIcon />
        </div>
      </div>
      <div className="skills"> 

        <h1> Skills </h1> 
        <ol className='list'>
          <li className='item'>
            <h2> Front-End </h2>
            <span>ReactJS, HTML, CSS</span>
          </li>
          <li className='item'>
            <h2> Back-End </h2>
            <span>NodeJS</span>
          </li>
          <li className='item'>
            <h2> Back-End </h2>
            <span> JavaScript, Rust, Python, C, TypeScript </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home