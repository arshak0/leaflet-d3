import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.scss';
import MultiLineChart from "./components/MultiLineChart";
import FuelChart from './components/FuelChart';
import SpeedChart from './components/SpeedChart';
import MapLeaflet from './components/MapLeaflet';
import MultiLineChartLegend from './components/MultiLineChartLegend';

const array_for_fuel=[
  [38,38,37,36,38,32,25,21,20,22,21,20,19,19,19,20,17,20,22,24,27,28,30,29,31,30,30,29,29,27,23,22,20,18,16,14,12,10,8,6,5,6,5,6,7,6,6,7,7,5,8,10,12,16,17,19,21,22,24,26,24,24,25,25,23,27,28,32,37],
  [5,3,4,5,3,3,5,5,8,5,10,7,14,16,18,17,17,15,13,12,11,12,12,10,9,14,18,19,23,24,24,23,25,27,25,21,19,17,15,14,14,13,15,14,13,15,12,11,7,8,7,9,8,8,12,15,16,17,21,19,23,24,25,24,23,20,17,16,15,14,15,16,15,16,12,11,19,8,7],
  [33,32,30,28,26,25,24,26,25,26,17,15,14,13,11,8,4,0,0,0,0,0,0,24,23,24,29,18,17,16,18,17,15,18,25,26,28,29,24,26,27,26,26,26,27,27,26,25,26,18,19,14,13,5,3,0,0,0,0,15,14,13,18,25,24,25,26,17,16,15,10,6,3,0,0,0,25,27,32],
  [21,22,16,22,26,20,19,18,19,18,20,18,18,18,18,16,16,16,16,16,15,15,15,15,15,15,15,15,15,15,16,16,16,16,14,14,14,14,15,18,18,17,18,18,18,18,18,13,19,22,28,26,30,27,25,23,20,20,20,20,20,19,18,19,24,27,29,30,25,27,23,20],
  [34, 34, 33, 32, 34, 28, 21, 17, 16, 18, 17, 16, 15, 15, 15, 16, 13, 16, 18, 20, 23, 24, 26, 25, 27, 26, 26, 25, 25, 23, 19, 18, 16, 14, 12, 10, 8, 6, 4, 2, 1, 2, 1, 2, 3, 2, 2, 3, 3, 1, 4, 6, 8, 12, 13, 15, 17, 18, 20, 22, 20, 20, 21, 21, 19, 23, 24, 28, 33],
  [5, 3, 4, 5, 3, 3, 5, 5, 8, 5, 10, 7, 14, 16, 18, 17, 17, 15, 13, 12, 11, 12, 12, 10, 9, 14, 18, 19, 23, 24, 24, 23, 25, 27, 25, 21, 19, 17, 15, 14, 14, 13, 15, 14, 13, 15, 12, 11, 7, 8, 7, 9, 8, 8, 12, 15, 16, 17, 21, 19, 23, 24, 25, 24, 23, 20, 17, 16, 15, 14, 15, 16, 15, 16, 12, 11, 19, 8, 7],
  [26, 25, 23, 21, 19, 18, 17, 19, 18, 19, 10, 8, 7, 6, 4, 1, 3, 7, 7, 7, 7, 7, 7, 17, 16, 17, 22, 11, 10, 9, 11, 10, 8, 11, 18, 19, 21, 22, 17, 19, 20, 19, 19, 19, 20, 20, 19, 18, 19, 11, 12, 7, 6, 2, 4, 7, 7, 7, 7, 8, 7, 6, 11, 18, 17, 18, 19, 10, 9, 8, 3, 1, 4, 7, 7, 7, 18, 20, 25],
  [27, 26, 24, 22, 20, 19, 18, 20, 19, 20, 11, 9, 8, 7, 5, 2, 2, 6, 6, 6, 6, 6, 6, 18, 17, 18, 23, 12, 11, 10, 12, 11, 9, 12, 19, 20, 22, 23, 18, 20, 21, 20, 20, 20, 21, 21, 20, 19, 20, 12, 13, 8, 7, 1, 3, 6, 6, 6, 6, 9, 8, 7, 12, 19, 18, 19, 20, 11, 10, 9, 4, 0, 3, 6, 6, 6, 19, 21, 26],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [28, 28, 25, 27, 30, 24, 20, 18, 18, 18, 19, 17, 17, 17, 17, 16, 15, 16, 17, 18, 19, 20, 21, 20, 21, 21, 21, 20, 20, 19, 18, 17, 16, 15, 13, 12, 11, 10, 10, 10, 10, 10, 10, 10, 11, 10, 10, 8, 11, 12, 16, 16, 19, 20, 19, 19, 19, 19, 20, 21, 20, 20, 20, 20, 22, 25, 27]
];

