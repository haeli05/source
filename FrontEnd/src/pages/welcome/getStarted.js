import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
// Components
import JoinQueue from './components/joinQueue';
import PayButton from '../payments/payButton';
import ReactSVG from 'react-svg';
// MISC
import logo from './img/logo.png';
import WalletCoin from '../../assets/svg/walletcoin.svg';
import {Link} from 'react-router-dom';
import Board from './../workflow/Board';

import { PayPalButton } from "react-paypal-button-v2";

const malarkey = require('malarkey');
const ScrollMagic = require("scrollmagic");

class GetStarted extends Component {
  constructor(props){
    super(props);
    this.state={
      Mission1: "MissionHiddenStart",
      Mission2: "MissionHiddenStart",
      controller: null,
      lastKeys: [],
      username: '',
    }
    this.listenScrollEvent=this.listenScrollEvent.bind(this);
    this.conditionallyAnimate=this.conditionallyAnimate.bind(this);
    this.animate=this.animate.bind(this);
    this.handleChangeSignUp=this.handleChangeSignUp.bind(this);
  }

  componentDidMount(){
  }

  conditionallyAnimate() {

  }

  animate(controller) {

  }

  componentWillUnmount(){

  }

  _handleKeyDown(event){
    var keyArray = this.state.lastKeys
    keyArray.push(event.keyCode)
    if (keyArray.length===11){
      keyArray.shift()
    }
    this.setState({lastKeys:keyArray})
    var a = keyArray.join()
    var b = [38,38,40,40,37,39,37,39,65,66].join()
    if(a===b){
      alert("Carlos sucks major donkey balls")
    }
  }

  listenScrollEvent() {
  }

  handleChangeSignUp(e){
    this.setState({username:e.target.value});
  }

  render() {
    return (
      <div className="GetStarted">
        <div className="Hero">
          <div className="WelcomeSignUp">
          <Grid container spacing={24}>
            <Grid item xs={6}>
            <Typography className="Mission" color="textPrimary" variant="h1">
            Get <br/>Started
            </Typography>

              <Typography variant="h4">The platform is currently under construction. Follow our progress <a>here.</a>
              <br/>
              Contact us if you need immediate technical assistance, or want to list a project.</Typography>
              <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="Spectrum Chat"
              >
              <ReactSVG src={WalletCoin} className="ReactSVGIcon WalletCoin"/>
              Chat
              </Fab>
              <Fab>Email</Fab>

            </Grid>
            <Grid item xs={6}>
            <Typography className="Mission" variant="h4" color="textPrimary">
            Fill up this form, we will be with you shortly.
            </Typography>
            <Button variant="outlined">
            Submit
            </Button>
            </Grid>
          </Grid>
          </div>
        </div>

      </div>
    );
  }
}

export default GetStarted;
