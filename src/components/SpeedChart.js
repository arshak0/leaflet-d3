import React from 'react';

class SpeedChart extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      currentCount: 0,
      speed_array: []
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1500);
    this.setState({
      speed_array: this.props.speed_array,
      sensorId: this.props.sensorId
    });
  }

  truck_count_func() {
    document.getElementsByClassName('truck_count_speed')[this.props.sensorId-1].innerHTML=this.state.sensorId
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

    var new_speed=this.state.speed_array[this.props.sensorId-1][this.state.currentCount]*3;

    document.getElementsByClassName('speed_speed')[this.props.sensorId-1].innerHTML=new_speed;

    if (this.state.speed_array[this.props.sensorId-1][this.state.currentCount]>=120) {
      document.getElementsByClassName('arrow_speed')[this.props.sensorId-1].style.transform='rotate('+((new_speed-120)/120)*115+'deg)'
    }
    else {
      document.getElementsByClassName('arrow_speed')[this.props.sensorId-1].style.transform='rotate(-'+((120-new_speed)/120)*115+'deg)'
    }

    this.truck_count_func()
  }
  
    render = () => (
        <div className="speedometer_block">
          <p className={'truck'}>Truck <span className={'truck_count_speed'}></span></p>
          <img className="speedometer" src="/speedometer.png"></img>
          <img className="arrow_speed" src="/arrow_speed.png"></img>
          <p className="speed_p"><span className={'speed_speed'}></span>, KPH</p>
        </div>
      )

      
}

export default SpeedChart;