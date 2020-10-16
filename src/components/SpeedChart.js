import React from 'react';

let half_speedometer = 120;

class SpeedChart extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      currentCount: 0,
      speed_array: [],
      sensorId: null,
      ...props
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1500);
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
    
    if(this.state.speed_array[this.props.sensorId-1][this.state.currentCount] == undefined) {
      this.setState({
        currentCount: 0
      })
    }
  }
  
    render = () => (
        <div className="speedometer_block">
          <p className={'truck'}>Truck <span className={'truck_count_speed'}>{this.state.sensorId}</span></p>
          <img className="speedometer" src="/speedometer.png"></img>
          <img className="arrow_speed" src="/arrow_speed.png" style={
            this.state.speed_array[0] ? 
            {transform: 'rotate('+((this.state.speed_array[this.state.sensorId-1][this.state.currentCount]*3-half_speedometer)/half_speedometer)*114+'deg)'}
            : {transform: 'rotate(0deg)'}
          }></img>
          <p className="speed_p"><span className={'speed_speed'}>{
            this.state.speed_array[0] ? this.state.speed_array[this.state.sensorId-1][this.state.currentCount]*3 : '-'
          }</span>, KPH</p>
        </div>
      )

      
}

export default SpeedChart;