import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Four0FourPage extends React.Component {
  render () {
    return (
      <div className='Four0FourPage'>
        <Typography className='Four0FourPageTitle' variant='display4'>ERROR 404</Typography>
        <Typography variant='display2'>You took a left when you should have taken a right</Typography>
        <div className='Four0FourPageActions'>
          <Button variant='contained' color='primary' size='large' onClick={this.props.history.goBack}>Let's backtrack</Button>
        </div>
      </div>
    )
  }
}
export default Four0FourPage
