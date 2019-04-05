import React from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Icons
import Icon from 'react-icons-kit';
import {basic_settings} from 'react-icons-kit/linea/basic_settings';
import {basic_trashcan} from 'react-icons-kit/linea/basic_trashcan';
import {arrows_remove} from 'react-icons-kit/linea/arrows_remove';
// SVG
import ReactSVG from 'react-svg';
import Write from './../../assets/svg/write.svg';
import Cross from './../../assets/svg/cross.svg';
// Redux
import { connect } from 'react-redux';
import {fetchIdea, deleteIdea, commentIdea} from './../../actions/ideas.actions';
import {getIdea,getFetchIdeaStatus,getCommentSubmitStatus} from './../../reducers/ideas.reducer';
import {getUser} from './../../reducers/user.reducer';
// Components
import Comment from './../global/components/comment';
import MajorActionButtons from './../global/components/majorActionButtons';
import VoteButtons from './../global/components/voteButtons';
import Chip from './../global/components/chip';
import ErrorPage from './../global/errorPage';
import ReactQuillEditor from './../global/components/reactQuillEditor';
import PayButton from './../payments/payButton.js'
// MISC
import {Link} from 'react-router-dom';


class AppPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areyousure: false,
    };
    this.props.dispatch(fetchIdea(this.props.match.params.idea));
    this.deleteIdea=this.deleteIdea.bind(this);
    this.no=this.no.bind(this);
    this.handleSubmitComment=this.handleSubmitComment.bind(this);
  }

  deleteIdea() {
    if (this.state.areyousure) {
      this.props.dispatch(deleteIdea(this.props.match.params.idea));
    }
    this.setState({areyousure:true})
  }

  no() {
    this.setState({areyousure:false})
  }

  handleSubmitComment(body, stringBody) {
    this.props.dispatch(commentIdea(body, stringBody, this.props.idea._id));
  }

  render() {
    if (this.props.commentSubmitStatus==="SUCCESS"){
      this.props.dispatch(fetchIdea(this.props.match.params.idea));
    }
    if (this.props.ideaStatus === "ERROR") {
      return (
        <ErrorPage history={this.props.history}/>
      )
    }
    if (this.props.ideaStatus === "SUCCESS") {
      return (
        <div className="IdeaPage RootMargins">
          <div className="PageTitle">
            <div className="OverlineAndButtons">
              <Typography variant="overline" variant="overline">APP by {this.props.match.params.user}</Typography>
              <MajorActionButtons {...this.props} title={this.props.idea.title} url={window.location.href}/>
            </div>
            <Typography variant="h2">{this.props.idea.title}</Typography>
            <div className="VoteButtonsDiv">
              <VoteButtons score={this.props.idea.trending.score}/>
            </div>
          </div>
          <div className="Content">
            <div className="Body">
              <div className="AppDiv">
                <div className="TheAppItself" />
                QuantStamp is great
                </div>
                <div className="RowBelow">
                  {this.props.user.id===this.props.idea.creator && (
                    <div className="CreatorActions">
                      <Button variant="fab" mini className="EditButton" component={Link} to={`/${this.props.match.params.user}/idea/${this.props.idea._id}/edit`}><ReactSVG src={Write} className="ReactSVGIcon"/></Button>
                      {this.state.areyousure && (
                        <ClickAwayListener onClickAway={this.no}>
                          <div className="Flex">
                            <Button variant="fab" mini className="CancelButton" onClick={this.no}><Icon icon={arrows_remove} size={20}/></Button>
                            <Button variant="fab" mini className="DeleteButton" onClick={this.deleteIdea}><Icon icon={basic_trashcan} /></Button>
                          </div>
                        </ClickAwayListener>
                      )}
                      {!this.state.areyousure && (
                        <Button variant="fab" mini className="DeleteButton" onClick={this.deleteIdea}><Icon icon={basic_trashcan} /></Button>
                      )}
                    </div>
                  )}
                  <div className="Topics">
                    {this.props.idea.tags.map(tag=>(
                      <div key={tag} className="IdeaChip">
                        <Chip {...this.props} label={tag}/>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="Discussion">
                {this.props.idea.blobs.map(comment => {
                  return (
                    <Comment {...this.props} comment={comment} type="ideacomment" key={comment._id}/>
                )
                })}
                {(this.props.user.token !== false && this.props.user.token !== undefined) && (
                  <div>
                    {this.props.commentSubmitStatus!=="PENDING" && (
                      <div className="AddComment">
                        <ReactQuillEditor placeholder="Share your thoughts ..." submit={this.handleSubmitComment}/>
                      </div>
                    )}
                    {this.props.commentSubmitStatus==="PENDING" && (
                      <div className="AddComment">
                        <div className="GenericLinearLoading">
                          <LinearProgress color="secondary"/>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {(this.props.user.token === false || this.props.user.token === undefined) && (
                  <div className="SignInToComment LinkUnderline">
                    <Typography className="Pointer" variant="body1" component={Link} to="/login">Sign in to join the discussion!</Typography>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="GenericLoading">
          <CircularProgress color="primary" size={50} />
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    idea: getIdea(state),
    user: getUser(state),
    ideaStatus: getFetchIdeaStatus(state),
    commentSubmitStatus: getCommentSubmitStatus(state),
  }
}


export default connect(mapStateToProps)(IdeaPage);
