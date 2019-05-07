import React from 'react'
// Material UI
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
// MISC
import { Link } from 'react-router-dom'

class AppCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: this.props.image ? this.props.image : 'https://d1ic4altzx8ueg.cloudfront.net/finder-us/wp-uploads/2018/01/quantstamp.png',
      price: this.props.price ? this.props.price : 'Price',
      title: this.props.title ? this.props.title : 'Title',
      description: this.props.description ? this.props.description : 'Description',
      url: this.props.url ? this.props.url : 'URL',
      merchant: this.props.merchant ? this.props.merchant : 'Merchant'
    }
  }

  render () {
    return (
      <Card className='AppCard'>
        <CardActionArea>
          <CardMedia

            component={Link} to={`/app/quantstamp`}
            alt={this.state.title}
            height='140'
            image={this.state.image}
            title={this.state.title}
            className='Image'
          />
          <CardContent>
            <Typography gutterBottom variant='h4' component={Link} to={`/app/quantstamp`}>
              {this.state.title}
            </Typography>
            <Typography variant='subtitle1'>
              {this.state.description}
            </Typography>
            <Typography variant='subheading'>
              {this.state.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
           Buy
          </Button>
          <Button size='small' color='primary'>
           Message
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default AppCard
