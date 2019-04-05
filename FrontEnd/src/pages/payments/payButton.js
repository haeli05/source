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
            <MenuItem value="QTM" className="PayCurrency"><Typography className="PayCurrency" variant="overline">Quantum</Typography></MenuItem>
            <MenuItem value="EOS" className="PayCurrency"><Typography className="PayCurrency" variant="overline">EOS</Typography></MenuItem>
            <MenuItem value="XRP" className="PayCurrency"><Typography className="PayCurrency" variant="overline">Ripple</Typography></MenuItem>
          </Select>
        </FormControl>
        <Typography variant="subtitle1" className="PayLabel">
          {this.state.currency==="BTC" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0 PayLabel" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>1E2fGPCKyaWkRgzhjE3AyRpXrhVNfxVWYg</pre>
            </Tooltip>        )}
          {this.state.currency==="BCH" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0 PayLabel" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>test</pre>
            </Tooltip>        )}
          {this.state.currency==="ETH" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>test</pre>
            </Tooltip>        )}
          {this.state.currency==="QTM" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>test</pre>
            </Tooltip>        )}
          {this.state.currency==="EOS" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>test</pre>
            </Tooltip>        )}
          {this.state.currency==="XRP" && (
            <Tooltip title={this.state.copied} placement="top">
              <pre className="Pointer Margin0" onClick={()=>this.copy()} onMouseLeave={this.resetCopy}>test</pre>
            </Tooltip>
          )}
        </Typography>
        <Button variant="contained" className="Pay"><Icon icon={clipboard} className="CopyIcon"/>Copy</Button>
      </div>
    )
  }
}
