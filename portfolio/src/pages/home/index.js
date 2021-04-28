import * as React from "react"
import './styles.css'
import RachelDP from '../../assets/RachelDP.png'
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import hackerrank from '../../assets/hackerrank.png';
import MailRoundedIcon from '@material-ui/icons/MailRounded';

const social = [
    {icon: github, to: 'https://github.com/racheltanxueqi'},
    {icon: linkedin, to: 'https://www.linkedin.com/in/racheltanxueqi/'},
    {icon: hackerrank, to: 'https://www.hackerrank.com/racheltanxueqi'}
]

function Home() {
    return(
        <div className="container">
            <div className="main">
                <div className="container-image">
                    <img className="image" src={RachelDP} alt="Rachel's display picture"/>
                </div>
                <div className="description">
                    <div className="name">Rachel Tan</div>
                    <svg style={{height: '3px', width: '8.3vw', backgroundColor: "#f373a3"}}></svg>
                    <div className="intro">I am a <b style={{color: "#af2d99"}}>Software Engineer.</b></div>
                    <div className="intro">Creating beautiful UI, Building and Deploying </div>
                    <div className="intro">the entirety of an application is <b style={{color: "#af2d99"}}>My Passion.</b></div>
                </div>
            </div>
            <div className="social-media">
                {social.map((e) => <a target="_blank" rel={'external'} href={e.to}><img src={e.icon} className="image-social"/></a>)}
                <div className="contact">
                    <div style={{textAlign: "right", marginRight: "10px"}}>
                        <div style={{color:"grey"}}>Let's get in touch!</div>
                        <div><b>racheltanxueqi@gmail.com</b></div>
                    </div>
                    <button className="email-button"><MailRoundedIcon /></button>
                </div>
            </div>

        </div>
    )
}

export default Home