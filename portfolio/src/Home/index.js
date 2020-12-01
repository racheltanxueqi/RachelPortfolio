import React, { useState } from 'react';

import rachel from '../assets/rachel.png';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.png';

import '../App.css'
import './index.css'
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function Home() {
    return (
        <div className="section">
            <div className="section-container">
                <div className="section-content">
                    <div className="section-home-label-1">
                        <h4>RACHEL TAN XUE QI</h4>
                    </div>
                    <div className="section-home-label-2">
                        <h1>Front End Developer and</h1>
                        <h1>UI/UX Designer</h1>
                    </div>
                    <div className="section-home-label-3">
                        <h5>Perfectionist.</h5>
                        <h5>A penultimate year student of School of Computing at National University of Singapore (NUS), specialised in Software Engineering, Artificial Intelligence and Multimedia Information Retrieval.</h5>
                    </div>
                    <div className="section-buttons">
                        <IconButton aria-label="github" style={{borderRadius:'0'}}>
                            <img src={github} style={{width:'60px'}}></img>
                        </IconButton>
                        <IconButton aria-label="linkedin" style={{borderRadius:'0'}}>
                            <img src={linkedin} style={{width:'60px'}}></img>
                        </IconButton>
                        <IconButton aria-label="email" style={{borderRadius:'0'}}>
                            <img src={email} style={{width:'60px'}}></img>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;