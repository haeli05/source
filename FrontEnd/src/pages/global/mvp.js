import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import Comment from '../../assets/svg/comment.svg'
import ReactSVG from 'react-svg'
import Grid from '@material-ui/core/Grid'

class MVP extends React.Component {
  render () {
    return (
      <div className='Four0FourPage'>
        <Typography variant='h1'>Build your MVP for $99*</Typography>
        <Typography variant='caption'>*Conditions apply</Typography>
        <Typography variant='body' style={{marginTop:"5vh", marginBottom:"9vh"}}>Building web apps shouldn't be rocket surgery.
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
            <Typography variant="h5">99 MVP</Typography>
            <Typography variant="overline">Cost:</Typography>

            <Typography variant="subtitle1">$99</Typography>
            <ul style={{textAlign:"left"}}>
              <li>
              <Typography variant="h6">HTML5 web apps. Perfect for apps below 25 pages.</Typography>
              </li>
              <li>
              <Typography variant="body2">*Custom features unsupported</Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className="Vertical ResponsiveMidPaddingBottom">
            <Typography variant="h5">499 App</Typography>
            <Typography variant="overline">Cost:</Typography>
            <Typography variant="subtitle1">$499</Typography>
            <ul style={{textAlign:"left"}}>
              <li>
              <Typography variant="h6">Native Mobile, desktop, or web apps apps</Typography>
              </li>
              <li>
              <Typography variant="body2">Contact Us for more details</Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className="Vertical ResponsiveMidPaddingBottom">
            <Typography variant="h5">Bespoke</Typography>
            <Typography variant="overline">Cost:</Typography>
            <Typography variant="subtitle1">Varies</Typography>
            <ul style={{textAlign:"left"}}>
              <li>
            <Typography variant="h6">Development tailored to your requirements</Typography>
              </li>
              <li>
            <Typography variant="body">Work with our broader community of developers and tech solutions providers</Typography>
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
export default MVP
