import React, { Component } from 'react'
import Transactions from './components/transactions'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// MUI
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { ShareButton } from '../global/components/majorActionButtons.js'
import PayButton from './payButton'

// let updatedData = (data, labels) => {
//   return {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       fillColor: 'rgba(220,220,220,0.2)',
//       strokeColor: 'rgba(220,220,220,1)',
//       pointColor: 'rgba(220,220,220,1)',
//       pointStrokeColor: '#fff',
//       pointHighlightFill: '#fff',
//       pointHighlightStroke: 'rgba(220,220,220,1)',
//       data: data,
//       sum: 0
//     }] }
// }
class Wallet extends Component {
  constructor (props) {
    super(props)
    this.state = {

      legend: [],
      dataArr: [],
      arr: [],
      narr: [],
      max: 0,
      data: [],
      update: false,
      totalBalance: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  async componentDidMount () {
    // console.log()
    // let a = await e();
    // //console.log(a);
    // let t = a.map(id=>{return id.time.toString()})
    // let d = a.map(id=>{return parseInt(id.amount.split(" ")[0])})
    // if(t.length===0){
    //   t = [0];
    //   d=[0];
    //   a=[0];
    // }
    // console.log("t",t,"d",d);
    // options.scales.yAxes.push({ticks:{suggestedMin:0,suggestedMax:Math.max(...d)}})
    // options.scales.xAxes.push({ticks:{suggestedMin:Math.min(...t),suggestedMax:Math.max(...t)+20}})
    // let n=fl(t,d)
    // let datat = updatedData(d,t);
    // let sum =d.reduce(function(a, b) { return a + b; }, 0);
    // this.setState({arr:a,legend:t,data:datat,narr:n,sum:sum});

  }
  handleTabChange (event, value) {
    this.setState({ value })
  }
  // handleSubmit(PrivateKey,TargetAddress,amount){
  //   let keyProvider= PrivateKey
  //   let eos2=Eos({keyProvider});
  //   amount = amount.toString()+" "+"SYS";
  //   eos2.transfer(this.props.match.params.user,TargetAddress,amount,'').then((err,res)=>{
  //     if(!err) {alert("ERROR TRANSFER");console.log(err);}
  //     else alert(`SENT TRANSACTION TO ${TargetAddress}`);
  //   });
  // }
  render () {
    const { value } = this.state
    return (
      <div className='WalletPage'>
        <div className='PageTitle'>
          <div className='OverlineAndButtons'>
            <Typography variant='overline'>WALLET {this.props.match.params.user}</Typography>
            <div className='UtilityButtons'>
              <div className='IndividualUtilityButton'>
                <ShareButton {...this.props} />
              </div>
            </div>
          </div>
          <Typography variant='display4'>Balance: 0.00 US$</Typography>
        </div>
        <Paper className='Paper'>
          <PayButton />
          <AppBar position='static' elevation={0} color='primary'>
            <Tabs value={value} onChange={this.handleTabChange} indicatorColor='primary'>
              <Tab label='Balance' />
              <Tab label='Integrations' />
              <Tab label='Transactions' />
            </Tabs>
          </AppBar>
          {value === 0 &&
          <div className='Balance'>

            <Typography variant='display1'>US$:</Typography>
            <Typography variant='display1'>{this.state.sum} </Typography>
            <Typography variant='display1'>BTC:</Typography>
            <Typography variant='display1'>{this.state.sum} </Typography>
            <Typography variant='display1'>ETH:</Typography>
            <Typography variant='display1'>{this.state.sum} </Typography>
            <Typography variant='display1'>EOS:</Typography>
            <Typography variant='display1'>{this.state.sum} </Typography>
          </div>}
          {value === 1 &&
          <div className='Integrations'>
            <Typography variant='display1'>US$:</Typography>
            <Typography variant='display1'>BTC:</Typography>
            <Typography variant='display1'>Your_Public_Key  </Typography>
            <Typography variant='display1'>ETH:</Typography>
            <Typography variant='display1'>Your_Public_Key  </Typography>
            <Typography variant='display1'>EOS:</Typography>
            <Typography variant='display1'>Your_Public_Key  </Typography>
          </div>}
          {value === 2 &&
          <div className='Transactions'>
            <Typography variant='display1'>Transactions</Typography>
            <div className='History'>
              <Typography variant='caption'>From/To</Typography>
              <Typography variant='caption'>Amount</Typography>
            </div>
            <Transactions data={this.state.arr} />
          </div>}
        </Paper>
      </div>
    )
  }
}
export default Wallet

/*
    <div className="Graph">
      <WalletGraph data={this.state.data}/>
    </div>
    if(this.state.arr.length===0){
      return(<div><p>Loading</p></div>);
    }
    else if(this.state.arr[0]===0){
      return(
        <div className="WalletPage">
          <div className="Header">
            <div className="PageTitle">
              <Typography variant="overline">{this.props.match.params.user}</Typography>
              <Typography variant="display4">Wallet</Typography>
            </div>
            <div className="ActionButtons">
              <TransferButton2 disabled={true}/>
            </div>
          </div>

        </div>
      )
    }
    else return(
    */
