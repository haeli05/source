import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'

class RepoContracts extends Component {
  render () {
    return (
      <div className='RepoContracts'>
        <div className='Role'>
          <div className='RoleHeader'>
            <Typography variant='display1'>Default</Typography>
          </div>
          <div className='RoleRep'>
            <Typography variant='overline'>Rep Required: 0</Typography>
          </div>
          <div className='RoleActions'>
            <div className='Table'>
              <div className='Row'>
                <div className='Action'>
                  <Typography variant='overline' className='Title'>Action</Typography>
                </div>
                <div>
                  <Typography variant='overline' className='Title'>REP</Typography>
                </div>
                <div>
                  <Typography variant='overline' className='Title'>SRC</Typography>
                </div>
              </div>
              <div className='Row' style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid lightgrey', paddingTop: '5px', paddingBottom: '5px' }}>
                <div className='Action'>
                  <Typography variant='overline'>Star</Typography>
                </div>
                <div>
                  <Typography variant='overline'>1</Typography>
                </div>
                <div>
                  <Typography variant='overline'>2</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(RepoContracts)
