import React,{Component} from 'react';


var LineChart = require("react-chartjs").Line;
let options={
	///Boolean - Whether grid lines are shown across the chart
	 scaleShowGridLines : false,
	//String - Colour of the grid lines
	// scaleGridLineColor : "rgba(0,0,0,.05)",
	//Number - Width of the grid lines
	scaleGridLineWidth : 1,
	//Boolean - Whether to show horizontal lines (except X axis)
	 scaleShowHorizontalLines: false,
	// //Boolean - Whether to show vertical lines (except Y axis)
	 scaleShowVerticalLines: false,
	 datasetFill : false,
	 //Boolean - Whether the line is curved between points
 	bezierCurve : false,
	//Boolean - Whether to show a dot for each point
	pointDot : true,
	//Number - Radius of each point dot in pixels
	pointDotRadius : 4,
	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	pointHitDetectionRadius : 20,
	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,
	//Boolean - Whether to horizontally center the label and point dot inside the grid
	offsetGridLines : false,

};

class Wallet extends Component{
  render(){
    if(this.props.data.length===0) {
      return(<div><p>Loading</p></div>);
    }
    else return(
      <div>
        <LineChart data={this.props.data} options={options} width="600" height="250"/>
      </div>
    )
  }
}

export default Wallet;
