import React, { Component } from 'react'

class WalletPageTransactions extends Component {
  render () {
    if (this.props.data.length === 0) {
      return (<div><p>Loading</p></div>)
    } else {
      return (
        <div>
          {this.props.data.map(payments => {
            return (<div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: 'solid 1px #dfdfdf', paddingBottom: '5px', paddingTop: '10px' }}><div>{payments.accs.repository}</div><div>{payments.amount}</div></div>)
          })}
        </div>
      )
    }
  }
}

export default WalletPageTransactions
