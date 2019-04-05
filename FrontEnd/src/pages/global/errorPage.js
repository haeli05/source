import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class ErrorPage extends Component {
  render() {
    return (
      <div className="ErrorPage">
        <Typography variant="display4">An error occured</Typography>
          <Typography variant="display1">Please send feedback</Typography>
        <div className="ErrorPageActions">
          <Button variant="contained" color="primary" size="large" onClick={this.props.history.goBack}>go back</Button>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
