import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class NewBranchDialogue extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      PrivateKey: '',
      TargetAddress: '',
      Amount: '',
      open: false,
    }
    this.handlePrivateKeyChange=this.handlePrivateKeyChange.bind(this);
    this.handleTargetAddressChange=this.handleTargetAddressChange.bind(this);
    this.handleAmountChange=this.handleAmountChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleClickOpen=this.handleClickOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
  }

  handlePrivateKeyChange(e) {
    this.setState({PrivateKey:e.target.value})
  }
  handleTargetAddressChange(e) {
    this.setState({TargetAddress:e.target.value})
  }
  handleAmountChange(e) {
    this.setState({Amount:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.PrivateKey,this.state.TargetAddress,this.state.Amount);
  }

  handleClickOpen  ()  {
    this.setState({ open: true });
  };

  handleClose  ()  {
    this.setState({ open: false });
  };

  handleKeyPress(e){
    if(e.key === 'Enter'){
      this.handleSubmit();
    }
  }

  render() {
    return (
      <div className="TransferButton">
        <Button onClick={this.handleClickOpen} variant="outlined">Transfer</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-TargetAddress"
        >
          <DialogTitle>Transfer</DialogTitle>
          <DialogContent>
            <TextField
              id="privatekey-input"
              label="Private Key"
              value={this.state.PrivateKey}
              onChange={(e)=>{this.handlePrivateKeyChange(e)}}
              onKeyPress={(e)=>{this.handleKeyPress(e)}}
              fullWidth
              margin="normal"
            />
            <TextField
              id="address-input"
              label="Receiving Address"
              value={this.state.TargetAddress}
              onChange={(e)=>{this.handleTargetAddressChange(e)}}
              onKeyPress={(e)=>{this.handleKeyPress(e)}}
              fullWidth
              margin="normal"
            />
            <TextField
              id="amount-input"
              label="Amount"
              type="number"
              inputProps={{ min: "0"}}
              value={this.state.Amount}
              onChange={(e)=>{this.handleAmountChange(e)}}
              onKeyPress={(e)=>{this.handleKeyPress(e)}}
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">Cancel</Button>
            <Button onClick={this.handleSubmit} color="primary">Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NewBranchDialogue;
