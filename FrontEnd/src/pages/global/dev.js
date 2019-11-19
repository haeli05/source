import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import Comment from '../../assets/svg/comment.svg'
import ReactSVG from 'react-svg'
import Grid from '@material-ui/core/Grid'

class Dev extends React.Component {
  render () {
    return (
      <div className='Four0FourPage'>
      <Typography variant='h1'>Your personal dev team at $1000/mo*</Typography>
      <Typography variant='caption'>*Conditions apply</Typography>
      <Typography variant='body' style={{marginTop:"5vh", marginBottom:"9vh"}}>
      Finding developers shouldn't be rocket surgery.
      <br />
      Work within your budget, with top tier developers, on demand, anytime, anywhere.
      <br /><br />
      Work with our team of developers from around the world to bring your ideas to life.</Typography>


      <div className='Offers'>
      <Typography className='SectionTitle' variant='h3' style={{marginBottom:"2vh"}}>Options</Typography>
      <Typography variant='subtitle2' style={{marginBottom:"2vh"}}>Different price points for different products!</Typography>
      <br /><br /><br />
      <Grid
      container
      spacing={4}
      direction="row"
      justify="center"
      alignItems="flex-start"
      >
        <Grid item xs={12} sm={12} md={4} className="Vertical ResponsiveMidPaddingBottom">
          <Typography variant="h5">$1000 Dev team</Typography>
          <Typography variant="overline">Cost:</Typography>

          <Typography variant="subtitle1">$1000 / mo</Typography>
          <ul style={{textAlign:"left"}}>
            <li>
            <Typography variant="h6">Your custom dev team with a personal CTO</Typography>
            </li>
            <li>
            <Typography variant="body2">Work with a team of developers, from full stack devs, designers, marketeers and more.</Typography>
            </li>
            <li>
            <Typography variant="body2">Limited to 12 hours of work per week. Suitable for smaller projects and apps. Perfect for individuals and small businesses.</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="Vertical ResponsiveMidPaddingBottom">
          <Typography variant="h5">$5000 Elite team</Typography>
          <Typography variant="overline">Cost:</Typography>
          <Typography variant="subtitle1">$499</Typography>
          <ul style={{textAlign:"left"}}>
          <li>
          <Typography variant="h6">Your custom dev team with a personal CTO</Typography>
          </li>
          <li>
          <Typography variant="body2">Work with a team of developers, from full stack devs, designers, marketeers and more.</Typography>
          </li>
          <li>
          <Typography variant="body2">Limited to 60 hours of work per week. Suitable for medium sized projects and apps.</Typography>
          </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="Vertical ResponsiveMidPaddingBottom">
          <Typography variant="h5">Bespoke</Typography>
          <Typography variant="overline">Cost:</Typography>
          <Typography variant="subtitle1">Varies</Typography>
          <ul style={{textAlign:"left"}}>
          <li>
          <Typography variant="h6">Your custom dev team with a personal CTO</Typography>
          </li>
          <li>
          <Typography variant="body2">Work with a team of developers, from full stack devs, designers, marketeers and more.</Typography>
          </li>
          </ul>
        </Grid>
      </Grid>

      <Fab
      style={{marginTop:"4vh"}}
        variant='extended'
        size='large'
        color='secondary'
        className='TodoButton'
        href='/getstarted'
      >
        <ReactSVG src={Comment} className='ReactSVGIcon Icon25 LeftIcon' />
    Contact Us
  </Fab>

      </div>
      </div>
    )
  }
}
export default Dev
