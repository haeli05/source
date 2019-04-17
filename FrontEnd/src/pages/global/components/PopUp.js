//Popup for Beta
import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import ReactQuillEditor from './reactQuillEditor';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PersonChip from './personChip';
import Comment from './comment';

class PopUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: this.props.content? this.props.content : <ReactQuillEditor />,
      author: this.props.author,
    }
  }

  render() {
    return (
      <Card  >
        <div className="ThoughtCard">
          <CardContent>
          <div className="Header">

          </div>
          <div className="ThoughtBody">
                 {this.state.content}
          </div>
          </CardContent>

        </div>

      </Card>
    )}

}


export default PopUp;
