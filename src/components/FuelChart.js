import React from 'react';

let half_speedometer = 25;

class FuelChart extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      currentCount: 0,
      fuel_array: [],
      sensorId: null,
      ...props
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1500);
  }

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
    
    if(this.state.fuel_array[this.props.sensorId-1][this.state.currentCount] == undefined) {
      this.setState({
        currentCount: 0
      })
    }
  }
  
    render = () => (
        <div className="speedometer_block">
          <p className={'truck'}>Truck <span className={'truck_count'}>{this.state.sensorId}</span></p>
          <img className="speedometer" src="/fuel_consumption.png"></img>
          <img className="arrow" src="/arrow_speed.png" style={
            this.state.fuel_array[0] ? 
            {transform: 'rotate('+((this.state.fuel_array[this.state.sensorId-1][this.state.currentCount]-half_speedometer)/half_speedometer)*119+'deg)'}
            : {transform: 'rotate(0deg)'}
          }></img>
          <p className="speed_p"><span className={'speed'}>{
            this.state.fuel_array[0] ? this.state.fuel_array[this.state.sensorId-1][this.state.currentCount] : '-'
          }</span>, L/100km</p>
        </div>
      )

      
}

export default FuelChart;