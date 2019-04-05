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
import Avatar from '@material-ui/core/Avatar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
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
import SettingsButton from './../global/components/settingsButton';
import ReactQuillEditor from './../global/components/reactQuillEditor';
import PayButton from './../payments/payButton.js'
// MISC
import {Link} from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import { SocialIcon } from 'react-social-icons';
import SwipeableViews from 'react-swipeable-views';



class QuantStamp extends React.Component {
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
      return (
        <div className="AppPage RootMargins">
          <div className="PageTitle">
            <div className="OverlineAndButtons">
              <Typography variant="overline" variant="overline">APP by QuantStamp</Typography>


            </div>
            <Typography variant="h2">Smart Contract Audit</Typography>
            <div className="VoteButtonsDiv">

            </div>
          </div>
          <div className="Content">
            <div className="Body">
              <div className="AppDiv">
                <div className="TheAppItself" >
                  <div className="Left">
                  <div style={{width:"250px"}}>
                    <ReactImageMagnify {...{
                        smallImage: {
                            className: "Image",
                            alt: 'Image Goes Here',
                            isFluidWidth: true,
                            src: "https://icodrops.com/wp-content/uploads/2017/10/How-it-work.png"
                        },
                        largeImage: {
                            className: "Magnification",
                            src: "https://icodrops.com/wp-content/uploads/2017/10/How-it-work.png",
                            width: 1200,
                            height: 1800
                        }
                      }} />
                      <div className="Thumbnails">
                        <Avatar className="Thumbnail" small>S</Avatar>
                        <Avatar className="Thumbnail" small>N</Avatar>
                        <Avatar className="Thumbnail" small>A</Avatar>
                        <Avatar className="Thumbnail" small>P</Avatar>
                      </div>
                    </div>
                    <div className="Social">
                    <SocialIcon style={{ height: 34, width: 34 }} url="https://twitter.com/haeli05" />
                    </div>

                  </div>
                  <div className="Middle">
                    <Paper className="Paper">
                    <div className="Description">
                      <Typography  variant="h6">
                        Smart Contract Audits by QuantStamp. Professionally delivered.
                      </Typography>
                    </div>
                      <div className="Topics">
                          <div key="Smart Contracts" className="IdeaChip">
                            <Chip {...this.props} label="Smart Contracts"/>
                          </div>
                          <div key="QuantStamp" className="IdeaChip">
                            <Chip {...this.props} label="QuantStamp"/>
                          </div>
                      </div>
                      <div className="Options">
                        <Typography variant="subtitle1"> Options </Typography>
                        <div className="Thumbnails">
                          <Button className="Thumbnail" variant="fab" small>Small</Button>
                          <Button className="Thumbnail" variant="fab" small>Med</Button>
                          <Button className="Thumbnail" variant="fab" small>Large</Button>
                        </div>
                        <Typography variant="body2">A 500-1000 line contract</Typography>
                      </div>


                      <Typography variant="h6"> Price </Typography>
                      <Typography variant="body2"> $500-$20,000 </Typography>
                      <PayButton />
                    </Paper>
                  </div>

                </div>
                </div>
              </div>
              <div className="FooterTabs">
                <div className="Related">
                <Typography variant="overline">Related</Typography>
                </div>
              <Card elevation={0}>
                <AppBar position="static" elevation={0} color="primary">
                  <Tabs value={this.state.value} onChange={this.handleTabChange} fullWidth indicatorColor="primary">
                    <Tab label="Reviews"/>
                    <Tab label="FAQ"/>
                    <Tab label="Warranty"/>
                  </Tabs>
                </AppBar>
                <SwipeableViews index={this.state.value} onChangeIndex={this.handleTabChange} animateHeight>
                <div className="Discussion">
                        <div className="AddComment">
                          <ReactQuillEditor placeholder="Share your thoughts ..." submit={this.handleSubmitComment}/>
                        </div>
                </div>
                </SwipeableViews>
              </Card>

              </div>
              </div>

        </div>
      );

  }
}


const mapStateToProps = (state) => {
  return {
  }
}


export default connect(mapStateToProps)(QuantStamp);