const array_for_speed=[
  [38,38,37,36,38,32,25,21,20,22,21,20,19,19,19,20,17,20,22,24,27,28,30,29,31,30,30,29,29,27,23,22,20,18,16,14,12,10,8,6,5,6,5,6,7,6,6,7,7,5,8,10,12,16,17,19,21,22,24,26,24,24,25,25,23,27,28,32,37],
  [5,3,4,5,3,3,5,5,8,5,10,7,14,16,18,17,17,15,13,12,11,12,12,10,9,14,18,19,23,24,24,23,25,27,25,21,19,17,15,14,14,13,15,14,13,15,12,11,7,8,7,9,8,8,12,15,16,17,21,19,23,24,25,24,23,20,17,16,15,14,15,16,15,16,12,11,19,8,7],
  [33,32,30,28,26,25,24,26,25,26,17,15,14,13,11,8,4,0,0,0,0,0,0,24,23,24,29,18,17,16,18,17,15,18,25,26,28,29,24,26,27,26,26,26,27,27,26,25,26,18,19,14,13,5,3,0,0,0,0,15,14,13,18,25,24,25,26,17,16,15,10,6,3,0,0,0,25,27,32],
  [21,22,16,22,26,20,19,18,19,18,20,18,18,18,18,16,16,16,16,16,15,15,15,15,15,15,15,15,15,15,16,16,16,16,14,14,14,14,15,18,18,17,18,18,18,18,18,13,19,22,28,26,30,27,25,23,20,20,20,20,20,19,18,19,24,27,29,30,25,27,23,20],
  [34, 34, 33, 32, 34, 28, 21, 17, 16, 18, 17, 16, 15, 15, 15, 16, 13, 16, 18, 20, 23, 24, 26, 25, 27, 26, 26, 25, 25, 23, 19, 18, 16, 14, 12, 10, 8, 6, 4, 2, 1, 2, 1, 2, 3, 2, 2, 3, 3, 1, 4, 6, 8, 12, 13, 15, 17, 18, 20, 22, 20, 20, 21, 21, 19, 23, 24, 28, 33],
  [5, 3, 4, 5, 3, 3, 5, 5, 8, 5, 10, 7, 14, 16, 18, 17, 17, 15, 13, 12, 11, 12, 12, 10, 9, 14, 18, 19, 23, 24, 24, 23, 25, 27, 25, 21, 19, 17, 15, 14, 14, 13, 15, 14, 13, 15, 12, 11, 7, 8, 7, 9, 8, 8, 12, 15, 16, 17, 21, 19, 23, 24, 25, 24, 23, 20, 17, 16, 15, 14, 15, 16, 15, 16, 12, 11, 19, 8, 7],
  [26, 25, 23, 21, 19, 18, 17, 19, 18, 19, 10, 8, 7, 6, 4, 1, 3, 7, 7, 7, 7, 7, 7, 17, 16, 17, 22, 11, 10, 9, 11, 10, 8, 11, 18, 19, 21, 22, 17, 19, 20, 19, 19, 19, 20, 20, 19, 18, 19, 11, 12, 7, 6, 2, 4, 7, 7, 7, 7, 8, 7, 6, 11, 18, 17, 18, 19, 10, 9, 8, 3, 1, 4, 7, 7, 7, 18, 20, 25],
  [27, 26, 24, 22, 20, 19, 18, 20, 19, 20, 11, 9, 8, 7, 5, 2, 2, 6, 6, 6, 6, 6, 6, 18, 17, 18, 23, 12, 11, 10, 12, 11, 9, 12, 19, 20, 22, 23, 18, 20, 21, 20, 20, 20, 21, 21, 20, 19, 20, 12, 13, 8, 7, 1, 3, 6, 6, 6, 6, 9, 8, 7, 12, 19, 18, 19, 20, 11, 10, 9, 4, 0, 3, 6, 6, 6, 19, 21, 26],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [28, 28, 25, 27, 30, 24, 20, 18, 18, 18, 19, 17, 17, 17, 17, 16, 15, 16, 17, 18, 19, 20, 21, 20, 21, 21, 21, 20, 20, 19, 18, 17, 16, 15, 13, 12, 11, 10, 10, 10, 10, 10, 10, 10, 11, 10, 10, 8, 11, 12, 16, 16, 19, 20, 19, 19, 19, 19, 20, 21, 20, 20, 20, 20, 22, 25, 27]
];

