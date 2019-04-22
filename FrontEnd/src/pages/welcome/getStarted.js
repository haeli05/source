import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

// Components
import JoinQueue from './components/joinQueue';
import PayButton from '../payments/payButton';
import ReactSVG from 'react-svg';
import ReactGA from 'react-ga';
import axios from 'axios';

// MISC
import logo from './img/logo.png';
import MessageBlob from '../../assets/svg/messageblob.svg';
import Letter from '../../assets/svg/letter.svg';


class GetStarted extends Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      feedback: '',
    }
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangeFeedback=this.handleChangeFeedback.bind(this);
    this.submit=this.submit.bind(this);
  }

  handleChangeEmail(e){
    this.setState({email:e.target.value});
  }

  handleChangeFeedback(e){
    this.setState({feedback:e.target.value});
  }

  submit() {
    if ( this.state.email!=="" && this.state.email.includes("@") && this.state.email.includes(".") && this.state.feedback !== ""){
      axios.post('/feedback',{email:this.state.email,feedback:this.state.feedback})
      .then(res=>{
        this.setState({sent:true});
      })
      .catch(err=>{
        this.setState({emailError:true});
        this.setState({emailErrorMessage:"There was an internal error. Please try again."});
      });
      ReactGA.event({
            category: 'Feedback',
            action: 'Gave feedback',
        });
    } else {
      this.setState({emailError:true});
      this.setState({emailErrorMessage:"Please provide a valid email"});
    }
  }

  render() {
    return (
      <div className="GetStarted">
      <Helmet>
        <title>Get Started || The Internet's Tech Incubator</title>
        <meta name="keywords" content="developers,programming,open source, blockchain, crowdfunding" />
        <meta
          name="description"
          content="Find developers for your projects"
        />
      </Helmet>
        <div className="Section">

          <Grid container spacing={24}>
            <Grid item xs={5}>
              <div className="GetStartedLabel">
                <Typography className="GetStartedTitle" color="textPrimary" variant="h1">
                Get <br/>Started
                </Typography>
                  <Typography variant="h4">The platform is currently under construction.<br/><br/>
                  Follow our progress&nbsp;
                  <Link component={RouterLink} to="/#todo">
                  here.
                  </Link>
                  <br/>
                  <br/>
                  Please reach out if you need immediate technical assistance, or want to list a project.</Typography>
                  <Fab
                  variant="extended"
                  size="large"
                  color="primary"
                  aria-label="Spectrum Chat"
                  className="Button"
                  href="https://spectrum.chat/sourcenetwork-io?tab=posts"
                  >
                  <ReactSVG src={MessageBlob} className="ReactSVGIcon Icon25 LeftIcon"/>
                  Chat
                  </Fab>
                  <Fab
                  variant="extended"
                  size="large"
                  color="secondary"
                  className="Button"
                  href="mailto:source@sourcenetwork.io"
                  >
                    <ReactSVG src={Letter} className="ReactSVGIcon Icon25 LeftIcon Letter"/>
                  Email
                  </Fab>
              </div>
            </Grid>
            <Grid item xs={7}>
            <div className="Form">
            <Typography className="Mission" variant="h6" color="textPrimary">
            Fill up this form for general enquiries, we will reply as soon as possible.
            </Typography>


            <TextField
            fullWidth
              label="Email"
              type="email"
              onChange={this.handleChangeEmail}
              margin="wide"
              variant="outlined"
              className="ContactInputName"
            />


            <TextField
            fullWidth
              multiline
              rows="13"
              rowsMax="13"
              label="Message"
              multiline
              type="email"
              onChange={this.handleChangeFeedback}
              margin="normal"
              variant="outlined"
              className="ContactInputMessage"
            />

            <Button
            variant="outlined"
            size="large"
            aria-label="Submit"
            className="Button"
            onClick={this.submit}
            >
            Submit
            </Button>
            </div>
            </Grid>
          </Grid>

        </div>

      </div>
    );
  }
}

export default GetStarted;
