import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class NewBranchDialogue extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      PrivateKey: '',
      TargetAddress: '',
      Amount: '',
      open: false
    }
    this.handlePrivateKeyChange=this.handlePrivateKeyChange.bind(this);
    this.handleTargetAddressChange=this.handleTargetAddressChange.bind(this);
    this.handleAmountChange=this.handleAmountChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
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

  render() {
    return (
      <div style={{marginLeft:"50px"}} className="TransferButton">
        <Button onClick={this.handleClickOpen} variant="outlined" style={{fontFamily:"gotham_htfbook", textTransform:"capitalize", height:"100%", width:"150px"}}>Transfer</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-TargetAddress"
        >
          <DialogTitle id="alert-dialog-title">{"Transfer"}</DialogTitle>
          <DialogContent>
            <div className="TransferButtonInputs">
              <p>Private Key</p>
              <input style={{width:"500px"}} value={this.state.PrivateKey} onChange={(e)=>{this.handlePrivateKeyChange(e)}}/>
              <p>Receiving Address</p>
              <input style={{width:"500px"}} value={this.state.TargetAddress} onChange={(e)=>{this.handleTargetAddressChange(e)}}/>
              <p>Amount</p>
              <input type="number" step="0.00001" style={{width:"500px"}} value={this.state.Amount} min="0" onChange={(e)=>{this.handleAmountChange(e)}}/>
            </div>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={this.handleSubmit} style={{ fontFamily:"inherit", borderRadius:"25px", marginTop:"50px", marginBottom:"50px", textTransform:"capitalize"}}>Submit</Button>
            <Button variant="outlined" onClick={this.handleClose} style={{ fontFamily:"inherit", borderRadius:"25px", marginTop:"50px", marginBottom:"50px", textTransform:"capitalize"}} >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NewBranchDialogue;