const temperature_data=[
  [2.9,3,3,2.9,2.8,2.9,2.8,2.9,2.8,3,2.1,2.2,2.5,2.4,2.8,2.9,3,2.8,2.9,2.8],
  [2.7,2.8,2.9,3,2.7,2.9,2.8,2.8,2.7,2.7,2.7,2.8,2.9,3,2.9,2.8,2.8,3,2.9,2.9],
  [2.9,2.9,2.9,2.9,2.9,2.9,2.8,2.9,2.9,2.8,2.9,2.9,2.8,2.9,2.9,2.9,2.9,2.8,2.9,2.9],
  [3,3,2.8,2.9,2.6,2.9,2.8,2.8,3,2.6,2.6,2.7,2.8,2.7,2.9,2.9,2.9,2.8,2.7,2.8],
  [2.8,2.8,2.7,2.8,2.9,2.6,2.8,3,2.9,2.8,2.7,2.6,2.9,3,2.7,2.8,2.9,2.8,2.9,2.8],
  [2.8,2.8,2.9,2.8,2.9,2.8,2.9,2.4,2.1,2.0,2.1,2.4,2.2,2.2,2.2,2.5,2.7,2.8,2.9,2.8],
  [3,3,3,3,3,2.9,2.9,3,2.9,2.9,2.9,2.9,2.9,3,3,3,3,3,2.9,2.9],
  [2.8,2.8,2.8,2.8,2.8,2.8,2.7,2.8,2.7,2.8,2.8,2.8,2.7,2.7,2.8,2.8,2.8,2.8,2.7,2.7],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2.6,2.6,2.7,2.6,2.7,2.6,2.6,2.6,2.7,2.6,2.6,2.7,2.7,2.6,2.6,2.6,2.7,2.7,2.6,2.7]
];

class App extends React.Component {
  render() {
    return (
      <div>
      
      <h1 className="headline">BigMatFleet loT Sensors Dashboard</h1>

      <div id="map-container" className="map_container_class_div">
        <div className="headline_div">
          <h2 className="headline_h2 d3_chart_h2" >Trucks location</h2>
          <span className="status success"><i className="pulse"></i>Connected</span>
        </div>
        <div id="map-container" className="map_container_class">
          <MapLeaflet />
        </div>
      </div>
      
      <div className="all_charts">
        <div className="chart_row">
          <div className="d3_chart_div">
            <div className="headline_div">
              <h2 className="headline_h2 d3_chart_h2" >Temperature inside refrigerators</h2>
              <span className="status success"><i className="pulse"></i>Connected</span>
            </div>
            <div className="d3_charts_flex" >
              <div className="d3_chart">
                <MultiLineChart temperature_data={temperature_data}/>
              </div>
              <div className="d3_chart_legend">
                <MultiLineChartLegend />
              </div>
            </div>
          </div>
        </div>

        <div className="map">
          
        </div>

        <div className="chart_row">
          <div className="arrow_chart">
            <div className="headline_div">
              <h2 className="headline_h2" >Speed, KPH</h2>
              <span className="status success"><i className="pulse"></i>Connected</span>
            </div>
            <div className="arrow_charts">
              { [1,2,3,4,5,6,7,8,9,10].map( index => <SpeedChart speed_array={array_for_speed} sensorId={index} />  ) }
            </div>
          </div>
        </div>

        <div className="chart_row">
          <div className="arrow_chart">
            <div className="headline_div">
              <h2 className="headline_h2" >Fuel Consumption, L/100km</h2>
              <span className="status success"><i className="pulse"></i>Connected</span>
            </div>
            <div className="arrow_charts">
            { [1,2,3,4,5,6,7,8,9,10].map( index => <FuelChart fuel_array={array_for_fuel} sensorId={index} />  ) }
            </div>
          </div>
        </div>

      </div>

    </div>
    
    );
  }
}

export default App;
