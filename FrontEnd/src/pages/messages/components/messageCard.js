import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReactTimeAgo from 'react-time-ago'

class MessageCard extends React.Component {
  constructor(props){
    super(props)
    this.goIdea=this.goIdea.bind(this);
  }

  goIdea(){
  }

  render() {
    return (
      <div className="MessageCard">
        <div className="Main" onClick={this.goIdea}>
          <div className="Header">
            <Typography variant="headline" className="Title">Title</Typography>
            <Typography variant="caption" className="Author" color="textSecondary">from Some1</Typography>
          </div>
          <Typography color="textSecondary" className="Body">Lorum Ipsum</Typography>
          <div className="When">
          <Typography variant="caption">Last seen</Typography>
            <ReactTimeAgo locale="en">
              time goes here
            </ReactTimeAgo>
          </div>
        </div>
        <div className="Actions">
        </div>
      </div>
    );
  }
}


export default MessageCard;
