import React from 'react';
// Material UI
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// SVG
import ReactSVG from 'react-svg';
import Arrow from './../../../assets/multimedia-collection/back.svg';
// Components
import LoginPrompt from './../../global/components/loginPrompt'
// Redux
import {connect} from 'react-redux';
import {ideaVote} from './../../../actions/ideas.actions'
import {getIdeaVoteStatus, getVotedOn} from './../../../reducers/ideas.reducer'
import {repoVote} from './../../../actions/repo.actions'
import {getRepoVoteStatus} from './../../../reducers/repo.reducer'


class VoteButtons extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      votes: (this.props.votes)? this.props.votes: 0,
      // [1 = upvote, 0 = downvote, -1 = no vote]
      up: -1,
      // If there was some kind of error
      error: false,
      // Classnames for up and down vote buttons
      upvote: "VoteButton",
      downvote: "VoteButton",
      // Login prompt
      loginPromptOpen: false
    };
    this.handleClick=this.handleClick.bind(this);
    this.loginPromptClose=this.loginPromptClose.bind(this);
  }

  componentDidMount(){
    if(this.props.user.user!==undefined&&this.props.user.user!==false&&this.props.user.user.voted!==undefined){
      var isInVoted = this.props.user.user.voted.find(votedArray => votedArray.id === this.props.id)
      if(isInVoted!==undefined){
        if(isInVoted.which===1){
          this.setState({up:1})
          this.setState({upvote:"VoteButton UpVoteActive"})
          this.setState({downvote:"VoteButton"})
        } else {
          this.setState({up:0})
          this.setState({upvote:"VoteButton"})
          this.setState({downvote:"VoteButton DownVoteActive"})
        }
      }
    }
  }

  handleClick(vote) {
    if (this.props.user===false || this.props.user===undefined || this.props.user.token===false || this.props.user.token===undefined) {
      this.setState({loginPromptOpen:true})
    }
    else {
      this.setState({up: vote});
      if (vote===1 && this.state.up===1) {
        this.setState({upvote:"VoteButton"})
        this.setState({downvote:"VoteButton"})
        this.setState({votes:this.state.votes-1})
        this.setState({up:-1})
      }
      else if (vote===1) {
        this.setState({upvote:"VoteButton UpVoteActive"})
        this.setState({downvote:"VoteButton"})
        if (this.state.up===-1) {
          this.setState({votes:this.state.votes+1})
        } else { this.setState({votes:this.state.votes+2}) }
      }
      else if (vote===0 && this.state.up===0) {
        this.setState({upvote:"VoteButton"})
        this.setState({downvote:"VoteButton"})
        this.setState({votes:this.state.votes+1})
        this.setState({up:-1})
      }
      else {
        this.setState({upvote:"VoteButton"})
        this.setState({downvote:"VoteButton DownVoteActive"})
        if (this.state.up===-1) {
          this.setState({votes:this.state.votes-1})
        } else { this.setState({votes:this.state.votes-2}) }
      }
      if(this.props.type==="idea"){
        this.props.dispatch(ideaVote(this.props.type,vote,this.props.id))
      } else if (this.props.type==="ideacomment") {
        this.props.dispatch(ideaVote("blob",vote,this.props.id))
      } else if (this.props.type==="project") {
        this.props.dispatch(repoVote(vote,this.props.id,"repo"))
      } else if (this.props.type==="issue"){
        this.props.dispatch(repoVote(vote,this.props.id,"issue"))
      } else if (this.props.type==="issuecomment"){
        this.props.dispatch(repoVote(vote,this.props.id,"blob"))
      }
    }
  }

  loginPromptClose() {
    this.setState({loginPromptOpen:false})
  }

  render() {
    return (
        <div className="VoteButtonsRoot">
          <IconButton className={this.state.upvote} onClick={() => this.handleClick(1)} >
            <ReactSVG src={Arrow} className="Up"/>
          </IconButton>
          <Typography variant="caption" className="VoteScore">{this.state.votes}</Typography>
          <IconButton className={this.state.downvote} onClick={() => this.handleClick(0)} >
            <ReactSVG src={Arrow} className="Down"/>
          </IconButton>
          <LoginPrompt open={this.state.loginPromptOpen} close={this.loginPromptClose}/>
        </div>
    );
  }
}


const mapStateToProps =(state) =>{
  return{
    ideaVoteStatus: getIdeaVoteStatus(state),
    votedOn: getVotedOn(state),
    repoVoteStatus: getRepoVoteStatus(state),
  }
}
export default connect(mapStateToProps)(VoteButtons);
