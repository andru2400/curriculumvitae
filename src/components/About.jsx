import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em  0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #E91E63;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutMain = styled.div`
    text-align: center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #C2185B;
`;

const AboutProfession = styled.p`    
    margin: .2em 0 0 0;
    letter-spacing: 1.6px;
    font-weight: 300;
    color: #2185B;
`;

const AboutBio = styled.p`     
    font-size: 1em;
    font-weight: 300;
    color: #757575;
`;

const AboutLocation = styled.p`     
    font-size: 1em;
    font-weight: 400;
    color: #757575;
`;

const About = ({ avatar,name,profession,bio,address,social }) => (
    <AboutStyle>
        <div className="About.container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name}></AboutImg>
                </figure>
            </AboutAvatar>
            <AboutMain>
                <AboutH2>{name}</AboutH2>
            </AboutMain>
            <div className="About-profession">
                <AboutProfession>{profession}</AboutProfession>
            </div>
            <div className="About-description">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-location">
                <AboutLocation>{address}</AboutLocation>
            </div>
            <div className="About-social">
                <Social social={social}/>
            </div>
        </div>
    </AboutStyle>
)

export default About;