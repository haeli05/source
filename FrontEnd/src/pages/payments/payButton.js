import React, { Component } from 'react';
// Material UI
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
// Icons
import Icon from 'react-icons-kit';
import {clipboard} from 'react-icons-kit/ionicons/clipboard'
// SVG
import ReactSVG from 'react-svg';
import WalletCoin from './../../assets/svg/walletcoin.svg';
//PayPal
import { PayPalButton } from "react-paypal-button-v2";

export default class PayButton extends Component {
  constructor(props) {
    super(props);
    this.state={
      currency: "BTC",
      copied: "copy",
    }
    this.handleLinkChange=this.handleLinkChange.bind(this);
    this.copy=this.copy.bind(this)
    this.resetCopy=this.resetCopy.bind(this)
    this.resetCopy2=this.resetCopy2.bind(this)
  }

  handleLinkChange(e){
    this.setState({ currency: e.target.value});
  }

  copy(toCopy) {
    var inp = document.createElement('input');
    document.body.appendChild(inp);
    inp.value = toCopy;
    inp.setSelectionRange(0,-1);
    document.execCommand('copy');
    inp.remove();
    this.setState({copied:"copied!"});
  }

  resetCopy() {
    window.setTimeout(this.resetCopy2, 200);
  }

  resetCopy2() {
    this.setState({copied:"copy"})
  }

  render() {
    return (
      <div className="PayButton">
        <FormControl className="PayForm TextWhite">
          <Select
            value={this.state.currency}
            onChange={this.handleLinkChange}
            className="PayForm"
            style={{color:"#FFF", fill:"#FFF", stroke: "#FFF"}}
          >
            <MenuItem value="BTC" className="PayCurrency"><Typography className="PayCurrency" variant="overline">Bitcoin</Typography></MenuItem>
            <MenuItem value="BCH" className="PayCurrency"><Typography className="PayCurrency" variant="overline">Bitcoin Cash</Typography></MenuItem>
            <MenuItem value="ETH" className="PayCurrency"><Typography className="PayCurrency" variant="overline">Ether</Typography></MenuItem>
            <MenuItem value="DAI" className="PayCurrency"><Typography className="PayCurrency" variant="overline">DAI</Typography></MenuItem>
            <MenuItem value="PayPal" className="PayCurrency"><Typography className="PayCurrency" variant="overline">PayPal</Typography></MenuItem>
          </Select>
        </FormControl>
        <Typography variant="subtitle1" className="PayLabel">
          {this.state.currency==="BTC" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0 PayLabel" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>1E2fGPCKyaWkRgzhjE3AyRpXrhVNfxVWYg</pre>
            </Tooltip>        )}
          {this.state.currency==="BCHAB" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0 PayLabel" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>test</pre>
            </Tooltip>        )}
          {this.state.currency==="ETH" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>test</pre>
            </Tooltip>        )}
          {this.state.currency==="DAI" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>test</pre>
            </Tooltip>        )}
          {this.state.currency==="PAYPAL" && (
            
                  <PayPalButton
                   amount="10.01"
                   onSuccess={(details, data) => {
                     alert("Transaction completed by " + details.payer.name.given_name);

                     // OPTIONAL: Call your server to save the transaction
                     return fetch("/paypal-transaction-complete", {
                       method: "post",
                       body: JSON.stringify({
                         orderID: data.orderID
                       })
                     });
                   }}
                 />
                )}
        </Typography>
        <Button variant="contained" className="Pay"><Icon icon={clipboard} className="CopyIcon"/>Copy</Button>
      </div>
    )
  }
}
