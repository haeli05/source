import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from './logo.png';


class OnePager extends Component {
  render() {
    return (
      <div className="OnePagerUnlocked">
        <div className="Page">
          <div className="Top">
            <Typography className="Header" variant="caption">Introducing</Typography>
            <img className="WelcomeLogo" src={logo} width="175px" alt="source"/>
          </div>
          <div className="Body">
            <Typography variant="body1" className="MainPara">The world is becoming decentralized. Distributed teams are becoming the norm. Cryptocurrency has enabled decentralized funding and ownership, but creative collaboration is still largely constrained by geography. Open source allows people to collaborate on software across the internet, but it suffers from high friction, difficulty in finding collaborators and a lack of incentives to drive contribution. </Typography>
            <Typography variant="body1" className="MainPara">Cryptoeconomic protocols capture network effects by creating financial incentives that drive all parties on the network to coordinate their actions towards an optimal outcome. Developments around crypto-economic protocols prove that token incentives are effective at fostering community and collaboration.</Typography>
            <Typography variant="body1" className="MainPara">Source is a cryptoeconomic protocol platform that brings people together to build open source projects.</Typography>

            <Typography variant="body1" className="MainPara">The Source protocol issues tokens to most active projects, therefore incentivizing good projects and contributors. Users share their ideas and find projects according to interests, and then share their skills and resources. Source Projects function as decentralized autonomous organizations, manage various  functions and relationships in a transparent and trustless manner.</Typography>

            <Typography variant="body1" className="MainPara">For the first time in history, everyone can build anything with just an idea and an internet connection.</Typography>

            <Typography variant="subheading" className="Title">Source’s Value Proposition:</Typography>
            <Typography variant="body1" className="Para">Source integrates powerful powerful smart contracts and cryptocurrency incentives with Git-based development tools, allowing everyone to create decentralized project-centric organizations that share value with cryptocurrency .</Typography>
            <div className="List">
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1" className="Name">For Developers:</Typography>
                <Typography variant="body1">Token rewards for contributing to Open Source projects</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1" className="Name">For Projects:</Typography>
                <Typography variant="body1"> Custom compensation frameworks to attract contribution / Transparent and trustless way of fundraising and management.</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1" className="Name">For Investors:</Typography>
                <Typography variant="body1">Access to the dev community / accountable and transparent mechanisms to fund projects (recurring donations, vesting, cliff, milestone-based)</Typography>
              </div>
            </div>
            <Typography variant="subheading" className="Title">SOURCE Token:</Typography>
            <Typography variant="body1" className="Para">Tokens aligns financial incentives and offset costs associated with organizing multiple parties around a single technical standard. Token staking is used for decentralized governance, and to impose “Skin in the Game” on users to penalizes malicious actors.
</Typography>
            <div className="List">
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Directly issued to active projects, then distributed to developers</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Constant Inflation of 5%. (0.75% for Source Foundation; 4.25% active projects)[Inflation subject to community vote]</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Staking to be able to take actions, advertise, and penalize malicious behavior</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Medium of exchange for services between users, projects and platform</Typography>
              </div>
            </div>
            <Typography variant="subheading" className="Title">Revenue Model:</Typography>
            <div className="List">
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Platform data analytics</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">15% cut from token generation to promote Source’s usage and development</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Paid plugin marketplace (e.g. continuous integration, web hosting, code quality monitoring)</Typography>
              </div>
            </div>
            <Typography variant="subheading" className="Title">Company and Management:</Typography>
            <Typography variant="body1" className="Para">Source was founded in New York, New York by 4 NYU students.</Typography>
            <div className="List">
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Hao Jun Tan</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Lucas Schlötzer de Lucio</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Carlos Santos</Typography>
              </div>
              <div className="ListItem">
                <Typography variant="body1" className="Bullet">•</Typography>
                <Typography variant="body1">Yonatan Medina</Typography>
              </div>
            </div>
          </div>
          <div className="DeckButtonDiv">
            <a href="/deck.pdf" style={{textDecoration:"none"}}>
              <Button variant="outlined" className="DeckButton">Deck</Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default OnePager;
