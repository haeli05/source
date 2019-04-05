import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


class YouMustBeLoggedInPage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="YouMustBeLoggedInPage">
        <Typography variant="h1">You must be logged in to do that</Typography>
        <div className="MustBeActions">
          <Button variant="contained" color="primary" component={Link} to="/login">Login</Button>
          <Typography variant="body1" className="MustBeActionsSeperator">or</Typography>
          <Button variant="contained" color="primary" onClick={this.props.history.goBack}>Go back</Button>
        </div>
      </div>
    )
  }
}

export default YouMustBeLoggedInPage;
