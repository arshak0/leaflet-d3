import React from 'react';

class FuelChart extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      currentCount: 0,
      fuel_array: []
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1500);
    this.setState({
      fuel_array: this.props.fuel_array,
      sensorId: this.props.sensorId
    });
  }

  truck_count_func() {
    document.getElementsByClassName('truck_count')[this.props.sensorId-1].innerHTML=this.state.sensorId
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
    
    
    if(this.state.fuel_array[this.props.sensorId-1][this.state.currentCount] == undefined) {
      this.setState({
        currentCount: 0
      })
    }

    var new_fuel=this.state.fuel_array[this.props.sensorId-1][this.state.currentCount];

    document.getElementsByClassName('speed')[this.props.sensorId-1].innerHTML=new_fuel;

    if (this.state.fuel_array[this.props.sensorId-1][this.state.currentCount]>=25) {
      document.getElementsByClassName('arrow')[this.props.sensorId-1].style.transform='rotate('+((new_fuel-25)/25)*121+'deg)'
    }
    else {
      document.getElementsByClassName('arrow')[this.props.sensorId-1].style.transform='rotate(-'+((25-new_fuel)/25)*121+'deg)'
    }

    this.truck_count_func()
  }
  
    render = () => (
        <div className="speedometer_block">
          <p className={'truck'}>Truck <span className={'truck_count'}></span></p>
          <img className="speedometer" src="/fuel_consumption.png"></img>
          <img className="arrow" src="/arrow_speed.png"></img>
          <p className="speed_p"><span className={'speed'}></span>, L/100km</p>
        </div>
      )

      
}

export default FuelChart;